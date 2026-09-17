import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import Pagination from "@/components/common/Pagination";

// project-1.html's 8-card grid, in source order — pulled by slug (not
// slice/filter) since projects.ts also holds home's swiper duplicates and
// ai-startup's "style-2" case studies interleaved in the same array.
const PROJECT_1_SLUGS = [
  "ai-content-generator-platform-2",
  "predictive-sales-analytics-dashboard-2",
  "ai-powered-content-generation",
  "ai-chatbot-virtual-assistant-platform",
  "smart-customer-support-automation",
  "predictive-analytics-dashboard",
  "personalized-ai-learning-platform",
  "predictive-sales-analytics-dashboard-3",
];

const project1Items = PROJECT_1_SLUGS.map(
  (slug) => projects.find((project) => project.slug === slug)!
);

export default function ProjectListSection() {
  return (
    <section className="section-project flat-spacing-1">
      <div className="container">
        <div className="heading-section d-flex align-items-center justify-content-between rg-15 flex-wrap mb-50">
          <div className="left">
            <p className="text-body-1 fw-5 letter-space--2 ff-2 sub-title mb-10">
              <i className="icon-sparkle"></i>
              Case Studies
            </p>
            <p className="h2 title fw-7">Featured Projects</p>
          </div>
          <div className="right">
            <Link href="/project-1" className="tf-btn style-big style-color-black border-radius-30">
              <span className="text-btn">View All Projects</span>
              <span className="icon-btn">
                <i className="icon-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="row rg-30">
          {project1Items.map((project) => (
            <div className="col-lg-6" key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="container">
          <Pagination centered />
        </div>
      </div>
    </section>
  );
}
