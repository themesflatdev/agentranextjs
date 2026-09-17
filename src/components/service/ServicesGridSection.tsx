import Link from "next/link";
import { servicesHome2 } from "@/data/servicesHome2";

// Same 6 services as ServicesListSection (home2.md) — same data file, just a
// grid layout ("services-item-2") instead of that section's list-with-image
// layout, confirmed identical content by diffing service.html directly.
export default function ServicesGridSection() {
  return (
    <section className="section-services p-service flat-spacing-1">
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
        <div className="row rg-30">
          {servicesHome2.map((service) => (
            <div className="col-lg-4 col-sm-6" key={service.number}>
              <div className="services-item-2">
                <div className="icon">
                  <i className={service.icon}></i>
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
                <Link
                  href={`/service-details/${service.slug}`}
                  className="tf-btn style-color-bg-1 style-w-full border-radius-30"
                >
                  <span className="text-btn">Service Details</span>
                  <span className="icon-btn">
                    <i className="icon-chevron-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
