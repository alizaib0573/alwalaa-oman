"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { step: "01", title: "Consultation", description: "Personalized strategy session to align with your investment goals." },
  { step: "02", title: "Project Selection", description: "Curated list of high-yield properties matching your profile." },
  { step: "03", title: "Legal Process", description: "Seamless handling of all Omani property laws and documentation." },
  { step: "04", title: "Purchase", description: "Secure and transparent transaction process with full support." },
  { step: "05", title: "Ownership", description: "Handover of your prestigious asset and residency qualification." },
  { step: "06", title: "After-Sales", description: "Comprehensive portfolio management and rental assistance." },
];

export default function InvestorJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const totalWidth = section.scrollWidth;
    const windowWidth = window.innerWidth;

    gsap.to(section, {
      x: -(totalWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div
        ref={sectionRef}
        className="flex h-screen items-center gap-20 px-20 bg-ivory"
        style={{ width: `${steps.length * 600}px` }}
      >
        <div className="flex-shrink-0 w-[400px]">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">
            The Experience
          </span>
          <h2 className="text-5xl font-serif text-matte-black leading-tight">
            Your Investor <br />
            <span className="italic text-gold">Journey</span>
          </h2>
        </div>

        {steps.map((step, i) => (
          <div key={i} className="flex-shrink-0 w-[400px] group">
            <div className="relative h-[500px] w-full">
              <div className="absolute -top-10 left-0 text-8xl font-serif text-gold/10 select-none">
                {step.step}
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 bg-warm-white border-l-4 border-gold transition-all duration-500 group-hover:bg-champagne">
                <h3 className="text-2xl font-serif text-matte-black mb-4 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-matte-black/60 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
