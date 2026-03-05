import Link from "next/link";

export default function Tecnology({ name, id, selected, setSelected }: { name: string, id: number, selected: number, setSelected: (id: number) => void }) {
    return (
        <li className="flex flex-wrap justify-center items-center gap-1 hover:text-indigo-400">
            <Link href="#" className="cursor-pointer" onClick={(e) => {
                e.preventDefault();
                setSelected(id);
            }}>{name}</Link>
            {
                selected === id ? (
                    <div className="w-3 h-3 bg-amber-500 opacity-50 rounded-full">
                    </div>
                ) : null
            }
        </li>
    )
}
