import { Fragment } from "react";
import Image from "next/image";

interface ProcessStep2 {
  number: string;
  title: string;
  lines: string[];
}

// Static display only — unlike ProcessSection (home page), this section has
// no horizontal-accordion/carousel behavior in the original, just 3 fixed
// columns, so no data file or client state is needed.
const PROCESS_STEPS_2: ProcessStep2[] = [
  {
    number: "01",
    title: "Research & Planning",
    lines: [
      "We understand your business needs, analyze",
      "market opportunities, and create a strategic",
      "roadmap for your AI solution.",
    ],
  },
  {
    number: "02",
    title: "AI Design & Develop",
    lines: [
      "Our experts design user-friendly experiences",
      "and build intelligent AI systems tailored to your",
      "business goals.",
    ],
  },
  {
    number: "03",
    title: "Deployment & Growth",
    lines: [
      "We launch, optimize, and continuously improve",
      "your AI solution to ensure performance,",
      "scalability, and long-term success.",
    ],
  },
];

interface ProcessStaticSectionProps {
  dark?: boolean;
  /** Wrapper spacing class — independent of `dark`: /service uses
   *  "flat-spacing-1" (same as ai-startup-dark's) while keeping plain
   *  (non-`style-dark`) items, confirmed by diffing service.html directly.
   *  Defaults to what `dark` already implied before this prop existed. */
  spacing?: "1" | "5";
  /** ai-startup(-dark)'s Process section has the shape-s-services-h2.png
   *  background; service.html's doesn't — confirmed directly, not just a
   *  spacing difference. */
  showShape?: boolean;
}

export default function ProcessStaticSection({
  dark = false,
  spacing = dark ? "1" : "5",
  showShape = true,
}: ProcessStaticSectionProps) {
  return (
    <section className={`section-process h-2 flat-spacing-${spacing}`}>
      {showShape && (
        <div className="img-shape">
          <Image
            src="/assets/images/section/shape-s-services-h2.png"
            alt="Image"
            width={1150}
            height={1150}
          />
        </div>
      )}
      <div className="container">
        <div className="heading-section style-center heading-h2 mb-70">
          <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10 title-animation">
            <i className="icon-sparkle"></i>
            Working Process
            <i className="icon-sparkle"></i>
          </p>
          <p className="h2 title fw-6 title-animation">
            Designing the Future Through
            <br />
            Smart Processes
          </p>
        </div>
        <div className="list-process-item d-flex justify-content-between g-30">
          <div className="line"></div>
          {PROCESS_STEPS_2.map((step) => (
            <div className={`process-item${dark ? " style-dark" : ""}`} key={step.number}>
              <div className="number-process">
                <span className="text-title-2 fw-6 letter-space--3">{step.number}</span>
              </div>
              <a href="#" className="title h3 fw-6">
                {step.title}
              </a>
              <p className="desc ff-2">
                {step.lines.map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    {index < step.lines.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
