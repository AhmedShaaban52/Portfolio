"use client";

import { Code2, Database, Zap, Users, Package, Calendar } from "lucide-react";

const STATS = [
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Projects Shipped", value: "20+", icon: Package },
    { label: "Happy Clients", value: "15+", icon: Users },
];

const CARDS = [
    {
        icon: Code2,
        title: "Architecture & Clean Code",
        desc: "Crafting scalable components with fully structured, flexible, and reusable engineering patterns.",
    },
    {
        icon: Database,
        title: "Backend & Security",
        desc: "Structuring databases and implementing tight security models like Row Level Security (RLS).",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        desc: "Blazing-fast speed, advanced SEO structures, and dynamic rendering strategies (SSR/ISR).",
    },
];

export function About() {
    return (
        <section
            id="about"
            className="relative py-32 overflow-hidden border-t border-border/40 bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Label */}
                <div className="flex items-center gap-3 mb-14">
                    <span className="text-[#00df9a] font-mono text-sm font-bold">01.</span>
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium
            bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20">
                        About Me
                    </span>
                    <div className="flex-1 h-px bg-border/60 max-w-[80px]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left */}
                    <div className="lg:col-span-6 flex flex-col space-y-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
              text-foreground leading-[1.1]">
                            Passionate about weaving tech & design into{" "}
                            <span className="text-[#00df9a]">digital reality</span>
                        </h2>

                        <p className="text-muted-foreground text-base leading-relaxed">
                            I'm a fullstack developer specialized in building fast, scalable, and secure
                            web applications using the modern Next.js ecosystem. My core passion lies in
                            bridging the gap between elegant UIs and robust backend architecture.
                        </p>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            I care deeply about UX/UI details, writing maintainable clean code, and
                            engineering optimized database performance to deliver production-ready
                            products that stand out.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            {STATS.map(({ label, value, icon: Icon }) => (
                                <div key={label} className="group flex flex-col items-center text-center p-5
                  rounded-2xl bg-card/40 backdrop-blur-sm border border-border/60
                  hover:border-[#00df9a]/30 hover:bg-[#00df9a]/5 transition-all duration-300">
                                    <Icon className="w-5 h-5 text-[#00df9a] mb-3 opacity-70" />
                                    <span className="text-3xl font-bold text-foreground">{value}</span>
                                    <span className="text-[11px] text-muted-foreground mt-1 leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        {CARDS.map(({ icon: Icon, title, desc }, i) => (
                            <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl
                bg-card/40 backdrop-blur-sm border border-border/60
                hover:border-[#00df9a]/30 hover:bg-[#00df9a]/5 transition-all duration-300">
                                <div className="shrink-0 p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a]
                  group-hover:bg-[#00df9a] group-hover:text-black transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1.5">{title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}