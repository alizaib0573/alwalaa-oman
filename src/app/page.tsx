import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SignatureDestinations from "@/components/home/SignatureDestinations";
import WhyInvestOman from "@/components/home/WhyInvestOman";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import InvestorJourney from "@/components/home/InvestorJourney";
import TrustSection from "@/components/home/TrustSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <Hero />
      <SignatureDestinations />
      <WhyInvestOman />
      <FeaturedProperties />
      <InvestorJourney />
      <TrustSection />
      <FinalCTA />

      <Footer />
    </main>
  );
}
