"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// main.js's preloader() does setTimeout(200ms) -> $(".preload").fadeOut("slow")
// -> $(this).remove(), running once per full page load — every link in the
// original static site is a real navigation, so it replays on every click.
// This app is an SPA (Link navigation doesn't remount the root layout), so
// the same fixed-duration flash is re-triggered on every pathname change via
// usePathname(), not just the initial mount. jQuery's "slow" preset is 600ms,
// matched here via FADE_MS so the fade reads the same speed.
const HOLD_MS = 200;
const FADE_MS = 600;

// Only the 4 home variants get the preloader — matches the "Home" dropdown
// in data/menu.ts. Every other page reverts to no preloader at all.
const HOME_ROUTES = ["/", "/ai-startup", "/index-dark", "/ai-startup-dark"];

export default function Preloader() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);
  const isHomeRoute = HOME_ROUTES.includes(pathname);

  useEffect(() => {
    if (!isHomeRoute) return;

    setMounted(true);
    setFading(false);

    const holdTimer = setTimeout(() => setFading(true), HOLD_MS);
    return () => clearTimeout(holdTimer);
  }, [pathname, isHomeRoute]);

  if (!isHomeRoute || !mounted) return null;

  return (
    <div
      className="preload preload-container"
      style={{
        opacity: fading ? 0 : 1,
        // jQuery's default "swing" easing (its fadeOut's real curve) isn't a
        // CSS keyword — cubic-bezier(0.445, 0.05, 0.55, 0.95) is the closest
        // standard approximation, slow-in/slow-out like swing instead of the
        // abrupt-start feel of "ease-out".
        transition: `opacity ${FADE_MS}ms cubic-bezier(0.445, 0.05, 0.55, 0.95)`,
      }}
      // Unmount exactly when the opacity transition finishes (mirrors
      // jQuery fadeOut's callback removing the node) instead of a second
      // fixed timer — a timer can fire a beat early/late and cut the fade
      // short, which reads as a jerky snap rather than a smooth finish.
      onTransitionEnd={() => setMounted(false)}
    >
      <div className="spinner-circle lg">
        <span className="spinner-circle1 spinner-child"></span>
        <span className="spinner-circle2 spinner-child"></span>
        <span className="spinner-circle3 spinner-child"></span>
        <span className="spinner-circle4 spinner-child"></span>
        <span className="spinner-circle5 spinner-child"></span>
        <span className="spinner-circle6 spinner-child"></span>
        <span className="spinner-circle7 spinner-child"></span>
        <span className="spinner-circle8 spinner-child"></span>
        <span className="spinner-circle9 spinner-child"></span>
      </div>
    </div>
  );
}
