'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LuxEditorialProps {
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
  badge?: string;
}

export default function LuxEditorial({
  title,
  content,
  image,
  reverse = false,
  badge,
}: LuxEditorialProps) {
  return (
    <section className="py-20 md:py-28 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 lg:gap-24 items-center`}>

          {/* Image Container with Architectural Frame */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:w-1/2 aspect-[4/5] group"
          >
            <div className="absolute -inset-4 border border-gold/30 z-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="relative h-full w-full overflow-hidden z-10">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Container */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 space-y-8"
          >
            {badge && (
              <span className="text-gold text-xs uppercase tracking-widest font-bold block mb-4">
                {badge}
              </span>
            )}

            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight tracking-tight">
              {title}
            </h2>

            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-px bg-gold" />
              <p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed pl-14">
                {content}
              </p>
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 pt-4 cursor-pointer group"
            >
              <span className="text-xs uppercase tracking-widest text-white font-medium group-hover:text-gold transition-colors">
                Read the Vision
              </span>
              <div className="w-8 h-px bg-white/20 group-hover:bg-gold transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
