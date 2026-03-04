'use client';

import Experience from "./Experience";
import ExperienceDetail from "./ExperienceDetail";
import { useState } from "react";

export default function WrapExperiencia() {
    const [experiences, setExperiences] = useState([
        {
            id: 1,
            title: "Encargado área TI",
            date: "2022 - Actualidad",
            description: "Encargado área TI en una empresa de software"
        },
        {
            id: 2,
            title: "Encargado de ventas",
            date: "2022 - Actualidad",
            description: "Encargado área TI en una empresa de software"
        },
        {
            id: 3,
            title: "Coordinador de TI",
            date: "2022 - Actualidad",
            description: "Encargado área TI en una empresa de software"
        },
        {
            id: 4,
            title: "Analista contable",
            date: "2022 - Actualidad",
            description: "Encargado área TI en una empresa de software"
        },
        {
            id: 5,
            title: "Encargado sucursal",
            date: "2022 - Actualidad",
            description: "Encargado área TI en una empresa de software"
        },
        {
            id: 6,
            title: "Vendedor Intercar",
            date: "2022 - Actualidad",
            description: "Encargado área TI en una empresa de software"
        }
    ]);
    const [currentExperience, setCurrentExperience] = useState(1);
    return (
        <section className="bg-indigo-100 py-10 px-4 grid grid-cols-2 text-center">
            <h2 className="text-3xl font-semibold col-span-2 text-center tracking-wider bg-indigo-950 p-1 rounded-lg text-white min-w-full">Experiencia laboral</h2>
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