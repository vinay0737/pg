import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './seo-pages.css';

const FAQS = [
  {
    q: 'What is the cheapest PG in Navi Mumbai?',
    a: 'Rajendra Homestay in Kharghar offers triple-sharing rooms from ₹5,000/month per person and dormitory beds from ₹5,500/month — among the most affordable PG options in Navi Mumbai with AC, WiFi, and attached washrooms included.',
  },
  {
    q: 'Is there a daily-stay PG option in Navi Mumbai?',
    a: 'Yes. Our AC dormitory offers daily-stay at ₹500/day (calculated 8 AM to 8 AM). This is ideal for short-term visitors, interview candidates, or people between apartments.',
  },
  {
    q: 'Are there cheap PGs in Navi Mumbai with AC?',
    a: 'Yes. Our AC dormitory starts at ₹5,500/month and girls\' AC rooms start at ₹5,500+GST/month. Triple-sharing rooms at ₹5,000/month are also available with well-ventilated rooms.',
  },
  {
    q: 'What is included in the rent at budget PGs in Navi Mumbai?',
    a: 'At Rajendra PG, the rent includes cot, mattress, cupboard, attached washroom, WiFi, CCTV security, common kitchen access, RO water, and housekeeping. No hidden charges.',
  },
  {
    q: 'Is there a security deposit required for budget PG in Navi Mumbai?',
    a: 'Security deposit terms are discussed directly with the owner, Rajendra Gulhane. There are no agent fees or brokerage charges. Call +91 89994 22873 for details.',
  },
  {
    q: 'Which is the cheapest area for PG in Navi Mumbai?',
    a: 'Kharghar in Navi Mumbai offers some of the best value PG options. Rajendra Homestay in Sector 12, Kharghar starts from ₹5,000/month — close to metro, bus stand, food, and all daily essentials.',
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
    { "@type": "ListItem", "position": 3, "name": "Cheap PG Navi Mumbai", "item": "https://rajendrahomestay.in/cheap-pg-navi-mumbai" }
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

export default function CheapPgNaviMumbai() {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Cheap PG in Navi Mumbai | Budget PG from ₹5,000/Month — Rajendra Homestay Kharghar</title>
        <meta name="description" content="Cheapest PG in Navi Mumbai starting ₹5,000/month. AC rooms, WiFi, CCTV, no brokerage. Triple sharing ₹5,000, dormitory ₹5,500, daily stay ₹500/day. Sector 12, Kharghar. Call +91 89994 22873." />
        <meta name="keywords" content="cheap PG in Navi Mumbai, budget PG Navi Mumbai, affordable PG Navi Mumbai, cheap PG Kharghar, low cost PG Navi Mumbai, cheapest PG Navi Mumbai, PG under 6000 Navi Mumbai, budget PG Kharghar, cheap paying guest Navi Mumbai, daily PG Navi Mumbai, short stay PG Navi Mumbai, PG 5000 Navi Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rajendrahomestay.in/cheap-pg-navi-mumbai" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/cheap-pg-navi-mumbai" />
        <meta property="og:title" content="Cheap PG in Navi Mumbai | From ₹5,000/Month — Rajendra Homestay Kharghar" />
        <meta property="og:description" content="Affordable PG in Navi Mumbai from ₹5,000/month. AC rooms, WiFi, no brokerage. Daily stay ₹500/day. Kharghar, 3 min from metro." />
        <meta property="og:image" content="https://rajendrahomestay.in/single_room/4.jpg" />

        <script type="application/ld+json">{JSON.stringify(PAGE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg" style={{ backgroundImage: 'url(/single_room/4.jpg)' }} />
        <div className="seo-hero-overlay" />
        <div className="seo-container seo-hero-content">
          <span className="seo-eyebrow">Budget PG — Kharghar, Navi Mumbai</span>
          <h1>Cheap PG in Navi Mumbai — From ₹5,000/Month</h1>
          <p className="seo-hero-lead">
            Looking for a budget-friendly PG in Navi Mumbai without compromising on safety or comfort? Rajendra Homestay in Sector 12, Kharghar offers rooms from just ₹5,000/month — with AC, WiFi, CCTV, and direct metro access.
          </p>
          <div className="seo-hero-chips">
            <span>💰 From ₹5,000/mo</span>
            <span>🛏 No Brokerage</span>
            <span>❄️ AC Available</span>
            <span>📅 Daily Stay ₹500</span>
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
          <span>Cheap PG Navi Mumbai</span>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <section className="seo-section seo-intro">
        <div className="seo-container seo-two-col">
          <div className="seo-main-content">
            <h2>Affordable PG in Navi Mumbai — Quality Without Compromise</h2>
            <p>
              Navi Mumbai has long been a go-to destination for professionals and students looking for accommodation that's more affordable than Mumbai, yet equally well-connected. But finding a truly <strong>cheap PG in Navi Mumbai</strong> that doesn't sacrifice safety, cleanliness, or amenities can be tough.
            </p>
            <p>
              <strong>Rajendra Homestay in Sector 12, Kharghar</strong> is one of the most affordable PG options in Navi Mumbai — with rooms starting from ₹5,000/month per person, AC dormitory beds from ₹5,500/month, and even a daily-stay option at ₹500/day. And unlike many "cheap" PGs, we include WiFi, attached washroom, CCTV, and kitchen access as standard.
            </p>

            <h2>Complete Pricing — All Budget Options</h2>
            <p>Here's a full breakdown of our most affordable options:</p>
            <div className="seo-price-grid">
              {[
                { type: 'Triple Sharing', price: '₹5,000', note: '/month per person', highlight: true },
                { type: 'Double Sharing', price: '₹6,500', note: '/month per person', highlight: false },
                { type: 'Single Occupancy', price: '₹9,000', note: '/month per person', highlight: false },
                { type: 'Dorm — Standard', price: '₹5,500', note: '/bed/month', highlight: true },
                { type: 'Dorm — Premium', price: '₹6,500', note: '/bed/month', highlight: false },
                { type: 'Dorm — AC Single', price: '₹7,500', note: '/bed/month', highlight: false },
                { type: 'Dorm — Daily Stay', price: '₹500', note: '/day (8AM–8AM)', highlight: true },
                { type: 'Girls Room Standard', price: '₹5,500 + GST', note: '/month', highlight: true },
                { type: 'Girls Room Premium', price: '₹6,500 + GST', note: '/month', highlight: false },
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
            <p>★ = Best value budget options</p>

            <h2>What Makes This PG Budget-Friendly AND Good?</h2>
            <ul className="seo-feature-list">
              <li>✓ <strong>No broker charges</strong> — deal directly with owner, zero commission</li>
              <li>✓ <strong>No hidden costs</strong> — WiFi, water, kitchen use included in rent</li>
              <li>✓ <strong>Clean, maintained rooms</strong> — regular housekeeping service</li>
              <li>✓ <strong>Security included</strong> — 24/7 CCTV, gated entry, 11 PM gate close</li>
              <li>✓ <strong>AC rooms available</strong> — even at the lowest price tiers</li>
              <li>✓ <strong>Attached washrooms</strong> — no shared bathroom queues</li>
              <li>✓ <strong>Common kitchen</strong> — cook your own meals and save more</li>
            </ul>

            <h2>Daily Stay PG in Navi Mumbai — ₹500/Day</h2>
            <p>
              Our AC dormitory also offers a <strong>short-term daily-stay option at ₹500/day</strong> (8 AM to 8 AM). This is perfect for:
            </p>
            <ul className="seo-feature-list">
              <li>📋 Job interview candidates visiting Navi Mumbai for a day or two</li>
              <li>🏙️ People in-between apartments who need a temporary room</li>
              <li>👨‍👩‍👧 Outstation families visiting relatives for a short stay</li>
              <li>🏥 Medical attendants staying near Vedanta Hospital</li>
              <li>🎓 Students attending exams or coaching programs</li>
            </ul>

            <h2>Location — Cheap PG Near Kharghar Metro</h2>
            <p>
              Being affordable doesn't mean being far away. Our PG in Kharghar is located in <strong>Sector 12 — one of the best-connected sectors in Navi Mumbai</strong>. You're just 3 minutes from Kharghar Gaon Metro Station and bus stands, keeping your transport costs minimal too.
            </p>
            <ul className="seo-feature-list">
              <li>🚇 3 min walk to Kharghar Gaon Metro Station</li>
              <li>🚌 3 min walk to bus stand (Nimisha &amp; Shilpa Chowk)</li>
              <li>🍽️ Breakfast hotels &amp; dhabas within walking distance — save on food</li>
              <li>🌳 Gaondevi Udyaan garden — 1 min walk (free recreation)</li>
              <li>🏋️ Gym — 1 min walk</li>
            </ul>

            <h2>How to Save Even More</h2>
            <ul className="seo-feature-list">
              <li>💡 Opt for <strong>triple sharing</strong> — lowest cost at ₹5,000/person/month</li>
              <li>💡 Use the <strong>common kitchen</strong> to cook breakfast and dinner at home</li>
              <li>💡 Walk to the metro — save daily on autos and cabs</li>
              <li>💡 Pay directly via UPI to owner — zero brokerage, no agent fees</li>
            </ul>

            <h2>Trusted by Residents — Owner Direct</h2>
            <p>
              Rajendra PG is owner-listed — not managed by property agencies or middlemen. All pricing, availability, and terms are handled personally by <strong>Rajendra Narayan Gulhane</strong> at <a href="tel:+918999422873" style={{color:'#c9a84c'}}>+91 89994 22873</a>. This transparency keeps your costs low and communication direct.
            </p>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="seo-sidebar">
            <div className="seo-cta-box">
              <div className="seo-cta-badge">💰 Budget PG</div>
              <h3>From ₹5,000/Month</h3>
              <p>No agents. No brokerage. Talk directly to the owner.</p>
              <a href="tel:+918999422873" className="seo-btn-gold seo-btn-block">📞 +91 89994 22873</a>
              <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20looking%20for%20a%20budget%20PG%20in%20Navi%20Mumbai"
                 target="_blank" rel="noreferrer" className="seo-btn-wa seo-btn-block">💬 WhatsApp Now</a>
              <div className="seo-cta-addr">
                <strong>📍 Address</strong>
                <p>Plot No. G49, Row House, Sector 12, Near Vedanta Hospital, Kharghar, Navi Mumbai — 410210</p>
              </div>
            </div>
            <div className="seo-quick-facts">
              <h4>Budget Options</h4>
              {[
                ['Triple Sharing', '₹5,000/mo/person'],
                ['Dormitory', 'From ₹5,500/mo'],
                ['Daily Stay', '₹500/day'],
                ['Girls Room', '₹5,500+GST/mo'],
                ['Double Sharing', '₹6,500/mo'],
                ['Brokerage', '₹0 (None)'],
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
          <h2 className="seo-section-title">FAQs — Cheap PG in Navi Mumbai</h2>
          <div className="seo-faq-list">
            {FAQS.map((f, i) => <FAQ key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="seo-section seo-related">
        <div className="seo-container">
          <h2 className="seo-section-title">Explore More</h2>
          <div className="seo-related-grid">
            <Link to="/pg-in-kharghar" className="seo-related-card">
              <span className="src-icon">🏠</span>
              <strong>PG in Kharghar</strong>
              <p>All room types &amp; pricing</p>
            </Link>
            <Link to="/girls-pg-kharghar" className="seo-related-card">
              <span className="src-icon">👩</span>
              <strong>Girls PG in Kharghar</strong>
              <p>Dedicated floor for female residents</p>
            </Link>
            <Link to="/pg-near-kharghar-metro" className="seo-related-card">
              <span className="src-icon">🚇</span>
              <strong>PG Near Kharghar Metro</strong>
              <p>3 minutes from metro station</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}