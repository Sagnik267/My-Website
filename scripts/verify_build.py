import os
import json
import re

print("=== 1. VERIFYING HTML OUTPUT ===")
with open('build/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("HTML Size:", len(html), "bytes")

# Title & Metadata
title_match = re.search(r'<title>(.*?)</title>', html)
print("Title:", title_match.group(1) if title_match else "MISSING")
assert title_match, "Title is required"

desc_match = re.search(r'<meta name="description" content="(.*?)"', html)
print("Description:", desc_match.group(1) if desc_match else "MISSING")
assert desc_match, "Description meta is required"

theme_match = re.search(r'<meta name="theme-color" content="(.*?)"', html)
print("Theme Color:", theme_match.group(1) if theme_match else "MISSING")
assert theme_match, "Theme color is required"

# Sections
for sec in ['top', 'work', 'projects', 'education', 'contact']:
    has_sec = f'id="{sec}"' in html
    print(f"Section #{sec}:", "FOUND" if has_sec else "MISSING")
    assert has_sec, f"Section #{sec} missing"

# Zero auth / Zero forms
auth_keywords = ['login', 'sign-in', 'signin', 'signup', 'sign-up', 'admin']
found_auth = [k for k in auth_keywords if re.search(rf'\b{k}\b', html, re.IGNORECASE)]
print("Auth keywords check (must be empty):", found_auth)
assert len(found_auth) == 0, "Unexpected auth keywords found"

forms = re.findall(r'<form[^>]*>', html)
print("Form tags count (must be 0):", len(forms))
assert len(forms) == 0, "Forms must be 0 for attack surface elimination"

ext_scripts = re.findall(r'<script[^>]*src=["\'](http[^"\']+)["\']', html)
print("External scripts count (must be 0):", len(ext_scripts))
assert len(ext_scripts) == 0, "No external scripts allowed"

# Check Source Maps (must be 0)
map_files = []
for root, _, files in os.walk('build'):
    for file in files:
        if file.endswith('.map'):
            map_files.append(os.path.join(root, file))
print("Production source map count (must be 0):", len(map_files))
assert len(map_files) == 0, "Source maps must not be emitted in production"

print("\n=== 2. VERIFYING VERCEL.JSON SECURITY HEADERS ===")
with open('vercel.json', 'r', encoding='utf-8') as f:
    vercel = json.load(f)

headers_dict = {}
for route in vercel.get('headers', []):
    if route.get('source') == '/(.*)':
        for h in route.get('headers', []):
            headers_dict[h['key']] = h['value']

required_headers = [
    'Strict-Transport-Security',
    'X-Content-Type-Options',
    'X-Frame-Options',
    'Referrer-Policy',
    'Permissions-Policy',
    'Content-Security-Policy',
    'Cross-Origin-Opener-Policy'
]

for rh in required_headers:
    val = headers_dict.get(rh)
    print(f"  {rh}:", val if val else "MISSING")
    assert val, f"Missing header: {rh}"

print("\n=== 3. VERIFYING SECURITY.TXT ===")
with open('build/.well-known/security.txt', 'r', encoding='utf-8') as f:
    sec_txt = f.read()
print("security.txt content:\n" + sec_txt.strip())
assert 'Contact:' in sec_txt and 'Expires:' in sec_txt, "security.txt must have Contact and Expires"

print("\n=== ALL SECURITY VERIFICATION CHECKS PASSED ===")
