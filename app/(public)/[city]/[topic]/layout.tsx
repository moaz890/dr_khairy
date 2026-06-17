import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalPage } from "@/lib/data/local-pages";
import { createLocalPageMetadata } from "@/lib/seo/metadata";

type MetadataProps = {
  params: Promise<{ city: string; topic: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { city, topic } = await params;
  const metadata = createLocalPageMetadata(city, topic);

  if (!metadata) {
    notFound();
  }

  return metadata;
}

export default function LocalPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
