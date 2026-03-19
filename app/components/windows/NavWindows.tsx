"use client";
import { WrapFolderProps } from "./interfaces/Interfaces";
import { useState } from "react";

import DisplayTools from "./DisplayTools";
import ClockWindows from "./Clock";
import DividerWindows from "./Divider";
import ItemWindows from "./ItemWindows";
import ToolBarWindows from "./ToolBar";
import WrapIcons from "./WrapIcons";

export default function NavWindows({
  folders,
  setCurrentWindow,
  setWindows,
  windows,
}: {
  folders: WrapFolderProps[];
  setCurrentWindow: (currentWindow: number) => void;
  setWindows: (folders: WrapFolderProps[]) => void;
  windows: WrapFolderProps[];
}) {
  //State for the toolbar (include shell)
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-windows-toolbar p-1 flex gap-1 bottom-0 fixed w-full">
        {/* Display all elements avaible, include shell */}
        <ToolBarWindows isOpen={isOpen} setOpen={setOpen} />

        <DividerWindows />
        <WrapIcons />
        <DividerWindows />

        {/* Display Items that are open */}
        <div className="relative w-full">
          <div className="w-full overflow-x-auto flex gap-1 flex-nowrap">
            {folders
              .filter((fold) => fold.isOpen === true)
              .map((folder) => (
                <ItemWindows
                  windows={windows}
                  setCurrentWindow={setCurrentWindow}
                  setWindows={setWindows}
                  id={folder.id}
                  key={folder.id}
                  name={folder.name}
                  file_url={folder.url_image}
                />
              ))}
          </div>
          <div className="block md:hidden absolute bottom-0 left-0 right-0 h-0.5 bg-win98-selected opacity-70" />
        </div>
        <ClockWindows />
      </nav>
      {isOpen ? (
        <DisplayTools
          setOpen={setOpen}
          setCurrentWindow={setCurrentWindow}
          setWindows={setWindows}
          windows={windows}
        />
      ) : null}
    </>
  );
}
