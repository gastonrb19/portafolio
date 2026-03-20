import Image from "next/image";
import clippy from "@/public/clippy.png";
import { WrapFolderProps } from "../interfaces/Interfaces";

export default function ClipperFlotante({
  currentWindow,
  setCurrentWindow,
  setWindows,
  windows,
}: {
  currentWindow: number;
  setCurrentWindow: (currentWindow: number) => void;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
}) {
  return (
    <button
      className="z-20 right-0 absolute bottom-20 mouse mouse cursor-pointer"
      onClick={(e) => {
        setCurrentWindow(99);
        setWindows(
          windows.map((win) => {
            if (win.id === 99) {
              return { ...win, isOpen: true };
            }
            return win;
          }),
        );
      }}
    >
      <Image
        alt="clipper-flotante"
        src={clippy}
        width={80}
        height={80}
        className="w-15 md:w-20 hover:w-20 md:hover:w-25 duration-300"
      />
      <p className="text-sm text-center -mt-2">Ayuda</p>
    </button>
  );
}
