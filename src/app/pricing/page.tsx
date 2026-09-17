import PageTitleBanner from "@/components/sections/PageTitleBanner";
import PricingCardsSection from "@/components/pricing/PricingCardsSection";
import PricingListSection from "@/components/pricing/PricingListSection";
import FAQAccordion from "@/components/common/FAQAccordion";
import { faqPricing } from "@/data/faqPricing";

export default function PricingPage() {
  return (
    <>
      <PageTitleBanner title="Price" breadcrumbLabel="Price" bgImage="/assets/images/page-title/page-title.jpg" />
      <div className="main-content">
        <PricingCardsSection />
        <PricingListSection />

        <section className="section-faq h-2 flat-spacing-6">
          <div className="container">
            <div className="row rg-60 justify-content-between">
              <div className="col-lg-4">
                <div className="section-content">
                  <div className="heading-section heading-h2">
                    <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
                      <i className="icon-sparkle"></i>
                      FAQs
                    </p>
                    <p className="h2 title fw-6 title-animation">
                      Frequently Asked
                      <br />
                      Questions
                    </p>
                  </div>
                  <div className="bottom-content">
                    <p className="text ff-2 title-animation">
                      Find answers to the most common questions about our AI startup agency, services, development process, pricing, and support.
                    </p>
                    <div className="title-animation">
                      <a href="/faq" className="tf-btn style-big border-radius-30">
                        <span className="text-btn">Get A Quote</span>
                        <span className="icon-btn">
                          <i className="icon-chevron-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <FAQAccordion items={faqPricing} defaultOpenIndex={1} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
