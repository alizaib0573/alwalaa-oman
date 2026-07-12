'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface CommunityLink {
  slug: string;
  name: string;
  image: string;
}

interface LuxRelatedCommunitiesProps {
  currentSlug: string;
  communities: CommunityLink[];
}

/** Convert slug to Title Case display name: "jebel-sifah" → "Jebel Sifah" */
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function LuxRelatedCommunities({ currentSlug, communities }: LuxRelatedCommunitiesProps) {
  const filtered = communities.filter(c => c.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-gold text-[10px] uppercase tracking-[0.25em] font-bold block">
            Explore More
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
            Other <span className="text-gold italic">Distinguished</span> Enclaves
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((community, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 cursor-pointer"
            >
              <Link href={`/${community.slug}`} className="block h-full w-full">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={community.image}
                    alt={slugToTitle(community.slug)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 space-y-3">
                  <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                    {slugToTitle(community.slug)}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Explore Community <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
