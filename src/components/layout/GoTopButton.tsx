"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Port of `goTop` from agentrahtml/assets/js/main.js: a fixed circular
// button whose SVG ring fills in proportion to how far the page has been
// scrolled (stroke-dashoffset math straight from the original), shown once
// scrollTop > 0, that scrolls the page back to top on click. main.js's own
// `duration = 0` makes its jQuery `.animate({scrollTop:0}, duration)` an
// instant jump with no visible transition — but that's a leftover/unused
// variable in the source rather than the intended feel, so this animates
// the scroll instead of reproducing that literally.
//
// index-dark.html and ai-startup-dark.html add "style-color-white" to
// `.progress-wrap` for a white ring/icon on their dark background; every
// other page (including plain ai-startup.html) uses the default styling —
// same two routes BodyThemeClass already keys its dark body classes off of.
const DARK_ROUTES = ["/index-dark", "/ai-startup-dark"];

export default function GoTopButton() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;

    const pathLength = path.getTotalLength();
    path.style.transition = path.style.transition || "none";
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    // Force layout so the dasharray/dashoffset reset above applies before
    // re-enabling the transition, same as the original's getBoundingClientRect()
    // reflow trick — otherwise the very first progress update would itself animate.
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = pathLength - (scrollTop * pathLength) / height;
      path.style.strokeDashoffset = `${progress}`;
      wrap.classList.toggle("active-progress", scrollTop > 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [pathname]);

  const isDark = DARK_ROUTES.includes(pathname);

  return (
    <div
      ref={wrapRef}
      className={`progress-wrap${isDark ? " style-color-white" : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}
