---
name: church-org-website-builder
description: >
  End-to-end pipeline for building a complete, premium website PRD and implementation guide for any church, ministry, or faith-based organization — from zero research to fully-specced, production-ready deliverables. Triggers for: "build a website for [church/org name]", "create a brand identity for [ministry]", "design a site for [organization]", "research [church] and build their web presence", "make a PRD for [church name]", or any combination of church/org + website/brand/PRD/design. This skill handles the ENTIRE pipeline — research → brand identity → PRD → enhancement guide — and should be used even if the user only asks for one part, since the full workflow produces dramatically better results. Works for churches, ministries, NGOs, faith-based businesses, and any Christian organization.
---

# Church & Organization Website Builder

A complete, reusable pipeline for turning a church or organization's name (and any available research materials or social links) into fully-specced, production-ready website deliverables — complete with deep research, a unique brand identity system, full page specifications, and an LLM-ready implementation guide.

---

## What This Skill Produces

Running this skill end-to-end outputs **two downloadable deliverables**:

| # | Deliverable | Format | Purpose |
|---|-------------|--------|---------|
| 1 | **Website PRD** | Styled HTML file | Full brand identity, page specs, wireframes, component library, motion spec, social embed specs |
| 2 | **Enhancement & Implementation Guide** | Styled HTML file | LLM-ready code, verified content links, image assignments, effects spec, Tailwind config, 5-phase checklist |

Both are styled HTML documents that visually embody the organization's brand palette — they are not generic white-page documents.

---

## PHASE 0 — Read All Reference Files First

Before doing anything else, read ALL reference files in this order:

1. `references/research-protocol.md` — Search strategy, source evaluation, data templates
2. `references/brand-identity.md` — Aesthetic directions, color rules, typography system, brand voice
3. `references/prd-template.md` — Page layout patterns, wireframe conventions, section specs
4. `references/enhancement-guide.md` — Effects library, social embeds, code patterns, implementation checklist

Do not begin Phase 1 until all four files are read.

---

## PHASE 1 — Deep Research

### 1.0 Inputs to Collect

Before searching, inventory what the user has provided:
- Organization name
- Social media links (Facebook, Instagram, YouTube, etc.)
- Website URL (if any)
- Any research documents, PDFs, or bio text
- Any brand assets (logos, color references)

Use provided materials as Tier 1 truth. Use web research to fill gaps.

### 1.1 Initial Search Battery

Run ALL of these searches. Do not skip. Adapt `[ORG]` to the exact organization name.

```
1.  "[ORG]" official website OR "about us"
2.  "[ORG]" Facebook page description mission vision
3.  "[ORG]" YouTube channel about bio description
4.  "[ORG]" Instagram bio followers posts
5.  "[ORG]" pastor founder leader biography
6.  "[ORG]" history founded year beginning
7.  "[ORG]" ministries programs outreach departments
8.  "[ORG]" events conference upcoming 2024 2025 2026
9.  "[ORG]" sermons teachings YouTube latest
10. "[ORG]" testimonials impact stories transformation
11. "[ORG]" radio TV broadcast media presence
12. "[ORG]" books resources publications authored
13. "[ORG]" giving partnership donate M-Pesa (for African orgs)
14. "[ORG]" awards recognition media coverage press
```

Fetch the organization's website, YouTube About tab, and Facebook page description. These contain the most reliable mission statements and bio text.

### 1.2 Data to Extract

**Identity:**
- Official full name + common name + abbreviation
- Country, city, region (specific — "Nairobi, Kenya" not just "Kenya")
- Founded year (approximate if exact unavailable)
- Legal/registered name if different from public name
- Official website URL
- Shop/store URL if separate

**Leadership:**
For EACH leader/pastor/founder found:
- Full name + title
- Role in organization
- Bio summary (from official sources only)
- Personal social media handles and follower counts
- Books authored (with exact titles and purchase URLs)
- Notable ministry milestones attributed to them

**Ministry Vision:**
- Official mission/vision statement (exact quote from official source)
- Tagline or slogan (exact)
- How does the organization describe itself in its own words?
- What problem does it exist to solve?

**Ministry Arms / Programs / Departments:**
For EACH arm/program found:
- Exact name
- Description (from official source)
- Leader (if named)
- Schedule (if recurring)
- Online presence (separate social, website, etc.)

**Services / Programming:**
- Day, time, timezone, frequency for each regular service
- Online streaming? Which platforms?
- Radio / TV presence (station name, frequency, day/time)

**Content Library (Sermons / Teachings / Videos):**
For EVERY video/sermon found on YouTube:
- Exact title
- Speaker
- Date published
- YouTube video ID (extract from URL)
- Category (Sunday Service, Conference, Prayer, Teaching, etc.)
- Mark top 3 as featured

