interface ExperienceProps {
    id: number;
    title: string;
    description: string;
    setCurrentExperience: (experience: number) => void;
}

export default function Experience({ id, title, description, setCurrentExperience }: ExperienceProps) {
    return (
        <div className="flex flex-row lg:flex-col lg:items-center gap-2">
            <p className="text-neutral-900">{title}</p>
            <button onClick={() => setCurrentExperience(id)} className="bg-cyan-600 hover:bg-cyan-300 duration-300 cursor-pointer text-white w-4 h-4 rounded-3xl"></button>
        </div>
    )
}