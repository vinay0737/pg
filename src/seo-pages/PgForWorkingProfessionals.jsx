import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './seo-pages.css';

const FAQS = [
  {
    q: 'Is Rajendra PG good for IT professionals in Navi Mumbai?',
    a: 'Yes. The PG is 3 minutes from Kharghar metro station, has high-speed WiFi, AC rooms, 24-hour check-in, and is close to CBD Belapur and other IT hubs via metro.',
  },
  {
    q: 'Does the PG have WiFi suitable for work from home?',
    a: 'Yes. High-speed WiFi is available across all floors of the PG — ideal for professionals who work remotely or need to stay connected after office hours.',
  },
  {
    q: 'Is 24-hour check-in available for professionals with late shifts?',
    a: 'Yes. Check-in is available 24 hours (8 AM to 8 AM cycle). This makes it suitable for professionals with rotating or late-night shifts.',
  },
  {
    q: 'Are there single rooms available for working professionals?',
    a: 'Yes. Single occupancy rooms are available at ₹9,000/month per person with attached washroom, cupboard, AC, and all amenities.',
  },
  {
    q: 'Is there parking for professionals who drive to work?',
    a: 'Yes. Car and two-wheeler parking is available on the premises at no extra cost.',
  },
];

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rajendrahomestay.in/" },
    { "@type": "ListItem", "position": 2, "name": "PG in Kharghar", "item": "https://rajendrahomestay.in/pg-in-kharghar" },
    { "@type": "ListItem", "position": 3, "name": "PG for Working Professionals", "item": "https://rajendrahomestay.in/pg-for-working-professionals" }
  ]
};

