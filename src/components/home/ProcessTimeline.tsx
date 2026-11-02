"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck } from "lucide-react";
import {
  LogInspectionIcon,
  TeardownIcon,
  RewindingSpoolIcon,
  BakingOvenIcon,
  BalancingRigIcon,
  ElectricalTestIcon,
  DispatchCrateIcon,
} from "@/components/icons/IndustryIcons";

export function ProcessTimeline() {
  const t = useTranslations("process");
  const locale = useLocale();
  const isAr = locale === "ar";

  const steps = [
    {
      num: "01",
      icon: LogInspectionIcon,
      title: t("steps.0.title"),
      desc: t("steps.0.desc"),
      badge: isAr ? "فحص وتوثيق" : "INCOMING LOG",
    },
    {
      num: "02",
      icon: TeardownIcon,
      title: t("steps.1.title"),
      desc: t("steps.1.desc"),
      badge: isAr ? "تفكيك وتشخيص" : "DIAGNOSTICS",
    },
    {
      num: "03",
      icon: RewindingSpoolIcon,
      title: t("steps.2.title"),
      desc: t("steps.2.desc"),
      badge: isAr ? "إعادة لف نحاسي" : " REWIND",
    },
    {
      num: "04",
      icon: BakingOvenIcon,
      title: t("steps.3.title"),
      desc: t("steps.3.desc"),
      badge: isAr ? "غمر وتحميص" : "VPI & BAKING",
    },
    {
      num: "05",
      icon: BalancingRigIcon,
      title: t("steps.4.title"),
      desc: t("steps.4.desc"),
      badge: isAr ? "موازنة ديناميكية" : "BALANCE",
    },
    {
      num: "06",
      icon: ElectricalTestIcon,
      title: t("steps.5.title"),
      desc: t("steps.5.desc"),
      badge: isAr ? "فحص التشغيل" : "FULL RUN TEST",
    },
    {
      num: "07",
      icon: DispatchCrateIcon,
      title: t("steps.6.title"),
      desc: t("steps.6.desc"),
      badge: isAr ? "تقرير فني وتسليم" : "QC & DISPATCH",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800 text-start relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal
          animation="fade-up"
          duration={700}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-200 dark:border-charcoal-800 pb-8"
        >
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("headline")}
            description={t("note")}
          />

          {/* Elevated QC Certification Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#1c1e3e] border border-[#2d3164] text-white rounded-full text-xs font-mono shadow-sm flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <ShieldCheck className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
            <span>
              {isAr
                ? "بروتوكول معتمد بموجب ISO 1940 و IEC (قابل للتخصيص)"
                : "ISO 1940 & IEC Certified Workflow (Customizable)"}
            </span>
          </div>
        </ScrollReveal>

        {/* 7 Modular Industrial Stage Cards */}
        <div className="relative">
          {/* Subtle Pipeline Track on Desktop behind cards */}
          <div className="hidden xl:block absolute top-12 start-6 end-6 h-0.5 bg-gradient-to-r from-brand-red/30 via-charcoal-200 dark:via-charcoal-700 to-emerald-500/30 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4 lg:gap-4 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={idx}
                  animation="fade-up"
                  delay={idx * 110}
                  duration={1200}
                  className="bg-white dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-750 rounded-xl p-5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-brand-red transition-all duration-300 relative group overflow-hidden hover:-translate-y-1"
                >
                  {/* Top Red Accent Line on Hover */}
                  <div className="absolute top-0 start-0 end-0 h-1 bg-charcoal-100 dark:bg-charcoal-750 group-hover:bg-brand-red transition-colors" />

                  {/* Step Header: Number & Stage Acronym Badge */}
                  <div className="flex items-center justify-between border-b border-charcoal-100 dark:border-charcoal-750 pb-3">
                    <span className="font-mono text-xs font-extrabold px-2 py-0.5 bg-[#1c1e3e] text-white rounded-sm group-hover:bg-brand-red transition-colors">
                      {item.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-brand-red uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* High-Detail Industrial Icon Box */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-lg bg-canvas-warm dark:bg-charcoal-800 border border-charcoal-200/90 dark:border-charcoal-700 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:scale-105 transition-all duration-300 my-4 shadow-xs flex-shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Technical Summary */}
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-heading font-extrabold text-base lg:text-[15px] xl:text-base text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-[13px] text-charcoal-700 dark:text-charcoal-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
