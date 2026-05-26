"use client";

import { ExternalLink } from "lucide-react";
import { InteractiveCanvas } from "./InteractiveCanvas";

const PROJECTS = [
    {
        title: "E-Commerce Platform",
        desc: "A fullstack store built with Next.js 14 and Stripe integration.",
        image: "/project1.jpg",
        github: "#",
        demo: "#",
        tags: ["Next.js", "TypeScript", "Tailwind"]
    },
];

// مكون صغير ومستقل لأيقونة جيت هاب بنفس المقاسات والألوان تماماً
function GithubIcon({ className }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            className={className}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

export function Projects() {
    return (
        <section id="projects" className="relative py-24 bg-background overflow-hidden border-t">
            <InteractiveCanvas />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-12">Featured <span className="text-[#00df9a]">Projects</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((p, i) => (
                        <div key={i} className="group bg-card border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00df9a]/10 transition-all duration-300">
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                <img src={p.image} alt={p.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-3">
                                    {p.tags.map(t => <span key={t} className="text-[10px] bg-[#00df9a]/10 text-[#00df9a] px-2 py-1 rounded-full">{t}</span>)}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
                                <div className="flex gap-4">
                                    <a href={p.github} className="flex items-center gap-1.5 text-sm font-medium hover:text-[#00df9a] transition-colors">
                                        {/* استخدام الأيقونة الـ SVG البرمجية هنا */}
                                        <GithubIcon className="w-4 h-4" /> Github
                                    </a>
                                    <a href={p.demo} className="flex items-center gap-1.5 text-sm font-medium hover:text-[#00df9a] transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}