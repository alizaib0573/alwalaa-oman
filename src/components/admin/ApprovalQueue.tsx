'use client';

import React, { useState, useEffect } from 'react';
import { Check, X, Loader2, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

interface User {
  id: string;
  email: string;
  role: string;
  status: string;
  isActive: boolean;
  agent?: {
    fullName: string;
    _count?: { properties: number };
  };
}

export default function ApprovalQueue() {
  const [pendingUsers, setPendingUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const fetchPendingUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/users');
      const data: User[] = await res.json();
      setPendingUsers(data.filter(u => u.status === 'PENDING'));
    } catch (err) {
      console.error('Failed to fetch pending users', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const handleStatusUpdate = async (userId: string, status: 'APPROVED' | 'REJECTED') => {
    setActionLoadingId(userId);
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        await fetchPendingUsers();
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

  if (pendingUsers.length === 0) {
    return (
      <div className="text-center p-12 border border-luxury-border rounded-2xl bg-charcoal/30">
        <UserPlus className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
        <p className="text-zinc-500 text-sm uppercase tracking-widest font-medium">
          No pending account requests
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif text-white">Pending Approvals</h2>
        <span className="px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-gold-primary text-[10px] uppercase font-bold tracking-widest">
          {pendingUsers.length} Requests
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {pendingUsers.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-charcoal border border-luxury-border group hover:border-gold-primary/30 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-white font-medium">{user.agent?.fullName || 'Unknown User'}</p>
                <p className="text-zinc-500 text-xs">{user.email}</p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold bg-zinc-800 px-2 py-0.5 rounded">
                    {user.role}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleStatusUpdate(user.id, 'REJECTED')}
                  disabled={actionLoadingId === user.id}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 transition-all disabled:opacity-50"
                  title="Reject"
                >
                  <X className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleStatusUpdate(user.id, 'APPROVED')}
                  disabled={actionLoadingId === user.id}
                  className="p-2 rounded-lg bg-gold-primary text-luxury-black hover:bg-gold-light transition-all disabled:opacity-50"
                  title="Approve"
                >
                  {actionLoadingId === user.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
