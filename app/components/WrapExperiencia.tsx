'use client';

import Experience from "./Experience";
import ExperienceDetail from "./ExperienceDetail";
import { useState } from "react";
import Image from 'next/image';

export default function WrapExperiencia() {
    const [experiences, setExperiences] = useState([
        {
            id: 1,
            title: "Encargado área TI & desarrollo",
            date: "07/2023 - 03/2026",
            description: "Encargado área TI en una empresa dedicada a la venta de accesorios y repuestos automotrices. Entre las reponsabilidades destacadas se encuentran: Realizar desarrollo fullstack, soporte al personal, manejo y administración ERP, reportes sql y powerbi, coordinación con empresas externas del área."
        },
        {
            id: 2,
            title: "Encargado de ventas",
            date: "12/2021 - 12/2025",
            description: "Encargado del área de ventas en una empresa dedicada a la venta de accesorios y repuestos automotrices. Entre las responsabbilidades destacadas esta el cambio estructural mediante herramientas tecnologicas que aportaron a la toma de decisiones y crecimiento de esta. Mediante proceso de auditoria y KPI"
        },
        {
            id: 3,
            title: "Coordinador de TI",
            date: "07/2020 - 08/2021",
            description: "Coordinación del área informática con empresas externas. Además de implementación de sistema ERP DEFONTANA e implementación de internet dedicado."
        },
        {
            id: 4,
            title: "Analista contable",
            date: "07/2018 - 06/2020",
            description: "Realicé labores de análisis contable, manejo de proveedores, facturación, manejo de interfaz SII y apoyo en procesos de auditoría."
        },
        {
            id: 5,
            title: "Encargado sucursal",
            date: "01/2017 - 06/2018",
            description: "Encargado de sucursal, responsable de la gestión diaria, atención al cliente, manejo de inventario y supervisión del personal. Uno de los mayores logros en este puesto fue tener un gran equipo de trabajo que logró durante 4 meses llegar a la meta mensual."
        },
        {
            id: 6,
            title: "Vendedor Intercar",
            date: "07/2016 - 12/2016",
            description: "Vendedor de repuestos y accesorios automotrices. Entre las responsabilidades destacadas esta la atención al cliente, manejo de inventario y ventas."
        }
    ]);
    const [currentExperience, setCurrentExperience] = useState(1);
    return (
        <section id="experiencia" className="bg-indigo-100 py-10 px-4 grid grid-cols-2 text-center">
            <h2 className="text-3xl flex justify-center gap-2 font-semibold col-span-2 text-center tracking-wider bg-indigo-950 p-1 rounded-lg text-white min-w-full">Experiencia laboral <Image src="/experience.png" alt="icon-experience" width={30} height={30} className="w-6" /></h2>
            <p className="col-span-2 text-center mb-5 text-xs text-gray-500 italic mt-2">haz clic sobre las burbujas para ver más detalles</p>
            <article className="text-sm flex flex-col gap-2 xs:mx-auto lg:flex lg:flex-row lg:flex-wrap lg:gap-2 lg:ml-0 w-11/12">
                {experiences.map((experience) => (
                    <Experience id={experience.id} setCurrentExperience={setCurrentExperience} key={experience.id} title={experience.title} description={experience.description} />
                ))}
            </article>
            <ExperienceDetail title={experiences[currentExperience - 1].title} description={experiences[currentExperience - 1].description} date={experiences[currentExperience - 1].date} />
        </section>
    )
}
