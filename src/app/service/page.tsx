import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ServiceFeaturesSection from "@/components/service/ServiceFeaturesSection";
import Marquee from "@/components/layout/Marquee";
import ServicesGridSection from "@/components/service/ServicesGridSection";
import ProcessStaticSection from "@/components/home2/ProcessStaticSection";
import ServiceTestimonialsSection from "@/components/service/ServiceTestimonialsSection";

export default function ServicePage() {
  return (
    <>
      <PageTitleBanner title="Service" breadcrumbLabel="Service" bgImage="/assets/images/page-title/page-title-2.jpg" />
      <div className="main-content">
        <ServiceFeaturesSection />

        <div className="flat-spacing-8">
          <Marquee
            bordered
            dotted
            variant="style-color-title"
            gradientDots={false}
            className="infiniteSlide-app-dark-2 section-dot-2"
          />
        </div>

        <ServicesGridSection />
        <ProcessStaticSection spacing="1" showShape={false} />
        <ServiceTestimonialsSection />
      </div>
    </>
  );
}
