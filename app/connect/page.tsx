import { Hero, SocialEmbeds } from "../../components/soa";
import { SocialIcon } from "../../components/social-icon";
import { heroImages, ORG, socials } from "../../lib/content";

export default function ConnectPage() {
  return (
    <>
      <Hero eyebrow="Connect" title={<>Prayer, visit info, and <em>socials</em>.</>} copy="Submit a prayer request, plan your visit to Kangundo Road, or follow the active SOA social platforms." image={heroImages.family} portraitImage={heroImages.children} imagePosition="center 12%" portraitPosition="center 12%" primary={{ label: "Send Prayer Request", href: "#prayer" }} />
      <section className="section" id="prayer">
        <div className="container contact-grid">
          <form className="card form">
            <span className="eyebrow">Digital altar</span>
            <input aria-label="Your name" placeholder="Your name" />
            <input aria-label="Phone or email" placeholder="Phone or email" />
            <textarea aria-label="Prayer request" placeholder="Prayer request" />
            <button className="btn primary" type="button">Submit Prayer Request</button>
          </form>
          <article className="card">
            <span className="eyebrow">Visit info</span>
            <h2 className="section-title">{ORG.location}</h2>
            <p className="muted">{ORG.phones.join(" - ")}<br />{ORG.email}</p>
            <iframe title="Sound of Abundance map" width="100%" height="260" style={{ border: 0 }} loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(ORG.publicListingAddress)}&output=embed`} />
          </article>
        </div>
      </section>
      <section className="section panel">
        <div className="container">
          <span className="eyebrow">Social constellation</span><h2 className="section-title">Follow the SOA media ecosystem.</h2><div className="rule" />
          <div className="insta-fallback">{socials.map(({ name, handle, url, color }) => <a key={name} href={url} target="_blank" rel="noreferrer" style={{ "--social": color } as React.CSSProperties}><b><SocialIcon name={name} /></b><span>{name}</span><small>{handle}</small></a>)}</div>
        </div>
      </section>
      <section className="section"><div className="container"><SocialEmbeds /></div></section>
    </>
  );
}
