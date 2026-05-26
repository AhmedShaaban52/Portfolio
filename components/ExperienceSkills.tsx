"use client";

const SKILLS = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Supabase", category: "Backend" },
    { name: "Prisma", category: "Backend" },
    { name: "Git / GitHub", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Vercel", category: "Tools" },
    { name: "Docker", category: "Tools" },
];

const CATEGORIES = ["Frontend", "Backend", "Tools"] as const;

const EXPERIENCE = [
    {
        role: "Senior Frontend Developer",
        company: "Company Name",
        period: "2022 – Present",
        desc: "Led a team of developers to build a scalable dashboard using Next.js and optimized performance by 40%.",
        current: true,
    },
    {
        role: "Fullstack Developer",
        company: "Startup Studio",
        period: "2020 – 2022",
        desc: "Developed various MVP products for startups using React, Node.js and AWS deployments.",
        current: false,
    },
    {
        role: "Frontend Developer",
        company: "Freelance",
        period: "2018 – 2020",
        desc: "Delivered 15+ client projects focusing on responsive design and performance optimization.",
        current: false,
    },
];

export function ExperienceSkills() {
    return (
        <section
            id="experience"
            className="relative py-32 overflow-hidden border-t border-border/40 bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Label */}
                <div className="flex items-center gap-3 mb-14">
                    <span className="text-[#00df9a] font-mono text-sm font-bold">03.</span>
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium
            bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20">
                        Skills & Experience
                    </span>
                    <div className="flex-1 h-px bg-border/60 max-w-[80px]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Skills */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10">
                            Technical <span className="text-[#00df9a]">Skills</span>
                        </h2>
                        <div className="flex flex-col gap-8">
                            {CATEGORIES.map(cat => (
                                <div key={cat}>
                                    <p className="text-xs font-semibold text-muted-foreground
                    uppercase tracking-widest mb-3">{cat}</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {SKILLS.filter(s => s.category === cat).map(s => (
                                            <span key={s.name} className="px-4 py-2 rounded-xl text-sm font-medium
                        bg-card/40 backdrop-blur-sm border border-border/60 text-foreground
                        hover:border-[#00df9a]/40 hover:text-[#00df9a] hover:bg-[#00df9a]/5
                        transition-all duration-200 cursor-default">
                                                {s.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10">
                            Work <span className="text-[#00df9a]">Experience</span>
                        </h2>
                        <div className="relative">
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60" />
                            <div className="flex flex-col gap-8">
                                {EXPERIENCE.map((exp, i) => (
                                    <div key={i} className="relative pl-10 group">
                                        <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2
                      transition-all duration-300
                      ${exp.current
                                                ? "bg-[#00df9a] border-[#00df9a] shadow-[0_0_12px_rgba(0,223,154,0.5)]"
                                                : "bg-background border-border/60 group-hover:border-[#00df9a]"
                                            }`}
                                        />
                                        <div className="p-5 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/60
                      group-hover:border-[#00df9a]/30 group-hover:bg-[#00df9a]/5
                      transition-all duration-300">
                                            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                                <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full
                          ${exp.current
                                                        ? "bg-[#00df9a]/15 text-[#00df9a]"
                                                        : "bg-muted text-muted-foreground"
                                                    }`}>
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-[#00df9a] text-xs font-semibold mb-2">{exp.company}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}