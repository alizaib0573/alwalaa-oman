"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "96893206024"; // ← Replace with real number

const stats = [
  { label: "Expected ROI", value: "6-8%", description: "Strong yields in prime coastal and urban areas." },
  { label: "Residency", value: "Lifetime", description: "Qualify for residency through strategic property ownership." },
  { label: "Market Growth", value: "High", description: "Sultan Haitham City driving new urban expansion." },
  { label: "Ownership", value: "Freehold", description: "Own luxury villas and apartments in approved ITC zones." },
];

export default function WhyInvestOman() {
  const { openPopup } = usePopup();

  return (
    <section className="py-32 px-6 bg-matte-black text-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block">
                Inspired by Tradition
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Why Invest in <span className="italic text-gold"> Oman Real Estate</span>
              </h2>
              <p className="text-warm-white/60 text-lg leading-relaxed font-light">
                Oman Real Estate offers excellent opportunities for property investment, high rental returns and lifetime
                residency. Alwalaa Real Estate — trusted and led by Eng. Humood AlAdhari — helps you discover luxury
                villas, apartments and freehold properties in Oman&apos;s top ITC investment destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <h4 className="text-gold text-3xl font-serif mb-2">{stat.value}</h4>
                  <p className="text-xs uppercase tracking-widest font-bold mb-3">{stat.label}</p>
                  <p className="text-sm text-warm-white/40 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Inline CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <button
                onClick={openPopup}
                className="bg-gold text-matte-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-ivory transition-all duration-300"
              >
                Book Free Consultation
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ivory/70 border border-ivory/20 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                <FaWhatsapp className="text-base" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="relative h-[600px]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 z-0"
            >
              <Image
                src="/why-invest/flag.jpg"
                alt="Oman Architecture"
                fill
                className="object-cover grayscale-[0.2] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-transparent to-transparent" />
            </motion.div>

            {/* Floating Accents */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-gold/30 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-10 w-20 h-20 border border-gold/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
