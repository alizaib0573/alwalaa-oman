"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CommunityOverviewProps {
  data: {
    developer: string;
    propertyTypes: string[];
    avgRoi: string;
    rentalYield: string;
    completionStatus: string;
    airportDistance: string;
    lifestyleRating: string;
  };
}

export default function CommunityOverview({ data }: CommunityOverviewProps) {
  const stats = [
    { label: "ROI", value: data.avgRoi, desc: "Projected annual growth" },
    { label: "Yield", value: data.rentalYield, desc: "Net rental performance" },
    { label: "Status", value: data.completionStatus, desc: "Phase of delivery" },
    { label: "Rating", value: data.lifestyleRating, desc: "Global luxury index" },
  ];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* The Mosaic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Large-scale Atmospheric Typography */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">
                Curated Overview
              </span>
              <h2 className="text-6xl md:text-8xl font-serif text-matte-black leading-[0.9] tracking-tighter mb-12">
                A Masterpiece of <br />
                <span className="italic text-gold">Strategic Design</span>
              </h2>
              <p className="text-matte-black/60 text-xl font-light leading-relaxed max-w-xl italic">
                "Designed not just as a residence, but as a generational asset. {data.developer} has crafted a vision where architectural precision meets high-yield potential, creating a sanctuary for the global elite."
              </p>
            </motion.div>

            {/* Abstract Background Element */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Floating Metric Mosaic */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-8 bg-matte-black border border-gold/20 relative overflow-hidden group hover:border-gold transition-colors duration-500"
              >
                <div className="relative z-10">
                  <span className="text-gold/50 text-[9px] uppercase tracking-widest font-bold block mb-2">
                    {stat.label}
                  </span>
                  <span className="text-ivory font-serif text-3xl block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-ivory/40 text-[10px] font-light leading-tight block max-w-[120px]">
                    {stat.desc}
                  </span>
                </div>
                {/* Subtle Corner Detail */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            {/* Additional Detailed Panel */}
            <div className="col-span-2 p-8 bg-gold text-matte-black flex justify-between items-center group hover:bg-white transition-all duration-500 cursor-pointer">
              <div className="flex flex-col">
                <span className="text-matte-black/60 text-[9px] uppercase tracking-widest font-bold mb-1">Development</span>
                <span className="font-serif text-xl font-medium">{data.developer}</span>
              </div>
              <div className="text-right">
                <span className="text-matte-black/60 text-[9px] uppercase tracking-widest font-bold mb-1 block">Access</span>
                <span className="font-serif text-lg">{data.airportDistance} to Int'l Airport</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
