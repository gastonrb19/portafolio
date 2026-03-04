import Link from "next/link";

export default function Tecnology({ name }: { name: string }) {
    return (
        <li className="flex items-center gap-1 md:justify-center hover:text-indigo-400"><Link href="#">{name}</Link> <div className="w-3 h-3 bg-amber-500 opacity-50"></div></li>
    )
}