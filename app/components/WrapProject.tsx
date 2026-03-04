import WrapLists from "./WrapLists";
import InfoDisplayProject from "./InfoDisplayProject";

export default function WrapProject() {
    return (
        <section className="bg-indigo-100 text-neutral-900 px-4 grid grid-cols-2 text-sm gap-2 py-5">
            <h2 className="text-center text-3xl font-bold col-span-2 p-1 bg-neutral-800 text-white min-w-full rounded-lg">Experiencia relevante</h2>
            <p className="col-span-2 text-center mb-5 text-xs text-gray-500 italic">haz clic sobre el nombre del proyecto para ver más detalles</p>
            <WrapLists />
            <InfoDisplayProject />
        </section>
    )
};