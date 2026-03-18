import { WrapFolderProps } from "./interfaces/Interfaces";
import ToolWindow from "./ToolWindow";
import WindowInner from "./WindowInner";

export default function Window({
  experiences,
  setCurrentWindow,
  currentWindow,
  windows,
  setWindows,
}: {
  experiences: WrapFolderProps;
  setCurrentWindow: (currentWindow: number) => void;
  currentWindow: number;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
}) {
  return (
    <article className="w-8/12 bg-windows-toolbaropacity h-8/12 fixed top-0 bottom-0 my-auto z-10 mx-auto left-0 right-0 shadow-lg border-2 border-b-neutral-100 border-r-neutral-100 border-t-neutral-600 border-l-neutral-600">
      <ToolWindow
        windows={windows}
        setWindows={setWindows}
        setCurrentWindow={setCurrentWindow}
        currentWindow={currentWindow}
        name={experiences.name}
      />
      <WindowInner
        setCurrentWindow={setCurrentWindow}
        currentWindow={currentWindow}
        windows={windows}
        setWindows={setWindows}
        experiences={experiences.experiences}
      />
    </article>
  );
}
