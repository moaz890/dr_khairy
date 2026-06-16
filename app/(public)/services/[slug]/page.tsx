import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceBySlug, serviceSlugs } from "@/lib/data/service-pages";
import { buildFaqPageSchema } from "@/lib/seo/schema";
import ServicePageContent from "@/components/public/ServicePageContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { serviceSlugs } = await import("@/lib/data/service-pages");
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildFaqPageSchema(service.faqs)} />
      <ServicePageContent service={service} />
    </>
  );
}
