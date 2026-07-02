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
import { Wind, Sun, ShieldCheck, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMMUNITIES_DATA } from '@/data/communities';

export default function JebelSifahPage() {
  const relatedCommunities = Object.entries(COMMUNITIES_DATA).map(([slug, data]) => ({
    slug,
    name: slug.replace(/-/g, ' ').toUpperCase(),
    image: data.hero.bannerImage,
  }));

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <LuxHero
        title="Jebel Sifah"
        tagline="COASTAL ESCAPE • NATURE'S LUXURY"
        description="A hidden gem where the rugged majesty of the mountains meets the crystal clarity of the sea. A sanctuary for those who wish to escape the noise and embrace the absolute."
        image="/communities/Jebel Sifah/1 (1).png"
        primaryCta={{ text: "View Secluded Estates", href: "/properties?communities=Jebel%20Sifah" }}
        secondaryCta={{ text: "Request Site Map", href: "#contact" }}
      />

      <LuxEditorial
        badge="The Hidden Retreat"
        title="The Luxury of Silence"
        content="Jebel Sifah is a celebration of nature's raw beauty. Designed for the ultra-discerning, it offers a level of privacy and peace that is unattainable in the city. Here, the only soundtrack is the wind through the peaks and the waves against the shore. It is a place where time slows down, and the soul finds its center."
        image="/communities/Jebel Sifah/1 (2).png"
      />

      <LuxStatGrid
        title="The Metrics of Peace"
        subtitle="Defining luxury through the lens of nature and seclusion."
        stats={[
          { label: "Beach Privacy", value: "Absolute", unit: "" },
          { label: "Mountain Views", value: "360", unit: "Deg" },
          { label: "Air Quality", value: "Pure", unit: "" },
          { label: "Investment Score", value: "8.8", unit: "/10" },
        ]}
      />

      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              Why Sifah is a <span className="text-gold italic">Timeless Asset</span>
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LuxInvestmentCard
              icon={TrendingUp}
              title="Land Scarcity"
              description="As more investors seek a 'getaway' lifestyle, prime land that combines mountain and sea views becomes an increasingly rare and valuable commodity."
            />
            <LuxInvestmentCard
              icon={Sun}
              title="Vacation ROI"
              description="High demand for luxury short-term rentals from regional and international tourists seeking exclusive nature escapes."
            />
            <LuxInvestmentCard
              icon={Wind}
              title="Emotional Value"
              description="Beyond financial ROI, the psychological value of total seclusion and mental wellness creates a unique and enduring demand."
            />
            <LuxInvestmentCard
              icon={ShieldCheck}
              title="Natural Hedge"
              description="Properties in unique natural settings are less susceptible to urban market fluctuations and maintain a distinct prestige."
            />
          </div>
        </div>
      </div>

      <LuxEditorial
        reverse
        badge="Luxe Escape"
        title="A Symphony of Elements"
        content="From private beach cabanas to mountaintop villas, Jebel Sifah is designed to immerse the resident in the beauty of the Omani coast. It is a place for slow mornings, golden sunsets, and the rediscovery of what it means to truly unplug while remaining in the lap of luxury."
        image="/communities/Jebel Sifah/1 (3).png"
      />

      <LuxFeaturedProperties
        communitySlug="jebel-sifah"
        title="Secluded Sanctuaries"
      />

      <LuxTimeline
        title="A Natural Evolution"
        items={[
          { year: "Origins", title: "The Discovery", description: "Identifying the unique geological intersection of peaks and waters as a potential luxury retreat.", type: 'past' },
          { year: "Present", title: "The Awakening", description: "The launch of curated villa collections and high-end hospitality services.", type: 'present' },
          { year: "Future", title: "The Ultimate Retreat", description: "Completion of the full-service luxury wellness and eco-resort network.", type: 'future' },
        ]}
      />

      <LuxGallery
        title="The Raw Beauty"
        images={["/communities/Jebel Sifah/1 (1).png", "/communities/Jebel Sifah/1 (2).png", "/communities/Jebel Sifah/1 (3).png", "/communities/Jebel Sifah/1 (4).png", "/communities/Jebel Sifah/1 (5).png", "/communities/Jebel Sifah/1 (1).png"]}
      />

      <LuxLocationMap
        title="Secluded Yet Accessible"
        center={{ lat: 23.21, lng: 58.62 }}
        landmarks={[
          { name: "Muscat Int Airport", distance: "50 km", time: "40 mins" },
          { name: "Sifah Beach", distance: "0 km", time: "0 mins" },
          { name: "Coastal Trail", distance: "2 km", time: "10 mins" },
          { name: "Nearby Fishing Village", distance: "5 km", time: "10 mins" },
        ]}
      />

      <LuxFAQ
        title="Seclusion Intelligence"
        faqs={[
          { question: "Is Jebel Sifah suitable for full-time living?", answer: "While many use it as a secondary retreat, the increasing quality of amenities and infrastructure makes it a viable choice for those seeking a serene, permanent home." },
          { question: "What are the main activities available?", answer: "The community offers everything from professional yachting and diving to mountain trekking and high-end wellness retreats." },
          { question: "How is the property managed?", answer: "Professional management ensures that your villa is pristine and ready for your arrival, handling everything from landscaping to concierge services." },
          { question: "What is the investment potential?", answer: "The main draw is the 'rarity' of the location. There are very few places in the region that offer this specific blend of mountain and sea access." },
          { question: "Can I build a custom villa?", answer: "Depending on the plot and phase, there are options for bespoke architectural designs that align with the community's aesthetic guidelines." },
        ]}
      />

      <LuxRelatedCommunities
        currentSlug="jebel-sifah"
        communities={relatedCommunities}
      />

      <LuxCTA
        title="Rediscover Your Peace"
        subtitle="The most exclusive escape in Oman is waiting. Step away from the world and into the luxury of nature."
        primaryCta={{ text: "Request a Private Visit", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
