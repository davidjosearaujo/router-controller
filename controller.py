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

print("Huawei Router API Controller")

username = "admin"
password = "test1234"
cookie = ""

def _xml_to_dict(element):
    """Convert XML element to a dictionary."""
    return ET.fromstring(element)

def _dict_to_xml(object):
    xmlstr = '<?xml version="1.0" encoding="UTF-8"?>'
    xmlstr += dicttoxml.dicttoxml(object, custom_root='request', xml_declaration=False, attr_type=False).decode('utf-8')
    return xmlstr

"""
Step 1: Request token
"""
def request_token():
    print("GETting token...")

    url = "http://192.168.1.1/api/webserver/token"

    try:
        response = requests.get(url)
        response.raise_for_status()
        return _xml_to_dict(response.text)[0].text
    except requests.RequestException as e:
        print(f"Error requesting token: {e}")
        return None

"""
Step 2: Send Challenge
"""
def send_challenge(username):
    print("POSTing challenge...")
    firstPostData = {
        "username": username, 
        "firstNonce": str(os.urandom(33).hex()[:65]),
        "mode": 1
    }
    # TODO: Implement POST request to send challenge
    return _dict_to_xml(firstPostData) 

print(request_token())

print(send_challenge(username))
