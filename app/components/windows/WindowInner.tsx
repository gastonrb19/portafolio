"use client";
import { useState } from "react";
import ButtonsWindow from "./ButtonsWindow";
import Rover from "./Rover";
import WrapInformationWindow from "./WrapInformationWindow";
import { Experience } from "./interfaces/Interfaces";

const Experiences = [
  {
    id: 1,
    start_date: "22/03/1999",
    company_name: "Vida",
    description: "Información relacionada con el puesto de la vida",
    isCurrent: true,
    tecnologies: [{ id: 1, name: "Node.js" }],
  },
  {
    id: 2,
    start_date: "22/03/1999",
    company_name: "Chamba",
    description: "Información relacionada con el puesto de la chamba",
    isCurrent: true,
    tecnologies: [{ id: 1, name: "Node.js" }],
  },
];

export default function WindowInner() {
  const [experience, setExperience] = useState<Experience[]>([...Experiences]);
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
