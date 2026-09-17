"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { menuItems, isMenuItemActive } from "@/data/menu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openGroupIds, setOpenGroupIds] = useState<Set<string>>(new Set());

  const toggleGroup = (id: string) => {
    setOpenGroupIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      <div
        className={`offcanvas-backdrop fade${isOpen ? " show" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`offcanvas offcanvas-start offcanvas-mobile${isOpen ? " show" : ""}`}
      >
        <div className="pop-up-nav-mobile">
          <div className="canvas-header">
            <Link href="/" className="logo-site" onClick={onClose}>
              <Image
                src="/assets/images/logo/logo.svg"
                alt="Agentra"
                width={127}
                height={30}
              />
            </Link>
            <span
              className="icon icon-close"
              role="button"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onClose();
              }}
            />
          </div>
          <div className="canvas-body">
            <div className="mb-content-top">
              <ul className="nav-ul-mb">
                {menuItems.map((item, index) => {
                  const active = isMenuItemActive(item, pathname);

                  if (!item.children) {
                    return (
                      <li key={item.label} className="nav-mb-item">
                        <Link
                          href={item.href}
                          className={`mb-menu-link${active ? " active" : ""}`}
                          onClick={onClose}
                        >
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  }

                  const groupId = `dropdown-menu-${index}`;
                  const isGroupOpen = openGroupIds.has(groupId);

                  return (
                    <li
                      key={item.label}
                      className={`nav-mb-item${isGroupOpen ? " open" : ""}`}
                    >
                      <a
                        href={`#${groupId}`}
                        className={`mb-menu-link${active ? " active" : ""}${
                          isGroupOpen ? "" : " collapsed"
                        }`}
                        aria-expanded={isGroupOpen}
                        onClick={(event) => {
                          event.preventDefault();
                          toggleGroup(groupId);
                        }}
                      >
                        <span>{item.label}</span>
                        <span className="icon icon-chevron-down"></span>
                      </a>
                      {/* Always rendered (not mounted/unmounted on toggle) so
                          the grid-rows transition in _header.scss can animate
                          it open/closed instead of just popping in and out. */}
                      <div className="sub-nav-collapse">
                        <ul className="sub-nav-menu">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`sub-nav-link${
                                  pathname === child.href ? " active" : ""
                                }`}
                                onClick={onClose}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="canvas-bottom"></div>
        </div>
      </div>
    </>
  );
}
