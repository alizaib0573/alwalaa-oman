"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Amenity } from "@/types/property";

interface PropertyAmenitiesProps {
  amenities: Amenity[];
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <section className="py-16 space-y-8">
      <h2 className="text-3xl font-serif text-matte-black mb-8">
        Features & <span className="italic text-gold">Amenities</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map((amenity, i) => {
          const IconComponent = (LucideIcons as any)[amenity.icon] || LucideIcons.Check;
          return (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-white border border-champagne/30 rounded-sm group hover:border-gold transition-all duration-500"
            >
              <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                <IconComponent size={20} />
              </div>
              <span className="text-sm text-matte-black/70 font-light group-hover:text-matte-black transition-colors">
                {amenity.title}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
