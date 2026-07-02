# Luxury Community Pages Design Specification
Date: 2026-06-28
Status: Final Design
Topic: Redesign of Community View Pages for Ultra-Luxury Real Estate

## 1. Executive Vision
Transform the community pages from a generic template into a series of high-end, editorial experiences. Each page will be treated as a unique architectural composition using a shared "Luxury Primitive" design system. The goal is to evoke the prestige of brands like Sotheby's and Omniyat, prioritizing whitespace, sophisticated typography, and cinematic motion.

## 2. Technical Architecture

### 2.1 Routing Strategy
We will implement **Option A (Totally Bespoke)**. Each community will have its own physical route file to allow for unique layout compositions and bespoke content structures.
- `/communities/al-mouj/page.tsx`
- `/communities/aida/page.tsx`
- `/communities/muscat-bay/page.tsx`
- `/communities/sultan-haitham-city/page.tsx`
- `/communities/jebel-sifah/page.tsx`
- `/communities/sustainable-city/page.tsx`
- `/communities/madinat-al-irfan/page.tsx`
- `/communities/hawana-salalah/page.tsx`

### 2.2 The "Luxury Primitive" System
To maintain a consistent brand DNA while allowing for bespoke layouts, we will build a library of high-fidelity components in `src/components/communities/primitives/`.

#### Core Primitives:
- **`LuxHero`**: Cinematic full-screen entry with parallax background, floating gold-accented text reveals, and a refined scroll-indicator.
- **`LuxEditorial`**: Asymmetric layout for narrative content. Features "floating" images with subtle zoom-on-scroll and high-contrast serif typography.
- **`LuxStatGrid`**: Glassmorphism cards with animated number counters and 1px gold bottom-borders.
- **`LuxInvestmentCard`**: High-end cards for "Why Invest" featuring a subtle glow-on-hover and spring-physics lift animation.
- **`LuxGallery`**: A curated masonry layout with an integrated high-end fullscreen lightbox experience.
- **`LuxTimeline`**: A vertical narrative line that animates its progress based on the user's scroll position, connecting the community's past, present, and future.
- **`LuxFAQ`**: A minimal, wide-width accordion using a "single-active" state with gold-accented borders.
- **`LuxLocationMap`**: A custom-styled map integrated with "Driving Time" cards and luxury landmark markers.
- **`LuxCTA`**: A high-conversion, low-friction consultation section with a glassmorphic backdrop and a strong focus on "Exclusive Access."

## 3. Visual Identity (The "Million Dollar" Look)

### 3.1 Color Palette (Strict)
- **Primary Backgrounds**: Deep Charcoal (`#121212`), Pure Black (`#000000`), Warm Ivory (`#F9F6F2`).
- **Accent**: Premium Gold (`#C8A96A`) used exclusively for 1px borders, icon strokes, and key highlights.
- **Glassmorphism**: `backdrop-blur-md` with 10% white/black borders.

### 3.2 Typography
- **Headings**: Oversized high-contrast Serif (Playfair Display or similar) for an "Editorial/Vogue" feel.
- **Body**: Clean, wide-tracked Sans-Serif (Inter/Montserrat) for modern professionalism.
- **Accents**: Uppercase, widely spaced tracking for labels and badges.

### 3.3 Motion Design (Framer Motion)
- **Physics**: Spring transitions (`damping: 20, stiffness: 100`).
- **Behaviors**:
  - Scroll-triggered reveals (Fade-in + Slide-up).
  - Parallax image scaling on scroll.
  - Smooth layout transitions via `layoutId`.
  - Subtle glow effects on hover for interactive elements.

## 4. Content Strategy
Each page will be populated using the `COMMUNITIES_DATA` but will be augmented with **Curated Editorial Copywriting**. 

- **Tone**: Exclusive, authoritative, visionary, and sophisticated.
- **Approach**: Instead of "This community has a pool," we use "A sanctuary of aquatic elegance, where the horizon meets the infinity pool."
- **Imagery**: Defined via a "Curated Placeholder Strategy" with specific art-direction notes for every image slot.

## 5. Page Composition Examples

### Al Mouj (The Waterfront Masterpiece)
`LuxHero` $\rightarrow$ `LuxEditorial` (The Marina Story) $\rightarrow$ `LuxStatGrid` $\rightarrow$ `LuxGallery` $\rightarrow$ `LuxInvestmentCard` (Yachting Lifestyle) $\rightarrow$ `LuxLocationMap` $\rightarrow$ `LuxFAQ` $\rightarrow$ `LuxCTA`.

### AIDA (The Visionary Coastal)
`LuxHero` $\rightarrow$ `LuxTimeline` (The Evolution) $\rightarrow$ `LuxInvestmentCard` (First-Mover Advantage) $\rightarrow$ `LuxEditorial` (Sustainable Luxury) $\rightarrow$ `LuxStatGrid` $\rightarrow$ `LuxGallery` $\rightarrow$ `LuxFAQ` $\rightarrow$ `LuxCTA`.

## 6. SEO & Performance
- **Dynamic Metadata**: Unique titles/descriptions per community.
- **Optimization**: Next.js `Image` component for WebP/AVIF, lazy loading of all non-hero sections, and code-splitting for the primitive library.
