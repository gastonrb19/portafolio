import Image from "next/image";

interface ToolBarWindowsProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function ToolBarWindows({
  isOpen,
  setOpen,
}: ToolBarWindowsProps) {
  return (
    <button
      onClick={setOpen.bind(null, !isOpen)}
      className="text-black flex items-center gap-1 px-4 shadow-inner active:shadow-gray-500
        border-1 border-t-neutral-200 border-l-neutral-200 border-gray-700 text-xs cursor-pointer min-h-[32px]"
    >
      <Image
        width={30}
        height={30}
        src="/windows-98.png"
        alt="icon-win"
        className="w-[30px] h-[30px] min-w-[30px] min-h-[30px]"
      />
      <span className="hidden md:block">Start</span>
    </button>
  );
}
