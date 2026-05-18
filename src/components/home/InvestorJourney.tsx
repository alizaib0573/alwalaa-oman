"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { step: "01", title: "Consultation", description: "Personalized strategy session to align with your investment goals.", image: "/consultation.jpg" },
  { step: "02", title: "Project Selection", description: "Curated list of high-yield properties matching your profile.", image: "/p1.jpg" },
  { step: "03", title: "Legal Process", description: "Seamless handling of all Omani property laws and documentation.", image: "/legal.jpg" },
  { step: "04", title: "Purchase", description: "Secure and transparent transaction process with full support.", image: "/purchase.jpg" },
  { step: "05", title: "Ownership", description: "Handover of your prestigious asset and residency qualification.", image: "/ownership.jpg" },
  { step: "06", title: "After-Sales", description: "Comprehensive portfolio management and rental assistance.", image: "/after-sale.jpg" },
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
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl ">
              {/* Background Image */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent" />

              <div className="absolute top-0 left-0 p-8 text-8xl font-serif text-warm-white select-none">
                {step.step}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end transition-all duration-500 ">
                <h3 className="text-2xl font-serif text-ivory mb-4 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-ivory/70 text-sm leading-relaxed font-light">
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
