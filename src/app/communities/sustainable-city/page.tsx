'use client';

import React from 'react';
import LuxHero from '@/components/communities/primitives/LuxHero';
import LuxEditorial from '@/components/communities/primitives/LuxEditorial';
import LuxStatGrid from '@/components/communities/primitives/LuxStatGrid';
import LuxInvestmentCard from '@/components/communities/primitives/LuxInvestmentCard';
import LuxGallery from '@/components/communities/primitives/LuxGallery';
import LuxTimeline from '@/components/communities/primitives/LuxTimeline';
import LuxFAQ from '@/components/communities/primitives/LuxFAQ';
import LuxLocationMap from '@/components/communities/primitives/LuxLocationMap';
import LuxCTA from '@/components/communities/primitives/LuxCTA';
import LuxFeaturedProperties from '@/components/communities/primitives/LuxFeaturedProperties';
import LuxRelatedCommunities from '@/components/communities/primitives/LuxRelatedCommunities';
import { Leaf, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMMUNITIES_DATA } from '@/data/communities';

export default function SustainableCityPage() {
  const relatedCommunities = Object.entries(COMMUNITIES_DATA).map(([slug, data]) => ({
    slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    image: data.hero.bannerImage,
  }));

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <LuxHero
        title="Sustainable City"
        tagline="ECO-INNOVATION • ZERO-CARBON LUXURY"
        description="A bold experiment in living. Where the highest standards of luxury are harmonized with the most advanced environmental technologies on the planet."
        image="/p2.jpg"
        primaryCta={{ text: "Explore Green Estates", href: "/properties?communities=Sustainable%20City" }}
        secondaryCta={{ text: "Sustainability Report", href: "#contact" }}
      />

      <LuxEditorial
        badge="The Green Manifesto"
        title="Luxury Without Compromise"
        content="The Sustainable City is a proof of concept: that absolute luxury does not have to cost the earth. By integrating solar energy, water reclamation, and native landscaping into the very fabric of the architecture, we have created a sanctuary that is as responsible as it is refined."
        image="/p4.jpg"
      />

      <LuxStatGrid
        title="The Efficiency Metrics"
        subtitle="Quantifying the impact of sustainable luxury."
        stats={[
          { label: "Carbon Footprint", value: "Zero", unit: "Net" },
          { label: "Energy Savings", value: "40", unit: "%" },
          { label: "Green Space", value: "50", unit: "%" },
          { label: "Investment Score", value: "9.1", unit: "/10" },
        ]}
      />

      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              Investing in <span className="text-gold italic">Tomorrow</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LuxInvestmentCard
              icon={TrendingUp}
              title="The Green Premium"
              description="Global demand for sustainable assets is skyrocketing. Eco-certified luxury properties command higher premiums and faster resale."
            />
            <LuxInvestmentCard
              icon={Zap}
              title="Zero OpEx"
              description="Dramatic reductions in utility costs through integrated solar and energy-efficient design increase the net rental yield."
            />
            <LuxInvestmentCard
              icon={Leaf}
              title="Future-Proofing"
              description="As regulations shift toward carbon neutrality, the Sustainable City is already ahead, eliminating future retrofitting risks."
            />
            <LuxInvestmentCard
              icon={ShieldCheck}
              title="Ethical Prestige"
              description="Owning a piece of the future provides an unmatched level of prestige associated with environmental leadership."
            />
          </div>
        </div>
      </div>

      <LuxEditorial
        reverse
        badge="Pure Living"
        title="Harmony with Nature"
        content="Experience a lifestyle where the air is cleaner, the spaces are brighter, and the connection to nature is absolute. From the organic gardens that provide fresh produce to the serene walking trails that meander through the city, we have redefined luxury as the ability to live in total balance."
        image="/p1.jpg"
      />

      <LuxFeaturedProperties
        communitySlug="sustainable-city"
        title="Eco-Luxury Estates"
      />

      <LuxTimeline
        title="The Roadmap to Zero"
        items={[
          { year: "The Concept", title: "Ideation", description: "The vision to create Oman's first fully sustainable urban center.", type: 'past' },
          { year: "The Launch", title: "Infrastructure", description: "Deployment of the solar-grid and water reclamation systems.", type: 'present' },
          { year: "The Horizon", title: "Net-Zero", description: "Achieving full carbon neutrality and global certification.", type: 'future' },
        ]}
      />

      <LuxGallery
        title="Sustaining Beauty"
        images={["/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg", "/p5.jpg", "/p6.jpg"]}
      />

      <LuxLocationMap
        title="The Green Heart"
        center={{ lat: 23.55, lng: 58.40 }}
        landmarks={[
          { name: "Muscat City Centre", distance: "10 km", time: "12 mins" },
          { name: "Botanical Gardens", distance: "2 km", time: "5 mins" },
          { name: "International Airport", distance: "15 km", time: "15 mins" },
          { name: "Sustainable Hub", distance: "0 km", time: "0 mins" },
        ]}
      />

      <LuxFAQ
        title="Sustainability Intelligence"
        faqs={[
          { question: "How does the sustainable aspect affect the property value?", answer: "Sustainable properties typically see higher appreciation as global demand for eco-friendly luxury increases and operational costs decrease." },
          { question: "Is the home energy-efficient?", answer: "Yes, using passive cooling, smart insulation, and integrated solar panels, the energy demand is significantly lower than traditional luxury homes." },
          { question: "What about the water management?", answer: "The city utilizes an advanced grey-water recycling system to maintain its vast green spaces without wasting precious freshwater." },
          { question: "Is it an investment or a lifestyle choice?", answer: "It is both. It offers a premium lifestyle for the owner and a high-value asset for the investor." },
          { question: "Can I customize my sustainable features?", answer: "Yes, buyers can opt for further upgrades in smart-home energy management and organic gardening systems." },
        ]}
      />

      <LuxRelatedCommunities
        currentSlug="sustainable-city"
        communities={relatedCommunities}
      />

      <LuxCTA
        title="Pioneer the Future"
        subtitle="Join the movement toward a zero-carbon future. Secure your piece of Oman's most innovative luxury community."
        primaryCta={{ text: "Request Green Brochure", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
