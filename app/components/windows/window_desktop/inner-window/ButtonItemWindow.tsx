export default function ButtonItemWindow({
  name,
  setSelectedExperience,
  id,
}: {
  name: string;
  id: number;
  setSelectedExperience: (id: number) => void;
}) {
  return (
    <button
      onClick={(e) => setSelectedExperience(id)}
      className="border-1 border-x-neutral-800 border-y-neutral-200 px-1 rounded-xs shadow-inner active:shadow-gray-800 text-sm"
    >
      {name}
    </button>
  );
}
