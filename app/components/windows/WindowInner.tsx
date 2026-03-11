"use client";
import { useState } from "react";
import ButtonsWindow from "./ButtonsWindow";
import Rover from "./Rover";
import WrapInformationWindow from "./WrapInformationWindow";
import { Experience, Tecnology } from "./interfaces/Interfaces";

export default function WindowInner({
  experiences,
  tecnologies,
}: {
  experiences?: Experience[];
  tecnologies?: Tecnology[];
}) {
  const [experience, setExperience] = useState<Experience[]>(experiences || []);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(experience[0] || null);
  return (
    <div id="gap-window-inner" className="w-12/12 h-12/12 py-3 px-2">
      <div
        id="window-inner"
        className="w-12/12 h-11/12 border-2 border-b-neutral-800 border-r-neutral-800 border-t-neutral-100 border-l-neutral-100 px-1 overflow-y-auto"
      >
        <ButtonsWindow experiences={experience} />
        <WrapInformationWindow experience={selectedExperience} />
      </div>
      <Rover />
    </div>
  );
}
