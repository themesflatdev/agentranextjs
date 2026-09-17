"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { footerMenuColumn, footerServicesColumn } from "@/data/footerMenu";
import Marquee from "./Marquee";

interface FooterProps {
  variant?: "default" | "style-2";
}

// Same two routes that get the "style-2" Header (see Header.tsx).
const STYLE_2_ROUTES = ["/", "/index-dark"];

interface FooterColumnProps {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  className?: string;
  children: ReactNode;
}

// main.js only revealed `.tf-collapse-content` below 575px by toggling
// `.open` on this wrapper and jQuery-sliding the content open; the CSS
// override for `.open .tf-collapse-content` now lives in _footer.scss.
function FooterColumn({
  id,
  title,
  isOpen,
  onToggle,
  className,
  children,
}: FooterColumnProps) {
  return (
    <div
      className={`footer-content footer-col-block${isOpen ? " open" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <div
        className="title-mobile h4 letter-space--2 fw-5"
        role="button"
        tabIndex={0}
        onClick={() => onToggle(id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") onToggle(id);
        }}
      >
        {title}
        <i className="icon-chevron-down d-sm-none d-block"></i>
      </div>
      <div className="tf-collapse-content">{children}</div>
    </div>
  );
}

export default function Footer({ variant }: FooterProps) {
  const pathname = usePathname();
  const [openColumns, setOpenColumns] = useState<Set<string>>(new Set());

  const resolvedVariant =
    variant ?? (STYLE_2_ROUTES.includes(pathname) ? "style-2" : "default");
  const isStyle2 = resolvedVariant === "style-2";

  const toggleColumn = (id: string) => {
    setOpenColumns((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const aboutFooter = (
    <div className="about-footer">
      <Link href="/" className="logo-footer">
        <Image
          src="/assets/images/logo/logo-footer.svg"
          alt="Agentra"
          width={147}
          height={30}
        />
      </Link>
      <p className="title text-title-3 fw-6 letter-space--3">
        Build the Future
        <br />
        the <span className="fst-italic">AI enterprise</span>
      </p>
      <Link href="/contact" className="tf-btn style-big">
        <span className="text-btn">Get Started</span>
        <span className="icon-btn">
          <i className="icon-chevron-right"></i>
        </span>
      </Link>
    </div>
  );

  const menuColumn = (
    <FooterColumn
      id="menu"
      title="Menu"
      isOpen={openColumns.has("menu")}
      onToggle={toggleColumn}
    >
      <ul className="content">
        {footerMenuColumn.map((item) => (
          <li className="support-item-footer" key={item.label}>
            <Link href={item.href} className="ff-2">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </FooterColumn>
  );

  const servicesColumn = (
    <FooterColumn
      id="services"
      title="Services"
      isOpen={openColumns.has("services")}
      onToggle={toggleColumn}
    >
      <ul className="content">
        {footerServicesColumn.map((item, index) => (
          <li className="support-item-footer" key={index}>
            <Link href={item.href} className="ff-2">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </FooterColumn>
  );

  const newsletterColumn = (
    <FooterColumn
      id="newsletter"
      title="Newsletter"
      isOpen={openColumns.has("newsletter")}
      onToggle={toggleColumn}
      className="footer-newsletter footer-content-2"
    >
      <div className="content">
        <p className="desc-newsletter ff-2">
          Subscribe to our newsletter and
          <br />
          get the latest updates
        </p>
        <form className="form-newsletter" onSubmit={(event) => event.preventDefault()}>
          <fieldset>
            <input
              type="email"
              placeholder="Email Address"
              className={isStyle2 ? "style-color-bg-3" : undefined}
              required
            />
            <button type="submit" className="send-btn">
              <i className="icon-arrow-up-right"></i>
            </button>
          </fieldset>
        </form>
      </div>
    </FooterColumn>
  );

  const bottomFooter = (
    <div className="bottom-footer">
      <div className={`container${isStyle2 ? " w-1222" : ""}`}>
        <div className="bottom-footer-content d-flex align-items-center justify-content-between flex-wrap">
          <p className="copy-right ff-2 text-center">
            Copyright © 2026{" "}
            <Link href="/" className="ff-2">
              Agentra
            </Link>
            . All Rights Reserved.
          </p>
          <ul className="d-flex align-items-center justify-content-center g-30 rg-15 flex-wrap">
            <li>
              <a className="ff-2" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="ff-2" href="#">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a className="ff-2" href="#">
                Carrier?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  if (isStyle2) {
    return (
      <footer className="footer style-2 section-line">
        <div className="line-page line-1"></div>
        <div className="image-shape shape-1">
          <Image
            src="/assets/images/section/shape-footer-2-1.png"
            alt=""
            width={1566}
            height={614}
          />
        </div>
        <div className="image-shape shape-2">
          <Image
            src="/assets/images/section/shape-footer-2-2.png"
            alt=""
            width={1567}
            height={693}
          />
        </div>
        <div className="container">
          <div className="top-footer">
            <Marquee />
          </div>
          <div className="line-footer">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
          </div>
          <div className="middle-footer">
            <div className="img-shape">
              <Image
                src="/assets/images/section/shape-footer-middel.png"
                alt=""
                width={720}
                height={306}
              />
            </div>
            {aboutFooter}
            {menuColumn}
            {servicesColumn}
            {newsletterColumn}
          </div>
          <div className="line-footer">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
          </div>
          <div className="big-text-footer">agentra</div>
          <div className="line-footer">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
          </div>
        </div>
        {bottomFooter}
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="image-bg">
        <Image
          src="/assets/images/section/bg-footer.jpg"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className="top-footer">
        <Marquee />
      </div>
      <div className="line-footer">
        <div className="container">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
        </div>
      </div>
      <div className="middle-footer">
        <div className="container">
          <div className="row rg-30">
            <div className="col-xl-4">{aboutFooter}</div>
            <div className="col-xl-8">
              <div className="list-footer-col-block d-flex justify-content-between g-30">
                {menuColumn}
                {servicesColumn}
                {newsletterColumn}
              </div>
            </div>
          </div>
        </div>
      </div>
      {bottomFooter}
    </footer>
  );
}
