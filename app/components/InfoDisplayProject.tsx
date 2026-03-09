export default function InfoDisplayProject({ project }: { project: { name: string, id: number, tecnologies: { id: number, name: string }[], description: string } | null }) {
    if (!project) return null;
    return (
        <div className="text-center drop-shadow-lg rounded-lg border-1 border-neutral-900 border-r-5 border-b-5 shadow-2xl h-12/12 overflow-y-scroll overflow-x-hidden h-50">
            <h4 className="underline text-xl md:text-2xl font-semibold p-1 text-zinc-900">{project.name}</h4>
            <p className="font-bold">Tecnologías utilizadas</p>
            <ul>
                {project.tecnologies.map((tecnology) => <li key={tecnology.id}>{tecnology.name}</li>)}
            </ul>
            <p className="font-bold">Descripción</p>
            <p className="text-wrap">{project.description}</p>
        </div>

    )
}
