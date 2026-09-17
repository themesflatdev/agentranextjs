"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { AwardItem } from "@/data/awards";

interface AwardsAccordionProps {
  items: AwardItem[];
}

// Ports the `data-bs-toggle="collapse" data-bs-parent="#According1"` behavior
// from the source markup — only one award row expanded at a time, item 1
// open by default (`<div class="collapse show">` on #according1). The show
// class now lands on `.according-content` itself (not a separate `.collapse`
// wrapper) so it drives the same pure-CSS grid-rows expand/collapse
// transition as FAQAccordion, instead of Bootstrap's instant display:none/
// block toggle.
export default function AwardsAccordion({ items }: AwardsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const groupId = useId();

  return (
    <div className="awards-according-list">
      <div className="header-table mb-30">
        <div className="header-name-project">
          <span className="h5 color-title fw-7">Project</span>
        </div>
        <div className="header-category">
          <span className="h5 color-title fw-7">Category</span>
        </div>
        <div className="header-year">
          <span className="h5 color-title fw-7">Year</span>
        </div>
      </div>

      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${groupId}-panel-${index}`;

        return (
          <div className="according-awards-item" key={item.title}>
            <div className="header-according">
              <a
                href={`#${panelId}`}
                className={`title-according${isOpen ? "" : " collapsed"}`}
                onClick={(event) => {
                  event.preventDefault();
                  setOpenIndex(isOpen ? null : index);
                }}
              >
                <span className="letf-title">
                  <span className="text-title h4 fw-7">{item.title}</span>
                </span>
                <span className="right-title d-flex align-items-center justify-content-between">
                  <span className="text-category ff-2 color-paragraph">{item.category}</span>
                  <span className="time fw-7 text-body-2 letter-space--3">{item.year}</span>
                </span>
              </a>
            </div>
            <div id={panelId} className={`according-content${isOpen ? " show" : ""}`}>
              <div className="according-content-inner">
                <div className="letf-content">
                  <Link href={item.href} className="tf-btn style-big style-color-black border-radius-30">
                    <span className="text-btn">View Projects</span>
                    <span className="icon-btn">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="right-content">
                  <div className="image">
                    <Image src={item.image} alt={item.title} width={740} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
