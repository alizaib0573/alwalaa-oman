"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  article: {
    slug: string;
    title: string;
    date: string;
    category: string;
    featuredImage: string;
    metaDescription?: string;
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
        className="relative w-full aspect-[4/5] md:aspect-[21/9] group overflow-hidden rounded-2xl cursor-pointer mb-16 shadow-lg border border-champagne/10 bg-matte-black"
      >
        <Link href={`/blog/${article.slug}`} className="block h-full w-full relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent z-10" />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 text-ivory">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gold text-matte-black uppercase tracking-[0.2em] text-[9px] font-bold px-3 py-1 rounded-full">
                Featured Insight
              </span>
              <span className="text-white/80 uppercase tracking-widest text-[9px] font-bold">
                {article.category}
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl font-serif leading-tight mb-4 max-w-4xl group-hover:text-gold transition-colors duration-300">
              {article.title}
            </h2>
            {article.metaDescription && (
              <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed max-w-2xl mb-6 line-clamp-2">
                {article.metaDescription}
              </p>
            )}
            <div className="flex items-center gap-4 text-ivory/50 text-[10px] uppercase tracking-widest font-medium">
              <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
              <span className="w-px h-3 bg-ivory/20" />
              <span className="flex items-center gap-1 text-gold">Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative w-full flex flex-col bg-white border border-champagne/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <Link href={`/blog/${article.slug}`} className="flex flex-col h-full">
        {/* Image Frame */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-matte-black/5">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 33vw"
          />
          <div className="absolute top-4 left-4 bg-gold text-matte-black text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
            {article.category}
          </div>
        </div>

        {/* Content Block */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-[10px] text-matte-black/40 uppercase tracking-widest font-medium block">
              {article.date}
            </span>
            <h3 className="text-lg md:text-xl font-serif leading-snug text-matte-black group-hover:text-gold transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>
            {article.metaDescription && (
              <p className="text-matte-black/60 text-[13px] font-light leading-relaxed line-clamp-2">
                {article.metaDescription}
              </p>
            )}
          </div>
          <div className="pt-2 border-t border-matte-black/[0.06] flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-matte-black/80 group-hover:text-gold transition-colors">
            <span>Read Insight</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
