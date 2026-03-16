import { WrapFolderProps } from "./interfaces/Interfaces";

export default function ToolWindow({
  name,
  setCurrentWindow,
  currentWindow,
  windows,
  setWindows,
}: {
  name: string;
  setCurrentWindow: (currentWindow: number) => void;
  currentWindow: number;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
}) {
  return (
    <div
      id="name-blue-bar"
      className="w-12/12 bg-win98-selected flex items-center justify-between px-1 font-bold"
    >
      <h3>{name}</h3>
      <div
        id="div-buttons"
        className="flex justify-end gap-0.5 p-1 text-neutral-800"
      >
        <button
          className="border-1 w-5 bg-windows-toolbar"
          onClick={(e) => {
            setCurrentWindow(0);
          }}
        >
          -
        </button>
        <button
          className="border-1 w-5 bg-windows-toolbar"
          onClick={(e) => {
            setWindows(
              windows.map((win) => {
                if (win.id === currentWindow) {
                  return { ...win, isOpen: false };
                }
                return win;
              }),
            );
            setCurrentWindow(0);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}
