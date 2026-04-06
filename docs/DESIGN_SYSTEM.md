# Design System & Branding

## Overview

StackAtlas uses a unified visual design system built on three core layers that represent the digital sovereignty landscape. These layers are consistently applied across the favicon, splash animation, and UI components.

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

```
Layer 3 (Building Blocks) [Green – 7 segments]:     0.0s start
Label "Building Blocks" fades in:                    0.0s–1.4s
           ↓
Layer 4 (Applications) [Orange – 9 segments]:       1.2s start
Label "Applications" fades in:                       1.2s–2.6s
           ↓
Sovereign [White – 2 segments]:                     2.4s start
Label "Sovereign Standards" fades in:              2.4s–3.8s
           ↓
Title "StackAtlas" appears & animation exits:      3.8s start
```

### CSS Custom Properties

Located in `.splash` root styles in `index.html`:

```css
/* Timing – layer stagger & durations */
--splash-layer-3-delay: 0s; /* Building Blocks */
--splash-layer-4-delay: 1.2s; /* Applications */
--splash-sovereign-delay: 2.4s; /* Sovereign */
--splash-seg-duration: 0.7s; /* Individual segment rise time */
--splash-title-delay: 3.8s; /* Final title & exit */
--splash-exit-duration: 0.6s; /* Fade out on app loaded */

/* Colors */
--splash-color-blocks: linear-gradient(135deg, #00883d, #00a34a);
--splash-color-apps: linear-gradient(135deg, #f39c12, #f5b041);
--splash-color-sovereign: linear-gradient(135deg, #f5f5f5, #ffffff);
```

### Customization

To adjust:

- **Speed**: Change `--splash-layer-*-delay` values (in seconds)
- **Colors**: Update `--splash-color-*` gradients
- **Duration**: Modify `--splash-seg-duration` or `--splash-title-delay`

## Implementation References

### In `index.html`

1. **Favicon link** (line ~13):

   ```html
   <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
   ```

2. **Splash styles** (lines ~20–260):
   - `.splash` class with design token definitions
   - Keyframe animations: `splashSegRise`, `splashLabelPulse`, `splashSovDrop`, `splashLabelFade`
   - Layer-specific styling: `.splash__layer--3`, `.splash__layer--4`

3. **Splash HTML** (lines ~360–410):
   - `.splash__pyramid`: Container for 3-layer pyramid
   - `.splash__labels`: Label display area for layer names
   - `.splash__sovereign`: Special Sovereign Standard segment renderer

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

- Don't use only Infrastructure (red) or Platform (blue) layers
- Don't invert the layer order (Sovereign must be on top)
- Don't use flag-like horizontal arrangements
- Don't remove the background blue
- Don't apply drop shadows or 3D effects (keep flat design)

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
