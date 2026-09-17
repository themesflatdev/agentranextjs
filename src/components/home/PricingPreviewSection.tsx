"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homePricingPlans } from "@/data/pricingHome";

type BillingCycle = "monthly" | "yearly";

// main.js's initPricingTabs just toggles `.active` on the tab buttons/panels
// and `.is-yearly` on the group — reproduced here with a single billingCycle
// state instead of duplicating the whole pricing-item markup twice per tab
// (the original renders both panels and hides one via `.pricing-content`
// {display:none}), since only the displayed price actually changes per tab.
interface PricingPreviewSectionProps {
  dark?: boolean;
}

export default function PricingPreviewSection({ dark = false }: PricingPreviewSectionProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isYearly = billingCycle === "yearly";
  const dotClassName = `dot${dark ? " dot-gradient" : ""}`;

  return (
    <section
      className={`section-pricing h-1 section-line ${
        dark ? "flat-spacing-3 section-style-dark" : "flat-spacing-1"
      } pricing-tabs${isYearly ? " is-yearly" : ""}`}
    >
      <div className="img-shape">
        <Image
          src="/assets/images/section/shape-section-pricing.png"
          alt="Image"
          width={1150}
          height={491}
        />
      </div>
      <div className="line-page line-1 style-dot dot-white"></div>
      <div className="section-pricing-inner position-relative z-5">
        <div className="container">
          <div className="heading-section style-center style-white">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Pilot to enterprise Plan
              <i className="icon-sparkle"></i>
            </p>
            <p className="h2 title fw-7 title-animation">
              Flexible Pricing for Business
            </p>
          </div>
          <div className="pricing-switch mb-50">
            <button
              type="button"
              className={`pricing-tab fw-6${!isYearly ? " active" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>

            <button
              type="button"
              className="pricing-toggle"
              aria-label="Switch pricing"
              onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
            >
              <span></span>
            </button>

            <button
              type="button"
              className={`pricing-tab d-flex align-items-center g-10 fw-6${
                isYearly ? " active" : ""
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="pricing-discount text-caption fw-5">
                30% Off
              </span>
            </button>
          </div>

          <div className="section-content section-dot dot-white">
            <div className={`${dotClassName} dot-1`}></div>
            <div className={`${dotClassName} dot-2`}></div>
            <div className={`${dotClassName} dot-3`}></div>
            <div className={`${dotClassName} dot-4`}></div>
            <div className="pricing-content active">
              <div className="list-pricing-item d-flex g-30 justify-content-center">
                {homePricingPlans.map((plan) => (
                  <div
                    className={`pricing-item${plan.featured ? " style-pro" : ""}`}
                    key={plan.name}
                  >
                    <div className="top-item">
                      <p className="plan-title text-title-1 fw-6 letter-space--3">
                        {plan.name}
                      </p>
                      <p className="plan-desc fw-5 ff-2">{plan.tagline}</p>
                    </div>
                    <p className="plan-price letter-space--5">
                      <span className="fs-75 lh-100 fw-6">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span>/per {billingCycle}</span>
                    </p>
                    <Link
                      href={plan.ctaHref}
                      className={`tf-btn style-w-full style-big${
                        plan.featured ? " style-gradient-2" : " style-color-2"
                      }`}
                    >
                      <span className="text-btn">Get Started</span>
                      <span className="icon-btn">
                        <i className="icon-chevron-right"></i>
                      </span>
                    </Link>
                    <ul className="plan-feature d-flex flex-column g-10">
                      {plan.features.map((feature) => (
                        <li
                          className="feature-item ff-2 fw-5 letter-space--2 d-flex align-items-center g-7"
                          key={feature}
                        >
                          <i className="icon-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
