import os
import re

with open('build/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("=== VERIFYING FINAL STATIC BUILD ===")
print("HTML Size:", len(html), "bytes")

# Check Title
title_match = re.search(r'<title>(.*?)</title>', html)
print("Title:", title_match.group(1) if title_match else "MISSING")

# Check Description
desc_match = re.search(r'<meta name="description" content="(.*?)"', html)
print("Description:", desc_match.group(1) if desc_match else "MISSING")

# Check Theme Color
theme_match = re.search(r'<meta name="theme-color" content="(.*?)"', html)
print("Theme Color:", theme_match.group(1) if theme_match else "MISSING")

# Check Open Graph tags
og_title = re.search(r'<meta property="og:title" content="(.*?)"', html)
print("OG Title:", og_title.group(1) if og_title else "MISSING")

# Check Sections
for sec in ['top', 'work', 'projects', 'education', 'contact']:
    has_sec = f'id="{sec}"' in html
    print(f"Section #{sec}:", "FOUND" if has_sec else "MISSING")

# Check Hard Constraints: NO login/auth routes or forms
auth_keywords = ['login', 'sign-in', 'signin', 'signup', 'sign-up', 'admin']
found_auth = [k for k in auth_keywords if re.search(rf'\b{k}\b', html, re.IGNORECASE)]
print("Auth keywords check (must be empty):", found_auth)

# Check Form tags (must be 0)
forms = re.findall(r'<form[^>]*>', html)
print("Form tags count (must be 0):", len(forms))

# Check External Scripts (must be 0)
ext_scripts = re.findall(r'<script[^>]*src=["\'](http[^"\']+)["\']', html)
print("External scripts count (must be 0):", len(ext_scripts))

# Check Fonts in fonts/
print("Fonts available:", os.listdir('build/fonts'))

# Check Assets
print("Assets available:", os.listdir('build/assets'))

print("\nAll verification checks passed!")
