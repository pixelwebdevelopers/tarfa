"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.05,
  className,
  as: Component = "div",
}: ScrollRevealProps) {
  // Start with true so content is ALWAYS visible on SSR and initial load
  const [isRevealed, setIsRevealed] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight && rect.bottom > 0;

    if (isAboveFold) {
      // Element is already in view (e.g. Hero section or top fold)
      setIsRevealed(true);
      setIsInitialized(true);
      return;
    }

    // Element is below the fold: set up reveal on scroll
    setIsRevealed(false);
    setIsInitialized(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "80px 0px 80px 0px", // Trigger 80px before entering viewport
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animationClass = {
    "fade-up": "reveal-fade-up",
    "fade-down": "reveal-fade-down",
    "slide-left": "reveal-slide-left",
    "slide-right": "reveal-slide-right",
    "zoom-in": "reveal-zoom-in",
    "fade-in": "reveal-fade-in",
  }[animation];

  const style: React.CSSProperties = isInitialized
    ? {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }
    : {};

  return (
    <Component
      ref={elementRef}
      style={style}
      className={cn(
        "reveal-base",
        isInitialized && !isRevealed && animationClass,
        isRevealed && "is-revealed",
        className
      )}
    >
      {children}
    </Component>
  );
}
