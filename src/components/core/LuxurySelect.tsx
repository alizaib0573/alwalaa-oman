"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface LuxurySelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function LuxurySelect({ options, value, onChange, placeholder }: LuxurySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-matte-black/60 backdrop-blur-md text-ivory border border-gold/30 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:border-gold/60 flex items-center justify-between group"
      >
        <span className={value ? "text-ivory" : "text-ivory/50"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-[100] w-full mt-2 bg-matte-black border border-gold/30 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gold/30 scrollbar-track-transparent">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 text-sm cursor-pointer transition-colors duration-200 ${
                    value === option
                    ? "bg-gold text-matte-black font-semibold"
                    : "text-ivory/80 hover:bg-gold/20 hover:text-gold"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
