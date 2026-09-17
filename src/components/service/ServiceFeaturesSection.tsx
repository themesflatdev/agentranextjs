import Image from "next/image";
import AutomationIcon from "@/components/icons/AutomationIcon";
import DataInsightsIcon from "@/components/icons/DataInsightsIcon";
import NlpIcon from "@/components/icons/NlpIcon";

// Same features-card/features-card-2/middel-icon markup and icon components
// as home/FeaturesSection.tsx (confirmed identical by diffing index.html vs
// service.html directly, down to the raw SVGs) — only the section wrapper
// and heading layout differ here (no section-line/tf-animate-*, split
// left/right heading with an extra description paragraph), so those two
// pieces are new while the icon components are reused as-is.
export default function ServiceFeaturesSection() {
  return (
    <section className="section-features h-1 p-service flat-spacing-1">
      <div className="container">
        <div className="heading-section d-flex align-items-center justify-content-between rg-15 flex-wrap mb-50">
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
              <i className="icon-sparkle"></i>
              Powerful AI Capabilities
              <i className="icon-sparkle"></i>
            </p>
            <p className="h2 title fw-7 title-animation">
              Transforming Ideas with
              <br />
              Intelligent Features
            </p>
          </div>
          <div className="right">
            <p className="text-heading ff-2 color-paragraph title-animation">
              Through dedication to delivering intelligent digital solutions and exceptional user experiences, we have earned recognition for our contributions to AI development, automation.
            </p>
          </div>
        </div>

        <div className="features-content g-10">
          <div className="features-card flex-grow-1">
            <p className="title h3 fw-6">AI-Powered Automation</p>
            <div className="middel-icon">
              <div className="img-shape">
                <Image
                  src="/assets/images/icon/shape-features-card.png"
                  alt="Image"
                  width={813}
                  height={824}
                />
              </div>
              <div className="icon-item icon-1">
                <AutomationIcon />
              </div>
              <div className="icon-item icon-2">
                <i className="icon-sparkle-2"></i>
              </div>
              <div className="icon-item icon-3">
                <i className="icon-sparkle-3"></i>
              </div>
              <div className="icon-item icon-4">
                <i className="icon-ai-chip"></i>
              </div>
            </div>
            <p className="desc text-body-2 ff-2">
              Streamline repetitive tasks and boost efficiency with intelligent workflows.
            </p>
          </div>

          <div className="d-flex g-10 flex-column flex-grow-1">
            <div className="features-card-2 flex-grow-1">
              <div className="image-bg">
                <Image
                  src="/assets/images/icon/img-bg-fea-2.png"
                  alt=""
                  fill
                  sizes="(min-width: 992px) 33vw, 100vw"
                />
              </div>
              <div className="card-content">
                <div className="icon">
                  <DataInsightsIcon />
                </div>
                <p className="title h3 fw-6">Data-Driven Insights</p>
                <p className="desc ff-2 text-body-2">
                  Turn complex data into clear, actionable
                  <br />
                  decisions in real time.
                </p>
              </div>
            </div>
            <div className="image">
              <Image
                src="/assets/images/section/img-fea-h1.jpg"
                alt="Image"
                width={417}
                height={232}
              />
            </div>
          </div>

          <div className="features-card flex-grow-1">
            <p className="title h3 fw-6">Natural Language Processing</p>
            <div className="middel-icon">
              <div className="img-shape">
                <Image
                  src="/assets/images/icon/shape-features-card.png"
                  alt="Image"
                  width={813}
                  height={824}
                />
              </div>
              <div className="icon-item icon-1">
                <i className="icon-ai-head"></i>
              </div>

              <div className="icon-item icon-2">
                <NlpIcon />
              </div>
              <div className="icon-item icon-3">
                <i className="icon-ai-search"></i>
              </div>
              <div className="icon-item icon-4">
                <i className="icon-ai-translate"></i>
              </div>
            </div>
            <p className="desc text-body-2 ff-2">
              Natural Language Processing (NLP)
              <br />
              enables machines understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
