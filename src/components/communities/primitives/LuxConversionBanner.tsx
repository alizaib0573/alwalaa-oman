'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePopup } from '@/context/PopupContext';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface LuxConversionBannerProps {
  /** Heading shown on the banner */
  headline: string;
  /** Supporting sub-text */
  subtext?: string;
  /** Variant controls visual weight — use "subtle" mid-page, "bold" at end of sections */
  variant?: 'subtle' | 'bold';
  /** Show WhatsApp quick-contact icon link */
  showWhatsApp?: boolean;
}

export default function LuxConversionBanner({
  headline,
  subtext,
  variant = 'subtle',
  showWhatsApp = true,
}: LuxConversionBannerProps) {
  const { openPopup } = usePopup();

  if (variant === 'bold') {
    return (
      <section className="py-16 px-6 bg-gold">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-matte-black/70 text-[10px] uppercase tracking-[0.25em] font-bold">
              Limited Availability
            </p>
            <h3 className="text-2xl md:text-3xl font-serif text-matte-black leading-snug">
              {headline}
            </h3>
            {subtext && (
              <p className="text-matte-black/70 text-sm font-light">{subtext}</p>
            )}
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            {showWhatsApp && (
              <a
                href="https://wa.me/96893206024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-matte-black/20 text-matte-black text-xs uppercase tracking-widest font-bold rounded-full hover:bg-matte-black hover:text-gold transition-all duration-300"
              >
                <MessageSquare size={15} /> WhatsApp
              </a>
            )}
            <button
              onClick={openPopup}
              className="flex items-center gap-2 px-8 py-4 bg-matte-black text-gold text-xs uppercase tracking-widest font-bold rounded-full hover:bg-white hover:text-matte-black transition-all duration-300"
            >
              <Calendar size={15} /> Book Consultation
            </button>
          </div>
        </div>
      </section>
    );
  }

  // subtle variant — dark strip
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 px-6 bg-zinc-900/60 border-y border-white/5 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <p className="text-white text-base md:text-lg font-serif">{headline}</p>
          {subtext && (
            <p className="text-zinc-500 text-xs font-light">{subtext}</p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {showWhatsApp && (
            <a
              href="https://wa.me/96893206024"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 text-zinc-400 hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageSquare size={17} />
            </a>
          )}
          <a
            href="tel:+96871555067"
            className="p-3 rounded-full border border-white/10 text-zinc-400 hover:text-gold hover:border-gold transition-all duration-300"
            aria-label="Call"
          >
            <Phone size={17} />
          </a>
          <button
            onClick={openPopup}
            className="px-6 py-3 bg-gold text-black text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-white transition-all duration-300"
          >
            Get Free Advice
          </button>
        </div>
      </div>
    </motion.section>
  );
}
