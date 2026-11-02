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
  className?: string;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 1200, // 1.2s default for visible, elegant, graceful motion
  className,
  as: Component = "div",
}: ScrollRevealProps) {
  // Start with true on initial server render to ensure SEO accessibility
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
    // Only elements clearly above the fold (top 60% of viewport) remain visible immediately
    const isAboveFold = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;

    if (isAboveFold) {
      setIsRevealed(true);
      setIsInitialized(true);
      return;
    }

    // Element is below the viewing area: prime it to animate only when scrolled well into view
    setIsRevealed(false);
    setIsInitialized(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // Trigger once as user scrolls comfortably into the section
        }
      },
      {
        threshold: 0.15, // Requires 15% of the element inside the active viewing window
        rootMargin: "0px 0px -140px 0px", // Waits until element is 140px UP into the screen before animating
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

  const actualDuration = Math.max(duration, 1100);

  const style: React.CSSProperties = isInitialized
    ? {
        transitionDuration: `${actualDuration}ms`,
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
