"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/Button";
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
    <section className="w-full bg-charcoal-950 text-white py-14 lg:py-20 relative overflow-hidden border-b border-charcoal-800">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border border-charcoal-800 bg-charcoal-900/90 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Diagonal cut accent along top */}
          <div className="absolute top-0 start-0 end-0 h-1 bg-brand-red" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
                {t("eyebrow")}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                {t("headline")}
              </h2>
              <p className="font-body text-sm sm:text-base text-charcoal-300 max-w-xl leading-relaxed">
                {t("desc")}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3.5 lg:justify-end">
              {/* Phone Line Action */}
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                className="px-4 py-3 bg-charcoal-800 hover:bg-charcoal-700 border border-charcoal-700 text-white transition-colors flex items-center justify-center gap-2.5 rounded-sm font-mono text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="phone-number">{COMPANY_DETAILS.phonePrimary}</span>
              </a>

              {/* WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-colors flex items-center justify-center gap-2 rounded-sm font-heading text-xs font-bold uppercase tracking-wider"
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
                className="text-xs font-bold"
              >
                <span>{t("buttonLabel")}</span>
                <ArrowIcon className="w-3.5 h-3.5 ms-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

