import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  dark?: boolean;
}

// The ".project-item hover-img" markup shared by home/ProjectsSection's
// swiper slides and project-1's plain grid — extracted here so project-1.md
// doesn't re-type it. Callers own the surrounding grid wrapper (SwiperSlide
// vs. a plain col-lg-6), since that differs between pages.
export default function ProjectCard({ project, dark = false }: ProjectCardProps) {
  return (
    <div className={`project-item hover-img${dark ? " style-dark" : ""}`}>
      <div className="top-item">
        <Link href={`/project-details/${project.slug}`} className="image">
          <Image src={project.image} alt={project.title} width={600} height={350} />
        </Link>
        <div className="meta-project">
          {project.tags.map((tag) => (
            <a href="#" className="meta-item text-caption ff-2 fw-5" key={tag}>
              {tag}
            </a>
          ))}
        </div>
      </div>
      <div className="content-item">
        <Link href={`/project-details/${project.slug}`} className="h3 name-project fw-7">
          {project.title}
        </Link>
        <Link href={`/project-details/${project.slug}`} className="tf-btn-arrow">
          <i className="icon-arrow-up-right"></i>
        </Link>
      </div>
    </div>
  );
}
