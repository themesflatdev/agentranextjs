"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
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

// Same testimonials.ts data as home/TestimonialsSection.tsx (identical
// content, confirmed directly against service.html), but a distinct layout:
// row/col-lg-8+col-lg-4 grid instead of that section's flex pair, no nav
// buttons, and the swiper's own per-slide modifier classes ("style-no-img-2"
// on the 1st slide, "style-2" on the rest) instead of a dark toggle.
export default function ServiceTestimonialsSection() {
  return (
    <section className="section-testimonials p-service flat-spacing-6">
      <div className="container">
        <div className="heading-section style-center heading-h2 mb-52">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            Clients Testimonials
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-6 title-animation">Trusted by million peoples</p>
        </div>

        <div className="row rg-30">
          <div className="col-lg-8">
            <div className="tes-item">
              <div className="image">
                <Image
                  src={featuredTestimonial.image}
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
          </div>
          <div className="col-lg-4">
            <Swiper
              className="sw-testimonials tf-swiper"
              slidesPerView={1}
              spaceBetween={30}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={`tes-item no-img ${index === 0 ? "style-no-img-2" : "style-2"}`}>
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
      </div>
    </section>
  );
}
