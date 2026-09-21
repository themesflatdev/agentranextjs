"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const REVEAL_SELECTOR = ".tf-animate-1, .tf-animate-2, .tf-animate-3, .tf-animate-4";

// Global replacement for the 3 animation mechanisms gsapAnimation.js/main.js
// (wow.min.js) wired up per-page in the original template. Mounted once in
// RootLayout so every route gets them for free instead of each page/section
// re-wiring its own observer:
//
// a) ".title-animation" / ".text-animation p" — GSAP SplitText, split into
//    lines and revealed via ScrollTrigger (animationText in gsapAnimation.js;
//    duration/stagger/rotationX kept identical to the original, "*p" block
//    just uses a 0.5s delay + perspective 400 instead of 0.2s + 200).
// b) ".tf-animate-1/2/3/4" — IntersectionObserver adding "active-animate"
//    once in view, honoring data-delay (animateImgItem); _animation.scss
//    holds these elements at opacity:0 + a fully-inset clip-path until that
//    class lands. That same clip-path turns out to stop this Chromium build
//    from ever re-firing the observer for a target after its first (empty)
//    callback — verified directly: an observer on the same elements starts
//    updating normally the instant clip-path is cleared, and the original
//    template's own jQuery/GSAP build reproduces the identical stall. That's
//    exactly what the original's now-redundant-looking scroll listener
//    (`checkVisible` in animateImgItem) was actually a workaround for, so it
//    stays here as a real fallback rather than the dead code it first
//    looked like — not a duplicate of the observer, a plain
//    getBoundingClientRect scroll/resize check that reveals anything the
//    observer misses.
// c) ".wow[data-wow-delay]" — plain IntersectionObserver adding "animated"
//    (replaces wow.min.js) so the animate.min.css class already on the
//    element (e.g. "fadeInUp") gets to run; data-wow-delay becomes an inline
//    animation-delay before the class is added.
//
// App Router navigates client-side without a full reload, so `pathname` is
// an effect dependency: every route change kills the previous route's
// ScrollTriggers/observers/split lines before re-scanning the new DOM.
export default function ScrollAnimations() {
  const pathname = usePathname();

  // This is an SPA route change, not a real page load, so the browser never
  // resets scroll on its own. Forcing an instant scrollTo(0,0) here fixes
  // that, via useLayoutEffect so it lands before paint. Side effect: jumping
  // scrollY straight to 0 makes useStickyHeader drop "header-sticky"
  // instantly, and `.header-fixed`'s `@include transition3` then animates
  // its background-color from solid dark to fully transparent over
  // ~300-400ms — exposing the page's white body background right through
  // the header for that whole fade (confirmed directly: measured the
  // header's computed background-color across the transition, saw the alpha
  // channel animate 1 -> 0). Fixed by suppressing the header's own
  // transition for the single instant this forced jump happens, so its
  // sticky-class change (if any) snaps instead of animating; a normal
  // user scroll crossing the 250px threshold is untouched and still
  // transitions smoothly.
  useLayoutEffect(() => {
    const header = document.querySelector<HTMLElement>(".header-fixed");
    if (header) header.style.transition = "none";

    // `behavior: "instant"` is required — _reset.scss sets
    // `html { scroll-behavior: smooth }` globally, so a plain scrollTo(0, 0)
    // would animate over several frames instead of landing at 0 before
    // this same paint.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // useStickyHeader reacts to the native "scroll" event this scrollTo
    // dispatches, which fires asynchronously (next task, not synchronously
    // here) — restoring the transition needs to wait until after that has
    // had a chance to run and apply its class change.
    const restoreTimer = setTimeout(() => {
      if (header) header.style.transition = "";
    }, 100);
    return () => clearTimeout(restoreTimer);
  }, [pathname]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    const splits: SplitText[] = [];

    // ":not(.view-counter)" excludes AboutSection2's live counter-item —
    // SplitText.split() reverts by resetting `element.innerHTML` from a
    // captured HTML string (see SplitText.js revert()), which rebuilds every
    // child node from scratch. That destroys the counter's ref-tracked
    // <span> (useCountUp), detaching it from the DOM the IntersectionObserver
    // is watching and permanently orphaning React's reference to it — the
    // number never counts. The original jQuery version doesn't hit this
    // because it re-queries ".number" live on every scroll check instead of
    // holding a stable reference.
    document.querySelectorAll<HTMLElement>(".title-animation:not(.view-counter)").forEach((el) => {
      const split = new SplitText(el, { type: "words, lines" });
      gsap.set(el, { perspective: 200 });
      split.split({ type: "lines" });
      splits.push(split);

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play none none none",
        },
      }).from(split.lines, {
        duration: 1,
        delay: 0.2,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    document.querySelectorAll<HTMLElement>(".text-animation p").forEach((el) => {
      const split = new SplitText(el, { type: "lines" });
      gsap.set(el, { perspective: 400 });
      split.split({ type: "lines" });
      splits.push(split);

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play none none none",
        },
      }).from(split.lines, {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
      });
    });

    const revealed = new WeakSet<HTMLElement>();
    const reveal = (el: HTMLElement) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      const delay = parseFloat(el.dataset.delay ?? "0") || 0;
      window.setTimeout(() => el.classList.add("active-animate"), delay * 1000);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );
    revealTargets.forEach((el) => revealObserver.observe(el));

    // Fallback pass (see comment above): a plain geometry check, same
    // condition as the original's checkVisible (90% of viewport height).
    const checkRevealVisible = () => {
      const windowHeight = window.innerHeight;
      revealTargets.forEach((el) => {
        if (revealed.has(el)) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) reveal(el);
      });
    };
    checkRevealVisible();
    window.addEventListener("scroll", checkRevealVisible, { passive: true });
    window.addEventListener("resize", checkRevealVisible);

    const wowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          if (el.dataset.wowDelay) el.style.animationDelay = el.dataset.wowDelay;
          el.classList.add("animated");
          wowObserver.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll<HTMLElement>(".wow").forEach((el) => wowObserver.observe(el));

    // Recalculate every ScrollTrigger's start/end against the new route's
    // actual layout — without this, positions can still carry over
    // measurements taken while the previous page's DOM was in place.
    ScrollTrigger.refresh();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", checkRevealVisible);
      window.removeEventListener("resize", checkRevealVisible);
      wowObserver.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      splits.forEach((split) => split.revert());
    };
  }, [pathname]);

  return null;
}
