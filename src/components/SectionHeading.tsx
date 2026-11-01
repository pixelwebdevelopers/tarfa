import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  theme?: "light" | "dark";
  className?: string;
  withRule?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  theme = "light",
  className,
  withRule = false,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-start max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-brand-red" />
          <span className="font-mono text-xs uppercase font-semibold text-brand-red tracking-wider">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight",
          isDark ? "text-white" : "text-charcoal-900"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed font-body",
            isDark ? "text-charcoal-300" : "text-charcoal-500"
          )}
        >
          {description}
        </p>
      )}

      {withRule && (
        <div
          className={cn(
            "h-px w-full my-4",
            isDark ? "bg-charcoal-700" : "bg-charcoal-100"
          )}
        />
      )}
    </div>
  );
}

