"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { blogPosts } from "@/data/blog";

// The 3 slides shown here, each with the image crop used only by this
// "post-grid style-2" layout (image on the right) — post-grid-s2-1.jpg is a
// different crop of the same first post shown elsewhere with post-grid-1.jpg
// (same pattern BlogPreviewSection uses: override the image per-slide
// instead of touching the shared BlogPost.image field).
const SLIDES = [
  {
    slug: "the-role-of-machine-learning-in-business-growth",
    image: "/assets/images/blog/post-grid-s2-1.jpg",
  },
  {
    slug: "building-smarter-products-with-artificial-intelligence",
    image: "/assets/images/blog/post-grid-s2-2.jpg",
  },
  {
    slug: "generative-ai-and-its-impact-on-creativity-and-design",
    image: "/assets/images/blog/post-grid-s2-3.jpg",
  },
];

// All 3 cards share this exact short desc line in the source markup
// regardless of the post's own (longer, different) excerpt field.
const CARD_DESC = "Machine learning is transforming the way businesses operate by enabling.";

interface BlogSwiperSection2Props {
  dark?: boolean;
}

export default function BlogSwiperSection2({ dark = false }: BlogSwiperSection2Props) {
  return (
    <section className="section-blog h-2 flat-spacing-1">
      <div className="container">
        <div className="heading-section heading-h2 style-center mb-70">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            Latest Blog & News
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-6 title-animation">
            Insights, Trends, and the Future
            <br />
            of AI—All in One Place
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          className="sw-blog-2 tf-swiper"
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            575: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ el: ".tf-sw-pagination", clickable: true }}
        >
          {SLIDES.map((slide) => {
            const post = blogPosts.find((item) => item.slug === slide.slug);
            if (!post) return null;
            const href = `/blog-details/${post.slug}`;

            return (
              <SwiperSlide key={post.slug}>
                <div className={`post-grid style-2 hover-img${dark ? " style-dark" : ""}`}>
                  <div className="post-content">
                    <div className="meta-post">
                      <a
                        href="#"
                        className={`meta-item ${dark ? "item-color-white" : "item-color-title"} ff-2`}
                      >
                        {dark ? (
                          `By ${post.author}`
                        ) : (
                          <>
                            By <span className="color-title">{post.author}</span>
                          </>
                        )}
                      </a>
                      <a
                        href="#"
                        className={`meta-item ${dark ? "item-color-white" : "item-color-title"} ff-2`}
                      >
                        {post.date}
                      </a>
                    </div>
                    <Link href={href} className="name-post h4 fw-6">
                      {post.title}
                    </Link>
                    <p className="desc ff-2">{CARD_DESC}</p>
                  </div>
                  <Link href={href} className="image">
                    <Image src={slide.image} alt={post.title} width={417} height={430} />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="sw-dot-pagination tf-sw-pagination d-xl-none mt-20"></div>
        </Swiper>
      </div>
    </section>
  );
}
