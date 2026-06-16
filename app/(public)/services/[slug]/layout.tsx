import type { Metadata } from "next";
import { createServiceMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metadata = createServiceMetadata(slug);

  if (!metadata) {
    notFound();
  }

  return metadata;
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
