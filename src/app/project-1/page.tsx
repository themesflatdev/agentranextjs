import type { Metadata } from "next";
import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ProjectListSection from "@/components/project/ProjectListSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Agentra's portfolio of AI-powered projects, from content generation platforms to predictive analytics dashboards.",
};

export default function Project1Page() {
  return (
    <>
      <PageTitleBanner title="Projects" breadcrumbLabel="Projects" bgImage="/assets/images/page-title/page-title.jpg" />
      <div className="main-content">
        <ProjectListSection />
      </div>
    </>
  );
}
