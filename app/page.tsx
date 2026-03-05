import ProfileImage from "./components/Imagen";
import AboutMe from "./components/AboutMe";
import WrapExperiencia from "./components/WrapExperiencia";
import Social from "./components/Social";
import WrapProject from "./components/WrapProject";
import Nav from "./components/Nav";
import WrapStack from "./components/WrapStack";
import WrapContacto from "./components/WrapContacto";

export default function Home() {
  return (
    <>
      <main className="text-center pt-10 pb-1 border-b-2 bg-neutral-950 border-indigo-400 md:bg-neutral-900 md:bg-none bg-[url('/background.jpg')] bg-cover bg-bottom md:bg-[position:bottom_-140px_right_10px] bg-no-repeat">
        <h1 className="focus-in-contract-bck text-4xl md:text-6xl font-bold text-indigo-400">Gastón Rojas</h1>
        <p className="focus-in-contract-bck text-xl md:text-2xl font-semibold text-indigo-100">Desarrollador de software</p>
        <Nav />
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 w-12/12 mx-auto pt-10 px-4 bg-indigo-100 gap-4">
        <ProfileImage />
        <AboutMe />
        <Social />
      </section>
      <WrapExperiencia />
      <WrapProject />
      <WrapStack />
      <WrapContacto />
    </>
  );
}
