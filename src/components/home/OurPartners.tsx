"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Eagle Hills Muscat", logo: "/partner1.webp" },
  { name: "Diamond Developers", logo: "/partner2.webp" },
  { name: "OMRAN Group", logo: "/partner3.webp" },
  { name: "Sultan Haitham City", logo: "/partner4.webp" },
  { name: "Al Mouj Muscat", logo: "/partner5.webp" },
  { name: "Oman Investment Fund", logo: "/partner1.webp" },
  { name: "Muscat Luxury Homes", logo: "/partner2.webp" },
  { name: "Elite Oman Real Estate", logo: "/partner3.webp" },
];

export default function OurPartners() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
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
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-30%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 6,
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="relative w-[500px] h-[300px] flex-shrink-0 mx-1  opacity-50"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
