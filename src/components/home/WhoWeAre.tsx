"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative py-24 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/ceo.webp"
              alt="Eng. Humood Al Adhari - CEO Alwalaa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              {/* <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-1 block">
                Leadership
              </span> */}
              <h4 className="text-2xl font-serif text-ivory italic">
                Eng. Humood Al Adhari
              </h4>
              <p className="text-ivory/70 text-xs uppercase tracking-widest mt-1">
                Chief Executive Officer
              </p>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                Our Legacy
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-matte-black leading-tight mb-6">
                Why Choose  <br />
                <span className="italic text-gold">Alwalaa Real Estate</span>
              </h2>
              <p className="text-lg text-matte-black/70 leading-relaxed font-light mb-8">
Finding the right property in Oman starts with the right partner. Alwalaa Real Estate, part of Alwalaa leading projects SPC and led by Eng. Humood AlAdhari, helps local and international buyers discover luxury villas, apartments, off-plan development and freehold properties with trusted expertise, local market knowledge and complete transparency.               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-2">
                <h5 className="text-matte-black font-serif text-xl italic">Local Market Expertise</h5>
                <p className="text-sm text-matte-black/60 font-light">
                  Helping local and international buyers navigate the Oman real estate market with confidence
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="text-matte-black font-serif text-xl italic">Exclusive ITC Access </h5>
                <p className="text-sm text-matte-black/60 font-light">
                  Discover premium ITC properties and exclusive investment opportunities across Oman.
                </p>
              </div>
            </motion.div>
{/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8"
            >
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-ivory border border-champagne/50">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-matte-black font-serif italic text-xl font-bold">
                  
                </div>
                <div>
                  <p className="text-sm text-matte-black font-medium italic">
                    "Our mission is to cultivate lasting partnerships by delivering absolute transparency and unparalleled real estate expertise."
                  </p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
