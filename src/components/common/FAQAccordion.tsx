"use client";

import { useId, useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Index of the item open by default (ai-startup's original markup starts
   *  with its 2nd question already expanded — `<div class="collapse show">`
   *  on `#according2`). */
  defaultOpenIndex?: number;
  className?: string;
  /** Extra class per `.according-item` — service-details.html's FAQ adds
   *  "style-2" here (ai-startup/pricing's don't have any modifier). */
  itemClassName?: string;
  /** service-details.html's title-according uses "fw-6", not the "fw-7"
   *  every other page's FAQ uses — confirmed by diffing sources directly. */
  headerFontWeight?: "fw-6" | "fw-7";
}

// `.according-content` animates open/closed via a pure-CSS grid-template-rows
// 0fr/1fr transition (_accordion.scss) — the same trick the footer's
// `.tf-collapse-content` uses — instead of Bootstrap's collapse.js, which
// only ever toggled `display:none/block` with no transition at all. Only one
// item stays open at a time, mirroring the original's `data-bs-parent`
// accordion-group behavior. Kept in components/common/ (not home2/) since
// /faq will reuse it for its full accordion later.
export default function FAQAccordion({
  items,
  defaultOpenIndex = 0,
  className,
  itemClassName,
  headerFontWeight = "fw-7",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const groupId = useId();

  return (
    <div className={`wg-according${className ? ` ${className}` : ""}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${groupId}-panel-${index}`;

        return (
          <div className={`according-item${itemClassName ? ` ${itemClassName}` : ""}`} key={item.question}>
            <p className="header-according">
              <a
                href={`#${panelId}`}
                className={`title-according h4 ${headerFontWeight}${isOpen ? "" : " collapsed"}`}
                aria-expanded={isOpen}
                onClick={(event) => {
                  event.preventDefault();
                  setOpenIndex(isOpen ? null : index);
                }}
              >
                <span className="text-title">{item.question}</span>
                <span className="icon">
                  <span></span>
                </span>
              </a>
            </p>
            <div id={panelId} className={`according-content${isOpen ? " show" : ""}`}>
              <div className="according-content-inner">
                <p className="text ff-2">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
