import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoPages, type SeoPageKey } from "@/lib/seo/pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const key = `clinics/${slug}` as SeoPageKey;

  if (!(key in seoPages)) {
    notFound();
  }

  return createPageMetadata(key);
}

export default function ClinicSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
