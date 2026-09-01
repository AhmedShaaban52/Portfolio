"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero.jpg";
import Image from "next/image";
import { InteractiveCanvas } from "@/components/InteractiveCanvas";
import { useTrans } from "@/hooks/useTrans";

export function Hero() {
    const { t, dir } = useTrans("hero");
    return (
        <section
            id="home"
            dir={dir}
            className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-background"
        >
            <InteractiveCanvas />

            <div className="pointer-events-none absolute -top-32 right-0 -z-10 size-150 bg-[#00df9a]/5 dark:bg-[#00df9a]/6 rounded-full blur-[120px]" />

            <div className="w-full md:w-10/12 mx-auto px-6 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-20">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-6 order-2 lg:order-1">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20 dark:bg-[#00df9a]/5 dark:border-[#00df9a]/15">
                        {t("fullstack-developer-nextjs-specialist")}
                    </span>

                    <h1 className="font-bold leading-[1.1] tracking-tight text-foreground">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
                            {t("building-modern-web-experiences-with")}{" "}
                            <span className="text-[#00df9a]">{t("clean-code")}</span>
                        </span>
                    </h1>

                    <p className="text-muted-foreground text-sm sm:text-base max-w-125 leading-relaxed">
                        {t("i-design-and-build-scalable-fullstack-applications")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-1 w-full lg:w-auto">
                        <Button className="w-full sm:w-auto bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-semibold h-12 px-7 rounded-full text-sm gap-2 transition-all active:scale-95 shadow-[0_4px_24px_rgba(0,223,154,0.2)]">
                            {t("get-in-touch")}
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </Button>

                        <Button variant="ghost" className="w-full sm:w-auto h-12 px-6 rounded-full text-sm font-medium text-foreground hover:bg-muted transition-all">
                            {t("view-projects")}
                        </Button>
                    </div>
                </div>

                <div className="relative flex justify-center items-center order-1 lg:order-2">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="size-60 sm:size-95 lg:size-120 bg-[#00df9a]/10 dark:bg-[#00df9a]/8 rounded-full blur-[90px]" />
                    </div>

                    <div className="relative mx-auto size-56 sm:size-72 lg:size-100 shrink-0 overflow-hidden rounded-full border-4 border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/10 dark:shadow-black/50 bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src={HeroImage}
                            alt="Portfolio"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}