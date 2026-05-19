"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function BlogFilter({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery
}: BlogFilterProps) {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Search Bar */}
        <div className="relative w-full md:max-w-md group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gold/60 group-focus-within:text-gold transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search intelligence..."
            className="w-full pl-12 pr-6 py-4 bg-matte-black/5 border border-matte-black/10 backdrop-blur-md text-matte-black text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-matte-black/30"
          />
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 ${
                activeCategory === cat
                ? "bg-gold text-matte-black shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                : "bg-matte-black/5 text-matte-black/60 border border-matte-black/10 hover:border-gold/50 hover:text-matte-black"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
