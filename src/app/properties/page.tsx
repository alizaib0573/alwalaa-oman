"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PropertyHero from "@/components/properties/PropertyHero";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyCard from "@/components/properties/PropertyCard";
import { MOCK_PROPERTIES } from "@/lib/properties-data";
import { PropertyFilters as FiltersType } from "@/types/property";

export default function PropertiesPage() {
  const [filters, setFilters] = useState<FiltersType>({
    status: [],
    communities: [],
    cities: [],
    type: [],
    minBeds: 1,
    maxBeds: 6,
    minBaths: 1,
    maxBaths: 6,
    minPrice: null,
    maxPrice: null,
    minArea: null,
    maxArea: null,
    sortBy: "Newest First",
  });

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(prop => {
      if (filters.status.length > 0 && !filters.status.includes(prop.status as any)) return false;
      if (filters.type.length > 0 && !filters.type.includes(prop.type as any)) return false;
      if (filters.cities.length > 0 && !filters.cities.includes(prop.city)) return false;
      if (filters.minPrice && prop.price < filters.minPrice) return false;
      if (filters.maxPrice && prop.price > filters.maxPrice) return false;
      if (filters.minBeds && prop.bedrooms < filters.minBeds) return false;
      if (filters.maxBeds && prop.bedrooms > filters.maxBeds) return false;
      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />

      <PropertyHero />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <PropertyFilters filters={filters} setFilters={setFilters} />

          <div className="flex-1 space-y-12">
            <div className="flex justify-between items-center">
              <p className="text-sm text-matte-black/60 font-light">
                Showing <span className="text-matte-black font-medium">{filteredProperties.length}</span> exceptional properties
              </p>

              <div className="relative group">
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="bg-transparent border-b border-matte-black/20 text-xs uppercase tracking-widest py-2 pl-2 pr-8 appearance-none outline-none cursor-pointer hover:text-gold transition-colors"
                >
                  <option value="Newest First">Newest First</option>
                  <option value="Price Low To High">Price Low To High</option>
                  <option value="Price High To Low">Price High To Low</option>
                  <option value="Featured First">Featured First</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-3 h-3 border-r border-b border-matte-black/40 rotate-45" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {filteredProperties.map((prop, index) => (
                <PropertyCard key={prop.id} property={prop} index={index} />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="py-32 text-center space-y-4">
                <h3 className="text-3xl font-serif text-matte-black">No Properties Found</h3>
                <p className="text-matte-black/60 font-light">We couldn't find any properties matching your current filters.</p>
                <button
                  onClick={() => setFilters({
                    status: [], communities: [], cities: [], type: [],
                    minBeds: 1, maxBeds: 6, minBaths: 1, maxBaths: 6,
                    minPrice: null, maxPrice: null, minArea: null, maxArea: null,
                    sortBy: "Newest First"
                  })}
                  className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-matte-black hover:border-matte-black transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
