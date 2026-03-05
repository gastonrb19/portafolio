export default function InfoDisplayProject({ project }: { project: { name: string, id: number, tecnologies: { id: number, name: string }[], description: string } | null }) {
    if (!project) return null;
    return (
        <div className="text-center drop-shadow-2xl border-neutral-500 shadow-2xl h-12/12 overflow-y-scroll overflow-x-hidden">
            <h4 className="text-lg font-bold bg-neutral-800 p-1 rounded-t-lg text-zinc-100">{project.name}</h4>
            <p className="font-bold">Tecnologías utilizadas</p>
            <ul>
                {project.tecnologies.map((tecnology) => <li key={tecnology.id}>{tecnology.name}</li>)}
            </ul>
            <p className="font-bold">Descripción</p>
            <p className="text-wrap">{project.description}</p>
        </div>

    )
}