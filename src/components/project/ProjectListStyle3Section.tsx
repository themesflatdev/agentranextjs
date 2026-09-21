"use client";

import Link from "next/link";
import { projectsStyle3 } from "@/data/projectsStyle3";
import ProjectCardStyle3 from "@/components/project/ProjectCardStyle3";
import Pagination from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";

// pageSize 6 keeps project-2.html's original "two 3-item columns" layout
// intact as page 1 — pagination only kicks in once there's a 2nd page.
const PROJECT_2_PAGE_SIZE = 6;

export default function ProjectListStyle3Section() {
  const { currentPage, totalPages, pagedItems, goToPage, topRef } = usePagination(
    projectsStyle3,
    PROJECT_2_PAGE_SIZE
  );

  // project-2.html splits its 6 cards into two 3-item columns (1st/2nd/3rd
  // left, 4th/5th/6th right) rather than a single 6-item row — confirmed
  // directly against the source. Split within the CURRENT page's items so
  // this still holds true once pagination is in play.
  const leftColumn = pagedItems.slice(0, 3);
  const rightColumn = pagedItems.slice(3, 6);

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
          <div className="col-lg-6">
            <div className="list-project d-flex flex-column g-30">
              {leftColumn.map((project) => (
                <ProjectCardStyle3 project={project} key={project.slug} />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-project d-flex flex-column g-30">
              {rightColumn.map((project) => (
                <ProjectCardStyle3 project={project} key={project.slug} />
              ))}
            </div>
          </div>
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
