"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Developments",
    href: "/projects",
    children: [
      { name: "Sultan Haitham City", href: "/projects/sultan-haitham" },
      { name: "Al Mouj", href: "/projects/al-mouj" },
      { name: "Muscat Bay", href: "/projects/muscat-bay" },
      { name: "Jebel Sifah", href: "/projects/jebel-sifah" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4",
        isScrolled
          ? "bg-ivory/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <img
              src="https://alwalaaoman.com/wp-content/uploads/2026/04/alwalaa-LOGO-scaled-2.avif"
              alt="Alwalaa Logo"
              className="h-10 w-auto object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveMenu(link.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest transition-colors duration-300 hover:text-gold",
                  isScrolled ? "text-matte-black" : "text-matte-black"
                )}
              >
                {link.name}
                {link.children && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
              </Link>

              {/* Mega Menu */}
              <AnimatePresence>
                {link.children && activeMenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-64 bg-ivory border border-champagne p-6 shadow-xl"
                  >
                    <div className="grid gap-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-xs uppercase tracking-wider text-matte-black hover:text-gold transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <Link
            href="#contact"
            className="bg-matte-black text-ivory px-6 py-2 text-xs uppercase tracking-widest hover:bg-gold transition-colors duration-300"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-serif text-matte-black uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-matte-black text-ivory px-8 py-3 text-sm uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Inquire Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
