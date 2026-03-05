interface ExperienceProps {
    id: number;
    title: string;
    description: string;
    setCurrentExperience: (experience: number) => void;
}

export default function Experience({ id, title, description, setCurrentExperience }: ExperienceProps) {
    return (
        <div className="flex flex-row lg:flex-col lg:items-center gap-2 group">
            <p className="text-neutral-900 group-hover:text-indigo-600 duration-300">{title}</p>
            <button onClick={() => setCurrentExperience(id)}
                className="bg-indigo-950 group-hover:bg-indigo-600 duration-300 cursor-pointer text-white w-4 h-4 rounded-3xl">
            </button>
        </div>
    )
}
