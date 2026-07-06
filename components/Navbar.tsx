"use client";

import { Download, Menu } from "lucide-react"; // Added Menu icon
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTrans } from "@/hooks/useTrans";
import Logo from "./Logo";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"; 

const NAV_KEYS = ["home", "about", "projects", "experience", "contact"] as const;
const NAV_HREFS = ["#home", "#about", "#projects", "#experience", "#contact"];

export function Navbar() {
    const { t } = useTrans("nav");

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Logo />

                <nav className="hidden md:flex items-center gap-0.5">
                    {NAV_KEYS.map((key, i) => (
                        <Link key={key} href={NAV_HREFS[i]} className="text-sm font-medium px-4 py-2 rounded-md hover:text-foreground text-muted-foreground">
                            {t(key)}
                        </Link>
                    ))}
                </nav>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon"><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <div className="flex flex-col gap-4 p-8 mt-8">
                                {NAV_KEYS.map((key, i) => (
                                    <Link key={key} href={NAV_HREFS[i]} className="text-lg font-medium">{t(key)}</Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <LanguageSwitcher />
                    <ModeToggle />
                    <DownloadButton />
                </div>
            </div>
        </header>
    );
}

function DownloadButton() {
    return (
        <Button
            asChild 
            className="bg-[#00df9a] hover:bg-[#00df9a]/85 text-black font-semibold rounded-full h-9 px-5 gap-2 text-xs"
        >
            <a href="https://drive.google.com/uc?id=1GkmPLF0HooJqZLS5s1PeEH8zQ37zj9fH&export=download" target="_blank" rel="noopener noreferrer">
                <Download className="w-3.5 h-3.5" />
                Download CV
            </a>
        </Button>
    );
}