export default function Project({ name }: { name: string }) {
    return (
        <li className="flex items-center  gap-1 md:justify-center hover:text-indigo-400"><a href="">{name}</a> <div className="w-3 h-3 bg-amber-500 opacity-50"></div></li>
    )
}