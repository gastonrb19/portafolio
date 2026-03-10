export default function ButtonItemWindow({ name }: { name: string }) {
  return (
    <button className="border-1 border-x-neutral-800 border-y-neutral-200 px-1 rounded-xs shadow-inner active:shadow-gray-800">
      {name}
    </button>
  );
}
