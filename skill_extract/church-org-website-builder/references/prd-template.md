# PRD Template Reference — Church & Organization Website Builder

## PRD HTML Document Structure

The PRD is a styled, single-page HTML document. It must visually embody the organization's brand palette — the document itself is proof of the brand system. It is not a plain white document.

### Cover Page

```
- Subtle film grain overlay (body::before)
- Background: PRIMARY_BG with radial gradient glow (accent color, 5-6% opacity)
- Top-left: "[ORG ABBREVIATION] · PRD" in CAPS font
- Center content (vertically centered):
  - Small bordered tag: "WEBSITE PRODUCT REQUIREMENTS DOCUMENT"
  - Eyebrow: Organization's full/official name in CAPS
  - Display headline: Organization's public name (Display font, 3 lines:
    WORD1 in CAPS + italic word + smaller word)
  - 1px gradient gold rule
  - Sub-headline: 1-sentence description of what this site will be
  - Meta bar (borderline above, 5 items):
    VERSION · ORGANIZATION · LOCATION · STACK · STATUS
```

### Section Structure

Every section follows this pattern:
```
<section> tag
  .sec-num   — "01 — SECTION NAME" in CAPS, accent-dark color
  .sec-title — Heading in Display font + italic accent word
  hr rule    — 1px gradient rule, 60-80px wide
  .sec-intro — 1-paragraph intro in body font, muted color, max-width 660px
  [Section content]
</section>

Alternating section backgrounds:
  Odd sections:  PRIMARY_BG
  Even sections: SECONDARY_BG
```

### Required PRD Sections (In Order)

```
Section 00: Project Overview
Section 01: Organization Research Dossier
Section 02: Brand Identity System
Section 03: Site Architecture
Section 04: Screen Designs (wireframes)
Section 05: Component Library
Section 06: Motion & Animation Spec
Section 07: UX Principles
Section 08: Technical Specifications
```

---

## Section 01 — Research Dossier Content Requirements

Must contain ALL of the following, formatted in the brand palette:

**Church Identity Block (3-column grid of brand cells):**
- Official Name + Abbreviation
- Location + Reach
- Ministry Vision (exact quote)

**Leadership Profiles (2-column grid):**
- For each leader: Name, title, bio, personal social handles, follower counts
- Books: title + purchase URL for each book

**Ministry Arms (3-column or 2-column grid based on count):**
- Each arm as a styled card with roman numeral, name, description, CTA

**Verified Sermon Library:**
- Visual grid of sermon cards with colored placeholder thumbnails
- Each card: title, speaker, date, video ID (clear code formatting)

**Books / Publications:**
- Grid of book cells: title, author, shop URL

**Social Media Data:**
- Grid of platform cells: URL, followers, bio quote, embed readiness

---

## Section 02 — Brand Identity Content Requirements

**Aesthetic Direction Statement (full-width pull quote style):**
- Direction name + evocative description sentence
- Style: gold border-left, large Display italic text, attribution

**Color Swatches — Dark Theme (8 swatches, horizontal row):**
- Each swatch: color block (90px tall) + evocative name + hex value + role name
- Must render as actual CSS color blocks (not images)

**Color Swatches — Light Theme (6 swatches):**
- Same format

**Dark/Light Theme Toggle Spec:**
- Side-by-side preview showing same headline in both themes
- Implementation note: next-themes, data-theme attribute

**Typography Specimens (3 stacked blocks):**
- DISPLAY: Font name + weight range + sample headline in that font at large size + usage note
- CAPS: Font name + sample "CAPS TEXT WITH TRACKING" + usage note
- BODY: Font name + sample paragraph at reading size + usage note

**Logotype System (2-column grid):**
- Primary logotype: actual rendered HTML/CSS version of the mark
- Monogram: rendered HTML/CSS version
- Implementation note

**Brand Voice (5 cells):**
- 4 positive keywords (styled cards) + 1 anti-keyword (dimmed/crimson border)

---

## Section 03 — Site Architecture: Route Table

```html
<!-- TABLE COLUMNS: -->
Page Name | Route | Primary Action | Design Personality | Priority

<!-- CORE PAGES (always): -->
Home        | /           | Watch Live / Explore Content | [Personality] | CORE
About       | /about      | Connect with Story           | [Personality] | CORE
Content     | /sermons    | Watch / Discover             | [Personality] | CORE
Ministries  | /ministries | Join a Ministry              | [Personality] | CORE
Events      | /events     | RSVP / Attend                | [Personality] | CORE
Give        | /give       | Give / Partner               | [Personality] | CORE
Connect     | /connect    | Contact / Follow             | [Personality] | CORE

<!-- PHASE 2 PAGES (as applicable): -->
Bible Institute | /bible-institute | Register | [Personality] | PHASE 2
Store       | /store      | Purchase          | [Personality] | PHASE 2
```

