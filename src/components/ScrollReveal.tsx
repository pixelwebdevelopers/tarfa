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
  duration = 950, // Slower, more graceful transition
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
    // Check if element is already within the visible viewport on initial page load
    const isAboveFold = rect.top < window.innerHeight - 80 && rect.bottom > 0;

    if (isAboveFold) {
      setIsRevealed(true);
      setIsInitialized(true);
      return;
    }

    // Element is below the fold: prime it to animate only when scrolled into view
    setIsRevealed(false);
    setIsInitialized(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect(); // Trigger once as user scrolls into the section
        }
      },
      {
        threshold: 0.15, // Requires 15% of the element to be inside the viewport
        rootMargin: "0px 0px -80px 0px", // Only triggers AFTER the element is 80px inside the visible screen!
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
