"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";

export default function PropertyHero() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/p2.jpg"
          alt="Luxury Properties Oman"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-ivory" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            The Elite Portfolio
          </span> */}
          <h1 className="text-5xl md:text-7xl font-serif text-ivory leading-tight mt-7 ">
            Discover Exceptional <br />
            <span className="italic">Properties Across Oman</span>
          </h1>
          <p className="text-ivory/80 text-lg font-light max-w-2xl mx-auto">
            Explore luxury villas, apartments, waterfront residences and exclusive investment opportunities in the most prestigious communities.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 relative max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full flex items-center gap-4 shadow-2xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/50" size={20} />
              <input
                type="text"
                placeholder="Search by location, project or keyword..."
                className="w-full bg-transparent pl-12 pr-4 py-4 text-ivory placeholder:text-ivory/40 outline-none text-sm font-light"
              />
            </div>
            <button className="bg-gold text-matte-black px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-ivory transition-all duration-500">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
