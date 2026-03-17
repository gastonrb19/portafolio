import ItemToolBar from "./ItemToolBar";
import { WrapFolderProps } from "./interfaces/Interfaces";

export default function DisplayTools({
  windows,
  setCurrentWindow,
  setWindows,
  setOpen,
}: {
  windows: WrapFolderProps[];
  setCurrentWindow: (currentWindow: number) => void;
  setWindows: (folders: WrapFolderProps[]) => void;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      <div className="bg-windows-toolbar border-1 border-gray-700 shadow-lg absolute bottom-12 left-0 w-fit flex">
        <ul className="space-y-2 w-full">
          {windows.map((win) => (
            <ItemToolBar
              setOpen={setOpen}
              icon="/file.png"
              setCurrentWindow={setCurrentWindow}
              setWindows={setWindows}
              windows={windows}
              name={win.name}
              key={win.id}
              id={win.id}
            />
          ))}
          <ItemToolBar
            setOpen={setOpen}
            id={0}
            name="Ayuda"
            icon="/clippy.png"
            setCurrentWindow={setCurrentWindow}
            setWindows={setWindows}
            windows={windows}
          />
        </ul>
      </div>
    </>
  );
}
