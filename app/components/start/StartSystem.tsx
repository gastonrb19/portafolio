export default function StartSystem({
  setStarted,
}: {
  setStarted: (started: boolean) => void;
}) {
  return (
    <section className=" w-screen h-screen flex items-center justify-center bg-win98 min-h-screen bg-win98-selected">
      <div className="terminal-container flex flex-col justify-start items-start mr-auto p-5 w-12/12 text-sm">
        <p className="linea l1"> root@root-pc:~$ Cargando portafolio win 98</p>
        <p className="linea l2">
          {" "}
          root@root-pc:~$ Cargando información Gastón Rojas...
        </p>
        <p className="linea l3">root@root-pc:~$ ¡Listo!</p>

        <button
          id="btn-comenzar"
          className="fade-in mx-auto"
          onClick={(e) => {
            setStarted(true);
          }}
        >
          Comenzar
        </button>
      </div>
    </section>
  );
}
