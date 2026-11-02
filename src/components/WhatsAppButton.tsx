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
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3 items-end">
      {/* Quick Direct Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phonePrimary}`}
        aria-label="Direct Phone Call to Hamid Ali"
        className="flex items-center justify-center w-12 h-12 bg-[#1c1e3e] text-white hover:bg-brand-red border border-[#373c73] shadow-xl hover:shadow-2xl transition-all duration-200 rounded-full group hover:scale-110"
        title="Direct Line: +966 50 2640 474"
      >
        <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Inquiry"
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-xl hover:shadow-2xl transition-all duration-200 rounded-full font-heading font-bold text-xs uppercase tracking-wider hover:scale-105"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="inline">
          {isAr ? "مراسلة واتساب" : "WhatsApp RFQ"}
        </span>
      </a>
    </div>
  );
}

