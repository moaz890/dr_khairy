import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("conferences");
}

export default function ConferencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
