import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { buildPhysicianSchema } from "@/lib/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("about");
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={buildPhysicianSchema()} />
      {children}
    </>
  );
}
