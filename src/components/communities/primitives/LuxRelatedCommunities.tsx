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

export default function LuxRelatedCommunities({ currentSlug, communities }: LuxRelatedCommunitiesProps) {
  const filtered = communities.filter(c => c.slug !== currentSlug);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
            Other <span className="text-gold italic">Distinguished</span> Enclaves
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((community, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 cursor-pointer"
            >
              <Link href={`/${community.slug}`}>
                <div className="absolute inset-0 z-0">
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 space-y-4">
                  <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">
                    {community.name}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium group-hover:text-white transition-colors">
                    Explore Community &rarr;
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
