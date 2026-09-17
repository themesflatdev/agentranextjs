import Image from "next/image";
import Link from "next/link";

interface CTASection2Props {
  dark?: boolean;
}

export default function CTASection2({ dark = false }: CTASection2Props) {
  return (
    <section className="section-CTA h-2 flat-spacing-6">
      <div className="img-bg">
        {/* Not `fill`: `.img-bg` (from _section.scss) sets max-width/width
            but no height, so a `fill` image (position:absolute, height:100%)
            collapses to 0px tall. A normal sized image lets its own aspect
            ratio (1100x522) drive the wrapper's rendered height instead,
            same as the plain <img> in the source markup. */}
        <Image
          src={`/assets/images/section/bg-s-cta-h2${dark ? "-dark" : ""}.png`}
          alt="Image"
          width={1100}
          height={522}
        />
      </div>
      <div className="img-shape">
        <Image
          src="/assets/images/section/shape-s-services-h2.png"
          alt="Image"
          width={1150}
          height={1150}
        />
      </div>
      <div className="container">
        <div className="section-cta-inner d-flex flex-column align-items-center">
          <div className="heading-section heading-h2 style-center mb-0">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Take the Next Step
              <i className="icon-sparkle"></i>
            </p>
            <p className="h2 title fw-6 title-animation">
              Unlock the Power of AI
              <br />
              for Your Business
            </p>
          </div>
          <p className="text ff-2 title-animation">Ready to take your business to the next level with AI-powered solutions?</p>
          <div className="title-animation">
            <Link href="/contact" className="tf-btn style-big style-gradient-2 border-radius-30">
              <span className="text-btn">Get Started</span>
              <span className="icon-btn">
                <i className="icon-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
