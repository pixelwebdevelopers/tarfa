"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesIndexTable() {
  const t = useTranslations("servicesIndex");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeHover, setActiveHover] = useState<number | null>(null);

  const serviceImages: Record<string, string> = {
    motors: "/images/services/motors-lineup.png",
    "chiller-compressors": "/images/services/chiller-compressor-screw.png",
    "water-pumps": "/images/services/pumps-submersible-multistage.png",
    "generators-transformers": "/images/services/generators-alternators.png",
    "core-maintenance": "/images/workshop/core-testing.png",
    "testing-balancing": "/images/workshop/riyadh-testing-bay.png",
  };

  const services = [
    {
      id: "motors",
      code: "01",
      title: t("items.0.title"),
      scope: t("items.0.scope"),
      specs: t("items.0.specs"),
      link: "/services/motors",
    },
    {
      id: "chiller-compressors",
      code: "02",
      title: t("items.1.title"),
      scope: t("items.1.scope"),
      specs: t("items.1.specs"),
      link: "/services/chiller-compressors",
    },
    {
      id: "water-pumps",
      code: "03",
      title: t("items.2.title"),
      scope: t("items.2.scope"),
      specs: t("items.2.specs"),
      link: "/services/water-pumps",
    },
    {
      id: "generators-transformers",
      code: "04",
      title: t("items.3.title"),
      scope: t("items.3.scope"),
      specs: t("items.3.specs"),
      link: "/services/generators-transformers",
    },
    {
      id: "core-maintenance",
      code: "05",
      title: t("items.4.title"),
      scope: t("items.4.scope"),
      specs: t("items.4.specs"),
      link: "/services/core-maintenance",
    },
    {
      id: "testing-balancing",
      code: "06",
      title: t("items.5.title"),
      scope: t("items.5.scope"),
      specs: t("items.5.specs"),
      link: "/services/testing-balancing",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-warm border-b border-charcoal-200 dark:border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-200 dark:border-charcoal-800 pb-8 text-start">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("headline")}
            description={t("description")}
          />

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-red hover:underline pb-1 flex-shrink-0"
          >
            <span>{isAr ? "دليل المواصفات الكامل" : "Explore Master Spec Catalog"}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Master Indexed Table (Not 3 Cards!) */}
        <div className="border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 divide-y divide-charcoal-200 dark:divide-charcoal-800 relative">
          {services.map((item, idx) => (
            <Link
              key={item.id}
              href={item.link as any}
              onMouseEnter={() => setActiveHover(idx)}
              onMouseLeave={() => setActiveHover(null)}
              className={cn(
                "group p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-150 text-start relative overflow-hidden",
                "hover:bg-charcoal-950 hover:text-white"
              )}
            >
              {/* Red left/right indicator bar on hover */}
              <div className="absolute top-0 bottom-0 start-0 w-1 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Col A: Index Code & Title */}
              <div className="lg:w-5/12 flex items-start gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-bold text-brand-red pt-0.5">
                  {item.code}
                </span>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-charcoal-950 dark:text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400 group-hover:text-charcoal-300 transition-colors line-clamp-2 leading-relaxed">
                    {item.scope}
                  </p>
                </div>
              </div>

              {/* Col B: Technical Rating / Envelope */}
              <div className="lg:w-4/12 font-mono text-xs text-charcoal-600 dark:text-charcoal-300 group-hover:text-charcoal-300 transition-colors ps-8 sm:ps-10 lg:ps-0">
                <span className="text-[10px] uppercase text-charcoal-400 group-hover:text-charcoal-500 block mb-0.5">
                  {isAr ? "النطاق التشغيلي" : "SPEC ENVELOPE"}
                </span>
                <span className="font-semibold text-brand-red group-hover:text-white transition-colors block">
                  {item.specs}
                </span>
              </div>

              {/* Col C: Hover Image Thumbnail / Action Arrow */}
              <div className="lg:w-3/12 flex items-center justify-between lg:justify-end gap-4 ps-8 sm:ps-10 lg:ps-0">
                {/* Image Reveal on Desktop */}
                <div className="relative w-28 h-16 border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-800 overflow-hidden hidden sm:block flex-shrink-0 group-hover:border-brand-red transition-colors">
                  <Image
                    src={serviceImages[item.id] || "/images/services/motors-lineup.png"}
                    alt={item.title}
                    fill
                    className="object-cover filter contrast-[1.05] grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    sizes="112px"
                  />
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-charcoal-400 group-hover:text-brand-red transition-colors">
                  <span className="hidden sm:inline">
                    {isAr ? "التفاصيل" : "Specs"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

