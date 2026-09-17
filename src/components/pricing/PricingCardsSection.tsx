"use client";

import { useState } from "react";
import Link from "next/link";
import { pricingCardPlans } from "@/data/pricingPage";

type BillingCycle = "monthly" | "yearly";

// Same Monthly/Yearly tab state as PricingPreviewSection (home.md) and
// PricingPreviewSection2 (home2.md) — kept as a local useState here too
// rather than a shared hook, matching those two: there's no other logic to
// share besides the one state value.
export default function PricingCardsSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <section
      className={`section-pricing flat-spacing-1 pricing-tabs${isYearly ? " is-yearly" : ""}`}
      data-pricing-tabs
    >
      <div className="section-pricing-inner position-relative z-5">
        <div className="container">
          <div className="heading-section style-center">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Pilot to enterprise Plan
              <i className="icon-sparkle"></i>
            </p>
            <p className="h2 title fw-7 title-animation">Flexible Pricing for Business</p>
          </div>
          <div className="pricing-switch style-color-title mb-50">
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
              <span className="pricing-discount text-caption fw-5">30% Off</span>
            </button>
          </div>
          <div className="section-content">
            <div className="pricing-content active">
              <div className="row rg-30">
                {pricingCardPlans.map((plan, index) => (
                  <div className="col-lg-4" key={`${plan.name}-${index}`}>
                    <div className={`pricing-item style-bg-1${plan.featured ? " style-pro" : ""}`}>
                      <div className="top-item">
                        <p className="plan-title text-title-1 fw-6 letter-space--3">{plan.name}</p>
                        <p className="plan-desc fw-5 ff-2">{plan.tagline}</p>
                      </div>
                      <p className="plan-price letter-space--5">
                        <span className="fs-75 lh-100 fw-6 letter-space--5">
                          {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span>/per {billingCycle}</span>
                      </p>
                      <Link
                        href={plan.ctaHref}
                        className={`tf-btn style-w-full style-big${
                          plan.ctaClassName ? ` ${plan.ctaClassName}` : ""
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
