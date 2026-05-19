import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Hero, SermonCard, SocialEmbeds, StatsRow, ScrollReveal } from "../components/soa";
import { heroImages, ministries, ORG, resources, sermons, testimonials } from "../lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Welcome to The Lord City"
        title={<>A home for <em>miracles</em>, deliverance, and abundance.</>}
        copy={ORG.vision}
        image={heroImages.worship}
        portraitImage={heroImages.pastor}
        imagePosition="center 16%"
        portraitPosition="center 8%"
        primary={{ label: "Watch Live", href: "/sermons" }}
        secondary={{ label: "Plan a Visit", href: "/connect" }}
      />
      <section className="live-strip">
        <div className="container">
          <div className="live-left"><span className="live-dot" /><span className="eyebrow">Live service strip</span><span>Next Sunday services: 8:30 AM and 11:00 AM EAT.</span></div>
          <Link className="btn" href="/sermons">Open Media Center <ArrowRight size={15} /></Link>
        </div>
      </section>
      <section className="section">
        <div className="container"><StatsRow /></div>
      </section>
      <section className="section panel">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Featured content</span>
            <h2 className="section-title">Sermons and prophetic teachings sit at the center.</h2>
            <div className="rule" />
          </ScrollReveal>
          <div className="sermon-grid">{sermons.filter((s) => s.featured).slice(0, 3).map((sermon) => <SermonCard key={sermon.videoId} sermon={sermon} featured />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Ministry arms</span>
          <h2 className="section-title">Six doors into the life of SOA.</h2>
          <div className="rule" />
          <div className="grid ministry-grid">
            {ministries.map((item) => <article className="card ministry-card with-image" key={item.name}><div className="card-img"><Image src={item.image} alt={`${item.name} at Sound of Abundance`} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectPosition: item.position }} /></div><span className="num">{item.numeral}</span><h3>{item.name}</h3><p className="muted">{item.description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section panel">
        <div className="container">
          <div className="quote">
            <blockquote>{testimonials[0].quote}</blockquote>
            <cite>{testimonials[0].by}</cite>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Socials section</span>
          <h2 className="section-title">Facebook and Instagram presence, with YouTube one tap away.</h2>
          <div className="rule" />
          <SocialEmbeds />
        </div>
      </section>
      <section className="section panel">
        <div className="container">
          <span className="eyebrow">Books and resources</span>
          <h2 className="section-title">Teachings, broadcast resources, and church updates.</h2>
          <div className="rule" />
          <div className="resource-grid">
            {resources.map((item) => (
              <article className="resource-card" key={item.title}>
                <div className="resource-img"><Image src={item.image} alt={`${item.title} resource`} fill sizes="(max-width: 760px) 100vw, 25vw" style={{ objectPosition: item.position }} /></div>
                <div><span className="tag">{item.type}</span><h3>{item.title}</h3><p className="muted">{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card">
            <span className="eyebrow">Receive the Word Directly</span>
            <h2 className="section-title">Weekly prophetic updates.</h2>
            <form className="footer-form" style={{ maxWidth: 560, marginTop: 24 }}>
              <input aria-label="Email" type="email" placeholder="your@email.com" />
              <button>Receive</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