**Social Media:**
For EVERY platform found:
- Handle / page name
- Full URL
- Follower/subscriber/like count
- Platform bio quote (exact)
- Platform color (hex)

**Books / Publications:**
- Exact title
- Author(s)
- Purchase URL

**Testimonials:**
- Collect 2-3 if available online (YouTube comments, Facebook posts, website)

**Brand Signals:**
- Colors visible in existing branding (logo, profile photos, thumbnails)
- Words that recur in their content (their language, not generic church language)
- Emotional tone of their content
- Keywords used on their YouTube channel

### 1.3 Research Dossier (Internal Context)

Compile into this structure — this is the single source of truth for all downstream work:

```
ORG: [Official Name]
PUBLIC NAME: [Common name]
ABBREVIATION: [e.g., CFMI, RAC]
BASED IN: [City, Country 🏳️]
FOUNDED: [Year or era]
WEBSITE: [URL]

VISION: "[Exact official statement]"
TAGLINE: "[Exact slogan if separate]"
DESCRIPTION (own words): "[Pull from Facebook/website — exact quote]"

LEADERS:
  [Name] — [Title]
    Bio: [2-3 sentences from official source]
    Personal IG: @[handle] | [URL] | [followers]
    Books: [Title] — [URL]; [Title] — [URL]; ...

MINISTRY ARMS:
  [Name] — [Description] — [Leader] — [Schedule]
  [Name] — [Description] — [Leader] — [Schedule]
  ...

SERVICES:
  [Day] Service: [Time] [TZ] · In-person [+/- Online stream]
  [Day] Service: [Time] [TZ] · ...
  Radio: [Station] · [Day] [Time–Time] [TZ]

SERMONS (YouTube):
  1. [Title] | [Speaker] | [Date] | [Video ID] | [Category] | Featured: Y/N
  2. ...

SOCIAL MEDIA:
  Facebook: [URL] | [Followers] | "[Bio quote]"
  YouTube:  [URL] | [Channel ID] | [Subscribers]
  Instagram:[URL] | [Handle] | [Followers] | "[Bio quote]"
  Twitter:  [URL] | [Handle]
  [Others as found]

BOOKS:
  [Title] — [Author] — [URL]
  ...

TESTIMONIALS:
  "[Quote]" — [Source]
  ...

BRAND SIGNALS:
  Colors seen in existing branding: [List hex or color names]
  Recurring words in content: [List]
  Emotional tone: [Describe]
  YouTube keywords: [List from channel metadata]
```

---

## PHASE 2 — Brand Identity System

Read `references/brand-identity.md` fully before this phase.

### 2.1 Assign Aesthetic Direction

From the five directions in the reference file, select ONE based on the organization's signals:
- **Sacred Luxury Editorial** → Word-based, evangelical, prophetic, formal ministry
- **Power & Presence** → Large-scale, authority-centered, dominion theology, megachurch feel
- **Afro-Spiritual Warmth** → African cultural pride, community-centered, earthy/warm
- **Contemporary Light** → Young congregation, modern/casual, bright and accessible
- **Raw & Reverent** → Intimate, grassroots, acoustic worship, underground church

State the chosen direction + a one-sentence evocative description:
*"[Direction] — [What this organization's site should feel like to a first-time visitor]."*

### 2.2 Derive the Color Palette

Build 8 named colors from the organization's signals (existing branding colors) + the chosen aesthetic:

```
PRIMARY_BG   — Near-black (tinted, not pure black) — the base
SECONDARY_BG — 1 step lighter than primary — panel/section bg
TERTIARY_BG  — Card/component background
ACCENT       — The brand's defining color (derive from existing branding or aesthetic)
ACCENT_LIGHT — Lighter tint of accent — highlights, hover, italic text
ACCENT_DARK  — Darker shade — borders, subtle details
TEXT_PRIMARY — Cream or warm light tone (never pure white)
TEXT_MUTED   — Supporting text — grey or desaturated version of TEXT_PRIMARY
```

Name each color evocatively using words from the organization's world:
- Use: faith language, place names, time of day, ritual objects, nature
- Never: generic names ("Blue", "Dark Grey", "Light Gold")

Also define the Light Theme equivalents:
```
PRIMARY_BG_LT   — Clean, near-white with slight tint (not pure white)
SECONDARY_BG_LT — Pale tinted panel
TERTIARY_BG_LT  — Light card surface
TEXT_PRIMARY_LT — Deep, dark version of the brand's primary dark
TEXT_MUTED_LT   — Mid-tone muted version
(Accent colors remain the same in both themes)
```

