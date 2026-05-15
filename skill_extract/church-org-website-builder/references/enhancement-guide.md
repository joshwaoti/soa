# Enhancement & Implementation Guide Reference — Church & Organization Website Builder

## Guide HTML Document Structure

The Enhancement Guide is a code-heavy, syntax-highlighted HTML document styled in the org's brand palette. It is the LLM-ready implementation brief — every code snippet should be copy-paste usable.

### Cover Page
Same structure as PRD cover but with:
- Sub-heading: "Enhancement & Implementation Guide" instead of "PRD"
- Tag: "LLM IMPLEMENTATION BRIEF · V1.0"
- Description: "Feed this document directly into Claude Code, Cursor, or Windsurf. Every link, image, video ID, and component spec is verified and ready to implement."

### Section Structure
Same alternating section backgrounds as PRD. Nav links to all 9 sections.

### Code Block Style
```css
.code-block {
  background: [darker than PRIMARY_BG]; /* ~#050210 */
  border: 1px solid rgba(ACCENT_RGB, 0.15);
  border-radius: 3px;
  overflow: hidden;
}
.code-header {
  /* filename in ACCENT_LIGHT monospace + language label in CAPS ACCENT_DARK */
  border-bottom: 1px solid rgba(ACCENT_RGB, 0.15);
  padding: 10px 20px;
}
pre {
  font-family: 'Courier New', monospace;
  font-size: 0.78rem;
  line-height: 1.7;
  color: #c4c4c4;
  padding: 20px;
}
/* Syntax colors: */
.kw  { color: ACCENT_LIGHT; }    /* keywords, imports */
.fn  { color: ACCENT; }          /* function names */
.str { color: #8A9F7A; }         /* strings */
.cm  { color: #5a5370; }         /* comments */
.num { color: #B5A6D0; }         /* numbers */
.tp  { color: #9FC4D8; }         /* types */
```

---

## Section 00 — How to Use (For LLM Agents)

Always include two cells:

**For LLM Agents (Claude Code, Cursor, Windsurf):**
- Section 01 (Verified Content) → provide as context before content tasks
- Section 04 (Effects Spec) → provide before implementing animations
- Section 08 (Code Foundation) → provide before creating config files
- Each section is self-contained and can be passed independently

**Critical Rules List:**
- All YouTube thumbnails use verified video IDs from Section 01
- Never repeat Unsplash photo IDs across sections
- Facebook + Instagram embeds are REQUIRED on home page socials section
- Dark mode is the default — light is toggled
- M-Pesa Paybill required on Give page (for Kenyan orgs)
- All typography uses clamp() — never fixed rem for display
- Parallax disabled on all mobile viewports (≤767px)
- Custom cursor disabled on touch/coarse-pointer devices
- Form inputs: font-size: 16px always (prevents iOS zoom)

---

## Section 01 — Verified Content Data Tables

### Table 1: Organization Identity
One table with: Full Name | Abbreviation | Public Name | Location | Founded | Website | Shop

### Table 2: Sermon / Teaching Library
Columns: Sermon Title | Speaker | Date | Video ID | Full YouTube URL | Category | Featured

```
Template row:
| [Title]  | [Speaker]  | [Mon YYYY] | [VIDEO_ID] | https://youtube.com/watch?v=[VIDEO_ID] | [Category] | ✓/— |
```

All video IDs in <code> tags. All YouTube URLs as clickable links.

**Thumbnail pattern note below table:**
```
Primary:  https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg
Fallback: https://img.youtube.com/vi/[VIDEO_ID]/hqdefault.jpg
onError handler: maxresdefault → hqdefault → /images/sermon-fallback.jpg
```

### Table 3: YouTube Channel Data
- Channel URL (handle + canonical)
- Channel ID
- RSS feed URL
- Live stream detection API endpoint
- Subscribe button embed code

### Table 4: Social Media Links
Columns: Platform | Handle/Page | URL | Followers | Brand Color | Notes

### Table 5: Books / Publications
Columns: Title | Author | Purchase URL | Site Usage

### Table 6: Verified Copy Strings
Grid of copy cells: Hero Headlines (3 options) | Standard CTAs | Footer Note

---

## Section 02 — Image Assignments (Zero Repeats)

### Table Format
```
Page / Section | Usage | Unsplash Photo ID | Full URL | Treatment | Type
```

Types:
- HERO BG — full bleed atmospheric background
- SECTION — section background
- CSS ONLY — no image, CSS gradient/pattern

Treatment format: `opacity-N, blur-sm/md/lg, parallax speed 0.Nx` (or `no parallax`)

