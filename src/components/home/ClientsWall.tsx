"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ClientsWall() {
  const t = useTranslations("clients");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const clients = [
    {
      id: "caf",
      name: t("list.0.name"),
      sector: t("list.0.sector"),
      logo: "/images/clients/caf-arabia.svg",
    },
    {
      id: "ksb",
      name: t("list.1.name"),
      sector: t("list.1.sector"),
      logo: "/images/clients/ksb-pumps.svg",
    },
    {
      id: "al-ameen",
      name: t("list.2.name"),
      sector: t("list.2.sector"),
      logo: "/images/clients/al-ameen.png",
    },
    {
      id: "al-watnia",
      name: t("list.3.name"),
      sector: t("list.3.sector"),
      logo: "/images/clients/al-watania.png",
    },
    {
      id: "fagi",
      name: t("list.4.name"),
      sector: t("list.4.sector"),
      logo: "/images/clients/fakeeh-care.svg",
    },
    {
      id: "sappco",
      name: t("list.5.name"),
      sector: t("list.5.sector"),
      logo: "/images/clients/sappco.png",
    },
    {
      id: "al-jouf",
      name: t("list.6.name"),
      sector: t("list.6.sector"),
      logo: "/images/clients/al-jouf-water.png",
    },
    {
      id: "ksu",
      name: t("list.7.name"),
      sector: t("list.7.sector"),
      logo: "/images/clients/king-saud-university.png",
    },
    {
      id: "al-munajem",
      name: t("list.8.name"),
      sector: t("list.8.sector"),
      logo: "/images/clients/almunajem-foods.png",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("headline")}
            description={t("lead")}
          />
          <Link
            href={`/${locale}/clients`}
            className="inline-flex items-center text-xs font-mono font-bold tracking-wider uppercase text-brand-red hover:text-charcoal-950 dark:hover:text-white transition-colors pb-1 border-b border-brand-red/30 self-start md:self-end"
          >
            <span>{isAr ? "استعراض سجل العملاء الكامل" : "View Full Portfolio"}</span>
            <ArrowIcon className="w-3.5 h-3.5 ms-1.5" />
          </Link>
        </div>

        {/* Logo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, idx) => (
            <div
              key={client.id}
              className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 hover:border-brand-red transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-brand-red">
                  {idx < 9 ? `CLIENT // 0${idx + 1}` : `CLIENT // ${idx + 1}`}
                </span>
                <span className="w-2 h-2 rounded-none bg-charcoal-300 dark:bg-charcoal-700 group-hover:bg-brand-red transition-colors" />
              </div>

              {/* Logo display container */}
              <div className="h-16 w-full flex items-center justify-center p-3 bg-white dark:bg-charcoal-900 border border-charcoal-200/80 dark:border-charcoal-750">
                <div className="relative w-full h-10 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    width={180}
                    height={40}
                    className="max-h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-heading font-extrabold text-base text-charcoal-900 dark:text-white group-hover:text-brand-red transition-colors tracking-tight line-clamp-1 block">
                  {client.name}
                </span>
                <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 line-clamp-1 block">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="p-4 border border-dashed border-charcoal-300 dark:border-charcoal-700 bg-canvas-warm/60 dark:bg-charcoal-850/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-charcoal-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>{t("andMore")}</span>
          </div>
          <span className="text-brand-red font-semibold uppercase flex-shrink-0">
            EST. 1983 // RIYADH, KSA
          </span>
        </div>
      </div>
    </section>
  );
}
