"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Globe,
  Star,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

const PERKS = [
  {
    icon: <TrendingUp className="w-6 h-6 text-gold" />,
    title: "High Commission Structure",
    desc: "Industry-leading commission rates that reward your performance and deal-closing expertise.",
  },
  {
    icon: <Globe className="w-6 h-6 text-gold" />,
    title: "Global Exposure",
    desc: "Work with HNW buyers from GCC, Europe, and Asia on Oman's most prestigious developments.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Mentorship Culture",
    desc: "Direct mentorship from Eng. Humood AlAdhari and senior advisors in the Oman property market.",
  },
  {
    icon: <Star className="w-6 h-6 text-gold" />,
    title: "Premium Brand Affiliation",
    desc: "Join a brand synonymous with trust, luxury, and excellence in Oman's real estate sector.",
  },
];

const POSITIONS = [
  {
    title: "Senior Property Advisor",
    location: "Muscat, Oman",
    type: "Full Time",
    desc: "Lead high-value transactions for our ITC communities portfolio and advise international clients on freehold investment opportunities.",
  },
  {
    title: "Junior Property Advisor",
    location: "Muscat, Oman",
    type: "Full Time",
    desc: "Support senior advisors in qualifying leads, conducting property viewings, and managing client relationships across our listings.",
  },
  {
    title: "Digital Marketing Specialist",
    location: "Muscat, Oman · Remote",
    type: "Full Time",
    desc: "Drive qualified international buyer traffic through paid social, SEO content, and social media campaigns targeting luxury real estate audiences.",
  },
  {
    title: "Real Estate Photographer / Videographer",
    location: "Muscat, Oman",
    type: "Freelance / Contract",
    desc: "Produce cinematic property photography and video tours for our portfolio of luxury villas, apartments, and ITC communities.",
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-ivory">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/p4.jpg"
            alt="Careers at Alwalaa"
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
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory leading-tight">
              Shape the Future of <br />
              <span className="italic text-gold">Luxury Real Estate</span>
            </h1>
            <p className="text-ivory/70 text-sm md:text-base font-light max-w-xl mx-auto pt-2">
              Alwalaa is where ambitious professionals build defining careers in Oman&apos;s most prestigious property market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CULTURE SECTION ── */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-matte-black leading-tight">
              A Legacy of <span className="italic text-gold">Excellence</span>
            </h2>
            <p className="text-matte-black/70 text-base leading-relaxed font-light">
              At Alwalaa, we foster a professional environment that inspires growth, collaboration, and success. We don&apos;t just sell luxury; we build lasting partnerships with investors, communities, and the professionals who represent our brand.
            </p>
            <p className="text-matte-black/60 text-sm leading-relaxed font-light">
              Whether you are an experienced real estate advisor looking to move upmarket, or an ambitious graduate eager to learn from the best, Alwalaa offers a clear path to professional distinction in Oman&apos;s property sector.
            </p>
            <div className="w-16 h-px bg-gold" />
          </motion.div>

          {/* Offset Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* SVG 1 — Dark Excellence Seal */}
            <div className="h-56 rounded-2xl shadow-lg bg-[#0c0c0c] flex items-center justify-center">
              <svg viewBox="0 0 240 220" width="210" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer octagonal double border */}
                <path d="M18 4 L222 4 L236 18 L236 202 L222 216 L18 216 L4 202 L4 18 Z" stroke="#C9A56A" strokeWidth="1.2"/>
                <path d="M22 9 L218 9 L230 21 L230 199 L218 211 L22 211 L10 199 L10 21 Z" stroke="#C9A56A" strokeWidth="0.5" opacity="0.4"/>
                {/* Corner L-ornaments */}
                <path d="M26 21 L26 33 M26 21 L38 21" stroke="#C9A56A" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M214 21 L214 33 M214 21 L202 21" stroke="#C9A56A" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M26 199 L26 187 M26 199 L38 199" stroke="#C9A56A" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M214 199 L214 187 M214 199 L202 199" stroke="#C9A56A" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Header */}
                <text x="120" y="40" textAnchor="middle" fontSize="10" fill="#C9A56A" letterSpacing="6" fontFamily="Georgia,serif">ALWALAA</text>
                <line x1="70" y1="49" x2="170" y2="49" stroke="#C9A56A" strokeWidth="0.5" opacity="0.5"/>
                {/* Double circle */}
                <circle cx="120" cy="118" r="60" stroke="#C9A56A" strokeWidth="0.9"/>
                <circle cx="120" cy="118" r="53" stroke="#C9A56A" strokeWidth="0.4" opacity="0.45"/>
                {/* 8-pointed star — alternating outer r=52 & inner r=23 */}
                <polygon
                  points="120,66 129,95 159,80 142,108 172,118 142,128 159,156 129,141 120,170 111,141 81,156 98,128 68,118 98,108 81,80 111,95"
                  stroke="#C9A56A" strokeWidth="1" fill="rgba(201,165,106,0.04)"
                />
                {/* Centre diamond */}
                <polygon points="120,112 126,118 120,124 114,118" fill="#C9A56A"/>
                {/* Footer */}
                <line x1="70" y1="185" x2="170" y2="185" stroke="#C9A56A" strokeWidth="0.5" opacity="0.5"/>
                <text x="120" y="197" textAnchor="middle" fontSize="7.5" fill="#C9A56A" letterSpacing="4" fontFamily="sans-serif" opacity="0.75">REAL ESTATE</text>
              </svg>
            </div>

            {/* SVG 2 — Ivory Compass Rose Medallion */}
            <div className="h-56 rounded-2xl shadow-lg mt-10 bg-[#f5f0e6] flex items-center justify-center">
              <svg viewBox="0 0 240 220" width="210" height="192" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ring */}
                <circle cx="120" cy="110" r="95" stroke="#C9A56A" strokeWidth="0.4" opacity="0.25"/>
                <circle cx="120" cy="110" r="88" stroke="#C9A56A" strokeWidth="0.8" opacity="0.5"/>
                {/* Cardinal ticks (outward from r=88 circle) */}
                <line x1="120" y1="22" x2="120" y2="14" stroke="#C9A56A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="208" y1="110" x2="216" y2="110" stroke="#C9A56A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="120" y1="198" x2="120" y2="206" stroke="#C9A56A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="32" y1="110" x2="24" y2="110" stroke="#C9A56A" strokeWidth="2" strokeLinecap="round"/>
                {/* Intercardinal ticks */}
                <line x1="182" y1="48" x2="186" y2="44" stroke="#C9A56A" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
                <line x1="182" y1="172" x2="186" y2="176" stroke="#C9A56A" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
                <line x1="58" y1="172" x2="54" y2="176" stroke="#C9A56A" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
                <line x1="58" y1="48" x2="54" y2="44" stroke="#C9A56A" strokeWidth="1" strokeLinecap="round" opacity="0.55"/>
                {/* Inner circle ring */}
                <circle cx="120" cy="110" r="22" stroke="#C9A56A" strokeWidth="0.8" opacity="0.55"/>
                {/* Main 4-pointed compass star */}
                <polygon
                  points="120,40 134,96 190,110 134,124 120,180 106,124 50,110 106,96"
                  stroke="#C9A56A" strokeWidth="1.3" fill="rgba(201,165,106,0.07)"
                />
                {/* Rotated 45° secondary star */}
                <polygon
                  points="152,78 140,110 152,142 120,130 88,142 100,110 88,78 120,90"
                  stroke="#C9A56A" strokeWidth="0.8" fill="rgba(201,165,106,0.04)" opacity="0.8"
                />
                {/* Centre dot + ring */}
                <circle cx="120" cy="110" r="8" stroke="#C9A56A" strokeWidth="0.7" opacity="0.55"/>
                <circle cx="120" cy="110" r="3.5" fill="#C9A56A"/>
                {/* N label */}
                <text x="120" y="11" textAnchor="middle" fontSize="8" fill="#C9A56A" fontFamily="Georgia,serif" fontWeight="bold" opacity="0.9">N</text>
                {/* Bottom label */}
                <text x="120" y="213" textAnchor="middle" fontSize="7" fill="#C9A56A" letterSpacing="3" fontFamily="sans-serif" opacity="0.65">MUSCAT · OMAN</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-2">
              Why Join Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-matte-black">
              The Alwalaa <span className="italic text-gold">Advantage</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-ivory p-7 rounded-2xl border border-champagne/20 hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-5">{perk.icon}</div>
                <h3 className="text-base font-serif text-matte-black mb-2">{perk.title}</h3>
                <p className="text-matte-black/60 text-sm font-light leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block mb-2">
              Current Opportunities
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-matte-black italic">
              Open Positions
            </h2>
          </div>
          <div className="space-y-4">
            {POSITIONS.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white border border-champagne/30 p-7 rounded-xl hover:border-gold/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-serif text-matte-black">{pos.title}</h3>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-gold border border-gold/40 px-2.5 py-0.5 rounded-full">
                        {pos.type}
                      </span>
                    </div>
                    <p className="text-matte-black/60 text-sm font-light mb-3 leading-relaxed max-w-xl">
                      {pos.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-matte-black/40 text-xs">
                      <MapPin size={12} />
                      <span>{pos.location}</span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:info@alwalaaoman.com?subject=Application: ${encodeURIComponent(pos.title)}`}
                    className="flex items-center gap-2 bg-matte-black text-ivory text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full hover:bg-gold hover:text-matte-black transition-all duration-300 whitespace-nowrap flex-shrink-0"
                  >
                    Apply Now <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION CTA ── */}
      <section className="py-20 px-6 text-center bg-matte-black text-ivory relative overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] w-64 h-64 border border-gold/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-64 h-64 border border-gold/10 rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold block">
            Don&apos;t see your role?
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic">
            We&apos;re Always Looking for <br />
            <span className="text-gold">Exceptional Talent</span>
          </h2>
          <p className="text-ivory/60 text-sm font-light max-w-xl mx-auto leading-relaxed">
            If you are passionate about luxury real estate, driven by performance, and aligned with Alwalaa&apos;s values, send us your CV — we will reach out when the right role opens.
          </p>
          <Link
            href="mailto:info@alwalaaoman.com?subject=General Application - Alwalaa Real Estate"
            className="inline-block bg-gold text-matte-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-matte-black transition-all duration-300"
          >
            Send Your CV
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
