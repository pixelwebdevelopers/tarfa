"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import {
  MotorIcon,
  CompressorIcon,
  PumpIcon,
  TransformerIcon,
  StatorCoreIcon,
  RotorBalancingIcon,
} from "@/components/icons/IndustryIcons";
import { COMPANY_DETAILS } from "@/config/contact";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const common = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }, [pathname]);

  const serviceItems = [
    {
      href: "/services/motors",
      title: t("servicesMenu.motors.title"),
      icon: MotorIcon,
    },
    {
      href: "/services/chiller-compressors",
      title: t("servicesMenu.chillerCompressors.title"),
      icon: CompressorIcon,
    },
    {
      href: "/services/water-pumps",
      title: t("servicesMenu.waterPumps.title"),
      icon: PumpIcon,
    },
    {
      href: "/services/generators-transformers",
      title: t("servicesMenu.generatorsTransformers.title"),
      icon: TransformerIcon,
    },
    {
      href: "/services/core-maintenance",
      title: t("servicesMenu.coreMaintenance.title"),
      icon: StatorCoreIcon,
    },
    {
      href: "/services/testing-balancing",
      title: t("servicesMenu.testingBalancing.title"),
      icon: RotorBalancingIcon,
    },
  ];

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services"), hasSubmenu: true },
    { href: "/industries", label: t("industries") },
    { href: "/process", label: t("process") },
    { href: "/clients", label: t("clients") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-charcoal-950 text-charcoal-300 border-b border-charcoal-800 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-mono">
          {/* Workshop Dispatch details */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span className="phone-number text-xs font-semibold text-white">
                {COMPANY_DETAILS.phonePrimary}
              </span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span className="text-xs">{COMPANY_DETAILS.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-charcoal-400">
              <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span>{isAr ? "المدينة الصناعية، الرياض" : "Al Sina'iyah, Riyadh"}</span>
            </div>
          </div>

          {/* Right utility: Est & Language Toggle */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-[11px] font-semibold text-charcoal-400 uppercase tracking-widest border-e border-charcoal-800 pe-4">
              {isAr ? "بيت الجودة • تأسست 1983" : "House of Quality • Est. 1983"}
            </span>
            <LanguageToggle variant="dark" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          "w-full bg-white dark:bg-charcoal-900 border-b transition-all duration-200",
          isScrolled
            ? "py-2.5 shadow-hairline border-charcoal-200 dark:border-charcoal-800"
            : "py-3.5 border-charcoal-200 dark:border-charcoal-800"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & House of Quality lockup */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Tarfa Equipment Maintenance Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-start">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-charcoal-950 dark:text-white uppercase leading-none">
                {isAr ? "تارفا لصيانة المعدات" : "TARFA"}
              </span>
              <span className="font-mono text-[10px] text-brand-red font-semibold tracking-wider uppercase mt-0.5">
                {isAr ? "بيت الجودة" : "EQUIPMENT MAINTENANCE"}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/" || pathname === ""
                  : pathname.startsWith(link.href);

              if (link.hasSubmenu) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <Link
                      href={link.href as any}
                      className={cn(
                        "inline-flex items-center gap-1 font-heading text-sm font-semibold transition-colors py-2",
                        isActive
                          ? "text-brand-red"
                          : "text-charcoal-800 dark:text-charcoal-200 hover:text-brand-red dark:hover:text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>

                    {/* Mega-menu dropdown */}
                    {servicesMenuOpen && (
                      <div className="absolute top-full start-0 w-[580px] bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 shadow-technical p-5 z-50">
                        <div className="border-b border-charcoal-100 dark:border-charcoal-800 pb-3 mb-3 flex items-center justify-between">
                          <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-semibold">
                            {isAr ? "دليل الخدمات الصناعية المعتمدة" : "INDUSTRIAL REWINDING & REPAIR DIRECTORY"}
                          </span>
                          <Link
                            href="/services"
                            className="font-mono text-xs text-charcoal-500 hover:text-brand-red flex items-center gap-1"
                          >
                            <span>{isAr ? "عرض الكل" : "View All"}</span>
                            <ArrowIcon className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {serviceItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href as any}
                                className="p-3 bg-canvas-warm/60 dark:bg-charcoal-850 hover:bg-charcoal-950 hover:text-white dark:hover:bg-charcoal-800 transition-all border border-charcoal-200/80 dark:border-charcoal-700/80 hover:border-brand-red group/item text-start flex items-center gap-3.5"
                              >
                                <div className="w-10 h-10 flex-shrink-0 bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 text-brand-red flex items-center justify-center group-hover/item:bg-brand-red group-hover/item:text-white transition-colors">
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                  <span className="font-heading text-xs sm:text-sm font-extrabold text-charcoal-950 dark:text-white group-hover/item:text-white transition-colors line-clamp-1 block">
                                    {item.title}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href as any}
                  className={cn(
                    "font-heading text-sm font-semibold transition-colors py-1 relative",
                    isActive
                      ? "text-brand-red"
                      : "text-charcoal-800 dark:text-charcoal-200 hover:text-brand-red dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 start-0 w-full h-[2px] bg-brand-red" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Header Action: Quote CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              withChamfer
              className="text-xs"
            >
              <span>{common("requestQuote")}</span>
              <ArrowIcon className="w-3.5 h-3.5 ms-1" />
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-700 dark:text-charcoal-300 hover:text-brand-red focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-charcoal-950 border-b border-charcoal-200 dark:border-charcoal-800 px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className="font-heading text-base font-bold text-charcoal-900 dark:text-white hover:text-brand-red transition-colors py-2 border-b border-charcoal-100 dark:border-charcoal-800 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowIcon className="w-4 h-4 text-charcoal-400" />
              </Link>
            ))}
          </div>

          {/* Mobile Services quick list */}
          <div className="pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-semibold block mb-2">
              {isAr ? "الخدمات الرئيسية" : "SERVICES DIRECTORY"}
            </span>
            <div className="grid grid-cols-1 gap-2">
              {serviceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href as any}
                    className="p-2.5 bg-canvas-warm/70 dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-800 flex items-center gap-3 hover:border-brand-red transition-colors"
                  >
                    <div className="w-8 h-8 flex-shrink-0 bg-white dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 text-brand-red flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading text-xs font-bold text-charcoal-900 dark:text-white block line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="pt-4 space-y-3 border-t border-charcoal-100 dark:border-charcoal-800">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              withChamfer
              className="w-full justify-center"
            >
              <span>{common("requestQuote")}</span>
              <ArrowIcon className="w-4 h-4 ms-2" />
            </Button>
            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs text-charcoal-400">
                {isAr ? "اللغة" : "Language"}
              </span>
              <LanguageToggle variant="light" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

