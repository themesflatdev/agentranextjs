"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";
import TagShareBlock from "@/components/blog/TagShareBlock";
import CommentList from "@/components/blog/CommentList";
import CommentForm from "@/components/blog/CommentForm";
import BlogSidebar from "@/components/blog/BlogSidebar";
import {
  getBlogDetailBySlug,
  blogComments,
  blogCategories,
  recentPosts,
  blogTags,
} from "@/data/blog";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = use(params);
  const [filterOpen, setFilterOpen] = useState(false);
  const post = getBlogDetailBySlug(slug);

  if (!post) {
    notFound();
  }

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
        title={post.title}
        breadcrumbLabel="Blog Details"
        bgImage={post.heroImage}
        align="center"
        meta={{
          category: post.category,
          author: post.author,
          date: post.date,
        }}
      />

      <section className="section-blog-details flat-spacing-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <BlogContentRenderer content={post.content} />
              <TagShareBlock tags={post.tags} />
              <CommentList comments={blogComments} />
              <CommentForm />
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
