import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/seo/schema";
import HomePageContent from "./HomePageContent";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("home");
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusinessSchema()} />
      <HomePageContent />
    </>
  );
}