### Critical Note Block
```
⚠ REAL PHOTO REQUIRED sections (always call these out):
- About / Leadership Panel — requires official press photo of [Leader Names]
  Until provided: use org monogram as placeholder (brand colors, no other person's image)
  Never use stock photos of other people as pastoral substitutes.
```

### Image Assignment Coverage Requirements
Every section on every page must have a row. Sections using pure CSS must still appear with "CSS ONLY" notation. Zero gaps. Zero repeats.

---

## Section 03 — Individual Page Build Notes

For each page, a grid of cells covering:

1. **Build Order** (numbered list of pages in recommended build sequence)
2. **Home Page Section Notes** (bullet list of key implementation notes per section)
3. **Sermons Page Filter Logic** (client-side filter spec with category constants)
4. **Give Page M-Pesa Note** (if applicable — Paybill display spec)
5. **Connect Page Form Notes** (subject pill options, WhatsApp link if applicable)

---

## Section 04 — Premium Effects Code Snippets

### Loading Screen Component

```tsx
// app/components/LoadingScreen.tsx
// Sequence: Monogram → gold line → org name → fade out (1.6s total)
// Uses AnimatePresence in layout.tsx, triggered once per session

"use client";
import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, delay: 1.2 } }}
      style={{ position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 9998,
               display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      {/* Step 1: Monogram (0s → 0.4s) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
                 fontSize: '5rem', color: 'var(--accent-lt)', lineHeight: 1,
                 border: '1px solid rgba(VAR_ACCENT_RGB, 0.4)', padding: '12px 24px' }}
      >
        [ORG_MONOGRAM]   {/* e.g., RA, HC, CFMI */}
      </motion.div>

      {/* Step 2: Gold line draws outward (0.3s → 0.9s) */}
      <motion.div
        initial={{ clipPath: 'inset(0 50% 0 50%)' }}
        animate={{ clipPath: 'inset(0 0% 0 0%)' }}
        transition={{ duration: 0.6, ease: 'ease', delay: 0.3 }}
        style={{ width: '80px', height: '1px', margin: '16px 0 12px',
                 background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }}
      />

      {/* Step 3: Org name fades in (0.7s → 1.0s) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        style={{ fontFamily: 'var(--font-caps)', fontSize: '0.55rem', letterSpacing: '0.32em',
                 color: 'var(--accent)', textTransform: 'uppercase' }}
      >
        [ORG PUBLIC NAME]
      </motion.div>
    </motion.div>
  );
}

// In layout.tsx: wrap children in <AnimatePresence mode="wait">
// Track session with sessionStorage: if ('loaded' in sessionStorage) skip
// sessionStorage.setItem('loaded', '1') after first show
```

### Light Beams Component

```tsx
// components/LightBeam.tsx
// Atmospheric diagonal god-ray beams. Always gold/accent gradient.
// Home: 2 beams (subtle). Ministries/Events: 3 beams (theatrical).

const HOME_BEAMS = [
  { width: '2px', left: '68%', rotate: '35deg',  opacity: 0.08, delay: '0s',  period: '8s' },
  { width: '4px', left: '80%', rotate: '28deg',  opacity: 0.05, delay: '3s',  period: '10s' },
];

const MINISTRY_BEAMS = [
  { width: '3px', left: '25%', rotate: '15deg',  opacity: 0.12, delay: '0s',  period: '7s' },
  { width: '2px', left: '50%', rotate: '0deg',   opacity: 0.10, delay: '2s',  period: '9s' },
  { width: '3px', left: '75%', rotate: '-12deg', opacity: 0.12, delay: '4s',  period: '8s' },
];

// Each beam CSS:
// position: absolute; top: -10%; height: 140%;
// background: linear-gradient(180deg, rgba(ACCENT, 0.15) 0%, rgba(ACCENT, 0.08) 40%, transparent 100%)
// transform-origin: top center; pointer-events: none;
// animation: beamSway [period] ease-in-out infinite [delay]

// Mobile: opacity × 0.5. Beams still render on mobile (just softer).

// @keyframes beamSway:
// 0%,100% { transform: rotate(var(--angle)) }
// 50% { transform: rotate(calc(var(--angle) + 3deg)); opacity: 0.7 }
```

### Particles Configuration

