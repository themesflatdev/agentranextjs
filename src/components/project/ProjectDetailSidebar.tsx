"use client";

interface ProjectDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Same mobile off-canvas wrapper as ServiceDetailSidebar/FAQSidebar, but the
// content itself is a static 4-line info list (Category/Clients/Location/
// Date), not a category list. Neither projects.ts nor projectsStyle3.ts has
// these fields, and project-details.html shows the exact same 4 values
// regardless of which project — so, like ProjectDetailContent, this is
// static for every slug rather than fabricated per-project data.
export default function ProjectDetailSidebar({ isOpen, onClose }: ProjectDetailSidebarProps) {
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

      <ul className="sidebar-info d-flex flex-column g-30">
        <li>
          <p className="h4 title">Category :</p>
          <p className="h4 text fw-6">AI-Data Solutions</p>
        </li>
        <li>
          <p className="h4 title">Clients :</p>
          <p className="h4 text fw-6">Jonathan Doe</p>
        </li>
        <li>
          <p className="h4 title">Location :</p>
          <p className="h4 text fw-6">New York City</p>
        </li>
        <li>
          <p className="h4 title">Date :</p>
          <p className="h4 text fw-6">20 February 2026</p>
        </li>
      </ul>
    </div>
  );
}
