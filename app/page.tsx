
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceSkills } from "@/components/ExperienceSkills";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      {/* القائمة العلوية ثابتة في مكانها */}
      <Navbar />

      {/* السكاشن هتعرض ورا بعض بشكل عمودي انسيابي */}
      <main className="flex-1 flex flex-col">
        {/* سكشن الهيرو الأساسي */}
        <Hero />

        {/* سكشن عن المطور */}
        <About />

        {/* سكشن المشاريع بالكروت والتأثير التفاعلي */}
        <Projects />

        {/* سكشن المهارات والخبرات */}
        <ExperienceSkills />

        {/* سكشن فورمة التواصل */}
        <Contact />
      </main>
    </div>
  );
}
