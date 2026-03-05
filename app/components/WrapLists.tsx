'use client';
import Tecnologies from "./Tecnologies";
import Projects from "./Projects";
import { useState } from "react";
import InfoDisplayProject from "./InfoDisplayProject";

export default function WrapLists() {
    const tecnologies = [
        { name: "Nodejs", id: 1 },
        { name: "Reactjs", id: 2 },
        { name: "Expressjs", id: 3 },
        { name: "Go", id: 4 },
    ];
    const projects = [
        {
            name: "Project 1", description: "Description 1", id: 1, tecnologies: [
                { id: 1, name: "Nodejs" },
                { id: 2, name: "Reactjs" },
                { id: 3, name: "Expressjs" },
                { id: 4, name: "Go" },
            ]
        },
        {
            name: "Project 2", description: "Description 2", id: 2, tecnologies: [
                { id: 2, name: "Reactjs" },
                { id: 4, name: "Go" },
            ]
        },
        {
            name: "Project 3", description: "Description 3", id: 3, tecnologies: [
                { id: 4, name: "Go" },
            ]
        },
        {
            name: "Project 4", description: "Description 4", id: 4, tecnologies: [
                { id: 3, name: "Expressjs" },
            ]
        },
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