Design personality must be unique per page — not generic.

---

## Section 04 — Screen Designs: Wireframe Conventions

### Wireframe Rules

1. All wireframes are built in HTML/CSS — not ASCII art, not image placeholders
2. Use the brand palette colors in all wireframe elements
3. Show actual content (real text from research) not Lorem ipsum
4. Show accurate layout proportions
5. Include both a visual wireframe mockup AND a section breakdown table

### Home Page — Always Full Wireframe + Section Table

The home wireframe must show all 9 sections rendered vertically in a single scrollable card:

**Section 1 — Hero:**
```
Layout: 2-column grid (text left 1.2fr, image/monogram right 0.8fr)
Left content:
  - Eyebrow: "[TAGLINE / LOCATION]" in CAPS font, accent color
  - H1: Display font, large italic. Real organization tagline.
  - Body: 2-line description from research
  - 2 CTAs: Primary (accent fill) + Secondary (accent border)
  - Scroll indicator bottom-left
Right content:
  - Org monogram in Display italic, centered, with accent border
  - Or placeholder for real pastoral photo
Overlay elements:
  - 2 diagonal light beams (accent color gradient, opacity 0.06-0.15)
  - Large watermark text (org name, opacity 0.02)
  - Scripture or tagline quote, bottom-right, faded accent, italic
Background: Full-bleed atmospheric image (opacity 0.10-0.15) + dark overlay
```

**Section 2 — Live Service Strip:**
```
Layout: Horizontal bar, flex, align-center, space-between
Content:
  - Animated red dot (8px, #FF4444) + "LIVE NOW" or "NEXT SERVICE"
  - Service title + time + timezone
  - "WATCH LIVE →" button (accent fill, right-aligned)
Background: TERTIARY_BG, accent-left border or subtle top rule
```

**Section 3 — Stats Bar:**
```
Layout: 4-column grid, equal widths
Each cell:
  - Number: Display font, 2.5rem, ACCENT_LIGHT, animated
  - Label: CAPS font, 0.48rem, tracking 0.15em, TEXT_MUTED
Background: SECONDARY_BG
Real stats: From research (years, arms, services, radio frequency/reach)
```

**Section 4 — Featured Content:**
```
Layout: 3-column card grid
Each card:
  - Thumbnail placeholder (TERTIARY_BG rectangle, accent opacity, play button circle)
  - Title: Display italic, TEXT_PRIMARY
  - Speaker + Date: CAPS font, TEXT_MUTED
  - Category tag: outlined accent
Below grid: "VIEW ALL →" secondary button, centered
Background: PRIMARY_BG
```

**Section 5 — Ministry Arms:**
```
Layout: 3-column tile grid (or 2-column if ≤4 arms)
Each tile:
  - Roman numeral: Display italic, large, ACCENT_LIGHT, opacity 0.5
  - Name: CAPS font, ACCENT
  - Description: Body font, TEXT_MUTED, 2-3 lines
  - CTA text: CAPS font, ACCENT, accent-border pill
Background: SECONDARY_BG
```

**Section 6 — Testimonials:**
```
Layout: Single full-width centered quote carousel
Content:
  - Giant quote marks (Display font, 6rem, ACCENT, opacity 0.06) absolute behind
  - Quote text: Display italic, 1.1-1.3rem, TEXT_PRIMARY
  - Attribution: CAPS font, 0.45rem, ACCENT, tracking 0.2em
  - Navigation dots at bottom
Auto-advance: 6 seconds, pause on hover
```

**Section 7 — Socials (REQUIRED EMBEDS):**
```
Layout: 2-column grid (Facebook left, Instagram right)
Each column:
  - Platform icon circle (platform color bg/border) + platform name label
  - Embed container with dashed border (platform color, 20% opacity) and embed label
  - "FOLLOW ON [PLATFORM] ↗" link below
Below grid: 4-5 social platform outline buttons in a flex row
Background: PRIMARY_BG or SECONDARY_BG
```

**Section 8 — Books / Resources (if applicable):**
```
Layout: Horizontal scroll row of book cards
Each card (160px wide):
  - Book cover placeholder rectangle (gradient, accent to secondary)
  - Title: Display italic, TEXT_PRIMARY
  - Author: CAPS, TEXT_MUTED
  - "BUY →" link: CAPS, ACCENT
Background: Pure CSS gradient (PRIMARY_BG → SECONDARY_BG) — no image
```

