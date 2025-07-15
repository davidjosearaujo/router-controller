#!/usr/bin/env python3

# Copyright 2025 David Araújo
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     https://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import json
import hmac
import hashlib
import requests
import dicttoxml
import xml.etree.ElementTree as ET

# --- Configuration Constants ---
ROUTER_IP = ""
USERNAME = ""  # Change this to your router's username
PASSWORD = ""   # Change this to your router's password
RSA_LOGIN_MODE = 1

# ---- Protocol Constants --- DON'T CHANGE THESE UNLESS YOU KNOW WHAT YOU'RE DOING!
TCP = "6"   
UDP = "17"
TCP_UDP = "0"

# --- Global Variables (will be updated during execution) ---
REQUEST_TOKENS = []
ENCPUBKEY_E = None
ENCPUBKEY_N = None

HEADERS = {
    "_ResponseSource": "Broswer",
    "X-Requested-With": "XMLHttpRequest"
}

# --- Utility Functions ---

def _xml_to_dict(xml_string: str) -> dict:
    """
    Convert XML string to a nested dictionary, handling repeated tags as lists.
    """
    def recurse_xml_to_dict(element):
        children = list(element)
        if not children:
            return element.text

        result = {}
        for child in children:
            child_result = recurse_xml_to_dict(child)

            # Check if the tag is already in the result
            if child.tag in result:
                # If already a list, append to it; otherwise, create a list
                if isinstance(result[child.tag], list):
                    result[child.tag].append(child_result)
                else:
                    result[child.tag] = [result[child.tag], child_result]
            else:
                result[child.tag] = child_result

        return result

    # Parse XML string
    root = ET.fromstring(xml_string)
    root_dict = recurse_xml_to_dict(root)

    return root_dict

def _dict_to_xml(data: dict) -> str:
    """Convert nested dictionary to an XML string."""
    return dicttoxml.dicttoxml(data, custom_root='request', attr_type=False).decode('utf-8')

def _post_request(url: str, data: dict) -> dict | None:
    """
    Send a POST request to the specified URL with the given data.
    Returns the response as a dictionary.
    """
    global REQUEST_TOKENS, HEADERS

    if len(REQUEST_TOKENS) > 0:
        HEADERS["__RequestVerificationToken"] = REQUEST_TOKENS.pop(0)

    try:
        response = requests.post(
            url,
            headers=HEADERS,
            data=_dict_to_xml(data)
        )
        response.raise_for_status()

        if "error" in response.text:
            print("[!!] Error in authentication response:", response.text)
            return None

        if len(REQUEST_TOKENS) == 0 and response.headers.get('__RequestVerificationToken'):
            if response.headers.get('__RequestVerificationTokenone', None):
                REQUEST_TOKENS.append(response.headers.get('__RequestVerificationTokenone'))
            if response.headers.get('__RequestVerificationTokentwo', None):
                REQUEST_TOKENS.append(response.headers.get('__RequestVerificationTokentwo'))
            REQUEST_TOKENS += response.headers.get('__RequestVerificationToken').split("#")

        if response.headers.get('Set-Cookie'):
            HEADERS["Cookie"] = response.headers.get('Set-Cookie').split(';')[0]

        return _xml_to_dict(response.text)
    except requests.RequestException as e:
        print(f"Error in POST request: {e}")
        return None

# --- API Interaction Functions ---

def refresh_token() -> bool:
    """
    Fetches a new token and updates the Cookie and __RequestVerificationToken headers.
    Returns (cookie, request_verification_token) on success, None on failure.
    """
    url = f"http://{ROUTER_IP}/api/webserver/token"
    try:
        print("[+] Getting token...")
        response_raw = requests.get(url)
        response_raw.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)

        response_data = _xml_to_dict(response_raw.text) # _xml_to_dict now returns the inner object
        
        REQUEST_TOKENS.append(response_data.get('token', '')[32:])
        HEADERS["Cookie"] = response_raw.headers.get('Set-Cookie', '').split(';')[0]

        return True
    except requests.RequestException as e:
        print(f"Error requesting token: {e}")
        return False

