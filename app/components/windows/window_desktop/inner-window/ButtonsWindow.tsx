import ButtonItemWindow from "./ButtonItemWindow";
import { Experience } from "../../interfaces/Interfaces";

export default function ButtonsWindow({
  experiences,
  setSelectedExperience,
}: {
  experiences?: Experience[];
  setSelectedExperience: (id: number) => void;
}) {
  return (
    <div
      id="buttons-section"
      className="xs:text-xs md:text-md text-neutral-800 flex flex-wrap -ml-1"
    >
      {experiences?.map((experience) => (
        <ButtonItemWindow
          id={experience.id}
          key={experience.id}
          name={experience.name || ""}
          setSelectedExperience={setSelectedExperience}
        />
      ))}
    </div>
  );
}
