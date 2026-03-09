import Link from "next/link";

export default function Tecnology({ name, id, selected, setSelected }: { name: string, id: number, selected: number, setSelected: (id: number) => void }) {
    return (
        <li className={`${(selected === id) ? "text-indigo-400" : "text-neutral-700"} flex flex-wrap justify-center items-center gap-1 hover:text-indigo-400`}>
            <Link href="#" className="cursor-pointer border-1 rounded-sm my-0.5 px-0.5" onClick={(e) => {
                e.preventDefault();
                setSelected(id);
            }}>{name}</Link>
                    </li>
    )
}
