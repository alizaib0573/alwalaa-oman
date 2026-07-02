"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Al Adrak", logo: "/Logos/AL ADRAK/AL ADRAK.png" },
  { name: "Al Ahly Sabbour", logo: "/Logos/AL AHLY SABBOUR/AL AHLY SABBOUR.png" },
  { name: "Dar Global", logo: "/Logos/Dar Global/DAR GLOBAL BLACK.png" },
  { name: "Muriya", logo: "/Logos/Muriya/Muriya.png" },
  { name: "Muscat Bay", logo: "/Logos/Muscat bay/MUSCAT BAY.png" },
  { name: "Omran", logo: "/Logos/OMRAN/OMRAN.png" },
  { name: "The Sustainable City", logo: "/Logos/The Sustainable City/The Sustainable City.png" },
  { name: "Zen", logo: "/Logos/ZEN/ZEN BLACK.png" },
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
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="relative w-32 h-16 md:w-48 md:h-24 flex-shrink-0 mx-8 md:mx-12 opacity-90 hover:opacity-100 transition-opacity duration-300"
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
