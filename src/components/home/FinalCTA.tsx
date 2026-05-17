"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-matte-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://alwalaaoman.com/wp-content/uploads/2025/02/1.webp" // using image as fallback for video feel
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
          <Link
            href="#contact"
            className="inline-block bg-ivory text-matte-black px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
