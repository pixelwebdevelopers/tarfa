"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  GovernmentWorksIcon,
  SteelIndustryIcon,
  CementIndustryIcon,
  ConstructionIndustryIcon,
  HealthcareIndustryIcon,
  FlourMillIcon,
  ColdChainFoodIcon,
} from "@/components/icons/IndustryIcons";

export function IndustriesSplit() {
  const t = useTranslations("industries");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const sectors = [
    {
      icon: GovernmentWorksIcon,
      name: t("sectors.0.name"),
      tag: isAr ? "محطات الضخ وتوليد الكهرباء" : "Municipal Pumping & Power Stations",
    },
    {
      icon: SteelIndustryIcon,
      name: t("sectors.1.name"),
      tag: isAr ? "محركات الدرفلة وأوناش الرفع" : "Mill Drives, Crane Motors & Furnace Pumps",
    },
    {
      icon: CementIndustryIcon,
      name: t("sectors.2.name"),
      tag: isAr ? "محركات الأفران ومضخات الحمأة" : "Kiln Drives, Exhaust Fans & Slurry Pumps",
    },
    {
      icon: ConstructionIndustryIcon,
      name: t("sectors.3.name"),
      tag: isAr ? "مضخات النزح ومولدات المواقع" : "Dewatering Pumps & Batching Plant Motors",
    },
    {
      icon: HealthcareIndustryIcon,
      name: t("sectors.4.name"),
      tag: isAr ? "ضواغط الشيلر ومولدات الطوارئ" : "Central HVAC Chillers & Backup Generators",
    },
    {
      icon: FlourMillIcon,
      name: t("sectors.5.name"),
      tag: isAr ? "محركات منافيخ الهواء ومصاعد الحبوب" : "Blower Motors & Explosion-Proof Drives",
    },
    {
      icon: ColdChainFoodIcon,
      name: t("sectors.6.name"),
      tag: isAr ? "ضواغط التجميد ومحركات خطوط التعبئة" : "Blast Freezers & Packaging Line Drives",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-warm border-b border-charcoal-200 dark:border-charcoal-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <ScrollReveal animation="fade-up" duration={1100} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal-200 dark:border-charcoal-800 pb-8">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("headline")}
            description={t("lead")}
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-brand-red hover:underline pb-1 flex-shrink-0"
          >
            <span>{isAr ? "استعراض كافة القطاعات" : "Explore All Sectors"}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        {/* Split Layout: 5 Cols Image vs 7 Cols List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 Cols): Real Heavy Industry Facility Photo */}
          <ScrollReveal animation="slide-left" duration={1200} className="lg:col-span-5 relative space-y-4">
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
                  KINGDOM-WIDE INDUSTRIAL SECTORS
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
          </ScrollReveal>

          {/* Right Column (7 Cols): Visual Icon List */}
          <ScrollReveal animation="slide-right" delay={180} duration={1200} className="lg:col-span-7 divide-y divide-charcoal-200 dark:divide-charcoal-800 border-t border-b border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900">
            {sectors.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 flex items-center gap-4 group hover:bg-canvas-warm dark:hover:bg-charcoal-850 transition-colors"
                >
                  <div className="w-10 h-10 rounded-none bg-canvas-warm dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 text-brand-red flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-charcoal-950 dark:text-white group-hover:text-brand-red transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <span className="font-mono text-xs text-charcoal-500 dark:text-charcoal-400 font-medium sm:text-end flex-shrink-0">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
