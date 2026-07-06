import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceSkills } from "@/components/ExperienceSkills";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full px-2 md:px-0">
          <Hero />
          <About />
          <Projects />
          <ExperienceSkills />
          <Contact />
        </div>
      </main>
    </div>
  );
}