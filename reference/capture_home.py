import subprocess
import os

browser = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
abs_dir = os.path.abspath("reference/screenshots")
os.makedirs(abs_dir, exist_ok=True)

targets = [
    ("home-en-desktop.png", "1440,3600", "http://localhost:3000/en"),
    ("home-ar-desktop.png", "1440,3600", "http://localhost:3000/ar"),
    ("home-en-mobile.png", "390,3200", "http://localhost:3000/en"),
    ("home-ar-mobile.png", "390,3200", "http://localhost:3000/ar"),
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

