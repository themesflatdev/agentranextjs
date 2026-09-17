import Image from "next/image";
import AutomationIcon from "@/components/icons/AutomationIcon";
import DataInsightsIcon from "@/components/icons/DataInsightsIcon";
import NlpIcon from "@/components/icons/NlpIcon";

interface FeaturesSectionProps {
  /** Not called out in index-dark.html's own component list, but confirmed
   *  by diffing the two source files directly: dark swaps this section's
   *  line-page modifier from "line-2" to "line-1" like every other section
   *  on the page (line-page itself has no other dark-mode difference here). */
  dark?: boolean;
}

export default function FeaturesSection({ dark = false }: FeaturesSectionProps) {
  return (
    <section className="section-features h-1 section-line flat-spacing-1">
      <div className={`line-page ${dark ? "line-1" : "line-2"}`}></div>

      <div className="container">
        <div className="heading-section style-center mb-56">
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
      </div>

      <div className="container w-1302">
        <div className="features-content g-10">
          <div className="features-card flex-grow-1 tf-animate-1">
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
              Streamline repetitive tasks and boost efficiency with
              intelligent workflows.
            </p>
          </div>

          <div className="d-flex g-10 flex-column flex-grow-1">
            <div className="features-card-2 flex-grow-1 tf-animate-2">
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
            <div className="image tf-animate-3">
              <Image
                src="/assets/images/section/img-fea-h1.jpg"
                alt="Image"
                width={417}
                height={232}
              />
            </div>
          </div>

          <div className="features-card flex-grow-1 tf-animate-4">
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
