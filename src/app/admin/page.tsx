'use client';

import React, { useEffect, useState } from 'react';
import {
  Building2,
  TrendingUp,
  Users,
  Star,
  ArrowUpRight,
  Plus,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend: string;
  trendUp: boolean;
}

function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="group relative bg-charcoal border border-luxury-border p-8 rounded-[24px] transition-all duration-500 hover:border-gold-primary/40 overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-primary/5 rounded-full blur-3xl group-hover:bg-gold-primary/10 transition-colors" />

      <div className="relative z-10 flex flex-col h-full justify-between gap-8">
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-xl bg-luxury-black border border-luxury-border text-gold-primary group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6" />
          </div>
          <div className={cn(
            "flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border",
            trendUp ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20" : "bg-red-500/5 text-red-400 border-red-500/20"
          )}>
            {trendUp ? <ArrowUpRight className="w-3 h-3" /> : null}
            {trend}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-4xl font-serif text-white tracking-tight">{value}</h3>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.15em] font-medium group-hover:text-zinc-400 transition-colors">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    properties: { value: '0', trend: '0%', trendUp: true },
    featured: { value: '0', trend: '0%', trendUp: true },
    communities: { value: '0', trend: '0%', trendUp: true },
    leads: { value: '0', trend: '0%', trendUp: true },
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [propRes, commRes, leadRes] = await Promise.all([
          fetch('/api/admin/properties'),
          fetch('/api/admin/communities'),
          fetch('/api/admin/leads'),
        ]);

        const properties = await propRes.json();
        const communities = await commRes.json();
        const leads = await leadRes.json();

        setStats({
          properties: {
            value: properties.length,
            trend: '+12%',
            trendUp: true
          },
          featured: {
            value: properties.filter((p: any) => p.featured).length,
            trend: '+5%',
            trendUp: true
          },
          communities: {
            value: communities.length,
            trend: '0%',
            trendUp: true
          },
          leads: {
            value: leads.length,
            trend: '+18%',
            trendUp: true
          },
        });
      } catch (e) {
        console.error('Failed to fetch dashboard stats', e);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <h2 className="text-5xl font-serif text-white tracking-tight">
            Estate <span className="text-gold-primary">Overview</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-2xl font-light leading-relaxed">
            Real-time performance across properties, communities and client enquiries.
            A comprehensive view of your luxury portfolio's health.
          </p>
        </div>
        <Link
          href="/admin/properties/new"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gold-primary text-luxury-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold-primary/20"
        >
          <Plus className="w-4 h-4" />
          Add Property
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard
          title="Properties Under Management"
          value={stats.properties.value}
          icon={Building2}
          trend={stats.properties.trend}
          trendUp={stats.properties.trendUp}
        />
        <StatCard
          title="Featured Listings"
          value={stats.featured.value}
          icon={Star}
          trend={stats.featured.trend}
          trendUp={stats.featured.trendUp}
        />
        <StatCard
          title="Premium Communities"
          value={stats.communities.value}
          icon={Building2}
          trend={stats.communities.trend}
          trendUp={stats.communities.trendUp}
        />
        <StatCard
          title="Qualified Leads"
          value={stats.leads.value}
          icon={Users}
          trend={stats.leads.trend}
          trendUp={stats.leads.trendUp}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-charcoal border border-luxury-border rounded-[24px] p-10 transition-all hover:border-gold-primary/30">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <h3 className="text-xl font-serif text-white tracking-tight">Recent Portfolio Entries</h3>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Latest additions to the estate</p>
            </div>
            <Link href="/admin/properties" className="group flex items-center gap-2 text-xs text-gold-primary uppercase tracking-widest font-bold hover:text-gold-light transition-colors">
              View Portfolio <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-zinc-500 border-b border-luxury-border">
                <tr className="uppercase tracking-widest text-[10px] font-bold">
                  <th className="pb-6 font-medium">Property</th>
                  <th className="pb-6 font-medium">Price</th>
                  <th className="pb-6 font-medium">Status</th>
                  <th className="pb-6 font-medium text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-border">
                <tr className="text-zinc-400 hover:text-white transition-colors group">
                  <td className="py-6 font-medium italic">No properties found</td>
                  <td className="py-6">-</td>
                  <td className="py-6">-</td>
                  <td className="py-6 text-right">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-charcoal border border-luxury-border rounded-[24px] p-10 transition-all hover:border-gold-primary/30">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <h3 className="text-xl font-serif text-white tracking-tight">Lead Intelligence</h3>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Priority enquiries</p>
            </div>
            <Link href="/admin/leads" className="group flex items-center gap-2 text-xs text-gold-primary uppercase tracking-widest font-bold hover:text-gold-light transition-colors">
              All Leads <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-luxury-black border border-luxury-border flex items-center gap-6 group transition-all hover:border-gold-primary/40">
              <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-serif text-white tracking-tight">No high-priority leads</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Check back later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
