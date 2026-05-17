"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full"
        ><div className="absolute inset-0 z-0 overflow-hidden">
  <iframe
    className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-125"
    src="https://www.youtube.com/embed/mPdMWJdCbMQ?autoplay=1&mute=1&controls=0&loop=1&playlist=mPdMWJdCbMQ&playsinline=1"
    title="Hero Background Video"
    allow="autoplay; fullscreen"
  />
  <div className="absolute inset-0 bg-black/45" />
</div>
          {/* <img
            src="/hero.jpg"
            alt="Luxury Oman Real Estate"
            className="h-full w-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-matte-black/60" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
            Welcome to Excellence
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-ivory leading-tight mb-8">
            Invest in Oman&apos;s <br />
            <span className="italic">Most Prestigious</span> Properties
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/projects"
              className="bg-gold text-matte-black px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-ivory transition-all duration-500"
            >
              Explore Developments
            </Link>
            <Link
              href="/about"
              className="text-ivory border-b border-ivory/30 px-4 py-4 text-xs uppercase tracking-widest font-medium hover:border-gold transition-all duration-500"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-ivory/40 text-[10px] uppercase tracking-widest font-medium">
          Scroll to explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