```tsx
// components/Particles.tsx
// Install: npm install @tsparticles/react @tsparticles/slim
// Use ONLY on: Home Hero, Home Socials section, Connect Constellation
// Do NOT use on every page — performance cost

const particlesConfig = {
  background: { color: { value: 'transparent' } },
  particles: {
    number:  { value: 35, density: { enable: true, area: 800 } },
    color:   { value: 'var(--accent-color)' },   // Use actual hex: e.g. '#C9920A'
    opacity: { value: { min: 0.08, max: 0.35 }, animation: { enable: true, speed: 0.5 } },
    size:    { value: { min: 1, max: 2.2 } },
    move:    { enable: true, speed: 0.4, direction: 'top', random: true, outModes: { default: 'out' } },
    links:   { enable: false },
  },
  interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
  detectRetina: true,
};

// Mobile adaptation:
const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
const saveData  = typeof navigator !== 'undefined' && (navigator as any).connection?.saveData;
const count = saveData ? 0 : isMobile ? 15 : 35;
// Override: particlesConfig.particles.number.value = count;
```

### ScrollReveal Component

```tsx
// components/ScrollReveal.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props { children: React.ReactNode; delay?: number; y?: number; }

export function ScrollReveal({ children, delay = 0, y = 32 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// STAGGER DELAY PATTERNS:
// Section headings:    delay={0}
// First paragraph:     delay={0.1}
// Content cards:       delay={index * 0.08}
// Timeline nodes:      delay={index * 0.15}
// Stats items:         delay={index * 0.10}
// Ministry tiles:      delay={index * 0.06}
// Social nodes:        delay={index * 0.10}
// Mobile: y from 32 → 16. Duration unchanged.
```

### Custom Cursor Component

```tsx
// components/CustomCursor.tsx
// Desktop only — skip on touch/coarse-pointer devices

useEffect(() => {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.body.classList.add('has-custom-cursor');
}, []);

// Outer ring: 20×20px circle, 1px solid var(--accent) border, border-radius 50%
// Tracks mouse via useMotionValue + useSpring: stiffness: 200, damping: 20
// Hover state: scale to 40×40, background rgba(ACCENT, 0.12)
// Triggers hover on: a, button, .content-card, .ministry-tile, nav a
// Social link hover: ring border-color → platform color (e.g. #E1306C for Instagram)
// Inner dot: 4×4px, bg: var(--accent), follows mouse with NO lag (instant position)
// CSS: body.has-custom-cursor, body.has-custom-cursor * { cursor: none !important; }
```

### Stats Counter Component

```tsx
// components/StatsCounter.tsx
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Counter({ target, label, suffix = '' }: { target: number; label: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) animate(count, target, { duration: 1.5, ease: 'easeOut' });
  }, [isInView]);

  return (
    <div ref={ref} className="text-center">
      <motion.span className="font-display text-4xl text-accent-lt">{rounded}</motion.span>
      <span className="font-display text-accent-lt">{suffix}</span>
      <p className="font-caps text-[0.5rem] tracking-[0.15em] text-muted uppercase mt-1">{label}</p>
    </div>
  );
}

// STATS DATA — fill from research:
const ORG_STATS = [
  { target: [N],    label: 'YEARS OF MINISTRY', suffix: '+' },
  { target: [N],    label: 'MINISTRY ARMS' },
  { target: [N],    label: 'WEEKLY SERVICES' },
  { target: [N.N],  label: '[RADIO FREQ] · [DAY]' },  // e.g. 90.7 · TUESDAYS
];
```

### Theme Toggle

```tsx
// Install: npm install next-themes

// In app/layout.tsx:
import { ThemeProvider } from 'next-themes';
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Toggle button component:
// Import { useTheme } from 'next-themes'
// const { theme, setTheme } = useTheme()
// onClick: setTheme(theme === 'dark' ? 'light' : 'dark')
// Icon: Sun (light mode active) / Moon (dark mode active)
// Animate: rotate 180° with AnimatePresence on toggle

// CSS: transitions on all themed properties
// body { transition: background-color 0.4s ease, color 0.4s ease; }
```

### Page Transitions

```tsx
// In app/layout.tsx — wrap {children} with AnimatePresence
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## Section 05 — Social Embeds Code

### Facebook Page Plugin

```tsx
// components/FacebookEmbed.tsx
// Official Meta Page Plugin — shows timeline + events tabs
// Page URL: [FROM RESEARCH — e.g., https://www.facebook.com/royalassemblycfmi/]

"use client";
import Script from 'next/script';

export function FacebookEmbed({ pageUrl }: { pageUrl: string }) {
  return (
    <>
      <Script
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <div id="fb-root" />
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline,events"
        data-width=""
        data-height="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
    </>
  );
}

