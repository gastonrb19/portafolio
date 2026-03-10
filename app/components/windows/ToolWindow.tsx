export default function ToolWindow() {
  return (
    <div
      id="name-blue-bar"
      className="w-12/12 bg-win98-selected flex items-center justify-between px-1 font-bold"
    >
      <h3>Experiencias</h3>
      <div
        id="div-buttons"
        className="flex justify-end gap-0.5 p-1 text-neutral-800"
      >
        <button className="border-1 w-5 bg-windows-toolbar">-</button>
        <button className="border-1 w-5 bg-windows-toolbar">x</button>
      </div>
    </div>
  );
}
