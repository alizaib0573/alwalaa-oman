'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'past' | 'present' | 'future';
}

interface LuxTimelineProps {
  items: TimelineItem[];
  title?: string;
}

export default function LuxTimeline({ items, title }: LuxTimelineProps) {
  return (
    <section className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {title && (
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              {title}
            </h2>
            <div className="mt-4 w-12 h-px bg-gold mx-auto" />
          </div>
        )}

        <div className="relative">
          {/* The Central Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-zinc-800">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gold"
            />
          </div>

          <div className="space-y-24">
            {items.map((item, idx) => (
              <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Timeline Marker */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-4 h-4 rounded-full bg-gold ring-4 ring-black border border-gold/50"
                  />
                </div>

                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-8 rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm ${
                      idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
