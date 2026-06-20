"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, Gem, Target, Coins } from "lucide-react";

interface InvestmentAnalysisProps {
  data: {
    marketOutlook: string;
    appreciationTrends: string;
    demandForecast: string;
    rentalPerformance: string;
    indicators: { label: string; value: string; trend: 'up' | 'down' | 'stable' }[];
  };
}

export default function InvestmentAnalysis({ data }: InvestmentAnalysisProps) {
  const intelligenceMatrix = [
    { label: "Market Outlook", value: data.marketOutlook, icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Appreciation Trends", value: data.appreciationTrends, icon: <Gem className="w-8 h-8" /> },
    { label: "Demand Forecast", value: data.demandForecast, icon: <Target className="w-8 h-8" /> },
    { label: "Rental Performance", value: data.rentalPerformance, icon: <Coins className="w-8 h-8" /> },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 skew-x-[-15deg] translate-x-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block"
          >
            Market Intelligence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-matte-black leading-tight tracking-tight"
          >
            Is This a High-Yield <br />
            <span className="italic text-gold">Investment in 2026?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Intelligence Matrix */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {intelligenceMatrix.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2rem] bg-matte-black border border-ivory/10 hover:border-gold/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="text-gold mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h4 className="text-gold uppercase tracking-widest text-[11px] font-bold mb-4">{item.label}</h4>
                <p className="text-ivory/70 leading-relaxed font-light text-lg">
                  {item.value}
                </p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all" />
              </motion.div>
            ))}
          </div>

          {/* Metric Command Center */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gold/5 border border-gold/30 p-10 rounded-[2.5rem] h-full backdrop-blur-sm"
            >
              <h4 className="text-matte-black font-serif text-3xl mb-10 text-center">Key Indicators</h4>
              <div className="flex flex-col gap-6">
                {data.indicators.map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center p-6 rounded-2xl bg-matte-black/60 border border-ivory/5 hover:border-gold/30 transition-all group"
                  >
                    <span className="text-ivory/50 text-xs uppercase tracking-widest font-medium">{ind.label}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-serif text-xl font-bold group-hover:scale-110 transition-transform">{ind.value}</span>
                      <span className={cn(
                        "text-[9px] px-3 py-1 rounded-full uppercase font-bold tracking-widest",
                        ind.trend === 'up' ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                        ind.trend === 'down' ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-ivory/10 text-ivory/60 border border-ivory/20"
                      )}>
                        {ind.trend === 'up' ? "↑ Bullish" : ind.trend === 'down' ? "↓ Bearish" : "→ Neutral"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 p-6 rounded-2xl bg-gold/10 border border-gold/20 text-center">
                <p className="text-gold text-[10px] uppercase tracking-widest font-bold">
                  Analysis Validated for FY 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
