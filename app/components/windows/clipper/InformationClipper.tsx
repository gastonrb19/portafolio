export default function InformationClipper() {
  return (
    <section id="help-information" className="text-black p-2 text-sm">
      <h2 className="text-xl font-bold text-center">Sección de ayuda</h2>
      <p>
        Bienvenido! Esta es la sección de ayuda, si estás perdido solo deliza
        hacia abajo y revisa la sección que deseas encontrar.
      </p>
      <hr className="mt-3" />
      <h3 className="font-bold text-lg">Información</h3>
      <p>
        Esta es una pequeña aplicación interactiva, puedes abrir ventanas,
        minimizarlas, cerrar estas y también abrir una terminal. La terminal
        tiene unos pocos comandos que puedes ejecutar y desplegará breve
        información.
      </p>
      <hr className="mt-3" />
      <h3 className="font-bold text-lg">Archivos e interacción</h3>
      <p>
        Cualquier archivo en el escritorio puede ser abierto con doble clic.
        Puedes cerrar y minimizar las ventas abiertas. Pero no abrir dos veces
        la misma ;)
      </p>
      <hr className="mt-3" />
      <h3 className="font-bold text-lg">Iconos</h3>
      <p>
        Hay 2 iconos diferentes en la barra de tareas, al hacer clic en el azul
        (linkedin), serás redirigido en una nueva pestaña a mi perfil. <br/> Lo mismo
        pasará con el negro (github), pero en esta ocasión a mi perfil de
        github.
      </p>
      <hr className="mt-3" />

      <h3 className="font-bold text-lg">Terminal</h3>
      <p>
        La terminal tiene 7 comandos diferentes que puedes utilizar.
        <br />
        <span className="font-semibold italic py-5">info</span> : Despliega
        información de mi persona, contacto y cierta información personal.
        <br />
        <span className="font-semibold italic">man</span> : Despliega los
        comandos disponibles a ejecutar en la consola.
        <br />
        <span className="font-semibold italic">projs</span> : Despliega los
        diferentes proyectos realizados o en progreso.
        <br />
        <span className="font-semibold italic">exp</span> : Despliega los las
        diferentes experiencias laborales que he tenido.
        <br />
        <span className="font-semibold italic">techs</span> : Despliega las
        diferentes herramientas que he utilizado y tecnologías primarias.
        <br />
        <span className="font-semibold italic">clear</span> : Limpia la consola
        de los comandos realizados.
        <br />
        <span className="font-semibold italic">exit</span> : Cierra la consola.
      </p>
    </section>
  );
}
