"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { COMPANY_DETAILS } from "@/config/contact";
import { Phone, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";

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
    <section className="w-full bg-[#0a0c14] text-white py-16 lg:py-24 relative overflow-hidden border-t border-charcoal-800 border-b-2 border-brand-red/40">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal
          animation="fade-up"
          duration={750}
          className="border border-[#2a304e] bg-[#14172a] p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl rounded-2xl"
        >
          {/* Accent red bar along top */}
          <div className="absolute top-0 start-0 end-0 h-1.5 bg-brand-red" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                {t("eyebrow")}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
                {t("headline")}
              </h2>
              <p className="font-body text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                {t("desc")}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 lg:justify-end">
              {/* Rounded Phone Line Action */}
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                className="px-5 py-3.5 bg-[#1f253d] hover:bg-[#283050] border border-[#364066] text-white transition-all flex items-center justify-center gap-2.5 rounded-full font-mono text-xs font-semibold shadow-md hover:scale-105"
              >
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="phone-number text-slate-100">{COMPANY_DETAILS.phonePrimary}</span>
              </a>

              {/* Rounded WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all flex items-center justify-center gap-2 rounded-full font-heading text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Primary Quote Button */}
              <Button
                href="/contact"
                variant="primary"
                size="md"
                withChamfer
                className="text-xs font-bold px-6 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <span>{t("buttonLabel")}</span>
                <ArrowIcon className="w-3.5 h-3.5 ms-1.5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

