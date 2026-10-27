"use client";

import BlogPostCard from "@/components/blog/BlogPostCard";
import Pagination from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";
import type { BlogPost } from "@/data/blog";

interface BlogPostListProps {
  posts: BlogPost[];
  pageSize: number;
}

// Only the pagination state lives here (useState/scroll-into-view via
// usePagination) — pulled out of the page so blog-standard/page.tsx can stay
// a server component. Keeps the "col-xl-8" wrapper + ref together since the
// ref only makes sense next to the state that drives it.
export default function BlogPostList({ posts, pageSize }: BlogPostListProps) {
  const { currentPage, totalPages, pagedItems, goToPage, topRef } = usePagination(
    posts,
    pageSize
  );

  return (
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
  );
}