### 2.3 Typography Trio

Select exactly 3 typefaces from Google Fonts:

```
DISPLAY  — Hero headlines, section headings, pull quotes
           Classical serif: Cormorant Garamond / Playfair Display / DM Serif Display / Spectral

CAPS     — Navigation, labels, tags, badges, CTA buttons — ALWAYS UPPERCASE
           Refined serif or sans: Cinzel / Marcellus SC / Josefin Sans / Tenor Sans

BODY     — Paragraphs, bios, descriptions — comfortable reading
           Warm readable serif: Crimson Pro / Lora / Merriweather / EB Garamond
```

### 2.4 Logotype System

Define 3 treatments:
- **Primary:** Main logotype for dark backgrounds — CAPS font word(s) + Display italic word + gradient rule separator
- **Monogram:** 2-3 letter mark for favicon, loading screen, watermarks
- **Light Version:** Adaptation for light mode or light backgrounds

### 2.5 Brand Voice

4 positive keywords + 1 exclusion keyword, each with a 1-sentence explanation:
*[Word] · [Word] · [Word] · [Word] · (not: [Word])*

---

## PHASE 3 — Website PRD

Read `references/prd-template.md` fully before this phase.

### 3.1 Route Architecture

Define all pages. Core pages for any church/org:

```
/              — Home: grand first impression, maximum CTA density
/about         — Story, leadership, history, beliefs
/sermons       — Full content/teaching library, live stream embed
/ministries    — All ministry arms / programs / departments
/events        — Regular services + special events/conferences
/give          — Giving page with M-Pesa + card + partnership tiers
/connect       — Contact form, all socials embedded, visit info
```

Optional Phase 2 pages:
```
/bible-institute OR /courses  — If WFBI or similar exists
/store OR /shop               — Books, resources (link to existing shop)
/blog OR /devotional          — Written content
```

For each route, specify:
- **Design personality:** One sentence
- **Primary action:** One dominant CTA
- **Priority:** Core or Phase 2

### 3.2 Home Page — 9 Sections (Always)

The home page always has these 9 sections in this order:

1. **Hero** — Full-bleed atmospheric background, ministry tagline headline, 2 CTAs (primary + secondary), monogram or atmospheric image right
2. **Live Service Strip** — Live indicator, next service time/day, Watch Live CTA. If service is streaming: embed mini-player
3. **Stats Bar** — 4 animated counters (years of ministry, ministry arms, weekly services, radio/reach)
4. **Featured Content** — 3 sermon/teaching cards (top picks from verified library)
5. **Ministry Arms Preview** — Tiles for each arm, icon + name + 1-line description
6. **Testimonials** — Pull-quote carousel, 3 testimonials from congregation/audience
7. **Socials Section (REQUIRED)** — Facebook Page Plugin embed + Instagram feed embed side by side. Platform follow CTAs below. YouTube Subscribe button.
8. **Books / Resources** (if applicable) — Horizontal scroll of published books with shop links
9. **Newsletter** — "Receive the Word Directly" or equivalent. Email input + submit.

### 3.3 Per-Page Wireframe Spec

For EACH page, produce a visual wireframe mockup using HTML/CSS (not ASCII). The wireframe must:
- Use the brand palette colors
- Show actual layout proportions
- Show real content in the correct typography
- Include all sections in vertical order
- Show mobile adaptation note per section

### 3.4 Component Library

Define every reusable component with exact visual spec:
- **Buttons:** Primary (accent fill), Secondary (accent border), Ghost (muted border), Live (animated red dot + label)
- **Content Card:** Thumbnail (YouTube maxresdefault), title (Display italic), metadata (Caps font), category tag, hover state
- **Pull Quote Block:** Accent border-left, giant translucent quote mark, attribution in Caps font
- **Stats Counter:** Number in Display font (animated on scroll-enter), label in Caps font
- **Form Input:** Bottom-border only, accent color on focus, floating label, 16px minimum font-size
- **Tags / Badges:** Outlined (default), accent-filled (active), red (LIVE), platform-colored (social tags)
- **Timeline Node:** Dot + vertical line + year + description. Dot fills with accent on scroll-enter.
- **Constellation Node:** Platform circle with glow, canvas connecting lines

### 3.5 Navigation Spec

Desktop:
- Sticky, starts transparent, gains backdrop-blur on scroll > 60px
- Left: Logotype (links to /)
- Center: All page links in CAPS font
- Right: Theme toggle (sun/moon) + primary CTA pill ("JOIN LIVE SERVICE" or equivalent)

