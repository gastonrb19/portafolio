import Image from "next/image";
export default function ItemWindows({
  name,
  file_url,
}: {
  name: string;
  file_url: string;
}) {
  return (
    <button
      className="
        text-black w-fit border-1 px-1 h-fit my-auto py-0.5 border-t-neutral-200 border-l-neutral-200 flex items-center gap-1 border-gray-700 shadow-inner active:shadow-gray-500
        "
    >
      <Image width={30} height={30} src={file_url} alt={name} />
      {name}
    </button>
  );
}
