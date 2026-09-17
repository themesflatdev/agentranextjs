"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "@/data/projects";

const styleTwoProjects = projects.filter((project) => project.variant === "style-2");

// carousel.js actually reads slidesPerView at 4 breakpoints, not 3 (checked
// against assets/js/carousel.js directly): base=data-mobile, 575=data-mobile-sm,
// 768=data-tablet, 1200=data-preview, and — the one earlier Swiper sections
// on this codebase folded into the 1200 tier — 1600=data-laptop. This
// section's data-preview="2.2" and data-laptop="2.85" actually differ, so
// unlike those sections this one needs the real 1600px breakpoint kept
// separate or the wide-desktop slide count would be wrong.
interface ProjectsSwiperSection2Props {
  dark?: boolean;
}

export default function ProjectsSwiperSection2({ dark = false }: ProjectsSwiperSection2Props) {
  return (
    <section className="seciton-projects h-2 flat-spacing-1">
      <div className="container">
        <div className="heading-section heading-h2 d-flex align-items-center justify-content-between rg-15 flex-wrap mb-60">
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Case Studies
            </p>
            <p className="h2 title fw-7 title-animation">Featured Projects</p>
          </div>
          <div className="right title-animation">
            <Link href="/project-1" className="tf-btn style-big border-radius-30">
              <span className="text-btn">View All Projects</span>
              <span className="icon-btn">
                <i className="icon-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Pagination]}
        className="sw-project h-2 tf-swiper"
        wrapperClass={`swiper-wrapper${dark ? " mb-64" : ""}`}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          575: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1200: { slidesPerView: 2.2, spaceBetween: 30 },
          1600: { slidesPerView: 2.85, spaceBetween: 30 },
        }}
        pagination={{ el: ".tf-sw-pagination", clickable: true }}
      >
        {styleTwoProjects.map((project) => (
          <SwiperSlide key={project.slug}>
            <div className="project-item style-2 hover-img">
              <Link href={`/project-details/${project.slug}`} className="image">
                <Image src={project.image} alt={project.title} width={630} height={430} />
              </Link>
              <div className="item-content">
                <Link href={`/project-details/${project.slug}`} className="h4 name-project fw-7">
                  {project.title}
                </Link>
                <div className="meta-post">
                  {project.tags.map((tag) => (
                    <a href="#" className="meta-item ff-2" key={tag}>
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {dark && <div className="sw-dot-pagination tf-sw-pagination"></div>}
      </Swiper>
    </section>
  );
}
