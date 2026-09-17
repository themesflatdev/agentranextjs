export interface BlogPost {
  id: string;
  slug: string;
  image: string;
  category: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-grid-1",
    slug: "the-role-of-machine-learning-in-business-growth",
    image: "/assets/images/blog/post-grid-1.jpg",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    title: "The Role of Machine Learning in Business Growth",
    excerpt:
      "Machine learning plays a crucial role in modern business growth by enabling organizations to analyze large amounts of data, identify patterns, and make smarter, faster decisions.",
  },
  {
    id: "post-grid-2",
    slug: "generative-ai-unlocking-creativity-and-innovation-in-digital-solutions",
    image: "/assets/images/blog/post-grid-2.jpg",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    title:
      "Generative AI Unlocking Creativity and Innovation in Digital Solutions",
    excerpt:
      "Machine learning plays a crucial role in modern business growth by enabling organizations to analyze large amounts of data, identify patterns, and make smarter, faster decisions.",
  },
  {
    id: "post-grid-3",
    slug: "how-artificial-intelligence-is-changing-digital-marketing-forever",
    image: "/assets/images/blog/post-grid-3.jpg",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    title: "How Artificial Intelligence Is Changing Digital Marketing Forever",
    excerpt:
      "Machine learning plays a crucial role in modern business growth by enabling organizations to analyze large amounts of data, identify patterns, and make smarter, faster decisions.",
  },
  {
    id: "post-grid-4",
    slug: "building-scalable-ai-solutions-for-startups-and-enterprises",
    image: "/assets/images/blog/post-grid-4.jpg",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    title: "Building Scalable AI Solutions for Startups and Enterprises",
    excerpt:
      "Machine learning plays a crucial role in modern business growth by enabling organizations to analyze large amounts of data, identify patterns, and make smarter, faster decisions.",
  },
  {
    id: "post-grid-s2-2",
    slug: "building-smarter-products-with-artificial-intelligence",
    image: "/assets/images/blog/post-grid-s2-2.jpg",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    title: "Building Smarter Products with Artificial Intelligence",
    excerpt:
      "Machine learning is transforming the way businesses operate by enabling.",
  },
  {
    id: "post-grid-s2-3",
    slug: "generative-ai-and-its-impact-on-creativity-and-design",
    image: "/assets/images/blog/post-grid-s2-3.jpg",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    title: "Generative AI and Its Impact on Creativity and Design",
    excerpt:
      "Machine learning is transforming the way businesses operate by enabling.",
  },
];

export const blogCategories: string[] = [
  "AI Strategy & Consulting",
  "Machine Learning Solutions",
  "Natural Language Processing",
  "Analytics & Data Insights",
  "Voice AI & Virtual Assistants",
  "Business Intelligence Solutions",
  "Data Science & Analytics",
];

export interface RecentPost {
  image: string;
  date: string;
  title: string;
  href: string;
}

export const recentPosts: RecentPost[] = [
  {
    image: "/assets/images/blog/post-list-small-1.jpg",
    date: "20 January 2026",
    title: "Role of Machine Learning in Business Growth",
    href: "/blog-details/the-role-of-machine-learning-in-business-growth",
  },
  {
    image: "/assets/images/blog/post-list-small-2.jpg",
    date: "20 January 2026",
    title: "Top AI Trends Shaping the Future of Technology",
    href: "/blog-details/the-role-of-machine-learning-in-business-growth",
  },
  {
    image: "/assets/images/blog/post-list-small-3.jpg",
    date: "20 January 2026",
    title: "Building to Solutions for Startups Enterprises",
    href: "/blog-details/the-role-of-machine-learning-in-business-growth",
  },
];

export const blogTags: string[] = [
  "Ai-agency",
  "Data-driven",
  "Machine",
  "Technology",
  "AI Analytics",
  "Agency",
  "Digital Marketing",
  "Innovation",
];

export type BlogContentBlock =
  | { type: "paragraph"; heading?: string; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "list"; items: string[] }
  | {
      type: "quote";
      text: string;
      authorName: string;
      authorRole: string;
      avatar: string;
    };

export interface BlogDetail {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  heroImage: string;
  content: BlogContentBlock[];
  tags: string[];
}

