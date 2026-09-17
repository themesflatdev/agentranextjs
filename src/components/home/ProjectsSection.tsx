"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "@/data/projects";

// projects.ts also holds ai-startup's "style-2" case studies (flagged with
// `variant`) AND, since profile-1.md, project-1.html's 8-card grid (plain,
// no `variant`) — so "no variant" no longer uniquely identifies this
// section's 5 items. Pulled by slug instead, in original order, so this
// stays unaffected by either addition.
const HOME_PROJECT_SLUGS = [
  "ai-content-generator-platform",
  "predictive-sales-analytics-dashboard",
  "project-3",
  "project-4",
  "project-5",
];

const homeProjects = HOME_PROJECT_SLUGS.map(
  (slug) => projects.find((project) => project.slug === slug)!
);

// carousel.js drives every ".tf-swiper" from its data-* attributes: below
// 768px it's data-mobile(-sm) per-view (1 here), from 768px it's data-tablet
// (2), and from 1200px it's data-preview/data-laptop (also 2 here) — so this
// only really has two effective states, at the 768px/1200px breakpoints
// below. Spacing follows the same data-space/-md/-lg attributes (15px until
// 1200px, 30px after). Pagination targets `.tf-sw-pagination` with Swiper's
// own bullet pagination (see .sw-dot-pagination in _slider.scss) — it's not
// a hand-drawn bullet row, so the real Pagination module is wired up here
// via a CSS-selector `el` rather than a ref (Swiper resolves that selector
// against its own container once mounted, avoiding ref-timing issues).
interface ProjectsSectionProps {
  dark?: boolean;
}

export default function ProjectsSection({ dark = false }: ProjectsSectionProps) {
  return (
    <section
      className={`section-project h-1 section-line flat-spacing-1${
        dark ? " section-style-dark" : ""
      }`}
    >
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>
      {dark && (
        <div className="image-shape image-shape-top">
          <Image
            src="/assets/images/icon/shape-s-services-dark-h1.png"
            alt="Image"
            width={2580}
            height={600}
          />
        </div>
      )}
      <div className="container">
        <div className="heading-section d-flex align-items-end justify-content-between rg-15 flex-wrap">
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Case Studies
            </p>
            <p className="h2 title fw-7 title-animation">Featured Projects</p>
          </div>
          <div className="right title-animation">
            <Link
              href="/project-1"
              className={`tf-btn style-big border-radius-30 ${
                dark ? "style-gradient-2" : "style-color-black"
              }`}
            >
              <span className="text-btn">View All Projects</span>
              <span className="icon-btn">
                <i className="icon-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container w-1302">
        <div className="section-project-inner">
          <Swiper
            modules={[Pagination]}
            className="sw-project tf-swiper"
            slidesPerView={1}
            spaceBetween={15}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 15 },
              1200: { slidesPerView: 2, spaceBetween: 30 },
            }}
            pagination={{ el: ".tf-sw-pagination", clickable: true }}
          >
            {homeProjects.map((project) => (
              <SwiperSlide key={project.slug}>
                <div className={`project-item hover-img${dark ? " style-dark" : ""}`}>
                  <div className="top-item">
                    <Link href={`/project-details/${project.slug}`} className="image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={350}
                      />
                    </Link>
                    <div className="meta-project">
                      {project.tags.map((tag) => (
                        <a href="#" className="meta-item text-caption ff-2 fw-5" key={tag}>
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="content-item">
                    <Link
                      href={`/project-details/${project.slug}`}
                      className="h3 name-project fw-7"
                    >
                      {project.title}
                    </Link>
                    <Link href={`/project-details/${project.slug}`} className="tf-btn-arrow">
                      <i className="icon-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="sw-dot-pagination tf-sw-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
