import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceBySlug, serviceSlugs } from "@/lib/data/service-pages";
import { buildFaqPageSchema, buildBreadcrumbSchema, buildMedicalWebPageSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";
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

  const pageUrl = `${siteConfig.url}/services/${slug}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "الخدمات", url: `${siteConfig.url}/services` },
    { name: service.h1.ar, url: pageUrl },
  ]);

  return (
    <>
      <JsonLd
        data={[
          buildMedicalWebPageSchema({
            name: service.h1.ar,
            description: service.intro.ar,
            url: pageUrl,
          }),
          buildFaqPageSchema(service.faqs),
          breadcrumbSchema,
        ]}
      />
      <ServicePageContent service={service} />
    </>
  );
}
