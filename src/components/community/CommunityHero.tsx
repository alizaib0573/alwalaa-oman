"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CommunityHeroProps {
  data: {
    tagline: string;
    locationBadge: string;
    investmentScore: string;
    startingPrice: string;
    bannerImage: string;
  };
  name: string;
}

export default function CommunityHero({ data, name }: CommunityHeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-matte-black">
      {/* Cinematic Background */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src={data.bannerImage}
          alt={name}
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Sophisticated Atmospheric Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/60 via-transparent to-matte-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-matte-black/20" />
      </motion.div>

      {/* Minimalist Luxury Interface */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          style={{ y, opacity }}
          className="relative max-w-5xl"
        >
          {/* The "Quiet" Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold">
              {data.locationBadge}
            </span>
          </motion.div>

          {/* High-Fashion Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-7xl md:text-[11rem] font-serif text-ivory leading-[0.85] tracking-tighter mb-8">
              {name.split(' ').map((word, i) => (
                <span key={i} className={cn(
                  "block",
                  i % 2 === 0 ? "text-ivory" : "italic text-gold translate-x-4 md:translate-x-12"
                )}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Elegant Narrative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="flex flex-col md:flex-row items-end justify-between gap-12 mt-16"
          >
            <div className="max-w-sm">
              <p className="text-ivory/50 text-lg font-light leading-relaxed italic mb-8">
                {data.tagline}
              </p>
              <div className="flex gap-6">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#C5A059", color: "#1A1A1A" }}
                  className="px-10 py-4 bg-transparent border border-gold text-gold uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500"
                >
                  Explore Estates
                </motion.button>
                <motion.button
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="px-10 py-4 text-ivory uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500"
                >
                  Request Brochure
                </motion.button>
              </div>
            </div>

            {/* Subtle Floating Metrics */}
            <div className="hidden md:flex flex-col items-end gap-6 text-right">
              <div className="flex flex-col">
                <span className="text-gold/40 text-[9px] uppercase tracking-widest mb-1 font-bold">Investment Grade</span>
                <span className="text-ivory font-serif text-3xl">{data.investmentScore}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gold/40 text-[9px] uppercase tracking-widest mb-1 font-bold">Starting From</span>
                <span className="text-ivory font-serif text-3xl">{data.startingPrice}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50" />
        <span className="text-ivory/30 text-[9px] uppercase tracking-[0.5em] font-bold">Discover</span>
      </div>
    </section>
  );
}