Mobile:
- Hamburger opens full-screen overlay
- Nav links in large Display font italic, centered, stagger-animated in
- Social icons row at bottom of overlay
- Route change closes menu

### 3.6 Footer Spec

4 columns (desktop) / Accordion (mobile):
1. Brand column: logotype + tagline + social icons
2. Navigate: all page links
3. Ministries/Programs: all arms listed
4. Receive: email input + newsletter CTA

Bottom bar: copyright + website URL

---

## PHASE 4 — Enhancement & Implementation Guide

Read `references/enhancement-guide.md` fully before this phase.

### 4.1 Verified Content Data

Produce a complete, linkable table for:
- All sermon/teaching video IDs + full YouTube URLs + categories + featured flag
- YouTube channel data (URL, Channel ID, RSS feed URL, Subscribe button embed code)
- All social media URLs with follower counts and platform colors
- All book titles with exact purchase URLs
- All copy strings (CTAs, headlines, footer note)

### 4.2 Image Assignments (Zero Repeats)

For every section across all pages, assign ONE unique Unsplash image or CSS-only treatment. Never repeat a photo ID. Document as:
```
Page / Section | Unsplash Photo ID | Full URL | Treatment (opacity, blur, parallax)
```

Mark real-photo-required sections clearly with ⚠️.

### 4.3 Effects Specification

Produce implementation-ready code snippets for:
- Loading screen (org monogram + line draw + name — AnimatePresence)
- Light beams (count, angles, opacity, animation per page)
- Particles (tsParticles config with mobile adaptation)
- ScrollReveal component (stagger delay patterns per element type)
- Custom cursor (gold ring, hover states, mobile detection)
- Stats counter (Framer Motion count animation)
- Theme toggle (next-themes setup, CSS custom properties)
- Page transitions (AnimatePresence in layout.tsx)
- Social Constellation (desktop canvas nodes + mobile card stack)

### 4.4 Social Embeds Code

Produce ready-to-implement code for:
- Facebook Page Plugin (exact page URL, tabs, lazyOnload strategy)
- Instagram feed embed (Curator.io or Elfsight — exact setup steps)
- YouTube Subscribe button embed (exact channel ID)
- Fallback states for when embeds are blocked

### 4.5 Foundation Code

Produce complete, copy-paste-ready files:
- `tailwind.config.ts` — all brand tokens, animations, keyframes
- `globals.css` — dark/light CSS custom properties, film grain, scrollbar, reduced motion
- `next.config.js` — image remote patterns (Unsplash + YouTube)
- `lib/content.ts` — all sermon/content data, social data, book data as typed constants
- `lib/ministries.ts` — all ministry arms as typed constants

### 4.6 Implementation Checklist

5-phase checklist, each item checkboxed:

**Phase 1 — Foundation** (Days 1-3)
Framework setup, Tailwind config, globals.css, fonts, nav, footer, loading screen, theme system, page transitions

**Phase 2 — Components** (Days 4-7)
ContentCard, ScrollReveal, LightBeam, Particles, CustomCursor, Constellation, StatsCounter, Timeline, PullQuote, Button variants, FormInput, Tag/Badge

**Phase 3 — Pages** (Days 8-18)
Home (9 sections incl. social embeds) → Sermons → About → Ministries → Events → Give → Connect

**Phase 4 — Effects Pass** (Days 19-23)
Parallax, scroll reveals, timeline animations, constellation, cursor, micro-interactions, theme toggle

**Phase 5 — Mobile QA & Launch** (Days 24-28)
375/390/414/768px testing, tap targets, iOS zoom fix, Lighthouse scores, domain, deploy

---

## OUTPUT FORMAT

### PRD File
**Filename:** `[org-slug]-website-prd.html`

Structure:
```
Cover Page          — Dark, immersive. Org name in brand typography. Brand palette applied.
00 · Project Overview
01 · Research Dossier  — All verified org data. Leadership, ministry arms, service schedule,
                          verified sermon library (video IDs), social data, books, brand signals.
02 · Brand Identity    — Color swatches (dark + light theme), typography specimens, logotype,
                          brand voice, aesthetic direction statement.
03 · Site Architecture — Route table with design personality and primary action per page.
04 · Screen Designs    — Visual wireframe mockup for EVERY page. Home gets full 9-section mockup.
                          Every other page gets a section-by-section HTML wireframe mockup.
05 · Component Library — Visual demos of every component with exact spec.
06 · Motion Spec       — Complete animation table with triggers, properties, timing.
07 · UX Principles     — 6 design philosophy statements.
08 · Technical Specs   — Full stack table, Tailwind token listing.
```

The HTML file itself must be styled in the derived brand palette — not generic styles.

