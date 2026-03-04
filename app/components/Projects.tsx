import Project from "./Project";

export default function Projects() {
    return (
        <ul>
            <li className="font-bold text-center">Proyectos</li>
            <Project name="Aguiplas" />
            <Project name="Portafolio" />
            <Project name="IC wordpress" />
            <Project name="IC full stack" />
        </ul>

    )
}