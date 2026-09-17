import Image from "next/image";
import { whyBoxIcons } from "@/data/about";

export default function WhySection() {
  return (
    <section className="section-why p-about flat-spacing-6">
      <div className="container w-1810">
        <div className="section-why-inner d-flex">
          <div className="image tf-animate-1">
            <Image
              src="/assets/images/section/img-s-why-p-about.jpg"
              alt="Image"
              width={875}
              height={900}
            />
          </div>

          <div className="section-content">
            <div className="heading-section mb-50">
              <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 wow fadeInUp">
                <i className="icon-sparkle"></i>
                What We Do
              </p>
              <p className="h2 title fw-6 wow fadeInUp">
                Next-generation fast AI helps businesses remain competitive while driving faster innovation.
              </p>
            </div>
            <p className="text-section ff-2 color-paragraph wow fadeInUp">
              We combine advanced artificial intelligence, modern design, and cutting edge technology to create scalable products tailored to your business needs. With a focus on quality, performance, and user experience
            </p>
            <div className="list-box-icon d-flex justify-content-between g-20">
              {whyBoxIcons.map((box, index) => (
                <div
                  className="box-icon wow fadeInUp"
                  data-wow-delay={index === 1 ? ".2s" : undefined}
                  key={box.name}
                >
                  <div className="icon">
                    <Image src={box.icon} alt="Image" width={box.iconWidth} height={box.iconHeight} />
                  </div>
                  <a href="#" className="name-box h3 fw-6">
                    {box.name}
                  </a>
                  <div className="desc ff-2">{box.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
