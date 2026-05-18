"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const markets = [
  {
    id: "primary",
    title: "Primary Market",
    subtitle: "Off-Plan Investments",
    description: "Secure your future with cutting-edge developments. Primary market properties are off-plan units directly from the developer, offering high capital appreciation potential, modern architectural standards, and flexible payment plans tailored for luxury investors.",
    highlight: "High Capital Appreciation",
    features: ["Direct Developer Access", "Modern Design", "Flexible Payments", "Investment Growth"],
    image: "/p1.jpg",
    color: "gold",
  },
  {
    id: "secondary",
    title: "Secondary Market",
    subtitle: "Ready-to-Move Properties",
    description: "Immediate luxury for the discerning buyer. Our secondary market consists of ready-to-occupy residences, offering the certainty of finished quality, immediate residency benefits, and the opportunity to own established luxury within Oman's most coveted addresses.",
    highlight: "Immediate Occupancy",
    features: ["Ready to Move", "Proven Value", "Immediate Residency", "Established Locations"],
    image: "/p2.jpg",
    color: "matte-black",
  },
];

export default function ChooseProperty() {
  const [activeTab, setActiveTab] = useState("primary");

  return (
    <section className="relative py-24 bg-matte-black text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Investment Pathways
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif leading-tight"
            >
              Choose Your <span className="italic text-gold">Portfolio Strategy</span>
            </motion.h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            {markets.map((market) => (
              <button
                key={market.id}
                onClick={() => setActiveTab(market.id)}
                className={cn(
                  "relative px-6 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-500 rounded-full",
                  activeTab === market.id ? "text-matte-black" : "text-ivory/60 hover:text-ivory"
                )}
              >
                {activeTab === market.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{market.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-4">
                <span className="text-gold text-sm font-medium uppercase tracking-widest">
                  {markets.find(m => m.id === activeTab)?.subtitle}
                </span>
                <p className="text-xl text-ivory/70 leading-relaxed font-light">
                  {markets.find(m => m.id === activeTab)?.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {markets.find(m => m.id === activeTab)?.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-ivory/50 group hover:text-gold transition-colors duration-300">
                    <div className="w-1 h-1 rounded-full bg-gold group-hover:scale-150 transition-transform" />
                    {feature}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit bg-gold text-matte-black px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-ivory transition-all duration-500"
              >
                Discover Listings
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={markets.find(m => m.id === activeTab)?.image || "/p1.jpg"}
                  alt="Property Market"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-gold text-xs uppercase tracking-widest font-bold mb-2 block">
                    Strategic Advantage
                  </span>
                  <h3 className="text-3xl font-serif text-ivory italic">
                    {markets.find(m => m.id === activeTab)?.highlight}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
