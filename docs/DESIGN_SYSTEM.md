# Design System & Branding

## Overview

StackAtlas uses a unified visual design system built on three core layers that represent the digital sovereignty landscape.

**Important:** The brand identity uses a **simplified 3-layer pyramid** (Building Blocks, Applications, Sovereign), which is consistent across the favicon and brand guidelines. However, the **splash animation currently implements a 5-layer model** (Infrastructure, Platform, Building Blocks, Applications, Sovereign) to represent the extended digital landscape. Future iterations may align both to the simpler 3-layer model for consistency.

## The Three-Layer Pyramid

The StackAtlas identity is built on a simplified 3-layer pyramid model:

```
        [Sovereign] (White)
          1 segment
              ↓
     [Applications] (Orange)
        2 × segments
              ↓
    [Building Blocks] (Green)
      3 × segments
```

### Layer Colors

| Layer               | Color  | Hex                 | Gradient                                    | Purpose                         |
| ------------------- | ------ | ------------------- | ------------------------------------------- | ------------------------------- |
| **Sovereign**       | White  | `#f5f5f5`–`#ffffff` | `linear-gradient(135deg, #f5f5f5, #ffffff)` | Digital sovereignty & standards |
| **Applications**    | Orange | `#f39c12`–`#f5b041` | `linear-gradient(135deg, #f39c12, #f5b041)` | User-facing applications        |
| **Building Blocks** | Green  | `#00883d`–`#00a34a` | `linear-gradient(135deg, #00883d, #00a34a)` | Infrastructure & components     |

**Background & Context:**

- **Primary Blue** (`#003d82`): Main brand color, used as background
- **Secondary Blue** (`#002d62`): Darker accent for borders & depth

## Favicon Design

**File:** `public/favicon.svg`

The favicon displays the three-layer pyramid in compact form, sized for browser tabs and app icons.

### Structure

```xml
<!-- 1 segment (Sovereign – White), centered -->
<rect x="78" y="50" width="100" height="50" ... fill="url(#favicon-sovereign)" />

<!-- 2 segments (Applications – Orange), medium width -->
<rect x="48" y="110" width="75" height="50" ... fill="url(#favicon-apps)" />
<rect x="133" y="110" width="75" height="50" ... fill="url(#favicon-apps)" />

<!-- 3 segments (Building Blocks – Green), full width -->
<rect x="28" y="170" width="60" height="50" ... fill="url(#favicon-blocks)" />
<rect x="98" y="170" width="60" height="50" ... fill="url(#favicon-blocks)" />
<rect x="168" y="170" width="60" height="50" ... fill="url(#favicon-blocks)" />
```

### Why This Design?

- ✅ **Immediately distinctive** – The pyramid shape is unique and recognizable
- ✅ **Accessible colors** – Green, orange, and white are distinguishable and colorblind-friendly
- ✅ **Scalable** – Works at any size from 16×16px to 512×512px
- ✅ **Not flag-like** – Different from national flags (previous iteration was too close to Russian flag)
- ✅ **Consistent** – Mirrors the splash animation and design system

## Splash Animation

**File:** `index.html` (embedded `<style>` tag)

The splash animation appears on app load and builds the three-layer pyramid in sequence.

### Timeline

The splash animation currently implements a **5-layer sequence** (note: this differs from the simplified 3-layer favicon branding and represents an extended digital landscape model):

```
Layer 1 (Infrastructure) [Red – 3 segments]:         0.0s start
Label "Infrastructure" fades in:                     0.0s–1.4s
           ↓
Layer 2 (Platform) [Blue – 5 segments]:              1.2s start
Label "Platform" fades in:                           1.2s–2.6s
           ↓
Layer 3 (Building Blocks) [Green – 7 segments]:      2.4s start
Label "Building Blocks" fades in:                    2.4s–3.8s
           ↓
Layer 4 (Applications) [Orange – 9 segments]:        3.4s start
Label "Applications" fades in:                       3.4s–4.8s
           ↓
Sovereign Standards [White – 2 segments]:            4.8s start
Label "Sovereign Standards" fades in:                4.8s–6.2s
           ↓
Title "StackAtlas" appears & animation exits:       6.5s start
```

**Note:** Future branding simplification may align the splash animation with the 3-layer pyramid model used in the favicon. Currently, the splash represents a more detailed digital landscape breakdown.

### CSS Custom Properties

