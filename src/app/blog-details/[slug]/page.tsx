import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";
import TagShareBlock from "@/components/blog/TagShareBlock";
import CommentList from "@/components/blog/CommentList";
import CommentForm from "@/components/blog/CommentForm";
import BlogSidebarToggle from "@/components/blog/BlogSidebarToggle";
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

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogDetailBySlug(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.title.replace(/\n/g, " "),
    description: post.content.find((block) => block.type === "paragraph")?.text,
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = getBlogDetailBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
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
