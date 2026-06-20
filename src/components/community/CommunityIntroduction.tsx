"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CommunityIntroProps {
  data: {
    introduction: {
      title: string;
      content: string;
      highlights: string[];
    };
    about: {
      vision: string;
      masterplan: string;
      lifestyle: string;
      amenities: { icon: string; title: string; description: string }[];
      infrastructure: string;
      growthPotential: string;
      images: { url: string; caption: string }[];
    };
  };
  name: string;
}

export default function CommunityIntroduction({ data, name }: CommunityIntroProps) {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cinematic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-60">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 flex flex-col gap-12 relative"
          >
            <div className="space-y-8">
              <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold block">
                The Philosophy
              </span>
              <h2 className="text-6xl md:text-8xl font-serif text-matte-black leading-[0.9] tracking-tighter">
                {data.introduction.title}
              </h2>
            </div>

            <p className="text-matte-black/60 text-2xl leading-relaxed font-light italic border-l-2 border-gold pl-8">
              {data.introduction.content}
            </p>

            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-4">
              {data.introduction.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-matte-black/80 text-xs uppercase tracking-widest font-medium group-hover:text-gold transition-colors">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <Image
                src={data.about.images[0]?.url || "/p3.jpg"}
                alt={name}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="backdrop-blur-md bg-matte-black/40 p-8 rounded-none border-l-4 border-gold">
                  <p className="text-ivory italic font-serif text-xl">
                    {data.about.images[0]?.caption}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 border border-gold/20 rounded-full -z-10" />
          </motion.div>
        </div>

        {/* The "Visionary" Grid - Minimalist & Airly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative mb-60">
          {[
            { label: "The Vision", text: data.about.vision, accent: "gold" },
            { label: "The Masterplan", text: data.about.masterplan, accent: "ivory" },
            { label: "The Lifestyle", text: data.about.lifestyle, accent: "gold" },
          ].map((section, i) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-6">
                <span className="text-gold text-lg font-serif italic">0{i + 1}</span>
                <div className="h-px flex-1 bg-gold/20" />
              </div>
              <h3 className="text-4xl font-serif text-matte-black tracking-tight">{section.label}</h3>
              <p className="text-matte-black/60 leading-relaxed font-light text-lg">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Amenities - Luxury Portfolio Style */}
        <div className="relative">
          <div className="text-center mb-32">
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">
              Curated Excellence
            </span>
            <h3 className="text-6xl font-serif text-matte-black tracking-tighter">
              World-Class Amenities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {data.about.amenities.map((amenity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-transparent border-b border-gold/20 hover:border-gold transition-all duration-500 group"
              >
                <div className="text-5xl mb-10 text-gold group-hover:scale-110 transition-transform duration-500 block">
                  {amenity.icon}
                </div>
                <h4 className="text-matte-black font-serif text-2xl mb-4 group-hover:text-gold transition-colors">
                  {amenity.title}
                </h4>
                <p className="text-matte-black/50 text-sm leading-relaxed font-light group-hover:text-matte-black/80 transition-colors">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
