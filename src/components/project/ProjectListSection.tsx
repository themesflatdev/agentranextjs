"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import Pagination from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";

// project-1.html's 8-card grid, in source order — pulled by slug (not
// slice/filter) since projects.ts also holds home's swiper duplicates and
// ai-startup's "style-2" case studies interleaved in the same array. The
// 8 "-clone" slugs are cloned data added only for pagination (see
// projects.ts) — deliberately NOT in the same relative order as page 1's
// 8 above, so page 2 doesn't read as a positional repeat of page 1.
const PROJECT_1_SLUGS = [
  "ai-content-generator-platform-2",
  "predictive-sales-analytics-dashboard-2",
  "ai-powered-content-generation",
  "ai-chatbot-virtual-assistant-platform",
  "smart-customer-support-automation",
  "predictive-analytics-dashboard",
  "personalized-ai-learning-platform",
  "predictive-sales-analytics-dashboard-3",
  "predictive-analytics-dashboard-clone",
  "ai-content-generator-platform-2-clone",
  "personalized-ai-learning-platform-clone",
  "ai-chatbot-virtual-assistant-platform-clone",
  "predictive-sales-analytics-dashboard-3-clone",
  "predictive-sales-analytics-dashboard-2-clone",
  "smart-customer-support-automation-clone",
  "ai-powered-content-generation-clone",
];

const project1Items = PROJECT_1_SLUGS.map(
  (slug) => projects.find((project) => project.slug === slug)!
);

// pageSize 8 keeps project-1.html's original "2 cols x 4 rows" grid intact
// as page 1 — pagination only kicks in once there's a 2nd page of items.
const PROJECT_1_PAGE_SIZE = 8;

export default function ProjectListSection() {
  const { currentPage, totalPages, pagedItems, goToPage, topRef } = usePagination(
    project1Items,
    PROJECT_1_PAGE_SIZE
  );

  return (
    <section className="section-project flat-spacing-1">
      <div className="container">
        <div className="heading-section d-flex align-items-center justify-content-between rg-15 flex-wrap mb-50">
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10">
              <i className="icon-sparkle"></i>
              Case Studies
            </p>
            <p className="h2 title fw-7">Featured Projects</p>
          </div>
          <div className="right">
            <Link href="/project-1" className="tf-btn style-big style-color-black border-radius-30">
              <span className="text-btn">View All Projects</span>
              <span className="icon-btn">
                <i className="icon-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="row rg-30" ref={topRef}>
          {pagedItems.map((project) => (
            <div className="col-lg-6" key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
            centered
          />
        </div>
      </div>
    </section>
  );
}
