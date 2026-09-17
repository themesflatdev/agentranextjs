"use client";

import { useState } from "react";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ProjectDetailContent from "@/components/project/ProjectDetailContent";
import ProjectDetailSidebar from "@/components/project/ProjectDetailSidebar";
import NextPrevProject from "@/components/project/NextPrevProject";

interface ProjectDetailPageBodyProps {
  projectTitle: string;
  currentSlug: string;
}

// Same mobile sidebar-filter toggle triad as ServiceDetailPageBody, split
// into its own client component so the route's page.tsx can stay a Server
// Component and export generateStaticParams (a "use client" page can't).
export default function ProjectDetailPageBody({ projectTitle, currentSlug }: ProjectDetailPageBodyProps) {
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

      <PageTitleBanner
        title={projectTitle}
        breadcrumbLabel="Project Details"
        bgImage="/assets/images/page-title/page-title.jpg"
      />

      <div className="main-content">
        <section className="section-project-details flat-spacing-1">
          <div className="container">
            <div className="row">
              <ProjectDetailContent />
              <div className="col-xl-4">
                <ProjectDetailSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
              </div>
            </div>

            <NextPrevProject currentSlug={currentSlug} />
          </div>
        </section>
      </div>

      <div
        className={`overlay-filter${filterOpen ? " show" : ""}`}
        onClick={() => setFilterOpen(false)}
      />
    </>
  );
}
