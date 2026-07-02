'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, Phone, Mail } from 'lucide-react';

interface LuxCTAProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
}

export default function LuxCTA({ title, subtitle, primaryCta }: LuxCTAProps) {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] p-12 md:p-24 text-center space-y-8 bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
        {/* Ambient Background Gold Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h- la-64 bg-gold/10 blur-[100px] rounded-full" />

        <div className="relative z-10 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white leading-tight tracking-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-light text-lg md:text-xl max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link
              href={primaryCta.href}
              className="group relative px-10 py-4 bg-gold text-black text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 hover:bg-white hover:scale-105 overflow-hidden"
            >
              {primaryCta.text}
            </Link>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/your-number" className="p-4 rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 backdrop-blur-sm">
                <MessageSquare size={20} />
              </a>
              <a href="tel:+96800000000" className="p-4 rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 backdrop-blur-sm">
                <Phone size={20} />
              </a>
              <a href="mailto:info@alwalaa.com" className="p-4 rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 backdrop-blur-sm">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
