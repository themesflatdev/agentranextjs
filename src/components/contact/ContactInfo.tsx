import { Fragment } from "react";
import { contactHeading, contactItems } from "@/data/contact";

export default function ContactInfo() {
  return (
    <div className="section-content">
      <div className="heading-section mb-70">
        <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
          <i className="icon-sparkle"></i>
          {contactHeading.subTitle}
        </p>
        <p className="h2 title fw-7 title-animation">
          {contactHeading.titleLines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {index < contactHeading.titleLines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      </div>
      <p className="text-section ff-2 title-animation">{contactHeading.description}</p>
      <div className="list-contact-item d-flex g-30">
        {contactItems.map((item) => (
          <div className="contact-item tf-animate-2" key={item.title}>
            <div className="top-item">
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <a href="#" className="title h3 fw-6">
                {item.title}
              </a>
            </div>
            <div className="bottom-item">
              {item.links.map((link, index) => (
                <a
                  href={link.href}
                  className={`ff-2 fw-5${index < item.links.length - 1 ? " mb-9" : ""}`}
                  key={link.href}
                >
                  {link.lines.map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                      {line}
                      {lineIndex < link.lines.length - 1 && <br />}
                    </Fragment>
                  ))}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
