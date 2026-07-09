"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openPopup } = usePopup();
  const hasOpened = useRef(false);
  const images = [ "/p2.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (hasOpened.current) return;
    hasOpened.current = true;
    const popupTimer = setTimeout(() => {
      openPopup();
    }, 5000);
    return () => clearTimeout(popupTimer);
  }, [openPopup]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Cinematic Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: "linear" },
              scale: { duration: 7, ease: "linear" }
            }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt="Luxury Oman Real Estate"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-matte-black/40 via-transparent to-matte-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl 2xl:text-9xl font-serif text-ivory leading-tight mb-8">
            Buy Luxury <br />
            <span className="italic">Property in</span> <br /> Oman
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/properties"
              className="bg-gold text-matte-black px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-ivory transition-all duration-500"
            >
              Explore Properties
            </Link>
            <Link
              href="/about-us"
              className="text-ivory border-b border-ivory/30 px-4 py-4 text-xs uppercase tracking-widest font-medium hover:border-gold transition-all duration-500"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Floating Icon */}
      <motion.a
        href="https://wa.me/96800000000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-10 right-10 z-20 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:bg-ivory transition-colors duration-300 group"
      >
        <FaWhatsapp className="text-matte-black text-2xl group-hover:text-gold transition-colors duration-300" />
      </motion.a>

    </section>
  );
}
