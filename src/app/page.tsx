import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <Navigation />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
}
