"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClockWindows() {
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    setDate(new Date().getDay().toString());
  }, []);

  return (
    <>
      <div className="flex w-40 ml-auto items-center gap-1 px-4 border-1 border-t-neutral-200 border-l-neutral-200 border-gray-700 shadow-inner shadow-gray-500 text-xs overflow-hidden">
        <p className="text-black text-xs">{date}</p>
        <Image width={20} height={20} src="/calendar.png" alt="calendar" className="w-15 md:w-10"/>
      </div>
    </>
  );
}
