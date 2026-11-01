import urllib.request

def check_endpoint(url):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp:
            data = resp.read().decode('utf-8', errors='ignore')
            print(f"[{resp.status}] {url} -> Content length: {len(data)}")
            print("Preview snippet:\n" + data[:300])
            print("="*60)
            return data
    except Exception as e:
        print(f"Failed {url}: {e}")
        return None

if __name__ == "__main__":
    check_endpoint("http://localhost:3000/robots.txt")
    check_endpoint("http://localhost:3000/sitemap.xml")
    html = check_endpoint("http://localhost:3000/en")
    if html and "application/ld+json" in html:
        print("JSON-LD found in /en HTML!")
    else:
        print("WARNING: JSON-LD not found!")
