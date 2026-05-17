"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Play, Search } from "lucide-react";
import { sermons, socials } from "../lib/content";
import { SocialIcon } from "./social-icon";

export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ y: 28, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export function LightBeams({ count = 2 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="beam" style={{ left: `${18 + i * 28}%`, "--r": `${-13 + i * 11}deg`, animationDelay: `${i * 1.4}s` } as React.CSSProperties} />
      ))}
    </>
  );
}

export function Hero({ eyebrow, title, copy, image, portraitImage, imagePosition = "center 22%", portraitPosition = "center 18%", primary, secondary }: {
  eyebrow: string; title: React.ReactNode; copy: string; image: string; portraitImage?: string; imagePosition?: string; portraitPosition?: string; primary: { label: string; href: string }; secondary?: { label: string; href: string };
}) {
  const portrait = portraitImage || image;
  return (
    <section className="hero">
      <LightBeams count={2} />
      <div className="hero-bg"><Image src={image} alt="" fill priority sizes="100vw" style={{ objectPosition: imagePosition }} /></div>
      <div className="container hero-inner">
        <ScrollReveal>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display-title">{title}</h1>
          <div className="rule" />
          <p>{copy}</p>
          <div className="hero-actions">
            <Link className="btn primary" href={primary.href}>{primary.label}<ArrowRight size={16} /></Link>
            {secondary && <Link className="btn" href={secondary.href}>{secondary.label}</Link>}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="hero-portrait">
            <Image src={portrait} alt={`${eyebrow} ministry image`} fill priority sizes="(max-width: 980px) 0px, 360px" style={{ objectPosition: portraitPosition }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function SermonCard({ sermon, featured = false }: { sermon: (typeof sermons)[number]; featured?: boolean }) {
  const [src, setSrc] = useState(sermon.image || `https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`);
  const fallback = `https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`;
  const href = `https://youtube.com/watch?v=${sermon.videoId}`;
  return (
    <a className={`sermon-card ${featured ? "featured" : ""}`} href={href} target="_blank" rel="noreferrer">
      <div className="thumb">
        <Image src={src} alt={`${sermon.title} ministry image`} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectPosition: sermon.position || "center 18%" }} onError={() => setSrc(fallback)} />
        <span className="play"><Play size={20} fill="currentColor" /></span>
        {featured && <span className="featured-tag">Featured</span>}
      </div>
      <div className="sermon-body">
        <span className="tag">{sermon.category}</span>
        <h3>{sermon.title}</h3>
        <p>{sermon.speaker} - {sermon.date}</p>
      </div>
    </a>
  );
}

export function StatsRow() {
  const items = [
    { target: 10, suffix: "+", label: "Years of Ministry" },
    { target: 6, label: "Ministry Arms" },
    { target: 5, label: "Weekly Services" },
    { target: 410, suffix: "K+", label: "Working-age Njiru Residents" }
  ];
  return <div className="stats-row">{items.map((item, i) => <Counter key={item.label} {...item} delay={i * 120} />)}</div>;
}

function Counter({ target, suffix = "", label, delay }: { target: number; suffix?: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);
  useEffect(() => spring.on("change", (latest) => setDisplay(Math.round(latest))), [spring]);
  useEffect(() => { if (inView) setTimeout(() => value.set(target), delay); }, [inView, value, target, delay]);
  return <div className="stat" ref={ref}><strong>{display}{suffix}</strong><span>{label}</span></div>;
}

export function SocialEmbeds() {
  return (
    <div className="social-embeds">
      <div className="embed-card">
        <h3>Facebook Feed</h3>
        <div className="embed-frame">
          <iframe title="Facebook page timeline" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Ffacebook.com%2FRevBAkamaandSoundofAbundanceChurch%2F&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" width="500" height="520" style={{ border: "none", overflow: "hidden" }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading="lazy" />
        </div>
      </div>
      <div className="embed-card">
        <h3>Instagram Feed</h3>
        <div className="insta-fallback">
          {socials.filter(s => s.name === "Instagram" || s.name === "YouTube" || s.name === "Facebook").map(({ name, handle, url, color }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" style={{ "--social": color } as React.CSSProperties}>
              <b><SocialIcon name={name} /></b><span>{name}</span><small>{handle}</small><ExternalLink size={14} />
            </a>
          ))}
        </div>
        <p className="source-note">Live social path: follow @revbakama on Instagram and the Facebook page for current photos, announcements, and service clips.</p>
      </div>
    </div>
  );
}

export function SermonFilter() {
  const [q, setQ] = useState("");
  const filtered = sermons.filter((s) => `${s.title} ${s.speaker} ${s.category}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <label className="search-box"><Search size={18} /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search teachings, speaker, category" /></label>
      <div className="sermon-grid">{filtered.map((sermon) => <SermonCard key={sermon.videoId + sermon.title} sermon={sermon} featured={sermon.featured} />)}</div>
    </>
  );
}
