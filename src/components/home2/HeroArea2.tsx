import Image from "next/image";
import Link from "next/link";

export default function HeroArea2() {
  return (
    <section className="wg-hero-area style-2">
      <div className="image-bg">
        <Image
          src="/assets/images/page-title/bg-hero-2.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
        />
        <div className="overlay"></div>
      </div>
      <div className="container w-1690">
        <div className="hero-content d-flex justify-content-between">
          <div className="left">
            <p className="title fs-75 lh-80 fw-6 letter-space--5 title-animation">
              Unlock New Possibilities by AI Innovation
            </p>

            <div className="bottom-content">
              <p className="desc h4 fw-5 ff-2 letter-space-0 title-animation">
                We are a forward-thinking AI agency
                <br />
                dedicated to helping businesses.
              </p>
              <div className="title-animation">
                <Link href="/pricing" className="tf-btn style-big">
                  <span className="text-btn">Get Started</span>
                  <span className="icon-btn">
                    <i className="icon-chevron-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="right d-flex flex-column align-items-center">
            {/* tf-animate-1 (whole-box clip-path reveal) instead of
                title-animation: GSAP SplitText's per-line rotationX reveal
                combined with this box's backdrop-filter blur makes each
                split line render as its own separate box instead of one
                continuous card. tf-animate-1 reveals the box as one piece,
                so it still animates in on scroll without that glitch. */}
            <div className="tf-animate-1">
              <p className="text h4 ff-2 fw-5 letter-space-0">An AI startup agency helps businesses transform ideas into intelligent digital solutions through cutting-edge technology and innovation.</p>
            </div>
            <div className="image tf-animate-2">
              <Image
                src="/assets/images/page-title/img-s-hero-2.jpg"
                alt="Image"
                width={925}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="title-animation">
        <p className="text-big-img">Ai startup agency</p>
      </div>
    </section>
  );
}
