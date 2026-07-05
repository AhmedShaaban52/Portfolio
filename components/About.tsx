"use client";

import { InteractiveCanvas } from "./InteractiveCanvas";
import { Code2, Database, Zap } from "lucide-react";
import { useTrans } from "@/hooks/useTrans";

const FEATURES = [
    { icon: Code2, titleKey: "architecture-clean-code", descKey: "crafting-scalable-components" },
    { icon: Database, titleKey: "backend-security", descKey: "structuring-databases-and-implementing-security" },
    { icon: Zap, titleKey: "performance-optimization", descKey: "blazing-fast-speed-execution" },
];

export function About() {
    const { t } = useTrans("about");

    return (
        <section
            id="about"
            className="relative py-28 bg-background overflow-hidden border-t border-border/40"
        >
            <InteractiveCanvas />

            <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 size-125 bg-[#00df9a]/5 rounded-full blur-[120px]" />
            <div className="w-10/12 mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/20">
                        {t("my-story")}
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        {t("passionate-about-weaving-tech-design-into")} <span className="text-[#00df9a]">{t("digital-reality")}</span>
                    </h2>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        {t("i-am-a-fullstack-software-developer")}
                    </p>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        {t("i-deeply-care-about-user-experience")}
                    </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                    {FEATURES.map(({ icon: Icon, titleKey, descKey }) => (
                        <div key={titleKey} className="group bg-card/40 backdrop-blur-sm border rounded-2xl p-6 hover:border-[#00df9a]/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-[#00df9a]/10 text-[#00df9a] shrink-0 group-hover:bg-[#00df9a] group-hover:text-black transition-colors duration-300">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-1">{t(titleKey)}</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        {t(descKey)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}