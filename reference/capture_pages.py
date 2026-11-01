import subprocess
import os

browser = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
abs_dir = os.path.abspath("reference/screenshots")
os.makedirs(abs_dir, exist_ok=True)

targets = [
    ("about-en-desktop.png", "1440,2400", "http://localhost:3000/en/about"),
    ("about-ar-desktop.png", "1440,2400", "http://localhost:3000/ar/about"),
    ("services-en-desktop.png", "1440,2400", "http://localhost:3000/en/services"),
    ("services-ar-desktop.png", "1440,2400", "http://localhost:3000/ar/services"),
    ("motors-en-desktop.png", "1440,2600", "http://localhost:3000/en/services/motors"),
    ("motors-ar-desktop.png", "1440,2600", "http://localhost:3000/ar/services/motors"),
    ("chiller-en-desktop.png", "1440,2600", "http://localhost:3000/en/services/chiller-compressors"),
    ("contact-en-desktop.png", "1440,2400", "http://localhost:3000/en/contact"),
    ("contact-ar-desktop.png", "1440,2400", "http://localhost:3000/ar/contact"),
    ("process-en-desktop.png", "1440,2400", "http://localhost:3000/en/process"),
]

for name, size, url in targets:
    out_path = os.path.join(abs_dir, name)
    w, h = size.split(",")
    cmd = [
        browser,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        f"--window-size={w},{h}",
        f"--screenshot={out_path}",
        url
    ]
    res = subprocess.run(cmd)
    if os.path.exists(out_path):
        print(f"Captured {name}: {os.path.getsize(out_path)} bytes")
    else:
        print(f"Failed to capture {name}")

