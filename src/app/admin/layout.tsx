'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Home,
  Users,
  Building2,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Properties', href: '/admin/properties', icon: Home },
  { label: 'Communities', href: '/admin/communities', icon: Building2 },
  { label: 'Leads', href: '/admin/leads', icon: Users },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    window.location.href = '/admin/login';
  };

  return (
    <div className="flex min-h-screen bg-luxury-black text-white font-sans">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full z-50 transition-all duration-500 ease-in-out border-r border-luxury-border bg-charcoal",
          isCollapsed ? "w-20" : "w-72"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Brand Section */}
          <div className="p-8 flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold-primary rounded-sm flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-luxury-black" />
                  </div>
                  <span className="font-serif text-xl tracking-tight text-white">
                    Alwalaa <span className="text-gold-primary">Real Estate</span>
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium ml-11">
                  Private Property Management
                </span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-full hover:bg-white/5 transition-colors text-zinc-400 hover:text-white"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group relative",
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-gold-primary rounded-r-full" />
                  )}

                  <item.icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-gold-primary" : "text-zinc-500 group-hover:text-zinc-300"
                  )} />

                  {!isCollapsed && (
                    <span className={cn(
                      "text-sm tracking-wide transition-all",
                      isActive ? "font-medium" : "font-normal"
                    )}>
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer Section */}
          <div className="p-6 border-t border-luxury-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 w-full px-4 py-3 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-400/5 transition-all duration-300 group"
            >
              <LogOut className="w-5 h-5 transition-colors group-hover:text-red-400" />
              {!isCollapsed && <span className="text-sm tracking-wide">Sign Out</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-500 ease-in-out",
          isCollapsed ? "pl-20" : "pl-72"
        )}
      >
        <header className="h-20 border-b border-luxury-border bg-luxury-black/50 backdrop-blur-md sticky top-0 z-40 px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="h-1 w-8 bg-gold-primary rounded-full" />
             <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
               Administrative Console
             </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-charcoal border border-luxury-border text-[10px] uppercase tracking-widest text-gold-primary font-bold">
              <div className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
              Executive Account
            </div>
          </div>
        </header>

        <div className="p-12 max-w-screen-2xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
