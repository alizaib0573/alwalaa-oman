'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface Landmark {
  name: string;
  distance: string;
  time: string;
}

interface LuxLocationMapProps {
  center: { lat: number; lng: number };
  landmarks: Landmark[];
  title?: string;
}

export default function LuxLocationMap({ center, landmarks, title }: LuxLocationMapProps) {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              {title}
            </h2>
            <div className="mt-4 w-12 h-px bg-gold mx-auto" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Interactive Map Iframe styled to match the dark luxury aesthetic */}
          <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
            <iframe
              title="Interactive Location Map"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)",
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${center.lat},${center.lng}&z=14&t=m&output=embed`}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-white mb-8">Strategic Proximity</h3>
            <div className="space-y-4">
              {landmarks.map((landmark, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-between group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-medium group-hover:text-gold transition-colors">{landmark.name}</span>
                    <span className="text-zinc-500 text-xs font-light">{landmark.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest">
                    <Clock size={12} />
                    {landmark.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
