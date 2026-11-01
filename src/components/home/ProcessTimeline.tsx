"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ClipboardCheck,
  Search,
  Wrench,
  Flame,
  Scale,
  ShieldCheck,
  Truck,
  AlertCircle,
} from "lucide-react";

export function ProcessTimeline() {
  const t = useTranslations("process");
  const locale = useLocale();
  const isAr = locale === "ar";

  const steps = [
    {
      num: "01",
      icon: ClipboardCheck,
      title: t("steps.0.title"),
      badge: isAr ? "فحص أولي وتوثيق" : "INCOMING LOG",
    },
    {
      num: "02",
      icon: Search,
      title: t("steps.1.title"),
      badge: isAr ? "تفكيك وتشخيص" : "DIAGNOSTICS",
    },
    {
      num: "03",
      icon: Wrench,
      title: t("steps.2.title"),
      badge: isAr ? "إعادة لف وعزل" : "PRECISION REWIND",
    },
    {
      num: "04",
      icon: Flame,
      title: t("steps.3.title"),
      badge: isAr ? "غمر وتحميص حراري" : "VPI & BAKING",
    },
    {
      num: "05",
      icon: Scale,
      title: t("steps.4.title"),
      badge: isAr ? "موازنة ديناميكية" : "ISO 1940 BALANCE",
    },
    {
      num: "06",
      icon: ShieldCheck,
      title: t("steps.5.title"),
      badge: isAr ? "فحص التشغيل والحمل" : "FULL RUN TEST",
    },
    {
      num: "07",
      icon: Truck,
      title: t("steps.6.title"),
      badge: isAr ? "تقرير فني وتسليم" : "QC & DISPATCH",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-200 dark:border-charcoal-800 pb-8">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("headline")}
            description={t("note")}
          />

          {/* Client Confirmation Notice Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-charcoal-50 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 text-xs font-mono text-charcoal-600 dark:text-charcoal-300 flex-shrink-0">
            <AlertCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>{isAr ? "مسار معتمد يخضع لتأكيد متطلبات العميل" : "Standard Workflow (Subject to Client Confirmation)"}</span>
          </div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Rail */}
        <div className="relative">
          {/* Timeline Connector Line on Desktop */}
          <div className="hidden xl:block absolute top-10 start-8 end-8 h-[2px] bg-charcoal-200 dark:border-charcoal-800 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-5 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 flex flex-col justify-between space-y-4 group hover:border-brand-red transition-all duration-200 shadow-hairline"
                >
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between border-b border-charcoal-200/80 dark:border-charcoal-750 pb-2.5">
                    <span className="w-8 h-8 flex items-center justify-center font-mono font-bold text-xs bg-charcoal-950 text-white group-hover:bg-brand-red transition-colors rounded-none">
                      {item.num}
                    </span>
                    <span className="font-mono text-[10px] text-charcoal-400 uppercase font-semibold">
                      STAGE {item.num}
                    </span>
                  </div>

                  {/* Centered Visual Icon Box */}
                  <div className="w-12 h-12 rounded-none bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all my-1">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Title & Visual Badge */}
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] text-brand-red font-semibold uppercase tracking-wider block">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
