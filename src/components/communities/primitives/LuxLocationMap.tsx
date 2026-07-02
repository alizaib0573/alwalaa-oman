'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

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
          {/* Map Placeholder / Component */}
          <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-light italic">
              <div className="text-center space-y-4">
                <MapPin size={48} className="mx-auto text-gold animate-bounce" />
                <p>Interactive Luxury Map Integration</p>
                <span className="text-xs uppercase tracking-widest opacity-50">Coordinates: {center.lat}, {center.lng}</span>
              </div>
            </div>
            {/* In a real scenario, this would be a Google Maps or Mapbox instance with a dark-mode style */}
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
