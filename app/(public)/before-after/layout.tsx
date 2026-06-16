import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("beforeAfter");
}

export default function BeforeAfterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