Located in `.splash` class root styles in `index.html` `<style>` tag:

```css
/* Timing – layer stagger & durations */
--splash-layer-1-delay: 0s; /* Infrastructure */
--splash-layer-2-delay: 1.2s; /* Platform */
--splash-layer-3-delay: 2.4s; /* Building Blocks */
--splash-layer-4-delay: 3.4s; /* Applications */
--splash-sovereign-delay: 4.8s; /* Sovereign Standards */
--splash-seg-duration: 0.7s; /* Individual segment rise time */
--splash-sov-duration: 1.5s; /* Sovereign segment drop time */
--splash-label-duration: 1.4s; /* Label fade in/out duration */
--splash-title-delay: 6.5s; /* Final title appearance */
--splash-exit-duration: 0.6s; /* Fade out when app loads */

/* Colors – layer gradients */
--splash-color-infra: linear-gradient(135deg, #c5192d, #d4303f); /* Infrastructure (Red) */
--splash-color-platform: linear-gradient(135deg, #1a56a0, #2068bf); /* Platform (Blue) */
--splash-color-blocks: linear-gradient(135deg, #00883d, #00a34a); /* Building Blocks (Green) */
--splash-color-apps: linear-gradient(135deg, #f39c12, #f5b041); /* Applications (Orange) */
--splash-color-sovereign: linear-gradient(135deg, #f5f5f5, #ffffff); /* Sovereign Standards (White) */
```

### Customization

To adjust:

- **Speed**: Change `--splash-layer-*-delay` values (in seconds)
- **Colors**: Update `--splash-color-*` gradients
- **Duration**: Modify `--splash-seg-duration` or `--splash-title-delay`

## Implementation References

### In `index.html`

1. **Favicon link** (in `<head>`):

   ```html
   <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
   ```

2. **Splash styles** (in embedded `<style>` tag):
   - `.splash` CSS class with design token definitions (`--splash-color-*`, `--splash-layer-*-delay` variables)
   - Keyframe animations: `splashSegRise`, `splashLabelPulse`, `splashSovDrop`, `splashLabelFade`
   - 5 layer-specific selector blocks: `.splash__layer--1` through `.splash__layer--4` plus `.splash__sovereign`
   - Each layer defines segment counts and animation delays

3. **Splash HTML** (in body):
   - `.splash__pyramid`: Container for all animation layers
   - `.splash__labels`: Area where layer labels fade in/out sequentially
   - `.splash__fixed-label`: Individual label elements (5 total: Infrastructure, Platform, Building Blocks, Applications, Sovereign Standards)
   - `.splash__layer--N`: Containers for segment rows (Layers 1–4)
   - `.splash__sovereign`: Special container for Sovereign Standards segments with custom animation

### In `public/favicon.svg`

- Gradient definitions: `#favicon-sovereign`, `#favicon-apps`, `#favicon-blocks`
- Segment rects with positioning and sizing
- Background rect with primary blue (`#003d82`)

## Brand Guidelines

### Do's ✅

- Use the three-layer structure for any StackAtlas branding
- Maintain the color palette (green, orange, white, blue)
- Apply consistent spacing and proportions
- Use gradients to add depth (135° diagonal preferred)
- Scale the pyramid for different applications

### Don'ts ❌

- **Branding simplification goal:** The favicon uses a 3-layer model (Building Blocks, Applications, Sovereign), while the splash animation currently uses 5 layers (Infrastructure, Platform, Building Blocks, Applications, Sovereign). When simplifying, avoid removing the core digital sovereignty narrative.
- Don't invert the layer order (Sovereign must remain at the top/end)
- Don't use flag-like horizontal arrangements (vertical/stacked pyramid is distinctive)
- Don't remove the background blue gradient (`--splash-bg`)
- Don't apply drop shadows or 3D effects beyond the existing `box-shadow` (keep flat design aesthetic)

## Related Files

- **Favicon:** `public/favicon.svg`
- **Splash Animation:** `index.html` (embedded)
- **UI Theme:** `src/preact.main.tsx` (uses `KERN_V2` from `@public-ui/theme-kern`)
- **Global Styles:** `src/style.scss`

## Future Iterations

To align branding further:

1. Apply three-layer styling to the main navigation or hero section
2. Create animated logo version for loading states
3. Generate social media share images using the pyramid
4. Document color accessibility ratios for WCAG compliance
5. Create brand guidelines document for external contributors
