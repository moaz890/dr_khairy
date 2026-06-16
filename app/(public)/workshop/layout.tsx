import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("workshop");
}

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
