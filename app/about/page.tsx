import { Hero } from "../../components/soa";
import Image from "next/image";
import { heroImages, ORG, socialImages } from "../../lib/content";

export default function AboutPage() {
  const timeline = [
    ["Kangundo Road", "The Lord City gathers opposite Saika Estate, serving Nairobi's fast-growing Eastlands corridor."],
    ["Broadcast era", "SOA TV, Facebook, Instagram, and YouTube expand the altar from Kangundo Road into a wider media ministry."],
    ["Today", "A prophetic, deliverance-focused community serves Nairobi Eastlands families through services, prayer, and counsel."]
  ];
  return (
    <>
      <Hero eyebrow="About SOA" title={<>The story of <em>The Lord City</em>.</>} copy="Authority and history told as a journey of prophetic calling, rooted in Kangundo Road and Nairobi Eastlands." image={heroImages.congregation} portraitImage={heroImages.leadership} imagePosition="center 18%" portraitPosition="center 8%" primary={{ label: "Meet us Sunday", href: "/connect" }} />
      <section className="section">
        <div className="container beliefs">
          <article className="card profile-card"><div className="profile-img"><Image src={socialImages.leadership} alt="Rev B Akama from SOA social media" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: "center 8%" }} /></div><span className="eyebrow">Leadership</span><h2 className="section-title">Rev. B. Akama</h2><p className="muted">Senior pastor and general overseer of Sound of Abundance Church International, leading a prophetic and deliverance-focused ministry from Kangundo Road, Nairobi.</p></article>
          <article className="card profile-card"><div className="profile-img"><Image src={socialImages.fbCongregation} alt="Sound of Abundance congregation" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: "center 18%" }} /></div><span className="eyebrow">Mandate</span><h2 className="section-title">Miracles. Deliverance. Prophetic help.</h2><p className="muted">{ORG.vision}</p></article>
        </div>
      </section>
      <section className="section panel">
        <div className="container">
          <span className="eyebrow">Timeline</span><h2 className="section-title">A ministry built around presence and broadcast.</h2><div className="rule" />
          <div className="timeline">{timeline.map(([year, text]) => <div className="timeline-item" key={year}><span className="timeline-year">{year}</span><span className="timeline-dot" /><p className="muted">{text}</p></div>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container beliefs">
          {[
            ["God", "SOA's ministry language centers on divine favor, Kingdom Business, and the God who brings deliverance."],
            ["Jesus Christ", "The altar call of the church points people toward salvation, healing, and victory in Jesus' name."],
            ["The Holy Spirit", "Prayer, prophecy, communion, and worship are presented as active works of the Spirit among the people."],
            ["The Bible", "Services and online teachings draw from Scripture for prayer, prosperity, deliverance, and daily victory."]
          ].map(([belief, text]) => <article className="card" key={belief}><span className="eyebrow">{belief}</span><p className="muted">{text}</p></article>)}
        </div>
      </section>
    </>
  );
}
