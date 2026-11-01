"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, ShieldAlert, Check } from "lucide-react";

export function CoreMaintenanceMosaic() {
  const t = useTranslations("coreMaintenance");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const panels = [
    {
      title: t("mosaic.0.title"),
      desc: t("mosaic.0.description"),
      tag: t("mosaic.0.tag"),
      image: "/images/workshop/core-testing.png",
      alt: "Tarfa engineer conducting loop flux core loss test on motor stator",
    },
    {
      title: t("mosaic.1.title"),
      desc: t("mosaic.1.description"),
      tag: t("mosaic.1.tag"),
      image: "/images/workshop/core-varnishing.png",
      alt: "Stator core cleaning and high-dielectric varnish immersion",
    },
    {
      title: t("mosaic.2.title"),
      desc: t("mosaic.2.description"),
      tag: t("mosaic.2.tag"),
      image: "/images/workshop/core-spot-welding.png",
      alt: "Precision localized spot welding on stator lamination teeth",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-charcoal-950 text-white relative border-b border-charcoal-800 overflow-hidden">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Heading & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-start border-b border-charcoal-800 pb-8">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-semibold">
                {t("eyebrow")}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white">
              {t("headline")}
            </h2>
            <p className="font-body text-sm sm:text-base text-charcoal-300 max-w-2xl leading-relaxed">
              {t("lead")}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              href="/services/core-maintenance"
              variant="outline"
              size="md"
              className="border-charcoal-700 text-white hover:text-white hover:border-brand-red text-xs font-mono"
            >
              <span>{isAr ? "معايير صيانة القلوب" : "Core Maintenance Standards"}</span>
              <ArrowIcon className="w-3.5 h-3.5 ms-2" />
            </Button>
          </div>
        </div>

        {/* Asymmetric 3-Panel Mosaic with Real PDF Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Panel 1: Primary Large Feature (Core Testing) - 7 Cols */}
          <div className="lg:col-span-7 border border-charcoal-800 bg-charcoal-900/90 relative overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-charcoal-950">
              <Image
                src={panels[0].image}
                alt={panels[0].alt}
                fill
                className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent pointer-events-none" />

              {/* Tag Badge */}
              <div className="absolute top-4 start-4 font-mono text-[11px] font-bold bg-brand-red text-white px-2.5 py-1 industrial-cut-badge">
                {panels[0].tag}
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-2 text-start bg-charcoal-900">
              <span className="font-mono text-xs text-brand-red font-semibold">
                PROCESS 01 // ELECTROMAGNETIC DIAGNOSTICS
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                {panels[0].title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-charcoal-300 leading-relaxed max-w-xl">
                {panels[0].desc}
              </p>
            </div>
          </div>

          {/* Right Column: 2 Stacked Panels (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Panel 2: Core Cleaning & Re-Varnishing */}
            <div className="border border-charcoal-800 bg-charcoal-900/90 p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-center group text-start">
              <div className="relative w-full sm:w-36 h-36 flex-shrink-0 bg-charcoal-950 overflow-hidden border border-charcoal-700">
                <Image
                  src={panels[1].image}
                  alt={panels[1].alt}
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, 150px"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-wider block">
                  PROCESS 02 // {panels[1].tag}
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {panels[1].title}
                </h4>
                <p className="font-body text-xs text-charcoal-300 leading-relaxed">
                  {panels[1].desc}
                </p>
              </div>
            </div>

            {/* Panel 3: Core Spot Welding */}
            <div className="border border-charcoal-800 bg-charcoal-900/90 p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-center group text-start">
              <div className="relative w-full sm:w-36 h-36 flex-shrink-0 bg-charcoal-950 overflow-hidden border border-charcoal-700">
                <Image
                  src={panels[2].image}
                  alt={panels[2].alt}
                  fill
                  className="object-cover filter contrast-[1.05] grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 100vw, 150px"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-wider block">
                  PROCESS 03 // {panels[2].tag}
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {panels[2].title}
                </h4>
                <p className="font-body text-xs text-charcoal-300 leading-relaxed">
                  {panels[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Strip */}
        <div className="border-t border-charcoal-800/80 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-charcoal-400">
          <div className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-industrial-green animate-pulse" />
            <span>{isAr ? "مختبر تشخيص الستاتور والقلوب في الرياض" : "In-House Riyadh Stator Core Diagnostic Station"}</span>
          </div>
          <div>
            <span>{isAr ? "متوافق مع معايير IEEE 43 و IEC 60034" : "Compliant with IEEE 43 & IEC 60034-23"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

