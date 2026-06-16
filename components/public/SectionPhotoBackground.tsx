import Image from "next/image";
import { cn } from "@/lib/utils";

const variants = {
  hero: {
    src: "/hero.png",
    gradient:
      "bg-gradient-to-br from-[rgba(10,15,30,0.82)] via-[rgba(15,23,42,0.72)] to-[rgba(10,15,30,0.88)]",
  },
  surgery: {
    src: "/surgery.png",
    gradient: "bg-gradient-to-br from-[rgba(10,15,30,0.9)] to-[rgba(15,23,42,0.85)]",
  },
} as const;

type Variant = keyof typeof variants;

interface SectionPhotoBackgroundProps {
  variant: Variant;
  priority?: boolean;
  className?: string;
}

export default function SectionPhotoBackground({
  variant,
  priority = false,
  className,
}: SectionPhotoBackgroundProps) {
  const { src, gradient } = variants[variant];

  return (
    <div className={cn("absolute inset-0 -z-10", className)} aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className={cn("absolute inset-0", gradient)} />
    </div>
  );
}
