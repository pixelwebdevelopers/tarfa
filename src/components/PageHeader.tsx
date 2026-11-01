import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  sectionNumber?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
  badge?: string;
}

export function PageHeader({
  sectionNumber,
  title,
  description,
  breadcrumbs,
  className,
  badge,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "w-full bg-charcoal-950 text-white border-b border-charcoal-800 py-12 lg:py-16 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10 text-start">
        <Breadcrumbs items={breadcrumbs} className="mb-3" />

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {description && (
          <p className="font-body text-base sm:text-lg text-charcoal-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Red hairline accent */}
      <div className="absolute bottom-0 start-0 end-0 h-0.5 bg-brand-red" />
    </div>
  );
}

