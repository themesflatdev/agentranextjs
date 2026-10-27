"use client";

import { useState } from "react";
import BlogSidebar from "@/components/blog/BlogSidebar";
import type { RecentPost } from "@/data/blog";

interface BlogSidebarToggleProps {
  categories: string[];
  recentPosts: RecentPost[];
  tags: string[];
}

// Pulled out of the page so the page itself can stay a server component —
// the mobile off-canvas sidebar (button + panel + overlay) is the only part
// of blog-standard/blog-details that actually needs client state.
export default function BlogSidebarToggle({
  categories,
  recentPosts,
  tags,
}: BlogSidebarToggleProps) {
  const [filterOpen, setFilterOpen] = useState(false);

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

      <BlogSidebar
        categories={categories}
        recentPosts={recentPosts}
        tags={tags}
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
      />

      <div
        className={`overlay-filter${filterOpen ? " show" : ""}`}
        onClick={() => setFilterOpen(false)}
      />
    </>
  );
}
