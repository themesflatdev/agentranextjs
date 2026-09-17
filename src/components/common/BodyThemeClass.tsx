"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// index-dark.html's <body> carries a "body-style-dark" class, and
// ai-startup-dark.html's <main id="wrapper"> carries "body-style-dark-2" —
// _section.scss keys each page's black background + forced-white text color
// off of these, so without them the page renders on a plain white background
// regardless of any per-section "style-dark"/"style-dark-2" classes. This repo
// has no <main id="wrapper"> (that wrapper was flattened away, Header/Footer
// sit directly in <body>), but the scss selector only needs the class on any
// ancestor, so <body> works the same. RootLayout is a Server Component shared
// by every route, so it can't branch on pathname itself; this mounts once
// (like ScrollAnimations) and toggles the classes on the real <body> element
// client-side instead.
const DARK_BODY_ROUTES = ["/index-dark"];
const DARK_BODY_ROUTES_2 = ["/ai-startup-dark"];

export default function BodyThemeClass() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("body-style-dark", DARK_BODY_ROUTES.includes(pathname));
    document.body.classList.toggle("body-style-dark-2", DARK_BODY_ROUTES_2.includes(pathname));
  }, [pathname]);

  return null;
}
