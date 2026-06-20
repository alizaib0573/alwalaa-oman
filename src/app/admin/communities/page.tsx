'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  Pencil,
  Trash2,
  Building2,
  MapPin,
  Image as ImageIcon,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

function CommunityAdminCard({ community, onEdit, onDelete }: { community: any, onEdit: () => void, onDelete: () => void }) {
  return (
    <motion.div
      layout
      className="group relative bg-charcoal border border-luxury-border rounded-[24px] overflow-hidden transition-all duration-500 hover:border-gold-primary/40 flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden">
        {community.imageUrl ? (
          <img
            src={community.imageUrl}
            alt={community.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-luxury-black flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-zinc-800" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />

        <div className="absolute top-4 right-4 flex gap-2">
          {community.featured && (
            <span className="bg-gold-primary text-luxury-black px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-sm shadow-lg shadow-gold-primary/20">
              Featured Development
            </span>
          )}
        </div>
      </div>

      <div className="p-8 space-y-6 flex-1 flex flex-col">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gold-primary/80">
            <MapPin size={12} />
            <span className="text-[10px] uppercase tracking-widest font-medium">
              {community.location}
            </span>
          </div>
          <h3 className="text-2xl font-serif text-white tracking-tight group-hover:text-gold-primary transition-colors">
            {community.name}
          </h3>
        </div>

        <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed font-light italic">
          {community.description || 'No description provided for this exclusive development.'}
        </p>

        <div className="mt-auto pt-6 border-t border-luxury-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <Building2 className="w-3 h-3 text-gold-primary/60" />
            {community._count?.properties || 0} Properties
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="p-2.5 rounded-lg border border-luxury-border text-zinc-500 hover:text-white hover:border-gold-primary transition-all duration-300"
              title="Edit Community"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={onDelete}
              className="p-2.5 rounded-lg border border-luxury-border text-zinc-500 hover:text-red-400 hover:border-red-400/30 transition-all duration-300"
              title="Delete Community"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunityAdminPage() {
  const [communities, setCommunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCommunities() {
      try {
        const res = await fetch('/api/admin/communities');
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
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <h2 className="text-5xl font-serif text-white tracking-tight">
            Community <span className="text-gold-primary">Management</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl font-light leading-relaxed">
            Oversee the exclusive residential zones and premier developments within the Alwalaa portfolio.
          </p>
        </div>
        <Link
          href="/admin/communities/new"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gold-primary text-luxury-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add Community
        </Link>
      </div>

      <div className="min-h-[600px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full py-32">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Loading Developments...</p>
            </div>
          </div>
        ) : communities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-charcoal border border-dashed border-luxury-border rounded-[24px]">
            <div className="w-16 h-16 rounded-full bg-luxury-black border border-luxury-border flex items-center justify-center text-zinc-600">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-white">No Communities Found</h3>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                Your exclusive residential portfolio is currently empty. Begin by adding a new premium community.
              </p>
            </div>
            <Link
              href="/admin/communities/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-primary text-luxury-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold-light transition-all shadow-lg shadow-gold-primary/20"
            >
              <Plus className="w-4 h-4" />
              Add Community
            </Link>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {communities.map((community: any) => (
              <CommunityAdminCard
                key={community.id}
                community={community}
                onEdit={() => window.location.href = `/admin/communities/${community.id}`}
                onDelete={() => {
                  if(confirm(`Are you sure you want to delete community "${community.name}"?`)) {
                    fetch(`/api/admin/communities/${community.id}`, { method: 'DELETE' }).then(() => window.location.reload());
                  }
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
