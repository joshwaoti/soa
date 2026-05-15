# Research Protocol — Church & Organization Website Builder

## Source Priority Ranking

```
TIER 1 — Primary (Most Reliable):
  ├── Organization's official YouTube channel (About tab, video descriptions)
  ├── Organization's official Facebook page (About section, description)
  ├── Organization's official Instagram (bio quote, follower count, posts)
  ├── Organization's official website (About, Vision, Leadership pages)
  └── Leader's personal social media (personal bio, book links)

TIER 2 — Secondary (Reliable with Verification):
  ├── Press/editorial coverage (national newspaper profiles, interviews)
  ├── Radio/TV station websites (confirm broadcast slots)
  ├── Event promotion pages (confirm conference dates and themes)
  ├── Book retail pages (Amazon, local stores — confirms title and purchase URL)
  └── Wikipedia (if article exists — cross-check all facts)

TIER 3 — Supplemental (Use for Signal Only):
  ├── Congregation social media posts mentioning the church
  ├── Fan/member accounts referencing services or events
  └── General church directories
```

---

## Search Query Templates

Replace `[ORG]` with the exact organization name. Run ALL of these.

### Identity & History
```
"[ORG]" official about us history founded
"[ORG]" vision mission statement
"[ORG]" church ministry biography description
"[ORG]" founded year established Kenya (or relevant country)
"[ORG]" abbreviation acronym CFMI RAC (whatever applies)
```

### Leadership
```
"[ORG]" pastor founder president bishop
"[ORG]" [Pastor Name] biography
"[ORG]" [Pastor Name] Instagram Facebook
"[ORG]" [Pastor Name] book author published
```

### Ministry Programs
```
"[ORG]" ministry arms departments programs
"[ORG]" bible school institute
"[ORG]" youth conference
"[ORG]" business marketplace ministry
"[ORG]" radio TV broadcast Truth FM Family TV
```

### Services & Schedule
```
"[ORG]" Sunday service time schedule
"[ORG]" midweek Thursday service
"[ORG]" live stream YouTube online service
"[ORG]" service time EAT (for East African orgs)
```

### Sermon Content
```
site:youtube.com "[ORG]" sermon 2024 2025
"[ORG]" YouTube channel sermons teachings
"[ORG]" latest sermon [current year]
"[ORG]" conference sermon YouTube
"[ORG]" prayer fasting YouTube playlist
```

### Social Media
```
"[ORG]" Instagram followers @handle site:instagram.com
"[ORG]" Facebook page likes followers
"[ORG]" YouTube subscribers channel
"[ORG]" Twitter X @handle
site:instagram.com "[ORG]" church ministry
```

### Books & Resources
```
"[Pastor Name]" book author published
"[Pastor Name]" "written by" OR "authored by"
"[ORG]" resources shop store publications
```

### Events & Conferences
```
"[ORG]" conference 2024 2025 annual
"[ORG]" faith building conference
"[ORG]" youth alive conference
"[ORG]" upcoming events calendar
```

### Testimonials
```
"[ORG]" testimonial transformed life story
"[ORG]" YouTube comments testimonies
"[ORG]" facebook reviews testimonials
```

---

## YouTube Data Extraction

For every YouTube video found:

1. **Extract Video ID** from URL:
   - `https://www.youtube.com/watch?v=VIDEO_ID` → ID after `v=`
   - `https://youtu.be/VIDEO_ID` → ID after last `/`
   - `https://m.youtube.com/watch?v=VIDEO_ID` → same ID

2. **Thumbnail URL pattern:**
   ```
   Primary:  https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg  (1280×720)
   Fallback: https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg      (480×360)
   Mobile:   https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg      (320×180)
   ```

3. **Channel ID** (from channel URL):
   - `youtube.com/channel/CHANNEL_ID` → capture directly
   - Handle URL `youtube.com/@Handle` → fetch page to get actual channel ID for RSS

4. **RSS Feed URL:**
   ```
   https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID
   ```

5. **From video description, note:**
   - Scripture references (use in sermon card descriptions)
   - Conference themes and dates
   - Speaker names
   - Any mentioned series or playlist

---

## Sermon / Content Data Template

Fill for every video/teaching found:

```yaml
- title: "Exact Title as on YouTube"
  speaker: "Full Name + Title"
  date: "Mon YYYY"        # e.g. "Apr 2025"
  video_id: "VIDEO_ID"
  youtube_url: "https://www.youtube.com/watch?v=VIDEO_ID"
  thumbnail_max: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
  thumbnail_hq:  "https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg"
  category: "SUNDAY_SERVICE | THURSDAY_SERVICE | MIDWEEK | CONFERENCE | PRAYER_FASTING | TEACHING"
  featured: true          # mark top 3 only
  verified: true          # only true if URL confirmed
```

---

## Social Media Data Template

```yaml
socials:
  facebook:
    page_name: "Exact Page Name"
    url: "https://www.facebook.com/pagename/"
    followers: "3,017 likes"
    bio: "Exact description from page About section"
    platform_color: "#1877F2"
    embed_ready: true     # can use Page Plugin
  youtube:
    channel_name: "Channel Name"
    url: "https://www.youtube.com/@Handle"
    channel_id: "UCxxxxxxxxxxxxxxxxxxxxxx"
    rss: "https://www.youtube.com/feeds/videos.xml?channel_id=UCxxxxxxxxxxxxxxxxxxxxxx"
    platform_color: "#FF0000"
  instagram:
    handle: "@handle"
    url: "https://www.instagram.com/handle/"
    followers: "1,543"
    posts: "636"
    bio: "Exact Instagram bio text"
    platform_color: "#E1306C"
    embed_tool: "Curator.io | Elfsight"
  twitter:
    handle: "@handle"
    url: "https://twitter.com/handle"
    platform_color: "#1DA1F2"
  # Add leader personal accounts:
  leader_instagram:
    handle: "@handle"
    url: "https://www.instagram.com/handle/"
    followers: "39K+"
    bio: "Exact bio"
    platform_color: "#E1306C"
```

