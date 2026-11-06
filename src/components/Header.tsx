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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change (allow preview parameters for testing)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("previewServices") === "1") {
        setMobileMenuOpen(true);
        setMobileServicesOpen(true);
        return;
      }
      if (params.get("previewSidebar") === "1") {
        setMobileMenuOpen(true);
        setMobileServicesOpen(false);
        return;
      }
    }
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    setMobileServicesOpen(false);
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
      <div className="bg-charcoal-950 text-slate-200 border-b border-[#2d3164] text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-mono">
          {/* Workshop Dispatch details */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span className="phone-number text-[13px] font-black text-white tracking-wide">
                {COMPANY_DETAILS.phonePrimary}
              </span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="hidden sm:flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span className="text-[13px] font-extrabold text-white">{COMPANY_DETAILS.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span className="text-[13px] font-extrabold text-white">{isAr ? "المدينة الصناعية، الرياض" : "Al Sina'iyah, Riyadh"}</span>
            </div>
          </div>

          {/* Right utility: Est & Language Toggle */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block text-[13px] font-extrabold text-white uppercase tracking-wider border-e border-[#2d3164] pe-4">
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
          {/* Brand Logo & House of Quality lockup (Enlarged Logo & Reduced Vertical Gap) */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-[54px] h-[42px] sm:w-[64px] sm:h-[48px] md:w-[70px] md:h-[54px] flex-shrink-0 transition-transform group-hover:scale-105 duration-200">
              <Image
                src="/images/logo.png"
                alt="Tarfa Equipment Maintenance Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-start justify-center gap-0">
              <span className="font-heading font-extrabold text-lg sm:text-xl md:text-[22px] tracking-tight text-charcoal-950 dark:text-white uppercase leading-none">
                {isAr ? "تارفا لصيانة المعدات" : "TARFA"}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-brand-red font-extrabold tracking-wider uppercase leading-none pt-1">
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
                        "inline-flex items-center gap-1 font-heading text-[15px] font-extrabold transition-colors py-2",
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
                          <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-bold">
                            {isAr ? "دليل الخدمات الصناعية المعتمدة" : "INDUSTRIAL REWINDING & REPAIR DIRECTORY"}
                          </span>
                          <Link
                            href="/services"
                            className="font-mono text-xs font-bold text-charcoal-600 hover:text-brand-red flex items-center gap-1"
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
                    "font-heading text-[15px] font-extrabold transition-colors py-1 relative",
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
              className="text-xs font-extrabold tracking-wide shadow-sm"
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

      {/* ============================================================== */}
      {/* PROFESSIONAL MOBILE SIDEBAR DRAWER                             */}
      {/* ============================================================== */}
      {/* 1. Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-charcoal-950/80 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Slide-out Off-Canvas Panel */}
      <aside
        aria-label="Mobile Navigation Drawer"
        className={cn(
          "fixed inset-y-0 start-0 z-50 w-[84%] max-w-sm bg-white dark:bg-charcoal-950 border-e border-charcoal-200 dark:border-charcoal-800 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden",
          mobileMenuOpen
            ? "translate-x-0"
            : isAr
            ? "translate-x-full"
            : "-translate-x-full"
        )}
      >
        {/* Top Header of Sidebar */}
        <div className="p-4 sm:p-5 border-b border-charcoal-100 dark:border-charcoal-800 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="relative w-[48px] h-[36px] flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Tarfa Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-start justify-center gap-0">
              <span className="font-heading font-extrabold text-base tracking-tight text-charcoal-950 dark:text-white uppercase leading-none">
                {isAr ? "تارفا لصيانة المعدات" : "TARFA"}
              </span>
              <span className="font-mono text-[10px] text-brand-red font-extrabold tracking-wider uppercase leading-none pt-0.5">
                {isAr ? "بيت الجودة · 1983" : "HOUSE OF QUALITY"}
              </span>
            </div>
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-charcoal-500 hover:text-brand-red hover:bg-charcoal-100 dark:hover:bg-charcoal-800 transition-colors"
            aria-label="Close Navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5 text-start">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" || pathname === ""
                : pathname.startsWith(link.href);

            // Handle Services Dropdown Accordion
            if (link.hasSubmenu) {
              return (
                <div key={link.href} className="border-b border-charcoal-100 dark:border-charcoal-800/80 pb-1 mb-1">
                  {/* Services Row with Dropdown Toggle */}
                  <div
                    className={cn(
                      "flex items-center justify-between py-2.5 px-3 rounded-lg font-heading text-sm font-bold transition-colors cursor-pointer",
                      isActive || mobileServicesOpen
                        ? "text-brand-red bg-brand-red-subtle/50 dark:bg-charcoal-900"
                        : "text-charcoal-900 dark:text-white hover:bg-charcoal-50 dark:hover:bg-charcoal-900"
                    )}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span className="flex items-center gap-2">
                      {link.label}
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-brand-red text-white rounded-xs font-bold">
                        6
                      </span>
                    </span>
                    <button
                      type="button"
                      aria-label="Toggle Services List"
                      className="p-1 text-charcoal-500 hover:text-brand-red"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileServicesOpen && "rotate-180 text-brand-red"
                        )}
                      />
                    </button>
                  </div>

                  {/* Accordion Content: ONLY shows on clicking Services dropdown */}
                  {mobileServicesOpen && (
                    <div className="ms-2 ps-2 border-s-2 border-brand-red/30 my-2 space-y-1">
                      {serviceItems.map((item) => {
                        const Icon = item.icon;
                        const isServiceActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href as any}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "p-2.5 rounded-lg flex items-center gap-3 transition-colors text-start",
                              isServiceActive
                                ? "bg-brand-red/10 text-brand-red font-bold"
                                : "text-charcoal-700 dark:text-charcoal-300 hover:text-charcoal-950 dark:hover:text-white hover:bg-charcoal-100/70 dark:hover:bg-charcoal-900"
                            )}
                          >
                            <div className="w-7 h-7 rounded-md bg-canvas-warm dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 text-brand-red flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="font-heading text-xs font-bold line-clamp-1">
                              {item.title}
                            </span>
                          </Link>
                        );
                      })}

                      {/* View All Services Overview Link */}
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-xs font-mono text-brand-red font-bold hover:underline flex items-center gap-1.5 pt-2"
                      >
                        <span>{isAr ? "دليل كافة الخدمات الصناعية" : "View All Services Overview"}</span>
                        <ArrowIcon className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            // Normal Navigation Links
            return (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between py-2.5 px-3 rounded-lg font-heading text-sm font-bold transition-colors border-b border-charcoal-100 dark:border-charcoal-800/80 last:border-b-0",
                  isActive
                    ? "text-brand-red bg-brand-red-subtle/50 dark:bg-charcoal-900 border-s-4 border-brand-red ps-2"
                    : "text-charcoal-900 dark:text-white hover:bg-charcoal-50 dark:hover:bg-charcoal-900"
                )}
              >
                <span>{link.label}</span>
                <ArrowIcon className="w-3.5 h-3.5 text-charcoal-400 opacity-60" />
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer with Quick Actions */}
        <div className="p-4 sm:p-5 border-t border-charcoal-100 dark:border-charcoal-800 space-y-3 bg-canvas-warm/50 dark:bg-charcoal-900/50">
          {/* Direct Line */}
          <a
            href={`tel:${COMPANY_DETAILS.phonePrimary}`}
            className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-charcoal-850 border border-charcoal-200 dark:border-charcoal-700 text-xs font-mono text-charcoal-800 dark:text-slate-200 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span className="font-bold phone-number">{COMPANY_DETAILS.phonePrimary}</span>
            </div>
            <span className="text-[10px] text-brand-red font-bold uppercase">{isAr ? "اتصال" : "Call"}</span>
          </a>

          {/* Primary Request Quote Button */}
          <Button
            href="/contact"
            variant="primary"
            size="md"
            withChamfer
            className="w-full justify-center text-xs font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>{common("requestQuote")}</span>
            <ArrowIcon className="w-4 h-4 ms-2" />
          </Button>

          {/* Language Switcher */}
          <div className="flex items-center justify-between pt-1">
            <span className="font-mono text-[11px] font-bold text-charcoal-700 dark:text-charcoal-300">
              {isAr ? "لغة الموقع" : "Language"}
            </span>
            <LanguageToggle variant="light" />
          </div>
        </div>
      </aside>
    </header>
  );
}

