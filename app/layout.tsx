import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
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
  title: {
    default: "Prof. Dr. Mohammed Rabea Khairy — ENT Surgeon & Rhinoplasty Specialist",
    template: "%s | Prof. Dr. Mohammed Rabea Khairy",
  },
  description:
    "Official website of Prof. Dr. Mohammed Rabea Khairy — Consultant ENT surgeon and rhinoplasty specialist at Cairo University. Specializing in endoscopic sinus surgery, rhinoplasty, tonsillectomy, tympanoplasty, and snoring treatment. Clinics in New Cairo and Zagazig.",
  keywords: [
    "Dr Mohammed Rabea Khairy",
    "ENT Surgeon Cairo",
    "Rhinoplasty Egypt",
    "Endoscopic Sinus Surgery",
    "ENT Specialist Egypt",
    "Cairo University ENT",
    "أ.د. محمد ربيع خيري",
    "جراحة الأنف والأذن القاهرة",
    "تجميل الأنف مصر",
  ],
  authors: [{ name: "Prof. Dr. Mohammed Rabea Khairy" }],
  icons: {
    icon: [{ url: "/logo.jpg", type: "image/jpeg" }],
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Prof. Dr. Mohammed Rabea Khairy",
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
