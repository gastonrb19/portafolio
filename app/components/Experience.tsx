export default function Experience({ title, date, description }: { title: string, date: string, description: string }) {
    return (
        <div className="flex flex-row lg:flex-col lg:items-center gap-2">
            <p>{title}</p>
            <button className="bg-cyan-600 hover:bg-cyan-300 duration-300 cursor-pointer text-white w-4 h-4 rounded-3xl"></button>
        </div>
    )
}