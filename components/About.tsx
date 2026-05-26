"use client";

import { InteractiveCanvas } from "./InteractiveCanvas";
import { Code2, Database, Zap } from "lucide-react";

export function About() {
    return (
        <section
            id="about"
            className="relative py-28 bg-background overflow-hidden border-t border-border/40"
        >
            {/* الأنيميشن التفاعلي الخاص بالخلفية للسكشن */}
            <InteractiveCanvas />

            {/* إضاءة جانبية متحركة خفيفة (Ambient Glow) */}
            <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00df9a]/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* الجزء الأيسر: المحتوى النصي */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/20">
                        My Story
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        Passionate about weaving tech & design into <span className="text-[#00df9a]">digital reality</span>
                    </h2>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        I am a full-stack software developer specialized in building fast, scalable, and secure web applications using the modern **Next.js** ecosystem. My core passion lies in bridging the gap between elegant minimalist user interfaces and robust backend architecture.
                    </p>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        I deeply care about user experience (UX/UI) details, writing maintainable clean code, and engineering optimized database performance to deliver fully-integrated, production-ready products that stand out.
                    </p>
                </div>

                {/* الجزء الأيمن: كروت المميزات */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">

                    {/* كارت 1 */}
                    <div className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">Architecture & Clean Code</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    Crafting scalable components with fully structured, flexible, and reusable engineering patterns.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* كارت 2 */}
                    <div className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">Backend & Security</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    Structuring databases and implementing tight security models like Row Level Security (RLS).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* كارت 3 */}
                    <div className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">Performance Optimization</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    Blazing-fast speed execution, advanced SEO structures, and dynamic rendering strategies (SSR/ISR).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}