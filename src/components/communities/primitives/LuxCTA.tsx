'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { usePopup } from '@/context/PopupContext';

interface LuxCTAProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
}

export default function LuxCTA({ title, subtitle, primaryCta }: LuxCTAProps) {
  const { openPopup } = usePopup();

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] p-12 md:p-24 text-center space-y-8 bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
        {/* Ambient Background Gold Glow — fixed CSS typo h-64 */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />

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
            {/* Primary CTA — opens consultation popup */}
            <button
              onClick={openPopup}
              className="group relative px-10 py-4 bg-gold text-black text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 hover:bg-white hover:scale-105 overflow-hidden"
            >
              {primaryCta.text}
            </button>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/96871555067"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 backdrop-blur-sm"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
              <a
                href="tel:+96871555067"
                className="p-4 rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 backdrop-blur-sm"
                aria-label="Call"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:info@alwalaaoman.com"
                className="p-4 rounded-full border border-white/10 text-white hover:text-gold hover:border-gold transition-all duration-300 backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
