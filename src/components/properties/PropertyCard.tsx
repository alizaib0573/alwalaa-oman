"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Bath, Square, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { PropertyUI } from "@/types/property";
import { cn } from "@/lib/utils";
import PropertyInquiryModal from "./PropertyInquiryModal";

interface PropertyCardProps {
  property: PropertyUI;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white border border-champagne/30 overflow-hidden rounded-sm hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700 h-full flex flex-col"
      >
        {/* Image Slider Container */}
        <div className="relative h-[300px] w-full overflow-hidden group/slider">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={property.images[currentImage]}
              alt={property.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-transparent to-transparent pointer-events-none" />

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

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white/80 text-matte-black hover:bg-gold transition-colors shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white/80 text-matte-black hover:bg-gold transition-colors shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-matte-black/40 backdrop-blur-md text-ivory text-[9px] uppercase tracking-widest px-2 py-1 rounded-full">
            {currentImage + 1} / {property.images.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 flex flex-col">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gold/80">
              <MapPin size={14} />
              <span className="text-[10px] uppercase tracking-widest font-medium">
                {property.location}
              </span>
            </div>
            <h3 className="text-xl font-serif text-matte-black group-hover:text-gold transition-colors duration-500 line-clamp-1">
              {property.title}
            </h3>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xl font-serif text-matte-black">
              {property.price.toLocaleString()} <span className="text-xs uppercase tracking-tighter">{property.currency}</span>
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-champagne/30">
            <div className="flex flex-col items-center gap-1">
              <Bed size={18} className="text-gold/60" />
              <span className="text-[10px] text-matte-black/60 font-light">{property.bedrooms} Beds</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Bath size={18} className="text-gold/60" />
              <span className="text-[10px] text-matte-black/60 font-light">{property.bathrooms} Baths</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Square size={18} className="text-gold/60" />
              <span className="text-[10px] text-matte-black/60 font-light">{property.area} m²</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto block w-full text-center py-4 bg-matte-black text-ivory text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-matte-black transition-all duration-500"
          >
            Request Details
          </button>
        </div>
      </motion.div>

      <PropertyInquiryModal
        property={property}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
