import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/data/blog";
import { createBlogArticleMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return createBlogArticleMetadata({
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    publishedTime: post.date,
  });
}

export default function BlogArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
