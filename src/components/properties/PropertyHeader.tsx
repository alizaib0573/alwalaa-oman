"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PropertyUI } from "@/types/property";

export default function PropertyHeader({ property }: { property: PropertyUI }) {
  return (
    <div className="py-12 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {property.status === "Available" && (
              <span className="bg-gold text-matte-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm">
                Available
              </span>
            )}
            {property.status === "Under Construction" && (
              <span className="bg-matte-black text-ivory px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm">
                Under Construction
              </span>
            )}
            <span className="bg-ivory border border-champagne/30 text-matte-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm">
              {property.type}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-matte-black leading-tight"
          >
            {property.title}
          </motion.h1>

          <div className="flex items-center gap-2 text-matte-black/60 group cursor-pointer">
            <MapPin size={18} className="text-gold group-hover:scale-110 transition-transform" />
            <span className="text-sm font-light">{property.location}</span>
          </div>
        </div>

        <div className="text-left md:text-right space-y-2">
          <p className="text-sm uppercase tracking-widest text-gold font-bold">Price</p>
          <p className="text-4xl font-serif text-matte-black">
            {property.price.toLocaleString()} <span className="text-lg uppercase tracking-tighter">{property.currency}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
