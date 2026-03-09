import NavWindows from "../components/windows/Nav";
import WrapFolders from "../components/windows/WrapFolders";

export default function Windows() {
  return (
    <>
      <section className="bg-windows-background min-h-screen">
        <WrapFolders />
        <NavWindows />
      </section>
    </>
  );
}
