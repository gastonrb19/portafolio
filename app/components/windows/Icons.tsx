import Image from "next/image";
import Link from "next/link";

interface PropsIcons {
  url_image: string;
  link_redirection: string;
}

export default function Icons({ url_image, link_redirection }: PropsIcons) {
  return (
    <Link
      className="my-auto inline-flex items-center justify-center w-[32px] h-[32px] min-w-[32px] min-h-[32px]"
      target="_blank"
      href={`${link_redirection}`}
    >
      <Image
        width={30}
        height={30}
        src={`${url_image}`}
        alt="icon-win"
        className="w-[30px] h-[30px] min-w-[30px] min-h-[30px]"
      />
    </Link>
  );
}
