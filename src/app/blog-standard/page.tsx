"use client";

import { useState } from "react";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import BlogPostCard from "@/components/blog/BlogPostCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Pagination from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { blogPosts, blogCategories, recentPosts, blogTags } from "@/data/blog";

const BLOG_PAGE_SIZE = 4;

export default function BlogStandardPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const { currentPage, totalPages, pagedItems, goToPage, topRef } = usePagination(
    blogPosts,
    BLOG_PAGE_SIZE
  );

  return (
    <>
      <button
        id="filterShop"
        type="button"
        className="fillter-btn style-fixed d-xl-none"
        onClick={() => setFilterOpen(true)}
      >
        <i className="icon-sidebar"></i>
      </button>

      <PageTitleBanner
        title="Blog Standard"
        breadcrumbLabel="Blog Standard"
        bgImage="/assets/images/page-title/page-title.jpg"
      />

      <section className="section-blog-standard flat-spacing-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-8" ref={topRef}>
              {pagedItems.map((post) => (
                <BlogPostCard post={post} key={post.id} />
              ))}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>

            <div className="col-xl-4">
              <BlogSidebar
                categories={blogCategories}
                recentPosts={recentPosts}
                tags={blogTags}
                isOpen={filterOpen}
                onClose={() => setFilterOpen(false)}
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className={`overlay-filter${filterOpen ? " show" : ""}`}
        onClick={() => setFilterOpen(false)}
      />
    </>
  );
}
