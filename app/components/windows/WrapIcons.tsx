import Icons from "./Icons";
import linkedin from "@/public/linkedin.png"
import github from "@/public/github.png"


export default function WrapIcons() {
  return (
    <>
      <Icons
        link_redirection="https://github.com/gastonrb19/"
        image={github}
      />
      <Icons
        link_redirection="https://linkedin.com/in/oscar-gastón-rojas-barra-103b36386"
        image={linkedin}
      />
    </>
  );
}
