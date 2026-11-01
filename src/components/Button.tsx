import React from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withChamfer?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  withChamfer = false,
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-semibold transition-colors duration-150 relative text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
    md: "text-sm px-5 py-2.5 gap-2 h-10",
    lg: "text-base px-6 py-3.5 gap-2.5 h-12",
  };

  const variantStyles = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-hover border border-brand-red shadow-sm",
    secondary:
      "bg-charcoal-900 text-white hover:bg-charcoal-800 border border-charcoal-800",
    dark: "bg-charcoal-800 text-white hover:bg-charcoal-700 border border-charcoal-700",
    outline:
      "bg-transparent text-charcoal-900 hover:text-brand-red hover:border-brand-red border border-charcoal-200 dark:text-white dark:border-charcoal-700",
    ghost:
      "bg-transparent text-charcoal-900 hover:text-brand-red dark:text-charcoal-300 dark:hover:text-white p-0 h-auto",
  };

  const chamferClass = withChamfer ? "industrial-cut-badge rounded-none" : "rounded-sm";

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    chamferClass,
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ms-1 me-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href as any} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={isLoading || props.disabled} {...props}>
      {content}
    </button>
  );
}

