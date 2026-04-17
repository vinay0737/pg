import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './seo-pages.css';

const FAQS = [
  {
    q: 'Is there a separate floor for girls at Rajendra PG?',
    a: 'Yes. The entire 1st floor is exclusively reserved for female residents. Gents are strictly not allowed on the girls\' floor, ensuring complete privacy and safety.',
  },
  {
    q: 'What is the rent for girls PG in Kharghar?',
    a: 'Girls\' rooms start at ₹5,500+GST/month for a standard AC room and ₹6,500+GST/month for a premium AC room. Both options include a separate kitchen, CCTV, and curtained windows.',
  },
  {
    q: 'Is there a curfew for girls at this PG?',
    a: 'The main gate closes at 11:00 PM every night. There is no strict personal curfew, but residents are expected to be inside by gate-closing time for safety reasons.',
  },
  {
    q: 'Are kitchen facilities available for girls separately?',
    a: 'Yes. There is a dedicated kitchen for female residents on the 1st floor with a gas stove and cylinder. This is completely separate from the gents\' kitchen.',
  },
  {
    q: 'Can female visitors stay overnight?',
    a: 'Female visitors are permitted. Please inform the owner in advance for overnight guests. Male visitor entry to the girls\' floor is not permitted under any circumstances.',
  },
  {
    q: 'How safe is the girls PG in Kharghar?',
    a: '24/7 CCTV covers all floors and entry points. The 1st floor is exclusively for girls. The gate closes at 11 PM. The owner Rajendra Gulhane is available on-call for any safety concerns.',
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
    { "@type": "ListItem", "position": 3, "name": "Girls PG Kharghar", "item": "https://rajendrahomestay.in/girls-pg-kharghar" }
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

export default function GirlsPgKharghar() {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Girls PG in Kharghar | Safe AC Rooms — Exclusive 1st Floor | Rajendra Homestay</title>
        <meta name="description" content="Safe girls PG in Kharghar, Navi Mumbai. Entire 1st floor exclusively for female residents. AC rooms from ₹5,500+GST/month. Separate kitchen, CCTV, 3 min from metro. No brokerage. Call +91 89994 22873." />
        <meta name="keywords" content="girls PG in Kharghar, ladies PG Kharghar, female PG Kharghar, girls paying guest Kharghar, safe PG for girls Navi Mumbai, girls hostel Kharghar, girls accommodation Kharghar, women PG Kharghar, girls PG Sector 12 Kharghar, girls PG near Kharghar metro, ladies PG Navi Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rajendrahomestay.in/girls-pg-kharghar" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/girls-pg-kharghar" />
        <meta property="og:title" content="Girls PG in Kharghar | Safe, Private & Fully AC — From ₹5,500+GST" />
        <meta property="og:description" content="Dedicated 1st floor for female residents at Rajendra PG, Kharghar. AC rooms, separate kitchen, CCTV 24/7. No brokerage." />
        <meta property="og:image" content="https://rajendrahomestay.in/single_room/1.jpg" />

        <script type="application/ld+json">{JSON.stringify(PAGE_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="seo-hero">
        <div className="seo-hero-bg" style={{ backgroundImage: 'url(/single_room/1.jpg)' }} />
        <div className="seo-hero-overlay" />
        <div className="seo-container seo-hero-content">
          <span className="seo-eyebrow">1st Floor Exclusively for Female Residents</span>
          <h1>Girls PG in Kharghar — Safe, Private &amp; Fully AC</h1>
          <p className="seo-hero-lead">
            Searching for a girls PG in Kharghar? Rajendra Homestay offers a fully dedicated 1st floor for female residents — with AC rooms, separate kitchen, 24/7 CCTV, and big-size well-ventilated rooms in Sector 12, Kharghar.
          </p>
          <div className="seo-hero-chips">
            <span>👩 Girls Floor Only</span>
            <span>🔒 CCTV 24/7</span>
            <span>🍳 Separate Kitchen</span>
            <span>💰 From ₹5,500+GST</span>
          </div>
          <div className="seo-hero-btns">
            <a href="/#contact" className="seo-btn-gold">Enquire Now</a>
            <a href="tel:+918999422873" className="seo-btn-ghost">📞 Call Owner</a>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <nav className="seo-breadcrumb" aria-label="Breadcrumb">
        <div className="seo-container">
          <Link to="/">Home</Link> <span>›</span>
          <Link to="/pg-in-kharghar">PG in Kharghar</Link> <span>›</span>
          <span>Girls PG Kharghar</span>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <section className="seo-section seo-intro">
        <div className="seo-container seo-two-col">
          <div className="seo-main-content">
            <h2>Dedicated Girls PG in Kharghar — Your Safety is Priority</h2>
            <p>
              Finding a safe and comfortable girls PG in Kharghar can be challenging. At <strong>Rajendra Homestay, Sector 12</strong>, the entire 1st floor is exclusively reserved for female residents. Gents are strictly prohibited from entering the girls' floor, giving female tenants complete privacy, security, and peace of mind.
            </p>
            <p>
              Whether you're a working professional, a student at Lokmanya Tilak College, or someone new to Navi Mumbai, our girls PG in Kharghar is designed to make you feel safe and at home from day one.
            </p>

            <h2>Room Features — Girls PG</h2>
            <p>Every room in the girls' section is thoughtfully set up for comfort and privacy:</p>
            <ul className="seo-feature-list">
              <li>✓ Big-size, well-ventilated AC rooms with curtains for privacy</li>
              <li>✓ Cot and mattress included in all rooms</li>
              <li>✓ Dedicated common kitchen with gas stove &amp; cylinder (girls only)</li>
              <li>✓ 24/7 CCTV surveillance on the floor and all entry points</li>
              <li>✓ High-speed WiFi throughout the floor</li>
              <li>✓ Regular housekeeping service</li>
              <li>✓ RO purified water available 24/7</li>
              <li>✓ Open 3rd-floor terrace for outdoor relaxation</li>
            </ul>

            <h2>Pricing for Girls PG in Kharghar</h2>
            <p>We offer two room tiers in the girls' section, both with AC and all essential amenities:</p>
            <div className="seo-price-grid">
              {[
                { type: 'Standard AC Room (Girls)', price: '₹5,500 + GST', note: '/month' },
                { type: 'Premium AC Room (Girls)', price: '₹6,500 + GST', note: '/month' },
              ].map((r, i) => (
                <div key={i} className="seo-price-row">
                  <span className="seo-price-type">{r.type}</span>
                  <span className="seo-price-val">{r.price}<span className="seo-price-note"> {r.note}</span></span>
                </div>
              ))}
            </div>
            <p className="seo-gst-note">⚠️ GST is applicable as per government norms on both room types.</p>

            <h2>Safety &amp; Security for Female Residents</h2>
            <p>
              Safety is non-negotiable at our girls PG in Kharghar. Here's how we keep our female residents protected:
            </p>
            <ul className="seo-feature-list">
              <li>🔒 Full-floor exclusivity — no male entry on the girls' floor at any time</li>
              <li>📹 24/7 CCTV cameras at all floors, staircases, and entry points</li>
              <li>🚪 Main gate closes at 11:00 PM every day</li>
              <li>📵 Outside agents and middlemen are strictly prohibited — only the owner deals with tenants</li>
              <li>👤 Owner — Rajendra Gulhane — is available on-call for any concerns</li>
            </ul>

            <h2>Location — Girls PG Near Kharghar Metro</h2>
            <p>
              Our girls PG in Kharghar is perfectly located for daily commuters. You're just <strong>3 minutes walk from Kharghar Gaon Metro Station</strong> and the bus stand at Nimisha Chowk, making it easy to travel across Navi Mumbai and Mumbai without depending on autos or cabs.
            </p>
            <p>
              Nearby: Gaondevi Udyaan garden (1 min), gym (1 min), Iskcon Mandir &amp; Central Park (7 min), food restaurants and breakfast spots (walking distance), Lokmanya Tilak College (nearby).
            </p>

            <h2>Who Should Choose Our Girls PG in Kharghar?</h2>
            <p>Our female-exclusive floor is ideal for:</p>
            <ul className="seo-feature-list">
              <li>👩‍💼 Working women and IT professionals in Navi Mumbai</li>
              <li>👩‍🎓 Students from local colleges and coaching institutes</li>
              <li>👩‍⚕️ Medical staff and nurses from nearby Vedanta Hospital</li>
              <li>🏙️ Women newly relocating to Kharghar or Navi Mumbai</li>
              <li>👨‍👩‍👧 Families visiting — we also have a family room at ₹1,200/day</li>
            </ul>

            <h2>No Brokerage — Owner Direct</h2>
            <p>
              All bookings for the girls PG section are handled directly by owner <strong>Rajendra Narayan Gulhane</strong>. There are zero brokerage charges and no middlemen involved. Contact him directly at <a href="tel:+918999422873" style={{color:'#c9a84c'}}>+91 89994 22873</a> or WhatsApp for room availability, visiting slots, and pricing.
            </p>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="seo-sidebar">
            <div className="seo-cta-box">
              <div className="seo-cta-badge">👩 Girls Only</div>
              <h3>Enquire for Girls Room</h3>
              <p>Speak directly with the owner — no agents involved.</p>
              <a href="tel:+918999422873" className="seo-btn-gold seo-btn-block">📞 +91 89994 22873</a>
              <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20looking%20for%20a%20girls%20PG%20in%20Kharghar"
                 target="_blank" rel="noreferrer" className="seo-btn-wa seo-btn-block">💬 WhatsApp Now</a>
              <div className="seo-cta-addr">
                <strong>📍 Address</strong>
                <p>Plot No. G49, Row House, Sector 12, Near Vedanta Hospital, Kharghar, Navi Mumbai — 410210</p>
              </div>
            </div>
            <div className="seo-quick-facts">
              <h4>Girls Room Details</h4>
              {[
                ['Floor', '1st Floor (Exclusive)'],
                ['Male Entry', 'Not Allowed'],
                ['Standard Room', '₹5,500 + GST/mo'],
                ['Premium Room', '₹6,500 + GST/mo'],
                ['Kitchen', 'Separate (Girls Only)'],
                ['CCTV', '24/7 Coverage'],
                ['Gate Close', '11:00 PM'],
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
          <h2 className="seo-section-title">FAQs — Girls PG in Kharghar</h2>
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
              <strong>All PG Options in Kharghar</strong>
              <p>Girls &amp; Gents — all room types</p>
            </Link>
            <Link to="/pg-near-kharghar-metro" className="seo-related-card">
              <span className="src-icon">🚇</span>
              <strong>PG Near Kharghar Metro</strong>
              <p>Just 3 minutes from metro</p>
            </Link>
            <Link to="/cheap-pg-navi-mumbai" className="seo-related-card">
              <span className="src-icon">💰</span>
              <strong>Cheap PG in Navi Mumbai</strong>
              <p>Budget options from ₹5,000/mo</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}