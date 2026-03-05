import Link from "next/link";
import Image from "next/image";

export default function WrapContacto(){
    return (
        <section className="text-center bg-indigo-100 pb-10 px-2 pt-5 grid grid-cols-2 text-neutral-500 gap-x-10">
            <h3 className="flex justify-center gap-2 text-3xl font-bold w-12/12 mx-auto py-2 bg-neutral-800 rounded-md text-neutral-100 col-span-2">
                Contacto
                <Image src="/contact-icon.png" alt="contact-icon" width={30} height={30}/>
            </h3>
            <article className="grid grid-cols-1 gap-2 mx-auto text-center mb-9 mt-5 md:col-span-1 col-span-2 border-1 p-2 rounded-sm border-y-5 border-neutral-800 w-10/12">
                <h4 className="text-xl font-semibold underline text-neutral-800">Información de contacto</h4>
                <Link className="w-fit mx-auto hover:text-indigo-700 duration-300 flex mx-auto gap-2" target="_blank" href="https://wa.me/+56942151261">
                    <Image src="/wsp.png" alt="wsp-icon" width={20} height={20} className="w-6"/>
                    +56942151261
                </Link>
                <Link className="w-fit mx-auto hover:text-indigo-700 duration-300 flex mx-auto gap-2" href="mailto:gastonrb19@gmail.com">
                    <Image src="/gmail.png" alt="wsp-icon" width={20} height={20} className="w-6"/>
                    gastonrb19@gmail.com
                </Link>
                <Link className="w-fit mx-auto hover:text-indigo-700 duration-300 flex mx-auto gap-2" target="_blank" href="https://www.linkedin.com/in/gast%C3%B3n-rojas-barra-103b36386/">
                    <Image src="/linkedin.png" alt="wsp-icon" width={20} height={20} className="w-6"/>
                    Perfil Linkedin
                </Link>
            </article>
            <article className="grid grid-cols-1 gap-2 mx-auto text-center mb-9 mt-5 md:col-span-1 col-span-2 border-1 p-2 rounded-sm border-y-5 border-neutral-800 w-10/12">
                <h4 className="text-xl font-semibold underline text-neutral-800">Curriculum</h4>
                <Link href="Gaston-rojas-cv.pdf" download="cv-gaston-rojas.pdf" className="rounded-sm px-1 mx-auto">
                    <Image src="/download.png" width={20} alt="icon-download" height={20} className="w-15"/>
                </Link>
                <p>Descargar cv</p>
            </article>
        </section>
    )
};
