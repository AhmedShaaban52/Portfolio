import { InteractiveCanvas } from "./InteractiveCanvas";

const SKILLS = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Supabase"];

export function ExperienceSkills() {
    return (
        <section id="experience" className="relative py-24 bg-background overflow-hidden border-t">
            <InteractiveCanvas />
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Skills */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Technical <span className="text-[#00df9a]">Skills</span></h2>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.map(s => (
                            <span key={s} className="px-5 py-2.5 bg-card border rounded-xl text-sm font-medium hover:border-[#00df9a]/50 transition-colors">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Work <span className="text-[#00df9a]">Experience</span></h2>
                    <div className="space-y-8">
                        <div className="relative pl-8 border-l-2 border-muted hover:border-[#00df9a] transition-colors">
                            <div className="absolute w-4 h-4 bg-[#00df9a] rounded-full -left-[9px] top-1 shadow-[0_0_10px_#00df9a]" />
                            <h3 className="text-lg font-bold">Senior Frontend Developer</h3>
                            <p className="text-[#00df9a] text-sm mb-2">Company Name • 2022 - Present</p>
                            <p className="text-muted-foreground text-sm">Led a team of developers to build a scalable dashboard using Next.js and optimized performance by 40%.</p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-muted hover:border-[#00df9a] transition-colors">
                            <div className="absolute w-4 h-4 bg-muted rounded-full -left-[9px] top-1" />
                            <h3 className="text-lg font-bold">Fullstack Developer</h3>
                            <p className="text-[#00df9a] text-sm mb-2">Startup Studio • 2020 - 2022</p>
                            <p className="text-muted-foreground text-sm">Developed various MVP products for startups using React, Node.js and AWS.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}