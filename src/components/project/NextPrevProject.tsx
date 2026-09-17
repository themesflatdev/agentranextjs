import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

interface NextPrevProjectProps {
  currentSlug: string;
}

// project-details.html hardcodes 2 fixed project names/images for Prev/Next
// regardless of which project you're viewing — this instead computes real
// neighbors from projects.ts's own order. Only projects.ts defines a
// meaningful sequence for this (projectsStyle3.ts's 6 entries are
// interchangeable demo duplicates with no order that matters), so a slug
// from projectsStyle3.ts simply has no position here and both buttons hide.
// First/last items in projects.ts likewise just hide the missing side,
// rather than wrapping around.
export default function NextPrevProject({ currentSlug }: NextPrevProjectProps) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex !== -1 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : undefined;

  return (
    <div className="next-prev-details d-flex align-items-center justify-content-between g-30">
      {prevProject ? (
        <div className="project-list-item">
          <Link href={`/project-details/${prevProject.slug}`} className="image">
            <Image src={prevProject.image} alt={prevProject.title} width={100} height={100} />
          </Link>
          <div className="item-content">
            <Link
              href={`/project-details/${prevProject.slug}`}
              className="text-body-1 letter-space--3 text-item fw-6 mb-20"
            >
              {prevProject.title}
            </Link>
            <Link href={`/project-details/${prevProject.slug}`} className="tf-btn-next-prev text-caption fw-6">
              Prev <i className="icon-chevron-right"></i>
            </Link>
          </div>
        </div>
      ) : (
        <div />
      )}

      <Link href="/project-1" className="icon">
        <i className="icon-grid"></i>
      </Link>

      {nextProject ? (
        <div className="project-list-item">
          <Link href={`/project-details/${nextProject.slug}`} className="image">
            <Image src={nextProject.image} alt={nextProject.title} width={100} height={100} />
          </Link>
          <div className="item-content">
            <Link
              href={`/project-details/${nextProject.slug}`}
              className="text-body-1 letter-space--3 text-item fw-6 mb-20"
            >
              {nextProject.title}
            </Link>
            <Link href={`/project-details/${nextProject.slug}`} className="tf-btn-next-prev text-caption fw-6">
              Next <i className="icon-chevron-right"></i>
            </Link>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
