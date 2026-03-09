import Image from "next/image";

export default function ClockWindows() {
  return (
    <>
      <div className="flex w-fit ml-auto items-center gap-1 px-2 py-0.5 border-1 border-t-neutral-200 border-l-neutral-200 border-gray-700 shadow-inner shadow-gray-500">
        <Image width={20} height={20} src="/calendar.png" alt="calendar" />
        <span className="text-black text-xs ml-1">
          {new Date().toLocaleDateString()}
        </span>
      </div>
    </>
  );
}
