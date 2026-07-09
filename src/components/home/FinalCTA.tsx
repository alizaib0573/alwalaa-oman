"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext";

export default function FinalCTA() {
    const { openPopup } = usePopup();
  
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-matte-black/60 z-10" />

        <Image
          src="/p4.jpg"
          alt="Luxury Oman Property Background"
          fill
          className="object-cover "
          priority
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-serif text-ivory leading-tight mb-12">
            Start Your Oman <br />
            <span className="italic text-gold">Property Journey</span>
          </h2>
          <button
            onClick={openPopup}
            className="inline-block bg-ivory text-matte-black px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500"
          >
            Request a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
