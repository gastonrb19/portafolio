import DescriptionWindow from "./DescriptionWindow";
import RelevantInformationWindow from "./RelevantInformationWindow";

export default function WrapInformationWindow() {
  return (
    <div
      id="information"
      className="p-3 text-neutral-800 grid grid-cols-1 md:grid-cols-2 xs:text-xs md:text-md gap-4 pt-5"
    >
      <h4 className="text-xl md:text-3xl text-neutral-800 font-bold md:col-span-2 text-center">
        [Nombre puesto]
      </h4>
      <RelevantInformationWindow />
      <DescriptionWindow />
    </div>
  );
}
