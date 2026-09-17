import PageTitleBanner from "@/components/sections/PageTitleBanner";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import Marquee from "@/components/layout/Marquee";
import WhySection from "@/components/about/WhySection";
import TeamPreviewSection from "@/components/about/TeamPreviewSection";
import AwardsAccordion from "@/components/about/AwardsAccordion";
import ClientLogosMarquee from "@/components/home2/ClientLogosMarquee";
import { awards } from "@/data/awards";

export default function AboutPage() {
  return (
    <>
      <PageTitleBanner title="About US" breadcrumbLabel="About Us" bgImage="/assets/images/page-title/page-title-2.jpg" />
      <div className="main-content">
        <AboutIntroSection />

        <section className="section-marquee p-abou flat-spacing-3">
          <div className="container">
            <Marquee bordered dotted variant="style-color-title" />
          </div>
        </section>

        <WhySection />
        <TeamPreviewSection />

        <section className="section-awards flat-spacing-1">
          <div className="container">
            <div className="heading-section style-center mb-70">
              <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
                <i className="icon-sparkle"></i>
                Awards Winning
                <i className="icon-sparkle"></i>
              </p>
              <p className="h2 title fw-6 title-animation">
                Award-Winning Solutions for Modern
                <br />
                Businesses in Smart Technology
              </p>
            </div>
            <AwardsAccordion items={awards} />
          </div>
        </section>

        <ClientLogosMarquee hoverVariant="2" />
      </div>
    </>
  );
}
