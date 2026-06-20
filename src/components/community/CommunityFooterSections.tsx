"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LocationProps {
  data: {
    mapCenter: { lat: number; lng: number };
    landmarks: { name: string; distance: string; time: string }[];
  };
}

export function CommunityLocation({ data }: LocationProps) {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Strategic Location</span>
          <h2 className="text-5xl md:text-7xl font-serif text-matte-black leading-tight tracking-tight">
            Where Is This <br />
            <span className="italic text-gold">Destination Located?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 h-[600px] rounded-[3rem] overflow-hidden border border-gold/20 relative group shadow-2xl">
            <div className="absolute inset-0 bg-matte-black flex items-center justify-center text-ivory/30 italic z-10">
              Interactive Cartographic Integration
            </div>
            <Image src="/p3.jpg" alt="Map" fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent" />
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-matte-black font-serif text-3xl mb-4">Nearby Landmarks</h3>
            {data.landmarks.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-matte-black/40 border border-ivory/10 hover:border-gold/30 transition-all group cursor-default"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-matte-black font-medium group-hover:text-gold transition-colors">{l.name}</span>
                  <span className="text-gold text-sm font-bold">{l.distance}</span>
                </div>
                <div className="text-matte-black/40 text-[10px] uppercase tracking-widest font-medium">
                  Estimated Travel Time: <span className="text-matte-black/80">{l.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PrioritiesProps {
  data: {
    points: { title: string; description: string }[];
  };
}

export function InvestorPriorities({ data }: PrioritiesProps) {
  return (
    <section className="py-32 bg-matte-black relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Investor Confidence</span>
            <h2 className="text-5xl md:text-7xl font-serif text-ivory leading-tight tracking-tight">
              Why Global <br />
              <span className="italic text-gold">Investors Prioritize</span>
            </h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-ivory/5 border border-ivory/10 hover:bg-ivory/10 transition-all duration-500 group"
              >
                <h4 className="text-gold font-serif text-2xl mb-4 group-hover:scale-105 transition-transform origin-left">{p.title}</h4>
                <p className="text-ivory/60 text-lg leading-relaxed font-light">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface GalleryProps {
  data: {
    categories: {
      name: string;
      images: string[];
    }[];
  };
}

export function CommunityGallery({ data }: GalleryProps) {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Visual Experience</span>
          <h2 className="text-5xl md:text-7xl font-serif text-matte-black leading-tight tracking-tight">A Glimpse of Paradise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.categories.map((cat, i) => (
            <div key={i} className="space-y-8">
              <div className="flex items-center gap-4 px-4">
                <div className="w-8 h-px bg-gold" />
                <h3 className="text-matte-black/60 text-xs uppercase tracking-[0.3em] font-bold">{cat.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cat.images.map((img, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.03 }}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border border-ivory/10 shadow-xl"
                  >
                    <Image src={img} alt="Gallery Image" fill className="object-cover transition-transform duration-700 hover:scale-110" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQProps {
  data: {
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

export function CommunityFAQs({ data }: FAQProps) {
  return (
    <section className="py-32 bg-matte-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Concierge Support</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory leading-tight tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {data.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl bg-ivory/5 border border-ivory/10 overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="p-8 flex justify-between items-center cursor-pointer group-hover:bg-ivory/10 transition-colors">
                <span className="text-ivory font-serif text-2xl group-hover:text-gold transition-colors">{faq.question}</span>
                <span className="text-gold text-3xl group-hover:rotate-180 transition-transform duration-500">+</span>
              </div>
              <div className="px-8 pb-8 text-ivory/50 text-lg leading-relaxed font-light">
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ name }: { name: string }) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image src="/p3.jpg" alt="CTA Background" fill className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/60 to-matte-black" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-serif text-ivory mb-12 leading-tight tracking-tight"
        >
          Ready to Secure <br />
          <span className="text-gold italic">Your Legacy in {name}?</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className="px-12 py-6 bg-gold text-matte-black uppercase tracking-[0.3em] text-xs font-bold rounded-full hover:bg-white transition-all duration-500 shadow-2xl shadow-gold/20">
            Schedule Private Consultation
          </button>
          <button className="px-12 py-6 border border-ivory/30 text-ivory uppercase tracking-[0.3em] text-xs font-bold rounded-full hover:bg-ivory hover:text-matte-black transition-all duration-500 backdrop-blur-sm">
            Explore All Estates
          </button>
        </div>
      </div>
    </section>
  );
}
