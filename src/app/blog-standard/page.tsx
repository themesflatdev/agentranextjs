import type { Metadata } from "next";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import BlogPostList from "@/components/blog/BlogPostList";
import BlogSidebarToggle from "@/components/blog/BlogSidebarToggle";
import { blogPosts, blogCategories, recentPosts, blogTags } from "@/data/blog";

const BLOG_PAGE_SIZE = 4;

export const metadata: Metadata = {
  title: "Blog Standard",
  description:
    "Explore Agentra's blog for insights on AI automation, machine learning, and digital transformation strategies for modern businesses.",
};

export default function BlogStandardPage() {
  return (
    <>
      <PageTitleBanner
        title="Blog Standard"
        breadcrumbLabel="Blog Standard"
        bgImage="/assets/images/page-title/page-title.jpg"
      />

      <section className="section-blog-standard flat-spacing-1">
        <div className="container">
          <div className="row">
            <BlogPostList posts={blogPosts} pageSize={BLOG_PAGE_SIZE} />

            <div className="col-xl-4">
              <BlogSidebarToggle
                categories={blogCategories}
                recentPosts={recentPosts}
                tags={blogTags}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
