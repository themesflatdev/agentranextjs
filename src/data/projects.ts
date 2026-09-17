export interface Project {
  slug: string;
  title: string;
  image: string;
  tags: string[];
  /** "style-2" projects are the ai-startup page's case-studies Swiper
   *  (project-s2-item-*.jpg, "Ai Data Solutions"/"Machine Learning" tags) —
   *  a distinct set from the home page's default project grid, flagged so
   *  each page's section can filter to its own set from this one array. */
  variant?: "style-2";
}

export const projects: Project[] = [
  {
    slug: "ai-content-generator-platform",
    title: "AI Content Generator Platform",
    image: "/assets/images/project/project-1.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "predictive-sales-analytics-dashboard",
    title: "Predictive Sales Analytics Dashboard",
    image: "/assets/images/project/project-2.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "project-3",
    title: "AI Content Generator Platform",
    image: "/assets/images/project/project-1.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "project-4",
    title: "AI Content Generator Platform",
    image: "/assets/images/project/project-2.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "project-5",
    title: "AI Content Generator Platform",
    image: "/assets/images/project/project-1.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "project-6",
    title: "Building Intelligent Digital Products Drive Real-World",
    image: "/assets/images/project/project-s2-item-1.jpg",
    tags: ["Ai Data Solutions", "Machine Learning"],
    variant: "style-2",
  },
  {
    slug: "project-7",
    title: "Building Intelligent Digital Products Drive Real-World",
    image: "/assets/images/project/project-s2-item-2.jpg",
    tags: ["Ai Data Solutions", "Machine Learning"],
    variant: "style-2",
  },
  {
    slug: "project-8",
    title: "AI-Powered eCommerce Recommendation Engine",
    image: "/assets/images/project/project-s2-item-3.jpg",
    tags: ["Ai Data Solutions", "Machine Learning"],
    variant: "style-2",
  },
  {
    slug: "project-9",
    title: "Building Intelligent Digital Products Drive Real-World",
    image: "/assets/images/project/project-s2-item-1.jpg",
    tags: ["Ai Data Solutions", "Machine Learning"],
    variant: "style-2",
  },
  // project-1.html's 8-card grid. Its 1st/2nd cards reuse the same titles as
  // the two entries above ("AI Content Generator Platform" / "Predictive
  // Sales Analytics Dashboard") but with DIFFERENT actual photos in that
  // source file (project-3.jpg / project-4.jpg vs. project-1.jpg/
  // project-2.jpg, which are correct for index.html's own swiper) — so
  // these get their own dedicated entries rather than reusing the ones
  // above, keeping each page's real photo accurate.
  {
    slug: "ai-content-generator-platform-2",
    title: "AI Content Generator Platform",
    image: "/assets/images/project/project-3.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "predictive-sales-analytics-dashboard-2",
    title: "Predictive Sales Analytics Dashboard",
    image: "/assets/images/project/project-4.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "ai-powered-content-generation",
    title: "AI-Powered Content Generation",
    image: "/assets/images/project/project-5.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "ai-chatbot-virtual-assistant-platform",
    title: "AI Chatbot & Virtual Assistant Platform",
    image: "/assets/images/project/project-6.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "smart-customer-support-automation",
    title: "Smart Customer Support Automation",
    image: "/assets/images/project/project-7.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "predictive-analytics-dashboard",
    title: "Predictive Analytics Dashboard",
    image: "/assets/images/project/project-8.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  {
    slug: "personalized-ai-learning-platform",
    title: "Personalized AI Learning Platform",
    image: "/assets/images/project/project-9.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
  // 3rd occurrence of this title in the array (Home's entry, then this
  // page's own 2nd card above, now this one) — a demo content duplicate
  // present in project-1.html itself (confirmed directly against the
  // source), kept as its own entry per profile-1.md rather than merged.
  {
    slug: "predictive-sales-analytics-dashboard-3",
    title: "Predictive Sales Analytics Dashboard",
    image: "/assets/images/project/project-10.jpg",
    tags: ["UX/UI Design", "Ai Design"],
  },
];
