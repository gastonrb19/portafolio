import { Experience, Tecnology } from "../interfaces/Interfaces";
export default function RelevantInformationWindow({
  experience,
}: {
  experience: Experience | undefined | null;
}) {
  const renderValue = (value: unknown) => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc ml-5">
          {value.map((item, idx) => (
            <li key={`${idx}-${JSON.stringify(item)}`}>
              {typeof item === "object" && item !== null
                ? JSON.stringify(item)
                : String(item)}
            </li>
          ))}
        </ul>
      );
    }

    return <p>{value !== undefined && value !== null ? String(value) : "-"}</p>;
  };

  return (
    <div className="" id="relevant-info">
      {experience && Object.keys(experience).length > 0 ? (
        Object.entries(experience)
          .filter(
            ([prop]) =>
              prop !== "id" && prop !== "isCurrent" && prop !== "description" && prop !== "name",
          )
          .map(([prop, value]) => {
            if (prop === "tecnologies" && Array.isArray(value)) {
              const techNames = value
                .map((item) => {
                  if (
                    typeof item === "object" &&
                    item !== null &&
                    "name" in item
                  ) {
                    // @ts-ignore
                    return (item as Tecnology).name;
                  }
                  return null;
                })
                .filter((name) => name !== null);

              return (
                <div key={prop} className="mb-2">
                  <h5 className="font-bold xs:text-sm md:text-lg">{prop}</h5>
                  <ul className="list-disc ml-5">
                    {techNames.map((name, idx) => (
                      <li key={`${idx}-${name}`}>{name}</li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <div key={prop} className="mb-2">
                <h5 className="font-bold xs:text-sm md:text-lg">{prop}</h5>
                {renderValue(value)}
              </div>
            );
          })
      ) : (
        <></>
      )}
    </div>
  );
}
