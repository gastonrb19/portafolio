import Image from "next/image";
export default function Rover() {
  return (
    <Image
      width={100}
      height={100}
      src="/rover.png"
      alt="rover"
      className="absolute xs:bottom-50 md:bottom-10 right-10 opacity-20 xs:w-20 xs:h-20 md:w-30 md:h-30"
    />
  );
}
