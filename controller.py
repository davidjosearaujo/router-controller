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
import hmac
import hashlib
import requests
import dicttoxml
import xml.etree.ElementTree as ET


RSA_LOGIN_MODE      = 1
ROUTER_IP           = "192.168.1.1"

USERNAME            = "admin"   # Change this to your router's username
PASSWORD            = "1234"    # Change this to your router's password

HEADERS = {
    "_ResponseSource": "Broswer",
    "X-Requested-With": "XMLHttpRequest"
}

def _xml_to_dict(xml_string):
    """Convert XML string to a nested dictionary."""
    def recurse_xml_to_dict(element):
        children = list(element)
        if not children:
            return element.text
        result = {}
        for child in children:
            result[child.tag] = recurse_xml_to_dict(child)
        return result

    root = ET.fromstring(xml_string)
    return {root.tag: recurse_xml_to_dict(root)}

def _dict_to_xml(object):
    """Convert nested dictionary to a XML string."""
    return dicttoxml.dicttoxml(object, custom_root='request',attr_type=False).decode('utf-8')

def refresh_token():
    url = f"http://{ROUTER_IP}/api/webserver/token"

    while True:
        try:
            print("[+] Getting token...")
            response_raw = requests.get(url)
            response_raw.raise_for_status()
            print("[!] Token received successfully")
            return response_raw.headers['Set-Cookie'].split(';')[0], _xml_to_dict(response_raw.text)['response']['token'][32:]
        except requests.RequestException as e:
            print(f"Error requesting token: {e}")

def send_challenge():
    url = f"http://{ROUTER_IP}/api/user/challenge_login"

    firstNonce = str(os.urandom(33).hex()[:64])

    firstPostData = {
        "username": USERNAME, 
        "firstnonce": firstNonce,
        "mode": RSA_LOGIN_MODE
    }
    
    try:
        print("[+] Sending challenge")
        response_raw = requests.post(
            url,
            headers=HEADERS,
            data=_dict_to_xml(firstPostData)
        )
        response_raw.raise_for_status()
        print(f"Challenge response:\t{response_raw.text}\n")
        HEADERS["__RequestVerificationToken"] = response_raw.headers['__RequestVerificationToken']
        response = _xml_to_dict(response_raw.text)["response"]
        print("[!] Challenge received successfully with salt, iterations, and server nonce")
        return response["salt"], response["iterations"], firstNonce, response["servernonce"], response["modeselected"]
    except requests.RequestException as e:
        print(f"Error sending challenge: {e}")
        return None

def send_response(responsePostData):
    url = f"http://{ROUTER_IP}/api/user/authentication_login"

    try:
        print("[+] Sending response")
        response_raw = requests.post(
            url,
            headers=HEADERS,
            data=_dict_to_xml(responsePostData)
        )
        response_raw.raise_for_status()
        response = _xml_to_dict(response_raw.text)["response"]
        print("[!] Response received successfully with rsan, rsae, serversignature and rsapubkeysignature")
        return response["rsan"], response["rsae"], response["serversignature"], response["rsapubkeysignature"]
    except requests.RequestException as e:
        print(f"Error sending response: {e}")
        return None

if __name__ == "__main__":

    print(f"""Huawei Router API Controller\nReaching router at {ROUTER_IP}\n""")

    HEADERS["Cookie"], HEADERS["__RequestVerificationToken"] = refresh_token()

    salt, iter, firstNonce, finalNonce, modeSelected = send_challenge()

    b_salt = bytes.fromhex(salt)
    authMsg = f"{firstNonce},{finalNonce},{finalNonce}"
    b_saltedPassword = hashlib.pbkdf2_hmac(
        hash_name='sha256',
        password=PASSWORD.encode('utf-8'),
        salt=b_salt,
        iterations=int(iter),
        dklen=32 
    )

    def client_proof() -> str:
        """Generate the client proof for the challenge-response authentication."""
        client_key = hmac.new(msg=b_saltedPassword, key="Client Key".encode('latin1'), digestmod=hashlib.sha256).digest()
        stored_key = hashlib.sha256(client_key).digest()
        client_signature = hmac.new(msg=stored_key, key=authMsg.encode("utf-8"), digestmod=hashlib.sha256).digest()
        proof = bytes(x ^ y for x, y in zip(client_key, client_signature))

        return proof.hex()    
    

    finalPostData = {
       "clientproof": client_proof(),
       "finalnonce": finalNonce,
    }

    rsan, rsae, serversignature, rsapubkeysignature = send_response(finalPostData)

    def server_proof() -> str:
        """Generate the server proof for the challenge-response authentication."""
        server_key = hmac.new(msg=b_saltedPassword, key="Server Key".encode('latin1'), digestmod=hashlib.sha256).digest()
        server_signature = hmac.new(msg=server_key, key=authMsg.encode("utf-8"), digestmod=hashlib.sha256).digest()
        return server_signature.hex()

    
    
    