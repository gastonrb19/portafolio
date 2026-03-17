import Image from "next/image";
import { WrapFolderProps } from "./interfaces/Interfaces";
export default function ItemWindows({
  id,
  name,
  file_url,
  setCurrentWindow,
  setWindows,
  windows,
}: {
  id: number;
  name: string;
  file_url: string;
  setCurrentWindow: (currentWindow: number) => void;
  setWindows: (folders: WrapFolderProps[]) => void;
  windows: WrapFolderProps[];
}) {
  return (
    <button
      className="
        text-black w-fit border-1 px-1 h-fit my-auto py-0.5 border-t-neutral-200 border-l-neutral-200 flex items-center gap-1 border-gray-700 shadow-inner active:shadow-gray-500"
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
      }}
    >
      <Image width={30} height={30} src={file_url} alt={name} />
      {name}
    </button>
  );
}
