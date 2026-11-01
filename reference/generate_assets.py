import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_favicons():
    logo_path = "public/images/logo-tight.png"
    if not os.path.exists(logo_path):
        logo_path = "reference/logo-tight.png"
    
    img = Image.open(logo_path).convert("RGBA")
    
    # We want a square icon with subtle dark backing or transparent
    # The logo has a red emblem and black/red text. For a favicon, the emblem or square version works best.
    # Let's crop the square emblem from the left of logo-tight.png or fit into a square with padding
    w, h = img.size
    # In logo-tight.png, let's find the bounding box of non-transparent pixels
    bbox = img.getbbox()
    cropped = img.crop(bbox)
    cw, ch = cropped.size
    
    # Let's create a crisp 256x256 icon
    size = 256
    icon_square = Image.new("RGBA", (size, size), (9, 12, 16, 255)) # Dark charcoal background
    
    # Add a thin red border (2px)
    draw = ImageDraw.Draw(icon_square)
    draw.rectangle([0, 0, size - 1, size - 1], outline=(220, 35, 36, 255), width=3)
    
    # Fit cropped logo inside with margin
    margin = 32
    target_w = size - margin * 2
    target_h = size - margin * 2
    
    ratio = min(target_w / cw, target_h / ch)
    new_w = int(cw * ratio)
    new_h = int(ch * ratio)
    
    resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    offset_x = (size - new_w) // 2
    offset_y = (size - new_h) // 2
    icon_square.paste(resized, (offset_x, offset_y), resized)
    
    # Save sizes
    # 1. public/favicon.ico
    icon_square.save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    icon_square.save("src/app/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    
    # 2. apple-icon.png (180x180)
    apple_icon = icon_square.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save("public/apple-icon.png", format="PNG")
    apple_icon.save("src/app/apple-icon.png", format="PNG")
    
    # 3. icon.png (192x192)
    icon_192 = icon_square.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save("public/icon.png", format="PNG")
    icon_192.save("src/app/icon.png", format="PNG")
    
    print("Favicons generated successfully.")

def create_og_image():
    W, H = 1200, 630
    
    # Base background: dark charcoal
    base = Image.new("RGB", (W, H), (9, 12, 16))
    
    # Background photo
    bg_photo_path = "public/images/workshop/hero-stator-rewind.png"
    if os.path.exists(bg_photo_path):
        bg = Image.open(bg_photo_path).convert("RGBA")
        # Resize to cover right half / full canvas
        bg_ratio = max(W / bg.width, H / bg.height)
        bg_w = int(bg.width * bg_ratio)
        bg_h = int(bg.height * bg_ratio)
        bg_resized = bg.resize((bg_w, bg_h), Image.Resampling.LANCZOS)
        
        # Crop to 1200x630
        x_start = (bg_w - W) // 2
        y_start = (bg_h - H) // 2
        bg_cropped = bg_resized.crop((x_start, y_start, x_start + W, y_start + H))
        
        # Desaturate slightly
        bg_gray = bg_cropped.convert("L").convert("RGBA")
        bg_blended = Image.blend(bg_cropped, bg_gray, 0.4)
        
        # Dark overlay
        dark = Image.new("RGBA", (W, H), (9, 12, 16, 195))
        bg_final = Image.alpha_composite(bg_blended, dark)
        base.paste(bg_final.convert("RGB"), (0, 0))
    
    draw = ImageDraw.Draw(base)
    
    # Technical border 1px with corner crop marks
    pad = 32
    draw.rectangle([pad, pad, W - pad, H - pad], outline=(40, 48, 58), width=1)
    
    # Corner ticks
    tick_len = 16
    draw.line([(pad - tick_len, pad), (pad + tick_len, pad)], fill=(220, 35, 36), width=2)
    draw.line([(pad, pad - tick_len), (pad, pad + tick_len)], fill=(220, 35, 36), width=2)
    draw.line([(W - pad - tick_len, pad), (W - pad + tick_len, pad)], fill=(220, 35, 36), width=2)
    draw.line([(W - pad, pad - tick_len), (W - pad, pad + tick_len)], fill=(220, 35, 36), width=2)
    draw.line([(pad - tick_len, H - pad), (pad + tick_len, H - pad)], fill=(220, 35, 36), width=2)
    draw.line([(pad, H - pad - tick_len), (pad, H - pad + tick_len)], fill=(220, 35, 36), width=2)
    draw.line([(W - pad - tick_len, H - pad), (W - pad + tick_len, H - pad)], fill=(220, 35, 36), width=2)
    draw.line([(W - pad, H - pad - tick_len), (W - pad, H - pad + tick_len)], fill=(220, 35, 36), width=2)
    
    # Red accent chamfer bar at top left
    chamfer_poly = [
        (pad + 40, pad + 1),
        (pad + 280, pad + 1),
        (pad + 260, pad + 7),
        (pad + 40, pad + 7)
    ]
    draw.polygon(chamfer_poly, fill=(220, 35, 36))
    
    # Load fonts
    try:
        font_eyebrow = ImageFont.truetype("arialbd.ttf", 15)
        font_h1 = ImageFont.truetype("ariblk.ttf", 46)
        font_sub = ImageFont.truetype("arialbd.ttf", 22)
        font_body = ImageFont.truetype("arial.ttf", 17)
        font_mono = ImageFont.truetype("courbd.ttf", 14)
    except:
        font_eyebrow = ImageFont.load_default()
        font_h1 = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_body = ImageFont.load_default()
        font_mono = ImageFont.load_default()
    
    # Top eyebrow
    draw.text((pad + 40, pad + 35), "EST. 1983  •  RIYADH, SAUDI ARABIA  •  HEAVY INDUSTRIAL ENGINEERING", fill=(220, 35, 36), font=font_mono)
    
    # Main Headline
    draw.text((pad + 40, pad + 85), "TARFA EQUIPMENT MAINTENANCE", fill=(255, 255, 255), font=font_h1)
    
    # Arabic / Subtitle
    draw.text((pad + 40, pad + 155), "تارفا لصيانة المعدات  |  WHERE EXCELLENCE MEETS EXPERTISE", fill=(180, 190, 205), font=font_sub)
    
    # Red decorative rule
    draw.line([(pad + 40, pad + 205), (pad + 650, pad + 205)], fill=(220, 35, 36), width=2)
    
    # Core capabilities / specs
    services_text = [
        "• Electric Motor Rewinding & Overhaul (AC/DC to 2,000+ kW)",
        "• Industrial Chiller Compressor Rebuilding (Screw, Reciprocating, Centrifugal)",
        "• High-Capacity Industrial Water Pumps & Dewatering Units",
        "• Generators, Alternators & Transformer Overhauls",
        "• Core Loss Testing, Re-Varnishing & Static Diagnostics",
        "• Dynamic Rotor Balancing to ISO 1940 Standards"
    ]
    
    sy = pad + 230
    for line in services_text:
        draw.text((pad + 40, sy), line, fill=(220, 225, 230), font=font_body)
        sy += 32
        
    # Technical stamp box at bottom right
    box_w, box_h = 420, 140
    bx = W - pad - 40 - box_w
    by = H - pad - 40 - box_h
    
    draw.rectangle([bx, by, bx + box_w, by + box_h], fill=(14, 18, 24), outline=(40, 48, 58), width=1)
    draw.line([(bx, by), (bx + 80, by)], fill=(220, 35, 36), width=3)
    
    draw.text((bx + 20, by + 18), "RIYADH WORKSHOP SPECIFICATION", fill=(220, 35, 36), font=font_mono)
    draw.text((bx + 20, by + 44), "FACILITY: As Saman Al Saman 2240, Al Sina'iyah", fill=(200, 210, 220), font=font_mono)
    draw.text((bx + 20, by + 68), "PHONE: +966 50 2640 474  /  +966 50 6626770", fill=(255, 255, 255), font=font_mono)
    draw.text((bx + 20, by + 92), "HOURS: Sat-Thu 07:00-18:00 (24/7 Breakdown Response)", fill=(160, 170, 185), font=font_mono)
    draw.text((bx + 20, by + 114), "STATUS: VERIFIED INDUSTRIAL CONTRACTOR", fill=(34, 197, 94), font=font_mono)

    # Save OG image
    os.makedirs("public/images", exist_ok=True)
    base.save("public/images/og-image.jpg", format="JPEG", quality=92)
    print("OG image generated successfully at public/images/og-image.jpg")

if __name__ == "__main__":
    create_favicons()
    create_og_image()
