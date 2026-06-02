"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openLightbox = (img: string) => {
    setSelectedImage(img);
    setCurrentIdx(images.indexOf(img));
  };

  const nextImage = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIdx + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIdx - 1 + images.length) % images.length]);
  };

  return (
    <div className="relative w-full space-y-6">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
        {/* Large Main Image */}
        <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-sm h-full">
          <Image
            src={images[0]}
            alt="Property Main"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => openLightbox(images[0])}
              className="bg-ivory/90 backdrop-blur-md text-matte-black p-3 rounded-full hover:bg-gold transition-colors"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        {/* Secondary Images */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4 h-full">
          {images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-sm h-full"
              onClick={() => openLightbox(img)}
            >
              <Image
                src={img}
                alt={`Property image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-matte-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-ivory p-2 hover:bg-white/10 rounded-full transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory p-4 hover:bg-white/10 rounded-full transition-colors z-[110]"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory p-4 hover:bg-white/10 rounded-full transition-colors z-[110]"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
            >
              <Image
                src={selectedImage}
                alt="Full screen view"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
