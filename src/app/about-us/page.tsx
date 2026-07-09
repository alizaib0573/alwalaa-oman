"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-ivory">
      <Navbar />

      {/* About Hero */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/p3.jpg"
            alt="About Alwalaa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
          Crafting a legacy 
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-ivory leading-tight">
               Setting the Standard in<br />
              <span className="italic">Oman Real Estate</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-matte-black">
              Crafting a<br />
              <span className="italic text-gold">Legacy</span>
            </h2>
            <p className="text-matte-black/70 text-lg leading-relaxed font-light">
              At AlWalaa Real Estate, we don't just help you buy property, we help you invest with confidence, secure your future, and find a place you'll truly call home. From luxury villas and waterfront apartments to freehold investment opportunities, we're committed to delivering trusted guidance and exceptional value at every step.
            </p>
            <div className="w-20 h-px bg-gold" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="/about.jpg"
              alt="Oman Luxury"
              fill
              className="object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            Our Visionaries
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-matte-black">
            Executive Leadership
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative p-12 bg-ivory text-center shadow-sm"
          >
            <div className="w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full relative">
              <Image
                src="/ceo.webp"
                alt="Eng. Humood Al-Adhari"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-3xl font-serif text-matte-black uppercase tracking-wide">
              Eng. Humood Al-Adhari
            </h3>
            <p className="text-gold uppercase tracking-widest text-xs font-bold mt-2">Chief Executive Officer</p>
            <p className="mt-6 text-matte-black/60 font-light leading-relaxed max-w-md mx-auto">
              Leading Alwalaa with a vision to transform the Omani real estate landscape into a global hub for prestigious investment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 px-6 bg-matte-black text-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 p-10 border border-gold/30"
          >
            <h3 className="text-3xl font-serif italic text-gold">Our Vision</h3>
            <p className="text-ivory/70 text-lg font-light leading-relaxed">
              To be the top choice for international investors seeking Oman’s finest real estate, redefining the standards of luxury and service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 p-10 border border-gold/30"
          >
            <h3 className="text-3xl font-serif italic text-gold">Our Mission</h3>
            <p className="text-ivory/70 text-lg font-light leading-relaxed">
              To empower global buyers through transparency, expertise, and a commitment to excellence, helping them secure a prestigious home and future in Oman.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
