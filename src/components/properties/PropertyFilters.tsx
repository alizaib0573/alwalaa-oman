"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Search } from "lucide-react";
import type { PropertyStatus, PropertyType, PropertyFilters } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyFiltersProps {
  filters: PropertyFilters;
  setFilters: (filters: PropertyFilters) => void;
}

export default function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: keyof PropertyFilters, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const toggleStatus = (status: PropertyStatus) => {
    const next = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    updateFilter("status", next);
  };

  const filterSections: {
    name: string;
    key: string;
    type: string;
    options: string[];
    current: readonly string[];
    onToggle: (val: string) => void;
  }[] = [
    {
      name: "Property Status",
      key: "status",
      type: "multi",
      options: ["For Sale", "Ready To Move", "Off Plan", "Available", "Under Construction", "Sold"],
      current: filters.status,
      onToggle: (val: string) => {
        const next = filters.status.includes(val as any) ? filters.status.filter(s => s !== val) : [...filters.status, val as any];
        updateFilter("status", next);
      }
    },
    {
      name: "Property Type",
      key: "type",
      type: "multi",
      options: ["Villa", "Apartment", "Townhouse", "Penthouse", "Land", "Commercial"],
      current: filters.type,
      onToggle: (val: string) => {
        const next = filters.type.includes(val as any) ? filters.type.filter(t => t !== val) : [...filters.type, val as any];
        updateFilter("type", next);
      }
    },
    {
      name: "Cities",
      key: "cities",
      type: "multi",
      options: ["Muscat", "Salalah", "Sohar", "Nizwa", "Duqm"],
      current: filters.cities,
      onToggle: (val: string) => {
        const next = filters.cities.includes(val) ? filters.cities.filter(c => c !== val) : [...filters.cities, val];
        updateFilter("cities", next);
      }
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 space-y-10 sticky top-24 h-fit">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-serif text-matte-black uppercase tracking-wide">Filters</h3>
            <button
              onClick={() => setFilters({
                status: [], communities: [], cities: [], type: [],
                minBeds: 1, maxBeds: 6, minBaths: 1, maxBaths: 6,
                minPrice: null, maxPrice: null, minArea: null, maxArea: null,
                sortBy: "Newest First"
              })}
              className="text-[10px] uppercase tracking-widest text-gold hover:text-matte-black transition-colors"
            >
              Reset All
            </button>
          </div>

          {filterSections.map(section => (
            <div key={section.name} className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-matte-black/40 font-bold">{section.name}</h4>
              <div className="space-y-2">
                {section.options.map(option => (
                  <label key={option} className="flex items-center gap-3 group cursor-pointer">
                    <div className={cn(
                      "w-4 h-4 rounded-full border border-gold/30 transition-all duration-300 flex items-center justify-center",
                      section.current.includes(option) ? "bg-gold border-gold" : "bg-transparent group-hover:border-gold"
                    )}>
                      {section.current.includes(option) && <div className="w-1.5 h-1.5 bg-matte-black rounded-full" />}
                    </div>
                    <span className={cn(
                      "text-sm transition-colors duration-300",
                      section.current.includes(option) ? "text-matte-black font-medium" : "text-matte-black/60 group-hover:text-matte-black"
                    )}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-matte-black/40 font-bold">Price Range</h4>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="Min"
                className="w-full bg-white border border-champagne p-3 text-xs outline-none focus:border-gold transition-all"
                onChange={(e) => updateFilter("minPrice", Number(e.target.value))}
              />
              <span className="text-matte-black/30 text-xs">—</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full bg-white border border-champagne p-3 text-xs outline-none focus:border-gold transition-all"
                onChange={(e) => updateFilter("maxPrice", Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-matte-black text-ivory px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-2xl flex items-center gap-3"
        >
          <Search size={16} /> Filters
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[70] p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-serif text-matte-black">Filters</h3>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-champagne rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-10">
                {filterSections.map(section => (
                  <div key={section.name} className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-matte-black/40 font-bold">{section.name}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {section.options.map(option => (
                        <label key={option} className="flex items-center gap-3 p-3 rounded-lg border border-champagne/30 cursor-pointer transition-all">
                          <div className={cn(
                            "w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center",
                            section.current.includes(option) ? "bg-gold border-gold" : "bg-transparent"
                          )}>
                            {section.current.includes(option) && <div className="w-1.5 h-1.5 bg-matte-black rounded-full" />}
                          </div>
                          <span className={cn(
                            "text-xs transition-colors",
                            section.current.includes(option) ? "text-matte-black font-medium" : "text-matte-black/60"
                          )}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-champagne/30">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-matte-black text-ivory py-4 rounded-full text-xs uppercase tracking-widest font-bold"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
