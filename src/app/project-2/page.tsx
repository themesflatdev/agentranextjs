import type { Metadata } from "next";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ProjectListStyle3Section from "@/components/project/ProjectListStyle3Section";

export const metadata: Metadata = {
  title: "Projects (Style 2)",
  description:
    "Explore Agentra's AI data solutions and machine learning projects in an alternate portfolio grid layout.",
};

export default function Project2Page() {
  return (
    <>
      <PageTitleBanner title="Projects" breadcrumbLabel="Projects" bgImage="/assets/images/page-title/page-title.jpg" />
      <div className="main-content">
        <ProjectListStyle3Section />
      </div>
    </>
  );
}
