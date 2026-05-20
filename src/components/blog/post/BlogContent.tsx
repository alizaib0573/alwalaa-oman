"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Share2, ArrowLeft, Calendar, Tag } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RichText from "@/components/blog/RichText";

interface BlogContentProps {
  article: {
    slug: string;
    title: string;
    date: string;
    category: string;
    featuredImage: string;
    content: string;
  };
 relatedArticles: {
  slug: string;
  title: string;
  image: string;
  date: string;
  category: string;
}[];
}

// Note: I'll just pass a generic array for related articles
export default function BlogContent({ article, relatedArticles }: any) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-ivory text-matte-black selection:bg-gold selection:text-matte-black">
      <Navbar forceBlack />
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />
          <div className="absolute inset-0 bg-ivory/30" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8 text-matte-black">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-matte-black/60 text-[10px] uppercase tracking-widest font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-3 h-3" />
                <span>{article.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 max-w-3xl mx-auto px-6 py-20">
        {/* Sticky Share Controls */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
          <div className="p-3 bg-matte-black/5 backdrop-blur-md border border-matte-black/10 rounded-full text-matte-black/40 hover:text-gold transition-colors cursor-pointer">
            <Share2 className="w-4 h-4" />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gold text-[10px] uppercase tracking-widest font-bold hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Insights
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-none"
        >
          <RichText content={article.content} />
        </motion.div>

        {/* Related Articles */}
        <section className="mt-32 pt-20 border-t border-matte-black/10">
          <h2 className="text-3xl font-serif text-matte-black mb-12">Related Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((a: any) => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
