"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

interface PropertyLocationProps {
  location: string;
  coordinates: { lat: number; lng: number };
}

export default function PropertyLocation({ location, coordinates }: PropertyLocationProps) {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${coordinates.lat},${coordinates.lng}!5e0!3m2!1sen!2som!4v1234567890`;

  return (
    <section className="py-16 space-y-8">
      <h2 className="text-3xl font-serif text-matte-black mb-8">
        Property <span className="italic text-gold">Location</span>
      </h2>

      <div className="relative h-[450px] w-full overflow-hidden rounded-sm">
        <iframe
          title="Property Location"
          src={mapEmbedUrl}
          className="w-full h-full grayscale opacity-80 contrast-125"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute top-6 right-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-matte-black text-ivory px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-matte-black transition-all flex items-center gap-3 shadow-xl"
          >
            <ExternalLink size={16} /> Open in Maps
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4 text-matte-black/60 font-light text-sm italic">
        <MapPin size={16} className="text-gold" />
        {location}
      </div>
    </section>
  );
}
