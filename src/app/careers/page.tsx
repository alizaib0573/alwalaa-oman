"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-ivory">
      <Navbar />

      {/* Careers Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <img
            src="https://alwalaaoman.com/wp-content/uploads/2025/02/6.webp"
            alt="Careers"
            className="h-full w-full object-cover brightness-50"
          /> */}
          <div className="absolute inset-0 z-0 overflow-hidden">
  <iframe
    className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-125"
    src="https://www.youtube.com/embed/mPdMWJdCbMQ?autoplay=1&mute=1&controls=0&loop=1&playlist=mPdMWJdCbMQ&playsinline=1"
    title="Hero Background Video"
    allow="autoplay; fullscreen"
  />
  <div className="absolute inset-0 bg-black/45" />
</div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Join Our Team
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-ivory leading-tight">
              Shape the Future <br />
              <span className="italic">of Luxury</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-matte-black">
              A Legacy <br />
              <span className="italic text-gold">of Excellence</span>
            </h2>
            <p className="text-matte-black/70 text-lg leading-relaxed font-light">
              At Alwalaa, we foster a professional environment that inspires growth, collaboration, and success. We don&apos;t just work in real estate; we innovate boldly and dare to dream big. Join a team where your ambition is matched by our commitment to luxury.
            </p>
            <div className="w-20 h-px bg-gold" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src="https://alwalaaoman.com/wp-content/uploads/2025/02/2.webp"
              width={500}
              height={500}
              className="h-64 w-full object-cover rounded-sm"
              alt="Office"
            />
            <Image
              src="https://alwalaaoman.com/wp-content/uploads/2025/02/3.webp"
              width={500}
              height={500}
              className="h-64 w-full object-cover rounded-sm mt-12"
              alt="Team"
            />
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-32 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Current Opportunities
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-matte-black italic">
              Open Positions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-10 bg-ivory border-l-4 border-gold flex justify-between items-center hover:shadow-md transition-all"
            >
              <div>
                <h3 className="text-2xl font-serif text-matte-black uppercase tracking-wide">
                  Property Advisor
                </h3>
                <p className="text-matte-black/60 text-sm mt-2">Location: Muscat, Oman</p>
              </div>
              <Link
                href="#apply"
                className="text-xs uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-matte-black hover:border-matte-black transition-all"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-matte-black text-ivory">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif italic">
            Ready to elevate <br />
            your career?
          </h2>
          <p className="text-ivory/60 font-light text-lg">
            We are always looking for driven individuals who share our passion for luxury and excellence.
          </p>
          <div className="pt-8">
            <Link
              href="mailto:info@alwalaaoman.com"
              className="inline-block bg-gold text-matte-black px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-ivory transition-all duration-500"
            >
              Send Your CV
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
