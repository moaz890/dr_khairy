import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Navbar from "@/components/public/Navbar";
import SkipLink from "@/components/public/SkipLink";
import ClinicLocations from "@/components/public/ClinicLocations";
import Footer from "@/components/public/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <ClinicLocations />
      <Footer />
    </LanguageProvider>
  );
}
