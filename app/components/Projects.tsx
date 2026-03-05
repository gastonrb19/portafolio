import Project from "./Project";

export default function Projects({ projects, selectedTecnology, selected, setSelectedProject }: { projects: { name: string, id: number, tecnologies: { id: number, name: string }[] }[], selectedTecnology: number, selected: number, setSelectedProject: (id: number) => void }) {
    return (
        <ul className="flex flex-col items-center">
            <li className="font-bold text-center">Proyectos</li>
            {
                projects.filter((project) => project.tecnologies.some((tecnology) => tecnology.id === selectedTecnology)).map((project) =>
                    <Project name={project.name} id={project.id} key={project.id} selected={selected} setSelectedProject={setSelectedProject} />)
            }
        </ul>

    )
}