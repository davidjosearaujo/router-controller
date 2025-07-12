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
import requests
import dicttoxml
import xml.etree.ElementTree as ET


RSA_LOGIN_MODE      = 1
ROUTER_IP           = "192.168.1.1"

USERNAME            = "admin"
PASSWORD            = "test1234"

TOKEN               = None
SESSION_ID          = None

HEADER = {
    "_ResponseSource": "Broswer",
    "X-Requested-With": "XMLHttpRequest"
}

def _xml_to_dict(element):
    """Convert XML element to a dictionary."""
    return ET.fromstring(element)

def _dict_to_xml(object):
    return dicttoxml.dicttoxml(object, custom_root='request',attr_type=False).decode('utf-8')

"""
Step 1: Request token
"""
def refresh_token():
    print("GETting token...")

    url = f"http://{ROUTER_IP}/api/webserver/token"

    try:
        response = requests.get(url)
        response.raise_for_status()

        return response.headers['Set-Cookie'].split(';')[0], _xml_to_dict(response.text)[0].text[32:]
    except requests.RequestException as e:
        print(f"Error requesting token: {e}")
        return None

"""
Step 2: Send Challenge
"""
def send_challenge():
    print("POSTing challenge...")

    url = f"http://{ROUTER_IP}/api/user/challenge_login"

    firstPostData = {
        "username": USERNAME, 
        "firstnonce": str(os.urandom(33).hex()[:64]),
        "mode": RSA_LOGIN_MODE
    }
    
    try:
        response = requests.post(
            url,
            headers=HEADER,
            data=_dict_to_xml(firstPostData)
        )
        response.raise_for_status()
        return _xml_to_dict(response.text)
    except requests.RequestException as e:
        print(f"Error sending challenge: {e}")
        return None


if __name__ == "__main__":

    print(f"""Huawei Router API Controller\nReaching router at {ROUTER_IP}\n""")

    SESSION_ID, TOKEN = refresh_token()

    HEADER["Cookie"] = SESSION_ID
    HEADER["__RequestVerificationToken"] = TOKEN

    print(send_challenge())
