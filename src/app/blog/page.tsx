"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilter from "@/components/blog/BlogFilter";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import blogData from "@/data/blog.json";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(blogData.map((a) => a.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredArticles = useMemo(() => {
    return blogData.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === "All" || article.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory]);

  const featuredArticle = filteredArticles[0];
  const latestArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-ivory text-matte-black">
      <Navbar forceBlack />
      <BlogHero />

      <BlogFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="relative z-10 px-6 pt-16 md:pt-12 pb-24 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="popLayout">
          {filteredArticles.length > 0 ? (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <BlogCard article={featuredArticle} isFeatured />
              )}

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestArticles.map((article, idx) => (
                  <BlogCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-matte-black/40 font-light tracking-widest uppercase text-xs">
                No intelligence matches your search.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
