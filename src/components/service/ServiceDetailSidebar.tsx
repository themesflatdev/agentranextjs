"use client";

import Link from "next/link";
import DownloadWidget from "@/components/common/DownloadWidget";
import { servicesHome2 } from "@/data/servicesHome2";

interface ServiceDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// service-details.html's sidebar list isn't in servicesHome2's 01-06 order —
// it goes Intelligent/AI SaaS/Machine Learning/Advanced Analytics/
// Cloud-Based/Seamless, confirmed by reading the source directly. That base
// array's order can't change (ServicesListSection/ServicesGridSection rely
// on it), so this re-sequences by slug just for this sidebar.
const SIDEBAR_SLUG_ORDER = [
  "intelligent-process-automation",
  "ai-saas-platform-development",
  "machine-learning-capabilities",
  "advanced-analytics-and-reporting",
  "cloud-based-process-management",
  "seamless-system-integration",
];

const sidebarServices = SIDEBAR_SLUG_ORDER.map(
  (slug) => servicesHome2.find((service) => service.slug === slug)!
);

// Same mobile off-canvas filter behavior as BlogSidebar (identical
// "fillterShop" button + "tf-sidebar sidebar-filter right" markup in the
// source) — the category list itself skips an "active" highlight for the
// current slug since _widget.scss's .siderbar-category-item has no active
// modifier to hook into, only :hover.
export default function ServiceDetailSidebar({ isOpen, onClose }: ServiceDetailSidebarProps) {
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

      <div className="wg-siderbar-category mb-30">
        {sidebarServices.map((service) => (
          <Link
            href={`/service-details/${service.slug}`}
            className="siderbar-category-item text-title-1 lh-100 fw-6 letter-space--3"
            key={service.slug}
          >
            <span className="icon-arrow-up-right"></span>
            <span className="text-title">{service.sidebarLabel}</span>
          </Link>
        ))}
      </div>

      <DownloadWidget
        titleLines={["Download the", "Company Profile", "& Services"]}
        borderRadius
      />
    </div>
  );
}
