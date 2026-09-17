"use client";

import Image from "next/image";
import Link from "next/link";
import DownloadWidget from "@/components/common/DownloadWidget";
import type { RecentPost } from "@/data/blog";

interface BlogSidebarProps {
  categories: string[];
  recentPosts: RecentPost[];
  tags: string[];
  isOpen: boolean;
  onClose: () => void;
}

// main.js's handleSidebarFilter only toggled "show" on this element (and the
// overlay) below 1200px; `.sidebar-filter` itself is only positioned/fixed
// under that same breakpoint (_blog.scss), so the "show" class is a no-op at
// desktop widths without needing a JS width check here.
export default function BlogSidebar({
  categories,
  recentPosts,
  tags,
  isOpen,
  onClose,
}: BlogSidebarProps) {
  return (
    <div className={`tf-sidebar sidebar-filter right${isOpen ? " show" : ""}`}>
      <div className="header-fillter d-flex justify-content-between align-items-center d-xl-none mb-30">
        <p className="title h3 fw-6">Fillter</p>
        <span
          className="icon-close close-filter"
          role="button"
          tabIndex={0}
          onClick={onClose}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") onClose();
          }}
        />
      </div>

      <div className="mb-50">
        <form
          className="form-search-siderbar"
          onSubmit={(event) => event.preventDefault()}
        >
          <fieldset>
            <input type="text" placeholder="Search post" />
            <a href="#" className="tf-btn-search">
              <i className="icon-search"></i>
            </a>
          </fieldset>
        </form>
      </div>

      <div className="sidebar-content sidebar-categories mb-50">
        <p className="h3 title letter-space--3 fw-6 color-title">Categories</p>
        <ul className="list-categories-item">
          {categories.map((category) => (
            <li key={category}>
              <a href="#" className="item active ff-2 fw-5 letter-space--2">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-content sidebar-recent-post mb-50">
        <p className="h3 title letter-space--3 fw-6 color-title">
          Recent Post
        </p>
        <div className="list-blog">
          {recentPosts.map((post) => (
            <Link
              href={post.href}
              className="post-list-small hover-img"
              key={post.title}
            >
              <span className="image">
                <Image src={post.image} alt={post.title} width={80} height={80} />
              </span>
              <span className="post-content">
                <span className="post-meta">
                  <span className="day ff-2 letter-space--2 color-paragraph">
                    {post.date}
                  </span>
                </span>
                <span className="name-post text-body-2 fw-6 letter-space--3">
                  {post.title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-content sidebar-tags mb-50">
        <p className="h3 title letter-space--3 fw-6 color-title">Tags</p>
        <ul className="list-tags d-flex flex-wrap g-10">
          {tags.map((tag) => (
            <li key={tag}>
              <a href="#" className="tags-item">
                <span>{tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <DownloadWidget titleLines={["Unlock Insights", "Into AI-Powered Solutions"]} />
    </div>
  );
}