def send_challenge() -> tuple[str, str, str, str, str] | None:
    """
    Sends the initial challenge request to the router.
    Returns (salt, iterations, firstNonce, serverNonce, modeSelected) on success, None on failure.
    """
    url = f"http://{ROUTER_IP}/api/user/challenge_login"
    first_nonce = str(os.urandom(33).hex()[:64])

    first_post_data = {
        "username": USERNAME, 
        "firstnonce": first_nonce,
        "mode": RSA_LOGIN_MODE
    }
    
    try:
        print("[+] Sending challenge...")
        response_data = _post_request(url, first_post_data)
        return (response_data.get("salt", ""), 
                response_data.get("iterations", ""), 
                first_nonce, 
                response_data.get("servernonce", ""), 
                response_data.get("modeselected", ""))
    except requests.RequestException as e:
        print(f"Error sending challenge: {e}")
        return None

def send_response(response_post_data: dict) -> tuple[str, str, str, str] | None:
    """
    Sends the authentication response to the router.
    Returns (rsan, rsae, serverSignature, rsaPublicKeySignature) on success, None on failure.
    """
    url = f"http://{ROUTER_IP}/api/user/authentication_login"

    try:
        print("[+] Sending response...")
        response_data = _post_request(url, response_post_data)
        return (response_data.get("rsan", ""), 
                response_data.get("rsae", ""), 
                response_data.get("serversignature", ""), 
                response_data.get("rsapubkeysignature", ""))
    except requests.RequestException as e:
        print(f"Error sending response: {e}")
        return None

# --- Cryptographic Proof Functions ---

def calculate_client_proof(b_salted_password: bytes, auth_msg: str) -> str:
    """Generate the client proof for the challenge-response authentication."""
    client_key = hmac.new(msg=b_salted_password, key=b"Client Key", digestmod=hashlib.sha256).digest()
    stored_key = hashlib.sha256(client_key).digest()
    client_signature = hmac.new(msg=stored_key, key=auth_msg.encode("utf-8"), digestmod=hashlib.sha256).digest()
    proof = bytes(x ^ y for x, y in zip(client_key, client_signature))
    return proof.hex()

def calculate_server_proof(b_salted_password: bytes, auth_msg: str) -> str:
    """Generate the server proof for the challenge-response authentication."""
    server_key = hmac.new(msg=b_salted_password, key=b"Server Key", digestmod=hashlib.sha256).digest()
    server_signature = hmac.new(msg=server_key, key=auth_msg.encode("utf-8"), digestmod=hashlib.sha256).digest()
    return server_signature.hex()

# --- Main Execution Logic ---

def load_credentials() -> bool:
    """Loads credentials from 'credentials.json' or exits if not found."""
    global USERNAME, PASSWORD, ROUTER_IP
    if os.path.exists("credentials.json"):
        try:
            with open("credentials.json", "r") as f:
                credentials = json.load(f)
                USERNAME = credentials.get("username", USERNAME)
                PASSWORD = credentials.get("password", PASSWORD)
                ROUTER_IP = credentials.get("router_ip", ROUTER_IP)
            return True
        except json.JSONDecodeError:
            print("[-] Error decoding 'credentials.json'. Please ensure it's valid JSON.")
            return False
    else:
        print("[-] Credentials file not found. Please create 'credentials.json' with your router's credentials.")
        return False

def login():
    """Main function to orchestrate the router authentication process."""
    if not load_credentials():
        exit(1)

    print(f"""Huawei Router API Controller\nReaching router at {ROUTER_IP}\n""")

    # Step 1: Refresh Token
    if not refresh_token():
        return False

    # Step 2: Send Challenge
    challenge_data = send_challenge()
    if not challenge_data:
        return False
    salt, iterations, first_nonce, final_nonce, mode_selected = challenge_data

    # Step 3: Calculate Salted Password
    try:
        b_salt = bytes.fromhex(salt)
        auth_msg = f"{first_nonce},{final_nonce},{final_nonce}"
        b_salted_password = hashlib.pbkdf2_hmac(
            hash_name='sha256',
            password=PASSWORD.encode('utf-8'),
            salt=b_salt,
            iterations=int(iterations),
            dklen=32 
        )
    except ValueError as e:
        print(f"[-] Error in password salting: {e}")
        return False

    # Step 4: Generate Client Proof and Send Response
    client_proof_hex = calculate_client_proof(b_salted_password, auth_msg)
    final_post_data = {
       "clientproof": client_proof_hex,
       "finalnonce": final_nonce,
    }

    response_data = send_response(final_post_data)
    if response_data is None:
        return False
    rsan, rsae, server_signature_received, rsa_pubkey_signature_received = response_data

    # Step 5: Verify Server Proof and Public Key Signature
    server_proof_calculated = calculate_server_proof(b_salted_password, auth_msg)

    global ENCPUBKEY_E, ENCPUBKEY_N # Declare global to modify
    if server_signature_received == server_proof_calculated:
        public_key_signature_calculated = hmac.new(
            msg=bytes.fromhex(rsan),
            key=hmac.new(msg=b_salted_password, key=b"Server Key", digestmod=hashlib.sha256).digest(), # Re-calculate server_key
            digestmod=hashlib.sha256
        ).digest().hex()

        if rsa_pubkey_signature_received == public_key_signature_calculated:
            ENCPUBKEY_E = rsae
            ENCPUBKEY_N = rsan
            print("[+] Authentication successful!")
        else:
            print("[!!] RSA Public Key Signature mismatch. Authentication failed.")
            return False
    else:
        print("[!!] Server Proof mismatch. Authentication failed.")
        return False

    return True

