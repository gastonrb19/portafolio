import Folder from "./Folder";
import { WrapFolderProps } from "./interfaces/Interfaces";
import file from "@/public/file.png";
import cmd from "@/public/cmd.png";


export default function WrapFolders({
  folders,
  currentWindow,
  setCurrentWindow,
  windows,
  setWindows,
}: {
  folders: WrapFolderProps[];
  currentWindow: number;
  setCurrentWindow: (currentWindow: number) => void;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 p-4 text-left">
      {folders.map((folder) => {
        if (folder.id === 99 || folder.id === 100) {
          return null;
        }
        if (folder.id === 98) {
          return (
            <Folder
              setWindows={setWindows}
              windows={windows}
              id={folder.id}
              key={folder.id}
              name={folder.name}
              currentWindow={currentWindow}
              setCurrentWindow={setCurrentWindow}
              image={cmd}
            />
          );
        }
        return (
          <Folder
            setWindows={setWindows}
            windows={windows}
            id={folder.id}
            key={folder.id}
            name={folder.name}
            currentWindow={currentWindow}
            setCurrentWindow={setCurrentWindow}
            image={file}
          />
        );
      })}
    </div>
  );
}
