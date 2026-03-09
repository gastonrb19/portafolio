import Link from "next/link";

export default function Project({ name, id, selected, setSelectedProject }: { name: string, id: number, selected: number, setSelectedProject: (id: number) => void }) {
    return (
        <li className={`flex items-center  gap-1 md:justify-center ${(id === selected) ? "text-indigo-500" : "text-neutral-700"} cursor-pointer`}>
            <Link href="#" onClick={(e) => {
                e.preventDefault();
                setSelectedProject(id);
            }}> {name}</Link> 
            </li>
    )
}
