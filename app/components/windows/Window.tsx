import { WrapFolderProps } from "./interfaces/Interfaces";
import ToolWindow from "./ToolWindow";
import WindowInner from "./WindowInner";

export default function Window({
  experiences,
}: {
  experiences: WrapFolderProps;
}) {
  return (
    <article className="w-8/12 bg-windows-toolbaropacity h-8/12 fixed top-0 bottom-0 my-auto z-10 mx-auto left-0 right-0 shadow-lg border-2 border-b-neutral-100 border-r-neutral-100 border-t-neutral-600 border-l-neutral-600">
      <ToolWindow name={experiences.name} />
      <WindowInner experiences={experiences.experiences} />
    </article>
  );
}
