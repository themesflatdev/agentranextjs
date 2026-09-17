"use client";

import Image from "next/image";
import Link from "next/link";
import { useCountUp } from "@/hooks/useCountUp";

interface CounterItem {
  target: number;
  suffix: string;
  label: string;
}

const COUNTERS: CounterItem[] = [
  { target: 100, suffix: "+", label: "Project Complete" },
  { target: 99, suffix: "%", label: "Happy global clients" },
];

// Reuses useCountUp (built for FunFactSection's counters) — same
// scroll-into-view-once behavior, just this section's own markup (no
// icon-sparkle, counters laid out two-up instead of four).
function CounterItemView({ target, suffix, label, dark }: CounterItem & { dark: boolean }) {
  const { ref, value } = useCountUp<HTMLSpanElement>(target, 1000);

  return (
    <div className={`counter-item view-counter${dark ? "" : " title-animation"}`}>
      <p className="wrap-counter h1 fw-7 mb-9">
        <span className="info-card_value number" ref={ref}>
          {value}
        </span>
        {suffix}
      </p>
      <p className="text-counter text-body-2 fw-5 ff-2 letter-space--2">{label}</p>
    </div>
  );
}

interface AboutSection2Props {
  dark?: boolean;
}

export default function AboutSection2({ dark = false }: AboutSection2Props) {
  return (
    <section className="section-about h-2 flat-spacing-3">
      <div className="container">
        <div className="heading-section style-center heading-h2 mb-70">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            About Company
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-6 title-animation">
            We are passionate about
            <br />
            transforming innovative ideas into
            <br />
            intelligent digital solutions that
            <br />
            create real-world impact.
          </p>
        </div>
        <div className="row rg-30">
          <div className="col-lg-6">
            <div className="left">
              <div className="image">
                <Image
                  src="/assets/images/section/img-s-about-h2.jpg"
                  alt="Image"
                  width={630}
                  height={370}
                />
              </div>
              <div className="box-fact style-bg-blur">
                <div className="top-fact">
                  <p className="fs-70 lh-100 letter-space--5 fw-6 ff-2">
                    <span className="h1 fw-6 ff-2">10x</span>%
                  </p>
                </div>
                <div className="line"></div>
                <p className="desc ff-2 text-title-1 fw-5 letter-space--3">
                  Business growth
                  <br />
                  through strategy
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right">
              <p className={`text ff-2 h4 fw-5 letter-space-0${dark ? "" : " title-animation"}`}>Our team combines creativity, strategy, advanced artificial intelligence technologies help startups and businesses grow faster, work smarter, and stay.</p>
              <div className="list-counter d-flex justify-content-between">
                {COUNTERS.map((counter) => (
                  <CounterItemView key={counter.label} {...counter} dark={dark} />
                ))}
              </div>
              {dark ? (
                <Link href="/about" className="tf-btn style-big">
                  <span className="text-btn">Learn More Us</span>
                  <span className="icon-btn">
                    <i className="icon-chevron-right"></i>
                  </span>
                </Link>
              ) : (
                <div className="title-animation">
                  <Link href="/about" className="tf-btn style-big">
                    <span className="text-btn">Learn More Us</span>
                    <span className="icon-btn">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
