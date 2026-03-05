import Image from "next/image";

export default function SocialIcon({ src, alt, href }: { src: string, alt: string, href: string }) {
    return (
        <a href={href} target="_blank">
            <Image src={src} alt={alt} width={30} height={30} className="hover:scale-110 transition-all duration-300" />
        </a>
    )
}