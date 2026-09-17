import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ProjectListSection from "@/components/project/ProjectListSection";

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
