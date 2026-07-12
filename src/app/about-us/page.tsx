"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext";
import { Award, Compass, ShieldCheck, Quote } from "lucide-react";

const CORE_VALUES = [
  {
    icon: <ShieldCheck className="text-gold w-8 h-8" />,
    title: "Uncompromising Integrity",
    desc: "Complete transparency and trust are at the heart of every luxury transaction we guide.",
  },
  {
    icon: <Award className="text-gold w-8 h-8" />,
    title: "Bespoke Excellence",
    desc: "We curate Omani properties that match the demanding standards of global high-net-worth investors.",
  },
  {
    icon: <Compass className="text-gold w-8 h-8" />,
    title: "Local Authority, Global Vision",
    desc: "Deep knowledge of Oman's ITC regulations paired with an understanding of global investment standards.",
  },
];

export default function AboutPage() {
  const { openPopup } = usePopup();

  return (
    <main className="relative min-h-screen bg-ivory text-matte-black">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/p3.jpg"
            alt="About Alwalaa Real Estate"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-ivory" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold block">
              Our Legacy
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory leading-tight">
              Setting the Standard in <br />
              <span className="italic text-gold">Oman Real Estate</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND STORY SECTION ── */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-2">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-matte-black leading-tight">
                Crafting a <span className="italic text-gold">Legacy of Trust</span>
              </h2>
            </div>
            <p className="text-matte-black/75 text-base md:text-lg leading-relaxed font-light">
              At Alwalaa Real Estate, led by Eng. Humood AlAdhari, we do not just facilitate property transactions; we help global investors build wealth, discover bespoke luxury residences, and navigate Oman&apos;s dynamic real estate landscape with complete confidence. 
            </p>
            <p className="text-matte-black/60 text-sm leading-relaxed font-light">
              From waterfront villas in Al Mouj and high-yielding apartments in Muscat Bay, to forward-looking off-plan developments in Sultan Haitham City, we provide premium consulting and end-to-end guidance.
            </p>
            <div className="w-16 h-px bg-gold" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about.jpg"
              alt="Oman Waterfront Luxury"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES SECTION ── */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-2">
              Our Pillars
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-matte-black">
              Founding Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-ivory border border-champagne/20 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6">{val.icon}</div>
                <h3 className="text-lg font-serif text-matte-black mb-3">{val.title}</h3>
                <p className="text-matte-black/60 text-sm font-light leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP (EDITORIAL QUOTE LAYOUT) ── */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12 lg:gap-16 items-center">
            {/* CEO Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/ceo.webp"
                alt="Eng. Humood Al-Adhari"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-ivory">
                <h4 className="text-xl font-serif">Eng. Humood Al-Adhari</h4>
                <p className="text-[10px] uppercase tracking-widest text-gold mt-1">Chief Executive Officer</p>
              </div>
            </motion.div>

            {/* CEO Quote & Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Quote className="text-gold/40 w-12 h-12" />
              <blockquote className="text-xl md:text-2xl font-serif italic text-matte-black leading-relaxed">
                &ldquo;Our vision is to transform the Omani real estate landscape into a global hub for prestigious investment. We do not just build transactions, we construct lasting partnerships grounded in transparency and localized market expertise.&rdquo;
              </blockquote>
              <div className="space-y-3 text-matte-black/70 text-sm font-light leading-relaxed">
                <p>
                  With years of design, development, and advisory experience, Eng. Humood AlAdhari directs Alwalaa Real Estate with a strategic focus on premium Integrated Tourism Complex (ITC) community access, securing lifetime residency benefits for foreign investors, and ensuring maximum capital growth.
                </p>
              </div>
              <button
                onClick={openPopup}
                className="inline-flex bg-matte-black text-ivory text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 px-8 hover:bg-gold hover:text-matte-black transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-24 px-6 bg-matte-black text-ivory relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 border border-gold/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 border border-gold/10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 md:p-12 border border-gold/20 rounded-2xl bg-[#111111]/50 backdrop-blur-sm"
            >
              <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-bold block">
                The Goal
              </span>
              <h3 className="text-2xl md:text-3xl font-serif italic text-gold">Our Vision</h3>
              <p className="text-ivory/80 text-base md:text-lg font-light leading-relaxed">
                To stand as the absolute benchmark for international investors seeking Oman’s finest real estate portfolio, redefining luxury service and advisory transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 md:p-12 border border-gold/20 rounded-2xl bg-[#111111]/50 backdrop-blur-sm"
            >
              <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-bold block">
                The Path
              </span>
              <h3 className="text-2xl md:text-3xl font-serif italic text-gold">Our Mission</h3>
              <p className="text-ivory/80 text-base md:text-lg font-light leading-relaxed">
                To empower global buyers by presenting curated real estate selections with verified ROI projections, enabling them to secure lifetime residency and outstanding homes in Oman.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="py-20 px-6 bg-gold text-matte-black text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Ready to Invest in <span className="italic">Oman&apos;s Premium Market?</span>
          </h2>
          <p className="text-matte-black/80 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Connect with our advisory team to receive exclusive off-market listings and legal guidance on ITC ownership.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-matte-black text-ivory text-xs uppercase tracking-[0.2em] font-bold py-4 px-10 hover:bg-white hover:text-matte-black transition-all duration-300"
          >
            Start Your Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
