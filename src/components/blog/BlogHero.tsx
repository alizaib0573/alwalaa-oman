"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-ivory">
      {/* Subtle background imagery placeholder - in a real scenario this would be a high-end property image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full bg-[url('/images/blog-hero-bg.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-0 block">
            Intelligence & Perspectives
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-matte-black leading-tight mb-8">
            Insights & Property <br />
            <span className="italic">Intelligence</span>
          </h1>
          <p className="text-matte-black/60 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Explore market updates, investment insights, and expert real estate perspectives across Oman.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
