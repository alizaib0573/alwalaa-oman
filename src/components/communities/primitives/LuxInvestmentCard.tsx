'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface LuxInvestmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function LuxInvestmentCard({ icon: Icon, title, description }: LuxInvestmentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl transition-all duration-500 hover:border-gold/30 overflow-hidden"
    >
      {/* Ambient background glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-serif text-white tracking-tight group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        <p className="text-zinc-400 font-light leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
