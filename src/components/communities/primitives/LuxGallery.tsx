'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LuxGalleryProps {
  images: string[];
  title?: string;
}

export default function LuxGallery({ images, title }: LuxGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        {title && (
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              {title}
            </h2>
            <div className="mt-4 w-12 h-px bg-gold mx-auto" />
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                idx % 5 === 0 ? 'row-span-2' : 'row-span-1'
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Gallery ${idx}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-[10px] uppercase tracking-widest font-bold border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-End Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-8 right-8 p-3 text-white/60 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full h-full max-w-6xl max-h-[80vh]"
              >
                <Image
                  src={selectedImage}
                  alt="Expanded view"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
