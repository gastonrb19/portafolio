import Rover from "./Rover";

export default function Bienvenida() {
  return (
    <div
      id="gap-window-inner"
      className="w-12/12 h-12/12 py-3 px-2 text-neutral-950 text-sm"
    >
      <div
        id="window-inner"
        className="w-12/12 h-11/12 border-2 border-b-neutral-800 border-r-neutral-800 border-t-neutral-100 border-l-neutral-100 px-3 overflow-y-auto p-3"
      >
        <h2 className="font-semibold text-lg">¡Bienvenid@!</h2>
        <p>
          Bienvenido a mi portafolio... <br />
          Esta inspirado en win 98, así que te invito a interactuar con todo lo
          que quieras. <br />
          <br />
        </p>
        <p>
          pista: Para abrir cualquier archivo o programa del escritorio debes
          presionar doble clic!
        </p>
        <br />
        <p>
          Si en algún momento te pierdes presiona a "clippy".
          <br /> (el botón de ayuda a la derecha). Él tiene todas las
          respuestas...
        </p>
        <br />
        <p>¡Muchas gracias por tu interes en mi portafolio!</p>
        <Rover />
      </div>
    </div>
  );
}
