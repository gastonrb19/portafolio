import Image, { StaticImageData } from "next/image";
import { WrapFolderProps } from "./interfaces/Interfaces";

export default function ItemToolBar({
  id = 0, // if 0 display clipper
  name,
  icon,
  windows,
  setCurrentWindow,
  setWindows,
  setOpen,
}: {
  id: number;
  name: string;
  icon: StaticImageData
  windows: WrapFolderProps[];
  setCurrentWindow: (currentWindow: number) => void;
  setWindows: (folders: WrapFolderProps[]) => void;
  setOpen: (open: boolean) => void;
}) {
  return (
    <li
      onClick={(e) => {
        setCurrentWindow(id);
        setWindows(
          windows.map((win) => {
            if (win.id === id && !win.isOpen) {
              return { ...win, isOpen: true };
            }
            return win;
          }),
        );
        setOpen(false);
      }}
      className="hover:bg-win98-selected p-2 cursor-pointer px-10 text-neutral-800 hover:text-gray-100"
    >
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
