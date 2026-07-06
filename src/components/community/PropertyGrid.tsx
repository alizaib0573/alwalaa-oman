"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BedDouble, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  property: {
    title: string;
    price: number;
    currency: string;
    bedrooms?: number;
    bathrooms?: number;
    areaSqm?: number;
    type: string;
    gallery: string[];
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-matte-black/40 border border-ivory/10 rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.gallery[0] || "/p3.jpg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-gold text-matte-black text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
          {property.type}
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-ivory font-serif text-xl mb-2 group-hover:text-gold transition-colors">{property.title}</h4>
        <div className="text-gold font-serif text-2xl mb-4">
          {property.currency} {Math.round(property.price).toLocaleString('en-US')}
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-ivory/10 text-ivory/50 text-[10px] uppercase tracking-widest font-medium">
          <div className="flex items-center gap-2">
            <BedDouble className="w-3 h-3 text-gold" /> {property.bedrooms || 0} Bed
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-3 h-3 text-gold" /> {property.bathrooms || 0} Bath
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-3 h-3 text-gold" /> {property.areaSqm?.toFixed(0) || 0} sqm
          </div>
        </div>
        <button className="w-full mt-6 py-3 border border-gold/30 text-gold uppercase tracking-widest text-[10px] font-bold rounded-full hover:bg-gold hover:text-matte-black transition-all">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
