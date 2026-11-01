import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

urls = ['https://www.prelectronics.com/', 'https://www.rawatindustries.com/index.html']

for url in urls:
    print(f"\n==================== {url} ====================")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            print('HTTP Status:', resp.status, 'Content length:', len(html))
            
            title_m = re.search(r'<title[^>]*>(.*?)</title>', html, re.I | re.S)
            if title_m:
                print('Title:', title_m.group(1).strip())
                
            desc_m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.I | re.S)
            if desc_m:
                print('Meta Description:', desc_m.group(1).strip())
                
            h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.I | re.S)
            clean_h1 = [re.sub(r'<[^>]+>', ' ', h).strip() for h in h1s]
            print('H1 Elements:', clean_h1[:5])
            
            h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', html, re.I | re.S)
            clean_h2 = [re.sub(r'<[^>]+>', ' ', h).strip() for h in h2s]
            print('H2 Elements:', clean_h2[:8])

            # Look for navigation
            nav_matches = re.findall(r'<nav[^>]*>(.*?)</nav>', html, re.I | re.S)
            for i, nav_html in enumerate(nav_matches[:2]):
                links = re.findall(r'<a[^>]*href=["\']([^"\']*)["\'][^>]*>(.*?)</a>', nav_html, re.I | re.S)
                clean_links = [re.sub(r'<[^>]+>', '', t).strip() for _, t in links if re.sub(r'<[^>]+>', '', t).strip()]
                print(f'Nav #{i+1} sample items ({len(clean_links)} total):', clean_links[:12])
                
            # Look for section tags or main sections
            sections = re.findall(r'<(section|div)[^>]*(?:class|id)=["\']([^"\']*(?:hero|service|product|about|proof|contact|footer|feature|client|industr)[^"\']*)["\']', html, re.I)
            print('Key Section Classes/IDs:', [s[1] for s in sections[:15]])
    except Exception as e:
        print('Error:', e)

