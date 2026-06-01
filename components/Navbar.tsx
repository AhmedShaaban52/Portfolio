"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const NAV_LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <Link
                    href="#home"
                    className="text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5 select-none shrink-0"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#00df9a]/10 text-[#00df9a] font-mono text-sm border border-[#00df9a]/20">
                        {"</>"}
                    </span>
                    Next<span className="text-[#00df9a]">Dev</span>
                </Link>

                {/* Center Nav Links */}
                <nav className="hidden md:flex items-center gap-0.5">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium px-4 py-2 rounded-md transition-colors duration-150
                ${i === 0
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-3 shrink-0">
                    <ModeToggle />
                    <Button
                        className="bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-semibold rounded-full h-9 px-5 gap-2 text-xs tracking-wide transition-all active:scale-95 shadow-[0_0_24px_rgba(0,223,154,0.18)]"
                    >
                        <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                        Download CV
                    </Button>
                </div>

            </div >
        </header >
    );
}