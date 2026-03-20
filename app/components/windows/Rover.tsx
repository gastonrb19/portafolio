import Image from "next/image";
import rover from "@/public/rover.png";

export default function Rover() {
  return (
    <Image
      width={100}
      height={100}
      src={rover}
      alt="rover"
      className="absolute bottom-50 md:bottom-10 right-10 opacity-20 w-20 h-20 md:w-30 md:h-30"
    />
  );
}
