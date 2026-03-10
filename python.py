# Generate a clean PDF schedule based on the user's requested formatting
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.lib import colors

file_path = "/mnt/data/horario_gimnasio_marzo_2026.pdf"

styles = getSampleStyleSheet()
title = Paragraph("GIMNASIO: HORARIO SEMANAL<br/><font size=10>Válido desde Marzo 2026</font>", styles['Title'])

def cls(name, time, instructor):
    return f"<b>{name}</b><br/>{time}<br/>Instructor: {instructor}"

data = [
    ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    
    [
        cls("Preparación Física & Boxeo","07:00 - 11:00","Francisco Infante y Pinto Boxing"),
        cls("Preparación Física","08:00 - 11:00","Francisco Infante y Pinto Boxing"),
        cls("Preparación Física & Boxeo","07:00 - 11:00","Francisco Infante y Pinto Boxing"),
        cls("Preparación Física","08:00 - 11:00","Francisco Infante y Pinto Boxing"),
        cls("Preparación Física & Boxeo","07:00 - 11:00","Francisco Infante y Pinto Boxing"),
        cls("Kickboxing","Sábado","Francisco Curiñanco"),
    ],
    
    [
        cls("Muay Thai","09:30 - 10:30","Hector Vaccaro"),
        cls("Muay Thai","09:00 - 10:00","Javiera Sayes"),
        cls("Muay Thai","09:30 - 10:30","Hector Vaccaro"),
        cls("Muay Thai","09:00 - 10:00","Javiera Sayes"),
        cls("Muay Thai","09:30 - 10:30","Hector Vaccaro"),
        cls("Muay Thai","11:00 - 12:00","Javiera Sayes"),
    ],
    
    [
        cls("MMA / Striking","11:30 - 13:30","Pinto Boxing"),
        cls("MMA / Striking","11:30 - 13:30","Pinto Boxing"),
        cls("MMA / Striking","11:30 - 13:30","Pinto Boxing"),
        cls("MMA / Striking","11:30 - 13:30","Pinto Boxing"),
        cls("MMA / Striking","11:30 - 13:30","Pinto Boxing"),
        "",
    ],
    
    [
        cls("Muay Thai Mujeres y Disidencias","18:00 - 19:00","Chilko MT"),
        "",
        cls("Muay Thai Mujeres y Disidencias","18:00 - 19:00","Chilko MT"),
        "",
        cls("Muay Thai Mujeres y Disidencias","18:00 - 19:00","Chilko MT"),
        "",
    ],
    
    [
        cls("Preparación Física","18:00 - 20:00","Francisco Infante"),
        cls("BJJ","19:00","No especificado"),
        cls("Preparación Física","18:00 - 20:00","Francisco Infante"),
        cls("Kickboxing","19:00","Francisco Curiñanco"),
        cls("Preparación Física","18:00 - 20:00","Francisco Infante"),
        "",
    ],
    
    [
        cls("Kickboxing","20:00","Francisco Curiñanco"),
        cls("Kudo","20:00","Roberto Medina"),
        cls("Muay Thai","19:00 - 20:00","Hector Vaccaro"),
        cls("Kudo","20:00","Roberto Medina"),
        cls("Muay Thai","19:00 - 20:00","Hector Vaccaro"),
        "",
    ],
    
    [
        cls("Muay Thai","20:30 - 21:30","Javiera Sayes"),
        "",
        cls("Muay Thai","20:30 - 21:30","Javiera Sayes"),
        "",
        cls("BJJ","20:00 - 21:30","No especificado"),
        "",
    ],
]

table = Table(data, colWidths=[3.2*cm]*6)

table.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,0),colors.HexColor("#1f3c5b")),
    ("TEXTCOLOR",(0,0),(-1,0),colors.white),
    ("ALIGN",(0,0),(-1,0),"CENTER"),
    ("VALIGN",(0,0),(-1,-1),"MIDDLE"),
    ("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),
    ("GRID",(0,0),(-1,-1),0.5,colors.grey),
    ("BACKGROUND",(0,1),(-1,-1),colors.whitesmoke),
]))

doc = SimpleDocTemplate(file_path, pagesize=(30*cm, 21*cm))
doc.build([title, Spacer(1,20), table])

file_path
