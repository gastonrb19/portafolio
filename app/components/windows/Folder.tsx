import Image from "next/image";

export default function Folder({
  name,
  url_image,
}: {
  name: string;
  url_image: string;
}) {
  return (
    <div>
      <button>
        <Image
          width={50}
          height={50}
          src={url_image}
          alt="folder"
          className="mx-auto"
        />
        <p>{name}</p>
      </button>
    </div>
  );
}