// Load trigger: IntersectionObserver — only init SDK when section scrolls into view
// Dark mode: wrap embed in dark-bg container. data-colorscheme matches current theme.
// Fallback: "Follow on Facebook →" CTA button when embed is blocked by ad blocker
```

### Instagram Feed Embed

```tsx
// components/InstagramEmbed.tsx
// Account: @[handle] — https://www.instagram.com/[handle]/
// Tool: Curator.io (free tier: 25 posts) OR Elfsight Instagram Feed widget

// CURATOR.IO SETUP (Free — recommended):
// 1. curator.io → Create Feed → Source: Instagram → Handle: [handle]
// 2. Style: Grid, 3 columns, 6 posts, hover overlay with engagement counts
// 3. Publish widget → Copy embed script
// 4. Add widget ID to component below

"use client";
import Script from 'next/script';

export function InstagramEmbed({ curatorId }: { curatorId: string }) {
  return (
    <>
      <div id={`curator-feed-${curatorId}`}>
        <a href="https://curator.io" target="_blank" className="crt-logo crt-tag">
          Powered by Curator.io
        </a>
      </div>
      <Script
        src={`//cdn.curator.io/published/${curatorId}.js`}
        strategy="lazyOnload"
      />
    </>
  );
}

// FALLBACK if widget unavailable or blocked:
// Show 6-cell grid with accent border boxes + "@[handle]" text
// + "Follow for Daily Word Inspiration → instagram.com/[handle]/" CTA button

// ALSO LINK leader's personal Instagram as secondary CTA:
// "Also follow [Leader Name] @[handle] for daily devotion → instagram.com/[handle]/"
// Only if leader has ≥10K followers
```

### YouTube Subscribe Button

```tsx
// Embed official YouTube Subscribe button
// Channel ID: [FROM RESEARCH — e.g., UCqMDxNIQnzbsUp7OTYCU0HQ]

<Script src="https://apis.google.com/js/platform.js" strategy="lazyOnload" />
<div
  className="g-ytsubscribe"
  data-channelid="[CHANNEL_ID]"
  data-layout="default"
  data-count="default"
/>
// Place on: /sermons page (between grid sections) + /connect page
```

### Social Constellation Component

```tsx
// components/SocialConstellation.tsx
// Desktop: floating platform nodes with canvas connecting lines
// Mobile: vertical card stack with platform-color left borders

// PLATFORM NODE DATA — fill from research:
const PLATFORMS = [
  // {id, name, handle, followers, color, url, x (% from left), y (% from top)}
  // Node positions form a balanced visual arrangement:
  // 5 nodes: place in pentagon/star formation
  // 4 nodes: corners of a diamond
  // 3 nodes: triangle
  // 6+ nodes: two rows

  // Standard positions for 5 platforms:
  { id: 'instagram', x: '22%', y: '28%' },
  { id: 'youtube',   x: '58%', y: '16%' },
  { id: 'facebook',  x: '80%', y: '30%' },
  { id: 'twitter',   x: '30%', y: '68%' },
  { id: 'leader-ig', x: '68%', y: '68%' },
];

// Each NODE element:
// 80×80px circle (desktop), 48×48px (mobile card)
// background: rgba(platformColor, 0.12)
// border: 1px solid rgba(platformColor, 0.4)
// box-shadow: 0 0 20px rgba(platformColor, 0.25)
// hover → box-shadow: 0 0 40px rgba(platformColor, 0.55), scale(1.1)
// SVG platform icon: 32px (desktop), 24px (mobile)

// Canvas CONNECTING LINES:
// strokeStyle: rgba(ACCENT_RGB, 0.12) → 0.35 on hover of adjacent node
// lineWidth: 0.5
// Connect: pentagon formation (each node → 2 nearest neighbors)

// Entry ANIMATION SEQUENCE:
// 0.0s: heading text fades in
// 0.5s: canvas lines draw (requestAnimationFrame, progress 0→1 over 400ms)
// 0.8s: nodes scale in (scale 0→1, stagger 0.1s each)

// MOBILE CARD STACK (<768px):
// flex-col, gap-3, full width
// Each card: display flex, align-center, min-height 56px
//   border-left: 3px solid platformColor
//   left icon: 48px circle, bg platformColor/15%, icon 24px platformColor
//   center: platform name (CAPS, platformColor) + handle (italic body, muted)
//   right: follower count (Display italic, accent-lt) + ChevronRight icon
//   hover/active: bg platformColor/5%, translateX(4px)
```

---

## Section 06 — Nav & Footer Spec

### Navigation

**Desktop:**
```
Position: sticky, top: 0, z-index: 100
Initial state: bg transparent, no blur
On scrollY > 60px: bg rgba(PRIMARY_BG_RGB, 0.92), backdrop-blur(12px)
Border-bottom: 1px solid rgba(ACCENT_RGB, 0.15) — always visible
Transition: 0.4s ease on bg and backdrop-filter

