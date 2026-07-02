"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Search, Filter } from "lucide-react";
import type { PropertyStatus, PropertyType, PropertyFilters } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyFiltersProps {
  filters: PropertyFilters;
  setFilters: (filters: PropertyFilters) => void;
}

function getFilterValue(key: keyof PropertyFilters, option: string): string {
  const statusMap: Record<string, string> = {
    "Off-plan": "OFF_PLAN",
    "Under Construction": "UNDER_CONSTRUCTION",
    "Ready to Move": "READY_TO_MOVE",
    "For Sale": "FOR_SALE",
  };
  const typeMap: Record<string, string> = {
    "Villa": "VILLA",
    "Apartment": "APARTMENT",
    "Townhouse": "TOWNHOUSE",
    "Penthouse": "PENTHOUSE",
    "Land": "LAND",
    "Commercial": "COMMERCIAL",
  };
  if (key === "status") return statusMap[option];
  if (key === "type") return typeMap[option];
  return option;
}

export default function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: keyof PropertyFilters, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const toggleOption = (key: keyof PropertyFilters, option: string) => {
    const current = filters[key] as string[];

    const enumValue = getFilterValue(key, option);

    const next = current.includes(enumValue)
      ? current.filter(o => o !== enumValue)
      : [...current, enumValue];
    updateFilter(key, next);
  };

  const filterSections: {
    name: string;
    key: keyof PropertyFilters;
    type: "multi" | "range";
    options?: string[];
    current: any;
  }[] = [
    {
      name: "Property Status",
      key: "status",
      type: "multi",
      options: ["Off-plan", "Under Construction", "Ready to Move", "For Sale"],
      current: filters.status,
    },
    {
      name: "Property Type",
      key: "type",
      type: "multi",
      options: ["Villa", "Apartment", "Townhouse", "Penthouse", "Land", "Commercial"],
      current: filters.type,
    },
    {
      name: "Communities",
      key: "communities",
      type: "multi",
      options: ["Al Mouj", "AIDA", "Muscat Bay", "Sultan Haitham City", "Jebel Sifah", "Sustainable City", "Qurum"],
      current: filters.communities,
    },
  ];

  const activeFiltersCount =
    filters.status.length +
    filters.type.length +
    filters.communities.length +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0);

  return (
    <div className="w-full space-y-6">
      {/* Horizontal Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6 bg-white border border-champagne/30 rounded-sm shadow-sm">
        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 px-3 py-2 bg-matte-black text-ivory rounded-full text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">
            <Filter size={12} /> Filters
          </div>

          {filterSections.map(section => (
            <div key={section.name} className="relative group">
              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  "px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 whitespace-nowrap border",
                  section.current.length > 0
                    ? "bg-gold border-gold text-matte-black font-bold"
                    : "bg-transparent border-champagne/30 text-matte-black/60 hover:border-gold hover:text-matte-black"
                )}
              >
                {section.name}
                {section.current.length > 0 && ` (${section.current.length})`}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <button
            onClick={() => setFilters({
              status: [], communities: [], type: [],
              minBeds: 1, maxBeds: 6, minBaths: 1, maxBaths: 6,
              minPrice: null, maxPrice: null, minArea: null, maxArea: null,
              sortBy: "Newest First"
            })}
            className="text-[10px] uppercase tracking-widest text-gold hover:text-matte-black transition-colors whitespace-nowrap"
          >
            Reset All
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2 px-6 py-2 bg-matte-black text-ivory rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-gold hover:text-matte-black transition-all duration-500"
          >
            <Search size={12} /> Advanced Search
          </button>
        </div>
      </div>

      {/* Mobile Toggle (hidden because it's now integrated in the bar) */}

      {/* Advanced Filters Drawer */}
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
              className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[70] p-8 overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-serif text-matte-black">Advanced Filters</h3>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-champagne rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-10">
                {filterSections.map(section => (
                  <div key={section.name} className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-matte-black/40 font-bold">{section.name}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {section.options?.map(option => (
                        <label
                          key={option}
                          onClick={() => toggleOption(section.key, option)}
                          className="flex items-center gap-3 p-3 rounded-lg border border-champagne/30 cursor-pointer transition-all hover:border-gold/50"
                        >
                          <div className={cn(
                            "w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center transition-all",
                            section.current.includes(getFilterValue(section.key, option)) ? "bg-gold border-gold" : "bg-transparent"
                          )}>
                            {section.current.includes(getFilterValue(section.key, option)) && <div className="w-1.5 h-1.5 bg-matte-black rounded-full" />}
                          </div>
                          <span className={cn(
                            "text-xs transition-colors",
                            section.current.includes(getFilterValue(section.key, option)) ? "text-matte-black font-medium" : "text-matte-black/60"
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
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-matte-black/40 uppercase font-bold">Min</span>
                      <input
                        type="number"
                        className="w-full bg-white border border-champagne p-3 pl-10 text-xs outline-none focus:border-gold transition-all"
                        placeholder="0"
                        onChange={(e) => updateFilter("minPrice", e.target.value === "" ? null : Number(e.target.value))}
                        value={filters.minPrice ?? ""}
                      />
                    </div>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-matte-black/40 uppercase font-bold">Max</span>
                      <input
                        type="number"
                        className="w-full bg-white border border-champagne p-3 pl-10 text-xs outline-none focus:border-gold transition-all"
                        placeholder="Any"
                        onChange={(e) => updateFilter("maxPrice", e.target.value === "" ? null : Number(e.target.value))}
                        value={filters.maxPrice ?? ""}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-matte-black/40 font-bold">Bedrooms & Bathrooms</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase text-matte-black/40 font-bold">Beds</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          className="w-full bg-white border border-champagne p-3 text-xs outline-none focus:border-gold"
                          value={filters.minBeds}
                          onChange={(e) => updateFilter("minBeds", Number(e.target.value))}
                        />
                        <span className="text-matte-black/30 text-xs">—</span>
                        <input
                          type="number"
                          className="w-full bg-white border border-champagne p-3 text-xs outline-none focus:border-gold"
                          value={filters.maxBeds}
                          onChange={(e) => updateFilter("maxBeds", Number(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase text-matte-black/40 font-bold">Baths</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          className="w-full bg-white border border-champagne p-3 text-xs outline-none focus:border-gold"
                          value={filters.minBaths}
                          onChange={(e) => updateFilter("minBaths", Number(e.target.value))}
                        />
                        <span className="text-matte-black/30 text-xs">—</span>
                        <input
                          type="number"
                          className="w-full bg-white border border-champagne p-3 text-xs outline-none focus:border-gold"
                          value={filters.maxBaths}
                          onChange={(e) => updateFilter("maxBaths", Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-champagne/30">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-matte-black text-ivory py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-matte-black transition-all"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
