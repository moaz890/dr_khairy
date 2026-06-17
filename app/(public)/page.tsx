import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema, buildPhysicianSchema } from "@/lib/seo/schema";
import HomePageContent from "./HomePageContent";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata("home");
}

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness schemas for both clinic locations */}
      <JsonLd data={buildLocalBusinessSchema()} />
      {/* Physician schema for E-E-A-T signals */}
      <JsonLd data={buildPhysicianSchema()} />
      <HomePageContent />
    </>
  );
}