Left:   Logotype (CAPS font + Display italic) — links to /
Center: Nav links — CAPS font, 0.52rem, tracking 0.18em, TEXT_MUTED
        Active route: color → TEXT_PRIMARY + 1px ACCENT underline
Right:  Theme toggle (sun/moon, 20px, TEXT_MUTED, rotate on switch)
        + Primary CTA ("JOIN LIVE SERVICE" in ACCENT border pill, → ACCENT fill on hover)
```

**Mobile:**
```
Left:  Logo (abbreviated — org abbreviation or first word only)
Right: Theme toggle + Hamburger (3 lines, 28px, ACCENT color)

Hamburger overlay:
  bg: rgba(PRIMARY_BG_RGB, 0.98), backdrop-blur(20px)
  Links: Display italic, 2.5rem, TEXT_PRIMARY, centered, stagger-animated (y: 24→0, 0.06s per link)
  Below links: social icons row (platform circle buttons, 40px, platform colors)
  Close: X button top-right + ESC key + route change auto-close
  Animation out: same stagger reversed
```

### Footer

```
Layout: 4-column grid (desktop) — gap 48px, padding 80px
        1-column accordion (mobile) — each col header taps to expand/collapse (Framer Motion height)

Column 1 (Brand):
  Logotype (Display italic, small) + tagline + social icon circles (5-6 platforms)

Column 2 (Navigate):
  Heading: CAPS, ACCENT. Links: Body font, 0.88rem, TEXT_MUTED → ACCENT on hover.
  All pages listed.

Column 3 (Ministries):
  Heading: CAPS, ACCENT. All ministry arms listed (Body font, 0.85rem, TEXT_MUTED)

Column 4 (Receive):
  Heading: CAPS, ACCENT.
  Email input: accent bottom-border only
  Submit: "JOIN THE ASSEMBLY →" in CAPS, primary button
  Privacy note: 0.7rem, TEXT_MUTED

Bottom bar:
  1px gradient rule (transparent → ACCENT → transparent) above
  Left: copyright (Body, 0.72rem, TEXT_MUTED)
  Right: website URL (CAPS, 0.48rem, ACCENT_DARK)
```

---

## Section 07 — Mobile-First Rules & QA Checklist

### Core Mobile Rules

```
Typography:
  All display text: clamp() — never fixed rem
  Body text: 1rem (16px) minimum always
  Form inputs: font-size: 16px !important (prevents iOS zoom)
  Caps labels: 0.52rem fixed — acceptable at this size

Layout Collapses:
  Hero: 2-col → 1-col (image/monogram moves below text)
  Stats: 4-col → 2×2 grid
  Content cards: 4-col (desktop) → 2-col (tablet) → horizontal scroll carousel (mobile, 1.2 visible)
  Ministry tiles: 3-col → 1-col (full width stacked)
  About split: side-by-side → stacked (image above text)
  Footer: 4-col → accordion (Framer Motion height animation)
  Social embeds: side-by-side → stacked (FB above IG)
  Constellation: floating nodes → card stack with left borders

Disabled on Mobile:
  Parallax (all sections — static images only)
  Custom cursor (touch/coarse-pointer detection)
  Particle count: max 15 (or 0 on save-data mode)
  Constellation: floating nodes replaced by card stack

Tap Targets:
  All buttons: min-height 48px
  All nav links: min-height 48px
  All social icons: min-width/height 48px
  Content cards: full card is tappable
  Filter pills: min-height 44px

Breakpoints:
  Base (mobile-first): 375px
  sm: 640px
  lg: 1024px
  xl: 1440px
  Max content width: 1280px
