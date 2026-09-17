"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { featuredTestimonial, testimonials } from "@/data/testimonials";

function Stars({ label }: { label: string }) {
  return (
    <div className="rating">
      <i className="icon-star"></i>
      <i className="icon-star"></i>
      <i className="icon-star"></i>
      <i className="icon-star"></i>
      <i className="icon-star star-opacity"></i>
      <span className="point ff-2 fw-6 letter-space--2">{label}</span>
    </div>
  );
}

// carousel.js wires "nav-prev-swiper"/"nav-next-swiper" as Swiper's own
// navigation.nextEl/prevEl via selector lookup; here they instead drive the
// Swiper instance directly through a ref (onSwiper), which is simpler than
// pulling in the Navigation module for two buttons.
interface TestimonialsSectionProps {
  dark?: boolean;
}

export default function TestimonialsSection({ dark = false }: TestimonialsSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-testimonials h-1 section-line tf-btn-swiper-main flat-spacing-1">
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>
      <div className="container w-1222">
        <div className="heading-section d-flex justify-content-between align-items-end flex-wrap g-10 mb-53">
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Clients Testimonials
            </p>
            <p className="h2 title fw-7 title-animation">
              Trusted by million peoples
            </p>
          </div>
          <div className="right list-btn d-flex g-10">
            <button
              type="button"
              className={`nav-btn${dark ? " style-dark" : ""} nav-prev-swiper`}
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <i className="icon-arrow-left-2 fw-7"></i>
            </button>
            <button
              type="button"
              className={`nav-btn${dark ? " style-dark" : ""} nav-next-swiper`}
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i className="icon-arrow-right-2"></i>
            </button>
          </div>
        </div>

        <div className="section-testimonials-inner d-flex g-10">
          <div className={`tes-item${dark ? " style-dark" : ""}`}>
            <div className="image">
              <Image
                src={
                  dark
                    ? "/assets/images/testimonials/img-tes-item-2.jpg"
                    : featuredTestimonial.image
                }
                alt={featuredTestimonial.name}
                width={300}
                height={450}
              />
            </div>
            <div className="item-content">
              <Stars label={featuredTestimonial.ratingLabel} />
              <p className="title h4 fw-6">{featuredTestimonial.title}</p>
              <div className="line"></div>
              <p className="text-tes h4 fw-6">{featuredTestimonial.text}</p>
              <div className="user-tes">
                <a href="#" className="name text-title-1 letter-space--3 fw-6">
                  {featuredTestimonial.name}
                </a>
                <a href="#" className="position text-body-2 ff-2">
                  {featuredTestimonial.position}
                </a>
              </div>
            </div>
          </div>

          <Swiper
            className="sw-testimonials tf-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={30}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`tes-item no-img${dark ? " style-dark" : ""}`}>
                  <div className="item-content">
                    <Stars label={testimonial.ratingLabel} />
                    <p className="title h4 fw-6">{testimonial.title}</p>
                    <div className="line"></div>
                    <p className="text-tes h4 fw-6">{testimonial.text}</p>
                    <div className="user-tes">
                      <a href="#" className="name text-title-1 letter-space--3 fw-6">
                        {testimonial.name}
                      </a>
                      <a href="#" className="position text-body-2 ff-2">
                        {testimonial.position}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
