import Link from "next/link";

export default function Project({ name, id, selected, setSelectedProject }: { name: string, id: number, selected: number, setSelectedProject: (id: number) => void }) {
    return (
        <li className="flex items-center  gap-1 md:justify-center hover:text-indigo-400 cursor-pointer">
            <Link href="#" onClick={(e) => {
                e.preventDefault();
                setSelectedProject(id);
            }}> {name}</Link> {selected === id ?
                <div className="w-3 h-3 bg-amber-500 opacity-50"></div> : null}</li>
    )
}