import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './seo-pages.css';

const FAQS = [
  {
    q: 'How far is Rajendra PG from Kharghar metro station?',
    a: 'Rajendra PG is just a 3-minute walk from Kharghar Gaon Metro Station on the Navi Mumbai Metro Line 1. No auto or cab required for your daily commute.',
  },
  {
    q: 'Which metro line connects Kharghar metro station?',
    a: 'Kharghar station is on the Navi Mumbai Metro Line 1 (Belapur to Pendhar). It connects to major business hubs including CBD Belapur, Nerul, and beyond.',
  },
  {
    q: 'Is the PG near any bus routes in Kharghar?',
    a: 'Yes. The Nimisha Chowk and Shilpa Chowk bus stands are just 3 minutes walk from the PG. Multiple NMMT and BEST bus routes operate from here.',
  },
  {
    q: 'Is the PG suitable for daily office commuters?',
    a: 'Absolutely. The 24-hour check-in, metro access, WiFi, AC rooms, and nearby food options make it ideal for IT professionals and office-goers commuting across Navi Mumbai.',
  },
  {
    q: 'What is the rent for PG near Kharghar metro?',
    a: 'Rooms start from ₹5,000/month for triple sharing. Double sharing is ₹6,500/month, single occupancy ₹9,000/month, and dormitory beds from ₹5,500/month. Girls rooms from ₹5,500+GST/month.',
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
    { "@type": "ListItem", "position": 3, "name": "PG Near Kharghar Metro", "item": "https://rajendrahomestay.in/pg-near-kharghar-metro" }
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

export default function PgNearKhargharMetro() {
  return (
    <div className="seo-page">
      <Helmet>
        <title>PG Near Kharghar Metro Station | 3 Min Walk — Rajendra Homestay</title>
        <meta name="description" content="PG just 3 minutes walk from Kharghar Gaon Metro Station, Navi Mumbai. AC rooms from ₹5,000/month. Girls & gents. WiFi, CCTV, parking. No brokerage. Owner: +91 89994 22873." />
        <meta name="keywords" content="PG near Kharghar metro, PG near Kharghar metro station, PG near Kharghar Gaon metro, paying guest near Kharghar metro, PG near Navi Mumbai metro, accommodation near Kharghar metro, PG walking distance metro Kharghar, hostel near Kharghar metro, PG close to metro Navi Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rajendrahomestay.in/pg-near-kharghar-metro" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/pg-near-kharghar-metro" />
        <meta property="og:title" content="PG Near Kharghar Metro Station | 3 Min Walk — From ₹5,000/Month" />
        <meta property="og:description" content="PG just 3 min from Kharghar Gaon Metro. AC rooms, WiFi, CCTV, parking. No brokerage. Call +91 89994 22873." />
        <meta property="og:image" content="https://rajendrahomestay.in/common_area/GR2-228455-1256389.jpg" />

        <script type="application/ld+json">{JSON.stringify(PAGE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg" style={{ backgroundImage: 'url(/common_area/GR2-228455-1256389.jpg)' }} />
        <div className="seo-hero-overlay" />
        <div className="seo-container seo-hero-content">
          <span className="seo-eyebrow">3 Minutes Walk from Kharghar Gaon Metro Station</span>
          <h1>PG Near Kharghar Metro Station — No Commute Stress</h1>
          <p className="seo-hero-lead">
            Commuting from your PG should be effortless. Rajendra Homestay in Sector 12, Kharghar is just a 3-minute walk from Kharghar Gaon Metro Station — saving you time, money, and daily travel hassle.
          </p>
          <div className="seo-hero-chips">
            <span>🚇 3 min to Metro</span>
            <span>🚌 3 min to Bus Stand</span>
            <span>❄️ AC Rooms</span>
            <span>💰 From ₹5,000/mo</span>
          </div>
          <div className="seo-hero-btns">
            <a href="/#contact" className="seo-btn-gold">Book a Visit</a>
            <a href="https://maps.google.com/?q=Plot+G49+Row+House+Near+Vedanta+Hospital+Sector+12+Kharghar+Navi+Mumbai"
               target="_blank" rel="noreferrer" className="seo-btn-ghost">📍 Open in Maps</a>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="seo-breadcrumb" aria-label="Breadcrumb">
        <div className="seo-container">
          <Link to="/">Home</Link> <span>›</span>
          <Link to="/pg-in-kharghar">PG in Kharghar</Link> <span>›</span>
          <span>PG Near Kharghar Metro</span>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <section className="seo-section seo-intro">
        <div className="seo-container seo-two-col">
          <div className="seo-main-content">
            <h2>Why Location Matters — Choose a PG Near Kharghar Metro</h2>
            <p>
              When choosing a PG accommodation, proximity to public transport can make or break your daily routine. A PG near Kharghar metro means no more waiting for autos, no expensive Ola/Uber rides, and no sweating through long walks with a backpack.
            </p>
            <p>
              <strong>Rajendra Homestay at Plot G49, Sector 12, Kharghar</strong> is located just a <strong>3-minute walk from Kharghar Gaon Metro Station</strong>. Whether you work in CBD Belapur, Nerul, Airoli, or travel towards Mumbai, the metro puts you right in the thick of Navi Mumbai's connectivity network.
            </p>

            <h2>Transport Connectivity from Our PG</h2>
            <div className="seo-transport-grid">
              {[
                { icon: '🚇', name: 'Kharghar Gaon Metro Station', dist: '3 minutes walk', note: 'Navi Mumbai Metro Line 1' },
                { icon: '🚌', name: 'Nimisha Chowk Bus Stand', dist: '3 minutes walk', note: 'NMMT & BEST buses' },
                { icon: '🚌', name: 'Shilpa Chowk Bus Stand', dist: '3 minutes walk', note: 'Inter-sector connectivity' },
                { icon: '🏙️', name: 'CBD Belapur', dist: '~10 minutes', note: 'Via metro' },
                { icon: '🏙️', name: 'Nerul', dist: '~15 minutes', note: 'Via metro' },
                { icon: '🏙️', name: 'Vashi / Turbhe', dist: '~25 minutes', note: 'Via metro/bus' },
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

            <h2>Ideal for Working Professionals in Navi Mumbai</h2>
            <p>
              Kharghar is home to a growing number of IT parks, corporate offices, and business hubs. If you work in CBD Belapur, Nerul, Airoli, or anywhere connected to Navi Mumbai Metro Line 1, living in a PG near Kharghar metro is the most practical choice.
            </p>
            <p>
              Our residents include software engineers, bank employees, healthcare workers from Vedanta Hospital, and professionals working across Navi Mumbai. The daily commute from our PG takes under 10 minutes to most business zones.
            </p>

            <h2>Room Types Available — PG Near Kharghar Metro</h2>
            <p>Choose from a variety of room options — all within 3 minutes of Kharghar metro:</p>
            <div className="seo-price-grid">
              {[
                { type: 'Triple Sharing', price: '₹5,000', note: '/month per person' },
                { type: 'Double Sharing', price: '₹6,500', note: '/month per person' },
                { type: 'Single Occupancy', price: '₹9,000', note: '/month per person' },
                { type: 'AC Dormitory', price: '₹5,500–₹7,500', note: '/bed/month' },
                { type: 'Girls Room (AC)', price: '₹5,500–₹6,500 + GST', note: '/month' },
                { type: 'Family Room', price: '₹1,200', note: '/day' },
              ].map((r, i) => (
                <div key={i} className="seo-price-row">
                  <span className="seo-price-type">{r.type}</span>
                  <span className="seo-price-val">{r.price}<span className="seo-price-note"> {r.note}</span></span>
                </div>
              ))}
            </div>

            <h2>Amenities Included</h2>
            <ul className="seo-feature-list">
              <li>✓ High-speed WiFi — work from your room between shifts</li>
              <li>✓ AC rooms — rest comfortably after long commutes</li>
              <li>✓ Attached washroom in all rooms</li>
              <li>✓ Common kitchen (separate for girls and gents)</li>
              <li>✓ 24/7 CCTV and gated security</li>
              <li>✓ Car and two-wheeler parking on premises</li>
              <li>✓ RO water and housekeeping service</li>
              <li>✓ Breakfast &amp; food joints within walking distance</li>
            </ul>

            <h2>Nearby Landmarks &amp; Essentials</h2>
            <p>Beyond great metro access, the neighbourhood itself is very well set up for daily life:</p>
            <ul className="seo-feature-list">
              <li>🌳 Gaondevi Udyaan garden — 1 min walk (perfect for morning walks)</li>
              <li>🏋️ Gym — 1 min walk</li>
              <li>🍽️ Breakfast hotels &amp; restaurants — walking distance</li>
              <li>🛕 Iskcon Mandir &amp; Central Park — 7 min walk</li>
              <li>🏥 Vedanta Hospital — nearby (ideal for medical staff)</li>
              <li>🎓 Lokmanya Tilak College — nearby</li>
            </ul>

            <h2>Contact the Owner Directly — No Agents</h2>
            <p>
              Book your room near Kharghar metro directly through owner <strong>Rajendra Narayan Gulhane</strong>. Call or WhatsApp on <a href="tel:+918999422873" style={{color:'#c9a84c'}}>+91 89994 22873</a>. No brokerage, no middlemen — just transparent pricing and direct communication.
            </p>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="seo-sidebar">
            <div className="seo-cta-box">
              <h3>3 Min to Metro</h3>
              <p>Book a room near Kharghar metro — talk directly to the owner.</p>
              <a href="tel:+918999422873" className="seo-btn-gold seo-btn-block">📞 +91 89994 22873</a>
              <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20looking%20for%20a%20PG%20near%20Kharghar%20metro"
                 target="_blank" rel="noreferrer" className="seo-btn-wa seo-btn-block">💬 WhatsApp Now</a>
              <a href="https://maps.google.com/?q=Plot+G49+Row+House+Near+Vedanta+Hospital+Sector+12+Kharghar+Navi+Mumbai"
                 target="_blank" rel="noreferrer" className="seo-btn-maps seo-btn-block">📍 View on Maps</a>
            </div>
            <div className="seo-quick-facts">
              <h4>Distance Summary</h4>
              {[
                ['Metro Station', '3 min walk'],
                ['Bus Stand', '3 min walk'],
                ['Garden', '1 min walk'],
                ['Gym', '1 min walk'],
                ['Hospital', 'Nearby'],
                ['College', 'Nearby'],
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
          <h2 className="seo-section-title">FAQs — PG Near Kharghar Metro</h2>
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
              <p>Exclusive floor for female residents</p>
            </Link>
            <Link to="/cheap-pg-navi-mumbai" className="seo-related-card">
              <span className="src-icon">💰</span>
              <strong>Cheap PG in Navi Mumbai</strong>
              <p>Budget rooms from ₹5,000/month</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}