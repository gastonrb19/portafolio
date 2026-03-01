import SocialIcon from "./SocialIcon";

export default function Social() {
    return (
        <section className="flex justify-center gap-10 pt-2 pb-5 md:col-span-2">
            <p className="text-gray-500 italic">Redes y enlaces</p>
            <SocialIcon src="/github.png" alt="Github" href="https://github.com/gastonrb19" />
            <SocialIcon src="/linkedin.png" alt="Linkedin" href="https://www.linkedin.com/in/gast%C3%B3n-rojas-barra-103b36386/" />
            <SocialIcon src="/instagram.png" alt="Instagram" href="https://www.instagram.com/elperroconmaspulgass/" />
        </section>
    )
}