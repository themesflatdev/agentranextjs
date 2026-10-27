import type { Metadata } from "next";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import FAQSidebarToggle from "@/components/faq/FAQSidebarToggle";
import FAQAccordion from "@/components/common/FAQAccordion";
import { faqPage1 } from "@/data/faqPage1";
import { faqPage2 } from "@/data/faqPage2";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to common questions about Agentra's AI solutions, digital services, project process, pricing, and support.",
};

// faq.html has no "main-content" wrapper div (unlike most other pages) —
// the page-title section and the single section-faq sit directly under
// <main id="wrapper">, confirmed by diffing the source directly.
export default function FaqPage() {
  return (
    <>
      <PageTitleBanner title="FAQs" breadcrumbLabel="FAQs" bgImage="/assets/images/page-title/page-title.jpg" />

      <section className="section-faq p-faq flat-spacing-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <FAQSidebarToggle />
            </div>

            <div className="col-xl-8">
              <div className="list-faq">
                <h2 className="title fw-6 color-title mb-20">Frequently Asked Questions</h2>

                <p className="desc ff-2 color-paragraph mb-50">
                  Find answers to the most common questions about our AI solutions, digital services, project process, and support. Our FAQ section is designed to help you better understand how we work.
                </p>

                <FAQAccordion items={faqPage1} defaultOpenIndex={1} className="style-2 mb-50" />
                <FAQAccordion items={faqPage2} defaultOpenIndex={1} className="style-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
