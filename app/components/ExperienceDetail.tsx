interface ExperienceDetailProps {
  title: string;
  description: string;
  date: string;
}

export default function ExperienceDetail({
  title,
  description,
  date,
}: ExperienceDetailProps) {
  return (
    <article className="scale-in-ver-top bg-blue-100 drop-shadow-lg rounded-lg border-1 border-indigo-600 border-r-5 border-b-5">
      <h3 className="underline text-wrap text-xl md:text-2xl font-semibold text-zinc-900 p-1">
        {title}
      </h3>
      <p className="text-gray-800 text-sm">{date}</p>
      <p className="text-gray-800 text-sm">{description}</p>
    </article>
  );
}
