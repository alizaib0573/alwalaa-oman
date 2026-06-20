import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/core/SmoothScroll";
import LoadingScreen from "@/components/core/LoadingScreen";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alwalaa Real Estate | Premium Investment in Oman",
  description: "Invest in Oman’s most prestigious properties with Alwalaa Real Estate. Redefining luxury real estate investment for global investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", playfair.variable, "font-sans", geist.variable)}
    >
      <body className="flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
