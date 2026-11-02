import React from "react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ChevronRight, ChevronLeft, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const locale = useLocale();
  const isAr = locale === "ar";
  const Separator = isAr ? ChevronLeft : ChevronRight;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-mono text-xs flex items-center gap-2 text-slate-300 ${className || ""}`}
    >
      <Link
        href="/"
        className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <Separator className="w-3 h-3 text-slate-400" />
            {isLast || !item.href ? (
              <span className="text-brand-red font-bold truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href as any}
                className="hover:text-white text-slate-300 transition-colors truncate max-w-[150px] sm:max-w-none font-medium"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

