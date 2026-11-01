"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { COMPANY_DETAILS } from "@/config/contact";
import { useLocale } from "next-intl";

export function WhatsAppButton() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const message = isAr
    ? encodeURIComponent(
        "السلام عليكم، أود الاستفسار عن خدمات إعادة لف وصيانة المعدات لدى شركة تارفا."
      )
    : encodeURIComponent(
        "Hello, I would like to inquire about Tarfa's motor rewinding and electromechanical services."
      );

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phonePrimaryRaw}?text=${message}`;

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-2.5 items-end">
      {/* Quick Direct Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phonePrimary}`}
        aria-label="Direct Phone Call to Hamid Ali"
        className="flex items-center justify-center w-11 h-11 bg-charcoal-900 text-white hover:bg-brand-red border border-charcoal-700 shadow-technical transition-all duration-150 rounded-sm group"
        title="Direct Line: +966 50 2640 474"
      >
        <Phone className="w-4 h-4 text-white group-hover:scale-105 transition-transform" />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Inquiry"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-technical transition-all duration-150 rounded-sm font-heading font-semibold text-xs uppercase tracking-wider"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">
          {isAr ? "مراسلة واتساب" : "WhatsApp RFQ"}
        </span>
      </a>
    </div>
  );
}

