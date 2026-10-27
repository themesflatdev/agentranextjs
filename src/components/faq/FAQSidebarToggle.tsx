"use client";

import { useState } from "react";
import FAQSidebar from "@/components/faq/FAQSidebar";

// Same off-canvas sidebar pattern as BlogSidebarToggle, kept as its own
// local-state component (not shared) since FAQSidebar's props differ from
// BlogSidebar's.
export default function FAQSidebarToggle() {
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

      <FAQSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} />

      <div
        className={`overlay-filter${filterOpen ? " show" : ""}`}
        onClick={() => setFilterOpen(false)}
      />
    </>
  );
}
