"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative py-24 bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/ceo.webp"
              alt="Eng. Humood Al Adhari - CEO Alwalaa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 via-matte-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h4 className="text-2xl font-serif text-ivory italic">
                Eng. Humood Al Adhari
              </h4>
              <p className="text-ivory/70 text-xs uppercase tracking-widest mt-1 mb-4">
                Chief Executive Officer
              </p>
              {/* Social icons on image card */}
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://www.instagram.com/alwalaa.om",
                    label: "Instagram",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.youtube.com/@AlwalaaRealestate",
                    label: "YouTube",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/company/alwalaa-realestate",
                    label: "LinkedIn",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.facebook.com/profile.php?id=61555342670178",
                    label: "Facebook",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-ivory transition-all duration-300 hover:bg-gold hover:border-gold hover:text-matte-black hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                Our Legacy
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-matte-black leading-tight mb-6">
                Why Choose  <br />
                <span className="italic text-gold">Alwalaa Real Estate</span>
              </h2>
              <p className="text-lg text-matte-black/70 leading-relaxed font-light mb-8">
                Finding the right property in Oman starts with the right partner. Alwalaa Real Estate, part of Alwalaa leading projects SPC and led by Eng. Humood AlAdhari, helps local and international buyers discover luxury villas, apartments, off-plan development and freehold properties with trusted expertise, local market knowledge and complete transparency.               
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-2">
                <h5 className="text-matte-black font-serif text-xl italic">Local Market Expertise</h5>
                <p className="text-sm text-matte-black/60 font-light">
                  Helping local and international buyers navigate the Oman real estate market with confidence
                </p>
              </div>
              <div className="space-y-2">
                <h5 className="text-matte-black font-serif text-xl italic">Exclusive ITC Access </h5>
                <p className="text-sm text-matte-black/60 font-light">
                  Discover premium ITC properties and exclusive investment opportunities across Oman.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4"
            >
              <button
                onClick={() => {
                  // Trigger the popup
                  if (typeof window !== "undefined") {
                    const btn = document.querySelector('[data-popup="callback"]') as HTMLElement;
                    if (btn) btn.click();
                  }
                }}
                className="bg-gold text-matte-black px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-matte-black hover:text-ivory transition-all duration-300 rounded-full"
              >
                Book a Consultation with Eng. Humood
              </button>
            </motion.div>

            {/* Social Connect Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-2"
            >
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-ivory border border-champagne/50">
                <div className="flex-shrink-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-matte-black/40 font-semibold mb-3">
                    Follow Eng. Humood
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      {
                        href: "https://www.instagram.com/alwalaa.om",
                        label: "Instagram",
                        color: "hover:text-[#E1306C]",
                        icon: (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ),
                      },
                      {
                        href: "https://www.youtube.com/@AlwalaaRealestate",
                        label: "YouTube",
                        color: "hover:text-[#FF0000]",
                        icon: (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        ),
                      },
                      {
                        href: "https://www.linkedin.com/company/alwalaa-realestate",
                        label: "LinkedIn",
                        color: "hover:text-[#0A66C2]",
                        icon: (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        ),
                      },
                      {
                        href: "https://www.facebook.com/profile.php?id=61555342670178",
                        label: "Facebook",
                        color: "hover:text-[#1877F2]",
                        icon: (
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        ),
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`text-matte-black/40 transition-all duration-300 ${social.color} hover:scale-110 hover:-translate-y-0.5`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="w-px h-12 bg-champagne/60 flex-shrink-0" />
                <p className="text-xs text-matte-black/50 font-light leading-relaxed italic">
                  Stay connected for the latest luxury property insights, market updates and investment opportunities from Oman&apos;s leading real estate partner.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
