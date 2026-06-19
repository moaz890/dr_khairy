import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVideoBySlug } from "@/lib/data/videos";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  return buildMetadata({
    path: `/videos/${slug}`,
    title: {
      ar: `${video.title.ar} | د. محمد ربيع خيري`,
      en: `${video.title.en} | Dr. Mohammed Rabea Khairy`,
    },
    description: video.description,
    priority: 0.6,
    changeFrequency: "monthly",
  });
}

export default function VideoSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