```

### QA Checklist — Test at 375px, 390px, 414px, 768px

**Layout & Content:**
- [ ] No horizontal scroll at any viewport width
- [ ] All text readable — no overflow, no text < 14px
- [ ] Images fill containers correctly (aspect-ratio preserved)
- [ ] Grid columns correct at each breakpoint
- [ ] Content filter bar scrolls horizontally (no wrap)
- [ ] Books carousel horizontal scroll with item peek
- [ ] YouTube embeds 16:9 responsive (aspect-video class)
- [ ] Facebook and Instagram embeds don't overflow container

**Interactions & Performance:**
- [ ] All buttons and tap targets ≥ 48px height
- [ ] Hamburger menu opens full-screen correctly
- [ ] All nav links work from mobile menu
- [ ] Form inputs don't trigger iOS zoom (font-size: 16px)
- [ ] Lighthouse mobile performance ≥ 85
- [ ] Lighthouse accessibility ≥ 90
- [ ] Fonts loaded via next/font (no FOUT)
- [ ] Images lazy-loaded below fold (loading="lazy" + next/image)
- [ ] Particles ≤ 15 on mobile viewport
- [ ] Parallax completely disabled (no transform on scroll)
- [ ] Custom cursor NOT rendered on mobile
- [ ] prefers-reduced-motion respected (all animations instant)

---

## Section 08 — Foundation Code Files

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: ['attribute', 'data-theme'],
  theme: {
    extend: {
      colors: {
        // === DERIVED FROM ORG BRANDING — Fill from Brand Identity phase ===
        black:         '[PRIMARY_BG]',       // [Evocative Name] — PRIMARY_BG
        deep:          '[SECONDARY_BG]',     // [Evocative Name] — SECONDARY_BG
        navy:          '[TERTIARY_BG]',      // [Evocative Name] — TERTIARY_BG
        accent:        '[ACCENT]',           // [Evocative Name] — ACCENT
        'accent-lt':   '[ACCENT_LIGHT]',     // [Evocative Name] — ACCENT_LIGHT
        'accent-dk':   '[ACCENT_DARK]',      // [Evocative Name] — ACCENT_DARK
        cream:         '[TEXT_PRIMARY]',     // [Evocative Name] — TEXT_PRIMARY
        muted:         '[TEXT_MUTED]',       // [Evocative Name] — TEXT_MUTED
        // Light theme:
        linen:         '[PRIMARY_BG_LT]',
        'soft-panel':  '[SECONDARY_BG_LT]',
        'light-card':  '[TERTIARY_BG_LT]',
        'deep-text':   '[TEXT_PRIMARY_LT]',
        'mid-text':    '[TEXT_MUTED_LT]',
      },
      fontFamily: {
        display: ['[DISPLAY_FONT]', 'Georgia', 'serif'],
        caps:    ['[CAPS_FONT]', 'serif'],
        body:    ['[BODY_FONT]', 'Georgia', 'serif'],
      },
      animation: {
        'beam-sway':  'beamSway 8s ease-in-out infinite',
        'pulse-accent': 'pulseAccent 2s ease-in-out infinite',
        'draw-line':  'drawLine 0.6s ease forwards',
        'float-up':   'floatUp 6s ease-in-out infinite',
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'blink':      'blink 1s ease-in-out infinite',
      },
      keyframes: {
        beamSway:    { '0%,100%': { transform: 'rotate(35deg)' }, '50%': { transform: 'rotate(38deg)', opacity: '0.7' } },
        pulseAccent: { '0%,100%': { boxShadow: '0 0 0 0 transparent' }, '50%': { boxShadow: '0 0 20px 4px rgba(ACCENT_RGB, 0.3)' } },
        drawLine:    { from: { clipPath: 'inset(0 100% 0 0)' }, to: { clipPath: 'inset(0 0% 0 0%)' } },
        floatUp:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        fadeUp:      { from: { opacity: '0', transform: 'translateY(32px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink:       { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
    },
  },
  plugins: [],
};
export default config;
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* === DARK THEME (default) === */
  :root, [data-theme="dark"] {
    --bg:        [PRIMARY_BG];
    --panel:     [SECONDARY_BG];
    --card:      [TERTIARY_BG];
    --accent:    [ACCENT];
    --accent-lt: [ACCENT_LIGHT];
    --accent-dk: [ACCENT_DARK];
    --text:      [TEXT_PRIMARY];
    --muted:     [TEXT_MUTED];
  }
  /* === LIGHT THEME === */
  [data-theme="light"] {
    --bg:        [PRIMARY_BG_LT];
    --panel:     [SECONDARY_BG_LT];
    --card:      [TERTIARY_BG_LT];
    --accent:    [ACCENT];      /* Same in both themes */
    --accent-lt: [ACCENT_LIGHT];
    --accent-dk: [ACCENT_DARK];
    --text:      [TEXT_PRIMARY_LT];
    --muted:     [TEXT_MUTED_LT];
  }

  html { scroll-behavior: smooth; }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: '[BODY_FONT]', Georgia, serif;
    overflow-x: hidden;
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  /* Prevent iOS zoom on inputs */
  input, textarea, select { font-size: 16px !important; }

  /* Thin accent-color scrollbar */
  ::-webkit-scrollbar       { width: 3px; }
  ::-webkit-scrollbar-track  { background: var(--bg); }
  ::-webkit-scrollbar-thumb  { background: var(--accent-dk); border-radius: 2px; }

  /* Custom cursor */
  body.has-custom-cursor,
  body.has-custom-cursor * { cursor: none !important; }

  /* Film grain overlay */
  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 9998;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer utilities {
  .font-display   { font-family: '[DISPLAY_FONT]', Georgia, serif; }
  .font-caps      { font-family: '[CAPS_FONT]', serif; }
  .font-body      { font-family: '[BODY_FONT]', Georgia, serif; }
  .text-balance   { text-wrap: balance; }
  .section-px     { @apply px-5 md:px-12 lg:px-20; }
  .section-py     { @apply py-16 md:py-24 lg:py-32; }
  .accent-rule    { width: 80px; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
  .text-gradient  { background: linear-gradient(135deg, var(--accent), var(--accent-lt)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
}
```

