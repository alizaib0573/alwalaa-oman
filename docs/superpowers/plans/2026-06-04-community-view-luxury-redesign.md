# Community View Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Community View page from a standard listing page into a premium, high-end luxury real estate investment experience.

**Architecture:** Implement a narrative-driven layout using Framer Motion for sophisticated reveals, an editorial grid for the overview, and a strict adherence to the luxury color palette (Gold, Ivory, Matte Black) with high-contrast accessibility.

**Tech Stack:** Next.js, Tailwind CSS, Framer Motion, Lucide React (customized).

---

### Task 1: Hero Section Prestige Redesign

**Files:**
- Modify: `src/components/community/CommunityHero.tsx`

- [ ] **Step 1: Redesign Hero Layout.** Replace the current centered layout with a more asymmetric, editorial composition. Use a larger, more dramatic serif title and a refined location badge.
- [ ] **Step 2: Implement "Investment Highlights" overlay.** Instead of just two badges, create a sophisticated "Quick Stats" bar with subtle gold borders and refined typography.
- [ ] **Step 3: Enhance Visual Depth.** Add a subtle noise texture overlay and refine the gradients to feel more like a high-end photograph than a web element.
- [ ] **Step 4: Polish Animations.** Use `useScroll` to create a more elegant parallax effect on the background image and a staggered fade-in for the typography.
- [ ] **Step 5: Commit.**
```bash
git add src/components/community/CommunityHero.tsx
git commit -m "design: redesign CommunityHero for premium prestige"
```

### Task 2: Editorial Overview Redesign (Major)

**Files:**
- Modify: `src/components/community/CommunityOverview.tsx`

- [ ] **Step 1: Remove Card Grid.** Delete the `stats.map` card-based layout entirely.
- [ ] **Step 2: Implement Brochure-Style Layout.** Create a split-content section: 
    - Left side: High-impact headline and narrative summary of the community.
    - Right side: A refined "Investment Ledger" style table or list that presents the stats (ROI, Yield, etc.) with elegant dividers and gold accents.
- [ ] **Step 3: Add Editorial Details.** Use a mix of serif and sans-serif typography to create a "magazine" feel. Add subtle gold vertical accent lines to separate data points.
- [ ] **Step 4: Implement Sophisticated Hover States.** Instead of scaling cards, use subtle text-color shifts and sliding gold underlines for data points.
- [ ] **Step 5: Commit.**
```bash
git add src/components/community/CommunityOverview.tsx
git commit -m "design: transform CommunityOverview into editorial brochure layout"
```

### Task 3: Page Flow & Visual Hierarchy

**Files:**
- Modify: `src/app/[slug]/page.tsx`

- [ ] **Step 1: Standardize Section Spacing.** Update `py-32` and `px-6` to a more intentional luxury spacing system. Ensure consistent breathing room between major narrative beats.
- [ ] **Step 2: Implement Luxury Section Separators.** Instead of plain backgrounds, add custom "divider" components (e.g., a thin gold line with a central diamond or a soft gradient transition) between major sections.
- [ ] **Step 3: Refine Backgrounds.** Audit the `bg-background` and `bg-matte-black` transitions to ensure they feel like a continuous experience rather than abrupt blocks of color.
- [ ] **Step 4: Commit.**
```bash
git add src/app/[slug]/page.tsx
git commit -m "design: refine page flow and section hierarchy"
```

### Task 4: Contrast & Accessibility Audit

**Files:**
- Modify: `src/components/community/**` (All components)

- [ ] **Step 1: Audit Text Visibility.** Identify all instances of white text on white/light-gold backgrounds. Replace with `text-matte-black` or `text-gold` where appropriate.
- [ ] **Step 2: Fix Badge Contrast.** Ensure all location and investment badges have sufficient contrast against their background using `bg-gold/10` or `bg-matte-black/80` backdrops.
- [ ] **Step 3: Verify Hover/Active States.** Ensure that interactive elements (buttons, links) have clear, visible state changes that don't rely solely on color.
- [ ] **Step 4: Commit.**
```bash
git add src/components/community/
git commit -m "fix: resolve accessibility and contrast issues across community pages"
```

### Task 5: Premium Iconography & Finishing Touches

**Files:**
- Modify: `src/components/community/**` (All components)

- [ ] **Step 1: Replace Generic Icons.** Scan all components for standard Lucide icons. Replace them with a custom "luxury" set—using thinner stroke weights and applying the `text-gold` color.
- [ ] **Step 2: Add Gold Micro-Interactions.** Implement subtle gold-glow animations or "shimmer" effects on primary CTA buttons and key investment metrics.
- [ ] **Step 3: Refine Border Treatments.** Replace standard borders with `border-gold/30` and use `backdrop-blur` consistently for any floating glass elements.
- [ ] **Step 4: Final Visual Review.** Ensure responsiveness across mobile, tablet, and desktop, maintaining the luxury feel.
- [ ] **Step 5: Commit.**
```bash
git add src/components/community/
git commit -m "design: add premium iconography and final luxury polish"
```
