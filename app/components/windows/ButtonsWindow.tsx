import ButtonItemWindow from "./ButtonItemWindow";

export default function ButtonsWindow() {
  return (
    <div
      id="buttons-section"
      className="xs:text-xs md:text-md text-neutral-800 flex flex-wrap -ml-1 "
    >
      <ButtonItemWindow name="Nombre puesto" />
      <ButtonItemWindow name="Nombre puesto" />
      <ButtonItemWindow name="Nombre puesto" />
      <ButtonItemWindow name="Nombre puesto" />
      <ButtonItemWindow name="Nombre puesto" />
    </div>
  );
}
