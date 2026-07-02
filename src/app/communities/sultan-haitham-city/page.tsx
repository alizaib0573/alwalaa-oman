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
import { Building2, Leaf, TrendingUp, Map } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMMUNITIES_DATA } from '@/data/communities';

export default function SultanHaithamCityPage() {
  const relatedCommunities = Object.entries(COMMUNITIES_DATA).map(([slug, data]) => ({
    slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    image: data.hero.bannerImage,
  }));

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <LuxHero
        title="Sultan Haitham City"
        tagline="VISIONARY URBANISM • THE FUTURE OF OMAN"
        description="A landmark of modern urban living, meticulously designed to blend sustainable innovation with an unmatched quality of life in the heart of Muscat."
        image="/communities/Sultan Haithem City/1.jpg"
        primaryCta={{ text: "Explore the Masterplan", href: "/properties?communities=Sultan%20Haitham%20City" }}
        secondaryCta={{ text: "Investment Guide", href: "#contact" }}
      />

      <LuxEditorial
        badge="Urban Innovation"
        title="A New Standard for Modernity"
        content="Sultan Haitham City is not just a residential area; it is the architectural manifestation of Oman's Vision 2040. By integrating smart-city infrastructure with sprawling green corridors and cultural hubs, the city creates a seamless flow between work, life, and wellness. It is where global urban trends meet authentic Omani heritage."
        image="/communities/Sultan Haithem City/1 (2).jpg"
      />

      <LuxStatGrid
        title="The Urban Blueprint"
        subtitle="Scaling luxury and sustainability at a national level."
        stats={[
          { label: "Green Areas", value: "30", unit: "%" },
          { label: "Walkability", value: "High", unit: "" },
          { label: "Smart Home", value: "100", unit: "%" },
          { label: "Investment Score", value: "9.4", unit: "/10" },
        ]}
      />

      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              The <span className="text-gold italic">Investment Catalyst</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LuxInvestmentCard
              icon={TrendingUp}
              title="Institutional Stability"
              description="Backed by national strategic planning, ensuring long-term value stability and steady capital growth."
            />
            <LuxInvestmentCard
              icon={Building2}
              title="Mixed-Use Synergy"
              description="The integration of commercial, cultural, and residential zones drives high rental demand and property liquidity."
            />
            <LuxInvestmentCard
              icon={Leaf}
              title="Sustainability Premium"
              description="Eco-certified developments attract a new generation of conscious high-net-worth buyers from across the globe."
            />
            <LuxInvestmentCard
              icon={Map}
              title="Strategic Hub"
              description="Perfectly positioned as the new central heart of Muscat, optimizing accessibility and urban connectivity."
            />
          </div>
        </div>
      </div>

      <LuxEditorial
        reverse
        badge="The Lifestyle"
        title="Living in Harmony"
        content="Experience a city that breathes. With expansive parks, world-class museums, and a pedestrian-first design, Sultan Haitham City removes the friction of urban living. It is a sanctuary for the family, a hub for the professional, and a masterpiece for the investor."
        image="/communities/Sultan Haithem City/1 (3).jpg"
      />

      <LuxFeaturedProperties
        communitySlug="sultan-haitham-city"
        title="Visionary Estates"
      />

      <LuxTimeline
        title="Designing the Future"
        items={[
          { year: "2020", title: "The Royal Decree", description: "The vision is established to create a world-class urban center reflecting Oman's progress.", type: 'past' },
          { year: "2024", title: "Infrastructure Phase", description: "Core roads and smart grids are being deployed, preparing the land for luxury development.", type: 'present' },
          { year: "2027", title: "First Enclaves", description: "The first collection of sustainable villas and luxury apartments will be delivered.", type: 'future' },
          { year: "2040", title: "The Completed Vision", description: "A fully realized smart city serving as a global benchmark for sustainable urbanism.", type: 'future' },
        ]}
      />

      <LuxGallery
        title="Architectural Visions"
        images={["/communities/Sultan Haithem City/1.jpg", "/communities/Sultan Haithem City/1 (2).jpg", "/communities/Sultan Haithem City/1 (3).jpg", "/communities/Sultan Haithem City/1.jpg", "/communities/Sultan Haithem City/1 (2).jpg", "/communities/Sultan Haithem City/1 (3).jpg"]}
      />

      <LuxLocationMap
        title="The Heart of the Capital"
        center={{ lat: 23.58, lng: 58.45 }}
        landmarks={[
          { name: "Muscat Int Airport", distance: "12 km", time: "10 mins" },
          { name:  "Royal Opera House", distance: "7 km", time: "8 mins" },
          { name: "Sultan Qaboos Grand Mosque", distance: "10 km", time: "12 mins" },
          { name: "National Museum", distance: "8 km", time: "10 mins" },
        ]}
      />

      <LuxFAQ
        title="City Intelligence"
        faqs={[
          { question: "What makes Sultan Haitham City a unique investment?", answer: "It is a planned city from the ground up, meaning there is no legacy infrastructure. Everything is optimized for smart-living and sustainable growth." },
          { question: "Who is the target buyer for these properties?", answer: "A mix of local families seeking a modernized lifestyle and international investors looking for stable, state-backed capital appreciation." },
          { question: "How does it differ from other Muscat developments?", answer: "The scale and the focus on 'Walkability' and 'Greenery' set it apart from traditional sprawl-style developments." },
          { question: "Are there payment plans available?", answer: "Yes, developers in the city are offering highly competitive payment structures to support the early-phase growth." },
          { question: "Is there a timeline for the full city completion?", answer: "The city is being delivered in phases, aligning with Oman's Vision 2040 strategic goals." },
        ]}
      />

      <LuxRelatedCommunities
        currentSlug="sultan-haitham-city"
        communities={relatedCommunities}
      />

      <LuxCTA
        title="Invest in the Vision"
        subtitle="Be part of the most ambitious urban project in Omani history. Secure your position in the future of Muscat."
        primaryCta={{ text: "Consult an Expert", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
