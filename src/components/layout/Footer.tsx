"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePopup } from "@/context/PopupContext";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const EXPLORE_LINKS = [
  { name: "Properties", href: "/properties" },
  { name: "Communities", href: "/properties" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
];

const PROPERTY_TYPES = [
  { name: "Villas", href: "/properties" },
  { name: "Apartments", href: "/properties" },
  { name: "Penthouses", href: "/properties" },
  { name: "Off-Plan", href: "/properties" },
  { name: "Freehold ITC", href: "/properties" },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/alwalaa.om", icon: <FaInstagram size={16} /> },
  { name: "YouTube", href: "https://www.youtube.com/@AlwalaaRealestate", icon: <FaYoutube size={16} /> },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61555342670178", icon: <FaFacebookF size={16} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/alwalaa-realestate", icon: <FaLinkedinIn size={16} /> },
  { name: "WhatsApp", href: "https://wa.me/96891000000", icon: <FaWhatsapp size={16} /> },
];

const CONTACT = {
  address: "Muscat, Sultanate of Oman",
  email: "info@alwalaaoman.com",
  phone: "+968 71 555 067",
  hours: "Mon – Fri: 9am – 6pm",
};

const LEGAL = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Disclaimer", href: "#" },
];

export default function Footer() {
  const { openPopup } = usePopup();

  return (
    <footer className="bg-[#080808] text-white">

      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >

          {/* Col 1 — Brand */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-6 lg:col-span-1"
          >
            <Image
              src="/Logo white.png"
              alt="Alwalaa Real Estate"
              width={140}
              height={60}
              priority
            />
            <p className="text-white/40 text-[12px] leading-relaxed font-light max-w-[220px]">
              Connecting discerning buyers with Oman&apos;s most exclusive residences, waterfront communities and investment opportunities.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-white/30 hover:text-gold transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Explore */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-semibold">Explore</p>
            <nav className="flex flex-col gap-3">
              {EXPLORE_LINKS.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-white/60 text-sm font-light hover:text-gold transition-colors duration-300"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Col 3 — Properties */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-semibold">Property Types</p>
            <nav className="flex flex-col gap-3">
              {PROPERTY_TYPES.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-white/60 text-sm font-light hover:text-gold transition-colors duration-300"
                >
                  {l.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Col 4 — Contact + CTA */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-5"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 font-semibold">Contact</p>

            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-gold text-xl font-serif hover:text-white transition-colors duration-300"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white/50 text-sm font-light hover:text-white/80 transition-colors duration-300"
              >
                {CONTACT.email}
              </a>
              <p className="text-white/30 text-xs font-light">{CONTACT.address}</p>
              <p className="text-white/30 text-xs font-light">{CONTACT.hours}</p>
            </div>

            <button
              onClick={openPopup}
              className="mt-2 w-full bg-gold text-matte-black text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 px-6 hover:bg-white transition-all duration-300"
            >
              Book Free Consultation
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-white/25 text-[11px] font-light">
            © {new Date().getFullYear()} Alwalaa Real Estate. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {LEGAL.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-white/25 text-[11px] font-light hover:text-white/50 transition-colors duration-300"
              >
                {l.name}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
