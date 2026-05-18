import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SignatureDestinations from "@/components/home/SignatureDestinations";
import WhyInvestOman from "@/components/home/WhyInvestOman";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import InvestorJourney from "@/components/home/InvestorJourney";
import TrustSection from "@/components/home/TrustSection";
import FinalCTA from "@/components/home/FinalCTA";
import OurPartners from "@/components/home/OurPartners";
import ChooseProperty from "@/components/home/ChooseProperty";
import TopCommunities from "@/components/home/TopCommunities";
import WhoWeAre from "@/components/home/WhoWeAre";
import BuySellSection from "@/components/home/BuySellSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <Hero />
      <OurPartners />
      <SignatureDestinations />
      <WhyInvestOman />
      

       <TopCommunities />
      <ChooseProperty />
     
      <WhoWeAre />
      <BuySellSection />

      <InvestorJourney />
      <TrustSection />
      <FeaturedProperties />
      <FinalCTA />

      <Footer />
    </main>
  );
}
