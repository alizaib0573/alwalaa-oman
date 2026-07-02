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
import { Anchor, Palmtree, TrendingUp, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMMUNITIES_DATA } from '@/data/communities';

export default function HawanaSalalahPage() {
  const relatedCommunities = Object.entries(COMMUNITIES_DATA).map(([slug, data]) => ({
    slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    image: data.hero.bannerImage,
  }));

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <LuxHero
        title="Hawana Salalah"
        tagline="SOVEREIGN SHORES • THE JEWEL OF THE SOUTH"
        description="A breathtaking coastal destination where luxury is measured by the horizon. Experience the ultimate blend of tropical beauty and sophisticated urban planning."
        image="/communities/Hawana Salalah/1 (1).jpg"
        primaryCta={{ text: "View Waterfront Estates", href: "/properties?communities=Hawana%20Salalah" }}
        secondaryCta={{ text: "Request Exclusive Brochure", href: "#contact" }}
      />

      <LuxEditorial
        badge="The Southern Prestige"
        title="A Tropical Masterpiece"
        content="Hawana Salalah is the crown jewel of the south. Designed as an integrated luxury resort and residential community, it offers a lifestyle of unparalleled ease. From the turquoise lagoons to the white sandy beaches, every inch of the development is engineered to provide a feeling of absolute freedom and prestige."
        image="/communities/Hawana Salalah/1 (1).png"
      />

      <LuxStatGrid
        title="The Metrics of the South"
        subtitle="Analyzing the potential of Oman's premier southern destination."
        stats={[
          { label: "Beachfront", value: "Prime", unit: "" },
          { label: "ROI Potential", value: "8.5", unit: "%" },
          { label: "Luxury Units", value: "1,000+", unit: "Units" },
          { label: "Investment Score", value: "9.0", unit: "/10" },
        ]}
      />

      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              Why Hawana is a <span className="text-gold italic">Strategic Asset</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LuxInvestmentCard
              icon={TrendingUp}
              title="Tourism-Driven Growth"
              description="The exponential rise of luxury tourism in Salalah ensures a constant stream of high-end rental demand throughout the year."
            />
            <LuxInvestmentCard
              icon={Anchor}
              title="Waterfront Scarcity"
              description="Directly accessible beachfront properties are the most resilient assets in real estate, offering permanent value and prestige."
            />
            <LuxInvestmentCard
              icon={Palmtree}
              title="The Khareef Effect"
              description="The unique seasonal climate of Salalah creates a specific high-demand window that drives premium short-term rental yields."
            />
            <LuxInvestmentCard
              icon={ShieldCheck}
              title="Institutional Quality"
              description="Developed with world-class standards, ensuring that the infrastructure and amenities maintain their value over generations."
            />
          </div>
        </div>
      </div>

      <LuxEditorial
        reverse
        badge="Sovereign Living"
        title="The Art of the Escape"
        content="Life at Hawana Salalah is an endless summer. Whether it's a morning sail through the marina, a lazy afternoon by the infinity pool, or a sunset dinner overlooking the Arabian Sea, the experience is one of absolute serenity. It is the ultimate destination for those who wish to own a piece of paradise."
        image="/communities/Hawana Salalah/1 (2).png"
      />

      <LuxFeaturedProperties
        communitySlug="hawana-salalah"
        title="Waterfront Collections"
      />

      <LuxTimeline
        title="A Journey of Excellence"
        items={[
          { year: "The Vision", title: "The Masterplan", description: "Conceptualizing a world-class integrated resort and residential community in the south.", type: 'past' },
          { year: "The Rise", title: "Phased Delivery", description: "The opening of the first luxury hotels and the most exclusive beachfront villas.", type: 'present' },
          { year: "The Future", title: "The Global Hub", description: "Becoming a primary destination for global luxury travelers and high-net-worth residents.", type: 'future' },
        ]}
      />

      <LuxGallery
        title="The Visual Portfolio"
        images={["/communities/Hawana Salalah/1 (1).jpg", "/communities/Hawana Salalah/1 (1).png", "/communities/Hawana Salalah/1 (2).png", "/communities/Hawana Salalah/1 (3).png", "/communities/Hawana Salalah/1 (1).jpg", "/communities/Hawana Salalah/1 (1).png"]}
      />

      <LuxLocationMap
        title="The Southern Gateway"
        center={{ lat: 17.21, lng: 54.05 }}
        landmarks={[
          { name: "Salalah Int Airport", distance: "15 km", time: "12 mins" },
          { name: "The Marina", distance: "0 km", time: "0 mins" },
          { name: "Sultan Qaboos Mosque", distance: "10 km", time: "15 mins" },
          { name: "Mughsail Beach", distance: "30 km", time: "25 mins" },
        ]}
      />

      <LuxFAQ
        title="Sovereign Intelligence"
        faqs={[
          { question: "Is Hawana Salalah a good choice for vacation home investors?", answer: "Absolutely. The combination of high-end infrastructure and the unique climate of Salalah makes it one of the most desirable vacation destinations in the region." },
          { question: "What are the expected rental yields?", answer: "Rental yields are particularly strong during the Khareef season, with premium rates for beachfront villas and luxury apartments." },
          { question: "Can I manage my property remotely?", answer: "Yes, the community offers professional property management services that handle everything from guest booking to maintenance." },
          { question: "How is the connectivity to the rest of Oman?", answer: "With the expansion of Salalah Airport and improved road networks, the community is perfectly connected to the rest of the country." },
          { question: "What makes Hawana different from other coastal projects?", answer: "The scale of the integrated resort services combined with private residential ownership creates a unique 'hotel-lifestyle' at home." },
        ]}
      />

      <LuxRelatedCommunities
        currentSlug="hawana-salalah"
        communities={relatedCommunities}
      />

      <LuxCTA
        title="Claim Your Paradise"
        subtitle="The most prestigious address in the south is now available for a select few. Secure your legacy in Hawana Salalah."
        primaryCta={{ text: "Request Private Viewing", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
