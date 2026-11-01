"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { ArrowRight, ArrowLeft, Shield, Gauge, Cpu, MapPin } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");
  const common = useTranslations("common");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="relative w-full bg-charcoal-950 text-white overflow-hidden border-b border-charcoal-800">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 Cols (Editorial Typography & Action) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Eyebrow & Est. Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-red text-white font-mono text-[11px] font-bold tracking-wider uppercase industrial-cut-badge">
                <span className="w-1.5 h-1.5 bg-white" />
                {common("est")}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal-400 font-medium">
                {t("eyebrow")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] text-white">
              {t("headline")}
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base sm:text-lg text-charcoal-300 max-w-2xl leading-relaxed">
              {t("subheadline")}
            </p>

            {/* CTAs: 1 Primary Red Chamfer Button + 1 Quiet Secondary Text Link */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withChamfer
                className="text-sm font-bold shadow-technical"
              >
                <span>{t("primaryCta")}</span>
                <ArrowIcon className="w-4 h-4 ms-2" />
              </Button>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 font-heading font-semibold text-sm text-charcoal-300 hover:text-white transition-colors"
              >
                <span className="border-b border-charcoal-600 group-hover:border-brand-red pb-0.5 transition-colors">
                  {t("secondaryCta")}
                </span>
                <ArrowIcon className="w-3.5 h-3.5 text-brand-red transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>

            {/* Technical Proof Strip */}
            <div className="pt-6 border-t border-charcoal-800/80 grid grid-cols-3 gap-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-wider text-charcoal-500">
                  {isAr ? "الجهد التشغيلي" : "VOLTAGE RANGE"}
                </span>
                <span className="text-white font-semibold">400V - 13.8 kV</span>
              </div>
              <div className="space-y-1 border-s border-charcoal-800 ps-4">
                <span className="block text-[10px] uppercase tracking-wider text-charcoal-500">
                  {isAr ? "بروتوكول الاختبار" : "TEST PROTOCOL"}
                </span>
                <span className="text-white font-semibold">ISO 1940 / Surge</span>
              </div>
              <div className="space-y-1 border-s border-charcoal-800 ps-4">
                <span className="block text-[10px] uppercase tracking-wider text-charcoal-500">
                  {isAr ? "الموقع الصناعي" : "WORKSHOP"}
                </span>
                <span className="text-white font-semibold">{isAr ? "صناعية الرياض" : "Al Sina'iyah"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols (Authentic Full-Bleed Workshop Photo with Precision 25° Chamfer Mask) */}
          <div className="lg:col-span-5 relative">
            {/* Hairline Technical Corner Crop Marks */}
            <div className="relative p-1 border border-charcoal-800 bg-charcoal-900/40">
              <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden industrial-cut bg-charcoal-900">
                <Image
                  src="/images/workshop/hero-stator-rewind.png"
                  alt="Tarfa technician rewinding industrial stator coils in Riyadh workshop"
                  fill
                  priority
                  className="object-cover filter contrast-[1.05] grayscale-[15%]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Subtle dark vignette overlay to guarantee contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Technical Spec Tag */}
                <div className="absolute bottom-4 start-4 z-10 bg-charcoal-950/90 border border-charcoal-700/80 px-3 py-2 text-start font-mono text-[11px] backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-brand-red font-semibold mb-0.5">
                    <span className="w-1.5 h-1.5 bg-brand-red animate-pulse" />
                    <span>FACILITY BAY 01 // RIYADH</span>
                  </div>
                  <span className="text-charcoal-300 block text-[10px]">
                    {isAr ? "إعادة لف أسلاك النحاس المعزولة لمحرك جهد متوسط" : "Stator Round & Strip Wire Rewinding"}
                  </span>
                </div>
              </div>

              {/* Red hairline accent along the bottom edge */}
              <div className="absolute -bottom-1 start-4 end-12 h-[2px] bg-brand-red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

