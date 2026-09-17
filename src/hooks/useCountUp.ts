"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Port of the counter behavior from main.js: each `.view-counter` only
 * starts animating once it scrolls into view, and only once (main.js tracks
 * a `counted` flag per element for exactly this, via a scroll listener +
 * jQuery's countTo plugin). This uses an IntersectionObserver instead, and
 * disconnects after the first trigger so it can never restart when the
 * user scrolls back and forth past it.
 * Used by: FunFactSection (100+, 99%, 30+, 25+ counters)
 */
export function useCountUp<T extends HTMLElement>(target: number, duration = 1000) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setValue(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}
