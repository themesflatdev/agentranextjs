import { notFound } from "next/navigation";
import ProjectDetailPageBody from "@/components/project/ProjectDetailPageBody";
import { projects } from "@/data/projects";
import { projectsStyle3 } from "@/data/projectsStyle3";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

// Two independent data sources can both link here (project-1/Home's grid via
// projects.ts, project-2's style-3 grid via projectsStyle3.ts), so static
// params and the slug lookup both need to check either one.
export function generateStaticParams() {
  return [...projects.map((project) => ({ slug: project.slug })), ...projectsStyle3.map((project) => ({ slug: project.slug }))];
}

// project-details.html has only ONE body-content demo shared by every
// project — same situation already handled for service-details, so only the
// page title/breadcrumb (and Next/Prev nav) actually vary per slug (see
// ProjectDetailContent for the shared static content).
export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug) ?? projectsStyle3.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageBody projectTitle={project.title} currentSlug={slug} />;
}
