"use client";

import { useEffect, type RefObject } from "react";

/**
 * Port of `headerSticky` from agentrahtml/assets/js/main.js.
 * Below 250px of scroll, the header is offset upward by its own height
 * (position: sticky relies on this negative `top` to stay out of view);
 * past 250px it snaps to top:0 and gets `.header-sticky` for the solid
 * background. `.sticky-top` elements get pushed down by the header's
 * height so they don't end up underneath it once it locks in place.
 * Only bound on scroll (never fired on mount) to match the original jQuery
 * behavior exactly.
 * Used by: components/layout/Header.tsx
 */
export function useStickyHeader(headerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;

      const scrollTop = window.scrollY;
      const navbarHeight = header.offsetHeight;
      const stickyTopEls = document.querySelectorAll<HTMLElement>(".sticky-top");

      if (scrollTop >= 250) {
        header.style.top = "0";
        header.classList.add("header-sticky");
        stickyTopEls.forEach((el) => {
          el.style.top = `${15 + navbarHeight}px`;
        });
      } else {
        header.style.top = `-${navbarHeight}px`;
        header.classList.remove("header-sticky");
        stickyTopEls.forEach((el) => {
          el.style.top = "15px";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerRef]);
}
