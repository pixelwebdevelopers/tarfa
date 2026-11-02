"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Shield,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/config/contact";
import { LanguageToggle } from "./LanguageToggle";

export function Footer() {
  const t = useTranslations("footer");
  const common = useTranslations("common");
  const navT = useTranslations("nav");
  const locale = useLocale();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const currentYear = new Date().getFullYear();

  const servicesList = [
    { href: "/services/motors", label: navT("servicesMenu.motors.title") },
    {
      href: "/services/chiller-compressors",
      label: navT("servicesMenu.chillerCompressors.title"),
    },
    { href: "/services/water-pumps", label: navT("servicesMenu.waterPumps.title") },
    {
      href: "/services/generators-transformers",
      label: navT("servicesMenu.generatorsTransformers.title"),
    },
    {
      href: "/services/core-maintenance",
      label: navT("servicesMenu.coreMaintenance.title"),
    },
    {
      href: "/services/testing-balancing",
      label: navT("servicesMenu.testingBalancing.title"),
    },
  ];

  return (
    <footer className="bg-charcoal-950 text-slate-100 border-t border-charcoal-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-charcoal-800 text-start">
          {/* Col 1: Identity & Profile */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Tarfa Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base tracking-tight text-white uppercase block leading-none">
                  {isAr ? "تارفا لصيانة المعدات" : "TARFA"}
                </span>
                <span className="font-mono text-[10px] text-brand-red font-semibold tracking-wider uppercase">
                  {isAr ? "بيت الجودة · تأسست 1983" : "HOUSE OF QUALITY · EST. 1983"}
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-slate-100 font-body leading-relaxed">
              {t("aboutText")}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141630] border border-[#2b2f60] text-xs font-mono text-slate-200">
                <Shield className="w-3.5 h-3.5 text-brand-red" />
                <span>{isAr ? "ضمان فحص الجودة المعتمد" : "100% Workshop Tested"}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white border-s-2 border-brand-red ps-2.5">
              {t("servicesTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesList.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href as any}
                    className="text-slate-100 hover:text-white transition-colors flex items-center gap-1.5 group font-medium"
                  >
                    <ArrowIcon className="w-3 h-3 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {svc.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Standards & Testing */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white border-s-2 border-brand-red ps-2.5">
              {t("standardsTitle")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-slate-100 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✓</span>
                <span>Dynamic Balancing (ISO 1940 G2.5/G6.3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✓</span>
                <span>Stator Core Flux Loss & Hotspot Diagnostics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✓</span>
                <span>Surge Comparison & High-Pot Testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✓</span>
                <span>Class F & Class H Vacuum Impregnation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-red font-bold">✓</span>
                <span>Transformer Dielectric Oil Breakdown Test</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Location */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white border-s-2 border-brand-red ps-2.5">
              {t("contactTitle")}
            </h4>
            <div className="space-y-3 text-sm text-slate-100">
              <div className="font-heading font-semibold text-white text-base">
                {isAr ? "م. حامد علي (مسؤول الورشة)" : "Hamid Ali (Workshop Director)"}
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                    className="phone-number block text-white hover:text-brand-red font-mono font-medium"
                  >
                    {COMPANY_DETAILS.phonePrimary}
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneSecondary}`}
                    className="phone-number block text-slate-300 hover:text-white font-mono"
                  >
                    {COMPANY_DETAILS.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-100 text-xs sm:text-sm">
                    {isAr ? COMPANY_DETAILS.address.arFull : COMPANY_DETAILS.address.enFull}
                  </span>
                  <a
                    href={COMPANY_DETAILS.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-red hover:underline mt-1 font-mono"
                  >
                    <span>{isAr ? "عرض الموقع على الخريطة" : "Google Maps View"}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  {isAr ? COMPANY_DETAILS.hours.ar : COMPANY_DETAILS.hours.en}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-start">
            <span>
              © {currentYear} {isAr ? "تارفا لصيانة المعدات" : "Tarfa Equipment Maintenance"}.{" "}
              {common("allRightsReserved")}.
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="text-slate-300">
              {isAr ? "تطوير بواسطة" : "Developed by"}{" "}
              <a
                href="https://pixelwebdevelopers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-red font-semibold underline underline-offset-4 decoration-brand-red/60 hover:decoration-brand-red transition-colors"
              >
                Pixel Web Developers
              </a>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <span>•</span>
            <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">
              {isAr ? "شروط الخدمة" : "Terms"}
            </Link>
            <span>•</span>
            <Link
              href="/styleguide"
              className="text-brand-red hover:text-white transition-colors font-semibold"
            >
              {isAr ? "دليل الهوية الهندسية" : "Style Guide"}
            </Link>
            <span>•</span>
            <LanguageToggle variant="dark" />
          </div>
        </div>
      </div>
    </footer>
  );
}

