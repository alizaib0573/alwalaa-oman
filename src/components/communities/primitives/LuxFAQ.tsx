'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface LuxFAQProps {
  faqs: FAQItem[];
  title?: string;
}

export default function LuxFAQ({ faqs, title }: LuxFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto space-y-12">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              {title}
            </h2>
            <div className="mt-4 w-12 h-px bg-gold mx-auto" />
          </div>
        )}

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="group">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 rounded-2xl border ${
                  activeIndex === idx
                    ? 'bg-white/5 border-gold/50'
                    : 'bg-transparent border-white/10 hover:border-white/30'
                }`}
              >
                <span className={`text-sm md:text-base font-medium tracking-wide transition-colors ${
                  activeIndex === idx ? 'text-gold' : 'text-zinc-300'
                }`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-1 rounded-full ${activeIndex === idx ? 'text-gold' : 'text-zinc-500'}`}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 font-light leading-relaxed text-sm md:text-base border-l-2 border-gold ml-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
