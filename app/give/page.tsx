import { Hero } from "../../components/soa";
import { giving, heroImages } from "../../lib/content";

export default function GivePage() {
  return (
    <>
      <Hero eyebrow="Kingdom Business" title={<>Give and <em>partner</em>.</>} copy="Partner with the work of The Lord City through ministry support and SOA TV broadcast giving." image={heroImages.prophecy} portraitImage={heroImages.worshipClose} imagePosition="center 8%" portraitPosition="center 18%" primary={{ label: "See Paybills", href: "#mpesa" }} />
      <section className="section" id="mpesa">
        <div className="container">
          <span className="eyebrow">M-Pesa giving</span><h2 className="section-title">Clear routes for offering and SOA TV support.</h2><div className="rule" />
          <div className="giving-grid">{giving.map((g) => <article className="giving-card" key={g.paybill}><h3>{g.title}</h3><p className="muted">Paybill</p><div className="paybill">{g.paybill}</div><p className="muted">Account</p><div className="paybill">{g.account}</div></article>)}</div>
        </div>
      </section>
      <section className="section panel">
        <div className="container"><div className="quote"><blockquote>Through prosperity shall my cities be spread abroad.</blockquote><cite>Zechariah 1:17 framing from the brand dossier</cite></div></div>
      </section>
    </>
  );
}
