"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const paths = [
  {
    type: "Buy",
    title: "Looking to Buy?",
    subtitle: "Acquire the Extraordinary",
    description: "From waterfront villas to urban penthouses, we guide you through Oman's most exclusive listings and help you qualify for lifetime residency.",
    image: "/p1.jpg",
    cta: "Explore Listings",
    color: "bg-matte-black",
    text: "text-ivory",
    accent: "text-gold",
    hoverBg: "hover:bg-gold hover:text-matte-black",
  },
  {
    type: "Sell",
    title: "Looking to Sell?",
    subtitle: "Maximize Your Asset Value",
    description: "Leverage our global network and deep market expertise to position your luxury property before the most qualified high-net-worth investors.",
    image: "/p2.jpg",
    cta: "Get Free Valuation",
    color: "bg-gold",
    text: "text-matte-black",
    accent: "text-gold",
    hoverBg: "hover:bg-matte-black hover:text-ivory",
  },
];

export default function BuySellSection() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            Tailored Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-matte-black leading-tight"
          >
            Your Gateway to <span className="italic text-gold">Oman Real Estate</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Full Image Background */}
              <Image
                src={path.image}
                alt={path.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Glass Blur Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/30 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-700 opacity-0 group-hover:opacity-100" />

              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-ivory">
                <motion.div
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <span className={cn("text-xs uppercase tracking-widest font-bold mb-3 block", path.accent)}>
                    {path.subtitle}
                  </span>
                  <h3 className="text-4xl font-serif mb-4 leading-tight">
                    {path.title}
                  </h3>
                  <p className="text-ivory/70 text-lg font-light mb-8 max-w-md leading-relaxed">
                    {path.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-10 py-4 text-xs uppercase tracking-widest font-bold transition-all duration-500",
                      path.color,
                      path.text,
                      path.hoverBg
                    )}
                  >
                    {path.cta}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
