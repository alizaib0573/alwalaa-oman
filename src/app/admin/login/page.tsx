'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Loader2, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    console.log('[LOGIN_CLIENT] Attempting login for:', username);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      console.log('[LOGIN_CLIENT] Response status:', res.status);

      if (!res.ok) {
        const data = await res.json();
        console.error('[LOGIN_CLIENT] Error data:', data);
        throw new Error(data.error || 'Login failed');
      }

      console.log('[LOGIN_CLIENT] Login successful, redirecting...');
      window.location.href = '/admin';
    } catch (err: any) {
      console.error('[LOGIN_CLIENT] Unexpected error:', err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black text-white selection:bg-gold-primary/30 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-gold-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-gold-primary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md p-8 mx-4 z-10"
      >
        <div className="relative bg-charcoal border border-luxury-border backdrop-blur-xl rounded-[24px] p-10 shadow-2xl overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold-primary" />

          <div className="text-center mb-12 space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-gold-primary rounded-sm flex items-center justify-center shadow-lg shadow-gold-primary/20">
                <Building2 className="w-6 h-6 text-luxury-black" />
              </div>
            </div>
            <h1 className="text-4xl font-serif text-white tracking-tight">
              Administrative <span className="text-gold-primary">Console</span>
            </h1>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">
              Private Wealth Management Access
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1 font-bold">
                Identification
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-gold-primary transition-colors" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-6 py-3 bg-luxury-black border border-luxury-border rounded-xl focus:outline-none focus:border-gold-primary/50 transition-all text-sm text-white placeholder:text-zinc-700"
                  placeholder="Username"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1 font-bold">
                Security Key
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-gold-primary transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-6 py-3 bg-luxury-black border border-luxury-border rounded-xl focus:outline-none focus:border-gold-primary/50 transition-all text-sm text-white placeholder:text-zinc-700"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-medium"
              >
                {error}
              </motion.div>
            )}

            <button
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gold-primary text-luxury-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-gold-primary/20 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Authorize Access'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
