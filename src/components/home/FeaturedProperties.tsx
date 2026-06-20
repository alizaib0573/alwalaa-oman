'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await fetch('/api/properties?featured=true');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProperties(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error('Failed to fetch featured properties', e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFeatured();
  }, []);

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
            href="/properties"
            className="text-xs uppercase tracking-widest text-matte-black border-b border-matte-black/20 pb-2 hover:text-gold hover:border-gold transition-all duration-500"
          >
            Explore All Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {isLoading ? (
            <div className="col-span-full py-20 text-center text-zinc-400 animate-pulse">
              Curating elite collection...
            </div>
          ) : properties.length === 0 ? (
            <div className="col-span-full py-20 text-center text-zinc-400">
              No featured properties currently available.
            </div>
          ) : (
            properties.map((prop: any, i: number) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[600px] overflow-hidden"
              >
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                  <Image
                    src={prop.gallery?.[0] || '/placeholder.jpg'}
                    alt={prop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-0 left-0 p-10 w-full space-y-6">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <p className="text-gold uppercase tracking-widest text-xs font-bold">{prop.community?.name || prop.location}</p>
                  </motion.div>
                  <h3 className="text-3xl font-serif text-ivory uppercase tracking-wide">
                    {prop.title}
                  </h3>
                  <div className="flex justify-between items-end">
                    <p className="text-ivory/60 text-sm font-light">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: prop.currency || 'OMR' }).format(Number(prop.price))}
                    </p>
                    <Link
                      href={`/properties/${prop.slug}`}
                      className="text-xs uppercase tracking-widest text-ivory border border-ivory/30 px-6 py-3 hover:bg-ivory hover:text-matte-black transition-all duration-500"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
