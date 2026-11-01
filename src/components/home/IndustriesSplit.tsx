"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export function IndustriesSplit() {
  const t = useTranslations("industries");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const sectors = [
    {
      name: t("sectors.0.name"),
      desc: t("sectors.0.desc"),
    },
    {
      name: t("sectors.1.name"),
      desc: t("sectors.1.desc"),
    },
    {
      name: t("sectors.2.name"),
      desc: t("sectors.2.desc"),
    },
    {
      name: t("sectors.3.name"),
      desc: t("sectors.3.desc"),
    },
    {
      name: t("sectors.4.name"),
      desc: t("sectors.4.desc"),
    },
    {
      name: t("sectors.5.name"),
      desc: t("sectors.5.desc"),
    },
    {
      name: t("sectors.6.name"),
      desc: t("sectors.6.desc"),
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-warm border-b border-charcoal-200 dark:border-charcoal-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("headline")}
          description={t("lead")}
        />

        {/* Split Layout: 5 Cols Image vs 7 Cols List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (5 Cols): Real Heavy Industry Facility Photo */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative h-[380px] sm:h-[480px] w-full border border-charcoal-200 dark:border-charcoal-700 bg-charcoal-900 overflow-hidden industrial-cut">
              <Image
                src="/images/workshop/heavy-industry-plant.png"
                alt="Saudi heavy industrial processing plant serviced by Tarfa"
                fill
                className="object-cover filter contrast-[1.05] grayscale-[15%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 start-4 end-4 z-10 bg-charcoal-950/90 border border-charcoal-700 p-3 backdrop-blur-xs font-mono text-xs text-white">
                <span className="text-brand-red font-bold block text-[10px] uppercase mb-0.5">
                  HEAVY SECTORS // KINGDOM-WIDE
                </span>
                <span>
                  {isAr
                    ? "صيانة المحركات الرئيسية لخطوط الإنتاج ومحطات الضخ الكبرى"
                    : "Mission-critical motor & compressor uptime for Saudi manufacturing"}
                </span>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-800 text-xs font-mono text-charcoal-500 flex items-center justify-between">
              <span>{isAr ? "دعم الطوارئ للمصانع" : "Emergency Plant Breakdown Standby"}</span>
              <span className="text-brand-red font-bold">+966 50 2640 474</span>
            </div>
          </div>

          {/* Right Column (7 Cols): Clean Editorial Checklist */}
          <div className="lg:col-span-7 divide-y divide-charcoal-200 dark:divide-charcoal-800 border-t border-b border-charcoal-200 dark:border-charcoal-800">
            {sectors.map((item, idx) => (
              <div
                key={idx}
                className="py-4.5 sm:py-5 flex items-start gap-4 group hover:bg-white dark:hover:bg-charcoal-850 px-2 sm:px-3 transition-colors rounded-none"
              >
                <div className="w-5 h-5 rounded-none bg-brand-red/10 border border-brand-red/30 text-brand-red flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

