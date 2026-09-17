"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CounterItem {
  target: number;
  suffix: string;
  label: string;
}

const COUNTERS: CounterItem[] = [
  { target: 100, suffix: "+", label: "Project Complete" },
  { target: 99, suffix: "%", label: "Happy global clients" },
  { target: 30, suffix: "+", label: "Team Members" },
  { target: 25, suffix: "+", label: "Awards Winning" },
];

function CounterItemView({ target, suffix, label }: CounterItem) {
  const { ref, value } = useCountUp<HTMLSpanElement>(target, 1000);

  return (
    <div className="counter-item view-counter">
      <div className="icon">
        <i className="icon-sparkle"></i>
      </div>
      <p className="wrap-counter h1 fw-7">
        <span className="info-card_value number" ref={ref}>
          {value}
        </span>
        {suffix}
      </p>
      <p className="text-counter text-body-2 fw-5 ff-2">{label}</p>
    </div>
  );
}

interface FunFactSectionProps {
  dark?: boolean;
}

export default function FunFactSection({ dark = false }: FunFactSectionProps) {
  return (
    <section className="section-fun-fact h-1 section-line">
      <div className={`line-page ${dark ? "line-1" : "line-2 style-dot"}`}></div>
      <div className="container">
        <div
          className={`section-fun-fact-inner section-dot style-border${
            dark ? " style-border-2" : ""
          }`}
        >
          {!dark && (
            <>
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="dot dot-4"></span>
            </>
          )}
          <div className={`wg-fun-fact${dark ? " style-color-blue" : ""}`}>
            <p className="h3 fw-6 text-center text">
              The Numbers Behind <span className="fst-italic">Our Innovation</span>
            </p>
            <div className="list-counter">
              <div className="line"></div>
              {COUNTERS.map((counter) => (
                <CounterItemView key={counter.label} {...counter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
