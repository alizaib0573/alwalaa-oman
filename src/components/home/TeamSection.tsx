"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  linkedIn?: string;
}

const team: TeamMember[] = [
  {
    name: "Ahmed Al-Sayegh",
    role: "Chief Investment Officer",
    specialty: "Luxury Portfolio Management",
    image: "/teams/man1.jpg",
  },
  {
    name: "Sarah Al-Maamari",
    role: "Head of Residential",
    specialty: "High-Net-Worth Advisory",
    image: "/teams/women1.jpg",
  },
  {
    name: "Omar Al-Zadjali",
    role: "Commercial Strategist",
    specialty: "Mixed-Use Developments",
    image: "/teams/man2.jpg",
  },
  {
    name: "Layla Al-Harthi",
    role: "Client Relations Director",
    specialty: "International Investor Relations",
    image: "/teams/women2.jpg",
  },
  {
    name: "Khalid Al-Said",
    role: "Portfolio Architect",
    specialty: "Asset Valuation",
    image: "/teams/man3.jpg",
  },
  {
    name: "Mariam Al-Said",
    role: "Legal Counsel",
    specialty: "Real Estate Law",
    image: "/teams/women3.jpg",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  // Calculate movement based on how many items we show
  // We'll use a simpler percentage based on the total number of items
  const shiftPercentage = currentIndex * (100 / team.length);

  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
            >
              Our Experts
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-matte-black leading-tight"
            >
              The Visionaries <br />
              <span className="italic">Behind Your Success</span>
            </motion.h2>
          </div>
          <Link
            href="/about"
            className="hidden md:block text-xs uppercase tracking-widest text-matte-black border-b border-matte-black/20 pb-2 hover:text-gold hover:border-gold transition-all duration-500"
          >
            Meet the Full Team
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `calc(-${shiftPercentage}% - ${currentIndex * 32}px)`
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {team.map((member, i) => (
                <div
                  key={i}
                  className="min-w-[calc(100%-32px)] sm:min-w-[calc(50%-16px)] lg:min-w-[calc(25%-24px)] space-y-6"
                >
                  <div className="group/card relative aspect-[3/4] overflow-hidden bg-zinc-100 rounded-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-matte-black/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-serif text-matte-black group-hover/card:text-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gold uppercase tracking-widest text-[10px] font-bold">
                      {member.role}
                    </p>
                    <p className="text-matte-black/50 text-xs font-light italic">
                      {member.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-matte-black/10 hover:bg-gold hover:text-matte-black transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {team.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    currentIndex === i ? "w-8 bg-gold" : "w-2 bg-matte-black/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-matte-black/10 hover:bg-gold hover:text-matte-black transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
