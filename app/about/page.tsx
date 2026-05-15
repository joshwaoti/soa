import { Hero } from "../../components/soa";
import { heroImages, ORG } from "../../lib/content";

export default function AboutPage() {
  const timeline = [
    ["2015+", "The PRD references a decade of ministry while keeping the exact founding year marked for confirmation."],
    ["Broadcast era", "SOA TV and YouTube expand The Lord City from Kangundo Road into a broader media altar."],
    ["Today", "A prophetic, deliverance-focused community serves Nairobi Eastlands families through services, prayer, and counsel."]
  ];
  return (
    <>
      <Hero eyebrow="About SOA" title={<>The story of <em>The Lord City</em>.</>} copy="Authority and history told as a journey of prophetic calling, rooted in Kangundo Road and Nairobi Eastlands." image={heroImages.leadership} primary={{ label: "Meet us Sunday", href: "/connect" }} />
      <section className="section">
        <div className="container beliefs">
          <article className="card"><span className="eyebrow">Leadership</span><h2 className="section-title">Rev. B. Akama</h2><p className="muted">Senior pastor and general overseer of Sound of Abundance Church International. Public profiles describe him as the overseer of SOA in Nairobi, Kenya, located along Kangundo Road before Saika Stage.</p></article>
          <article className="card"><span className="eyebrow">Mandate</span><h2 className="section-title">Miracles. Deliverance. Prophetic help.</h2><p className="muted">{ORG.vision}</p></article>
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
          {["God", "Jesus Christ", "The Holy Spirit", "The Bible"].map((belief) => <article className="card" key={belief}><span className="eyebrow">{belief}</span><p className="muted">Core belief content should be confirmed with church administration before publishing detailed doctrine; this keeps the PRD structure without inventing statements.</p></article>)}
        </div>
      </section>
    </>
  );
}
