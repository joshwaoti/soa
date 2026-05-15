import { Hero, LightBeams } from "../../components/soa";
import { heroImages, ministries } from "../../lib/content";

export default function MinistriesPage() {
  return (
    <>
      <Hero eyebrow="Ministry arms" title={<>Our <em>ministry</em> arms.</>} copy="Six ministry pathways from Sunday service to prophetic appointments, broadcast, communion, conferences, and prayer." image={heroImages.appointment} primary={{ label: "Join a Ministry", href: "/connect" }} />
      <section className="section panel" style={{ overflow: "hidden" }}>
        <LightBeams count={3} />
        <div className="container">
          <span className="eyebrow">Pillars</span><h2 className="section-title">Dynamic doors into prayer, worship, and broadcast.</h2><div className="rule" />
          <div className="grid ministry-grid">{ministries.map((item) => <article className="card ministry-card" key={item.name}><span className="num">{item.numeral}</span><h3>{item.name}</h3><p className="muted">{item.description}</p><a className="btn" href="/connect">Connect</a></article>)}</div>
        </div>
      </section>
    </>
  );
}
