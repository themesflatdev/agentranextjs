"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

// team.html's swiper repeats James Anderson's testimonial (featuredTestimonial)
// and Emily Johnson's (testimonials[0], all 4 entries of that array are the
// same Emily content) alternately — James/Emily/James/Emily — a demo-content
// duplication bug in the source, kept as-is per team.md. Reuses
// data/testimonials.ts directly rather than a new data file.
const SLIDES = [featuredTestimonial, testimonials[0], featuredTestimonial, testimonials[0]];

export default function TeamTestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-testimonials p-team tf-btn-swiper-main flat-spacing-1">
      <div className="container">
        <div className="row rg-60">
          <div className="col-lg-6">
            <div className="left-content d-flex flex-column justify-content-between h-100">
              <div className="img-bg">
                <Image
                  src="/assets/images/section/bg-hs-tes-p-team.jpg"
                  alt="Image"
                  fill
                  sizes="(max-width: 991px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="heading-section style-white mb-30">
                <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10">
                  <i className="icon-sparkle"></i>
                  Clients Testimonials
                </p>
                <p className="h2 title fw-6">
                  What&rsquo;s our clients
                  <br />
                  say about us
                </p>
              </div>
              <a href="#" className="tf-btn style-big border-radius-30">
                <span className="text-btn">View All Testimonials</span>
                <span className="icon-btn">
                  <i className="icon-chevron-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <Swiper
              modules={[Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="sw-testimonials-3 tf-swiper"
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ el: ".tf-sw-pagination", clickable: true }}
            >
              {SLIDES.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="tes-item no-img style-no-img-3">
                    <div className="item-content">
                      <Stars label={testimonial.ratingLabel} />
                      <p className="title h4 fw-6">{testimonial.title}</p>
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
              <div className="list-btn d-flex g-10">
                <button
                  type="button"
                  className="nav-btn style-white nav-prev-swiper"
                  aria-label="Previous testimonial"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <i className="icon-arrow-left-2 fw-7"></i>
                </button>
                <button
                  type="button"
                  className="nav-btn style-white nav-next-swiper"
                  aria-label="Next testimonial"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <i className="icon-arrow-right-2"></i>
                </button>
              </div>
              <div className="sw-dot-pagination tf-sw-pagination d-lg-none mt-20"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
