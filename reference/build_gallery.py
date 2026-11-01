import os

images = [
    ('Cover Top Workshop', 'Tarfa_Equipment_Maintenance_p1_0_Image6.png'),
    ('Cover Logo/Badge', 'Tarfa_Equipment_Maintenance_p1_1_Image11.png'),
    ('Cover Chiller Compressor', 'Tarfa_Equipment_Maintenance_p1_2_Image13.png'),
    ('Cover Motor', 'Tarfa_Equipment_Maintenance_p1_3_Image15.png'),
    ('About Workshop Stator', 'Tarfa_Equipment_Maintenance_p2_0_Image21.png'),
    ('Industry Plant (Steel/Cement/Govt)', 'Tarfa_Equipment_Maintenance_p3_0_Image27.png'),
    ('What We Do Rewinding', 'Tarfa_Equipment_Maintenance_p4_0_Image30.png'),
    ('What We Do Motor', 'Tarfa_Equipment_Maintenance_p4_1_Image32.png'),
    ('Motors Lineup / Stator', 'Tarfa_Equipment_Maintenance_p5_0_Image46.png'),
    ('Chiller Compressor 1', 'Tarfa_Equipment_Maintenance_p6_3_Image59.png'),
    ('Chiller Compressor 2', 'Tarfa_Equipment_Maintenance_p6_4_Image63.png'),
    ('Chiller Compressor 3', 'Tarfa_Equipment_Maintenance_p6_6_Image67.png'),
    ('Chiller Compressor 4', 'Tarfa_Equipment_Maintenance_p6_8_Image69.png'),
    ('Water Pumps (Submersible/Centrifugal)', 'Tarfa_Equipment_Maintenance_p7_0_Image73.png'),
    ('Generators / Alternators', 'Tarfa_Equipment_Maintenance_p8_1_Image79.png'),
    ('Transformer 1', 'Tarfa_Equipment_Maintenance_p8_2_Image81.png'),
    ('Transformer 2', 'Tarfa_Equipment_Maintenance_p8_3_Image82.png'),
    ('Core Testing (Workshop Tech)', 'Tarfa_Equipment_Maintenance_p9_1_Image87.png'),
    ('Core Cleaning & Re-varnishing', 'Tarfa_Equipment_Maintenance_p9_2_Image89.png'),
    ('Core Spot Welding', 'Tarfa_Equipment_Maintenance_p9_3_Image91.png'),
    ('Client Logos/Emblems 1', 'Tarfa_Equipment_Maintenance_p10_3_Image100.png'),
    ('Client Logos/Emblems 2', 'Tarfa_Equipment_Maintenance_p10_4_Image102.png'),
    ('Contact Workshop View 1', 'Tarfa_Equipment_Maintenance_p11_0_Image114.png'),
    ('Contact Workshop View 2', 'Tarfa_Equipment_Maintenance_p11_1_Image116.png')
]

html = ['<!DOCTYPE html><html><head><meta charset="utf-8"><title>Tarfa Extracted Assets</title><style>body{font-family:sans-serif;background:#111;color:#eee;padding:20px;} .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;} .card{background:#222;border:1px solid #444;border-radius:4px;padding:12px;} img{max-width:100%;height:180px;object-fit:contain;background:#333;display:block;margin-bottom:8px;} h3{font-size:14px;margin:0 0 4px 0;} p{font-size:12px;color:#aaa;margin:0;font-family:monospace;}</style></head><body><h1>Tarfa Equipment Maintenance - Extracted Assets</h1><div class="grid">']

for label, fname in images:
    html.append(f'<div class="card"><img src="images_converted/{fname}" alt="{label}"><h3>{label}</h3><p>{fname}</p></div>')

html.append('</div></body></html>')

with open('reference/gallery.html', 'w', encoding='utf-8') as f:
    f.write('\n'.join(html))
print("Gallery written to reference/gallery.html")

