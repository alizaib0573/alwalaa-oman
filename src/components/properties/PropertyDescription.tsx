"use client";

import React from "react";
import { motion } from "framer-motion";

interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <section className="py-16 space-y-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-serif text-matte-black mb-8">
          Property <span className="italic text-gold">Description</span>
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-matte-black/70 text-lg font-light leading-relaxed space-y-6"
        >
          {description.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
