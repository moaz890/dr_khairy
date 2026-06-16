import { notFound } from "next/navigation";
import { getClinicBySlug } from "@/lib/data/clinics";
import ClinicDetailContent from "./ClinicDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ClinicDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!getClinicBySlug(slug)) {
    notFound();
  }

  return <ClinicDetailContent slug={slug} />;
}
