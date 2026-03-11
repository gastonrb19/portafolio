import { Tecnology } from "./interfaces/Interfaces";
export default function RelevantInformationWindow({
  start_date,
  finish_date,
  company_name,
  tecnologies,
}: {
  start_date?: string;
  finish_date?: string;
  company_name?: string;
  tecnologies?: Tecnology[];
}) {
  return (
    <>
      <div className="" id="relevant-info">
        <h5 className="font-bold xs:text-sm md:text-lg">Fecha</h5>
        <p>
          {start_date} - {finish_date || "Actualidad"}
        </p>
        <h5 className="font-bold xs:text-sm md:text-lg">Empresa</h5>
        <p>{company_name}</p>
        <h5 className="font-bold xs:text-sm md:text-lg">Tecnologias</h5>
        <ul>
          {tecnologies?.map((tech) => (
            <li key={tech?.id}>{tech?.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
