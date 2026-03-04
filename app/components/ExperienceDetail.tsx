interface ExperienceDetailProps {
    title: string;
    description: string;
    date: string;
}

export default function ExperienceDetail({ title, description, date }: ExperienceDetailProps) {
    return (
        <article className="scale-in-ver-top bg-blue-100 drop-shadow-xl rounded-t-lg">
            <h3 className="text-wrap text-xl md:text-2xl font-semibold text-zinc-100 bg-indigo-900 p-1 rounded-t-lg">{title}</h3>
            <p className="text-gray-800 text-sm">{date}</p>
            <p className="text-gray-800 text-sm">{description}</p>
        </article>

    )
}