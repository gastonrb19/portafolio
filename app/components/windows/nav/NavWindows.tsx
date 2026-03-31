"use client";
import { WrapFolderProps } from "../interfaces/Interfaces";
import { useState } from "react";

import DisplayTools from "./toolbar/DisplayTools";
import ClockWindows from "./Clock";
import DividerWindows from "./Divider";
import ItemWindows from "./open-minimized-item/ItemWindows";
import ButtonToolBar from "./toolbar/ButtonToolBar";
import WrapIcons from "./icons/WrapIcons";
import cmd from "@/public/cmd.png";
import file from "@/public/file.png";

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
        <ButtonToolBar isOpen={isOpen} setOpen={setOpen} />

        <DividerWindows />
        <WrapIcons />
        <DividerWindows />

        {/* Display Items that are open */}
        <div className="w-full overflow-x-auto flex gap-1">
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
                file={folder.id === 98 ? cmd : file}
              />
            ))}
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
