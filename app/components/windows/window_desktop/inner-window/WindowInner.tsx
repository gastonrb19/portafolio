"use client";
import { useState } from "react";
import ButtonsWindow from "./ButtonsWindow";
import Rover from "../Rover";
import WrapInformationWindow from "./WrapInformationWindow";
import { Experience } from "../../interfaces/Interfaces";
import WindowShell from "../../shell/WindowShell";
import { WrapFolderProps } from "../../interfaces/Interfaces";
import InformationClipper from "../../desktop/clipper/InformationClipper";
import Bienvenida from "../../bienvenida/Bievenida";

//Recibe el arreglo de experiencias dentro de la experiencia obtenida
export default function WindowInner({
  experiences,
  currentWindow,
  setCurrentWindow,
  setWindows,
  windows,
}: {
  experiences?: Experience[];
  currentWindow: number;
  setCurrentWindow: (currentWindow: number) => void;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
}) {
  if (currentWindow === 100) {
    return <Bienvenida />;
  }
  if (currentWindow === 98) {
    return (
      <div
        id="gap-window-inner"
        className="w-12/12 h-12/12 py-3 px-2 bg-neutral-950"
      >
        <div
          className="w-12/12 h-11/12 px-1 overflow-y-auto bg-neutral-950"
          id="window-inner"
        >
          <WindowShell
            currentWindow={currentWindow}
            setWindows={setWindows}
            windows={windows}
            setCurrentWindow={setCurrentWindow}
          />
        </div>
      </div>
    );
  }

  if (currentWindow === 99) {
    return (
      <div id="gap-window-inner" className="w-12/12 h-12/12 py-3 px-2">
        <div
          id="window-inner"
          className="w-12/12 h-11/12 border-2 border-b-neutral-800 border-r-neutral-800 border-t-neutral-100 border-l-neutral-100 px-1 overflow-y-auto"
        >
          <InformationClipper />
        </div>
      </div>
    );
  } else {
    const [selectedExperience, setSelectedExperience] = useState<number>(1);
    return (
      <div id="gap-window-inner" className="w-12/12 h-12/12 py-3 px-2">
        <div
          id="window-inner"
          className="w-12/12 h-11/12 border-2 border-b-neutral-800 border-r-neutral-800 border-t-neutral-100 border-l-neutral-100 px-1 overflow-y-auto"
        >
          <ButtonsWindow
            experiences={experiences}
            setSelectedExperience={setSelectedExperience}
          />
          <WrapInformationWindow
            experience={
              experiences?.filter((ex) => ex.id == selectedExperience)[0]
            }
          />
        </div>
        <Rover />
      </div>
    );
  }
}
