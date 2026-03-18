"use client";
import { useState } from "react";
import { WrapFolderProps } from "../interfaces/Interfaces";

export default function WindowShell({
  setCurrentWindow,
  windows,
  setWindows,
  currentWindow,
}: {
  setCurrentWindow: (currentWindow: number) => void;
  windows: WrapFolderProps[];
  setWindows: (folders: WrapFolderProps[]) => void;
  currentWindow: number;
}) {
  const commands = [
    {
      id: 1,
      command: "info",
      description: "Información de mi persona, contacto e información personal",
    },
    {
      id: 2,
      command: "man",
      description:
        "Comandos disponibles:\ninfo -> Mostrar información\nman -> Mostrar manual\nprojs -> Mostrar proyectos\nexp -> Mostrar experiencia\ntechs -> Mostrar habilidades técnicas\nclear -> Limpiar la consola\nexit -> Salir de la consola",
    },
    {
      id: 3,
      command: "projs",
      description:
        "Proyectos clave:\n- Web Aguiplas\n- Full stack Intercar\n- Portafolio Windows\n- Morfeo App",
    },
    {
      id: 4,
      command: "exp",
      description:
        "Experiencias clave:\n- Fullstack/Soporte\n- Supervisor ventas\n- Coordinador TI\n- Analista Contable\n- Jefe Sucursal\n- Vendedor",
    },
    {
      id: 5,
      command: "techs",
      description:
        "Tecnologías clave:\n- Node\n- Express\n- React\n- Next\n- Tailwind\n- SQL\n- Docker\n- AWS\n- Python",
    },
    { id: 6, command: "clear", description: "Limpiar la consola" },
    { id: 7, command: "exit", description: "Salir de la consola" },
  ];
  const [history, setHistory] = useState<
    { command: string; message: string }[]
  >([]);

  return (
    <div className=" flex gap-2 flex-col h-full w-full p-4">
      <div className="gap-2">
        {history.map((cmd, index) => (
          <div className="flex gap-2" key={index}>
            <span className="text-green-600 text-nowrap text-lg">C:\</span>
            <p className="text-white whitespace-pre-wrap" key={index}>
              {cmd.command}: {cmd.message}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <span className="text-green-600 text-nowrap text-lg">C:\</span>
        <input
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              const input = (e.target as HTMLInputElement).value;
              const command = commands.filter(
                (cmd) => cmd.command === input,
              )[0];

              if (!command) {
                setHistory([
                  ...history,
                  { command: input, message: "Command not found" },
                ]);
              }
              if (command) {
                if (command.command === "clear") {
                  setHistory([]);
                  e.currentTarget.value = "";
                  return;
                }
                if (command.command === "exit") {
                  setWindows(
                    windows.map((win) => {
                      if (win.id === currentWindow) {
                        return { ...win, isOpen: false };
                      }
                      return win;
                    }),
                  );
                  setCurrentWindow(0);
                  return;
                }
                setHistory([
                  ...history,
                  { command: input, message: command.description },
                ]);
              }
              e.currentTarget.value = "";
            }
          }}
          className="w-12/12 h-full border-none appearance-none active:appearance-none focus:outline-none focus:ring-0 focus:border-none mb-auto"
          placeholder=""
          autoFocus
        ></input>
      </div>
    </div>
  );
}
