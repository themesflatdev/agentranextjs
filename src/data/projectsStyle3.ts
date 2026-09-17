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
];
