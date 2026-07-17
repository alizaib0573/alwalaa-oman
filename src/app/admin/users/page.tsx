'use client';

import React, { useEffect, useState } from 'react';
import { UserCog, ShieldAlert } from 'lucide-react';
import AgentDirectory from '@/components/admin/AgentDirectory';
import UserCreationForm from '@/components/admin/UserCreationForm';

export default function AdminUsersPage() {
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Bumped after a successful create to force the directory to re-fetch.
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch('/api/auth/check-session', { method: 'POST' });
        if (res.ok) {
          const data = await res.json();
          setSession(data.session);
        }
      } catch (err) {
        console.error('Session check failed', err);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-12 h-12 border-2 border-gold-primary/20 border-t-gold-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!session || session.role !== 'SUPER_ADMIN') {
    return (
      <div className="flex items-center justify-center py-24 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto text-red-500">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif text-white">Access Denied</h1>
          <p className="text-zinc-500">
            You do not have the required Super Admin privileges to manage users.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-light tracking-tight text-white">
          Manage <span className="text-gold-primary font-medium">Users</span>
        </h2>
        <p className="text-zinc-500 text-sm mt-1">
          Create and administer agents, admins, and access control
        </p>
      </div>

      <div className="bg-charcoal border border-luxury-border rounded-[24px] p-8">
        <div className="flex items-center gap-2 text-zinc-400 mb-6">
          <UserCog className="w-4 h-4 text-gold-primary" />
          <h3 className="text-sm font-medium uppercase tracking-widest">Create User &amp; Agent</h3>
        </div>
        <UserCreationForm onSuccess={() => setRefreshKey((k) => k + 1)} />
      </div>

      <AgentDirectory key={refreshKey} />
    </div>
  );
}
