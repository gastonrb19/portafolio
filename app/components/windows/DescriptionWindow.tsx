export default function DescriptionWindow({
  description,
}: {
  description?: string;
}) {
  return (
    <div className="" id="description">
      <h5 className="font-bold xs:text-sm md:text-lg">Descripción</h5>
      <p className="">{description}</p>
    </div>
  );
}
