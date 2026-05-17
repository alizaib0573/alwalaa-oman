"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const properties = [
  { name: "The Waterfront Villa", location: "Al Mouj", price: "From $1.2M", img: "/p1.jpg" },
  { name: "Sultan Haitham Penthouse", location: "Sultan Haitham City", price: "From $850K", img: "/p2.jpg" },
  { name: "Bay View Estate", location: "Muscat Bay", price: "From $2.1M", img: "/p3.jpg" },
  { name: "Sifah Cliff House", location: "Jebel Sifah", price: "From $600K", img: "/p4.jpg" },
];

export default function FeaturedProperties() {
  return (
    <section className="py-32 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Elite Collection
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-matte-black">
              Featured <span className="italic">Properties</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest text-matte-black border-b border-matte-black/20 pb-2 hover:text-gold hover:border-gold transition-all duration-500"
          >
            Explore All Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden"
            >
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                  src={prop.img}
                  alt={prop.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 p-10 w-full space-y-6">
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <p className="text-gold uppercase tracking-widest text-xs font-bold">{prop.location}</p>
                </motion.div>
                <h3 className="text-3xl font-serif text-ivory uppercase tracking-wide">
                  {prop.name}
                </h3>
                <div className="flex justify-between items-end">
                  <p className="text-ivory/60 text-sm font-light">{prop.price}</p>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-widest text-ivory border border-ivory/30 px-6 py-3 hover:bg-ivory hover:text-matte-black transition-all duration-500"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
