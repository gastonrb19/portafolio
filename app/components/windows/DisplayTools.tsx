import Image from "next/image";
import ItemToolBar from "./ItemToolBar";

export default function DisplayTools() {
  return (
    <>
      <div className="bg-windows-toolbar border-1 border-gray-700 shadow-lg absolute bottom-12 left-0 w-fit flex">
        <ul className="space-y-2 w-full">
          <ItemToolBar name="Desarrollos" icon="/folder.png" />
          <ItemToolBar name="Experiencia" icon="/file.png" />
          <ItemToolBar name="Tecnologias" icon="/file.png" />
          <ItemToolBar name="Ayuda" icon="/clippy.png" />
        </ul>
      </div>
    </>
  );
}
