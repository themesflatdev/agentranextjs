import Image from "next/image";
import FAQAccordion from "@/components/common/FAQAccordion";
import { faqServiceDetails } from "@/data/faqServiceDetails";

// service-details.html only ships ONE body-content demo (2 text blocks, 2
// images, 4 features-item-details, FAQ) shared by all 6 services — there's
// no per-service copy in the source, so this renders the exact same static
// content regardless of which slug the page was reached through.
export default function ServiceDetailContent() {
  return (
    <div className="col-xl-8">
      <div className="detail-content mb-50">
        <p className="h2 title color-title fw-6 mb-40">
          We have earned recognition for contributions to AI development, automation, & digital solutions.
        </p>
        <p className="desc desc-1 ff-2 color-paragraph">
          Our team has earned recognition for delivering innovative AI development, smart automation, and impactful digital solutions that help businesses grow and adapt in a fast-changing world. Through creativity, advanced technology, and a commitment to excellence,
        </p>
      </div>
      <div className="image-details mb-50">
        <Image
          src="/assets/images/section/img-s-service-details.jpg"
          alt="Image"
          width={850}
          height={500}
        />
      </div>
      <div className="detail-content mb-70">
        <p className="h2 title color-title fw-6 mb-30">
          Our award-winning journey reflects commitment to innovation, creativity, and excellence in AI technology.
        </p>
        <p className="desc desc-2 ff-2 color-paragraph mb-40">
          We are proud to be recognized for our dedication to AI innovation, intelligent automation, and cutting-edge digital solutions. By combining strategic thinking with advanced technologies, we help businesses streamline operations, unlock new opportunities, and create future-ready experiences that deliver lasting value and measurable success.
        </p>
        <div className="features-item-details mb-30">
          <p className="title h3 fw-6 color-title mb-10">Tailored Business Solutions</p>
          <p className="text ff-2 color-paragraph">
            Customized strategies and digital solutions designed to match your unique business goals, industry needs, and long-term growth vision.
          </p>
        </div>
        <div className="features-item-details mb-30">
          <p className="title h3 fw-6 color-title mb-10">Secure & Reliable Technology</p>
          <p className="text ff-2 color-paragraph">
            Built with advanced security standards and dependable technologies to ensure stable performance, data protection, and long-term reliability.
          </p>
        </div>
        <div className="features-item-details mb-30">
          <p className="title h3 fw-6 color-title mb-10">Proven Success Across Industries</p>
          <p className="text ff-2 color-paragraph">
            Successfully delivering innovative solutions across multiple industries with measurable results, trusted partnerships, and long-term client success.
          </p>
        </div>
        <div className="features-item-details">
          <p className="title h3 fw-6 color-title mb-10">Data-Driven Strategy & Insights</p>
          <p className="text ff-2 color-paragraph">
            We use data-driven strategies and actionable insights to guide every decision, helping businesses optimize performance, improve efficiency.
          </p>
        </div>
      </div>

      <div className="image-details mb-50">
        <Image
          src="/assets/images/section/img-s-service-details-2.jpg"
          alt="Image"
          width={850}
          height={500}
        />
      </div>

      <div className="detail-content">
        <p className="h2 title color-title fw-6 mb-30">
          Unlock new opportunities, & create future-ready experiences that deliver lasting value and success.
        </p>
        <p className="desc desc-2 ff-2 color-paragraph mb-50">
          We empower businesses to streamline operations, uncover new growth opportunities, and build future-ready digital experiences that deliver lasting impact, measurable results, and sustainable success. We help organizations simplify their workflows, identify new possibilities for growth, and design innovative, future-ready experiences that create long-term value and drive consistent, measurable success.
        </p>

        <FAQAccordion
          items={faqServiceDetails}
          defaultOpenIndex={1}
          className="no-bg g-10"
          itemClassName="style-2"
          headerFontWeight="fw-6"
        />
      </div>
    </div>
  );
}
