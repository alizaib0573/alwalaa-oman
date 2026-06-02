"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { PropertyUI } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: PropertyUI;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-champagne/30 overflow-hidden rounded-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700"
    >
      {/* Image Container */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent" />

        {/* Status Tags */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
          <span className="bg-gold text-matte-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            {property.status}
          </span>
          {property.featured && (
            <span className="bg-ivory text-matte-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gold/80">
            <MapPin size={14} />
            <span className="text-[10px] uppercase tracking-widest font-medium">
              {property.location}
            </span>
          </div>
          <h3 className="text-2xl font-serif text-matte-black group-hover:text-gold transition-colors duration-500">
            {property.title}
          </h3>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-2xl font-serif text-matte-black">
            {property.price.toLocaleString()} <span className="text-sm uppercase tracking-tighter">{property.currency}</span>
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-champagne/30">
          <div className="flex flex-col items-center gap-1">
            <Bed size={18} className="text-gold/60" />
            <span className="text-xs text-matte-black/60 font-light">{property.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath size={18} className="text-gold/60" />
            <span className="text-xs text-matte-black/60 font-light">{property.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={18} className="text-gold/60" />
            <span className="text-xs text-matte-black/60 font-light">{property.area} m²</span>
          </div>
        </div>

        <Link
          href={`/properties/${property.slug}`}
          className="block w-full text-center py-4 bg-matte-black text-ivory text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-matte-black transition-all duration-500"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
