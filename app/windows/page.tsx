import NavWindows from "../components/windows/Nav";
import ToolWindow from "../components/windows/ToolWindow";
import WrapFolders from "../components/windows/WrapFolders";
import Window from "../components/windows/Window";

export default function Windows() {
  return (
    <>
      <section className="bg-windows-background min-h-screen">
        <WrapFolders />
        <NavWindows />
        <Window />
      </section>
    </>
  );
}
