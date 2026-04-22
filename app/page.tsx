import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSections from "@/components/FeatureSections";
import FeaturesGrid from "@/components/FeaturesGrid";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <HeroSection />
        <FeatureSections />
        <FeaturesGrid />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
