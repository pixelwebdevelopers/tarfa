import re
from bs4 import BeautifulSoup

def analyze_site(name, filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    out = []
    out.append(f"==================================================")
    out.append(f"ANALYSIS: {name}")
    out.append(f"==================================================")
    out.append(f"Title: {soup.title.get_text(strip=True) if soup.title else 'None'}")
    
    # Meta description
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    out.append(f"Meta Description: {meta_desc['content'] if meta_desc and 'content' in meta_desc.attrs else 'None'}")
    
    # Navigation architecture
    out.append("\n--- NAVIGATION ARCHITECTURE ---")
    navs = soup.find_all(['nav', 'header'])
    seen_links = set()
    for nav in navs:
        for a in nav.find_all('a'):
            txt = a.get_text(" ", strip=True)
            href = a.get('href', '')
            if txt and len(txt) < 50 and txt not in seen_links:
                seen_links.add(txt)
                out.append(f"  * {txt} (href: {href})")
                
    # Headings hierarchy
    out.append("\n--- CONTENT / HEADING HIERARCHY ---")
    for h in soup.find_all(['h1', 'h2', 'h3', 'h4']):
        txt = h.get_text(" ", strip=True)
        if txt:
            out.append(f"  [{h.name.upper()}] {txt}")
            
    # Key layout blocks & sections
    out.append("\n--- KEY SECTIONS & DOM LANDMARKS ---")
    for el in soup.find_all(['section', 'div', 'article', 'main'], class_=True):
        classes = " ".join(el.get('class', []))
        if any(term in classes.lower() for term in ['hero', 'service', 'product', 'solution', 'about', 'contact', 'footer', 'banner', 'slider', 'client', 'industr', 'stat', 'spec', 'feature']):
            # get direct or first heading
            head = el.find(['h1', 'h2', 'h3', 'h4'])
            head_txt = f" -> Heading: '{head.get_text(strip=True)[:40]}'" if head else ""
            out.append(f"  <{el.name} class='{classes[:60]}'>{head_txt}")
            
    return "\n".join(out)

report_pr = analyze_site("PR Electronics", "reference/prelectronics.html")

# also save rawat
try:
    import urllib.request, ssl
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    req = urllib.request.Request('https://www.rawatindustries.com/index.html', headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
        with open('reference/rawat.html', 'w', encoding='utf-8') as rf:
            rf.write(r.read().decode('utf-8', errors='ignore'))
    report_rawat = analyze_site("Rawat Industries", "reference/rawat.html")
except Exception as e:
    report_rawat = f"Rawat error: {e}"

with open('reference/references_analysis.txt', 'w', encoding='utf-8') as out_f:
    out_f.write(report_pr + "\n\n" + report_rawat)

print("Analysis written to reference/references_analysis.txt")

