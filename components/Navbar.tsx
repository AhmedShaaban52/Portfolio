"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTrans } from "@/hooks/useTrans";

const NAV_KEYS = ["home", "about", "projects", "experience", "contact"] as const;
const NAV_HREFS = ["#home", "#about", "#projects", "#experience", "#contact"];
export function Navbar() {
    const { t } = useTrans("nav");
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
            <div className="w-10/12 mx-auto px-6 h-16 flex items-center justify-between">

                <Link
                    href="#home"
                    className="text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5 select-none shrink-0"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#00df9a]/10 text-[#00df9a] font-mono text-sm border border-[#00df9a]/20">
                        {"</>"}
                    </span>
                    Next<span className="text-[#00df9a]">Dev</span>
                </Link>

                <nav className="hidden md:flex items-center gap-0.5">
                    {NAV_KEYS.map((key, i) => (
                        <Link
                            key={key}
                            href={NAV_HREFS[i]}
                            className={`text-sm font-medium px-4 py-2 rounded-md transition-colors duration-150 ${i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            {t(key)}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 shrink-0">
                    <LanguageSwitcher />
                    <ModeToggle />
                    <Button
                        className="bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-semibold rounded-full h-9 px-5 gap-2 text-xs tracking-wide transition-all active:scale-95 shadow-[0_0_24px_rgba(0,223,154,0.18)]"
                    >
                        <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                        {t("downloadCV")}
                    </Button>
                </div>

            </div >
        </header >
    );
}