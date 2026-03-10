import ButtonItemWindow from "./ButtonItemWindow";
import { Experience } from "./interfaces/Interfaces";

export default function ButtonsWindow({
  experiences,
}: {
  experiences?: Experience[];
}) {
  return (
    <div
      id="buttons-section"
      className="xs:text-xs md:text-md text-neutral-800 flex flex-wrap -ml-1 "
    >
      {experiences?.map((experience) => (
        <ButtonItemWindow key={experience.id} name={experience.company_name} />
      ))}
    </div>
  );
}
