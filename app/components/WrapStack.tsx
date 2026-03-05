import Stack from "./Stack";
import Image from "next/image";

export default function WrapStack() {
    return (
        <section id="stack" className="bg-indigo-100 text-neutral-900 px-4 mx-auto grid grid-cols-2 text-sm gap-2 py-5">
            <h2 className="flex justify-center gap-2 text-center text-3xl font-bold col-span-2 p-1 bg-cyan-900 text-white min-w-full rounded-lg">
                Stack
                <Image src="/tools-icon.png" width={30} alt="tool-icon" height={30}/>
            </h2>
            <p className="col-span-2 text-center mb-5 text-xs text-gray-500 italic">Mi stack tecnológico</p>
            <div className="col-span-2 grid grid-cols-2 gap-2">
                <Stack name={"Backend"} color={"cyan"} iconName={"backend"} items={["Nodejs", "Nestjs", "Express", "Go"]} />
                <Stack name={"Frontend"} color={"cyan"} iconName={"frontend"} items={["React", "Nextjs", "Tailwindcss", "Css"]} />
                <Stack name={"Databases"} color={"cyan"} iconName={"database-1"} items={["SQL", "MySQL", "PostgreSQL", "Oracle", "PL/SQL", "Modelamiento"]} />
                <Stack name={"Otras"} color={"cyan"} iconName={"other"} items={["AWS", "Docker", "Trello", "Excel", "Git", "Github", "PowerBI", "Vim", "Docker", "Linux"]} />
            </div>
        </section>
    )
}
