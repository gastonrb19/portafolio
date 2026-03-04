import Tecnology from "./Tecnology"

export default function Tecnologies() {
    return (
        <ul className="text-center">
            <li className="font-bold text-center">Tecnologías</li>
            <Tecnology name="Nodejs" />
            <Tecnology name="React" />
            <Tecnology name="Nextjs" />
            <Tecnology name="Typescript" />
        </ul>

    )
}