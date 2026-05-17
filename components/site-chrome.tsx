"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ministries, ORG, routeMeta, socials } from "../lib/content";
import { PageLoader } from "./page-loader";
import { SocialIcon } from "./social-icon";

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const isLight = resolvedTheme === "light";
  return (
    <button className="icon-btn" aria-label="Toggle theme" onClick={() => setTheme(isLight ? "dark" : "light")}>
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <header className="nav">
        <Link href="/" className="brand" aria-label="Sound of Abundance home">
          <span>SOA</span><i>The Lord City</i>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {routeMeta.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeButton />
          <Link className="btn live nav-live" href="/sermons"><span className="live-dot" /> Watch Live</Link>
          <button className="icon-btn mobile-only" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={20} /></button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="icon-btn close" aria-label="Close menu" onClick={() => setOpen(false)}><X /></button>
            {routeMeta.map((item, index) => (
              <motion.div key={item.href} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.06 }}>
                <Link href={item.href}>{item.label}</Link>
              </motion.div>
            ))}
            <div className="mobile-socials">
              {socials.slice(0, 3).map(({ name, url }) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><SocialIcon name={name} /></a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">SOUND OF ABUNDANCE</div>
          <p className="font-display footer-tagline">{ORG.tagline}</p>
          <p className="muted">{ORG.location}<br />{ORG.email}</p>
        </div>
        <div>
          <h3>Navigate</h3>
          {routeMeta.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Ministries</h3>
          {ministries.slice(0, 5).map((item) => <Link key={item.name} href="/ministries">{item.name}</Link>)}
        </div>
        <div>
          <h3>Receive</h3>
          <p className="muted">Get weekly prophetic updates and service notices.</p>
          <form className="footer-form">
            <input aria-label="Email address" placeholder="your@email.com" type="email" />
            <button aria-label="Join newsletter">Join</button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Sound of Abundance Church International. All rights reserved.</span>
        <span>soundofabundance.org</span>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
      <PageLoader />
      <Nav />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
