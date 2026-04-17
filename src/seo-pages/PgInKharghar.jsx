import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './seo-pages.css';

const FAQS = [
  {
    q: 'What is the monthly rent for PG in Kharghar?',
    a: 'Rajendra PG offers rooms starting from ₹5,000/month for triple sharing, ₹6,500/month for double sharing, and ₹9,000/month for single occupancy. Girls\' rooms start at ₹5,500+GST per month.',
  },
  {
    q: 'Is Rajendra PG suitable for working professionals?',
    a: 'Yes. We have 24-hour check-in, high-speed WiFi, AC rooms, and are located just 3 minutes from Kharghar metro station — ideal for IT professionals and corporate employees in Navi Mumbai.',
  },
  {
    q: 'Is food available at this PG in Kharghar?',
    a: 'There is a common kitchen with gas stove and cylinder. Multiple breakfast and food hotels are within walking distance from the PG.',
  },
  {
    q: 'What is the security arrangement at this PG?',
    a: '24/7 CCTV surveillance covers all floors. The gate closes at 11:00 PM every day for resident safety. The 1st floor is exclusively for female residents.',
  },
  {
    q: 'Is parking available at Rajendra PG?',
    a: 'Yes, both car and two-wheeler parking is available on the premises at no extra cost.',
  },
  {
    q: 'Is there a girls-only floor at this PG in Kharghar?',
    a: 'Yes. The entire 1st floor is exclusively reserved for female residents. Male residents are strictly not allowed on the girls\' floor.',
  },
  {
    q: 'What is the address of Rajendra PG in Kharghar?',
    a: 'Plot No. G49, Row House, Sector 12, Near Vedanta Hospital, Next to Anjali Pharma Cure, Kharghar, Navi Mumbai — 410210.',
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
    { "@type": "ListItem", "position": 2, "name": "PG in Kharghar", "item": "https://rajendrahomestay.in/pg-in-kharghar" }
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

export default function PgInKharghar() {
  return (
    <div className="seo-page">
      <Helmet>
        <title>PG in Kharghar | Affordable Rooms for Girls & Gents — Rajendra Homestay</title>
        <meta name="description" content="Best PG in Kharghar, Navi Mumbai. AC rooms from ₹5,000/month. Girls & gents. Single, double, triple sharing & dormitory. Sector 12, 3 min from metro. No brokerage. Call +91 89994 22873." />
        <meta name="keywords" content="PG in Kharghar, paying guest Kharghar, PG Kharghar Navi Mumbai, affordable PG Kharghar, AC PG Kharghar, girls PG Kharghar, boys PG Kharghar, PG Sector 12 Kharghar, PG accommodation Kharghar, best PG in Kharghar, PG near Kharghar station, PG for students Kharghar, PG for working professionals Kharghar, Rajendra PG Kharghar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rajendrahomestay.in/pg-in-kharghar" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/pg-in-kharghar" />
        <meta property="og:title" content="PG in Kharghar | Affordable AC Rooms — From ₹5,000/Month" />
        <meta property="og:description" content="Best PG in Kharghar, Navi Mumbai. AC rooms for girls & gents. 3 min from metro. No brokerage. Owner: Rajendra Gulhane +91 89994 22873." />
        <meta property="og:image" content="https://rajendrahomestay.in/exterior_view/GR2-228455-1085807.jpg" />

        <script type="application/ld+json">{JSON.stringify(PAGE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg" style={{ backgroundImage: 'url(/exterior_view/GR2-228455-1085807.jpg)' }} />
        <div className="seo-hero-overlay" />
        <div className="seo-container seo-hero-content">
          <span className="seo-eyebrow">Sector 12, Kharghar, Navi Mumbai</span>
          <h1>PG in Kharghar — Affordable Rooms for Girls &amp; Gents</h1>
          <p className="seo-hero-lead">
            Looking for a PG in Kharghar? Rajendra Homestay offers safe, modern, fully-furnished paying guest accommodation in Sector 12, Kharghar — with AC rooms, 24/7 CCTV, and direct owner contact. No brokerage. No agents.
          </p>
          <div className="seo-hero-chips">
            <span>📍 3 min from Metro</span>
            <span>❄️ AC Rooms</span>
            <span>👩 Girls Floor</span>
            <span>💰 From ₹5,000/mo</span>
          </div>
          <div className="seo-hero-btns">
            <a href="/#contact" className="seo-btn-gold">Book a Free Visit</a>
            <a href="/#rooms" className="seo-btn-ghost">View Room Prices</a>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="seo-breadcrumb" aria-label="Breadcrumb">
        <div className="seo-container">
          <Link to="/">Home</Link> <span aria-hidden="true">›</span> <span>PG in Kharghar</span>
        </div>
      </nav>

      {/* ── INTRO CONTENT ── */}
      <section className="seo-section seo-intro">
        <div className="seo-container seo-two-col">
          <div className="seo-main-content">
            <h2>Why Choose a PG in Kharghar?</h2>
            <p>
              Kharghar, located in Navi Mumbai, has emerged as one of the most sought-after residential areas for working professionals and students alike. With excellent metro connectivity, a growing IT and business hub, reputed colleges, and peaceful surroundings, the demand for quality PG accommodation in Kharghar has grown significantly.
            </p>
            <p>
              <strong>Rajendra PG — Sector 12, Kharghar</strong> is situated at Plot No. G49, Row House, right next to Anjali Pharma Cure and near Vedanta Hospital. Our PG in Kharghar offers affordable, clean, and secure rooms for both gents and ladies in a well-maintained 2-floor building with an open terrace on the 3rd floor.
            </p>

            <h2>Room Options &amp; Pricing</h2>
            <p>We understand that every resident has a different budget. That's why our PG in Kharghar offers a range of room types:</p>
            <div className="seo-price-grid">
              {[
                { type: 'Triple Sharing', price: '₹5,000', note: '/month per person' },
                { type: 'Double Sharing', price: '₹6,500', note: '/month per person' },
                { type: 'Single Occupancy', price: '₹9,000', note: '/month per person' },
                { type: 'AC Dormitory', price: '₹5,500–₹7,500', note: '/bed/month' },
                { type: 'Girls Room (Standard)', price: '₹5,500 + GST', note: '/month' },
                { type: 'Family Room', price: '₹1,200', note: '/day' },
              ].map((r, i) => (
                <div key={i} className="seo-price-row">
                  <span className="seo-price-type">{r.type}</span>
                  <span className="seo-price-val">{r.price}<span className="seo-price-note"> {r.note}</span></span>
                </div>
              ))}
            </div>
            <p>All rooms include cot, mattress, cupboard, and attached washroom. AC rooms are available across both floors.</p>

            <h2>Amenities at Our PG in Kharghar</h2>
            <p>We believe a good PG should feel like home. Our PG in Kharghar includes:</p>
            <ul className="seo-feature-list">
              <li>✓ High-speed WiFi across all floors</li>
              <li>✓ Air-conditioned rooms (AC available for all room types)</li>
              <li>✓ Separate common kitchen for girls and gents — gas stove &amp; cylinder</li>
              <li>✓ 24/7 CCTV surveillance on all floors and entry points</li>
              <li>✓ Regular housekeeping and room cleaning service</li>
              <li>✓ RO purified drinking water available 24/7</li>
              <li>✓ Car and two-wheeler parking on premises</li>
              <li>✓ Open terrace on the 3rd floor for fresh air and relaxation</li>
              <li>✓ Gated entry — gate closes at 11:00 PM every night</li>
              <li>✓ Gym located just 1 minute walk away</li>
            </ul>

            <h2>Location Advantages — PG in Sector 12, Kharghar</h2>
            <p>
              Our PG is strategically located in Sector 12, Kharghar — one of the best-connected sectors in Navi Mumbai. Here's why our location is a major advantage:
            </p>
            <ul className="seo-feature-list">
              <li>🚇 Kharghar Gaon Metro Station — just 3 minutes walk</li>
              <li>🚌 Nimisha &amp; Shilpa Chowk Bus Stand — 3 minutes walk</li>
              <li>🌳 Gaondevi Udyaan garden — 1 minute walk</li>
              <li>🏋️ Nearest gym — 1 minute walk</li>
              <li>🍽️ Multiple food &amp; breakfast restaurants within walking distance</li>
              <li>🛕 Iskcon Mandir &amp; Central Park — 7 minutes walk</li>
              <li>🎓 Lokmanya Tilak College — nearby</li>
            </ul>

            <h2>No Agents — Deal Directly with the Owner</h2>
            <p>
              One of the biggest advantages of choosing Rajendra PG is that you deal <strong>directly with the owner — Rajendra Narayan Gulhane</strong>. There are no brokers, no agents, and no hidden charges. What you see is what you pay.
            </p>
            <p>
              Payment is accepted via UPI (<strong>8999422873-2@ybl</strong>) or direct bank transfer to Bank of Maharashtra, A/c No: <strong>68023971562</strong>. Always pay the owner directly — beware of anyone posing as an agent for this PG.
            </p>

            <h2>House Rules at Our PG</h2>
            <p>
              To maintain a peaceful and safe environment for all residents, we follow a few simple house rules. Visitor entry is permitted. Non-vegetarian food is allowed. The gate closes at 11:00 PM. A 1-month written notice is required before vacating. Opposite-gender entry, smoking, drinking, and dealings with outside agents are strictly prohibited.
            </p>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="seo-sidebar">
            <div className="seo-cta-box">
              <h3>Book a Free Visit</h3>
              <p>Talk directly to owner Rajendra. No agents. No brokerage.</p>
              <a href="tel:+918999422873" className="seo-btn-gold seo-btn-block">📞 +91 89994 22873</a>
              <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20looking%20for%20PG%20in%20Kharghar"
                 target="_blank" rel="noreferrer" className="seo-btn-wa seo-btn-block">💬 WhatsApp Now</a>
              <div className="seo-cta-addr">
                <strong>📍 Address</strong>
                <p>Plot No. G49, Row House, Sector 12, Near Vedanta Hospital, Kharghar, Navi Mumbai — 410210</p>
              </div>
            </div>
            <div className="seo-quick-facts">
              <h4>Quick Facts</h4>
              {[
                ['Rooms', 'Single / Double / Triple / Dorm'],
                ['Price Range', '₹5,000 – ₹9,000/month'],
                ['For', 'Girls & Gents'],
                ['Check-In', '24 Hours (8 AM – 8 AM)'],
                ['Gate Close', '11:00 PM'],
                ['Notice Period', '1 Month'],
                ['Contact', '8999422873'],
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
          <h2 className="seo-section-title">Frequently Asked Questions — PG in Kharghar</h2>
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
            <Link to="/girls-pg-kharghar" className="seo-related-card">
              <span className="src-icon">👩</span>
              <strong>Girls PG in Kharghar</strong>
              <p>Exclusive 1st floor for female residents</p>
            </Link>
            <Link to="/pg-near-kharghar-metro" className="seo-related-card">
              <span className="src-icon">🚇</span>
              <strong>PG Near Kharghar Metro</strong>
              <p>3 minutes walk from metro station</p>
            </Link>
            <Link to="/cheap-pg-navi-mumbai" className="seo-related-card">
              <span className="src-icon">💰</span>
              <strong>Cheap PG in Navi Mumbai</strong>
              <p>Budget rooms from ₹5,000/month</p>
            </Link>
            <Link to="/pg-for-working-professionals" className="seo-related-card">
              <span className="src-icon">💼</span>
              <strong>PG for Working Professionals</strong>
              <p>WiFi · AC · Metro Access</p>
            </Link>
            <Link to="/furnished-pg-kharghar" className="seo-related-card">
              <span className="src-icon">🛋️</span>
              <strong>Furnished PG in Kharghar</strong>
              <p>Fully furnished AC rooms</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}