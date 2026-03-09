"use client";
import { useState } from "react";

import DisplayTools from "./DisplayTools";
import ClockWindows from "./Clock";
import DividerWindows from "./Divider";
import ItemWindows from "./Item";
import ToolBarWindows from "./ToolBar";
import WrapIcons from "./WrapIcons";

export default function NavWindows() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-windows-toolbar p-1 flex gap-1 bottom-0 fixed w-full">
        <ToolBarWindows isOpen={isOpen} setOpen={setOpen} />
        <DividerWindows />
        <WrapIcons />
        <DividerWindows />
        <ItemWindows />
        <ItemWindows />
        <ClockWindows />
      </nav>
      {isOpen ? <DisplayTools /> : null}
    </>
  );
}
