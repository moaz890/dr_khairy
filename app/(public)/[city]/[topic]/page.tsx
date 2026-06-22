import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import LocalPageContent from "@/components/public/LocalPageContent";
import { clinics } from "@/lib/data/clinics";
import { getLocalPage, localPageParams } from "@/lib/data/local-pages";
import { siteConfig } from "@/lib/seo/config";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildMedicalWebPageSchema,
  getLocalPagePath,
} from "@/lib/seo";

type Props = {
  params: Promise<{ city: string; topic: string }>;
};

export function generateStaticParams() {
  return localPageParams;
}

export default async function LocalSeoPage({ params }: Props) {
  const { city, topic } = await params;
  const page = getLocalPage(city, topic);

  if (!page) {
    notFound();
  }

  const localPath = getLocalPagePath(city, topic);
  const url = `${siteConfig.url}${localPath}`;
  const clinicIndex = clinics.findIndex((c) => c.slug === page.clinicSlug);
  const localBusinessSchemas = buildLocalBusinessSchema();
  const clinicSchema = localBusinessSchemas[clinicIndex] ?? localBusinessSchemas[0];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "العيادات", url: `${siteConfig.url}/clinics` },
    { name: page.h1.ar, url },
  ]);

  return (
    <>
      <JsonLd
        data={[
          clinicSchema,
          buildMedicalWebPageSchema({
            name: page.h1.ar,
            description: page.intro.ar,
            url,
          }),
          buildFaqPageSchema(page.faqs),
          breadcrumbSchema,
        ]}
      />
      <LocalPageContent page={page} />
    </>
  );
}