export const blogDetails: BlogDetail[] = [
  {
    slug: "the-role-of-machine-learning-in-business-growth",
    title: "The Role of Machine Learning\nin Business Growth",
    category: "Ai-automations",
    author: "Admin",
    date: "18 February 2026",
    heroImage: "/assets/images/page-title/page-title.jpg",
    content: [
      {
        type: "paragraph",
        heading:
          "Generative AI Unlocking Creativity and Innovation in Digital Solutions",
        text: "AI agency provides end-to-end intelligent solutions designed to help businesses innovate and grow in the digital era. From AI strategy and custom development to automation, machine learning, and advanced analytics, we deliver scalable and future-ready services tailored your needs.",
      },
      {
        type: "image",
        src: "/assets/images/blog/img-blog-details-1.jpg",
        alt: "Generative AI Unlocking Creativity and Innovation in Digital Solutions",
      },
      {
        type: "paragraph",
        text: "These real-world examples highlight the power of data-driven decision-making, creative storytelling, and targeted audience engagement, showing how measurable results—like increased traffic, leads, and conversions —are achieved. Learning from proven campaigns allows marketers to replicate success, avoid common pitfalls, and refine strategies for maximum impact.",
      },
      {
        type: "paragraph",
        heading: "AI Automation & Workflow Optimization",
        text: "We offer a full range of AI services designed to transform how businesses operate and grow in a competitive digital landscape. Our expertise covers everything from intelligent automation and machine learning generative AI and data-driven solutions we help organizations streamline processes, unlock.",
      },
      {
        type: "list",
        items: [
          "Advanced Machine Learning Models",
          "Intelligent Automation Systems",
          "Continuous Support & Maintenance",
          "Future-Ready Technology Stack",
          "User-Centered Design Approach",
        ],
      },
      {
        type: "quote",
        text: "“By combining cutting-edge technology with creative problem-solving, we empower organizations to improve efficiency, enhance customer experiences, and achieve sustainable business success..”",
        authorName: "William Anderson",
        authorRole: "CTO at fintech",
        avatar: "/assets/images/avatar/avatar-quote.jpg",
      },
      {
        type: "paragraph",
        heading: "Advanced AI Support & Systems",
        text: "AI-powered customer support helps businesses deliver faster, smarter, and more personalized assistance through intelligent automation and real-time responses. By using advanced AI technologies such as chatbots and virtual assistants, companies can improve customer satisfaction, reduce response times, and provide 24/7 support while optimizing operational efficiency and lowering support costs.",
      },
      {
        type: "image",
        src: "/assets/images/blog/img-blog-details-2.jpg",
        alt: "Advanced AI Support & Systems",
      },
      {
        type: "paragraph",
        heading: "Marketing Which Delivers Better ROI?",
        text: "Strengthening customer loyalty is essential for long-term business success, and there are proven strategies that make a real difference. By consistently delivering exceptional experiences, engaging customers through personalized communication, and offering rewards or incentives.",
      },
    ],
    tags: ["Ai-agency", "Data-driven", "Machine"],
  },
];

// Only one post has a fully authored body (blogDetails[0], from the same
// single blog-details.html demo the whole template ships with). Every card
// on /blog-standard still needs to land on a page reflecting its OWN title
// rather than always showing that one article's — so for slugs without
// their own BlogDetail entry, this reuses that article's body/tags/heroImage
// as shared placeholder content (heroImage is the same static page-title.jpg
// banner in the original HTML regardless of post) while overriding just
// title/category/author/date from the matching BlogPost.
export function getBlogDetailBySlug(slug: string): BlogDetail | undefined {
  const ownDetail = blogDetails.find((detail) => detail.slug === slug);
  if (ownDetail) return ownDetail;

  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return undefined;

  const [template] = blogDetails;
  return {
    ...template,
    slug: post.slug,
    title: post.title,
    category: post.category,
    author: post.author,
    date: post.date,
  };
}

export interface Comment {
  id: string;
  avatar: string;
  name: string;
  date: string;
  text: string;
  isReply?: boolean;
}

export const blogComments: Comment[] = [
  {
    id: "comment-1",
    avatar: "/assets/images/avatar/avatar-comment-1.jpg",
    name: "William Thompson",
    date: "January 10, 2026",
    text: "I absolutely love this hoodie! The material is super soft inside and keeps me warm even on freezing mornings not too loose, not too tight.",
  },
  {
    id: "comment-2",
    avatar: "/assets/images/avatar/avatar-comment-2.jpg",
    name: "James Carter",
    date: "January 10, 2026",
    text: "I absolutely love this hoodie! The material is super soft inside and keeps me warm even on freezing mornings.",
    isReply: true,
  },
];
