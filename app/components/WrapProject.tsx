import WrapLists from "./WrapLists";
import Image from "next/image";

export default function WrapProject() {
    return (
        <section id="proyectos" className="bg-indigo-100 text-neutral-900 px-4 mx-auto grid grid-cols-2 text-sm gap-2 py-5">
            <h2 className="flex justify-center gap-2 text-center text-3xl font-bold col-span-2 p-1 bg-neutral-800 text-white min-w-full rounded-lg">
            Proyectos
            <Image src="/projects-icon.png" alt="project-icon" width={30} height={30}/>
            </h2>
            <p className="col-span-2 text-center mb-5 text-xs text-gray-500 italic">haz clic sobre el nombre del proyecto para ver más detalles</p>
            <WrapLists />
        </section>
    )
};
