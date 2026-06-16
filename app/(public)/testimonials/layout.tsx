import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("testimonials");
}

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
