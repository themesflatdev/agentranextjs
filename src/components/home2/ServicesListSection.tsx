import Image from "next/image";
import Link from "next/link";
import { servicesHome2 } from "@/data/servicesHome2";
import NumberBadge from "./NumberBadge";

interface ServicesListSectionProps {
  dark?: boolean;
}

export default function ServicesListSection({ dark = false }: ServicesListSectionProps) {
  return (
    <section className={`section-services h-2 ${dark ? "flat-spacing-7" : "flat-spacing-1"} overflow-hidden`}>
      <div className="img-shape">
        <Image
          src="/assets/images/section/shape-s-services-h2.png"
          alt="Image"
          width={1150}
          height={1150}
        />
      </div>
      <div className="container">
        <div className="heading-section style-center heading-h2 mb-58">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            AI-Power Services
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-7 title-animation">
            Next-Generation AI Solutions
            <br />
            for Every Industry
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row rg-30">
          {servicesHome2.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.number}>
              <div className={`services-item${dark ? " style-dark-2" : ""}`}>
                <div className="img-bg">
                  <Image
                    src={`/assets/images/widget/bg-wg-services-2${dark ? "-dark" : ""}.png`}
                    alt="Image"
                    width={300}
                    height={390}
                  />
                </div>
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <div className="item-content">
                  <div className="number-services">
                    <NumberBadge number={service.number} />
                  </div>
                  <Link href={`/service-details/${service.slug}`} className="name-item h3 fw-6">
                    {service.name}
                  </Link>
                  <div className="line"></div>
                  <p className="desc ff-2">{service.desc}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li className="d-flex align-items-center g-7" key={feature}>
                        <i className="icon-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/service-details/${service.slug}`} className="tf-btn-arrow style-2">
                  <i className="icon-arrow-right-2"></i>
                </Link>
              </div>
            </div>
          ))}

          <div className="col-lg-6">
            <div className="wg-cta">
              <div className="img-bg">
                <Image
                  src="/assets/images/widget/bg-wg-cta.jpg"
                  alt="Image"
                  width={630}
                  height={390}
                />
              </div>
              <div className="wg-content">
                <p className="title text-title-3 lh-50 fw-6 letter-space--3">
                  Need Custom
                  <br />
                  Services
                </p>
                <div className="bottom">
                  <p className="text text-body-2 letter-space--1 ff-2">
                    Advanced Ai startup solutions
                  </p>
                  <Link
                    href="/service"
                    className="tf-btn style-big style-color-white border-radius-30"
                  >
                    <span className="text-btn">Get Started</span>
                    <span className="icon-btn">
                      <i className="icon-chevron-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
