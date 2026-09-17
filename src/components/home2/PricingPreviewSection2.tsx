"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pricingHome2Plans } from "@/data/pricingHome2";

type BillingCycle = "monthly" | "yearly";

// Same Monthly/Yearly tab logic as PricingPreviewSection (home page) — kept
// as a plain useState here too rather than a shared hook, since the whole
// "hook" would just be this one state line with no other behavior to share;
// the two sections' markup (grid cards vs. this stacked list layout) differs
// enough that only the state itself, not any effect/logic, could be reused.
export default function PricingPreviewSection2() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <section
      className={`section-pricing h-2 pricing-tabs flat-spacing-1${
        isYearly ? " is-yearly" : ""
      }`}
    >
      <div className="img-bg">
        <Image
          src="/assets/images/section/bg-s-pricing-2.jpg"
          alt="Image"
          fill
          sizes="100vw"
        />
      </div>
      <div className="container">
        <div className="heading-section style-center style-white">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            Pilot to enterprise Plan
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-7 title-animation">Flexible Pricing for Business</p>
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
            <span className="pricing-discount text-caption fw-5">30% Off</span>
          </button>
        </div>

        <div className="section-pricing-inner position-relative z-5">
          <div className="pricing-content active">
            <div className="list-pricing-item d-flex flex-column g-30">
              {pricingHome2Plans.map((plan) => (
                <div
                  className={`pricing-item style-2${plan.featured ? " style-pro" : ""}`}
                  key={plan.name}
                >
                  <div className="left">
                    <div className="icon">
                      <i className={plan.icon}></i>
                    </div>
                    <p className="plan-title text-title-1 fw-6 letter-space--3">
                      {plan.name}
                    </p>
                    <p className="plan-desc ff-2">{plan.desc}</p>
                  </div>

                  <ul className="plan-feature d-flex flex-column g-10">
                    {plan.features.map((feature) => (
                      <li
                        className="feature-item ff-2 fw-5 letter-space--2 d-flex align-items-center g-10"
                        key={feature}
                      >
                        <i className="icon-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="right">
                    <p className="plan-price letter-space--5">
                      <span className="fs-75 lh-100 fw-6 letter-space--5">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span>/per {billingCycle}</span>
                    </p>
                    <Link
                      href="/pricing"
                      className={`tf-btn style-w-full style-big${
                        plan.featured ? " style-gradient-2 border-radius-30" : " style-color-2"
                      }`}
                    >
                      <span className="text-btn">Get Started</span>
                      <span className="icon-btn">
                        <i className="icon-chevron-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
