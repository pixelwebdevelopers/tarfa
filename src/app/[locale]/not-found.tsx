"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LocalizedNotFound() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <div className="py-24 px-4 bg-canvas-warm flex items-center justify-center text-center">
      <div className="max-w-lg w-full border border-charcoal-200 dark:border-charcoal-800 bg-white dark:bg-charcoal-900 p-8 space-y-4 text-start">
        <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-bold block">
          404 // NOT FOUND
        </span>
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal-900 dark:text-white">
          {isAr ? "الصفحة المطلوبة غير متوفرة" : "Requested Technical Document Not Found"}
        </h1>
        <p className="font-body text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed">
          {isAr
            ? "الصفحة أو الخدمة التي تبحث عنها قد تم نقلها أو تعديل مسارها. يرجى العودة إلى الصفحة الرئيسية أو مراجعة دليل الخدمات."
            : "The page or service you are attempting to access is unavailable or has been relocated. Please return to the workshop index or consult our services catalog."}
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-red text-white text-sm font-semibold hover:bg-brand-red-hover transition-colors industrial-cut-badge"
          >
            {isAr ? "العودة للرئيسية" : "Return to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}

