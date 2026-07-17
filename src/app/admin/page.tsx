'use client';

import React, { useEffect, useState } from 'react';
import {
  Building2,
  Users,
  Star,
  ArrowUpRight,
  LayoutDashboard,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ApprovalQueue from '@/components/admin/ApprovalQueue';
import AgentDirectory from '@/components/admin/AgentDirectory';

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

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const sessionRes = await fetch('/api/auth/check-session', { method: 'POST' });
        if (sessionRes.ok) {
          const sessionData = await sessionRes.json();
          setSession(sessionData.session);
        }

        const statsRes = await fetch('/api/admin/stats');
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }
      } catch (err) {
        console.error('Init failed', err);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-gold-primary/20 border-t-gold-primary rounded-full animate-spin" />
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Loading Command Center</p>
        </div>
      </div>
    );
  }

  if (!session || session.role !== 'SUPER_ADMIN') {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto text-red-500">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif text-white">Access Denied</h1>
          <p className="text-zinc-500">
            You do not have the required Super Admin privileges to access the Command Center.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black text-white p-8 lg:p-12 space-y-12">
      <header className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-gold-primary text-luxury-black">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-serif tracking-tight">Command Center</h1>
            <p className="text-zinc-500 text-sm">Manage your agency infrastructure and agent network.</p>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Agents"
          value={stats?.agents || 0}
          icon={Users}
          trend="+12% this month"
          trendUp={true}
        />
        <StatCard
          title="Active Listings"
          value={stats?.properties || 0}
          icon={Building2}
          trend="+4.2% growth"
          trendUp={true}
        />
        <StatCard
          title="Communities"
          value={stats?.communities || 0}
          icon={Star}
          trend="Stable"
          trendUp={true}
        />
        <StatCard
          title="System Health"
          value={stats?.health || '---'}
          icon={Activity}
          trend="Optimized"
          trendUp={true}
        />
      </section>

      <main className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1 space-y-8">
          <div className="p-8 rounded-[24px] bg-charcoal border border-luxury-border space-y-6">
            <div className="flex items-center gap-3 text-gold-primary">
              <ShieldCheck className="w-5 h-5" />
              <h2 className="font-serif text-lg">Identity Gate</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Review and approve pending agent account requests. Every new identity must be verified before gaining access to the system.
            </p>
            <ApprovalQueue />
          </div>
        </div>

        <div className="xl:col-span-2 space-y-8">
          <div className="p-8 rounded-[24px] bg-charcoal border border-luxury-border space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-gold-primary">
                <Users className="w-5 h-5" />
                <h2 className="font-serif text-lg">Agent Network</h2>
              </div>
            </div>
            <AgentDirectory />
          </div>
        </div>
      </main>
    </div>
  );
}

function ShieldAlert({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 22h16a2 2 0 0 0 2-2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
