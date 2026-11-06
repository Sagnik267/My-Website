import os

def create_resume_pdf(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # PDF Page dimensions: US Letter 612 x 792 pt
    # Coordinates: (0, 0) is bottom-left, (612, 792) is top-left
    
    commands = []
    
    # Helper to add text
    def add_text(font, size, x, y, text, r=0.1, g=0.1, b=0.1):
        # Escape parenthesis and backslashes
        escaped = text.replace('\\', '\\\\').replace('(', '\\(').replace(')', '\\)')
        commands.append(f"{r:.2f} {g:.2f} {b:.2f} rg")
        commands.append("BT")
        commands.append(f"/{font} {size} Tf")
        commands.append(f"{x:.1f} {y:.1f} Td")
        commands.append(f"({escaped}) Tj")
        commands.append("ET")
        
    def add_line(x1, y1, x2, y2, r=0.8, g=0.8, b=0.8, width=0.75):
        commands.append(f"{r:.2f} {g:.2f} {b:.2f} RG")
        commands.append(f"{width:.2f} w")
        commands.append(f"{x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S")

    # Margins and start position
    left = 45.0
    right = 567.0
    y = 750.0
    
    # Header
    add_text("F2", 20, left, y, "SAGNIK BEHERA", 0.05, 0.1, 0.2)
    y -= 16
    add_text("F1", 9.5, left, y, "Data Science Student | B.Tech CSE (Data Science)", 0.2, 0.4, 0.5)
    y -= 14
    add_text("F1", 8.5, left, y, "Keonjhar, Odisha, India  |  sagnikbehera30@gmail.com  |  linkedin.com/in/sagnik-behera-328b60435  |  github.com/Sagnik267", 0.35, 0.4, 0.45)
    y -= 10
    add_line(left, y, right, y, 0.2, 0.5, 0.6, 1.2)
    y -= 16
    
    # Summary
    add_text("F2", 11, left, y, "SUMMARY", 0.05, 0.2, 0.35)
    y -= 4
    add_line(left, y, right, y, 0.85, 0.88, 0.9, 0.5)
    y -= 12
    summary_lines = [
        "B.Tech Computer Science Engineering (Data Science) student with hands-on experience in database",
        "management using MySQL, along with Python and SQL. Comfortable with data preprocessing, exploratory",
        "data analysis and model development, and with deploying basic data-driven functionality in Python.",
        "Follows clean coding practices and keeps improving through practical projects."
    ]
    for line in summary_lines:
        add_text("F1", 8.5, left, y, line, 0.2, 0.2, 0.2)
        y -= 11
    y -= 6
    
    # Education
    add_text("F2", 11, left, y, "EDUCATION", 0.05, 0.2, 0.35)
    y -= 4
    add_line(left, y, right, y, 0.85, 0.88, 0.9, 0.5)
    y -= 13
    
    add_text("F2", 9, left, y, "C.V. Raman Global University", 0.1, 0.1, 0.1)
    add_text("F1", 8.5, 460, y, "Graduation: 2027", 0.3, 0.3, 0.3)
    y -= 11
    add_text("F1", 8.5, left, y, "B.Tech in Computer Science Engineering (Data Science)", 0.25, 0.25, 0.25)
    y -= 13
    
    add_text("F2", 9, left, y, "Rabindra Vidya Niketan School (CBSE), Keonjhar, Odisha", 0.1, 0.1, 0.1)
    add_text("F1", 8.5, 490, y, "2023", 0.3, 0.3, 0.3)
    y -= 11
    add_text("F1", 8.5, left, y, "Class XII, Science  -  68.80%", 0.25, 0.25, 0.25)
    y -= 13

    add_text("F2", 9, left, y, "Rabindra Vidya Niketan School (CBSE), Keonjhar, Odisha", 0.1, 0.1, 0.1)
    add_text("F1", 8.5, 490, y, "2021", 0.3, 0.3, 0.3)
    y -= 11
    add_text("F1", 8.5, left, y, "Class X  -  87.20%", 0.25, 0.25, 0.25)
    y -= 14

    # Technical Skills
    add_text("F2", 11, left, y, "TECHNICAL SKILLS", 0.05, 0.2, 0.35)
    y -= 4
    add_line(left, y, right, y, 0.85, 0.88, 0.9, 0.5)
    y -= 13
    
    skills = [
        ("Languages:", "Python (Intermediate - ML & Flask), SQL"),
        ("Databases:", "MySQL"),
        ("Tools & Platforms:", "Google Colab, Jupyter, Power BI Desktop"),
        ("Core Skills:", "Teamwork, Problem Solving")
    ]
    for label, val in skills:
        add_text("F2", 8.5, left, y, label, 0.15, 0.15, 0.15)
        add_text("F1", 8.5, left + 95, y, val, 0.25, 0.25, 0.25)
        y -= 12
    y -= 6

    # Projects
    add_text("F2", 11, left, y, "PROJECTS", 0.05, 0.2, 0.35)
    y -= 4
    add_line(left, y, right, y, 0.85, 0.88, 0.9, 0.5)
    y -= 13

    # Project 1
    add_text("F2", 9, left, y, "Marketing Performance Dashboard", 0.1, 0.1, 0.1)
    add_text("F1", 8, 380, y, "Data Analytics Capstone Project", 0.3, 0.4, 0.45)
    y -= 12
    p1_bullets = [
        "Built a data analytics dashboard to track, analyze and visualize marketing campaign performance across channels.",
        "Collected, cleaned and preprocessed campaign, customer engagement, social media and website traffic data.",
        "Analyzed key metrics including click-through rate, conversion rate, customer reach and ROI.",
        "Created interactive dashboards for channel-wise comparison, engagement trends and marketing KPIs.",
        "Generated business insights, campaign reports and monthly summaries to support data-driven marketing decisions."
    ]
    for bullet in p1_bullets:
        add_text("F1", 8.5, left + 5, y, "-", 0.2, 0.5, 0.6)
        add_text("F1", 8.5, left + 14, y, bullet, 0.2, 0.2, 0.2)
        y -= 11.5
    y -= 6

    # Project 2
    add_text("F2", 9, left, y, "Marketing Campaign Analysis", 0.1, 0.1, 0.1)
    add_text("F1", 8, 435, y, "Power BI Desktop", 0.3, 0.4, 0.45)
    y -= 12
    p2_bullets = [
        "Collaborated on a Power BI project to transform, load and visualize marketing campaign data.",
        "Applied data cleaning and preprocessing techniques to prepare datasets for analysis.",
        "Implemented DAX measures: Total Purchase, Target Response, Campaign Profit, Percentage Success.",
        "Designed an interactive dashboard based on a reference layout, presenting customer response, revenue and campaign effectiveness."
    ]
    for bullet in p2_bullets:
        add_text("F1", 8.5, left + 5, y, "-", 0.2, 0.5, 0.6)
        add_text("F1", 8.5, left + 14, y, bullet, 0.2, 0.2, 0.2)
        y -= 11.5
    y -= 6

    # Certifications
    add_text("F2", 11, left, y, "CERTIFICATIONS", 0.05, 0.2, 0.35)
    y -= 4
    add_line(left, y, right, y, 0.85, 0.88, 0.9, 0.5)
    y -= 13
    add_text("F2", 8.5, left, y, "Data Analytics", 0.1, 0.1, 0.1)
    add_text("F1", 8.5, left + 80, y, "-  Krutanic", 0.25, 0.25, 0.25)

    stream_content = "\n".join(commands).encode('latin1')
    stream_length = len(stream_content)

    # Build PDF with NO /Info dict (zero metadata)
    objects = []
    
    # 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    # 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
    # 3: Page
    objects.append(
        "3 0 obj\n"
        "<< /Type /Page /Parent 2 0 R\n"
        "   /MediaBox [0 0 612 792]\n"
        "   /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >>\n"
        "   /Contents 6 0 R\n"
        ">>\nendobj\n"
    )
    # 4: Font F1 (Helvetica)
    objects.append("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")
    # 5: Font F2 (Helvetica-Bold)
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n")
    # 6: Contents stream
    objects.append(
        f"6 0 obj\n<< /Length {stream_length} >>\nstream\n"
    )
    
    pdf_bytes = bytearray(b"%PDF-1.4\n")
    offsets = []
    
    for i in range(5):
        offsets.append(len(pdf_bytes))
        pdf_bytes.extend(objects[i].encode('latin1'))
        
    offsets.append(len(pdf_bytes))
    pdf_bytes.extend(objects[5].encode('latin1'))
    pdf_bytes.extend(stream_content)
    pdf_bytes.extend(b"\nendstream\nendobj\n")
    
    xref_offset = len(pdf_bytes)
    pdf_bytes.extend(b"xref\n0 7\n0000000000 65535 f \n")
    for off in offsets:
        pdf_bytes.extend(f"{off:010d} 00000 n \n".encode('latin1'))
        
    # Notice: trailer has NO /Info dictionary, strictly << /Size 7 /Root 1 0 R >>
    pdf_bytes.extend(
        f"trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode('latin1')
    )

    with open(output_path, 'wb') as f:
        f.write(pdf_bytes)
    print(f"Generated clean zero-metadata PDF at {output_path} ({len(pdf_bytes)} bytes)")

if __name__ == '__main__':
    create_resume_pdf('static/assets/Sagnik_resume.pdf')
