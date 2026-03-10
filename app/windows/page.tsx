import NavWindows from "../components/windows/Nav";
import ToolWindow from "../components/windows/ToolWindow";
import WrapFolders from "../components/windows/WrapFolders";
import Image from "next/image";

export default function Windows() {
  return (
    <>
      <section className="bg-windows-background min-h-screen">
        <WrapFolders />
        <NavWindows />
        <ToolWindow />
        <Windows/>
        <div
          id="information"
          className="p-3 text-neutral-800 grid grid-cols-1 md:grid-cols-2 xs:text-xs md:text-md gap-4 pt-5"
        >
          <h4 className="text-xl md:text-3xl text-neutral-800 font-bold md:col-span-2 text-center">
            [Nombre puesto]
          </h4>
          <div className="" id="relevant-info">
            <h5 className="font-bold xs:text-sm md:text-lg">Fecha</h5>
            <p>Marzo 2023 - Actualidad</p>
            <h5 className="font-bold xs:text-sm md:text-lg">Empresa</h5>
            <p>[Nombre empresa]</p>
            <h5 className="font-bold xs:text-sm md:text-lg">Tecnologias</h5>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="" id="description">
            <h5 className="font-bold xs:text-sm md:text-lg">Descripción</h5>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, doloremque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas, doloremque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptas, doloremque.
            </p>
          </div>
        </div>
        <Image
          width={100}
          height={100}
          src="/rover.png"
          alt="rover"
          className="absolute bottom-10 right-10 md:opacity-90 xs:opacity-20 xs:w-20 xs:h-20 md:w-30 md:h-30"
        />
      </section>
    </>
  );
}
