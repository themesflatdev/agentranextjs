"use client";

import DownloadWidget from "@/components/common/DownloadWidget";
import { faqPageCategories } from "@/data/faqPageCategories";

interface FAQSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Same mobile off-canvas filter structure as ServiceDetailSidebar, but
// faq.html's category links are all href="#" (no real target pages), so
// these render as plain anchors instead of next/link routes.
export default function FAQSidebar({ isOpen, onClose }: FAQSidebarProps) {
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
        {faqPageCategories.map((category) => (
          <a
            href="#"
            className="siderbar-category-item text-title-1 lh-100 fw-6 letter-space--3"
            key={category}
          >
            <span className="icon-arrow-up-right"></span>
            <span className="text-title">{category}</span>
          </a>
        ))}
      </div>

      <DownloadWidget
        titleLines={["Unlock Insights", "Into AI-Powered Solutions"]}
        borderRadius
      />
    </div>
  );
}
