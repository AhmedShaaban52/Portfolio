"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero.png";
import Image from "next/image";
import { InteractiveCanvas } from "@/components/InteractiveCanvas";
import { useTrans } from "@/hooks/useTrans";

export function Hero() {
    const { t } = useTrans("nav");
    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-68px)] flex items-center overflow-hidden bg-background"
        >
            <InteractiveCanvas />

            <div className="pointer-events-none absolute -top-32 right-0 -z-10 size-150 bg-[#00df9a]/5 dark:bg-[#00df9a]/6 rounded-full blur-[120px]" />

            <div className="w-full md:w-10/12 mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">

                <div className="flex flex-col items-start space-y-6">

                    {/* Badge */}
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide  bg-[#00df9a]/8 text-[#00df9a] border border-[#00df9a]/20  dark:bg-[#00df9a]/5 dark:border-[#00df9a]/15">
                        {t("Fullstack Developer • Next.js Specialist")}
                    </span>

                    <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-foreground">
                        Building modern web experiences with{" "}
                        <span className="text-[#00df9a]">clean code</span>
                    </h1>

                    <p className="text-muted-foreground text-sm sm:text-base max-w-120 leading-relaxed">
                        I design and build scalable fullstack applications using modern
                        technologies like Next.js, TypeScript, and Supabase. Focused on
                        performance, clean UI, and real-world products.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 pt-1">
                        <Button className="bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-semibold h-12 px-7 rounded-full text-sm gap-2 transition-all active:scale-95 shadow-[0_4px_24px_rgba(0,223,154,0.2)]">
                            Get in touch
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </Button>

                        <Button variant="ghost" className="h-12 px-6 rounded-full text-sm font-medium text-foreground hover:bg-muted hover:text-foreground transition-all">
                            View projects
                        </Button>
                    </div>

                </div>

                <div className="relative flex justify-center lg:justify-end items-center">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="size-95 sm:size-120 bg-[#00df9a]/10 dark:bg-[#00df9a]/8 rounded-full blur-[90px]" />
                    </div>

                    <div className="relative mx-auto size-56 sm:size-72 lg:size-100 shrink-0 overflow-hidden rounded-full border-4 border-zinc-200 dark:border-zinc-800 shadow-xl shadow-black/10 dark:shadow-black/50 bg-zinc-100 dark:bg-zinc-900">
                        <Image
                            src={HeroImage}
                            alt="Portfolio"
                            fill
                            // sizes="(max-width: 640px) 14rem, (max-width: 1024px) 18rem, 20rem"
                            className="object-center transition-transform duration-500 hover:scale-105"
                            priority
                        />
                    </div>

                    <div className="absolute top-4 right-4 grid grid-cols-3 gap-1.5 opacity-30 dark:opacity-20">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00df9a]" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}