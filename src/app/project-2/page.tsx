import PageTitleBanner from "@/components/sections/PageTitleBanner";
import ProjectListStyle3Section from "@/components/project/ProjectListStyle3Section";

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
