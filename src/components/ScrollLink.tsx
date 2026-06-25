"use client";

import type { ReactNode } from "react";
import { scrollToSection, scrollToTop } from "@/lib/scroll-to-section";

type ScrollLinkProps = {
  sectionId?: string;
  toTop?: boolean;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function ScrollLink({
  sectionId,
  toTop = false,
  className,
  children,
  onNavigate,
}: ScrollLinkProps) {
  return (
    <a
      href="/"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (toTop) {
          scrollToTop();
        } else if (sectionId) {
          scrollToSection(sectionId);
        }
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}
