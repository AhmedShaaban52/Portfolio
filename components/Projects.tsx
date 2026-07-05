"use client";

import { ExternalLink } from "lucide-react";
import { InteractiveCanvas } from "./InteractiveCanvas";
import Image from "next/image";
import { useTrans } from "@/hooks/useTrans";

import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/project3.png";
import project4 from "@/public/project4.png";

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

const PROJECTS = [
    {
        titleKey: "temry-market",
        descKey: "temry-market-desc",
        image: project1,
        github: "#",
        demo: "https://temryshop.com/",
        tags: ["React", "Tailwind CSS", "Ant Design", "RESTful APIs", "PHP", "Laravel"],
        featured: true,
    },
    {
        titleKey: "learnu",
        descKey: "learnu-desc",
        image: project2,
        github: "#",
        demo: "https://exabyte-eg.com/learnu",
        tags: ["React", "Tailwind CSS", "Ant Design", "RESTful APIs", "PHP", "Laravel"],
        featured: false,
    },
    {
        titleKey: "istikbal-elite",
        descKey: "istikbal-elite-desc",
        image: project3,
        github: "#",
        demo: "https://exabyte-eg.com/istikbal",
        tags: ["React", "Tailwind CSS", "Ant Design", "RESTful APIs", "PHP", "Laravel"],
        featured: false,
    },
    {
        titleKey: "sarar-egypt",
        descKey: "sarar-egypt-desc",
        image: project4,
        github: "#",
        demo: "https://sararegypt.com",
        tags: ["React", "Tailwind CSS", "Ant Design", "RESTful APIs", "PHP", "Laravel"],
        featured: false,
    },
];

export function Projects() {
    const { t } = useTrans("projects");

    return (
        <section
            id="projects"
            className="relative py-28 bg-background overflow-hidden border-t border-border/40"
        >
            <InteractiveCanvas />

            <div className="pointer-events-none absolute -left-32 top-1/3 -translate-y-1/2 size-125 bg-[#00df9a]/5 rounded-full blur-[120px]" />

            <div className="w-10/12 mx-auto px-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#00df9a] font-mono text-sm font-bold">02.</span>
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20">
                        {t("featured-work")}
                    </span>
                    <div className="flex-1 h-px bg-border/60 max-w-20" />
                </div>

                <div className="flex items-end justify-between mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        {t("selected")} <span className="text-[#00df9a]">{t("projects")}</span>
                    </h2>

                    <a
                        href="#"
                        className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#00df9a] transition-colors group"
                    >
                        <GithubIcon className="w-4 h-4" />
                        {t("view-all-on-github")}
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col bg-card/40 backdrop-blur-sm border border-border/60 rounded-2xl overflow-hidden hover:border-[#00df9a]/30 hover:shadow-2xl hover:shadow-[#00df9a]/8 transition-all duration-500"
                        >
                            <div className="relative h-56 w-full overflow-hidden bg-muted border-b border-border/40 flex flex-col">
                                <div className="h-6 bg-muted-foreground/10 border-b border-border/30 px-3 flex items-center gap-1.5 shrink-0 z-20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 inline-block"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 inline-block"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#00df9a]/60 inline-block"></span>
                                </div>

                                <div className="relative flex-1 w-full overflow-hidden">
                                    <Image
                                        src={p.image}
                                        alt={t(p.titleKey)}
                                        fill
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                        className="object-cover object-top w-full h-full transition-all duration-4000 ease-in-out group-hover:object-bottom"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                        {p.github !== "#" && (
                                            <a
                                                href={p.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium hover:bg-[#00df9a] hover:text-black transition-colors"
                                            >
                                                <GithubIcon className="w-3.5 h-3.5" /> {t("code")}
                                            </a>
                                        )}

                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00df9a] text-black text-xs font-medium hover:bg-[#00df9a]/80 transition-colors shadow-lg"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" /> {t("live-demo")}
                                        </a>
                                    </div>

                                    {p.featured && (
                                        <span className="absolute top-2 left-3 text-[9px] font-bold px-2 py-0.5 rounded bg-[#00df9a] text-black tracking-wide z-20 shadow-sm">
                                            {t("featured")}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {p.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/15">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{t(p.titleKey)}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{t(p.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}