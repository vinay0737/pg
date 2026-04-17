import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './seo-pages.css';

const FAQS = [
  {
    q: 'Are rooms at Rajendra PG fully furnished?',
    a: 'Yes. Every room includes a cot, mattress, cupboard, and side table. Single rooms also have a geyser. AC is available across all room types. You just bring your clothes and move in.',
  },
  {
    q: 'Do furnished rooms at Rajendra PG have an attached washroom?',
    a: 'Yes. All furnished rooms have attached washrooms. No shared bathrooms — each room has its own attached toilet and bathroom.',
  },
  {
    q: 'What furniture is included in rooms at Rajendra PG?',
    a: 'Standard furnishings include: cot, mattress, cupboard, curtains, and a side table. Common kitchen includes gas stove and cylinder. WiFi and RO water are included in all rooms.',
  },
  {
    q: 'Can I move in immediately without buying furniture?',
    a: 'Yes. Rajendra PG is a move-in-ready furnished PG. You don\'t need to purchase or transport any furniture — everything is set up in the room from day one.',
  },
  {
    q: 'Are there furnished rooms for girls in Kharghar?',
    a: 'Yes. The entire 1st floor is reserved for female residents and has fully furnished AC rooms with curtains, cot, mattress, cupboard, and access to a dedicated girls-only kitchen.',
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
    { "@type": "ListItem", "position": 3, "name": "Furnished PG Kharghar", "item": "https://rajendrahomestay.in/furnished-pg-kharghar" }
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

export default function FurnishedPgKharghar() {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Furnished PG in Kharghar | Move-In Ready AC Rooms — Rajendra Homestay</title>
        <meta name="description" content="Fully furnished PG in Kharghar, Navi Mumbai. Cot, mattress, cupboard, AC, WiFi, attached washroom — all included. From ₹5,000/month. No brokerage. Call +91 89994 22873." />
        <meta name="keywords" content="furnished PG in Kharghar, fully furnished PG Kharghar, furnished room Kharghar, furnished accommodation Kharghar Navi Mumbai, move in ready PG Kharghar, PG with furniture Navi Mumbai, furnished hostel Kharghar, furnished paying guest Kharghar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rajendrahomestay.in/furnished-pg-kharghar" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/furnished-pg-kharghar" />
        <meta property="og:title" content="Furnished PG in Kharghar | Move-In Ready AC Rooms — From ₹5,000/Month" />
        <meta property="og:description" content="Fully furnished PG in Kharghar. Cot, mattress, cupboard, AC, attached washroom — everything included. No brokerage. 3 min from metro." />
        <meta property="og:image" content="https://rajendrahomestay.in/single_room/2.jpg" />

        <script type="application/ld+json">{JSON.stringify(PAGE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg" style={{ backgroundImage: 'url(/single_room/2.jpg)' }} />
        <div className="seo-hero-overlay" />
        <div className="seo-container seo-hero-content">
          <span className="seo-eyebrow">Move-In Ready — Sector 12, Kharghar</span>
          <h1>Furnished PG in Kharghar — Just Bring Your Clothes</h1>
          <p className="seo-hero-lead">
            Every room at Rajendra Homestay is fully furnished and move-in ready. Cot, mattress, cupboard, curtains, AC, WiFi, and attached washroom — all included from day one. No furniture shopping, no stress.
          </p>
          <div className="seo-hero-chips">
            <span>🛋️ Fully Furnished</span>
            <span>❄️ AC Rooms</span>
            <span>🚿 Attached Washroom</span>
            <span>💰 From ₹5,000/mo</span>
          </div>
          <div className="seo-hero-btns">
            <a href="/#contact" className="seo-btn-gold">Check Availability</a>
            <a href="tel:+918999422873" className="seo-btn-ghost">📞 Call Owner</a>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="seo-breadcrumb" aria-label="Breadcrumb">
        <div className="seo-container">
          <Link to="/">Home</Link> <span>›</span>
          <Link to="/pg-in-kharghar">PG in Kharghar</Link> <span>›</span>
          <span>Furnished PG Kharghar</span>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <section className="seo-section seo-intro">
        <div className="seo-container seo-two-col">
          <div className="seo-main-content">
            <h2>Fully Furnished PG in Kharghar — What's Included</h2>
            <p>
              When you move into Rajendra Homestay, your room is completely ready. No need to buy furniture, carry mattresses, or arrange appliances. We handle all of that so you can focus on settling into Navi Mumbai seamlessly.
            </p>
            <p>
              All rooms at our PG in Kharghar are furnished with everything you need for daily life — from sleeping to storage to hygiene.
            </p>

            <h2>Room-by-Room Furnishings</h2>
            <div className="seo-price-grid">
              {[
                { type: '🛏 Cot & Mattress', price: 'All rooms', note: '' },
                { type: '🗄️ Cupboard / Wardrobe', price: 'All rooms', note: '' },
                { type: '🌡️ Geyser', price: 'Single & double rooms', note: '' },
                { type: '❄️ Air Conditioning', price: 'All room types', note: '' },
                { type: '🪟 Curtains', price: 'All rooms (girls floor)', note: '' },
                { type: '🚿 Attached Washroom', price: 'All rooms', note: '' },
                { type: '📶 WiFi', price: 'All floors', note: '' },
                { type: '🚰 RO Water', price: '24/7 all floors', note: '' },
              ].map((r, i) => (
                <div key={i} className="seo-price-row">
                  <span className="seo-price-type">{r.type}</span>
                  <span className="seo-price-val" style={{color:'var(--text)', fontSize:'.88rem'}}>{r.price}</span>
                </div>
              ))}
            </div>

            <h2>Common Area Furnishings</h2>
            <ul className="seo-feature-list">
              <li>🍳 Common kitchen with gas stove &amp; cylinder (separate for girls &amp; gents)</li>
              <li>🌿 Open 3rd-floor terrace — seating and fresh air</li>
              <li>🧹 Regular housekeeping in rooms and common areas</li>
              <li>📹 CCTV cameras at all entry/exit points and floors</li>
              <li>🚗 Parking lot for cars and two-wheelers</li>
            </ul>

            <h2>Pricing — Furnished Rooms in Kharghar</h2>
            <p>All the room types below include full furnishings as listed above:</p>
            <div className="seo-price-grid">
              {[
                { type: 'Triple Sharing', price: '₹5,000', note: '/month per person', highlight: true },
                { type: 'Double Sharing', price: '₹6,500', note: '/month per person', highlight: false },
                { type: 'Single Occupancy', price: '₹9,000', note: '/month per person', highlight: false },
                { type: 'AC Dormitory', price: '₹5,500–₹7,500', note: '/bed/month', highlight: false },
                { type: 'Girls Room (Standard AC)', price: '₹5,500 + GST', note: '/month', highlight: false },
                { type: 'Girls Room (Premium AC)', price: '₹6,500 + GST', note: '/month', highlight: false },
                { type: 'Family Room', price: '₹1,200', note: '/day', highlight: false },
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

            <h2>Location — Furnished PG Near Kharghar Metro</h2>
            <p>
              Our furnished PG is in <strong>Sector 12, Kharghar</strong> — a location that makes daily life easy. Just 3 minutes walk from Kharghar Gaon Metro and bus stands, with restaurants, gardens, gym, and college all within walking distance.
            </p>
            <ul className="seo-feature-list">
              <li>🚇 Kharghar Gaon Metro — 3 min walk</li>
              <li>🚌 Bus Stand — 3 min walk</li>
              <li>🍽️ Food hotels &amp; restaurants — walking distance</li>
              <li>🌳 Gaondevi Udyaan garden — 1 min walk</li>
              <li>🏋️ Gym — 1 min walk</li>
            </ul>

            <h2>No Brokerage — Pay Owner Directly</h2>
            <p>
              All furnished rooms are directly rented by owner <strong>Rajendra Narayan Gulhane</strong>. No agents, no commission, no surprises. Call <a href="tel:+918999422873" style={{color:'#c9a84c'}}>+91 89994 22873</a> to check availability and book a visit.
            </p>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="seo-sidebar">
            <div className="seo-cta-box">
              <div className="seo-cta-badge">🛋️ Fully Furnished</div>
              <h3>Move-In Ready Rooms</h3>
              <p>Everything set up. Just bring your belongings.</p>
              <a href="tel:+918999422873" className="seo-btn-gold seo-btn-block">📞 +91 89994 22873</a>
              <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20looking%20for%20a%20furnished%20PG%20in%20Kharghar"
                 target="_blank" rel="noreferrer" className="seo-btn-wa seo-btn-block">💬 WhatsApp Now</a>
              <div className="seo-cta-addr">
                <strong>📍 Address</strong>
                <p>Plot No. G49, Row House, Sector 12, Near Vedanta Hospital, Kharghar, Navi Mumbai — 410210</p>
              </div>
            </div>
            <div className="seo-quick-facts">
              <h4>Furnishing Summary</h4>
              {[
                ['Cot & Mattress', '✓ All rooms'],
                ['Cupboard', '✓ All rooms'],
                ['AC', '✓ All room types'],
                ['Attached Washroom', '✓ All rooms'],
                ['WiFi', '✓ All floors'],
                ['Kitchen Access', '✓ Common'],
                ['Brokerage', '₹0'],
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
          <h2 className="seo-section-title">FAQs — Furnished PG in Kharghar</h2>
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
            <Link to="/girls-pg-kharghar" className="seo-related-card">
              <span className="src-icon">👩</span>
              <strong>Girls PG in Kharghar</strong>
              <p>Furnished rooms, exclusive floor</p>
            </Link>
            <Link to="/pg-for-working-professionals" className="seo-related-card">
              <span className="src-icon">💼</span>
              <strong>PG for Professionals</strong>
              <p>WiFi · AC · Metro Access</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}