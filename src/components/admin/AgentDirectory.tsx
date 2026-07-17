'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, ShieldAlert, Loader2, Briefcase, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface User {
  id: string;
  email: string;
  role: string;
  status: string;
  isActive: boolean;
  agent?: {
    fullName: string;
    phone: string;
    bio: string;
    _count?: { properties: number };
  };
}

export default function AgentDirectory() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/users');
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('Failed to fetch users', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleStatus = async (userId: string, currentStatus: boolean) => {
    setActionLoadingId(userId);
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !currentStatus }),
      });
      if (res.ok) {
        await fetchUsers();
      }
    } catch (err) {
      console.error('Failed to update user status', err);
    } finally {
      setActionLoadingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-gold-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif text-white">Agent Directory</h2>
        <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-widest font-bold">
          <Users className="w-4 h-4" />
          {users.length} Total Users
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-luxury-border bg-charcoal/30">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-luxury-border bg-luxury-black/50">
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Agent / User</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Role</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Properties</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Status</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-bold text-right">Access</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-luxury-border">
            {users.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-luxury-black border border-luxury-border flex items-center justify-center text-gold-primary">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-medium text-sm">
                        {user.agent?.fullName || 'System User'}
                      </span>
                      <span className="text-zinc-500 text-xs">{user.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {user.role === 'SUPER_ADMIN' ? (
                      <Shield className="w-3 h-3 text-gold-primary" />
                    ) : user.role === 'ADMIN' ? (
                      <ShieldAlert className="w-3 h-3 text-zinc-400" />
                    ) : (
                      <Briefcase className="w-3 h-3 text-zinc-500" />
                    )}
                    <span className="text-zinc-400 text-xs font-medium">{user.role}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-white text-sm font-mono">
                    {user.agent?._count?.properties ?? 0}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className={cn(
                    "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-widest border",
                    user.status === 'APPROVED'
                      ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                      : user.status === 'REJECTED'
                      ? "bg-red-500/5 text-red-400 border-red-500/20"
                      : "bg-amber-500/5 text-amber-400 border-amber-500/20"
                  )}>
                    <span className={cn(
                      "w-1 h-1 rounded-full",
                      user.status === 'APPROVED' ? "bg-emerald-400" : user.status === 'REJECTED' ? "bg-red-400" : "bg-amber-400"
                    )} />
                    {user.status}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => toggleStatus(user.id, user.isActive)}
                    disabled={actionLoadingId === user.id}
                    className={cn(
                      "relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none",
                      user.isActive ? "bg-gold-primary" : "bg-zinc-700",
                      actionLoadingId === user.id && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <span className={cn(
                      "inline-block h-3 w-3 transform rounded-full bg-luxury-black transition-transform",
                      user.isActive ? "translate-x-5" : "translate-x-1"
                    )} />
                    {actionLoadingId === user.id && (
                      <Loader2 className="absolute inset-0 w-full h-full animate-spin text-luxury-black" />
                    )}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
