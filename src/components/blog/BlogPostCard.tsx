import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const href = `/blog-details/${post.slug}`;

  return (
    <div className="post-grid hover-img">
      <Link href={href} className="image">
        <Image src={post.image} alt={post.title} width={850} height={500} />
      </Link>
      <div className="post-content">
        <div className="meta-post">
          <a href="#" className="meta-item ff-2 item-color-blue">
            {post.category}
          </a>
          <a href="#" className="meta-item ff-2">
            By <span className="color-title">{post.author}</span>
          </a>
          <a href="#" className="meta-item ff-2">
            {post.date}
          </a>
        </div>
        <Link
          href={href}
          className="text-title-2 fw-6 letter-space--3 name-post"
        >
          {post.title}
        </Link>
        <p className="desc ff-2 color-paragraph">{post.excerpt}</p>
      </div>
    </div>
  );
}
