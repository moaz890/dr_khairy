import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("videos");
}

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
