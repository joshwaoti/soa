import { Hero, SermonFilter } from "../../components/soa";
import { heroImages } from "../../lib/content";

export default function SermonsPage() {
  return (
    <>
      <Hero eyebrow="Media and Sermons" title={<>Watch, search, and <em>discover</em>.</>} copy="Verified YouTube IDs and original SOA broadcast thumbnails are used for the content library. Unverified items are labeled in the data source rather than invented." image={heroImages.freedom} primary={{ label: "Open YouTube", href: "https://www.youtube.com/results?search_query=Rev+B+Akama+Sound+of+Abundance" }} />
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
