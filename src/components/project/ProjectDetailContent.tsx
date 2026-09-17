import Image from "next/image";

// project-details.html ships only ONE body-content demo shared by every
// project (both projects.ts and projectsStyle3.ts entries) — same situation
// already handled for ServiceDetailContent, so this renders identical
// static content regardless of which slug the page was reached through.
export default function ProjectDetailContent() {
  return (
    <div className="col-xl-8">
      <div className="detail-content mb-50">
        <h2 className="title title-1 fw-6 color-title mb-50">
          AI and data-driven insights to help businesses forecast trends, monitor performance, and make smarter strategic decisions.
        </h2>
        <p className="desc desc-1 ff-2 color-paragraph">
          A Predictive Analytics Dashboard leverages advanced AI algorithms to transform complex data into clear, actionable insights that support smarter business planning. It helps organizations identify patterns, anticipate future outcomes, and optimize decision-making processes. With real-time analytics and intuitive visualizations, businesses can improve performance, reduce uncertainty, and stay ahead of market trends.
        </p>
      </div>

      <div className="image-details mb-50">
        <Image
          src="/assets/images/section/img-s-project-details-1.jpg"
          alt="Image"
          width={850}
          height={500}
        />
      </div>

      <div className="detail-content mb-70">
        <h2 className="title fw-6 color-title mb-30">Our Proven Approach to Delivering AI-Powered Solutions</h2>
        <p className="desc desc-2 color-paragraph ff-2 mb-50">
          A Predictive Analytics Dashboard empowers businesses to make data-informed decisions by analyzing past performance and current trends to forecast future outcomes. It simplifies complex datasets into easy-to-understand visual reports, helping teams identify opportunities, reduce risks, and improve operational efficiency for sustainable growth and competitive advantage.
        </p>
        <div className="list-features-item d-flex flex-wrap mb-50">
          <div className="features-item-details">
            <p className="title h3 fw-6 color-title mb-15">1. Discovery &amp; Research</p>
            <p className="text ff-2 color-paragraph">Customized strategies and digital solutions designed to match business goals.</p>
          </div>
          <div className="features-item-details">
            <p className="title h3 fw-6 color-title mb-15">2. Strategy &amp; Planning</p>
            <p className="text ff-2 color-paragraph">Our team designs clear roadmap, selecting the best technologies and scalable.</p>
          </div>
        </div>
        <div className="list-features-item d-flex flex-wrap">
          <div className="features-item-details">
            <p className="title h3 fw-6 color-title mb-15">3. Design &amp; Development</p>
            <p className="text ff-2 color-paragraph">We build intelligent user performance AI solutions with a focus functionality.</p>
          </div>
          <div className="features-item-details">
            <p className="title h3 fw-6 color-title mb-15">4. Testing &amp; Deployment</p>
            <p className="text ff-2 color-paragraph">We rigorously test every solution to ensure quality, then deploy it seamlessly.</p>
          </div>
        </div>
      </div>

      <div className="list-img d-flex g-30 mb-50">
        <div className="image-details">
          <Image
            src="/assets/images/section/img-s-project-details-2.jpg"
            alt="Image"
            width={410}
            height={430}
          />
        </div>
        <div className="image-details">
          <Image
            src="/assets/images/section/img-s-project-details-3.jpg"
            alt="Image"
            width={410}
            height={430}
          />
        </div>
      </div>

      <div className="detail-content">
        <h2 className="title title-1 fw-6 color-title mb-30">A Structured Approach to AI Innovation &amp; Implementation</h2>
        <p className="desc desc-2 ff-2 color-paragraph mb-30">
          Our approach is built on a clear and structured process that ensures every AI solution is delivered with precision and impact. From understanding your business needs to designing, developing, and deploying intelligent systems, we focus on creating scalable and efficient solutions that drive real results.
        </p>
        <p className="desc desc-2 ff-2 color-paragraph">
          A Predictive Analytics Dashboard empowers businesses to make data-informed decisions by analyzing past performance and current trends to forecast future outcomes. It simplifies complex datasets into easy-to-understand visual reports, helping teams identify opportunities, reduce risks, and improve operational efficiency for sustainable growth and competitive advantage.
        </p>
      </div>
    </div>
  );
}
