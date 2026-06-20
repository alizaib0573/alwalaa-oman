"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: "linear" },
              scale: { duration: 7, ease: "linear" }
            }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt="Luxury Oman Real Estate"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-matte-black/60" />
          </motion.div>
        </AnimatePresence>
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
          <h1 className="text-5xl md:text-8xl 2xl:text-9xl font-serif text-ivory leading-tight mb-8">
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
