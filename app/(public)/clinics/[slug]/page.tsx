import { notFound } from "next/navigation";
import { clinics, getClinicBySlug } from "@/lib/data/clinics";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo/config";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "@/lib/seo/schema";
import ClinicDetailContent from "./ClinicDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-render all clinic pages at build time for maximum indexability
export function generateStaticParams() {
  return clinics.map((clinic) => ({ slug: clinic.slug }));
}

export default async function ClinicDetailPage({ params }: Props) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  // Inject the specific clinic's LocalBusiness schema
  const allSchemas = buildLocalBusinessSchema();
  const clinicIndex = clinics.findIndex((c) => c.slug === slug);
  const clinicSchema = allSchemas[clinicIndex] ?? allSchemas[0];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "العيادات", url: `${siteConfig.url}/clinics` },
    { name: clinic.branch.ar, url: `${siteConfig.url}/clinics/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[clinicSchema, breadcrumbSchema]} />
      <ClinicDetailContent slug={slug} />
    </>
  );
}
