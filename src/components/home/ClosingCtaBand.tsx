"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { COMPANY_DETAILS } from "@/config/contact";
import { Phone, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export function ClosingCtaBand() {
  const t = useTranslations("ctaBand");
  const common = useTranslations("common");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const whatsappMessage = isAr
    ? encodeURIComponent("السلام عليكم، نود طلب فحص وعرض سعر فني لمعدة كهروميكانيكية لدى تارفا.")
    : encodeURIComponent("Hello, we would like to request a technical assessment and quotation for industrial equipment at Tarfa.");

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phonePrimaryRaw}?text=${whatsappMessage}`;

  return (
    <section className="w-full bg-canvas-warm py-16 lg:py-24 relative overflow-hidden border-b border-charcoal-200 dark:border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal
          animation="fade-up"
          duration={1100}
          className="border border-[#2a304e] bg-[#1c1e3e] p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl rounded-2xl"
        >
          {/* Subtle tech grid inside card */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />

          {/* Accent red bar along top */}
          <div className="absolute top-0 start-0 end-0 h-1.5 bg-brand-red" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Content Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-5 text-start">
              {/* Emergency Dispatch Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#252b47] border border-[#3d4673] text-xs font-mono text-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">
                  {isAr ? "جاهزية الاستجابة الفورية للأعطال • صناعية الرياض" : "Immediate Diagnostic & Overhaul Dispatch • Riyadh"}
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                {t("headline")}
              </h2>

              {/* Description */}
              <p className="font-body text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                {t("desc")}
              </p>

              {/* 3 Technical Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-slate-200 pt-1 pb-1 border-y border-[#2d3356]">
                <div className="flex items-center gap-2 py-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{isAr ? "فحص وتشخيص فوري" : "Fast Workshop Triage"}</span>
                </div>
                <div className="flex items-center gap-2 py-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{isAr ? "معايير ISO 1940" : "ISO 1940 Protocol"}</span>
                </div>
                <div className="flex items-center gap-2 py-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{isAr ? "فريق هندسي متخصص" : "Senior Engineers"}</span>
                </div>
              </div>

              {/* Action Buttons Group */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-3.5">
                {/* Rounded Phone Action */}
                <a
                  href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                  className="px-5 py-3.5 bg-[#252b47] hover:bg-[#30375c] border border-[#3d4673] text-white transition-all flex items-center justify-center gap-2.5 rounded-full font-mono text-xs font-semibold shadow-md hover:scale-105"
                  title={isAr ? "اتصال مباشر بالورشة" : "Call Workshop Directly"}
                >
                  <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span className="phone-number text-slate-100 font-bold">{COMPANY_DETAILS.phonePrimary}</span>
                </a>

                {/* Real Official WhatsApp Icon Button - Round */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isAr ? "محادثة فورية عبر واتساب" : "Direct WhatsApp Chat"}
                  title={isAr ? "محادثة فورية عبر واتساب: " + COMPANY_DETAILS.phonePrimary : "Direct WhatsApp: " + COMPANY_DETAILS.phonePrimary}
                  className="w-12 h-12 bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all flex items-center justify-center rounded-full shadow-lg hover:scale-110 active:scale-95 flex-shrink-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.42C8.93 7.42 8.63 7.49 8.38 7.76C8.13 8.03 7.44 8.68 7.44 10.01C7.44 11.34 8.41 12.62 8.54 12.8C8.67 12.98 10.42 15.68 13.1 16.84C13.74 17.12 14.23 17.28 14.62 17.41C15.26 17.61 15.84 17.58 16.3 17.51C16.82 17.43 17.89 16.86 18.11 16.23C18.33 15.61 18.33 15.07 18.27 14.96C18.2 14.85 18.02 14.79 17.75 14.65C17.48 14.52 16.14 13.86 15.89 13.77C15.64 13.68 15.46 13.63 15.27 13.91C15.09 14.18 14.57 14.79 14.41 14.97C14.25 15.16 14.09 15.18 13.82 15.04C13.55 14.91 12.67 14.62 11.63 13.69C10.82 12.97 10.27 12.08 10.11 11.81C9.95 11.54 10.09 11.39 10.23 11.26C10.35 11.14 10.5 10.94 10.64 10.78C10.78 10.62 10.82 10.51 10.91 10.33C11 10.15 10.95 10 10.89 9.88C10.82 9.76 10.3 8.48 10.08 7.96C9.87 7.45 9.66 7.52 9.5 7.51C9.35 7.5 9.18 7.42 9.11 7.42Z" />
                  </svg>
                </a>

                {/* Primary Technical Quote Button */}
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="text-xs font-bold px-6 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  <span>{t("buttonLabel")}</span>
                  <ArrowIcon className="w-3.5 h-3.5 ms-1.5" />
                </Button>
              </div>
            </div>

            {/* Right Realistic Image Showcase Column (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden border border-[#3d4673] shadow-2xl group bg-charcoal-900">
                <Image
                  src="/images/workshop/cta-emergency-overhaul.jpg"
                  alt={isAr ? "فحص واختبار ملفات المحركات الكهربائية في ورشة تارفا بالرياض" : "Tarfa electromechanical engineer conducting diagnostic testing on motor stator in Riyadh"}
                  fill
                  className="object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />

                {/* Gradient vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14162e]/85 via-transparent to-transparent pointer-events-none" />

                {/* Top Location Tag */}
                <div className="absolute top-3.5 end-3.5 px-3 py-1 bg-[#1c1e3e]/85 backdrop-blur-md border border-[#3d4673] rounded-full text-[11px] font-mono text-slate-100 flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{isAr ? "ورشة صناعية الرياض" : "Al Sina'iyah Bay"}</span>
                </div>

                {/* Bottom Technical Status Strip */}
                <div className="absolute bottom-3 start-3 end-3 p-2.5 sm:p-3 bg-[#1c1e3e]/90 backdrop-blur-md border border-[#3d4673] rounded-lg text-xs font-mono text-slate-100 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">
                      {isAr ? "فحص الملفات والعزل" : "Stator Diagnostic Bench"}
                    </span>
                  </div>
                  <span className="text-red-400 font-bold tracking-wider uppercase text-[11px]">
                    {isAr ? "معتمد" : "Verified"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
