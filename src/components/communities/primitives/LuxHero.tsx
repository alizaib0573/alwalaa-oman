'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface LuxHeroProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

export default function LuxHero({
  title,
  tagline,
  description,
  image,
  primaryCta,
  secondaryCta,
}: LuxHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Cinematic Background with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl space-y-8"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-gold text-xs font-bold uppercase tracking-widest"
            >
              {tagline}
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-tight tracking-tight">
              {title}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg md:text-xl font-light text-zinc-300 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
          >
            <Link
              href={primaryCta.href}
              className="group relative px-8 py-4 bg-gold text-black text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 hover:bg-white hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">{primaryCta.text}</span>
            </Link>

            <Link
              href={secondaryCta.href}
              className="px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm"
            >
              {secondaryCta.text}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
