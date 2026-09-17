import Image from "next/image";
import Marquee from "@/components/layout/Marquee";
import ConsultingForm from "@/components/common/ConsultingForm";

interface ContactCTASectionProps {
  dark?: boolean;
}

export default function ContactCTASection({ dark = false }: ContactCTASectionProps) {
  return (
    <section
      className={`section-contact h-1 section-line flat-spacing-3${
        dark ? " section-style-dark" : ""
      }`}
    >
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>
      <div className="img-bg-contact">
        <Image
          src="/assets/images/section/bg-section-contact.png"
          alt="Image"
          width={1290}
          height={795}
        />
      </div>

      <div className="container">
        {/* Light uses "style-color-title" (confirmed against the source
            HTML — not "style-2", which this previously passed incorrectly);
            dark drops that variant entirely and instead gets style-border-2
            + dot-gradient dots via the `dark` prop. */}
        <Marquee
          bordered
          dotted
          variant={dark ? "default" : "style-color-title"}
          className="style-bg-blur"
          dark={dark}
        />
      </div>

      <div className="container w-1220">
        <div className="section-contact-inner">
          <div className="letf">
            <div className="heading-section mb-56">
              <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
                <i className="icon-sparkle"></i>
                {dark ? "Clients Testimonials" : "Contact Us"}
              </p>
              <p className="h2 title fw-7 title-animation">
                Let&rsquo;s Turn Ideas into
                <br />
                Intelligence cares
              </p>
            </div>
            <p className="text-section ff-2 title-animation">
              We&rsquo;re here to help you take your business to the next level
              with smart, reliable IT solutions whether have questions
            </p>

            <div className="list-card-contact d-flex g-20 align-items-center flex-wrap">
              <div className="contact-card tf-animate-1">
                <div className="top-card d-flex align-items-center g-10">
                  <i className="icon-send"></i>
                  <p className="title-card text-body-2 letter-space--2 fw-5 ff-2">
                    Send Us Email
                  </p>
                </div>
                <a
                  href="mailto:agentra@gmail.com"
                  className="link text-body-2 letter-space--3 fw-6"
                >
                  agentra@gmail.com
                </a>
              </div>

              <div className={`contact-card style-color-bg-1${dark ? " style-dark" : ""} tf-animate-1`}>
                <div className="top-card d-flex align-items-center g-10">
                  <i className="icon-phone-outgoing"></i>
                  <p className="title-card text-body-2 letter-space--2 fw-5 ff-2">
                    Need help!
                  </p>
                </div>
                <a
                  href="tel:+12125551234"
                  className="link text-body-2 letter-space--3 fw-6"
                >
                  +1 (212) 555-1234
                </a>
              </div>
            </div>
          </div>

          <ConsultingForm className={dark ? "right style-dark" : "right"} />
        </div>
      </div>
    </section>
  );
}
