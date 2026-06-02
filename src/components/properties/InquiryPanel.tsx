"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, User, Mail, Phone } from "lucide-react";
import { PropertyUI } from "@/types/property";

interface InquiryPanelProps {
  property: PropertyUI;
}

export default function InquiryPanel({ property }: InquiryPanelProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 bg-white border border-champagne/30 shadow-xl rounded-sm p-8 space-y-8"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-serif text-matte-black">Inquire About Property</h3>
        <p className="text-xs uppercase tracking-widest text-gold font-bold">Request exclusive details</p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-gold/10 border border-gold/30 text-center space-y-4"
        >
          <div className="text-gold flex justify-center"><Send size={32} /></div>
          <p className="text-sm text-matte-black font-medium">Your request has been sent. Our consultants will contact you shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-matte-black/30" size={16} />
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-ivory border border-champagne p-4 pl-10 text-xs outline-none focus:border-gold transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-matte-black/30" size={16} />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-ivory border border-champagne p-4 pl-10 text-xs outline-none focus:border-gold transition-all"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-matte-black/30" size={16} />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full bg-ivory border border-champagne p-4 pl-10 text-xs outline-none focus:border-gold transition-all"
              />
            </div>
            <div className="relative">
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                className="w-full bg-ivory border border-champagne p-4 text-xs outline-none focus:border-gold transition-all resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-matte-black text-ivory py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-matte-black transition-all duration-500 flex items-center justify-center gap-3"
            >
              Request Details <Send size={14} />
            </button>
            <button
              type="button"
              className="w-full border border-matte-black text-matte-black py-4 text-xs uppercase tracking-widest font-bold hover:bg-matte-black hover:text-ivory transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Calendar size={14} /> Schedule Viewing
            </button>
          </div>
        </form>
        )}
    </motion.div>
  );
}
