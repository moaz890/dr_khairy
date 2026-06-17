import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogSlugs } from "@/lib/data/blog";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo/config";
import { buildArticleSchema, buildMedicalWebPageSchema, buildBreadcrumbSchema } from "@/lib/seo/schema";
import BlogArticleContent from "./BlogArticleContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const url = `${siteConfig.url}/blog/${slug}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "الرئيسية", url: siteConfig.url },
    { name: "المدونة", url: `${siteConfig.url}/blog` },
    { name: post.title.ar, url },
  ]);

  return (
    <>
      <JsonLd
        data={[
          buildMedicalWebPageSchema({
            name: post.title.en,
            description: post.excerpt.en,
            url,
          }),
          buildArticleSchema({
            headline: post.title.en,
            description: post.excerpt.en,
            url,
            datePublished: post.date,
          }),
          breadcrumbSchema,
        ]}
      />
      <BlogArticleContent slug={slug} />
    </>
  );
}
