"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-ivory">
      <Navbar />

      {/* About Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <img
            src="https://alwalaaoman.com/wp-content/uploads/2025/02/1.webp"
            alt="About Alwalaa"
            className="h-full w-full object-cover brightness-50"
          /> */}
          <div className="absolute inset-0 z-0 overflow-hidden">
  <iframe
    className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-125"
    src="https://www.youtube.com/embed/mPdMWJdCbMQ?autoplay=1&mute=1&controls=0&loop=1&playlist=mPdMWJdCbMQ&playsinline=1"
    title="Hero Background Video"
    allow="autoplay; fullscreen"
  />
  <div className="absolute inset-0 bg-black/45" />
</div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Our Heritage
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-ivory leading-tight">
              Crafting a Legacy <br />
              <span className="italic">of Excellence</span>
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
              More than just <br />
              <span className="italic text-gold">Real Estate.</span>
            </h2>
            <p className="text-matte-black/70 text-lg leading-relaxed font-light">
              At Alwalaa, our goal isn’t just to sell properties; it’s to truly help you feel at home in Oman. We believe in cultivating trust, relationships, and a future together. We redefine real estate investment for foreign investors and high-net-worth individuals, ensuring every transaction is a step toward a prestigious legacy.
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
            <img
              src="/about.jpg"
              alt="Oman Luxury"
              className="h-full w-full object-cover rounded-sm"
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
            <div className="w-48 h-48 mx-auto mb-8 overflow-hidden rounded-full">
              <img
                src="/ceo.webp" // Fallback to last asset
                alt="Eng. Humood Al-Adhari"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
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
