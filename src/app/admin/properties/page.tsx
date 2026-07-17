'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Pencil,
  Trash2,
  Eye,
  LayoutGrid,
  List,
  MapPin,
  Bed,
  Bath,
  Square,
  Building2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyAdminCardProps {
  property: any;
  onEdit: () => void;
  onDelete: () => void;
}

function PropertyAdminCard({ property, onEdit, onDelete }: PropertyAdminCardProps) {
  return (
    <motion.div
      layout
      className="group relative bg-charcoal border border-luxury-border rounded-[24px] overflow-hidden transition-all duration-500 hover:border-gold-primary/40 flex flex-col h-full"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={property.gallery?.[0] || property.images?.[0] || '/placeholder-property.jpg'}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-gold-primary text-luxury-black px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-sm">
            {property.status}
          </span>
          {property.featured && (
            <span className="bg-ivory text-luxury-black px-3 py-1 text-[9px] uppercase tracking-widest font-bold rounded-sm">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6 flex-1 flex flex-col">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gold-primary/80">
            <MapPin size={12} />
            <span className="text-[10px] uppercase tracking-widest font-medium">
              {property.location}
            </span>
          </div>
          <h3 className="text-xl font-serif text-white tracking-tight line-clamp-1 group-hover:text-gold-primary transition-colors">
            {property.title}
          </h3>
        </div>

        <div className="flex justify-between items-end">
          <p className="text-lg font-serif text-white">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: property.currency || 'OMR' }).format(Number(property.price))}
          </p>

          <div className="grid grid-cols-3 gap-3 text-[10px] text-zinc-500 uppercase tracking-tighter">
            <div className="flex flex-col items-center gap-1">
              <Bed size={14} className="text-gold-primary/60" />
              <span>{property.bedrooms} l</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath size={14} className="text-gold-primary/60" />
              <span>{property.bathrooms} b</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Square size={14} className="text-gold-primary/60" />
              <span>{property.area} m²</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-luxury-border flex items-center gap-3">
          <button
            onClick={onEdit}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-luxury-black text-white text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold-primary hover:text-luxury-black transition-all duration-300"
          >
            <Pencil className="w-3 h-3" /> Edit
          </button>
          <button
            onClick={onDelete}
            className="p-3 rounded-lg border border-luxury-border text-zinc-500 hover:text-red-400 hover:border-red-400/30 transition-all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

const PAGE_SIZE = 20;

export default function PropertyAdminPage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Reset to the first page whenever the search term changes so results stay in sync.
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    let cancelled = false;
    // Debounce so typing in the search box doesn't fire a request per keystroke.
    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          page: String(page),
          pageSize: String(PAGE_SIZE),
        });
        if (searchTerm.trim()) params.set('search', searchTerm.trim());

        const res = await fetch(`/api/admin/properties?${params.toString()}`);
        const result = await res.json();
        if (cancelled) return;

        setProperties(result.data ?? []);
        setTotalPages(result.totalPages ?? 1);
        setTotal(result.total ?? 0);
      } catch (e) {
        console.error('Failed to fetch properties', e);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [page, searchTerm]);

  // Search + pagination are handled server-side now; render whatever the API returned.
  const filteredProperties = properties;

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <h2 className="text-5xl font-serif text-white tracking-tight">
            Property <span className="text-gold-primary">Inventory</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl font-light leading-relaxed">
            Curate and manage your exclusive collection of luxury estate listings.
          </p>
        </div>
        <Link
          href="/admin/properties/new"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gold-primary text-luxury-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add New Property
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-[450px] group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-gold-primary transition-colors" />
          <input
            type="text"
            placeholder="Search exclusive listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-6 py-3 bg-charcoal border border-luxury-border rounded-xl focus:outline-none focus:border-gold-primary/50 transition-all text-sm text-white placeholder:text-zinc-600"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex p-1 bg-charcoal border border-luxury-border rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewMode === 'grid' ? "bg-gold-primary text-luxury-black shadow-sm" : "text-zinc-500 hover:text-white"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                "p-2 rounded-lg transition-all",
                viewMode === 'list' ? "bg-gold-primary text-luxury-black shadow-sm" : "text-zinc-500 hover:text-white"
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-charcoal border border-luxury-border rounded-xl text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-all">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="min-h-[600px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full py-32">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Curating Portfolio...</p>
            </div>
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-charcoal border border-dashed border-luxury-border rounded-[24px]">
            <div className="w-16 h-16 rounded-full bg-luxury-black border border-luxury-border flex items-center justify-center text-zinc-600">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-white">No Properties Found</h3>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                We couldn't find any listings matching your search. Start building your luxury portfolio by adding your first property.
              </p>
            </div>
            <Link
              href="/admin/properties/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-primary text-luxury-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold-light transition-all shadow-lg shadow-gold-primary/20"
            >
              <Plus className="w-4 h-4" />
              Add Property
            </Link>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {viewMode === 'grid' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {filteredProperties.map((property: any) => (
                  <PropertyAdminCard
                    key={property.id}
                    property={property}
                    onEdit={() => window.location.href = `/admin/properties/${property.id}`}
                    onDelete={() => {
                      if(confirm(`Are you sure you want to delete "${property.title}"?`)) {
                        fetch(`/api/admin/properties/${property.id}`, { method: 'DELETE' }).then(() => window.location.reload());
                      }
                    }}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-charcoal border border-luxury-border rounded-[24px] overflow-hidden"
              >
                <table className="w-full text-left text-sm">
                  <thead className="text-zinc-500 border-b border-luxury-border bg-luxury-black/50">
                    <tr className="uppercase tracking-widest text-[10px] font-bold">
                      <th className="px-8 py-6 font-medium">Property Portfolio</th>
                      <th className="px-6 py-6 font-medium">Pricing</th>
                      <th className="px-6 py-6 font-medium">Status</th>
                      <th className="px-6 py-6 font-medium">Type</th>
                      <th className="px-8 py-6 font-medium text-right">Management</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-luxury-border">
                    {filteredProperties.map((property: any) => (
                      <tr key={property.id} className="group hover:bg-white/5 transition-all duration-300">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-lg bg-luxury-black overflow-hidden border border-luxury-border">
                              <img
                                src={property.gallery?.[0] || property.images?.[0] || '/placeholder-property.jpg'}
                                alt={property.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-serif text-white text-base group-hover:text-gold-primary transition-colors">{property.title}</span>
                              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{property.slug}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 font-serif text-white">
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: property.currency || 'OMR' }).format(Number(property.price))}
                        </td>
                        <td className="px-6 py-6">
                          <span className={cn(
                            "px-3 py-1 rounded-sm text-[9px] uppercase tracking-widest font-bold",
                            property.status === 'READY_TO_MOVE' ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                            property.status === 'OFF_PLAN' ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                            "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
                          )}>
                            {property.status}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-zinc-400 font-light">{property.type}</td>
                        <td className="px-8 py-6">
                          <div className="flex items-center justify-end gap-3">
                            <Link
                              href={`/admin/properties/${property.id}`}
                              className="p-2.5 rounded-lg hover:bg-gold-primary hover:text-luxury-black text-zinc-500 hover:text-luxury-black transition-all duration-300"
                              title="Edit Property"
                            >
                              <Pencil className="w-4 h-4" />
                            </Link>
                            <button
                              className="p-2.5 rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400 transition-all duration-300"
                              title="Delete Property"
                              onClick={() => {
                                if(confirm(`Are you sure you want to delete "${property.title}"?`)) {
                                  fetch(`/api/admin/properties/${property.id}`, { method: 'DELETE' }).then(() => window.location.reload());
                                }
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        </div>

        {!isLoading && total > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
              Showing {(page - 1) * PAGE_SIZE + 1}&ndash;{Math.min(page * PAGE_SIZE, total)} of {total}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-charcoal border border-luxury-border rounded-xl text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-white hover:border-gold-primary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-zinc-400 disabled:hover:border-luxury-border"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium px-2">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-charcoal border border-luxury-border rounded-xl text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-white hover:border-gold-primary/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-zinc-400 disabled:hover:border-luxury-border"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
  );
}
