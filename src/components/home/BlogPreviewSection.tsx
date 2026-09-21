"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { blogPosts } from "@/data/blog";

const previewPosts = blogPosts.slice(0, 3);

// The home page's "no-desc" cards use their own dedicated thumbnail crops
// (p-grid-no-desc-1/2/3.jpg, near-square 834x860) — a different asset from
// each post's `image` field (post-grid-*.jpg, 850x500), which is what
// /blog-standard's full cards show instead. Mapped by index onto the same
// sliced blogPosts (title/slug/date/author still reused, per home-index.md's
// note not to duplicate the blog-standard data set — only the image differs).
const PREVIEW_IMAGES = [
  "/assets/images/blog/grid-no-desc-1.jpg",
  "/assets/images/blog/grid-no-desc-2.jpg",
  "/assets/images/blog/grid-no-desc-3.jpg",
];

// Same carousel.js breakpoint mapping as ProjectsSection (data-mobile-sm/
// -tablet/-preview read at the 575/768/1200px breakpoints), just with this
// section's own per-view counts (1 / 1.7 / 2 / 3) and a flat 10px gap at
// every step (data-space/-md/-lg are all "10" on the original markup).
interface BlogPreviewSectionProps {
  dark?: boolean;
}

export default function BlogPreviewSection({ dark = false }: BlogPreviewSectionProps) {
  return (
    <>
      <div className="container">
        <div className="line-section-2 style-dot">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
        </div>
      </div>

      <section
        className={`section-blog h-1 section-line ${
          dark ? "flat-spacing-4 section-style-dark" : "flat-spacing-1"
        }`}
      >
        <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>

        <div className="img-shape">
          <Image
            src={
              dark
                ? "/assets/images/section/shape-se-about-dark.png"
                : "/assets/images/section/shape-s-blog.png"
            }
            alt="Image"
            width={dark ? 610 : 638}
            height={dark ? 740 : 1576}
          />
        </div>
        <div className="container">
          <div className="heading-section style-center mb-56">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Latest Blog &amp; News
              <i className="icon-sparkle"></i>
            </p>
            <p className="h2 title fw-7 title-animation">
              Insights, Trends, and the Future
              <br />
              of AI&mdash;All in One Place
            </p>
          </div>
        </div>
        <div className="container w-1302">
          <Swiper
            modules={[Pagination]}
            className="sw-blog tf-swiper"
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              575: { slidesPerView: 1.7, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1200: { slidesPerView: 3, spaceBetween: 10 },
            }}
            pagination={{ el: ".tf-sw-pagination", clickable: true }}
          >
            {previewPosts.map((post, index) => {
              const href = `/blog-details/${post.slug}`;

              return (
                <SwiperSlide key={post.id}>
                  <div className={`post-grid no-desc hover-img${dark ? " style-dark" : ""}`}>
                    <Link href={href} className="image">
                      <Image
                        src={PREVIEW_IMAGES[index]}
                        alt={post.title}
                        width={417}
                        height={430}
                      />
                    </Link>
                    <div className="post-content">
                      <Link href={href} className="name-post h4 fw-7">
                        {post.title}
                      </Link>
                      <div className="meta-post">
                        <a href="#" className="meta-item ff-2">
                          {dark ? (
                            `By ${post.author}`
                          ) : (
                            <>
                              By <span className="color-title">{post.author}</span>
                            </>
                          )}
                        </a>
                        <a href="#" className="meta-item ff-2">
                          {post.date}
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="sw-dot-pagination tf-sw-pagination d-xl-none mt-20"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
