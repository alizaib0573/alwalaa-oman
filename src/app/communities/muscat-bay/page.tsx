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
import { Mountain, Waves, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMMUNITIES_DATA } from '@/data/communities';

export default function MuscatBayPage() {
  const relatedCommunities = Object.entries(COMMUNITIES_DATA).map(([slug, data]) => ({
    slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    image: data.hero.bannerImage,
  }));

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <LuxHero
        title="Muscat Bay"
        tagline="SOPHISTICATED SERENITY • PEAKS & WATERS"
        description="An architectural jewel nestled between the rugged Al Hajar mountains and the turquoise waters of the Arabian Gulf. A retreat for those who seek absolute silence and absolute luxury."
        image="/communities/Muscat Bay/image.png"
        primaryCta={{ text: "View Exclusive Villas", href: "/properties?communities=Muscat%20Bay" }}
        secondaryCta={{ text: "Request Private Guide", href: "#contact" }}
      />

      <LuxEditorial
        badge="The Sanctuary"
        title="Where Mountains Meet the Sea"
        content="Muscat Bay is a masterclass in environmental integration. Unlike typical coastal developments, Muscat Bay respects the natural contours of the land, creating a series of secluded enclaves that offer total privacy. Here, the majesty of the mountains provides a dramatic backdrop to the serenity of the sea, creating an atmosphere of timeless tranquility."
        image="/communities/Muscat Bay/image (1).png"
      />

      <LuxStatGrid
        title="The Essence of Exclusivity"
        subtitle="A rare intersection of nature and high-end architectural engineering."
        stats={[
          { label: "Beach Access", value: "Direct", unit: "" },
          { label: "Privacy Index", value: "Maximum", unit: "" },
          { label: "Property Type", value: "Villas", unit: "" },
          { label: "Investment Score", value: "9.6", unit: "/10" },
        ]}
      />

      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              The <span className="text-gold italic">Sovereign Choice</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LuxInvestmentCard
              icon={TrendingUp}
              title="Hedge Against Volatility"
              description="Ultra-prime real estate in secluded locations historically maintains value regardless of market swings, making it a perfect wealth preservation tool."
            />
            <LuxInvestmentCard
              icon={Mountain}
              title="Irreplaceable Location"
              description="The unique geography of Muscat Bay cannot be replicated. Scarcity of land between mountains and sea drives long-term capital growth."
            />
            <LuxInvestmentCard
              icon={Waves}
              title="Wellness ROI"
              description="The growing demand for 'wellness retreats' has made high-end properties in natural settings significantly more desirable and lucrative."
            />
            <LuxInvestmentCard
              icon={ShieldCheck}
              title="Bespoke Quality"
              description="Every residence is built to an uncompromising international standard, ensuring the asset remains timeless and desirable for decades."
            />
          </div>
        </div>
      </div>

      <LuxEditorial
        reverse
        badge="Luxe Living"
        title="The Art of Seclusion"
        content="Life at Muscat Bay is an exercise in mindfulness. From the curated hiking trails that lead to hidden vistas, to the private beach cabanas that offer a respite from the world, every experience is designed to rejuvenate the soul. It is not just a home; it is a private sanctuary for the global elite."
        image="/communities/Muscat Bay/image.png"
      />

      <LuxFeaturedProperties
        communitySlug="muscat-bay"
        title="Secluded Estates"
      />

      <LuxTimeline
        title="The Evolution of Serenity"
        items={[
          { year: "Phase I", title: "The Foundation", description: "Establishing the core luxury lapping and the first set of signature villas.", type: 'past' },
          { year: "Phase II", title: "Expansion", description: "Introduction of the beach club and the expanded wellness amenities.", type: 'present' },
          { year: "Future", title: "The Peak", description: "Completion of the most exclusive mountaintop retreats and a world-class spa.", type: 'future' },
        ]}
      />

      <LuxGallery
        title="A Visual Symphony"
        images={["/communities/Muscat Bay/image.png", "/communities/Muscat Bay/image (1).png", "/communities/Muscat Bay/image.png", "/communities/Muscat Bay/image (1).png", "/communities/Muscat Bay/image.png", "/communities/Muscat Bay/image (1).png"]}
      />

      <LuxLocationMap
        title="Sovereign Location"
        center={{ lat: 23.45, lng: 58.48 }}
        landmarks={[
          { name: "Muscat City Center", distance: "25 km", time: "20 mins" },
          { name: "Al Hajar Mountains", distance: "0 km", time: "0 mins" },
          { name: "Luxury Yacht Club", distance: "2 km", time: "5 mins" },
          { name: "Private Beach", distance: "0 km", time: "0 mins" },
        ]}
      />

      <LuxFAQ
        title="Investment Intelligence"
        faqs={[
          { question: "What is the main investment draw of Muscat Bay?", answer: "The absolute scarcity of land that offers both mountain and sea vistas. This makes the properties highly liquid and resilient to market downturns." },
          { question: "How is the privacy managed in the community?", answer: "The master plan uses natural topography to create visual buffers between residences, ensuring total privacy without compromising on views." },
          { question:  "Is it suitable as a secondary vacation home?", answer: "It is specifically designed for that purpose, providing a high-end retreat environment with full concierge and maintenance services." },
          { question: "What are the rental prospects?", answer: "There is a strong niche market for high-end short-term rentals for luxury travelers visiting Oman." },
          { question:  "What facilities are available to residents?", answer: "Residents have access to a private beach club, professional wellness centers, and a curated network of hiking and water-sports trails." },
        ]}
      />

      <LuxRelatedCommunities
        currentSlug="muscat-bay"
        communities={relatedCommunities}
      />

      <LuxCTA
        title="Escape to Excellence"
        subtitle="Private viewings of our most secluded villas are now available. Step into a world of absolute serenity."
        primaryCta={{ text: "Schedule Private Tour", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