**Section 9 — Newsletter:**
```
Layout: Centered, max-width 600px
Content:
  - Heading: Display italic, "Receive the Word Directly" or custom equivalent
  - Sub: Body font, 1 sentence, TEXT_MUTED
  - Email input + submit button (inline flex)
  - Privacy note: 0.7rem, TEXT_MUTED
Background: PRIMARY_BG
```

### Other Pages — Section Breakdown Table + Mini Wireframe

For each non-home page, produce:
1. A mini HTML wireframe showing the page's key sections rendered at realistic proportions
2. A section breakdown table: Section Name | Content & Spec | Key Interaction | Mobile Adaptation

The mini wireframe for each page must:
- Show the unique header/hero for that page
- Show 2-3 key section layouts
- Use real brand palette and real content

---

## Section 05 — Component Library

### Component Card Structure

Each component is shown in a styled card:
```
Card: TERTIARY_BG background, 2px top border in ACCENT_DARK
Header: Component name in CAPS font, ACCENT color
Demo area: SECONDARY_BG padding, shows live component rendering
Spec text: Body font, TEXT_MUTED — exact CSS/implementation spec
```

### Required Components (All 8)

**1. Buttons (3 variants shown side by side):**
- Primary: ACCENT fill + PRIMARY_BG text, Caps font 0.65rem, tracking 0.18em, padding 14px 32px
  - Hover: ACCENT_DARK bg, translateY(-1px)
  - Active: scale(0.96)
- Secondary: transparent, 1px ACCENT/50% border, ACCENT text
  - Hover: fills to ACCENT, text to PRIMARY_BG
- Ghost: transparent, 1px TEXT_MUTED/30% border, TEXT_MUTED text
  - Hover: border → ACCENT/40%, text → ACCENT

**2. Content Card (Default + Featured):**
- Default: TERTIARY_BG, transparent border, YouTube thumbnail (maxresdefault)
  - Title: Display italic, TEXT_PRIMARY
  - Speaker + date: CAPS 0.42rem, TEXT_MUTED
  - Hover: translateY(-6px), gold/30% border, thumbnail scale(1.05), play button appears
- Featured: Same + ACCENT border + "FEATURED" badge

**3. Pull Quote Block:**
- border-left: 2px ACCENT
- bg: SECONDARY_BG
- padding: 40px 48px
- Quote mark: Display font 8rem, ACCENT opacity 0.06, absolute behind
- Text: Display italic, TEXT_PRIMARY
- Attribution: CAPS, 0.58rem, tracking 0.2em, ACCENT

**4. Stats Counter:**
- Number: Display font, 2.5rem, ACCENT_LIGHT — animated 0→target, 1.5s ease-out
- Label: CAPS, 0.5rem, tracking 0.15em, TEXT_MUTED
- Triggered: IntersectionObserver, once: true

**5. Form Input (floating label):**
- No border on sides/top
- Bottom border: 1px ACCENT/25% (rest) → 1px ACCENT (focus)
- Label: CAPS, 0.52rem, tracking 0.2em, ACCENT — floats above on focus
- Value: Body font, 16px (never less — prevents iOS zoom)
- Placeholder: TEXT_MUTED

**6. Tags / Badges (4 variants):**
- Default: 1px ACCENT/35% border, ACCENT text, CAPS 0.55rem, tracking 0.18em
- Muted: 1px TEXT_MUTED/30% border, TEXT_MUTED text
- Active/Live: ACCENT fill, PRIMARY_BG text
- Live: #FF4444 fill, white text (+ animated dot before)

**7. Timeline Node:**
- Dot: 10px circle, 1px ACCENT_DARK border
  - Fills with ACCENT on scroll-enter (0.3s ease)
- Vertical line: 1px ACCENT_DARK/40%, connects dots
- Year: Display italic, 0.75rem, ACCENT_LIGHT
- Text: Body font, 0.85rem, TEXT_MUTED

**8. Social Platform Link:**
- Circle: 48px, platform-color/15% bg, platform-color/40% border
- Icon: SVG, 20px, platform-color
- Hover: box-shadow 0 0 20px platform-color/30%, scale(1.05)
- Label: CAPS, 0.42rem, tracking 0.15em, TEXT_MUTED, below circle

---

## Section 06 — Motion & Animation Spec

The motion spec is a complete table with these columns:
Animation Name | Element | Trigger | Properties | Duration | Easing | Delay / Notes

Required animations for every site:

