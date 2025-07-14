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
import string
import requests
import dicttoxml
import xml.etree.ElementTree as ET

# --- Configuration Constants ---
ROUTER_IP = "192.168.1.1"
USERNAME = "admin"  # Change this to your router's username
PASSWORD = "1234"   # Change this to your router's password
RSA_LOGIN_MODE = 1

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
    Convert XML string to a nested dictionary, removing the root element.
    Assumes the root element is always 'response' or similar and can be safely stripped.
    """
    def recurse_xml_to_dict(element):
        children = list(element)
        if not children:
            return element.text
        result = {}
        for child in children:
            result[child.tag] = recurse_xml_to_dict(child)
        return result

    root = ET.fromstring(xml_string)
    return recurse_xml_to_dict(root) # Modified to return the inner object directly

def _dict_to_xml(data: dict) -> str:
    """Convert nested dictionary to an XML string."""
    return dicttoxml.dicttoxml(data, custom_root='request', attr_type=False).decode('utf-8')

# --- API Interaction Functions ---

def refresh_token() -> tuple[str, str] | None:
    """
    Fetches a new token and updates the Cookie and __RequestVerificationToken headers.
    Returns (cookie, request_verification_token) on success, None on failure.
    """
    url = f"http://{ROUTER_IP}/api/webserver/token"
    try:
        print("[+] Getting token...")
        response_raw = requests.get(url)
        response_raw.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        print("[!] Token received successfully")

        cookie = response_raw.headers.get('Set-Cookie', '').split(';')[0]
        # Extract the token from the XML response
        response_data = _xml_to_dict(response_raw.text) # _xml_to_dict now returns the inner object
        token = response_data.get('token', '')[32:]
        
        return cookie, token
    except requests.RequestException as e:
        print(f"Error requesting token: {e}")
        return None

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
        print("[+] Sending challenge")
        response_raw = requests.post(
            url,
            headers=HEADERS,
            data=_dict_to_xml(first_post_data)
        )
        response_raw.raise_for_status()

        if "error" in response_raw.text:
            print("[!!] Error in challenge response:", response_raw.text)
            return None

        response_data = _xml_to_dict(response_raw.text) # _xml_to_dict now returns the inner object
        
        # Update the global HEADERS with the new request verification token
        HEADERS["__RequestVerificationToken"] = response_raw.headers.get('__RequestVerificationToken', '')
        
        print("[!] Challenge received successfully with salt, iterations, and server nonce")
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
        print("[+] Sending response")
        response_raw = requests.post(
            url,
            headers=HEADERS,
            data=_dict_to_xml(response_post_data)
        )
        response_raw.raise_for_status()

        if "error" in response_raw.text:
            print("[!!] Error in authentication response:", response_raw.text)
            return None

        response_data = _xml_to_dict(response_raw.text) # _xml_to_dict now returns the inner object

        # Update global HEADERS with new tokens and cookie
        global REQUEST_TOKENS # Declare global to modify the list
        REQUEST_TOKENS = response_raw.headers.get('__RequestVerificationToken', '').split('#')
        HEADERS["Cookie"] = response_raw.headers.get('Set-Cookie', '').split(';')[0]
        HEADERS["__RequestVerificationTokenone"] = response_raw.headers.get('__RequestVerificationTokenone', '')
        HEADERS["__RequestVerificationTokentwo"] = response_raw.headers.get('__RequestVerificationTokentwo', '')

        print("[!] Response received successfully with rsan, rsae, serversignature and rsapubkeysignature")
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

def main():
    """Main function to orchestrate the router authentication process."""
    if not load_credentials():
        exit(1)

    print(f"""Huawei Router API Controller\nReaching router at {ROUTER_IP}\n""")

    # Step 1: Refresh Token
    token_data = refresh_token()
    if token_data is None:
        exit(1)
    HEADERS["Cookie"], HEADERS["__RequestVerificationToken"] = token_data

    # Step 2: Send Challenge
    challenge_data = send_challenge()
    if challenge_data is None:
        exit(1)
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
        exit(1)

    # Step 4: Generate Client Proof and Send Response
    client_proof_hex = calculate_client_proof(b_salted_password, auth_msg)
    final_post_data = {
       "clientproof": client_proof_hex,
       "finalnonce": final_nonce,
    }

    response_data = send_response(final_post_data)
    if response_data is None:
        exit(1)
    rsan, rsae, server_signature_received, rsa_pubkey_signature_received = response_data
    
    # Step 5: Verify Server Proof and Public Key Signature
    server_proof_calculated = calculate_server_proof(b_salted_password, auth_msg)

    global ENCPUBKEY_E, ENCPUBKEY_N # Declare global to modify
    if server_signature_received == server_proof_calculated:
        public_key_signature_calculated = hmac.new(
            msg=rsan.encode('utf-8'),
            key=hmac.new(msg=b_salted_password, key=b"Server Key", digestmod=hashlib.sha256).digest(), # Re-calculate server_key
            digestmod=hashlib.sha256
        ).digest().hex()

        if rsa_pubkey_signature_received == public_key_signature_calculated:
            ENCPUBKEY_E = rsae
            ENCPUBKEY_N = rsan
            print("[!] Authentication successful!")
        else:
            print("[!!] RSA Public Key Signature mismatch. Authentication failed.")
    else:
        print("[!!] Server Proof mismatch. Authentication failed.")
    
    # Example: Fetching virtual servers after successful authentication
    try:
        virtual_servers_response = requests.get(f"http://{ROUTER_IP}/api/security/virtual-servers", headers=HEADERS)
        virtual_servers_response.raise_for_status()
        print("\n--- Port Forwarding Data ---")
        print(_xml_to_dict(virtual_servers_response.text))
    except requests.RequestException as e:
        print(f"Error fetching virtual servers: {e}")

if __name__ == "__main__":
    main()
