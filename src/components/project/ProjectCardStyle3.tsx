import Image from "next/image";
import Link from "next/link";
import type { ProjectStyle3 } from "@/data/projectsStyle3";

interface ProjectCardStyle3Props {
  project: ProjectStyle3;
}

// project-2.html's ".project-item style-3" markup (big image on top, content
// below) — structurally different from project-1's ".project-item hover-img"
// (image + inline meta row, title + arrow button), so this is its own
// component rather than a variant of ProjectCard.
export default function ProjectCardStyle3({ project }: ProjectCardStyle3Props) {
  return (
    <div className="project-item style-3 hover-img">
      <Link href={`/project-details/${project.slug}`} className="image">
        <Image src={project.image} alt={project.title} width={630} height={430} />
      </Link>
      <div className="item-content">
        <Link href={`/project-details/${project.slug}`} className="h4 name-project fw-7">
          {project.title}
        </Link>
        <div className="meta-post">
          {project.tags.map((tag) => (
            <a href="#" className="meta-item ff-2" key={tag}>
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
