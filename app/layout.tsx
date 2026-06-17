import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { siteConfig } from "@/lib/seo/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle.ar,
    template: `%s | ${siteConfig.shortName.ar}`,
  },
  description: siteConfig.defaultDescription.ar,
  authors: [{ name: siteConfig.name.en }],
  creator: siteConfig.name.en,
  publisher: siteConfig.name.en,
  icons: {
    icon: [{ url: "/logo.jpg", type: "image/jpeg" }],
    apple: "/logo.jpg",
  },
  verification: {
    google: "nhhQIouJ78TwnFBgw5WSY3yiXIjVaqAnFrFPd1tg5d4",
  },
  // Global OG fallback — overridden per page by generateMetadata()
  openGraph: {
    siteName: siteConfig.name.ar,
    locale: siteConfig.localeOpenGraph.ar,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.defaultTitle.ar,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drrabiekhairy",
    creator: "@drrabiekhairy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang/dir are set dynamically on client via LanguageContext
    // Default is Arabic (primary market) for correct Google Egypt targeting
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