| Animation | Element | Trigger | Properties | Duration | Easing | Notes |
|-----------|---------|---------|------------|----------|--------|-------|
| Loading Screen | Monogram → Rule → Name → Fade | Page load | scale 0.8→1, opacity 0→1 → clipPath → opacity → exit | 1.6s total | easeOut | Sequential: 0s, 0.3s, 0.7s, 1.2s exit |
| Hero Word Reveal | H1 words | Immediate mount | y: 28→0, opacity: 0→1 | 0.7s | easeOut | 0.05s stagger per word |
| Gold Rule Draw | Decorative horizontal rules | 0.5s delay | clipPath: inset(0 100%) → inset(0 0%) | 0.6s | ease | — |
| Scroll Reveal | All content blocks | IntersectionObserver (-80px margin) | y: 32→0, opacity: 0→1 | 0.7s | cubic-bezier(0.25,0.1,0.25,1) | index × 0.08s stagger |
| Stats Counter | Numbers | IntersectionObserver (once) | 0 → target value | 1.5s | ease-out | index × 0.1s |
| Card Hover | Content cards | mouseenter | y: 0→-6px, border ACCENT/30% | 0.22s | easeOut | — |
| Play Button | Circle on card | Card hover | scale: 0→1 | 0.2s | easeOut | 0.05s delay |
| Light Beams | Diagonal elements | Continuous | rotate ± 3deg, opacity oscillate | 8–10s | ease-in-out infinite | Per-beam delays |
| Nav Blur | Sticky nav | scrollY > 60 | backdrop-blur + bg opacity: 0→0.9 | 0.4s | ease | — |
| Mobile Menu | Full-screen overlay | Hamburger click | opacity 0→1 + link stagger y: 24→0 | 0.3s + 0.06s/link | easeOut | — |
| Timeline Node | Dot fills | IntersectionObserver per node | bg transparent→ACCENT | 0.3s | ease | index × 0.15s |
| Theme Toggle | Icon + properties | User click | icon rotate 360°, properties transition 0.4s | 0.4s | ease | — |
| Page Transition | Page wrapper | Route change | exit: opacity 0, y -8, 0.25s; enter: opacity 1, y 0, 0.45s | variable | easeIn/easeOut | AnimatePresence mode="wait" |
| Constellation | Canvas + nodes | Section scroll-enter | 0s: heading; 0.5s: lines draw; 0.8s: nodes scale stagger | 0.3s/node | easeOut | requestAnimationFrame for lines |

---

## Section 07 — UX Principles (Always 6)

Define 6 design philosophy principles specific to this organization. Each has:
- A large decorative number (Display font, opacity 0.2)
- A principle title (CAPS font, ACCENT)
- A 2-3 sentence description grounded in this specific org's context

Standard principles for any church site (adapt wording to the specific org):
1. [Org's core aesthetic] First — e.g., "Power & Presence First" or "Word-Built Authority First"
2. Content at the Centre — sermons/teachings within 1 click from anywhere
3. Storytelling Over Listing — narrative approach to bios, timelines, testimonials
4. [Geographic/Cultural] Identity — pride in local roots, specific cultural markers
5. Mobile is Primary — congregation finds church through social on mobile first
6. One Clear Action Per Page — each page has ONE dominant CTA

---

## Section 08 — Technical Spec Table

Table format: Category | Specification

Required rows:
```
Framework        | Next.js 15 (App Router) — with reasoning for SSR/ISR choices
Styling          | Tailwind CSS 3 + CSS custom properties for theme tokens
Animation        | Framer Motion 11 — all scroll reveals, page transitions
Particles        | @tsparticles/react + @tsparticles/slim — home/socials/connect
Fonts            | next/font/google — [Font1], [Font2], [Font3]
Images           | next/image + Unsplash remote domains + YouTube remote domains
Video            | YouTube IFrame API + Lite YouTube embed (defer load)
Social Embeds    | Facebook SDK (lazyOnload) + Curator.io/Elfsight Instagram
Theme            | next-themes — default: dark, system preference respected
Hosting          | Vercel — automatic CI/CD, Edge Network, Kenya routing
Analytics        | Vercel Analytics (GDPR-friendly)
CMS (Phase 2)    | Sanity.io — for events, sermon metadata, testimonials
Payments         | [Kenyan: M-Pesa Paybill/Till + Pesapal/DPO] [Other: Stripe]
Performance      | LCP < 2.5s · CLS < 0.1 · FID < 100ms · Lighthouse ≥90
Accessibility    | WCAG 2.1 AA · Semantic HTML5 · Focus: 2px accent outline
Breakpoints      | 375–639px (base) · 640–1023px (sm:) · 1024–1440px (lg:) · 1441px+ (xl:)
Max Content      | 1280px max-width
Domain           | [org-domain.com] — Vercel + SSL automatic
```

Below the table, include the Tailwind config token listing showing all color names and hex values.
