import Image from "next/image";
import Link from "next/link";

interface NavbarLogoProps {
  href: string;
  name: string;
  title: string;
  scrolled: boolean;
  logoAlt: string;
}

export default function NavbarLogo({
  href,
  name,
  title,
  scrolled,
  logoAlt,
}: NavbarLogoProps) {
  return (
    <Link href={href} className="flex items-center gap-2 group shrink-0">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md group-hover:opacity-80 transition-opacity">
        <Image
          src="/logo.jpg"
          alt={logoAlt}
          fill
          sizes="80px"
          className="object-cover"
          priority
        />
      </div>
      <div className="hidden sm:block max-w-[11rem] md:max-w-[13rem] lg:max-w-none lg:min-w-0">
        <p
          className={`font-bold text-sm leading-tight transition-colors duration-300 truncate ${
            scrolled ? "text-slate-900" : "text-slate-600"
          }`}
        >
          {name}
        </p>
        <p
          className={`text-xs transition-colors duration-300 line-clamp-1 ${
            scrolled ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
}
