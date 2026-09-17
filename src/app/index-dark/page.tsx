import HeroArea from "@/components/home/HeroArea";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FunFactSection from "@/components/home/FunFactSection";
import ProcessSection from "@/components/home/ProcessSection";
import PricingPreviewSection from "@/components/home/PricingPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";

export default function IndexDarkPage() {
  return (
    <>
      <HeroArea dark />
      <div className="main-content">
        <FeaturesSection dark />
        <AboutSection dark />
        <MarqueeSection dark />
        <ServicesSection dark />
        <ProjectsSection dark />
        <FunFactSection dark />
        <ProcessSection dark />
        <PricingPreviewSection dark />
        <TestimonialsSection dark />
        <ContactCTASection dark />
        <BlogPreviewSection dark />
      </div>
    </>
  );
}
