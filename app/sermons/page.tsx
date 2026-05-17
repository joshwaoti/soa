import { Hero, SermonFilter } from "../../components/soa";
import { heroImages } from "../../lib/content";

export default function SermonsPage() {
  return (
    <>
      <Hero eyebrow="Media and Sermons" title={<>Watch, search, and <em>discover</em>.</>} copy="A living media center for SOA teachings, Sunday service moments, prophetic declarations, and broadcast clips from the church's own social channels." image={heroImages.worshipBand} portraitImage={heroImages.freedom} imagePosition="center 18%" portraitPosition="center 12%" primary={{ label: "Open YouTube", href: "https://www.youtube.com/results?search_query=Rev+B+Akama+Sound+of+Abundance" }} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Sermon library</span>
          <h2 className="section-title">Teachings from the SOA media footprint.</h2>
          <div className="rule" />
          <SermonFilter />
        </div>
      </section>
    </>
  );
}
