import Image from "next/image";
import Link from "next/link";

interface PropsIcons {
  url_image: string;
  link_redirection: string;
}

export default function Icons({ url_image, link_redirection }: PropsIcons) {
  return (
    <Link className="my-auto" target="_blank" href={`${link_redirection}`}>
      <Image width={30} height={30} src={`${url_image}`} alt="icon-win" />
    </Link>
  );
}
