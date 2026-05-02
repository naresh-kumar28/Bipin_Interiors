import os
import re

output_dir = r"d:\Programs\django\Class\Bipin_Interiors\frontend\src\pages"
files = ["About.jsx", "Contact.jsx", "Home.jsx", "PrivacyPolicy.jsx", "ReturnRefund.jsx", "Services.jsx", "TermsCondition.jsx", "Portfolio.jsx"]

for file in files:
    filepath = os.path.join(output_dir, file)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace <a href="/something" ...> to <Link to="/something" ...>
        # And </a> to </Link>
        # Be careful not to replace external links
        
        def replace_a_tag(match):
            attrs = match.group(1)
            # Find href in attrs
            href_match = re.search(r'href="(/.*?)"', attrs)
            if href_match:
                # it's an internal link
                new_attrs = re.sub(r'href="(/.*?)"', r'to="\1"', attrs)
                return f'<Link{new_attrs}>'
            # If href="#something", keep it as a, or if it's external, keep as a
            return match.group(0)
            
        new_content = re.sub(r'<a([^>]+)>', replace_a_tag, content)
        
        # Now replace </a> with </Link> but only if we replaced the corresponding <a>
        # Actually this is hard with regex. 
        # Simpler: just use Link for all internal and # links, or just leave as is since react handles standard a tags ok, just with reload.
        pass
