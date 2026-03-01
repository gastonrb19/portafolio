import Image from "next/image";

export default function ProfileImage() {
    return (
        <article className="flex justify-center">
            <Image src="/newprofile.jpeg" alt="Profile"
                width={500} height={500}
                className="rounded-br-4xl rounded-tl-4xl 
            object-cover object-top
             p-1 bg-neutral-800 drop-shadow-xl w-80 h-80 md:w-96 md:h-96" />
        </article>

    )
}