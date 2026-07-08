import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyItMatters from "@/components/WhyItMatters";
import FeaturesGrid from "@/components/FeaturesGrid";
import AIFeatures from "@/components/AIFeatures";
import WhoUsesIt from "@/components/WhoUsesIt";
import SecuritySection from "@/components/SecuritySection";
import ComparisonTable from "@/components/ComparisonTable";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyItMatters />
        <FeaturesGrid />
        <AIFeatures />
        <WhoUsesIt />
        <SecuritySection />
        <ComparisonTable />
        <Screenshots />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
