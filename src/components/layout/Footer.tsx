"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-matte-black text-ivory pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Brand Section */}
        <div className="space-y-8">
          <img
            src="https://alwalaaoman.com/wp-content/uploads/2026/04/alwalaa-LOGO-scaled-2.avif"
            alt="Alwalaa Logo"
            className="h-12 w-auto invert brightness-0 invert"
          />
          <p className="text-champagne text-sm leading-relaxed max-w-xs">
            Redefining real estate investment for foreign investors and high-net-worth individuals.
            Helping you find the most prestigious properties in Oman.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-all duration-300 text-ivory hover:text-matte-black group">
              <Camera size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold transition-all duration-300 text-ivory hover:text-matte-black group">
              <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Company</h4>
            <ul className="space-y-4 text-sm text-warm-white/60">
              <li><Link href="/" className="hover:text-ivory transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-ivory transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-ivory transition-colors">Careers</Link></li>
              <li><Link href="/projects" className="hover:text-ivory transition-colors">Projects</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Explore</h4>
            <ul className="space-y-4 text-sm text-warm-white/60">
              <li><Link href="#" className="hover:text-ivory transition-colors">Sultan Haitham City</Link></li>
              <li><Link href="#" className="hover:text-ivory transition-colors">Al Mouj</Link></li>
              <li><Link href="#" className="hover:text-ivory transition-colors">Muscat Bay</Link></li>
              <li><Link href="#" className="hover:text-ivory transition-colors">Jebel Sifah</Link></li >
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-8">
          <h4 className="text-gold uppercase tracking-widest text-xs font-bold">Investment Inquiry</h4>
          <div className="space-y-4 text-sm text-warm-white/60">
            <p>UFC gym Building, Shihab Building,<br />Al Mauj St, Muscat, Oman</p>
            <p>Phone: <span className="text-ivory">+968 71555067</span></p>
            <p>Email: <span className="text-ivory">info@alwalaaoman.com</span></p>
          </div>
          <div className="pt-4">
            <Link
              href="mailto:info@alwalaaoman.com"
              className="inline-block border-b border-gold text-gold pb-1 text-xs uppercase tracking-widest hover:text-ivory transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-warm-white/40">
        <p>© {new Date().getFullYear()} Alwalaa Real Estate. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-ivory transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-ivory transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
