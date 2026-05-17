"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="py-32 px-6 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Investor Confidence
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-matte-black italic">
            Built on Trust & Integrity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-12 bg-ivory shadow-sm"
          >
            <h4 className="text-gold text-4xl font-serif mb-4">100%</h4>
            <p className="text-xs uppercase tracking-widest font-bold mb-4">Client Satisfaction</p>
            <p className="text-sm text-matte-black/60 leading-relaxed">
              Providing seamless transitions for high-net-worth individuals into the Omani market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-12 bg-ivory shadow-sm"
          >
            <h4 className="text-gold text-4xl font-serif mb-4">Global</h4>
            <p className="text-xs uppercase tracking-widest font-bold mb-4">Investor Network</p>
            <p className="text-sm text-matte-black/60 leading-relaxed">
              A bridge between international luxury and the unique opportunities of Oman.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-12 bg-ivory shadow-sm"
          >
            <h4 className="text-gold text-4xl font-serif mb-4">Elite</h4>
            <p className="text-xs uppercase tracking-widest font-bold mb-4">Project Portfolio</p>
            <p className="text-sm text-matte-black/60 leading-relaxed">
              Exclusive access to the most prestigious developments in the region.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
