import { notFound } from "next/navigation";
import { getVideoBySlug, videoSlugs } from "@/lib/data/videos";
import VideoDetailContent from "./VideoDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return videoSlugs.map((slug) => ({ slug }));
}

export default async function VideoDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!getVideoBySlug(slug)) {
    notFound();
  }

  return <VideoDetailContent slug={slug} />;
}
