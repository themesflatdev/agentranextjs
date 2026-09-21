import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectsStyle3 } from "@/data/projectsStyle3";

interface NextPrevProjectProps {
  currentSlug: string;
}

// project-details.html hardcodes 2 fixed project names/images for Prev/Next
// regardless of which project you're viewing — this instead computes real
// neighbors from whichever data source currentSlug actually belongs to.
// project-2's cards (projectsStyle3.ts) link into project-details too, so
// both arrays need to be searched — using only projects.ts left every
// project-2 → project-details visit with currentIndex -1, hiding Prev/Next
// entirely and leaving just the grid icon. First/last items in either array
// just hide the missing side, rather than wrapping around or crossing over
// into the other array.
export default function NextPrevProject({ currentSlug }: NextPrevProjectProps) {
  const list: { slug: string; image: string; title: string }[] = projects.some(
    (project) => project.slug === currentSlug
  )
    ? projects
    : projectsStyle3;

  const currentIndex = list.findIndex((project) => project.slug === currentSlug);
  const prevProject = currentIndex > 0 ? list[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex !== -1 && currentIndex < list.length - 1 ? list[currentIndex + 1] : undefined;

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
      ) : null}

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
      ) : null}
    </div>
  );
}
