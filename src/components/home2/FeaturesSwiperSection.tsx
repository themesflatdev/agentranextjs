"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PredictiveAnalyticsIcon from "@/components/icons/PredictiveAnalyticsIcon";
import AiAutomationServicesIcon from "@/components/icons/AiAutomationServicesIcon";
import AiStrategyConsultingIcon from "@/components/icons/AiStrategyConsultingIcon";

interface FeatureCard {
  image: string;
  Icon: ComponentType;
  title: string;
  desc: string;
  className?: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    image: "/assets/images/widget/bg-featurs-card-2-1.jpg",
    Icon: PredictiveAnalyticsIcon,
    title: "Predictive Analytics",
    desc: "Leverage the power of AI and data driven intelligence to predict future trends, customer behavior.",
  },
  {
    image: "/assets/images/widget/bg-featurs-card-2-2.jpg",
    Icon: AiAutomationServicesIcon,
    title: "AI Automation Services",
    desc: "Automate repetitive tasks and workflows to increase productivity and reduce operational costs.",
    className: "style-content-bottom",
  },
  {
    image: "/assets/images/widget/bg-featurs-card-2-3.jpg",
    Icon: AiStrategyConsultingIcon,
    title: "AI Strategy & Consulting",
    desc: "Help startups & businesses identify the best AI solutions to achieve they growth and innovation.",
  },
];

// Same carousel.js breakpoint mapping as ProjectsSection/BlogPreviewSection
// (data-mobile/-mobile-sm/-tablet/-preview read at the 575/768/1200px
// breakpoints), with this section's own per-view counts (1 / 2 / 3 / 3) and
// spacing (15px until 1200px, then 30px).
interface FeaturesSwiperSectionProps {
  dark?: boolean;
}

export default function FeaturesSwiperSection({ dark = false }: FeaturesSwiperSectionProps) {
  return (
    <section className="section-features h-2 flat-spacing-1">
      <div className="img-shape">
        <Image
          src={`/assets/images/section/shape-s-fe-h2${dark ? "-dark" : ""}.png`}
          alt="Image"
          width={1150}
          height={1150}
        />
      </div>
      <div className="container">
        <div className="heading-section style-center heading-h2 mb-59">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            Powerful AI Capabilities
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-6 title-animation">
            Bringing Creative Ideas to Life
            <br />
            Through <span className="text-gradient">Digital Innovation</span>
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          className="sw-features tf-swiper"
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ el: ".tf-sw-pagination", clickable: true }}
        >
          {FEATURE_CARDS.map((card) => (
            <SwiperSlide key={card.title}>
              <div className={`features-card-3${card.className ? ` ${card.className}` : ""}`}>
                <div className="img-bg">
                  <Image src={card.image} alt="Image" width={410} height={474} />
                </div>
                <div className="card-content">
                  <div className="icon">
                    <card.Icon />
                  </div>
                  <a href="#" className="title h3 fw-6">
                    {card.title}
                  </a>
                  <p className="desc text-body-2 ff-2">{card.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dot-pagination tf-sw-pagination mt-20 d-md-none"></div>
        </Swiper>
      </div>
    </section>
  );
}
