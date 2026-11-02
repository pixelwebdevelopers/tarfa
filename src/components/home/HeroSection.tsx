"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
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
          <ScrollReveal animation="fade-up" duration={700} className="lg:col-span-7 space-y-6 text-start">
            {/* Eyebrow & Est. Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-red text-white font-mono text-[11px] font-bold tracking-wider uppercase industrial-cut-badge">
                <span className="w-1.5 h-1.5 bg-white" />
                {common("est")}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
                {t("eyebrow")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.12] text-white">
              {t("headline")}
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed">
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
                className="group inline-flex items-center gap-2 font-heading font-semibold text-sm text-slate-200 hover:text-white transition-colors"
              >
                <span className="border-b border-slate-400 group-hover:border-brand-red pb-0.5 transition-colors">
                  {t("secondaryCta")}
                </span>
                <ArrowIcon className="w-3.5 h-3.5 text-brand-red transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>

            {/* Technical Proof Strip */}
            <div className="pt-6 border-t border-[#2d3164] grid grid-cols-3 gap-4 font-mono text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                  {isAr ? "الجهد التشغيلي" : "VOLTAGE RANGE"}
                </span>
                <span className="text-white font-bold text-xs sm:text-sm">400V - 13.8 kV</span>
              </div>
              <div className="space-y-1 border-s border-[#2d3164] ps-4">
                <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                  {isAr ? "بروتوكول الاختبار" : "TEST PROTOCOL"}
                </span>
                <span className="text-white font-bold text-xs sm:text-sm">ISO 1940 / Surge</span>
              </div>
              <div className="space-y-1 border-s border-[#2d3164] ps-4">
                <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                  {isAr ? "الموقع الصناعي" : "WORKSHOP"}
                </span>
                <span className="text-white font-bold text-xs sm:text-sm">{isAr ? "صناعية الرياض" : "Al Sina'iyah"}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 5 Cols (Photorealistic Workshop Image Seamlessly Blended with Background) */}
          <ScrollReveal animation="slide-left" delay={150} duration={800} className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] w-full overflow-hidden rounded-md bg-[#1c1e3e]">
              <Image
                src="/images/workshop/hero-industrial-motor.jpg"
                alt="Tarfa specialized technician inspecting heavy industrial motor stator core in Riyadh workshop"
                fill
                priority
                className="object-cover filter contrast-[1.05]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Seamless blend on the start/left edge into the #1c1e3e background */}
              <div className="absolute inset-y-0 start-0 w-28 sm:w-44 bg-gradient-to-r rtl:bg-gradient-to-l from-[#1c1e3e] via-[#1c1e3e]/80 to-transparent pointer-events-none z-10" />

              {/* Top and bottom subtle edge blend */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#1c1e3e]/70 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1e3e]/70 to-transparent pointer-events-none z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

