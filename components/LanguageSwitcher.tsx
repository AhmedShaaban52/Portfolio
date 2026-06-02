"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const switchLang = (locale: "en" | "ar") => {
        // Replace current locale in path
        const newPath = pathname.replace(/^\/(en|ar)/, `/${locale}`);
        router.push(newPath);
    };

    const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";

    return (
        <button
            onClick={() => switchLang(currentLocale === "en" ? "ar" : "en")}
            className="h-8 px-3 rounded-md border border-border/60 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-[#00df9a]/30 transition-all cursor-pointer"
        >
            {currentLocale === "en" ? "عربي" : "English"}
        </button>
    );
}