"use client";

import { InteractiveCanvas } from "./InteractiveCanvas";
import { useTrans } from "@/hooks/useTrans";

const SKILLS = [
    { name: "Next.js", categoryKey: "frontend" },
    { name: "Tanstack", categoryKey: "frontend" },
    { name: "React", categoryKey: "frontend" },
    { name: "TypeScript", categoryKey: "frontend" },
    { name: "JavaScript", categoryKey: "frontend" },
    { name: "Tailwind CSS", categoryKey: "frontend" },
    { name: "Redux", categoryKey: "frontend" },
    { name: "Framer Motion", categoryKey: "frontend" },
    { name: "Node.js", categoryKey: "backend" },
    { name: "Express.js", categoryKey: "backend" },
    { name: "PostgreSQL", categoryKey: "backend" },
    { name: "MongoDB", categoryKey: "backend" },
    { name: "Supabase", categoryKey: "backend" },
    { name: "Prisma", categoryKey: "backend" },
    { name: "Drizzle", categoryKey: "backend" },
    { name: "REST APIs", categoryKey: "backend" },
    { name: "Git / GitHub", categoryKey: "tools" },
    { name: "React Query", categoryKey: "tools" },
    { name: "Figma", categoryKey: "tools" },
    { name: "Vercel", categoryKey: "tools" },
    { name: "Docker", categoryKey: "tools" },
    { name: "Postman", categoryKey: "tools" },
];

const CATEGORY_KEYS = ["frontend", "backend", "tools"] as const;

const EXPERIENCE = [
    {
        roleKey: "full-stack-developer",
        companyKey: "exabyte-llc",
        periodKey: "period-2025-present",
        descKey: "full-stack-developer-desc",
        current: true,
    },
    {
        roleKey: "backend-developer",
        companyKey: "exabyte-llc",
        periodKey: "period-aug-2025-present",
        descKey: "backend-developer-desc",
        current: false,
    },
    {
        roleKey: "frontend-developer",
        companyKey: "exabyte-llc",
        periodKey: "period-jun-2024-present",
        descKey: "frontend-developer-desc",
        current: false,
    },
];

export function ExperienceSkills() {
    const { t, dir } = useTrans("experience");

    return (
        <section
            id="experience"
            dir={dir}
            className="relative py-32 overflow-hidden border-t border-border/40 bg-transparent"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30 dark:opacity-50">
                <div
                    className="absolute top-[40%] left-[20%] size-112.5 rounded-full bg-[#00df9a]/6 blur-[110px]"
                    style={{ animation: "orb-float-2 24s ease-in-out infinite" }}
                />
                <div
                    className="absolute top-[10%] right-[5%] size-95 rounded-full bg-[#00df9a]/8 blur-[95px]"
                    style={{ animation: "orb-float-4 18s ease-in-out infinite" }}
                />
            </div>

            <InteractiveCanvas />

            <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 size-125 bg-[#00df9a]/5 rounded-full blur-[120px] z-10" />

            <div className="w-10/12 mx-auto px-6 relative z-10">
                <div className="flex items-center gap-3 mb-14">
                    <span className="text-[#00df9a] font-mono text-sm font-bold">03.</span>
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20">
                        {t("skills-experience")}
                    </span>
                    <div className="flex-1 h-px bg-border/60 max-w-20" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10">
                            {t("technical")} <span className="text-[#00df9a]">{t("skills")}</span>
                        </h2>
                        <div className="flex flex-col gap-8">
                            {CATEGORY_KEYS.map(catKey => (
                                <div key={catKey}>
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">{t(catKey)}</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {SKILLS.filter(s => s.categoryKey === catKey).map(s => (
                                            <span key={s.name} className="px-4 py-2 rounded-xl text-sm font-medium *:bg-card/40 backdrop-blur-sm border border-border/60 text-foreground hover:border-[#00df9a]/40 hover:text-[#00df9a] hover:bg-[#00df9a]/5 *:transition-all duration-200 cursor-default">
                                                {s.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10">
                            {t("work")} <span className="text-[#00df9a]">{t("experience")}</span>
                        </h2>
                        <div className="relative">
                            <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border/60" />
                            <div className="flex flex-col gap-8">
                                {EXPERIENCE.map((exp, i) => (
                                    <div key={i} className="relative pl-10 group">
                                        <div className={`absolute left-0 top-1.5 size-3.75 rounded-full border-2 transition-all duration-300 ${exp.current ? "bg-[#00df9a] border-[#00df9a] shadow-[0_0_12px_rgba(0,223,154,0.5)]" : "bg-background border-border/60 group-hover:border-[#00df9a]"}`} />
                                        <div className="p-5 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/60  group-hover:border-[#00df9a]/30 group-hover:bg-[#00df9a]/5 transition-all duration-300">
                                            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                                <h3 className="text-base font-bold text-foreground">{t(exp.roleKey)}</h3>
                                                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${exp.current ? "bg-[#00df9a]/15 text-[#00df9a]" : "bg-muted text-muted-foreground"}`}>
                                                    {t(exp.periodKey)}
                                                </span>
                                            </div>
                                            <p className="text-[#00df9a] text-xs font-semibold mb-2">{t(exp.companyKey)}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{t(exp.descKey)}</p>
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