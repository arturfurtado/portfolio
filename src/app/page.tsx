'use client'
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <TechStack/>
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
