"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ProcessTimeline() {
  const t = useTranslations("process");
  const locale = useLocale();
  const isAr = locale === "ar";

  const steps = [
    {
      num: t("steps.0.step"),
      title: t("steps.0.title"),
      desc: t("steps.0.desc"),
    },
    {
      num: t("steps.1.step"),
      title: t("steps.1.title"),
      desc: t("steps.1.desc"),
    },
    {
      num: t("steps.2.step"),
      title: t("steps.2.title"),
      desc: t("steps.2.desc"),
    },
    {
      num: t("steps.3.step"),
      title: t("steps.3.title"),
      desc: t("steps.3.desc"),
    },
    {
      num: t("steps.4.step"),
      title: t("steps.4.title"),
      desc: t("steps.4.desc"),
    },
    {
      num: t("steps.5.step"),
      title: t("steps.5.title"),
      desc: t("steps.5.desc"),
    },
    {
      num: t("steps.6.step"),
      title: t("steps.6.title"),
      desc: t("steps.6.desc"),
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

        {/* Desktop Horizontal Timeline / Mobile Vertical Rail */}
        <div className="relative">
          {/* Timeline Connector Line on Desktop */}
          <div className="hidden xl:block absolute top-10 start-8 end-8 h-[2px] bg-charcoal-200 dark:bg-charcoal-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-6 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-charcoal-200 dark:border-charcoal-800 bg-canvas-warm dark:bg-charcoal-850 flex flex-col justify-between space-y-3 group hover:border-brand-red transition-colors"
              >
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 flex items-center justify-center font-mono font-bold text-sm bg-charcoal-950 text-white group-hover:bg-brand-red transition-colors rounded-none industrial-cut-badge">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-400 uppercase">
                    STAGE {item.num}
                  </span>
                </div>

                {/* Step Title & Description */}
                <div className="space-y-1.5 flex-1 pt-1">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-charcoal-500 dark:text-charcoal-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Micro spec / status marker */}
                <div className="pt-2 border-t border-charcoal-200/60 dark:border-charcoal-800 flex items-center gap-1.5 text-[10px] font-mono text-charcoal-400">
                  <span className="w-1.5 h-1.5 bg-brand-red/70 rounded-full" />
                  <span>QC Signoff</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

