import Hero from "@/components/Hero/Hero";
import Section from "@/components/AboutMe/Section";
import Skills from "@/components/Skills/Skills";
import MyProjects from "@/components/MyProjects/MyProjects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Section/>
    <Skills />
    <MyProjects />
    <Contact />
  </div>
  );
}
