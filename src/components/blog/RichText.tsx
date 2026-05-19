"use client";

import React from "react";

interface RichTextProps {
  content: string;
}

export default function RichText({ content }: RichTextProps) {
  if (!content) return null;

  // Simple markdown-like parser for the specific structure in blog.json
  const lines = content.split("\n");

  return (
    <div className="space-y-8 text-matte-black/80 font-light leading-relaxed">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return <div key={index} className="h-4" />;

        // H2 - Main Sections
        if (trimmedLine.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-serif text-matte-black font-medium mt-12 mb-6 tracking-tight">
              {trimmedLine.replace("## ", "")}
            </h2>
          );
        }

        // H3 - Sub Sections
        if (trimmedLine.startsWith("### ")) {
          return (
            <h3 key={index} className="text-lg md:text-xl font-serif text-matte-black/90 font-medium mt-8 mb-4 tracking-tight">
              {trimmedLine.replace("### ", "")}
            </h3>
          );
        }

        // Lists (bullet points)
        if (trimmedLine.startsWith("- ") || trimmedLine.startsWith("* ")) {
          return (
            <div key={index} className="flex items-start gap-3 mb-2">
              <span className="text-gold mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <p className="text-sm md:text-base leading-relaxed">{trimmedLine.replace(/^[-*] /, "")}</p>
            </div>
          );
        }

        // Paragraphs
        return (
          <p key={index} className="text-sm md:text-base leading-relaxed mb-4">
            {trimmedLine}
          </p>
        );
      })}
    </div>
  );
}
