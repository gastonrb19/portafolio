import DescriptionWindow from "./DescriptionWindow";
import RelevantInformationWindow from "./RelevantInformationWindow";
import { Experience } from "./interfaces/Interfaces";

export default function WrapInformationWindow({
  experience,
}: {
  experience: Experience | null;
}) {
  return (
    <div
      id="information"
      className="p-3 text-neutral-800 grid grid-cols-1 md:grid-cols-2 xs:text-xs md:text-md gap-4 pt-5"
    >
      <h4 className="text-xl md:text-3xl text-neutral-800 font-bold md:col-span-2 text-center">
        {experience?.company_name}
      </h4>
      <RelevantInformationWindow
        start_date={experience?.start_date}
        finish_date={experience?.finish_date}
        company_name={experience?.company_name}
        tecnologies={experience?.tecnologies}
      />
      <DescriptionWindow description={experience?.description} />
    </div>
  );
}
