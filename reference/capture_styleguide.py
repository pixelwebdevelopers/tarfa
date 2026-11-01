import subprocess
import os

edge_paths = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe"
]

browser = None
for p in edge_paths:
    if os.path.exists(p):
        browser = p
        break

print("Found browser:", browser)
if browser:
    os.makedirs("reference/screenshots", exist_ok=True)
    
    # EN Desktop
    cmd1 = [browser, "--headless=new", "--disable-gpu", "--window-size=1440,2400", "--screenshot=reference/screenshots/styleguide-en-desktop.png", "http://localhost:3000/en/styleguide"]
    subprocess.run(cmd1)
    
    # AR Desktop
    cmd2 = [browser, "--headless=new", "--disable-gpu", "--window-size=1440,2400", "--screenshot=reference/screenshots/styleguide-ar-desktop.png", "http://localhost:3000/ar/styleguide"]
    subprocess.run(cmd2)

    # EN Mobile
    cmd3 = [browser, "--headless=new", "--disable-gpu", "--window-size=390,2000", "--screenshot=reference/screenshots/styleguide-en-mobile.png", "http://localhost:3000/en/styleguide"]
    subprocess.run(cmd3)

    # AR Mobile
    cmd4 = [browser, "--headless=new", "--disable-gpu", "--window-size=390,2000", "--screenshot=reference/screenshots/styleguide-ar-mobile.png", "http://localhost:3000/ar/styleguide"]
    subprocess.run(cmd4)

    print("Captured all styleguide screenshots successfully!")

