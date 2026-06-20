"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface BrochureRequestProps {
  data: {
    trustMessage: string;
    incentives: string[];
  };
  communityName: string;
}

export default function BrochureRequest({ data, communityName }: BrochureRequestProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 bg-matte-black relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold">Exclusive Access</span>
            <h2 className="text-5xl md:text-6xl font-serif text-ivory leading-tight">
              The Private <br />Collection
            </h2>
            <p className="text-ivory/60 text-xl leading-relaxed font-light">
              {data.trustMessage}
            </p>
            <div className="space-y-4 mt-6">
              {data.incentives.map((inc, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-5 h-5 border border-gold/50 rounded-full flex items-center justify-center text-gold text-[8px] font-bold group-hover:bg-gold group-hover:text-matte-black transition-all">
                    ✓
                  </div>
                  <span className="text-ivory/80 text-sm uppercase tracking-widest font-medium">{inc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-75 opacity-50" />
            <div className="relative bg-matte-black border border-gold/30 p-8 md:p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="bg-ivory/5 border-b border-ivory/20 py-4 text-ivory placeholder:text-ivory/20 focus:border-gold transition-all outline-none font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="email@address.com"
                        className="bg-ivory/5 border-b border-ivory/20 py-4 text-ivory placeholder:text-ivory/20 focus:border-gold transition-all outline-none font-light"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+968 0000 0000"
                        className="bg-ivory/5 border-b border-ivory/20 py-4 text-ivory placeholder:text-ivory/20 focus:border-gold transition-all outline-none font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-gold text-[10px] uppercase tracking-widest font-bold ml-1">Property Interest</label>
                      <select
                        className="bg-ivory/5 border-b border-ivory/20 py-4 text-ivory focus:border-gold transition-all outline-none appearance-none cursor-pointer font-light"
                      >
                        <option className="bg-matte-black text-ivory">Villa</option>
                        <option className="bg-matte-black text-ivory">Apartment</option>
                        <option className="bg-matte-black text-ivory">Penthouse</option>
                        <option className="bg-matte-black text-ivory">Land</option>
                      </select>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-6 bg-gold text-matte-black uppercase tracking-[0.3em] text-xs font-bold rounded-full hover:bg-white transition-all duration-500 shadow-xl shadow-gold/20 mt-4"
                  >
                    Request Exclusive Brochure
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-6"
                >
                  <div className="text-6xl mb-6">✨</div>
                  <h3 className="text-3xl font-serif text-ivory">Request Received</h3>
                  <p className="text-ivory/60 font-light max-w-xs mx-auto">
                    Our luxury consultants are preparing your personalized portfolio.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
