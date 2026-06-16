import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("services");
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