---

## Leadership Profile Template

```yaml
leaders:
  - name: "Full Name"
    title: "Pastor / Founder / President / Bishop"
    role: "Brief role description"
    bio: "2-3 sentence bio from official source"
    personal_instagram: "@handle | URL | followers"
    personal_facebook: "Page name | URL | followers"
    books:
      - title: "Exact Book Title"
        url: "https://exact-purchase-url.com/product/title/"
      - title: "Another Book"
        url: "https://exact-purchase-url.com/product/another/"
    ministry_highlights:
      - "Pioneered [Ministry Arm]"
      - "Speaker at [Major Event]"
```

---

## Ministry Arms Data Template

```yaml
ministry_arms:
  - name: "Exact Ministry Name"
    roman_numeral: "I"    # for display purposes
    description: "1-2 sentence description from official source"
    leader: "Name"
    schedule: "When it meets/runs"
    type: "Bible School | Conference | Business/Career | Youth | Radio | Relationships"
    cta: "REGISTER TODAY | LEARN MORE | JOIN →"
    cta_url: "https://link-if-available.com"
```

---

## Brand Signal Extraction

Actively note these while researching:

```
VISUAL SIGNALS:
  ├── Colors in profile photos, logo, video thumbnails
  ├── Existing website color scheme (if any)
  └── Press photo styling (dramatic/warm/bright/dark)

VERBAL SIGNALS:
  ├── Mission statement (exact quote)
  ├── Facebook page description (exact quote)
  ├── Instagram bio (exact quote)
  ├── YouTube channel description (exact quote)
  ├── Recurring words in sermon titles
  └── YouTube channel keywords (from About tab metadata)

THEOLOGICAL SIGNALS:
  ├── Faith tradition (evangelical, charismatic, Pentecostal, etc.)
  ├── Teaching emphasis (Word-based, prophetic, marketplace, youth)
  ├── Tone (formal/academic vs. accessible/relational)
  └── Scale signals (intimate community vs. large-scale ministry)

AUDIENCE SIGNALS:
  ├── Who follows them (check comment demographics if visible)
  ├── Reach (local/national/pan-African/global)
  └── Age range of their content/events
```

---

## Unsplash Thematic Image Guide

Assign unique Unsplash photos per section. Pattern:
```
https://images.unsplash.com/photo-[PHOTO_ID]?w=1920&q=85   (hero)
https://images.unsplash.com/photo-[PHOTO_ID]?w=1200&q=80   (section bg)
https://images.unsplash.com/photo-[PHOTO_ID]?w=1200&q=75   (blurred/faded)
```

**Thematic mapping for church/ministry sites:**

| Section | Theme | Treatment |
|---------|-------|-----------|
| Home hero bg | Night congregation / dramatic lighting | opacity-10, parallax 0.15x |
| Home testimonials bg | Soft light rays or bokeh | opacity-5, blur-sm |
| About split panel | ⚠️ REAL PHOTO REQUIRED (pastors) | — |
| About timeline bg | African sky / open landscape | opacity-4, no parallax |
| About quote bg | Open Bible / scripture text | opacity-5, blur-sm |
| Sermons page header | Spotlight / microphone / podium | opacity-8, parallax 0.2x |
| Ministries header | Stage lights / worship crowd | opacity-15, parallax 0.4x |
| Events hero | Cathedral interior / crowd | opacity-12, parallax 0.35x |
| Give page header | Golden abstract / warm bokeh | opacity-6, blur-sm |
| Connect page header | Community hands / gathering | opacity-6, no parallax |
| Newsletter strip | Golden bokeh light leaks | opacity-5, blur-lg |
| Stats bar | Pure CSS — no image | — |
| Social section | Pure CSS + particles | — |
| Books carousel | Pure CSS — dark gradient | — |

**CRITICAL: Never assign the same photo ID to more than one section across any page.**

---

## Research Completeness Checklist

Confirm ALL before moving to Phase 2:

**Identity:**
- [ ] Official name + abbreviation confirmed
- [ ] City, country confirmed (specific, not generic)
- [ ] Founded year confirmed (or era if exact year unavailable)
- [ ] Official vision/mission statement — exact quote from official source

**Leadership:**
- [ ] At least 1 leader's full name, title, and bio confirmed from official source
- [ ] Personal social handles for each leader found and follower counts noted
- [ ] Books authored — exact titles and purchase URLs confirmed

**Content:**
- [ ] At least 6 sermons with verified YouTube video IDs
- [ ] Service schedule — day, time, timezone for each regular service
- [ ] At least 4 ministry arms described from official source
- [ ] At least 1 conference or major event identified

**Social Media:**
- [ ] Facebook page URL + follower count confirmed
- [ ] YouTube channel URL + Channel ID confirmed
- [ ] Instagram handle + follower count confirmed
- [ ] Page/bio descriptions extracted (exact quotes)

**Brand Signals:**
- [ ] Colors in existing branding identified
- [ ] Recurring language/words catalogued
- [ ] Theological/ministry emphasis identified
- [ ] Audience/scale signals noted
