import os
from PIL import Image, ImageDraw, ImageFont

def generate_og_image(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    width = 1200
    height = 630

    # Create dark base image
    img = Image.new('RGB', (width, height), color=(10, 15, 29))
    draw = ImageDraw.Draw(img)

    # Subtle background gradient/mesh
    for y in range(height):
        ratio = y / height
        r = int(10 + ratio * 8)
        g = int(15 + ratio * 15)
        b = int(29 + ratio * 25)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Decorative tech grid dots
    for x in range(40, width, 40):
        for y in range(40, height, 40):
            draw.point((x, y), fill=(25, 38, 64))

    # Accent glow top bar
    draw.rectangle([0, 0, width, 6], fill=(0, 229, 153))

    # Inner decorative border
    draw.rounded_rectangle([30, 30, width - 30, height - 30], radius=16, outline=(30, 41, 68), width=2)

    # Badge: DATA SCIENCE & ANALYTICS
    badge_bg = (16, 36, 45)
    badge_border = (0, 229, 153)
    draw.rounded_rectangle([70, 75, 360, 115], radius=8, fill=badge_bg, outline=badge_border, width=1)

    # Try loading system font or fallback
    def get_font(size, bold=False):
        font_paths = [
            "C:\\Windows\\Fonts\\segoeuib.ttf" if bold else "C:\\Windows\\Fonts\\segoeui.ttf",
            "C:\\Windows\\Fonts\\arialbd.ttf" if bold else "C:\\Windows\\Fonts\\arial.ttf",
            "C:\\Windows\\Fonts\\consola.ttf"
        ]
        for p in font_paths:
            if os.path.exists(p):
                try:
                    return ImageFont.truetype(p, size)
                except Exception:
                    pass
        return ImageFont.load_default()

    font_badge = get_font(16, bold=True)
    font_name = get_font(56, bold=True)
    font_tagline = get_font(26, bold=False)
    font_meta = get_font(20, bold=False)
    font_chip = get_font(18, bold=True)

    # Badge text
    draw.text((85, 85), "DATA SCIENCE PORTFOLIO", font=font_badge, fill=(0, 229, 153))

    # Name
    draw.text((70, 145), "SAGNIK BEHERA", font=font_name, fill=(255, 255, 255))

    # Tagline
    draw.text(
        (70, 230),
        "Data Science student turning raw data into clear business insights",
        font=font_tagline,
        fill=(148, 163, 184)
    )

    # Sub-description
    draw.text(
        (70, 280),
        "Specializing in Python, SQL, MySQL, Power BI Desktop, and Exploratory Data Analysis.",
        font=font_meta,
        fill=(100, 116, 139)
    )

    # Skill Pills
    chips = ["Python", "SQL", "MySQL", "Flask", "Power BI", "DAX", "Google Colab", "Jupyter"]
    curr_x = 70
    curr_y = 360
    for chip in chips:
        # approximate width
        chip_w = len(chip) * 12 + 28
        draw.rounded_rectangle([curr_x, curr_y, curr_x + chip_w, curr_y + 42], radius=21, fill=(20, 29, 47), outline=(45, 60, 92), width=1)
        draw.text((curr_x + 14, curr_y + 10), chip, font=font_chip, fill=(226, 232, 240))
        curr_x += chip_w + 12

    # Bottom bar details
    draw.line([(70, 480), (width - 70, 480)], fill=(30, 41, 68), width=1)

    # Location & University
    draw.text((70, 515), "📍 Keonjhar, Odisha, India  •  C.V. Raman Global University (B.Tech CSE)", font=font_meta, fill=(148, 163, 184))
    draw.text((width - 340, 515), "sagnikbehera.pages.dev", font=font_meta, fill=(0, 229, 153))

    # Save optimized PNG
    img.save(output_path, "PNG", optimize=True)
    print(f"Generated {output_path} ({width}x{height})")

if __name__ == '__main__':
    generate_og_image('static/og.png')
