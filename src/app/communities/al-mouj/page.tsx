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
import { Anchor, Trophy, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMMUNITIES_DATA } from '@/data/communities';

export default function AlMoujPage() {
  const relatedCommunities = Object.entries(COMMUNITIES_DATA).map(([slug, data]) => ({
    slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    image: data.hero.bannerImage,
  }));

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <LuxHero
        title="Al Mouj Muscat"
        tagline="PRESTIGIOUS WATERFRONT LIVING • WORLD-CLASS GOLF"
        description="A breathtaking waterfront sanctuary where Mediterranean elegance meets Omani hospitality. An exclusive enclave for those who define their own standard of excellence."
        image="/communities/Al Mouj/1 (1).jpg"
        primaryCta={{ text: "Explore the Portfolio", href: "/properties?communities=Al%20Mouj" }}
        secondaryCta={{ text: "Request Brochure", href: "#contact" }}
      />

      <LuxEditorial
        badge="The Waterfront Legacy"
        title="A Masterpiece of Coastal Urbanism"
        content="Al Mouj Muscat is more than a residential development; it is a curated lifestyle destination. Designed as a seamless integration of luxury lagoons, professional marinas, and manicured landscapes, it offers an unparalleled sanctuary of privacy and prestige. Here, the rhythm of the tides dictates the pace of life, and every residence is a testament to architectural brilliance."
        image="/communities/Al Mouj/1 (1).png"
      />

      <LuxStatGrid
        title="The Metrics of Prestige"
        subtitle="A rare combination of scale, scarcity, and strategic value."
        stats={[
          { label: "Total Area", value: "4", unit: "Million Sqm" },
          { label: "Waterfront", value: "12", unit: "Kilometers" },
          { label: "Golf Holes", value: "18", unit: "Holes" },
          { label: "Investment Score", value: "9.8", unit: "/10" },
        ]}
      />

      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              Why Al Mouj is the <span className="text-gold italic">Ultimate Asset</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LuxInvestmentCard
              icon={TrendingUp}
              title="Unrivaled Capital Growth"
              description="The extreme scarcity of waterfront plots in Muscat ensures a consistent and aggressive upward trajectory in property valuation."
            />
            <LuxInvestmentCard
              icon={Trophy}
              title="Executive Rental Demand"
              description="A primary choice for diplomats, CEOs, and global expatriates, guaranteeing high occupancy and premium rental yields."
            />
            <LuxInvestmentCard
              icon={Anchor}
              title="The Marina Lifestyle"
              description="Direct access to the Arabian Gulf and professional yachting facilities creates a unique asset class with global appeal."
            />
            <LuxInvestmentCard
              icon={ShieldCheck}
              title="Safe Haven Asset"
              description="Managed by world-class operators with a proven track record of maintaining luxury standards and asset longevity."
            />
          </div>
        </div>
      </div>

      <LuxEditorial
        reverse
        badge="Curated Experience"
        title="Beyond the Residence"
        content="Life at Al Mouj is defined by the intersection of leisure and luxury. From the precision of the championship golf course to the curated high-street retail promenade, every detail is engineered for the discerning few. It is a place where your morning coffee is accompanied by the view of a superyacht, and your evening is a walk through manicured gardens of global standard."
        image="/communities/Al Mouj/1 (2).jpg"
      />

      <LuxFeaturedProperties
        communitySlug="al-mouj"
        title="Curated Residences"
      />

      <LuxTimeline
        title="A Legacy in Motion"
        items={[
          { year: "2010", title: "The Vision", description: "The conceptualization of Oman's first integrated waterfront community, blending modernism with Omani heritage.", type: 'past' },
          { year: "2015", title: "Operational Excellence", description: "Full launch of the Marina and the first residential enclaves, setting the benchmark for luxury in Muscat.", type: 'past' },
          { year: "2026", title: "The New Era", description: "Introduction of ultra-luxury penthouse collections and smart-city infrastructure integration.", type: 'present' },
          { year: "2030", title: "Vision 2040 Alignment", description: "Becoming a primary global hub for luxury tourism and high-net-worth residential investment.", type: 'future' },
        ]}
      />

      <LuxGallery
        title="Visualizing Excellence"
        images={["/communities/Al Mouj/1 (1).jpg", "/communities/Al Mouj/1 (1).png", "/communities/Al Mouj/1 (2).jpg", "/communities/Al Mouj/1 (3).jpg", "/communities/Al Mouj/1 (2).jpg", "/communities/Al Mouj/1 (1).jpg"]}
      />

      <LuxLocationMap
        title="Strategic Proximity"
        center={{ lat: 23.618, lng: 58.342 }}
        landmarks={[
          { name: "Muscat International Airport", distance: "15 km", time: "12 mins" },
          { name: "Royal Opera House", distance: "8 km", time: "10 mins" },
          { name: "The Ritz-Carlton", distance: "5 km", time: "7 mins" },
          { name: "Qurum Beach", distance: "10 km", time: "12 mins" },
        ]}
      />

      <LuxFAQ
        title="Investment Intelligence"
        faqs={[
          { question: "Is Al Mouj a viable long-term investment?", answer: "Absolutely. Due to the finite amount of waterfront land available in Muscat, Al Mouj properties function as scarcity-driven assets, historically showing strong capital appreciation." },
          { question: "What are the expected rental yields?", answer: "Typically, the luxury segment in Al Mouj commands yields between 6% and 8%, depending on the property type and proximity to the marina." },
          { question: "Can foreign nationals own property here?", answer: "Yes, Al Mouj is designed for international investors, offering secure ownership frameworks that attract global buyers." },
          { question: "How does the community manage maintenance?", answer: "The community is managed by a dedicated professional entity ensuring that the luxury standards of the roads, parks, and common areas remain world-class." },
          { question: "What makes it different from other Muscat developments?", answer: "The integration of a professional marina and a championship golf course within a gated, master-planned community is unique in the region." },
        ]}
      />

      <LuxRelatedCommunities
        currentSlug="al-mouj"
        communities={relatedCommunities}
      />

      <LuxCTA
        title="Secure Your Legacy"
        subtitle="Private consultations are now open for the most exclusive listings within Al Mouj. Experience the pinnacle of Omani luxury."
        primaryCta={{ text: "Request Private Viewing", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
