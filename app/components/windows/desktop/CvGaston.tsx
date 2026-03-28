"uce client";

import Image from "next/image";
import file from "@/public/file.png";

export default function CvGaston() {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/portafolio/cv.pdf";
    link.download = "cv-gaston-rojasb.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="block ml-3 cursor-pointer active:scale-90 focus:text-white duration-200"
      onDoubleClick={downloadCv}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Image
        alt="cv-icon-gaston"
        src={file}
        width={50}
        height={30}
        className="ml-5"
      />
      Cv-gtn.pdf
    </button>
  );
}
