'use client';

import React, { useEffect, useState } from 'react';
import {
  Search,
  Filter,
  CheckCircle,
  Archive,
  Trash2,
  User,
  Calendar,
  MessageSquare,
  Star,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch(`/api/admin/leads?status=${filterStatus === 'ALL' ? '' : filterStatus}&search=${searchTerm}`);
        const data = await res.json();
        setLeads(data);
      } catch (e) {
        console.error('Failed to fetch leads', e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLeads();
  }, [searchTerm, filterStatus]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      window.location.reload();
    } catch (e) {
      alert('Failed to update status');
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead permanently?')) return;
    try {
      await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' });
      window.location.reload();
    } catch (e) {
      alert('Failed to delete lead');
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <h2 className="text-5xl font-serif text-white tracking-tight">
            Lead <span className="text-gold-primary">Intelligence</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl font-light leading-relaxed">
            Strategic management of high-net-worth inquiries and potential acquisitions.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-[450px] group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-gold-primary transition-colors" />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-6 py-3 bg-charcoal border border-luxury-border rounded-xl focus:outline-none focus:border-gold-primary/50 transition-all text-sm text-white placeholder:text-zinc-600"
          />
        </div>

        <div className="flex items-center gap-3">
          {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'ARCHIVED'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={cn(
                "px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all duration-300 border",
                filterStatus === status
                  ? "bg-gold-primary text-luxury-black border-gold-primary shadow-lg shadow-gold-primary/20"
                  : "bg-charcoal text-zinc-400 border-luxury-border hover:text-white hover:border-gold-primary/50"
              )}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-full py-32">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Analyzing Intelligence...</p>
            </div>
          </div>
        ) : leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-charcoal border border-dashed border-luxury-border rounded-[24px]">
            <div className="w-16 h-16 rounded-full bg-luxury-black border border-luxury-border flex items-center justify-center text-zinc-600">
              <User className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-white">No Leads Identified</h3>
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                Your intelligence center is currently empty. New high-net-worth inquiries will appear here.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence mode="popIn">
              {leads.map((lead: any) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group bg-charcoal border border-luxury-border rounded-[24px] p-8 transition-all duration-500 hover:border-gold-primary/40"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-full bg-luxury-black border border-luxury-border flex items-center justify-center text-gold-primary group-hover:scale-110 transition-transform duration-500">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-serif text-white tracking-tight">{lead.name}</h3>
                          <span className={cn(
                            "px-3 py-1 rounded-sm text-[9px] uppercase tracking-widest font-bold border",
                            lead.status === 'NEW' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                            lead.status === 'CONTACTED' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                            lead.status === 'QUALIFIED' ? "bg-gold-primary/10 text-gold-primary border-gold-primary/30" :
                            "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                          )}>
                            {lead.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500 font-light">
                          <span className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                            <Mail className="w-3 h-3 text-gold-primary/60" /> {lead.email}
                          </span>
                          <span className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                            <Phone className="w-3 h-3 text-gold-primary/60" /> {lead.phone}
                          </span>
                          <span className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
                            <Calendar className="w-3 h-3 text-gold-primary/60" /> {new Date(lead.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="p-5 rounded-2xl bg-luxury-black border border-luxury-border text-sm text-zinc-400 font-light italic relative group-hover:border-gold-primary/30 transition-colors">
                          <MessageSquare className="absolute -top-3 -left-3 w-6 h-6 text-gold-primary/20" />
                          <p className="relative z-10 line-clamp-2">{lead.message}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                      <div className="flex items-center gap-2 p-1 bg-luxury-black border border-luxury-border rounded-xl">
                        <button
                          onClick={() => updateStatus(lead.id, 'CONTACTED')}
                          className="p-3 rounded-lg text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                          title="Mark as Contacted"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => updateStatus(lead.id, 'QUALIFIED')}
                          className="p-3 rounded-lg text-zinc-500 hover:text-gold-primary hover:bg-gold-primary/10 transition-all"
                          title="Mark as Qualified"
                        >
                          <Star className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => updateStatus(lead.id, 'ARCHIVED')}
                          className="p-3 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-all"
                          title="Archive Lead"
                        >
                          <Archive className="w-5 h-5" />
                        </button>
                      </div>
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-4 rounded-xl border border-luxury-border text-zinc-500 hover:text-red-400 hover:border-red-400/30 transition-all"
                        title="Permanently Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
