export default function InfoDisplayProject() {
    return (
        <div className="text-center drop-shadow-2xl border-neutral-500 shadow-2xl h-12/12 overflow-y-scroll overflow-x-hidden">
            <h4 className="text-lg font-bold bg-neutral-800 p-1 rounded-t-lg text-zinc-100">Titulo del proyecto</h4>
            <p>Duración del proyecto</p>
            <p className="font-bold">Tecnologías utilizadas</p>
            <ul>
                <li>Nodejs </li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Typescript</li>
            </ul>
            <p className="font-bold">Descripción</p>
            <p className="text-wrap">lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

    )
}