'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  label: string;
  value: string;
  unit?: string;
}

interface LuxStatGridProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
}

export default function LuxStatGrid({ stats, title, subtitle }: LuxStatGridProps) {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-20 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-white tracking-tight"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-500 font-light max-w-2xl mx-auto text-lg"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group overflow-hidden"
            >
              {/* Gold accent line at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center space-y-2">
                <span className="text-3xl md:text-5xl font-serif text-white font-medium">
                  {stat.value}
                  {stat.unit && <span className="text-sm font-sans text-gold ml-1">{stat.unit}</span>}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
