'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropertyCard from '@/components/properties/PropertyCard';
import { PropertyUI } from '@/types/property';

interface LuxFeaturedPropertiesProps {
  communitySlug: string;
  title?: string;
}

export default function LuxFeaturedProperties({ communitySlug, title }: LuxFeaturedPropertiesProps) {
  const [properties, setProperties] = useState<PropertyUI[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch(`/api/properties?communitySlug=${communitySlug}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const arr = Array.isArray(data) ? data : [];
        const mapped = arr.map((p: any) => ({
          ...p,
          location: p.community?.location || p.location,
          community: p.community?.name || '',
          images: p.gallery || [],
          area: Number(p.areaSqm),
        }));
        setProperties(mapped);
      } catch (e) {
        console.error('Failed to fetch featured properties', e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProperties();
  }, [communitySlug]);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
            {title || "Featured Residences"}
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20 text-zinc-500 font-light italic animate-pulse">
            Curating the collection...
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop, index) => (
              <PropertyCard key={prop.id} property={prop} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <p className="text-zinc-500 font-light italic">
              No active listings in this community. <br />
              <span className="text-gold not-italic font-medium">Contact us for off-market opportunities.</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
