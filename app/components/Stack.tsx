import Image from "next/image";

export default function Stack({ name, color, iconName, items }: { name: string, color: string, iconName: string, items: string[] }) {
    return (
        <div className="flex flex-wrap mx-auto w-12/12">
            <div className="border-1 border-cyan-800 rounded-md text-center bg-indigo-100 w-12/12 border-b-5 border-b-5 border-r-5 duration-300">
                <h3 className="text-center flex justify-center gap-2 text-xl font-bold w-full text-neutral-800 underline">{name}
                    <Image src={`/${iconName}.png`} alt={iconName} width={30} height={30} />
                </h3>
                <div className="p-1 w-12/12 flex gap-2 flex-wrap justify-center">
                    {items?.map((item, index) => (
                        <p key={index} className="text-xs text-gray-500">{item},</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
