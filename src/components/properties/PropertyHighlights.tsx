"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Home, Waves, ArrowUpDown, Sparkles } from "lucide-react";

interface PropertyHighlightsProps {
  highlights: string[];
}

export default function PropertyHighlights({ highlights }: PropertyHighlightsProps) {
  const highlightIcons: Record<string, any> = {
    "Freehold Ownership": ShieldCheck,
    "Foreign Investor Eligible": Globe,
    "Residency Benefits": Home,
    "Lakefront Location": Waves,
    "Private Elevator": ArrowUpDown,
    "Infinity Pool": Sparkles,
  };

  return (
    <section className="py-16 space-y-8">
      <h2 className="text-3xl font-serif text-matte-black mb-8">
        Investment <span className="italic text-gold">Highlights</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((highlight, i) => {
          const Icon = highlightIcons[highlight] || ShieldCheck;
          return (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-matte-black text-ivory rounded-sm flex items-start gap-4 group hover:bg-gold transition-colors duration-500"
            >
              <div className="text-gold group-hover:text-matte-black transition-colors">
                <Icon size={24} />
              </div>
              <span className="text-sm font-light leading-relaxed group-hover:text-matte-black transition-colors">
                {highlight}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
