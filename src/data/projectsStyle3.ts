export interface ProjectStyle3 {
  slug: string;
  image: string;
  title: string;
  tags: string[];
}

// project-2.html's own image set (project-s3-item-1..6.jpg) — distinct from
// projects.ts (project-1/-details' project-1..10 + project-s2-item photos),
// so this is a separate file rather than more entries in that array.
// All 6 cards share the exact same title and tags in the source (a demo
// content quirk confirmed directly against project-2.html, same pattern
// already kept as-is for projects.ts's "style-2" entries) — not 6 unique
// titles.
const SHARED_TITLE = "Building Intelligent Digital Products Drive Real-World";
const SHARED_TAGS = ["Ai Data Solutions", "Machine Learning"];

// Slugs are namespaced "project-style3-N" (not title-derived, since all 6
// share one title) and kept distinct from every slug in projects.ts so
// project-details/[slug]'s generateStaticParams — which merges both
// arrays — never sees a collision between the two data sources.
export const projectsStyle3: ProjectStyle3[] = [
  { slug: "project-style3-1", image: "/assets/images/project/project-s3-item-1.jpg", title: SHARED_TITLE, tags: SHARED_TAGS },
  { slug: "project-style3-2", image: "/assets/images/project/project-s3-item-2.jpg", title: SHARED_TITLE, tags: SHARED_TAGS },
  { slug: "project-style3-3", image: "/assets/images/project/project-s3-item-3.jpg", title: SHARED_TITLE, tags: SHARED_TAGS },
  { slug: "project-style3-4", image: "/assets/images/project/project-s3-item-4.jpg", title: SHARED_TITLE, tags: SHARED_TAGS },
  { slug: "project-style3-5", image: "/assets/images/project/project-s3-item-5.jpg", title: SHARED_TITLE, tags: SHARED_TAGS },
  { slug: "project-style3-6", image: "/assets/images/project/project-s3-item-6.jpg", title: SHARED_TITLE, tags: SHARED_TAGS },
  // Cloned for pagination demo — project-2.html's own 6 cards above aren't
  // enough to show a meaningful pagination (pageSize 6 keeps that page's
  // existing "two 3-item columns" layout as page 1). Unlike the 6 above,
  // these get their OWN distinct title (and a shuffled image cycle) so
  // page 2 doesn't read as a literal repeat of page 1 — swap in real
  // projects later.
  { slug: "project-style3-7", image: "/assets/images/project/project-s3-item-4.jpg", title: "Streamlining Enterprise Workflows with AI", tags: SHARED_TAGS },
  { slug: "project-style3-8", image: "/assets/images/project/project-s3-item-1.jpg", title: "Personalized Marketing at Scale", tags: SHARED_TAGS },
  { slug: "project-style3-9", image: "/assets/images/project/project-s3-item-5.jpg", title: "AI-Powered Fraud Prevention for Fintech", tags: SHARED_TAGS },
  { slug: "project-style3-10", image: "/assets/images/project/project-s3-item-2.jpg", title: "Smart Inventory Forecasting Engine", tags: SHARED_TAGS },
  { slug: "project-style3-11", image: "/assets/images/project/project-s3-item-6.jpg", title: "Natural Language Search for E-Commerce", tags: SHARED_TAGS },
  { slug: "project-style3-12", image: "/assets/images/project/project-s3-item-3.jpg", title: "Automated Quality Control with Computer Vision", tags: SHARED_TAGS },
];
