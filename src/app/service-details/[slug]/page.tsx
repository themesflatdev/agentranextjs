import { notFound } from "next/navigation";
import ServiceDetailPageBody from "@/components/service/ServiceDetailPageBody";
import { servicesHome2 } from "@/data/servicesHome2";

interface ServiceDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesHome2.map((service) => ({ slug: service.slug }));
}

// service-details.html has only ONE body-content demo shared by all 6
// services — only the page title/breadcrumb actually change per slug (see
// ServiceDetailContent for the shared static content).
export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { slug } = await params;
  const service = servicesHome2.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPageBody serviceName={service.name} />;
}
