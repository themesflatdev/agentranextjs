"use client";

import { useState } from "react";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ServiceDetailContent from "@/components/service/ServiceDetailContent";
import ServiceDetailSidebar from "@/components/service/ServiceDetailSidebar";

interface ServiceDetailPageBodyProps {
  serviceName: string;
}

// Holds the mobile sidebar-filter toggle state — same button/sidebar/overlay
// triad as blog-details/[slug]/page.tsx, just split out into its own client
// component so the route's page.tsx can stay a Server Component and export
// generateStaticParams (a "use client" page file can't export that).
export default function ServiceDetailPageBody({ serviceName }: ServiceDetailPageBodyProps) {
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
        title={serviceName}
        breadcrumbLabel="Service Details"
        bgImage="/assets/images/page-title/page-title.jpg"
      />

      <section className="section-service-details flat-spacing-1">
        <div className="container">
          <div className="row">
            <ServiceDetailContent />
            <div className="col-xl-4">
              <ServiceDetailSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
            </div>
          </div>
        </div>
      </section>

      <div
        className={`overlay-filter${filterOpen ? " show" : ""}`}
        onClick={() => setFilterOpen(false)}
      />
    </>
  );
}
