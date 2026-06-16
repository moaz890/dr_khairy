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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // dir and lang are set dynamically on the client via LanguageContext
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
