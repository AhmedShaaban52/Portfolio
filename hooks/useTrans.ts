"use client";

import { useTranslations, useLocale } from "next-intl";

export function useTrans(namespace?: string) {
  const locale = useLocale();

  const isArabic = locale === "ar";

  const t = useTranslations(namespace);

  return {
    t,
    locale,
    isArabic,
    dir: isArabic ? "rtl" : "ltr",
  };
}
