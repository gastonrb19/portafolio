import Experience from "./Experience";
import ExperienceDetail from "./ExperienceDetail";

export default function WrapExperiencia() {
    return (
        <section className="bg-indigo-950 py-10 px-4 grid grid-cols-2 text-center">
            <h2 className="text-3xl font-semibold col-span-2 text-center mb-5 text-white tracking-wider">Experiencia laboral</h2>
            <article className="text-sm flex flex-col gap-2 xs:mx-auto lg:flex lg:flex-row lg:flex-wrap lg:gap-2 lg:ml-0 w-11/12">
                <Experience title="Encargado área TI" date="2022 - Actualidad" description="Encargado área TI en una empresa de software" />
                <Experience title="Encargado de ventas" date="2022 - Actualidad" description="Encargado área TI en una empresa de software" />
                <Experience title="Coordinador de TI" date="2022 - Actualidad" description="Encargado área TI en una empresa de software" />
                <Experience title="Analista contable" date="2022 - Actualidad" description="Encargado área TI en una empresa de software" />
                <Experience title="Encargado sucursal" date="2022 - Actualidad" description="Encargado área TI en una empresa de software" />
                <Experience title="Vendedor Intercar" date="2022 - Actualidad" description="Encargado área TI en una empresa de software" />
            </article>
            <ExperienceDetail />

        </section>
    )
}