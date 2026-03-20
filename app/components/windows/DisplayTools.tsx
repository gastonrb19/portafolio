import ItemToolBar from "./ItemToolBar";
import { WrapFolderProps } from "./interfaces/Interfaces";
import cmd from "@/public/cmd.png";
import file from "@/public/file.png";
import clippy from "@/public/clippy.png";

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
          {windows.map((win) => {
            if (win.id === 100) {
              return null;
            }
            if (win.id === 98) {
              return (
                <ItemToolBar
                  setOpen={setOpen}
                  icon={cmd}
                  setCurrentWindow={setCurrentWindow}
                  setWindows={setWindows}
                  windows={windows}
                  name={win.name}
                  key={win.id}
                  id={win.id}
                />
              );
            } else if (win.id === 99) {
              return (
                <ItemToolBar
                  setOpen={setOpen}
                  icon={clippy}
                  setCurrentWindow={setCurrentWindow}
                  setWindows={setWindows}
                  windows={windows}
                  name={win.name}
                  key={win.id}
                  id={win.id}
                />
              );
            }
            return (
              <ItemToolBar
                setOpen={setOpen}
                icon={file}
                setCurrentWindow={setCurrentWindow}
                setWindows={setWindows}
                windows={windows}
                name={win.name}
                key={win.id}
                id={win.id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
