'use client';
import Tecnologies from "./Tecnologies";
import Projects from "./Projects";
import { useState } from "react";
import InfoDisplayProject from "./InfoDisplayProject";

export default function WrapLists() {
    const tecnologies = [
        { name: "Node.js", id: 1 },
        { name: "React.js", id: 2 },
        { name: "Express.js", id: 3 },
        { name: "Go", id: 4 },
        { name: "Nest.js", id: 5 },
        { name: "Tailwindcss", id: 6 },
        { name: "Next.js", id: 7 },
        { name: "Wordpress", id: 8 },
        { name: "JWT", id: 9 },
        { name: "Sequelize", id: 10 },
        { name: "Mysql", id: 11 },
        { name: "Kotlin (Android)", id: 12 },
        { name: "Excel", id: 13 },
        { name: "Powerbi", id: 14 },
        { name: "SQL", id: 15 },

    ];
    const projects = [
        {
            name: "Portafolio", description: "Mi pequeño portafolio de desarrollador web esta hecho con Next.js, Go y Tailwindcss", id: 1, tecnologies: [
                { id: 7, name: "Next.js" },
                { id: 4, name: "Go" },
                { id: 6, name: "Tailwindcss" },
            ]
        },
        {
            name: "Aguiplas web", description: "Pagina web para empresa de plásticos, hecha con Wordpress", id: 2, tecnologies: [
                { id: 8, name: "Wordpress" },
            ]
        },
        {
            name: "Intercar web", description: "Pagina web para empresa venta de accesorios de autos, hecha con Wordpress", id: 3, tecnologies: [
                { id: 8, name: "Wordpress" },
            ]
        },
        {
            name: "Fullstack intercar", description: "Proyecto full stack con consumo de api realizada en express, con roles y jwt. Proyecto que despliega los diferentes productos disponibles en la base de datos mysql", id: 4, tecnologies: [
                { id: 2, name: "Reactjs" },
                { id: 3, name: "Expressjs" },
                { id: 1, name: "Nodejs" },
                { id: 6, name: "Tailwindcss" },
                { id: 9, name: "JWT" },
                { id: 11, name: "Mysql" },
                { id: 10, name: "Sequelize" },
            ]
        },
        {
            name: "Morfeo", description: "Aplicación mobile/web para el registro de llegada de trabajadores a la empresa.", id: 5, tecnologies: [
                { id: 12, name: "Kotlin (Android)" },
                { id: 5, name: "Nest.js" },
                { id: 9, name: "JWT" },
                { id: 11, name: "Mysql" },
                { id: 7, name: "Next.js" }
            ]
        }, {
            name: "Auditoria inventario",
            description: "Ante la falta de un sistema de auditoria de inventario, se realizo reportes criticos mediante sql, excel y powerbi. Generando así cambios criticos en la empresa.",
            id: 6,
            tecnologies: [
                { id: 11, name: "Mysql" },
                { id: 13, name: "Excel" },
                { id: 14, name: "Powerbi" },
                { id: 15, name: "SQL" }
            ]
        }

    ];
    const [selected, setSelected] = useState<number>(1);
    const [selectedProject, setSelectedProject] = useState<number>(1);
    return (
        <>
            <div className="col-span-1 grid grid-cols-2 mx-auto text-center gap-5 my-auto">
                <Tecnologies tecnologies={tecnologies} selected={selected} setSelected={setSelected} />
                <Projects projects={projects} selected={selectedProject} setSelectedProject={setSelectedProject} selectedTecnology={selected} />
            </div>
            <InfoDisplayProject project={projects.find((project) => project.id === selectedProject) || null} />
        </>
    )
};
