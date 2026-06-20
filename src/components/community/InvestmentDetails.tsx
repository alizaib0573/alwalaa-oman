"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Globe, Users } from "lucide-react";

interface WhyInvestProps {
  data: {
    cards: { icon: string; title: string; description: string }[];
  };
}

export function WhyInvest({ data }: WhyInvestProps) {
  return (
    <section className="py-32 bg-matte-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Strategic Value</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory leading-tight tracking-tight">
            Why Global Investors <br />
            <span className="italic text-gold">Prioritize This Address</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gradient-to-b from-ivory/10 to-transparent border border-ivory/10 hover:border-gold/40 transition-all duration-500 group relative"
            >
              <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 block">{card.icon}</div>
              <h4 className="text-ivory font-serif text-2xl mb-4 group-hover:text-gold transition-colors">{card.title}</h4>
              <p className="text-ivory/50 text-sm leading-relaxed font-light">{card.description}</p>
              <div className="mt-8 w-12 h-px bg-gold/30 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface FactsProps {
  data: {
    stats: { label: string; value: string; unit?: string }[];
  };
}

export function CommunityFacts({ data }: FactsProps) {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold">Essential Data</span>
            <h2 className="text-5xl md:text-7xl font-serif text-matte-black leading-tight tracking-tight">
              Crucial <br />Metrics
            </h2>
            <p className="text-matte-black/60 text-xl font-light leading-relaxed max-w-md">
              A comprehensive quantitative overview of the community's scale, operational success, and infrastructure.
            </p>
            <div className="w-20 h-1 bg-gold" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-matte-black border border-ivory/10 text-center group hover:border-gold/30 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-serif text-gold mb-3 group-hover:scale-110 transition-transform">
                  {stat.value} {stat.unit && <span className="text-sm text-ivory/40 uppercase tracking-widest">{stat.unit}</span>}
                </div>
                <div className="text-ivory/50 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface EconomicImpactProps {
  data: {
    commercialActivity: string;
    businessEcosystem: string;
    employmentGen: string;
    tourismContribution: string;
    futurePlans: string;
  };
}

export function EconomicImpact({ data }: EconomicImpactProps) {
  const matrix = [
    { label: "Commercial Activity", value: data.commercialActivity, icon: <Building2 className="w-8 h-8" /> },
    { label: "Business Ecosystem", value: data.businessEcosystem, icon: <Globe className="w-8 h-8" /> },
    { label: "Employment Generation", value: data.employmentGen, icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <section className="py-32 bg-matte-black relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Growth Catalyst</span>
          <h2 className="text-5xl md:text-7xl font-serif text-ivory leading-tight tracking-tight">
            Job Growth & <br />
            <span className="italic text-gold">Financial Opportunity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {matrix.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 p-8 rounded-3xl bg-ivory/5 border border-ivory/10 hover:border-gold/30 transition-all group"
              >
                <div className="text-gold group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-gold font-serif text-xl">{item.label}</h4>
                  <p className="text-ivory/60 text-sm leading-relaxed font-light">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-gold/20 to-transparent p-12 rounded-[3rem] border border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-2xl rounded-full" />
            <h4 className="text-ivory font-serif text-3xl mb-8 relative z-10">Future Outlook</h4>
            <p className="text-ivory/70 text-xl leading-relaxed mb-12 italic font-light relative z-10">
              "{data.futurePlans}"
            </p>
            <div className="p-8 rounded-3xl bg-matte-black/60 border border-gold/30 backdrop-blur-xl relative z-10">
              <h5 className="text-gold text-xs uppercase tracking-widest font-bold mb-4">Tourism Contribution</h5>
              <p className="text-ivory text-lg font-light leading-relaxed">
                {data.tourismContribution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
