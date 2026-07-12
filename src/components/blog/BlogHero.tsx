"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center bg-matte-black">
      {/* Premium Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/p5.jpg"
          alt="Alwalaa Property Intelligence"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-ivory" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold block">
            Intelligence & Perspectives
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory leading-tight">
            Insights & Property <br />
            <span className="italic text-gold">Intelligence</span>
          </h1>
          <p className="text-ivory/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Stay updated with expert real estate analyses, market trends, community guides, and residency insights in Oman.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
