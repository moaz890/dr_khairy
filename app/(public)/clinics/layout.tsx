import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("clinics");
}

export default function ClinicsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
