"use client";

import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ClientsWall() {
  const t = useTranslations("clients");
  const locale = useLocale();
  const isAr = locale === "ar";

  const clients = [
    {
      id: "caf",
      name: t("list.0.name"),
      logo: "/images/clients/caf-arabia.svg",
    },
    {
      id: "ksb",
      name: t("list.1.name"),
      logo: "/images/clients/ksb-pumps.svg",
    },
    {
      id: "al-ameen",
      name: t("list.2.name"),
      logo: "/images/clients/al-ameen.png",
    },
    {
      id: "al-watnia",
      name: t("list.3.name"),
      logo: "/images/clients/al-watania.png",
    },
    {
      id: "fagi",
      name: t("list.4.name"),
      logo: "/images/clients/fakeeh-care.svg",
    },
    {
      id: "sappco",
      name: t("list.5.name"),
      logo: "/images/clients/sappco.png",
    },
    {
      id: "al-jouf",
      name: t("list.6.name"),
      logo: "/images/clients/al-jouf-water.png",
    },
    {
      id: "ksu",
      name: t("list.7.name"),
      logo: "/images/clients/king-saud-university.png",
    },
    {
      id: "al-munajem",
      name: t("list.8.name"),
      logo: "/images/clients/almunajem-foods.png",
    },
  ];

  // Quadruple the array for continuous seamless scrolling on all screen sizes
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="w-full py-16 lg:py-20 bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800 overflow-hidden">
      <ScrollReveal animation="fade-up" duration={700} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-charcoal-950 dark:text-white tracking-tight">
          {isAr ? "موثوق من كبرى الشركات السعودية" : "Trusted by Leading Saudi Enterprises"}
        </h2>
      </ScrollReveal>

      {/* Marquee Track Container with Edge Gradient Masking */}
      <div className="w-full relative overflow-hidden mask-marquee py-2">
        <div className="flex gap-5 sm:gap-6 w-max animate-marquee">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="w-56 sm:w-64 flex-shrink-0 p-5 bg-white dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-800 shadow-hairline flex flex-col items-center justify-center text-center group hover:border-brand-red transition-all duration-200"
            >
              {/* Logo display */}
              <div className="h-14 w-full flex items-center justify-center mb-3">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={160}
                  height={44}
                  className="max-h-11 max-w-[150px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              {/* Company name only */}
              <span className="font-heading font-extrabold text-xs sm:text-sm text-charcoal-900 dark:text-white tracking-tight truncate w-full group-hover:text-brand-red transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