### lib/content.ts — Content Data Structure

```typescript
// lib/content.ts
// All verified organization content — fill from research phase

export const ORG = {
  name: '[Official Name]',
  publicName: '[Public Name]',
  abbreviation: '[ABBREVIATION]',
  location: '[City, Country]',
  founded: '[Year]',
  website: '[https://...]',
  vision: '[Exact official vision statement]',
  tagline: '[Exact tagline]',
  description: '[Exact Facebook/website description]',
};

export const LEADERS = [
  {
    name: '[Full Name]',
    title: '[Pastor / Founder / etc.]',
    role: '[Role description]',
    bio: '[2-3 sentence bio from official source]',
    instagram: { handle: '@[handle]', url: 'https://instagram.com/[handle]/', followers: '[N]K+' },
    books: [
      { title: '[Book Title]', url: 'https://[shop-url]/product/[slug]/' },
    ],
  },
];

export const MINISTRY_ARMS = [
  { id: 'arm-1', numeral: 'I',   name: '[Name]', description: '[...]', type: '[Type]', cta: '[CTA Text]', ctaUrl: '[URL or null]' },
  { id: 'arm-2', numeral: 'II',  name: '[Name]', description: '[...]', type: '[Type]', cta: '[CTA Text]', ctaUrl: '[URL or null]' },
];

export const SERMONS = [
  {
    id: 1,
    title: '[Exact Title]',
    speaker: '[Full Name]',
    date: '[Mon YYYY]',
    videoId: '[VIDEO_ID]',
    youtubeUrl: 'https://www.youtube.com/watch?v=[VIDEO_ID]',
    thumbnailMax: 'https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg',
    thumbnailHq:  'https://img.youtube.com/vi/[VIDEO_ID]/hqdefault.jpg',
    category: 'SUNDAY_SERVICE' as const,
    featured: true,
  },
];

export const FEATURED_SERMONS = SERMONS.filter(s => s.featured);

export const FILTER_CATEGORIES = [
  { id: 'ALL',             label: 'All' },
  { id: 'SUNDAY_SERVICE',  label: 'Sunday Service' },
  { id: 'CONFERENCE',      label: 'Conferences' },
  { id: 'PRAYER_FASTING',  label: 'Prayer & Fasting' },
  // Add/remove based on this org's content library
];

export const SOCIALS = {
  facebook:   { url: 'https://www.facebook.com/[page]/', color: '#1877F2', followers: '[N]K+', embed: true },
  youtube:    { url: 'https://www.youtube.com/@[handle]', color: '#FF0000', channelId: '[CHANNEL_ID]' },
  instagram:  { url: 'https://www.instagram.com/[handle]/', color: '#E1306C', handle: '@[handle]', followers: '[N]K+', embed: true },
  twitter:    { url: 'https://twitter.com/[handle]', color: '#1DA1F2' },
};

export const BOOKS = [
  { title: '[Title]', author: '[Name]', url: 'https://[shop]/product/[slug]/' },
];

export const SERVICES = [
  { day: 'Sunday', time: '[N]:00 AM EAT', label: 'Sunday Service', online: true },
  { day: 'Thursday', time: '[N]:00 PM EAT', label: 'Thursday Service', online: true },
  { type: 'radio', station: '[Station Name]', frequency: '[N.N] FM', day: '[Day]', time: '[N–N PM EAT]' },
];
```

---

## Section 09 — 5-Phase Implementation Checklist

