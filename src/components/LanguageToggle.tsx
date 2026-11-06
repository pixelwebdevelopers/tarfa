"use client";

import React, { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  variant?: "dark" | "light";
}

export function LanguageToggle({
  className,
  variant = "dark",
}: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: "en" | "ar") => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname as any, { locale: nextLocale });
    });
  };

  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "inline-flex items-center font-mono text-xs font-bold tracking-wider border rounded-sm p-0.5",
        isDark
          ? "border-charcoal-700 bg-charcoal-850 text-charcoal-300"
          : "border-charcoal-200 bg-white text-charcoal-600",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => handleSwitch("en")}
        disabled={isPending}
        className={cn(
          "px-2 py-1 font-bold transition-all duration-150 rounded-none",
          locale === "en"
            ? "bg-brand-red text-white shadow-xs"
            : isDark
            ? "hover:text-white"
            : "hover:text-charcoal-900"
        )}
      >
        EN
      </button>
      <span className={isDark ? "text-charcoal-600 px-0.5" : "text-charcoal-300 px-0.5"}>
        |
      </span>
      <button
        type="button"
        onClick={() => handleSwitch("ar")}
        disabled={isPending}
        className={cn(
          "px-2 py-1 font-arabic font-bold transition-all duration-150 rounded-none",
          locale === "ar"
            ? "bg-brand-red text-white shadow-xs"
            : isDark
            ? "hover:text-white"
            : "hover:text-charcoal-900"
        )}
      >
        عربي
      </button>
    </div>
  );
}

