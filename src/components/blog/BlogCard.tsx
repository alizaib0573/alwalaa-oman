"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  article: {
    slug: string;
    title: string;
    date: string;
    category: string;
    featuredImage: string;
  };
  isFeatured?: boolean;
}

export default function BlogCard({ article, isFeatured = false }: BlogCardProps) {
  if (isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full aspect-[4/5] md:aspect-[21/9] group overflow-hidden cursor-pointer mb-16"
      >
        <Link href={`/blog/${article.slug}`} className="block h-full w-full relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent z-10" />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 text-ivory">
            <motion.span
              className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {article.category}
            </motion.span>
            <motion.h2
              className="text-3xl md:text-6xl font-serif leading-tight mb-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {article.title}
            </motion.h2>
            <div className="flex items-center gap-4 text-ivory/50 text-[10px] uppercase tracking-widest font-medium">
              <span>{article.date}</span>
              <span className="w-px h-3 bg-ivory/20" />
              <span>Read Insight</span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative w-full aspect-[4/5] cursor-pointer overflow-hidden bg-ivory"
    >
      <Link href={`/blog/${article.slug}`} className="block h-full w-full relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover opacity-100 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent z-10" />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-ivory">
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">
            {article.category}
          </span>
          <h3 className="text-xl md:text-2xl font-serif leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
            {article.title}
          </h3>
          <div className="flex items-center justify-between text-ivory/40 text-[10px] uppercase tracking-widest font-medium">
            <span>{article.date}</span>
            <span className="text-gold group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
