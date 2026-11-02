"use client";

import React from "react";
import { Phone } from "lucide-react";
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
    <aside aria-label="Quick Contact Actions" className="fixed bottom-6 end-6 z-50 flex flex-col gap-3 items-end">
      {/* Quick Direct Call Button - Round */}
      <a
        href={`tel:${COMPANY_DETAILS.phonePrimary}`}
        aria-label={isAr ? "اتصال هاتفي مباشر بالورشة" : "Direct Phone Call to Workshop"}
        className="flex items-center justify-center w-12 h-12 bg-[#1c1e3e] text-white hover:bg-brand-red border border-[#373c73] shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full group hover:scale-110"
        title="Direct Line: +966 50 2640 474"
      >
        <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </a>

      {/* Real WhatsApp Icon Button - Round, No Text */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? "محادثة واتساب فورية" : "Direct WhatsApp Chat"}
        title="WhatsApp: +966 50 2640 474"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl hover:shadow-green-500/30 transition-all duration-300 rounded-full hover:scale-110 active:scale-95"
      >
        {/* Official Real WhatsApp Brand SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.42C8.93 7.42 8.63 7.49 8.38 7.76C8.13 8.03 7.44 8.68 7.44 10.01C7.44 11.34 8.41 12.62 8.54 12.8C8.67 12.98 10.42 15.68 13.1 16.84C13.74 17.12 14.23 17.28 14.62 17.41C15.26 17.61 15.84 17.58 16.3 17.51C16.82 17.43 17.89 16.86 18.11 16.23C18.33 15.61 18.33 15.07 18.27 14.96C18.2 14.85 18.02 14.79 17.75 14.65C17.48 14.52 16.14 13.86 15.89 13.77C15.64 13.68 15.46 13.63 15.27 13.91C15.09 14.18 14.57 14.79 14.41 14.97C14.25 15.16 14.09 15.18 13.82 15.04C13.55 14.91 12.67 14.62 11.63 13.69C10.82 12.97 10.27 12.08 10.11 11.81C9.95 11.54 10.09 11.39 10.23 11.26C10.35 11.14 10.5 10.94 10.64 10.78C10.78 10.62 10.82 10.51 10.91 10.33C11 10.15 10.95 10 10.89 9.88C10.82 9.76 10.3 8.48 10.08 7.96C9.87 7.45 9.66 7.52 9.5 7.51C9.35 7.5 9.18 7.42 9.11 7.42Z" />
        </svg>
      </a>
    </aside>
  );
}