### Phase 1 — Foundation (Days 1–3)
- [ ] Create Next.js 15 project with App Router + TypeScript
- [ ] Install: tailwindcss, framer-motion, next-themes, @tsparticles/react, @tsparticles/slim
- [ ] Configure tailwind.config.ts with all brand tokens
- [ ] Write globals.css with dark/light CSS custom properties + film grain
- [ ] Set up next/font/google — [Font1], [Font2], [Font3]
- [ ] Configure next.config.js with Unsplash + YouTube remote patterns
- [ ] Create lib/content.ts with all verified org data
- [ ] Build Navigation — desktop sticky + mobile hamburger overlay
- [ ] Implement ThemeProvider (next-themes) — dark default
- [ ] Build Footer — 4-column desktop, accordion mobile
- [ ] Build LoadingScreen — monogram sequence (AnimatePresence)
- [ ] Implement page transitions (AnimatePresence + usePathname in layout.tsx)
- [ ] Add film grain overlay (body::before)

### Phase 2 — Components (Days 4–7)
- [ ] Build ContentCard — default/hover/featured + YouTube thumbnail + onError fallback chain
- [ ] Build ScrollReveal — IntersectionObserver + stagger delay prop
- [ ] Build LightBeam — home variant (2 beams) + ministry/events variant (3 beams)
- [ ] Build Particles — tsParticles with mobile/save-data count adaptation
- [ ] Build CustomCursor — gold ring, hover states, touch detection, disabled on mobile
- [ ] Build SocialConstellation — canvas nodes (desktop) + card stack (mobile)
- [ ] Build StatsCounter — Framer Motion count animation, useInView
- [ ] Build Timeline — dot + line + year + fill animation on scroll-enter
- [ ] Build PullQuote — accent border-left + giant quote mark + attribution
- [ ] Build Button variants — Primary, Secondary, Ghost
- [ ] Build Tag/Badge variants — default, muted, active, live, conference
- [ ] Build FormInput — floating label, accent bottom-border focus, 16px

### Phase 3 — Pages (Days 8–18)
- [ ] Home (/): All 9 sections. Hero → Live Strip → Stats → Sermons → Ministries → Testimonials → Socials → Books → Newsletter
- [ ] Home: Set up Facebook Page Plugin embed (lazyOnload). Test in incognito.
- [ ] Home: Set up Instagram embed (create Curator.io account + widget first)
- [ ] Home: Books horizontal scroll with verified shop links
- [ ] Home: Newsletter form (connect to Mailchimp/ConvertKit)
- [ ] Sermons (/sermons): YouTube live detection → fallback. Filter bar + AnimatePresence grid
- [ ] Sermons: Map all verified video IDs to ContentCard components
- [ ] Sermons: YouTube Subscribe button embed
- [ ] About (/about): Split hero (⚠️ real pastor photo required). Story. Timeline. Beliefs.
- [ ] Ministries (/ministries): Dramatic header + 3-beam effect + ministry pillars grid
- [ ] Events (/events): Service schedule strip + upcoming events list
- [ ] Give (/give): Scripture header + M-Pesa Paybill (Kenyan orgs) + giving tiers
- [ ] Connect (/connect): Contact form + visit info + constellation + FB + IG embeds

### Phase 4 — Effects Pass (Days 19–23)
- [ ] Wrap all sections in ScrollReveal with correct stagger delays
- [ ] Apply parallax to hero backgrounds (useScroll). Verify disabled on mobile.
- [ ] Implement stats counter on scroll-enter (home + about)
- [ ] Timeline dot fill animation on scroll-enter (about)
- [ ] Constellation canvas line draw animation (connect)
- [ ] Light beam animations on home, ministries, events pages
- [ ] Custom cursor on all interactive elements
- [ ] Content card hover states — lift, border, play button reveal
- [ ] Theme toggle animation — icon rotation + property transitions
- [ ] Hero word reveal on load
- [ ] Gold/accent rule draw animations

### Phase 5 — Mobile QA & Launch (Days 24–28)
- [ ] Test all pages at 375px, 390px, 414px, 768px in Chrome DevTools
- [ ] Verify zero horizontal scroll at any breakpoint
- [ ] Verify all tap targets ≥ 48px
- [ ] Verify form inputs don't trigger iOS zoom
- [ ] Verify parallax disabled on mobile (no transform)
- [ ] Verify constellation → card stack on mobile
- [ ] Verify footer accordion on mobile
- [ ] Verify FB and IG embeds fit on mobile
- [ ] Test YouTube live detection (force true/false in dev)
- [ ] Test dark/light toggle — both themes look correct on all pages
- [ ] Lighthouse: ≥ 90 Performance, ≥ 90 Accessibility, ≥ 90 SEO
- [ ] Add OG meta tags (og:title, og:description, og:image, twitter:card) for all pages
- [ ] Deploy to Vercel. Connect domain. Enable analytics.
- [ ] Test live on actual iOS and Android device (not just DevTools)
