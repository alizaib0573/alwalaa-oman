'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { COMMUNITIES_DATA } from "@/data/communities";

export default function TopCommunities() {
  const [communities, setCommunities] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const communityImageMap: Record<string, string> = {
    "AIDA": "/communities/AIDA/1 (1).jpeg",
    "Al Mouj": "/communities/Al Mouj/1 (1).jpg",
    "Hawana Salalah":"/communities/Hawana Salalah/1 (1).jpg",
    "Jebel Sifah": "/communities/Jebel Sifah/1 (1).png",
    "Madinat Al Irfan": "/communities/Madinat Al Irfan/1 (1).jpg",
    "Muscat Bay": "/communities/Muscat Bay/image.png",
    "Sultan Haithem City": "/communities/Sultan Haithem City/1.jpg",
    "Sustainable City": "/p2.jpg",
  };

  useEffect(() => {
    async function fetchCommunities() {
      try {
        // Use local COMMUNITIES_DATA instead of API to ensure all 8 communities are present
        const data = Object.entries(COMMUNITIES_DATA).map(([slug, metadata]) => ({
          id: slug,
          slug: slug,
          name: slug.replace(/-/g, ' ').toUpperCase(),
          description: metadata.introduction.content,
          imageUrl: metadata.hero.bannerImage,
        }));
        setCommunities(data);
      } catch (e) {
        console.error('Failed to load communities', e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCommunities();
  }, []);

  if (isLoading) {
    return (
      <section className="relative py-24 bg-background flex items-center justify-center">
        <div className="text-center text-zinc-400 animate-pulse">
          Curating exclusive enclaves...
        </div>
      </section>
    );
  }

  if (communities.length === 0) {
    return (
      <section className="relative py-24 bg-background flex items-center justify-center">
        <div className="text-center text-zinc-400">
          No communities available at the moment.
        </div>
      </section>
    );
  }

  // Duplicate communities for seamless loop
  const duplicatedCommunities = [...communities, ...communities];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            The Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-matte-black leading-tight mb-6"
          >
            Explore Top <br />
            <span className="italic text-gold">Communities In Oman</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto text-zinc-600 text-base md:text-lg leading-relaxed font-light"
          >
           Oman offers a range of prime locations for freehold property Known as Integrated tourism complexes ( ITC ) zones, Catering to diverse lifestyles and preferences. Many of these property also provide opportunities for lifetime residency Oman, allowing buyers to enjoy both a premium lifestyle and long term security.

          </motion.p>
        </div>
      </div>

      {/* Seamless Carousel */}
      <div className="relative w-full">
        <motion.div
          className="flex w-max"
          animate={{
            x: [0, "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedCommunities.map((community, index) => (
            <div
              key={`${community.id}-${index}`}
              className="px-3 w-[calc(100vw/2)] md:w-[calc(100vw/4)] lg:w-[calc(1280px/4)]"
            >
              <Link
                href={`/${community.slug}`}
                className="group relative overflow-hidden rounded-3xl cursor-pointer block h-[400px]"
              >
                <motion.div
                  className="relative w-full h-full"
                >
                  {/* Image with Zoom Effect */}
                  <Image
                    src={communityImageMap[community.name] || community.imageUrl || '/placeholder.jpg'}
                    alt={community.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-ivory">
                    <motion.div
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Exclusive Enclave
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif mb-2 group-hover:text-gold transition-colors duration-500">
                        {community.name}
                      </h3>
                      <p className="text-sm text-ivory/60 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-2 group-hover:translate-y-0">
                        {community.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Explore Link */}
      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 group cursor-pointer"
        >
          <span className="text-matte-black text-xs uppercase tracking-widest font-bold">
            View All Destinations
          </span>
          <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-500" />
          <span className="text-gold text-xs uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform duration-500">
            Explore &rarr;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
