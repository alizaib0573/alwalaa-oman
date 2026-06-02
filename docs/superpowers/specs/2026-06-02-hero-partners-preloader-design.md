---
name: hero-partners-preloader-refinement
description: Design for replacing hero video with a cinematic carousel, scaling partner logos, and removing the preloader.
metadata:
  type: design-spec
  date: 2026-06-02
---

# Design Spec: Hero, Partners, and Preloader Refinement

## 1. Hero Section: Cinematic Image Carousel
Replace the current YouTube iframe background with a high-end image carousel.

### Visual Direction
- **Effect**: Ken Burns (slow zoom) combined with a cross-fade.
- **Timing**: 7-second duration per image.
- **Assets**: `p1.jpg`, `p2.jpg`, `p3.jpg`, `p4.jpg`.
- **Atmosphere**: Luxury, stability, and prestige.

### Implementation Details
- Use a stack of absolute-positioned images.
- `framer-motion` for managing opacity and scale.
- Keep existing overlay gradients (`bg-black/45`, `bg-gradient-to-b`) to ensure text contrast.
- **State Management**: A simple index-based state to track the current active image.

## 2. Our Partners: Logo Scaling
Increase the visibility and impact of partner logos while maintaining the existing aesthetic structure.

### Visual Direction
- **Scale**: Increase logo height from `h-32` to approximately `h-80` (or similar large scale to achieve ~300% increase).
- **Constraint**: Maintain the card-based layout to preserve the professional organization of the section.
- **Adjustments**: Expand the card's `max-w` and `aspect-ratio` to accommodate the larger imagery without clipping.

### Interaction
- Retain the grayscale $\to$ color transition on hover.
- Retain the `group-hover:scale-110` effect.
- Maintain the refined typography for name and role below the larger logo.

## 3. Preloader Removal
Eliminate the initial loading screen to improve perceived performance and site entry speed.

### Action
- Remove the `<LoadingScreen />` component from `src/app/layout.tsx`.
- Ensure that the transition from the server response to the rendered page is seamless.

## Success Criteria
- [ ] Hero section cross-fades smoothly between 4 images with a slow zoom.
- [ ] Partner logos are visibly ~3x larger than the previous version.
- [ ] Site loads directly into the home page without the "Establishing Luxury" screen.
- [ ] No layout shifts or glitches during image transitions.