### Enhancement Guide File
**Filename:** `[org-slug]-enhancement-guide.html`

Structure:
```
Cover Page
00 · How to Use (for LLM agents)
01 · Verified Content Data (all links, IDs, URLs in tables)
02 · Image Assignments (zero-repeats table)
03 · Page Build Specs (individual page notes)
04 · Effects Specification (code snippets — LoadingScreen, LightBeam, Particles,
     ScrollReveal, CustomCursor, StatsCounter, ThemeToggle, PageTransitions)
05 · Social Embeds (FacebookEmbed, InstagramEmbed, SocialConstellation — full code)
06 · Nav & Footer Spec
07 · Mobile-First Rules & QA Checklist
08 · Foundation Code (tailwind.config.ts, globals.css, next.config.js, lib/content.ts)
09 · Implementation Checklist (5 phases, checkboxed)
```

The HTML file itself must be styled in the derived brand palette — not generic styles.

Both files go to `/mnt/user-data/outputs/`. Present both with `present_files`.

---

## QUALITY GATES

Before presenting deliverables, verify every item:

**Research Quality:**
- [ ] Every sermon has a verified YouTube video ID
- [ ] All social platform URLs confirmed from web research
- [ ] Leadership bio sourced from official channel (not invented)
- [ ] Ministry vision statement is a real quote, not paraphrased
- [ ] Service schedule has confirmed day, time, and timezone
- [ ] At least 3 ministry arms identified and described

**Brand Quality:**
- [ ] Color palette has exactly 8 named colors (dark) + 5 (light) with hex values
- [ ] Each color has an evocative name (not generic)
- [ ] Typography has exactly 3 named Google Fonts with clear usage roles
- [ ] Logotype system has 3 variants defined
- [ ] Brand voice has 4 keywords + 1 anti-keyword
- [ ] Aesthetic direction assigned and justified

**PRD Quality:**
- [ ] Every page has a unique design personality statement
- [ ] Home page has all 9 sections specified
- [ ] Social embeds section is present with Facebook + Instagram
- [ ] Every section has a mobile adaptation note
- [ ] Component library covers all 8+ components with exact visual spec
- [ ] Motion spec table is complete (all animations with timing and easing)
- [ ] Dark AND light theme are both specified

**Enhancement Guide Quality:**
- [ ] Every section across all pages has a unique image assignment
- [ ] LoadingScreen code snippet is complete
- [ ] SocialConstellation code specifies all platform node positions and canvas connections
- [ ] FacebookEmbed and InstagramEmbed code snippets are complete with fallback
- [ ] tailwind.config.ts is complete with all brand tokens and keyframes
- [ ] globals.css is complete with dark/light custom properties and film grain
- [ ] Implementation checklist is 5-phased, all items are specific and actionable

**Visual Quality:**
- [ ] Both HTML deliverables are styled in the brand palette (not white-page browser defaults)
- [ ] Both HTML files have nav + cover page + section structure
- [ ] Typography in deliverables uses Google Fonts loaded via @import

---

## CRITICAL RULES — NEVER BREAK

1. **Zero generic information.** Every piece of content — bios, vision statements, ministry descriptions — must come from verified research about the specific organization. Never write generic church copy.

2. **Zero invented links.** Every YouTube video ID, social URL, and book link must be confirmed from web research. Mark unverified as "UNVERIFIED — confirm before use."

3. **Zero repeated images.** Every section across all pages gets exactly one unique Unsplash photo ID. Cross-check before finalizing.

4. **No placeholder pastor photos.** If official press photos are not provided, the PRD must note ⚠️ PHOTO REQUIRED and use the org's monogram as placeholder. Never substitute another person's photo.

5. **Dark mode default.** The site always defaults to dark mode. Light mode is toggled by the user. Never make light the default.

6. **M-Pesa on Give page for Kenyan orgs.** If the organization is based in Kenya, M-Pesa Paybill/Till number must be displayed prominently on the Give page.

7. **Facebook + Instagram both embedded.** The Home page Socials section must always embed BOTH Facebook and Instagram (not just link to them). Use the Facebook Page Plugin + Curator.io/Elfsight for Instagram.

8. **Mobile is primary.** Every section spec must include a mobile adaptation note. All animations respect prefers-reduced-motion. Parallax is disabled on mobile. Custom cursor is disabled on touch devices.

9. **Both deliverables are styled HTML.** Not markdown. Not plain text. Full CSS, brand typography, brand palette applied to the document itself — the document embodies the brand it describes.

10. **Church-first framing.** Copy language, section naming, and CTAs must always reflect the organization's actual ministry framing — never generic startup/SaaS language.
