import HeroArea2 from "@/components/home2/HeroArea2";
import FeaturesSwiperSection from "@/components/home2/FeaturesSwiperSection";
import AboutSection2 from "@/components/home2/AboutSection2";
import ServicesListSection from "@/components/home2/ServicesListSection";
import ProjectsSwiperSection2 from "@/components/home2/ProjectsSwiperSection2";
import ProcessStaticSection from "@/components/home2/ProcessStaticSection";
import PricingPreviewSection2 from "@/components/home2/PricingPreviewSection2";
import ClientLogosMarquee from "@/components/home2/ClientLogosMarquee";
import FAQSection2 from "@/components/home2/FAQSection2";
import BlogSwiperSection2 from "@/components/home2/BlogSwiperSection2";
import CTASection2 from "@/components/home2/CTASection2";
import Marquee from "@/components/layout/Marquee";

export default function AiStartupDarkPage() {
  return (
    <>
      <HeroArea2 />
      <div className="main-content">
        <FeaturesSwiperSection dark />
        <AboutSection2 dark />
        <ServicesListSection dark />
        <Marquee
          bordered
          dotted
          dark
          gradientDots={false}
          className="section-dot-2 dot-white"
        />
        <ProjectsSwiperSection2 dark />
        <ProcessStaticSection dark />
        <PricingPreviewSection2 />
        <ClientLogosMarquee dark />
        <FAQSection2 dark />
        <BlogSwiperSection2 dark />
        <CTASection2 dark />
      </div>
    </>
  );
}
