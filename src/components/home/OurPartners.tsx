"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const partners = [
  { name: "Eagle Hills Muscat", role: "Luxury Developer", logo: "/partner1.webp" },
  { name: "Diamond Developers", role: "Investment Partner", logo: "/partner2.webp" },
  { name: "OMRAN Group", role: "National Developer", logo: "/partner3.webp" },
  { name: "Sultan Haitham City", role: "Urban Visionary", logo: "/partner4.webp" },
  { name: "Al Mouj Muscat", role: "Waterfront Developer", logo: "/partner5.webp" },
  { name: "Oman Investment Fund", role: "Strategic Partner", logo: "/partner1.webp" },
  { name: "Muscat Luxury Homes", role: "Boutique Agency", logo: "/partner2.webp" },
  { name: "Elite Oman Real Estate", role: "Investment Specialist", logo: "/partner3.webp" },
];

export default function OurPartners() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Intro */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            Strategic Alliances
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-matte-black leading-tight"
          >
            Trusted by Oman&apos;s <br />
            <span className="italic text-gold">Premier Developers</span>
          </motion.h2>
        </div>

        {/* Partners Grid - 4 per row on desktop, 2 per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-full max-w-[450px] aspect-[4/5] flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-champagne/30 shadow-sm hover:shadow-xl hover:shadow-gold/5 transition-all duration-700 cursor-pointer"
            >
              {/* Soft Blur Background Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/5 via-transparent to-champagne/10 rounded-3xl" />

              {/* Logo / Name */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-8">
                <div className="relative w-full h-72 transition-all duration-500 group-hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div className="text-center">
                  <div className="text-matte-black/40 group-hover:text-gold transition-colors duration-500 font-serif text-xl md:text-2xl font-medium tracking-tight">
                    {partner.name}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-matte-black/30 group-hover:text-matte-black/60 transition-colors duration-500 mt-2 font-medium">
                    {partner.role}
                  </div>
                </div>
              </div>

              {/* Subtle Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 rounded-3xl transition-all duration-700 scale-95 group-hover:scale-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
