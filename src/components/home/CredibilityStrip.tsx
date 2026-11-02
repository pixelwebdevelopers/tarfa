"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CredibilityStrip() {
  const t = useTranslations("credibility");

  const items = [
    {
      mono: t("items.0.mono"),
      value: t("items.0.value"),
      label: t("items.0.label"),
    },
    {
      mono: t("items.1.mono"),
      value: t("items.1.value"),
      label: t("items.1.label"),
    },
    {
      mono: t("items.2.mono"),
      value: t("items.2.value"),
      label: t("items.2.label"),
    },
    {
      mono: t("items.3.mono"),
      value: t("items.3.value"),
      label: t("items.3.label"),
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-charcoal-900 border-b border-charcoal-200 dark:border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-charcoal-200 dark:divide-charcoal-800 text-start">
          {items.map((item, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 110}
              duration={1200}
              className="py-6 sm:py-8 px-4 sm:px-6 lg:px-7 flex flex-col justify-between space-y-2 first:ps-0 last:pe-0"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-semibold">
                {item.mono}
              </span>
              <div className="font-heading font-extrabold text-2xl lg:text-3xl xl:text-4xl text-charcoal-950 dark:text-white tracking-tight">
                {item.value}
              </div>
              <p className="font-body text-sm text-charcoal-700 dark:text-charcoal-300 leading-relaxed font-medium">
                {item.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