def add_port_forwarding_rule(
    rule_name: str,
    external_port: int,
    internal_port: int,
    protocol: str,
    internal_ip: str,
    status: bool,
    external_port_range: int | None = None,
    internal_port_range: int | None = None
) -> bool:
    
    url = f"http://{ROUTER_IP}/api/security/virtual-servers"

    try:
        existing_rules = requests.get(
            url,
            headers=HEADERS
        )
        existing_rules.raise_for_status()
        existing_rules_data = _xml_to_dict(existing_rules.text)

        if existing_rules_data.get("Servers") is not None:
            if isinstance(existing_rules_data["Servers"],list):
                for server in existing_rules_data["Servers"]:
                    print(server)
                    if (int(server["VirtualServerLanPort"]) <= internal_port <= int(server["VirtualServerLanEndPort"])) or (int(["VirtualServerWanPort"]) <= external_port <= int(server["VirtualServerWanEndPort"])):
                        print(f"[!] Ports already in use. Please choose different ports.")
                        return False
            elif isinstance(existing_rules_data["Servers"], dict):
                server = existing_rules_data["Servers"]["Server"]
                if (int(server["VirtualServerLanPort"]) <= internal_port <= int(server["VirtualServerLanEndPort"])) or (int(server["VirtualServerWanPort"]) <= external_port <= int(server["VirtualServerWanEndPort"])):
                    print(f"[!] Ports already in use. Please choose different ports.")
                    return False  
                existing_rules_data["Servers"] = []
                existing_rules_data["Servers"].append({"Server": server})
        else:
            existing_rules_data["Servers"] = []

        existing_rules_data["Servers"].append({
            "Server":{
                "VirtualServerIPName": rule_name,
                "VirtualServerStatus": int(status),
                "VirtualServerRemoteIP": "",
                "VirtualServerWanPort": str(external_port),
                "VirtualServerWanEndPort": str(external_port_range) if external_port_range else str(external_port),
                "VirtualServerLanPort": str(internal_port),
                "VirtualServerLanEndPort": str(internal_port_range) if internal_port_range else str(internal_port),
                "VirtualServerIPAddress": internal_ip,
                "VirtualServerProtocol": protocol,
            }
        })


        del existing_rules_data["virtualserverexcludeports"]
        payload = _dict_to_xml(existing_rules_data).replace("<item>", "").replace("</item>", "")

        payload = """<?xml version="1.0" encoding="UTF-8"?><request><Servers><Server><VirtualServerIPName>wireguard</VirtualServerIPName><VirtualServerStatus>1</VirtualServerStatus><VirtualServerRemoteIP></VirtualServerRemoteIP><VirtualServerWanPort>51820</VirtualServerWanPort><VirtualServerWanEndPort>51820</VirtualServerWanEndPort><VirtualServerLanPort>51820</VirtualServerLanPort><VirtualServerLanEndPort>51820</VirtualServerLanEndPort><VirtualServerIPAddress>192.168.1.2</VirtualServerIPAddress><VirtualServerProtocol>17</VirtualServerProtocol></Server></Servers></request>"""

        response_data = _post_request(url, payload)
        
        print("[+] Port forwarding rule added successfully.")
    except requests.RequestException as e:
        print(f"[!!] Error adding port forwarding rule: {e}")
        return False

    return True

if __name__ == "__main__":
    retries = 0
    while (not login() and retries < 3):
        print("[!!] Login failed. Retrying...")
        retries += 1

    add_port_forwarding_rule(
        rule_name="wireguard",
        external_port=51821,
        internal_port=51821,
        protocol=TCP_UDP,
        internal_ip="192.168.1.2",
        status=True,
    )

