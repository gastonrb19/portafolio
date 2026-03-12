"use client";
import NavWindows from "../components/windows/Nav";
import WrapFolders from "../components/windows/WrapFolders";
import Window from "../components/windows/Window";
import { useState } from "react";
import { WrapFolderProps } from "../components/windows/interfaces/Interfaces";

const windowOptions = [
  {
    id: 1,
    name: "Experiencias",
    isFile: true,
    url_image: "/file.png",
    isOpen: false,
    experiences: [
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
    ],
  },
];

export default function Windows() {
  const [currentWindow, setCurrentWindow] = useState<number>(0);
  const [windows, setWindows] = useState<WrapFolderProps[]>([...windowOptions]);

  return (
    <>
      <section className="bg-windows-background min-h-screen">
        <WrapFolders
          setWindows={setWindows}
          windows={windows}
          folders={windows}
          currentWindow={currentWindow}
          setCurrentWindow={setCurrentWindow}
        />
        <NavWindows folders={windows} />
        {/*ARREGLAR EL COMPONENTE, SEGUN LA PROPIEDAD DEL FINAL DESPLEGAR COMPONENTE DIFERENTE
          POR TIPO (EXPERIENCIAS-experiences | TECNOLOGIES-) 
          */}
        {currentWindow === 0 ? (
          <></>
        ) : (
          <Window experiences={windows[0]} />
        )}
      </section>
    </>
  );
}
