import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  dark?: boolean;
}

export default function AboutSection({ dark = false }: AboutSectionProps) {
  return (
    <section className={`section-about section-line h-1${dark ? " section-style-dark" : ""}`}>
      <div className="img-shape">
        <Image
          src={
            dark
              ? "/assets/images/section/shape-se-about-dark.png"
              : "/assets/images/section/shape-se-about.png"
          }
          alt="Image"
          width={dark ? 610 : 780}
          height={dark ? 740 : 780}
        />
      </div>
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>
      <div className="container">
        <div className="heading-section">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            About Company
          </p>
          <p className="h2 title fw-7 title-animation">
            AI-powered agency, they
            <br />
            helps brands accelerate their
            <br />
            marketing success.
          </p>
        </div>
        <div className="section-about-inner d-flex justify-content-between g-30">
          <div className="section-about-content">
            <p className="text text-title-1 lh-35 fw-6 letter-space--3 title-animation">
              Next-generation AI empowers
              <br />
              organizations to stay competitive,
              <br />
              innovate faster.
            </p>
            <p className="desc ff-2 text-body-2 title-animation">
              We are an AI-driven agency transforming ideas
              <br />
              into intelligent digital experiences by combining
              <br />
              thinking with advanced technology.
            </p>
            <div className="title-animation">
              <Link href="/about" className="tf-btn style-big">
                <span className="text-btn">Learn More Us</span>
                <span className="icon-btn">
                  <i className="icon-chevron-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="image-section tf-animate-2">
            <Image
              src="/assets/images/section/img-section-about-h1.jpg"
              alt="Image"
              width={730}
              height={450}
            />
          </div>
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
        </div>
      </div>
    </section>
  );
}
