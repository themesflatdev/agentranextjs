import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI Agency Next.js Template",
  description:
    "Agentra helps businesses adopt AI automation, machine learning, and data-driven solutions with scalable, future-ready digital services.",
};

export default function Home() {
  return (
    <>
      <HeroArea />
      <div className="main-content">
        <FeaturesSection />
        <AboutSection />
        <MarqueeSection />
        <ServicesSection />
        <ProjectsSection />
        <FunFactSection />
        <ProcessSection />
        <PricingPreviewSection />
        <TestimonialsSection />
        <ContactCTASection />
        <BlogPreviewSection />
      </div>
    </>
  );
}