function FAQ({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`seo-faq-item${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="seo-faq-q">
        <span>{q}</span>
        <span className="seo-faq-arrow">{open ? '▲' : '▼'}</span>
      </div>
      {open && <div className="seo-faq-a">{a}</div>}
    </div>
  );
}

export default function PgForWorkingProfessionals() {
  return (
    <div className="seo-page">
      <Helmet>
        <title>PG for Working Professionals in Kharghar | AC · WiFi · Metro Access — Rajendra Homestay</title>
        <meta name="description" content="PG for working professionals in Kharghar, Navi Mumbai. AC rooms, high-speed WiFi, 24hr check-in, 3 min from metro. Single ₹9,000/month. No brokerage. Call +91 89994 22873." />
        <meta name="keywords" content="PG for working professionals Kharghar, PG for IT professionals Navi Mumbai, PG for employees Kharghar, professional PG Navi Mumbai, PG with WiFi Kharghar, AC PG for professionals Navi Mumbai, PG near office Kharghar, PG Belapur Kharghar, working professional accommodation Kharghar, PG for bachelors Kharghar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rajendrahomestay.in/pg-for-working-professionals" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/pg-for-working-professionals" />
        <meta property="og:title" content="PG for Working Professionals in Kharghar | AC · WiFi · Metro Access" />
        <meta property="og:description" content="Modern PG for IT and corporate professionals in Kharghar. 3 min metro, WiFi, AC, 24hr check-in. From ₹5,000/month. No brokerage." />
        <meta property="og:image" content="https://rajendrahomestay.in/single_room/1.jpg" />

        <script type="application/ld+json">{JSON.stringify(PAGE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg" style={{ backgroundImage: 'url(/single_room/1.jpg)' }} />
        <div className="seo-hero-overlay" />
        <div className="seo-container seo-hero-content">
          <span className="seo-eyebrow">Ideal for IT &amp; Corporate Professionals — Kharghar, Navi Mumbai</span>
          <h1>PG for Working Professionals in Kharghar — WiFi · AC · Metro</h1>
          <p className="seo-hero-lead">
            Built for the modern professional. Rajendra Homestay in Sector 12, Kharghar offers AC rooms with high-speed WiFi, 24-hour check-in, parking, and a 3-minute walk to Kharghar metro — everything you need for a stress-free work life.
          </p>
          <div className="seo-hero-chips">
            <span>📶 High-Speed WiFi</span>
            <span>🚇 3 min to Metro</span>
            <span>🕐 24hr Check-In</span>
            <span>🚗 Free Parking</span>
          </div>
          <div className="seo-hero-btns">
            <a href="/#contact" className="seo-btn-gold">Book a Visit</a>
            <a href="tel:+918999422873" className="seo-btn-ghost">📞 Call Owner</a>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="seo-breadcrumb" aria-label="Breadcrumb">
        <div className="seo-container">
          <Link to="/">Home</Link> <span>›</span>
          <Link to="/pg-in-kharghar">PG in Kharghar</Link> <span>›</span>
          <span>PG for Working Professionals</span>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <section className="seo-section seo-intro">
        <div className="seo-container seo-two-col">
          <div className="seo-main-content">
            <h2>Why Working Professionals Choose Rajendra PG in Kharghar</h2>
            <p>
              For working professionals in Navi Mumbai, choosing the right PG can significantly impact your quality of life. Rajendra Homestay in <strong>Sector 12, Kharghar</strong> has been the preferred choice for IT professionals, bank employees, healthcare workers, and corporate executives — thanks to its unbeatable combination of metro access, modern amenities, and zero brokerage.
            </p>
            <p>
              Whether you work in CBD Belapur, Nerul, Vashi, or commute to Mumbai via the metro, our PG's location puts you right where you need to be — without the premium price.
            </p>

            <h2>Why This PG Works for Professionals</h2>
            <ul className="seo-feature-list">
              <li>🚇 <strong>3 min to Kharghar Gaon Metro</strong> — reach CBD Belapur in 10 min, Nerul in 15 min</li>
              <li>📶 <strong>High-speed WiFi</strong> — fast, reliable internet for WFH days</li>
              <li>🕐 <strong>24-hour check-in</strong> — no restrictions on late arrivals or early departures</li>
              <li>❄️ <strong>AC rooms</strong> — rest properly and wake up fresh for work</li>
              <li>🚗 <strong>Free parking</strong> — car and 2-wheeler on premises</li>
              <li>🍳 <strong>Common kitchen</strong> — cook meals and save on food costs</li>
              <li>🧹 <strong>Housekeeping</strong> — focus on work, not cleaning</li>
              <li>📹 <strong>CCTV security</strong> — peace of mind even during late-night returns</li>
            </ul>

            <h2>Room Options for Working Professionals</h2>
            <p>Choose the room type that matches your budget and privacy preferences:</p>
            <div className="seo-price-grid">
              {[
                { type: 'Single Occupancy (Most Private)', price: '₹9,000', note: '/month', highlight: false },
                { type: 'Double Sharing', price: '₹6,500', note: '/month per person', highlight: false },
                { type: 'Triple Sharing (Best Value)', price: '₹5,000', note: '/month per person', highlight: true },
                { type: 'AC Dormitory', price: '₹5,500–₹7,500', note: '/bed/month', highlight: false },
                { type: 'Girls Room (AC)', price: '₹5,500–₹6,500 + GST', note: '/month', highlight: false },
              ].map((r, i) => (
                <div key={i} className={`seo-price-row${r.highlight ? ' highlighted' : ''}`}>
                  <span className="seo-price-type">
                    {r.highlight && <span className="seo-best-badge">★</span>}
                    {r.type}
                  </span>
                  <span className="seo-price-val">{r.price}<span className="seo-price-note"> {r.note}</span></span>
                </div>
              ))}
            </div>

            <h2>Commute from Rajendra PG to Major Business Hubs</h2>
            <div className="seo-transport-grid">
              {[
                { icon: '🏙️', name: 'CBD Belapur', dist: '~10 min', note: 'Metro Line 1' },
                { icon: '🏙️', name: 'Nerul', dist: '~15 min', note: 'Metro Line 1' },
                { icon: '🏙️', name: 'Vashi', dist: '~25 min', note: 'Metro + bus' },
                { icon: '🚇', name: 'Kharghar Metro', dist: '3 min walk', note: 'Navi Mumbai Metro Line 1' },
                { icon: '🚌', name: 'Bus Stand', dist: '3 min walk', note: 'NMMT & BEST buses' },
                { icon: '🏥', name: 'Vedanta Hospital', dist: 'Nearby', note: 'For medical staff' },
              ].map((t, i) => (
                <div key={i} className="seo-transport-card">
                  <span className="seo-transport-icon">{t.icon}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span className="seo-transport-dist">{t.dist}</span>
                    <span className="seo-transport-note">{t.note}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2>What Professionals Say About Living Here</h2>
            <p>
              Our PG has residents from a variety of professional backgrounds — software engineers, banking professionals, healthcare workers, and government employees. The combination of metro proximity, clean rooms, no-broker dealings, and a secure gated environment makes it a practical and comfortable home base.
            </p>
            <p>
              With a 1-month notice period (no lock-in pressure), professionals who are still settling in Navi Mumbai or on short-term contracts find our flexible terms especially appealing.
            </p>

            <h2>Direct Owner Contact — No Middlemen</h2>
            <p>
              All interactions are directly with owner <strong>Rajendra Narayan Gulhane</strong> — no property managers, no agents, no commission. This means faster responses, transparent terms, and no inflated rents. Call or WhatsApp: <a href="tel:+918999422873" style={{color:'#c9a84c'}}>+91 89994 22873</a>.
            </p>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="seo-sidebar">
            <div className="seo-cta-box">
              <div className="seo-cta-badge">💼 Working Professionals</div>
              <h3>PG Near Your Office</h3>
              <p>WiFi · AC · Metro Access. No brokerage.</p>
              <a href="tel:+918999422873" className="seo-btn-gold seo-btn-block">📞 +91 89994 22873</a>
              <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20a%20working%20professional%20looking%20for%20PG%20in%20Kharghar"
                 target="_blank" rel="noreferrer" className="seo-btn-wa seo-btn-block">💬 WhatsApp Now</a>
              <div className="seo-cta-addr">
                <strong>📍 Address</strong>
                <p>Plot No. G49, Row House, Sector 12, Near Vedanta Hospital, Kharghar, Navi Mumbai — 410210</p>
              </div>
            </div>
            <div className="seo-quick-facts">
              <h4>Professional Essentials</h4>
              {[
                ['WiFi', 'High-Speed, All Floors'],
                ['Check-In', '24 Hours'],
                ['Metro', '3 min walk'],
                ['Parking', 'Free (Car + 2W)'],
                ['AC', 'All Room Types'],
                ['Brokerage', 'Zero'],
                ['Notice Period', '1 Month'],
              ].map(([k, v]) => (
                <div key={k} className="seo-fact-row">
                  <span className="seo-fact-key">{k}</span>
                  <span className="seo-fact-val">{v}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="seo-section seo-faq-section">
        <div className="seo-container">
          <h2 className="seo-section-title">FAQs — PG for Working Professionals in Kharghar</h2>
          <div className="seo-faq-list">
            {FAQS.map((f, i) => <FAQ key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="seo-section seo-related">
        <div className="seo-container">
          <h2 className="seo-section-title">Related Pages</h2>
          <div className="seo-related-grid">
            <Link to="/pg-in-kharghar" className="seo-related-card">
              <span className="src-icon">🏠</span>
              <strong>PG in Kharghar</strong>
              <p>All room types &amp; pricing</p>
            </Link>
            <Link to="/pg-near-kharghar-metro" className="seo-related-card">
              <span className="src-icon">🚇</span>
              <strong>PG Near Kharghar Metro</strong>
              <p>3 min walk from metro</p>
            </Link>
            <Link to="/furnished-pg-kharghar" className="seo-related-card">
              <span className="src-icon">🛋️</span>
              <strong>Furnished PG Kharghar</strong>
              <p>Move in ready rooms</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}