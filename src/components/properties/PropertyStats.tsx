"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Square, Building, MapPin, Landmark } from "lucide-react";
import { PropertyUI } from "@/types/property";

interface PropertyStatsProps {
  property: PropertyUI;
}

export default function PropertyStats({ property }: PropertyStatsProps) {
  const stats = [
    { label: "Bedrooms", value: `${property.bedrooms} Beds`, icon: Bed },
    { label: "Bathrooms", value: `${property.bathrooms} Baths`, icon: Bath },
    { label: "Built-up Area", value: `${property.area} m²`, icon: Square },
    { label: "Plot Area", value: property.plotArea ? `${property.plotArea} m²` : "N/A", icon: Landmark },
    { label: "Property Type", value: property.type, icon: Building },
    { label: "Community", value: property.community, icon: MapPin },
  ];

  return (
    <section className="py-12 border-y border-champagne/30">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-3 p-6 bg-white border border-champagne/20 rounded-sm"
          >
            <div className="text-gold">
              <stat.icon size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-matte-black/40 font-bold">
                {stat.label}
              </p>
              <p className="text-lg font-serif text-matte-black">
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
