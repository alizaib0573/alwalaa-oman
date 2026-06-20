'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const layoutMap = {
  wide: "md:col-span-3 row-span-2",
  tall: "md:col-span-2 row-span-2",
  square: "md:col-span-2 row-span-1",
  slim: "md:col-span-1 row-span-2",
};

export default function TopCommunities() {
  const [communities, setCommunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCommunities() {
      try {
        const res = await fetch('/api/communities');
        const data = await res.json();
        setCommunities(data);
      } catch (e) {
        console.error('Failed to fetch communities', e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCommunities();
  }, []);

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
          >
            The Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-matte-black leading-tight"
          >
            Discover Oman&apos;s <br />
            <span className="italic text-gold">Most Coveted Enclaves</span>
          </motion.h2>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-dense gap-6 auto-rows-[250px]">
          {isLoading ? (
            <div className="col-span-full py-20 text-center text-zinc-400 animate-pulse">
              Curating exclusive enclaves...
            </div>
          ) : communities.length === 0 ? (
            <div className="col-span-full py-20 text-center text-zinc-400">
              No communities available at the moment.
            </div>
          ) : (
            communities.map((community: any, index: number) => {
              // Since DB doesn't have layout, we assign one based on index or random
              const layouts = ['wide', 'tall', 'square', 'slim'];
              const layout = layouts[index % 4];

              return (
                <Link
                  key={community.id}
                  href={`/communities/${community.slug}`}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl cursor-pointer block h-full",
                    layoutMap[layout as keyof typeof layoutMap] || "md:col-span-2 row-span-1"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative w-full h-full"
                  >
                    {/* Image with Zoom Effect */}
                    <Image
                      src={community.imageUrl || '/placeholder.jpg'}
                      alt={community.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    {/* Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-ivory">
                      <motion.div
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          Exclusive Enclave
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif mb-2 group-hover:text-gold transition-colors duration-500">
                          {community.name}
                        </h3>
                        <p className="text-sm text-ivory/60 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-2 group-hover:translate-y-0">
                          {community.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              );
            })
          )}
        </div>

        {/* Bottom Explore Link */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 group cursor-pointer"
          >
            <span className="text-matte-black text-xs uppercase tracking-widest font-bold">
              View All Destinations
            </span>
            <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-500" />
            <span className="text-gold text-xs uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform duration-500">
              Explore &rarr;
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
