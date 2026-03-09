import Image from "next/image";
export default function ItemToolBar({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  return (
    <li className="hover:bg-win98-selected p-2 cursor-pointer px-10 text-neutral-800 hover:text-gray-100">
      <Image
        width={40}
        height={40}
        src={icon}
        alt="icon-win"
        className="inline-block mr-2 mb-1"
      />
      {name}
    </li>
  );
}
