import Image from "next/image";
import Link from "next/link";

interface HeroAreaProps {
  dark?: boolean;
}

export default function HeroArea({ dark = false }: HeroAreaProps) {
  const dotClassName = `dot${dark ? " dot-gradient" : ""}`;

  return (
    <section className="wg-hero-area">
      <div className="image-bg">
        <Image
          src={
            dark
              ? "/assets/images/page-title/bg-page-title-h1-dark.jpg"
              : "/assets/images/page-title/bg-page-title-home.jpg"
          }
          alt=""
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="top-hero-area">
          <div className="title-animation">
            <p className="text-big-gradient">Ai Driven agency</p>
          </div>
          <span className={`${dotClassName} dot-1`}></span>
          <span className={`${dotClassName} dot-2`}></span>
          <span className={`${dotClassName} dot-3`}></span>
          <span className={`${dotClassName} dot-4`}></span>
        </div>
      </div>
      <div className="container">
        <div className="image-absolute">
          <Image
            src="/assets/images/page-title/img-hero-arena-2.png"
            alt="Image"
            width={673}
            height={670}
          />
        </div>
        <div className="hero-area-content">
          <div className="image-hero">
            <Image
              src="/assets/images/page-title/img-hero-arena-1.png"
              alt="Image"
              width={398}
              height={600}
            />
          </div>

          <div className="left-content">
            <p className="sub-title title-animation">
              <i className="icon-sparkle"></i>
              <span className="ff-2 fw-5 letter-space--2 text-body-1">
                Ai Driven Agency
              </span>
            </p>
            <h1 className={`title fw-6${dark ? "" : " letter-space--3"} title-animation`}>
              AI-Driven Solutions for Future Brands
            </h1>
            <p className="desc ff-2 fw-5 h5 letter-space-0 title-animation">
              We are a forward-thinking AI agency dedicated to helping
              businesses unlock potential.
            </p>
            <div className="title-animation">
              <Link
                href={dark ? "/project-1" : "/pricing"}
                className="tf-btn style-big style-gradient-2"
              >
                <span className="text-btn">Get Started</span>
                <span className="icon-btn">
                  <i className="icon-chevron-right"></i>
                </span>
              </Link>
            </div>
          </div>

          <div className="wg-quote-2 tf-animate-4">
            <div className="top-wg">
              <div className="icon">
                <i className="icon-certified-award"></i>
              </div>
              <p className="text-body-1 fw-6 letter-space--2 color-white mb-8">
                #1 & Certified Award
              </p>
              <p className="text-body-2 letter-space--2 ff-2 color-text-3">
                AI Driven solutions
              </p>
            </div>

            <div className="line"></div>
            <div className="bottom-wg">
              <div className="list-image-avatar">
                <div className="item item-1">
                  <Image
                    src="/assets/images/avatar/avatar-1.jpg"
                    alt="Image"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="item item-2">
                  <Image
                    src="/assets/images/avatar/avatar-2.jpg"
                    alt="Image"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="item item-3">
                  <Image
                    src="/assets/images/avatar/avatar-3.jpg"
                    alt="Image"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="item item-4 text-item">
                  <span>+</span>
                </div>
              </div>

              <p className="text-body-1 fw-6 letter-space--2 color-white mb-8">
                10m+ Happy Clients
              </p>

              <p className="text-body-2 letter-space--2 ff-2 color-text-3">
                We’ve Global satisfactions clients
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="line-page line-1"></div>
    </section>
  );
}
