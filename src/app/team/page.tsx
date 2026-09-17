import PageTitleBanner from "@/components/sections/PageTitleBanner";
import TeamGridSection from "@/components/team/TeamGridSection";
import Marquee from "@/components/layout/Marquee";
import TeamTestimonialsSection from "@/components/team/TeamTestimonialsSection";
import FAQAccordion from "@/components/common/FAQAccordion";
import { faqTeam } from "@/data/faqTeam";

export default function TeamPage() {
  return (
    <>
      <PageTitleBanner title="Team Member" breadcrumbLabel="Team Member" bgImage="/assets/images/page-title/page-title-2.jpg" />
      <div className="main-content">
        <TeamGridSection />

        <Marquee
          bordered
          dotted
          variant="style-color-title"
          gradientDots={false}
          className="infiniteSlide-app-dark-2 section-dot-2"
        />

        <TeamTestimonialsSection />

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
                <FAQAccordion items={faqTeam} defaultOpenIndex={1} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
