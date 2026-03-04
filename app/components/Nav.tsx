import Link from "next/link";

export default function Nav() {
    return (
        <nav className="pt-5 md:text-sm xs:text-xs">
            <ul className="flex gap-4 justify-evenly">
                <li className="border-r-2 border-indigo-400 px-2 hover:border-indigo-100 hover:text-indigo-100 duration-200 cursor-pointer"><Link href="#">Inicio</Link></li>
                <li className="border-r-2 border-indigo-400 px-2 hover:border-indigo-100 hover:text-indigo-100 duration-200 cursor-pointer"><Link href="#experiencia">Experiencia</Link></li>
                <li className="border-r-2 border-indigo-400 px-2 hover:border-indigo-100 hover:text-indigo-100 duration-200 cursor-pointer"><Link href="#proyectos">Proyectos</Link></li>
                <li className="border-r-2 border-indigo-400 px-2 hover:border-indigo-100 hover:text-indigo-100 duration-200 cursor-pointer"><Link href="#contacto">Contacto</Link></li>
            </ul>
        </nav>

    )
}
