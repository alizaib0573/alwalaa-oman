"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { usePopup } from "@/context/PopupContext";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane
} from "react-icons/fa";

// --- Data Definitions ---
const NAV_LINKS = [
  { name: "Properties", href: "/properties" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/about-us" },
];

const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "https://wa.me/96800000000", icon: <FaWhatsapp size={20} /> },
  { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram size={20} /> },
  { name: "Facebook", href: "https://facebook.com", icon: <FaFacebookF size={20} /> },
  { name: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedinIn size={20} /> },
  { name: "Telegram", href: "https://t.me", icon: <FaTelegramPlane size={20} /> },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Cookies", href: "#" },
  { name: "Disclaimer", href: "#" },
];

const CONTACT_INFO = {
  address: "Muscat, Oman",
  email: "info@alwalaaoman.com",
  phone: "+968 71555067",
  hours: "Mon - Fri: 9am - 6pm",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  const { openPopup } = usePopup();

  return (
    <footer className="bg-[#050505] text-white pt-[120px] pb-[80px] px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-16 mb-24"
        >
          <motion.div variants={itemVariants} className="flex flex-col space-y-8">
            <div className="flex flex-col items-start">
              <Image src="/Logo white.png" alt="Alwalaa Logo" width={180} height={80} className="" priority />
            </div>
            <div className="space-y-4">
              <h2 className="text-white text-l font-serif font-medium leading-tight">Luxury Real Estate in Oman</h2>
              <p className="text-gray-400 text-[12px] font-light leading-relaxed max-w-sm">
                Connecting discerning buyers with Oman&apos;s most exclusive residences, waterfront communities and investment opportunities.
              </p>
            </div>
            {/* <div className="space-y-2 pt-4">
              <p className="text-gray-500 text-[12px] uppercase tracking-widest font-medium">RERA License: 123456</p>
              <p className="text-gray-500 text-[12px] uppercase tracking-widest font-medium">Company Registration: 789012</p>
              <p className="text-gray-500 text-[12px] uppercase tracking-widest font-medium">Trusted Since 20XX</p>
            </div> */}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-6">
              <h3 className="text-white text-[18px] font-semibold uppercase tracking-wider">Explore</h3>
              <div className="w-12 h-px bg-[#C9A56A] mt-2" />
            </div>
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.name} variants={itemVariants} className="group overflow-hidden">
                  <Link href={link.href} className="text-gray-400 text-[16px] font-regular hover:text-[#C9A56A] transition-colors duration-300 inline-block relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A56A] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-start space-y-10">
            <div className="space-y-2">
              <p className="text-gray-400 text-[12px] uppercase tracking-widest font-medium">Contact Us</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#C9A56A] text-[48px] font-bold leading-none block hover:text-white transition-colors duration-300">{CONTACT_INFO.phone}</a>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <button onClick={openPopup} className="bg-[#C9A56A] text-black font-bold text-xs uppercase tracking-widest h-[56px] px-8 flex items-center justify-center transition-all duration-300 hover:bg-white">
                Request a private consultation 
              </button>
            </motion.div>
            <div className="flex gap-5 pt-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-gray-400 hover:text-[#C9A56A] transition-all duration-300 p-2" aria-label={social.name}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 pt-12 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col space-y-3">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-500 text-[12px] hover:text-gray-300 transition-colors">{link.name}</Link>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-white text-[14px] font-medium mb-1">Address</p>
              <address className="not-italic text-gray-500 text-[12px] leading-relaxed">{CONTACT_INFO.address}</address>
            </div>
            <div className="space-y-2">
              <p className="text-white text-[14px] font-medium mb-1">Connect</p>
              <div className="text-gray-500 text-[12px] space-y-1">
                <p>Email: {CONTACT_INFO.email}</p>
                <p>Phone: {CONTACT_INFO.phone}</p>
                <p>Hours: {CONTACT_INFO.hours}</p>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end justify-self-end">
              <p className="text-gray-500 text-[12px] text-right max-w-xs">© {new Date().getFullYear()} Alwalaa Real Estate. <br /> All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
