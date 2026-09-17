"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { menuItems, isMenuItemActive } from "@/data/menu";
import { useStickyHeader } from "./useStickyHeader";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  variant?: "default" | "style-2";
}

// Only the home page and its dark variant use the "style-2" header (w-975
// container, white logo, "Sign Up" CTA). Every other route — including
// ai-startup and ai-startup-dark — uses "default", matching agentrahtml.
const STYLE_2_ROUTES = ["/", "/index-dark"];

export default function Header({ variant }: HeaderProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useStickyHeader(headerRef);

  const resolvedVariant = variant ?? (STYLE_2_ROUTES.includes(pathname) ? "style-2" : "default");
  const isStyle2 = resolvedVariant === "style-2";

  return (
    <>
      <header
        ref={headerRef}
        className={`header header-fixed${isStyle2 ? " style-2" : ""}`}
      >
        <div className={`container ${isStyle2 ? "w-975" : "w-1692"}`}>
          <div className="header-content">
            <Link href="/" className="logo">
              <Image
                src={
                  isStyle2
                    ? "/assets/images/logo/logo-white.svg"
                    : "/assets/images/logo/logo.svg"
                }
                alt="Agentra"
                width={127}
                height={30}
              />
            </Link>

            <div className="header-center d-none d-xl-block">
              <nav className="box-navigation">
                <ul className={`box-nav-menu${isStyle2 ? " style-2" : ""}`}>
                  {menuItems.map((item) => {
                    const active = isMenuItemActive(item, pathname);
                    const liClassName = [
                      "menu-item",
                      item.children ? "has-sub_menu" : "",
                      isStyle2 ? "style-2" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <li key={item.label} className={liClassName}>
                        <Link
                          href={item.children ? "#" : item.href}
                          className={`item-link${active ? " active" : ""}`}
                        >
                          <span>{item.label}</span>
                        </Link>

                        {item.children && (
                          <div className="sub-menu">
                            <ul className="sub-menu_list">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={`sub-menu_link${
                                      pathname === child.href ? " active" : ""
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="header-right d-flex align-items-center g-20">
              <div className="d-sm-block d-none">
                {isStyle2 ? (
                  <a href="#" className="tf-btn style-gradient-2">
                    <span className="text-btn">Sign Up</span>
                    <span className="icon-btn">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </a>
                ) : (
                  <Link href="/contact" className="tf-btn">
                    <span className="text-btn">Get Started</span>
                    <span className="icon-btn">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </Link>
                )}
              </div>
              <div className="d-xl-none">
                <button
                  type="button"
                  className="mobile-button"
                  aria-label="Open menu"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
