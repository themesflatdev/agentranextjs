import Image from "next/image";
import { missionCards } from "@/data/about";

export default function AboutIntroSection() {
  return (
    <section className="section-about p-about flat-spacing-1">
      <div className="container">
        <div className="heading-section mb-73">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            About Company
          </p>
          <p className="h2 title fw-6 title-animation">
            AI-powered agency, they
            <br />
            helps brands accelerate their
            <br />
            marketing success.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row rg-60">
          <div className="col-lg-5">
            <div className="left-content h-100 d-flex flex-column justify-content-between g-20">
              <p className="text-section text-title-1 lh-35 fw-6 letter-space--3 title-animation">
                Next-generation AI empowers organizations to stay competitive, innovate faster. With next generation AI, organizations.
              </p>
              <div className="list-mission-card d-flex flex-column g-20">
                {missionCards.map((card) => (
                  <div className="mission-card tf-animate-2" key={card.title}>
                    <div className="top">
                      <i className="icon-sparkle"></i>
                      <span className="h4 fw-7">{card.title}</span>
                    </div>
                    <p className="desc ff-2">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right-content">
              <div className="box-fact tf-animate-2">
                <div className="top-fact">
                  <p className="fs-70 lh-100 letter-space--5 fw-6 ff-2">
                    <span className="h1 fw-6 ff-2">5X</span>%
                  </p>
                </div>
                <div className="line"></div>
                <p className="desc ff-2 text-title-1 fw-5 letter-space--3">
                  Business growth
                  <br />
                  through strategy
                </p>
              </div>
              <div className="image tf-animate-2">
                <Image
                  src="/assets/images/section/img-s-about-3.jpg"
                  alt="Image"
                  width={740}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
