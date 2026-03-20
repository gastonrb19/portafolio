"use client";
import NavWindows from "./components/windows/NavWindows";
import WrapFolders from "./components/windows/WrapFolders";
import Window from "./components/windows/Window";
import { useState } from "react";
import { WrapFolderProps } from "./components/windows/interfaces/Interfaces";
import { windowOptions } from "./components/windows/helpers/information";
import ClipperFlotante from "./components/windows/clipper/ClipperFlotante";
import CvGaston from "./components/windows/CvGaston";

export default function Windows() {
  const [currentWindow, setCurrentWindow] = useState<number>(100);
  const [windows, setWindows] = useState<WrapFolderProps[]>(
    windowOptions.map((win) => ({
      ...win,
      experiences: win.experiences.filter((exp) => exp !== undefined),
    })),
  );

  return (
    <>
      <section className="bg-windows-background min-h-screen">
        {/* Display elements in the desktop */}
        <WrapFolders
          setWindows={setWindows}
          windows={windows}
          folders={windows}
          currentWindow={currentWindow}
          setCurrentWindow={setCurrentWindow}
        />

        <CvGaston />

        <ClipperFlotante
          currentWindow={currentWindow}
          setCurrentWindow={setCurrentWindow}
          setWindows={setWindows}
          windows={windows}
        />

        {/*
            Pass the option to open, not filter, because ToolBarWindows element
            needs all the elemnts to display them, even if there aren't display yet.
        */}
        <NavWindows
          windows={windows}
          setCurrentWindow={setCurrentWindow}
          setWindows={setWindows}
          folders={windows.filter((win) => win.isOpen == true)}
        />
        {currentWindow === 0 ? (
          <></>
        ) : (
          <Window
            windows={windows}
            setWindows={setWindows}
            currentWindow={currentWindow}
            setCurrentWindow={setCurrentWindow}
            experiences={windows.filter((win) => win.id == currentWindow)[0]}
          />
        )}
      </section>
    </>
  );
}
