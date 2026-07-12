"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "%", prefix: "up to ", label: "Annual ROI" },
  { value: 8, suffix: "+", label: "Premier Developers" },
  { value: 100, suffix: "%", label: "Free Consultation" },
];

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-matte-black border-t border-gold/20 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gold/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4 py-2"
            >
              <div className="text-3xl md:text-4xl font-serif text-gold mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
