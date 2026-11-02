"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("hero");
  const common = useTranslations("common");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  // 4 Realistic Workshop Documentary Slides
  const slides = [
    {
      src: "/images/workshop/hero-industrial-motor.jpg",
      alt: isAr
        ? "إعادة لف قلب ستاتور المحركات الكهربائية الصناعية بالأسلاك النحاسية في ورشة تارفا بالرياض"
        : "Heavy industrial motor stator copper rewinding in Tarfa Riyadh workshop",
    },
    {
      src: "/images/workshop/hero-chiller-compressor.jpg",
      alt: isAr
        ? "عمرة وفحص ضواغط التبريد اللولبية (سكرو) الصناعية بمقاييس دقيقة"
        : "Industrial HVAC chiller screw compressor precision overhaul in Riyadh bay",
    },
    {
      src: "/images/workshop/hero-water-pump.jpg",
      alt: isAr
        ? "صيانة ومحاذاة مضخات الطرد المركزي متعددة المراحل للمنشآت الصناعية"
        : "Heavy industrial multistage centrifugal water pump refurbishment and alignment",
    },
    {
      src: "/images/workshop/hero-dynamic-balancing.jpg",
      alt: isAr
        ? "الموازنة الديناميكية الدقيقة لروتور المحركات وفق مواصفات ISO 1940"
        : "Dynamic rotor balancing to ISO 1940 standards with digital diagnostics",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow with no controls: transitions every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-charcoal-950 text-white overflow-hidden border-b border-charcoal-800 min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

      {/* Desktop Full-Bleed Right-Side Slideshow: ZERO top/bottom padding */}
      <div className="hidden lg:block absolute inset-y-0 end-0 w-[50%] xl:w-[52%] h-full overflow-hidden pointer-events-none">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.src}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover filter contrast-[1.05]"
                sizes="52vw"
              />
            </div>
          );
        })}

        {/* Seamless Editorial Blend on the start/left edge into the #1c1e3e background */}
        <div className="absolute inset-y-0 start-0 w-36 sm:w-52 lg:w-64 bg-gradient-to-r rtl:bg-gradient-to-l from-[#1c1e3e] via-[#1c1e3e]/85 to-transparent pointer-events-none z-20" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 7 Cols (Editorial Typography & Action) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-start">
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

            {/* Mobile / Tablet Full-Bleed Slideshow: ZERO top/bottom margins */}
            <div className="lg:hidden w-full h-[320px] sm:h-[400px] relative overflow-hidden rounded-md my-4 border border-[#2d3164]">
              {slides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={slide.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    )}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      className="object-cover filter contrast-[1.05]"
                      sizes="100vw"
                    />
                  </div>
                );
              })}
              <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-r rtl:bg-gradient-to-l from-[#1c1e3e] via-[#1c1e3e]/80 to-transparent pointer-events-none z-20" />
            </div>

            {/* CTAs: 1 Primary Red Chamfer Button + 1 Quiet Secondary Text Link */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withChamfer
                className="text-sm font-bold shadow-technical rounded-full"
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
          </div>
        </div>
      </div>
    </section>
  );
}
