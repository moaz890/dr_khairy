import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("blog");
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
