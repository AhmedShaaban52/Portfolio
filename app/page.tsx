import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";
import Section from "@/components/AboutMe/Section";

const Skills = dynamic(() => import("@/components/Skills/Skills"), {ssr: false,});
const MyProjects = dynamic(() => import("@/components/MyProjects/MyProjects"), {ssr: false,});
const Contact = dynamic(() => import("@/components/Contact/Contact"), {ssr: false,});

export default function Home() {
  return (
    <div>
      <Hero />
      <Section />
      <Skills />
      <MyProjects />
      <Contact />
    </div>
  );
}