import ButtonsWindow from "./ButtonsWindow";

export default function WindowInner() {
  return (
    <div id="gap-window-inner" className="w-12/12 h-12/12 py-3 px-2">
      <div
        id="window-inner"
        className="w-12/12 h-11/12 border-2 border-b-neutral-800 border-r-neutral-800 border-t-neutral-100 border-l-neutral-100 px-1"
      >
        <ButtonsWindow />
      </div>
    </div>
  );
}
