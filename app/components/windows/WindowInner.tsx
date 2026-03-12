"use client";
import { useState } from "react";
import ButtonsWindow from "./ButtonsWindow";
import Rover from "./Rover";
import WrapInformationWindow from "./WrapInformationWindow";
import { Experience } from "./interfaces/Interfaces";

//Recibe el arreglo de experiencias dentro de la experiencia obtenida
export default function WindowInner({
  experiences,
}: {
  experiences?: Experience[];
}) {
  const [experience, setExperience] = useState<Experience[]>(experiences || []);
  const [selectedExperience, setSelectedExperience] = useState<number>(1);
  return (
    <div id="gap-window-inner" className="w-12/12 h-12/12 py-3 px-2">
      <div
        id="window-inner"
        className="w-12/12 h-11/12 border-2 border-b-neutral-800 border-r-neutral-800 border-t-neutral-100 border-l-neutral-100 px-1 overflow-y-auto"
      >
        <ButtonsWindow
          experiences={experience}
          setSelectedExperience={setSelectedExperience}
        />
        <WrapInformationWindow
          experience={experience.filter((ex) => ex.id == selectedExperience)[0]}
        />
      </div>
      <Rover />
    </div>
  );
}
