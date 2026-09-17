import Link from "next/link";
import FAQAccordion from "@/components/common/FAQAccordion";
import { faqHome2 } from "@/data/faqHome2";

interface FAQSection2Props {
  dark?: boolean;
}

export default function FAQSection2({ dark = false }: FAQSection2Props) {
  return (
    <section className="section-faq h-2">
      <div className="container">
        <div className="row rg-60 justify-content-between">
          <div className="col-lg-4">
            <div className="section-content">
              <div className="heading-section heading-h2">
                <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
                  <i className="icon-sparkle"></i>
                  FAQs
                </p>
                <p className="h2 title fw-7 title-animation">
                  Frequently Asked
                  <br />
                  Questions
                </p>
              </div>
              <div className="bottom-content">
                <p className="text ff-2 title-animation">Find answers to the most common questions about our AI startup agency, services, development process, pricing, and support.</p>
                <div className="title-animation">
                  <Link href="/faq" className="tf-btn style-big border-radius-30">
                    <span className="text-btn">Get A Quote</span>
                    <span className="icon-btn">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <FAQAccordion
              items={faqHome2}
              defaultOpenIndex={1}
              className={dark ? "style-dark" : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
