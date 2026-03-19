import Folder from "./Folder";
import { WrapFolderProps } from "./interfaces/Interfaces";

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
        if (folder.id === 99) {
          return null;
        }
        return (
          <Folder
            setWindows={setWindows}
            windows={windows}
            id={folder.id}
            key={folder.id}
            name={folder.name}
            url_image={folder.url_image}
            currentWindow={currentWindow}
            setCurrentWindow={setCurrentWindow}
          />
        );
      })}
    </div>
  );
}
