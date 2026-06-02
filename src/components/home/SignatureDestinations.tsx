"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const destinations = [
  { name: "Sultan Haitham City", description: "A visionary urban development", img: "/hero.jpg" },
  { name: "Al Mouj", description: "Prestigious waterfront communities", img: "/about.jpg" },
  { name: "Muscat Bay", description: "Your New Living Destination", img: "/p1.jpg" },
  { name: "Jebel Sifah", description: "Central vibrant city lifestyle", img: "/p2.jpg" },
  { name: "Sustainable City", description: "Modern urban development hub", img: "/p3.jpg" },
  { name: "Hawana Salalah", description: "Lush, serene Khareef escape", img: "/p4.jpg" },
];

export default function SignatureDestinations() {
  return (
    <section className="py-32 px-6 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-matte-black">
              Signature <span className="italic">Destinations</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest text-matte-black border-b border-matte-black/20 pb-2 hover:text-gold hover:border-gold transition-all duration-500"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden bg-warm-white cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 h-full w-full z-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <Image
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent" />
              </motion.div>

              <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4"
                >
                  <p className="text-ivory text-sm font-light italic">{dest.description}</p>
                </motion.div>
                <h3 className="text-2xl font-serif text-ivory uppercase tracking-wide">
                  {dest.name}
                </h3>
                <div className="w-12 h-px bg-gold mt-4 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
