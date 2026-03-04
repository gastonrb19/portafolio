import Tecnologies from "./Tecnologies";
import Projects from "./Projects";

export default function WrapLists() {
    return (

        <div className="col-span-1 grid grid-cols-1 md:grid-cols-2">
            <Tecnologies />
            <Projects />
        </div>
    )
};