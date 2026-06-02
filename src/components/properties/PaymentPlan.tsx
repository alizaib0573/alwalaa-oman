"use client";

import React from "react";
import { motion } from "framer-motion";
import { PaymentPlanStep } from "@/types/property";

interface PaymentPlanProps {
  plan: PaymentPlanStep[];
}

export default function PaymentPlan({ plan }: PaymentPlanProps) {
  return (
    <section className="py-16 space-y-8">
      <h2 className="text-3xl font-serif text-matte-black mb-8">
        Payment <span className="italic text-gold">Plan</span>
      </h2>

      <div className="relative space-y-12">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-champagne/30 hidden md:block" />

        {plan.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative flex flex-col md:flex-row gap-6 items-center",
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            )}
          >
            <div className="md:w-1/2 text-right md:text-right space-y-2 px-4 md:px-0">
              {i % 2 !== 0 && (
                <h4 className="text-lg font-serif text-matte-black">{step.condition}</h4>
              )}
            </div>

            <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-gold flex items-center justify-center text-gold font-bold text-sm shadow-lg">
              {step.percentage}
            </div>

            <div className="md:w-1/2 text-left space-y-2 px-4 md:px-0">
              {i % 2 === 0 && (
                <h4 className="text-lg font-serif text-matte-black">{step.condition}</h4>
              )}
              <p className="text-xs uppercase tracking-widest text-matte-black/40 font-medium">
                {step.timing}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
