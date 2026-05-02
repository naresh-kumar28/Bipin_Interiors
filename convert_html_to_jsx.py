import os
import re

input_dir = r"d:\Programs\django\Class\Bipin_Interiors\docx"
output_dir = r"d:\Programs\django\Class\Bipin_Interiors\frontend\src\pages"

file_mapping = {
    "about.html": "About.jsx",
    "contact_us.html": "Contact.jsx",
    "home.html": "Home.jsx",
    "privacy_policy.html": "PrivacyPolicy.jsx",
    "return_refund.html": "ReturnRefund.jsx",
    "services.html": "Services.jsx",
    "terms_condition.html": "TermsCondition.jsx",
    "work_gallery.html": "Portfolio.jsx",
}

def fix_unclosed_tags(html_content):
    # Fix <img>
    html_content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_content)
    # Fix <br>
    html_content = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_content)
    # Fix <input>
    html_content = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_content)
    # Fix <hr>
    html_content = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_content)
    return html_content

def html_to_jsx(html_content):
    # Extract <main>...</main>
    match = re.search(r'<main[^>]*>(.*?)</main>', html_content, re.DOTALL | re.IGNORECASE)
    if match:
        main_content = match.group(0)
    else:
        main_content = html_content # fallback

    # class to className
    jsx_content = re.sub(r'\bclass=', 'className=', main_content)
    
    # for to htmlFor
    jsx_content = re.sub(r'\bfor=', 'htmlFor=', jsx_content)
    
    # comments
    jsx_content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx_content, flags=re.DOTALL)
    
    jsx_content = fix_unclosed_tags(jsx_content)

    return jsx_content

for html_file, jsx_file in file_mapping.items():
    html_path = os.path.join(input_dir, html_file)
    if not os.path.exists(html_path):
        print(f"Skipping {html_file}, not found")
        continue
        
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    jsx_body = html_to_jsx(html_content)
    
    component_name = jsx_file.replace('.jsx', '')
    
    full_jsx = f"""import React from 'react'
import {{ Link }} from 'react-router-dom'

function {component_name}() {{
    return (
        {jsx_body}
    )
}}

export default {component_name}
"""
    # Quick fixes for a tags:
    # replace <a href="home.html"> with <Link to="/"> etc...
    # Actually simpler: replace <a href="..."> with standard <a href="..."> or keep them, 
    # but the user might want React routing.
    full_jsx = re.sub(r'href="home\.html"', 'href="/"', full_jsx)
    full_jsx = re.sub(r'href="about\.html"', 'href="/about"', full_jsx)
    full_jsx = re.sub(r'href="services\.html"', 'href="/services"', full_jsx)
    full_jsx = re.sub(r'href="work_gallery\.html"', 'href="/portfolio"', full_jsx)
    full_jsx = re.sub(r'href="contact_us\.html"', 'href="/contact"', full_jsx)
    full_jsx = re.sub(r'href="privacy_policy\.html"', 'href="/privacy_policy"', full_jsx)
    full_jsx = re.sub(r'href="terms_condition\.html"', 'href="/terms_condition"', full_jsx)
    full_jsx = re.sub(r'href="return_refund\.html"', 'href="/return_refund"', full_jsx)

    jsx_out_path = os.path.join(output_dir, jsx_file)
    with open(jsx_out_path, 'w', encoding='utf-8') as f:
        f.write(full_jsx)
        
    print(f"Converted {html_file} -> {jsx_file}")
