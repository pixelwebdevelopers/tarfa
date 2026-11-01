"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { ShieldCheck } from "lucide-react";

export function ClientsWall() {
  const t = useTranslations("clients");
  const locale = useLocale();
  const isAr = locale === "ar";

  const clients = [
    { name: t("list.0.name"), sector: t("list.0.sector") },
    { name: t("list.1.name"), sector: t("list.1.sector") },
    { name: t("list.2.name"), sector: t("list.2.sector") },
    { name: t("list.3.name"), sector: t("list.3.sector") },
    { name: t("list.4.name"), sector: t("list.4.sector") },
    { name: t("list.5.name"), sector: t("list.5.sector") },
    { name: t("list.6.name"), sector: t("list.6.sector") },
    { name: t("list.7.name"), sector: t("list.7.sector") },
    { name: t("list.8.name"), sector: t("list.8.sector") },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("headline")}
          description={t("lead")}
        />

        {/* Restrained Wall of Wordmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 hover:border-brand-red transition-all duration-150 flex flex-col justify-between space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-extrabold text-base sm:text-lg text-charcoal-900 dark:text-white group-hover:text-brand-red transition-colors tracking-tight">
                  {client.name}
                </span>
                <span className="font-mono text-[10px] text-charcoal-400">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>
              <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 line-clamp-1">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="p-4 border border-dashed border-charcoal-300 dark:border-charcoal-700 bg-canvas-warm/60 dark:bg-charcoal-850/60 flex items-center justify-between text-xs font-mono text-charcoal-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span>{t("andMore")}</span>
          </div>
          <span className="text-brand-red font-semibold uppercase">EST. 1983 // KSA</span>
        </div>
      </div>
    </section>
  );
}

