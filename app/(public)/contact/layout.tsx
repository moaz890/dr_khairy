import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("contact");
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
