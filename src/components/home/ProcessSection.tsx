"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { processSteps } from "@/data/process";

// Port of horizontalAccordion from main.js. Below the `xl` breakpoint (see
// `@include res(xl)` on `.is-mobile-slider` in _widget.scss — that's scoped
// to max-width:1199px, so the class is harmless to always render, no JS
// viewport check needed) the accordion becomes a horizontally scrollable,
// snap-to-item carousel where every item shows its `.box-process` at full
// width; above that breakpoint it's the click-to-expand accordion, sized via
// plain flexbox (see _widget.scss) instead of the original's JS pixel math.
// `activeIndex` drives both: which item is "active" for the desktop accordion,
// and which pagination dot is lit up / auto-scrolled-to on mobile.
interface ProcessSectionProps {
  dark?: boolean;
}

export default function ProcessSection({ dark = false }: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const goToSlide = (index: number, behavior: ScrollBehavior = "smooth") => {
    setActiveIndex(index);
    const track = trackRef.current;
    const item = itemRefs.current[index];
    if (track && item) {
      track.scrollTo({ left: item.offsetLeft, behavior });
    }
  };

  // Mirrors the original's scroll-to-active-item-on-load.
  useEffect(() => {
    goToSlide(activeIndex, "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mirrors `updateActiveByScroll`: whichever item sits closest to the
  // track's horizontal center becomes active as the user swipes/scrolls.
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(center - itemCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section className="section-process h-1 section-line flat-spacing-2 horizontal-accordion-wrap">
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>
      <div className="container">
        <div className="heading-section style-center mb-56">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            Working Process
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-7 title-animation">
            How We Transform Concepts
            <br />
            into Intelligence
          </p>
        </div>
      </div>

      <div className="container w-1302">
        <div
          className="process-accordion horizontal-accordion is-mobile-slider"
          data-inactive-width="290"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {processSteps.map((step, index) => {
            const isActive = index === activeIndex;
            const details = (
              <div className="top-item">
                <p className="name-process">
                  <span className="text-body-2 letter-space--3">
                    {step.number}
                  </span>
                  <span className="text-body-2 fw-7 letter-space--3">
                    {step.title}
                  </span>
                </p>
                <p className="text ff-2">{step.description}</p>
              </div>
            );

            return (
              <div
                className={`process-accordion-item accordion-horizontal-item${
                  dark ? " style-bg-2" : ""
                }${isActive ? " active" : ""}`}
                key={step.number}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => goToSlide(index)}
              >
                <div className="naming-list">{details}</div>
                <div className="box-process">
                  {details}
                  <div className="list-image">
                    <div className="image img-1">
                      <Image
                        src="/assets/images/widget/image-process-1.jpg"
                        alt={step.title}
                        width={370}
                        height={230}
                      />
                    </div>
                    <div className="image img-2">
                      <Image
                        src="/assets/images/widget/image-process-2.jpg"
                        alt={step.title}
                        width={230}
                        height={230}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="horizontal-accordion-pagination sw-dot-pagination d-xl-none mt-30">
          {processSteps.map((step, index) => (
            <span
              key={step.number}
              role="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`swiper-pagination-bullet${
                index === activeIndex ? " swiper-pagination-bullet-active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
