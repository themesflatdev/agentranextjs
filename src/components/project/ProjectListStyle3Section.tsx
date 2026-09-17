import Link from "next/link";
import { projectsStyle3 } from "@/data/projectsStyle3";
import ProjectCardStyle3 from "@/components/project/ProjectCardStyle3";
import Pagination from "@/components/common/Pagination";

// project-2.html splits its 6 cards into two 3-item columns (1st/2nd/3rd
// left, 4th/5th/6th right) rather than a single 6-item row — confirmed
// directly against the source.
const LEFT_COLUMN = projectsStyle3.slice(0, 3);
const RIGHT_COLUMN = projectsStyle3.slice(3, 6);

export default function ProjectListStyle3Section() {
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
          <div className="col-lg-6">
            <div className="list-project d-flex flex-column g-30">
              {LEFT_COLUMN.map((project) => (
                <ProjectCardStyle3 project={project} key={project.slug} />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-project d-flex flex-column g-30">
              {RIGHT_COLUMN.map((project) => (
                <ProjectCardStyle3 project={project} key={project.slug} />
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <Pagination centered />
        </div>
      </div>
    </section>
  );
}
