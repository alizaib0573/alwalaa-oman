"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function PropertyHero() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  const [inputValue, setInputValue] = useState("");

  // Sync state with URL parameter if it changes elsewhere
  useEffect(() => {
    setInputValue(searchParams.get("query") || "");
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (inputValue.trim()) {
      params.set("query", inputValue.trim());
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/p2.jpg"
          alt="Luxury Properties Oman"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-ivory" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold block">
            The Elite Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory leading-tight">
            Properties in Oman
          </h1>
          <p className="text-ivory/80 text-sm md:text-base font-light max-w-3xl mx-auto leading-relaxed">
            Your next home or investment starts here. Discover luxury villas, waterfront apartments, and freehold real estate in Muscat, Salalah, and Oman&apos;s most sought-after ITC communities.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 relative max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearchSubmit} className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full flex items-center gap-3 shadow-2xl">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/50" size={18} />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search by community, villa, developer or keyword..."
                className="w-full bg-transparent pl-11 pr-4 py-3.5 text-ivory placeholder:text-ivory/40 outline-none text-sm font-light"
              />
            </div>
            <button type="submit" className="bg-gold text-matte-black px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-matte-black transition-all duration-300">
              Search
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
