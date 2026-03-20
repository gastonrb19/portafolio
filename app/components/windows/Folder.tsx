import Image from "next/image";
import { WrapFolderProps } from "./interfaces/Interfaces";
import { StaticImageData } from "next/image";

export default function Folder({
  id,
  name,
  currentWindow,
  setCurrentWindow,
  windows,
  setWindows,
  image,
}: {
  id: number;
  name: string;
  currentWindow: number;
  setCurrentWindow: (currentWindow: number) => void;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
  image: StaticImageData;
}) {
  return (
    <div className="mr-auto">
      <button
        className="cursor-pointer active:scale-90 focus:text-white duration-200"
        onDoubleClick={(e) => {
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
        <Image
          width={50}
          height={50}
          src={image}
          alt="folder"
          className="mx-auto"
        />
        <p>{name}</p>
      </button>
    </div>
  );
}
