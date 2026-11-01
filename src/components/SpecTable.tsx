import React from "react";
import { cn } from "@/lib/utils";

export interface SpecRow {
  equipment: string;
  scope: string;
  specs: string;
  testing: string;
  notes?: string;
}

interface SpecTableProps {
  title?: string;
  caption?: string;
  headers?: {
    equipment: string;
    scope: string;
    specs: string;
    testing: string;
  };
  rows: SpecRow[];
  theme?: "light" | "dark";
  className?: string;
}

export function SpecTable({
  title,
  caption,
  headers = {
    equipment: "Equipment / Machine Type",
    scope: "Maintenance & Rewinding Scope",
    specs: "Capacity / Voltage Range",
    testing: "Diagnostic & Compliance Standards",
  },
  rows,
  theme = "light",
  className,
}: SpecTableProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "w-full border overflow-hidden",
        isDark
          ? "border-charcoal-700 bg-charcoal-850 text-charcoal-200"
          : "border-charcoal-100 bg-white text-charcoal-800",
        className
      )}
    >
      {(title || caption) && (
        <div
          className={cn(
            "p-4 md:p-6 border-b flex flex-col md:flex-row md:items-center justify-between gap-2",
            isDark
              ? "border-charcoal-700 bg-charcoal-900"
              : "border-charcoal-100 bg-canvas-warm"
          )}
        >
          {title && (
            <h3
              className={cn(
                "font-heading font-bold text-lg md:text-xl",
                isDark ? "text-white" : "text-charcoal-900"
              )}
            >
              {title}
            </h3>
          )}
          {caption && (
            <span className="font-mono text-xs uppercase tracking-wider text-brand-red font-medium">
              {caption}
            </span>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-start border-collapse text-sm">
          <thead>
            <tr
              className={cn(
                "border-b font-mono text-xs uppercase tracking-wider text-start",
                isDark
                  ? "bg-charcoal-900/60 border-charcoal-700 text-charcoal-400"
                  : "bg-canvas-subtle/80 border-charcoal-100 text-charcoal-500"
              )}
            >
              <th className="py-3.5 px-4 text-start font-semibold">
                {headers.equipment}
              </th>
              <th className="py-3.5 px-4 text-start font-semibold">
                {headers.scope}
              </th>
              <th className="py-3.5 px-4 text-start font-semibold">
                {headers.specs}
              </th>
              <th className="py-3.5 px-4 text-start font-semibold">
                {headers.testing}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-100 dark:divide-charcoal-700">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  "transition-colors duration-100",
                  isDark
                    ? "hover:bg-charcoal-800/80"
                    : "hover:bg-canvas-warm/70"
                )}
              >
                <td className="py-3.5 px-4 align-top font-semibold text-charcoal-900 dark:text-white">
                  {row.equipment}
                  {row.notes && (
                    <span className="block font-mono text-xs font-normal text-charcoal-400 dark:text-charcoal-500 mt-0.5">
                      {row.notes}
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-4 align-top text-charcoal-600 dark:text-charcoal-300">
                  {row.scope}
                </td>
                <td className="py-3.5 px-4 align-top font-mono text-xs text-brand-red font-medium">
                  {row.specs}
                </td>
                <td className="py-3.5 px-4 align-top font-mono text-xs text-charcoal-600 dark:text-charcoal-400">
                  {row.testing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

