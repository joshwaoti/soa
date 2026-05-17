import { Hero } from "../../components/soa";
import Image from "next/image";
import { heroImages, services } from "../../lib/content";

export default function EventsPage() {
  return (
    <>
      <Hero eyebrow="Events and services" title={<>Attend, RSVP, and <em>arrive ready</em>.</>} copy="A clear weekly schedule for Sunday worship, prophetic appointments, communion, and evening prayer." image={heroImages.serviceCard} portraitImage={heroImages.welcome} imagePosition="center 16%" portraitPosition="center 14%" primary={{ label: "Plan a Visit", href: "/connect" }} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Weekly rhythm</span><h2 className="section-title">Services listed from the PRD and public directory checks.</h2><div className="rule" />
          <div className="event-list">{services.map((s) => <article className="event-card" key={s.day + s.title}><div className="event-img"><Image src={s.image} alt={`${s.title} at Sound of Abundance`} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectPosition: s.position }} /></div><span className="tag">{s.day}</span><h3>{s.title}</h3><p className="paybill">{s.time}</p></article>)}</div>
        </div>
      </section>
    </>
  );
}
