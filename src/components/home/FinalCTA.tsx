"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

const WHATSAPP_NUMBER = "96891000000"; // ← Replace with real number

const trustBullets = [
  "100% Free Consultation",
  "No Obligation",
  "Expert Local Team",
];

export default function FinalCTA() {
  const { openPopup } = usePopup();

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-matte-black/55 z-10" />
        <Image
          src="/p4.jpg"
          alt="Luxury Oman Property Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6"
          >
            Start Your Journey Today
          </motion.span>

          <h2 className="text-5xl md:text-8xl font-serif text-ivory leading-tight mb-8">
            Own Property in Oman. <br />
            <span className="italic text-gold">Get Lifetime Residency.</span>
          </h2>

          <p className="text-ivory/60 text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Speak with our expert team and discover villas, apartments &amp; investment opportunities in Oman&apos;s top ITC communities.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={openPopup}
              className="inline-flex items-center gap-3 bg-gold text-matte-black px-10 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-ivory transition-all duration-500"
            >
              Request a Consultation
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500/90 text-white px-10 py-4 text-xs uppercase tracking-[0.25em] font-bold hover:bg-green-400 transition-all duration-500"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust micro-bullets */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBullets.map((b) => (
              <span key={b} className="flex items-center gap-2 text-ivory/50 text-xs font-light">
                <FaCheckCircle className="text-gold text-xs flex-shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
