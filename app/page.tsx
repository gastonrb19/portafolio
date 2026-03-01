import ProfileImage from "./components/Imagen";
import AboutMe from "./components/AboutMe";
import WrapExperiencia from "./components/WrapExperiencia";
import Social from "./components/Social";

export default function Home() {
  return (
    <>
      <main className="text-center py-10 bg-neutral-900">
        <h1 className="focus-in-contract-bck text-4xl md:text-6xl font-bold text-indigo-700">Gastón Rojas</h1>
        <p className="focus-in-contract-bck text-xl md:text-2xl font-semibold text-gray-500">Desarrollador de software</p>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 w-12/12 mx-auto pt-10 pb-10 px-4 bg-indigo-100 gap-4">
        <ProfileImage />
        <AboutMe />
        <Social />
      </section>
      <WrapExperiencia />
    </>
  );
}
