import Navbar from "./Components/Header";
import Intro from "./Components/Intro";
import TechStack from "./Components/TechStack";

export default function Home() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_25%,#07073a_100%)]">
      <Navbar />
      <Intro />
      <TechStack />
    </div>
  );
}
