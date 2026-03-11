"use client";
import { WrapFolderProps } from "./interfaces/Interfaces";
import { useState } from "react";

import DisplayTools from "./DisplayTools";
import ClockWindows from "./Clock";
import DividerWindows from "./Divider";
import ItemWindows from "./Item";
import ToolBarWindows from "./ToolBar";
import WrapIcons from "./WrapIcons";

export default function NavWindows({
  folders,
}: {
  folders: WrapFolderProps[];
}) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-windows-toolbar p-1 flex gap-1 bottom-0 fixed w-full">
        <ToolBarWindows isOpen={isOpen} setOpen={setOpen} />
        <DividerWindows />
        <WrapIcons />
        <DividerWindows />
        {folders
          .filter((fold) => fold.isOpen)
          .map((folder) => (
            <ItemWindows
              key={folder.id}
              name={folder.name}
              file_url={folder.url_image}
            />
          ))}
        <ClockWindows />
      </nav>
      {isOpen ? <DisplayTools /> : null}
    </>
  );
}
