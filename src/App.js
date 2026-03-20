import React, { useState, useEffect } from 'react';
import './App.css';

const GALLERY = [
  { src: '/single_room/1.jpg', label: 'Single Room', cat: 'single' },
  { src: '/single_room/2.jpg', label: 'Single Room', cat: 'single' },
  { src: '/single_room/3.jpg', label: 'Single Room', cat: 'single' },
  { src: '/single_room/4.jpg', label: 'Single Room', cat: 'single' },
  { src: '/single_room/5.jpg', label: 'Single Room', cat: 'single' },
  { src: '/single_room/6.jpg', label: 'Single Room', cat: 'single' },
  { src: '/twin_sharing/7.jpg', label: 'Twin Sharing', cat: 'twin' },
  { src: '/twin_sharing/8.jpg', label: 'Twin Sharing', cat: 'twin' },
  { src: '/other_rooms/9.jpg', label: 'AC Room', cat: 'other' },
  { src: '/common_area/GR2-228455-1256389.jpg', label: 'Common Area', cat: 'common' },
  { src: '/kitchen/GR2-228455-1256383.jpg', label: 'Kitchen', cat: 'kitchen' },
  { src: '/kitchen/GR2-228455-1256385.jpg', label: 'Kitchen', cat: 'kitchen' },
  { src: '/common_amenities/GR2-228455-1256387.jpg', label: 'Amenities', cat: 'amenities' },
  { src: '/common_amenities/GR2-228455-1256419.jpg', label: 'Amenities', cat: 'amenities' },
  { src: '/common_amenities/GR2-228455-1913973.jpg', label: 'Amenities', cat: 'amenities' },
  { src: '/exterior_view/GR2-228455-1085807.jpg', label: 'Building Exterior', cat: 'exterior' },
];

const HERO_SLIDES = [
  '/exterior_view/GR2-228455-1085807.jpg',
  '/single_room/1.jpg',
  '/single_room/3.jpg',
  '/twin_sharing/7.jpg',
  '/common_area/GR2-228455-1256389.jpg',
];

const ROOMS = [
  {
    name: 'Girls / Female Room',
    price: '₹6,000+',
    period: '/month',
    available: 7,
    floor: '1st Floor',
    imgs: ['/single_room/1.jpg', '/single_room/2.jpg', '/single_room/3.jpg'],
    highlight: true,
    badge: 'Girls Only',
    amenities: ['AC Room', 'Separate Common Kitchen', 'Gas Stove & Cylinder', 'CCTV Security', 'Curtains', 'Big Size Rooms'],
  },
  {
    name: 'AC Dormitory (Ground)',
    price: '₹500',
    period: '/day  |  Monthly available',
    available: 7,
    floor: 'Ground Floor',
    imgs: ['/other_rooms/9.jpg', '/single_room/4.jpg'],
    highlight: false,
    badge: 'AC',
    amenities: ['6 AC Dorm Beds + 1 Single', 'Attached Washroom', 'Cupboard', 'Cot & Mattress', 'CCTV Security'],
  },
  {
    name: 'Twin / Single Sharing',
    price: '₹8,000',
    period: '/month/person',
    available: 2,
    floor: 'Both Floors',
    imgs: ['/twin_sharing/7.jpg', '/twin_sharing/8.jpg'],
    highlight: false,
    badge: 'Best Value',
    amenities: ['Attached Washroom', 'Cupboard', 'Cot & Mattress', 'Side Table', 'Geyser', 'Well Ventilated'],
  },
];

const AMENITIES = [
  { icon: '📶', title: 'High-Speed WiFi',      desc: 'Available across the entire PG' },
  { icon: '❄️', title: 'AC Rooms',             desc: 'Air-conditioned rooms available for all' },
  { icon: '🚗', title: 'Parking',              desc: 'Car & 2-wheeler parking on premises' },
  { icon: '🧹', title: 'Room Cleaning',        desc: 'Regular housekeeping service' },
  { icon: '🍳', title: 'Separate Kitchen',     desc: 'Gas stove & cylinder for girls separately and gents separately' },
  { icon: '📹', title: 'CCTV Surveillance',    desc: 'Full security under 24/7 CCTV coverage' },
  { icon: '🏋️', title: 'Gym Nearby',           desc: 'Gym just 1 minute away' },
  { icon: '🌿', title: 'Open Terrace',         desc: 'Well-ventilated big rooms with open 3rd floor terrace' },
  { icon: '🚰', title: 'RO Water',             desc: 'Purified drinking water 24/7' },
  { icon: '🛡️', title: 'Gated Security',       desc: 'Gate closes at 11:00 PM for safety' },
  { icon: '🏙️', title: 'Prime Location',       desc: '3 min to bus stand & Kharghar metro station' },
  { icon: '🍽️', title: 'Food Nearby',          desc: 'Breakfast & food hotels within walking distance' },
];

const RULES_ALLOWED    = ['Visitor Entry', 'Non-Veg Food', 'Loud Music (in room)', 'Common Kitchen Use'];
const RULES_NOTALLOWED = ['Opposite Gender Entry', 'Smoking', 'Drinking', 'Outside Agents / Middlemen'];

const NEARBY = [
  { icon: '🚌', place: 'Bus Stand (Nimisha & Shilpa Chowk)', dist: '3 min walk' },
  { icon: '🚇', place: 'Kharghar Gaon Metro Station',         dist: '3 min walk' },
  { icon: '🍽️', place: 'Food & Breakfast Hotels',             dist: 'Walking distance' },
  { icon: '🛕', place: 'Escon Mandir / Central Park',         dist: '7 min walk' },
  { icon: '🌳', place: 'Gaondevi Udyaan (Garden)',            dist: '1 min walk' },
  { icon: '🏋️', place: 'Gym',                                 dist: '1 min walk' },
  { icon: '🎓', place: 'Lokmanya Tilak College',              dist: 'Nearby' },
];

// ── ROOM CARD with mini photo slider ────────────────────────────────
function RoomCard({ room }) {
  const [imgIdx, setImgIdx] = useState(0);
  return (
    <div className={`room-card${room.highlight ? ' featured' : ''}`}>
      {room.badge && <div className="room-badge">{room.badge}</div>}
      <div className="room-img" style={{ backgroundImage: `url(${room.imgs[imgIdx]})` }}>
        {room.imgs.length > 1 && (
          <div className="room-img-dots">
            {room.imgs.map((_, i) => (
              <button key={i}
                className={`rdot${i === imgIdx ? ' active' : ''}`}
                onClick={() => setImgIdx(i)} />
            ))}
          </div>
        )}
        {room.floor && <div className="room-floor-tag">{room.floor}</div>}
      </div>
      <div className="room-body">
        <div className="room-head">
          <h3>{room.name}</h3>
          <span className="room-avail">{room.available} beds</span>
        </div>
        <div className="room-price">
          <span className="r-amount">{room.price}</span>
          <span className="r-period">{room.period}</span>
        </div>
        <ul className="room-feats">
          {room.amenities.map((a, j) => (
            <li key={j}><span className="feat-check">✓</span>{a}</li>
          ))}
        </ul>
        <a href="#contact" className={`btn-room${room.highlight ? ' btn-room-gold' : ''}`}>
          Enquire Now
        </a>
      </div>
    </div>
  );
}

// ── NAVBAR ───────────────────────────────────────────────────────────
function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['Home', 'About', 'Rooms', 'Amenities', 'Nearby', 'Gallery', 'Rules', 'Contact'];
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="nav-brand">
        <span className="brand-star">✦</span>
        <span className="brand-name">Rajendra</span>
        <span className="brand-pg">PG</span>
      </a>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}
               className={active === l.toLowerCase() ? 'active' : ''}
               onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
      </ul>
      <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────
function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="hero">
      {HERO_SLIDES.map((src, i) => (
        <div key={i} className={`hero-slide${i === idx ? ' active' : ''}`}
             style={{ backgroundImage: `url(${src})` }} />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">✦ Girls & Gents PG · Kharghar, Navi Mumbai</p>
        <h1 className="hero-heading">
          Safe. Comfortable.<br /><em>Home Away from Home</em>
        </h1>
        <p className="hero-sub">
          AC rooms for girls & gents in Sector 12, Kharghar — 3 min from bus stand &
          metro. Posted directly by owner Rajendra Gulhane. No agents, no extra charges.
        </p>
        <div className="hero-chips">
          <span>🛏 14 Beds Total</span>
          <span>👩 Girls 1st Floor</span>
          <span>📍 Sector 12, Kharghar</span>
          <span>⭐ Owner Listed</span>
        </div>
        <div className="hero-btns">
          <a href="#contact" className="btn-gold">Book a Visit</a>
          <a href="#rooms" className="btn-ghost">View Rooms & Pricing</a>
        </div>
      </div>
      <div className="slide-dots">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} className={`dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} />
        ))}
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────
const ABOUT_STATS = [
  { val: '14',   label: 'Total Beds',    icon: '🛏' },
  { val: '₹500', label: 'From / Day',    icon: '💰' },
  { val: '2',    label: 'Floors',        icon: '🏠' },
  { val: '24/7', label: 'Check-In',      icon: '🕐' },
];

const ABOUT_HIGHLIGHTS = [
  { icon: '📍', title: 'Prime Location',       desc: 'Sector 12, Kharghar — 3 min from bus stand & Kharghar metro' },
  { icon: '👩', title: 'Girls Floor',          desc: '1st floor exclusively for girls/females — safe & secure' },
  { icon: '📹', title: 'CCTV Surveillance',    desc: 'Full security under 24/7 CCTV monitoring on all floors' },
  { icon: '🏠', title: 'Owner Listed',         desc: 'No agents — deal directly with owner Rajendra Gulhane' },
];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-mosaic">
            <div className="amos-main" style={{ backgroundImage: `url(/exterior_view/GR2-228455-1085807.jpg)` }}>
              <div className="amos-main-badge">
                <span className="amb-val">Owner</span>
                <span className="amb-year">Listed</span>
              </div>
            </div>
            <div className="amos-side">
              <div className="amos-sm" style={{ backgroundImage: `url(/common_area/GR2-228455-1256389.jpg)` }} />
              <div className="amos-sm" style={{ backgroundImage: `url(/single_room/1.jpg)` }} />
            </div>
          </div>

          <div className="about-text">
            <span className="sec-label">About Rajendra PG</span>
            <h2 className="sec-title">Safe & Modern Living<br />in the Heart of Kharghar</h2>
            <div className="about-divider" />
            <p className="about-lead">
              A premium PG accommodation in <strong>Sector 12, Kharghar, Navi Mumbai</strong> with
              separate floors for girls and gents. AC rooms, fully equipped kitchens, and
              round-the-clock CCTV security.
            </p>
            <p className="about-body">
              Listed directly by owner <strong>Rajendra Gulhane</strong> — no agents, no
              middlemen. Daily check-in available 24 hours. Gate closes at <strong>11:00 PM</strong> for
              security. Big size well-ventilated rooms with curtains and open terrace access on the 3rd floor.
            </p>
            <div className="about-stats">
              {ABOUT_STATS.map((s, i) => (
                <div key={i} className="astat">
                  <span className="astat-icon">{s.icon}</span>
                  <strong className="astat-val">{s.val}</strong>
                  <span className="astat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {ABOUT_HIGHLIGHTS.map((h, i) => (
            <div key={i} className="ahigh-card">
              <div className="ahigh-icon">{h.icon}</div>
              <div className="ahigh-body">
                <strong>{h.title}</strong>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ROOMS ────────────────────────────────────────────────────────────
function Rooms() {
  return (
    <section id="rooms" className="rooms section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Room Options</span>
          <h2 className="sec-title">Choose Your Space</h2>
          <p className="sec-sub">Daily ₹500 · Monthly plans available · 24-hr check-in · Gate closes 11 PM</p>
        </div>
        <div className="rooms-grid">
          {ROOMS.map((r, i) => <RoomCard key={i} room={r} />)}
        </div>
        <div className="deposit-note">
          <span>💳</span>
          <p>
            Payment directly to owner only — <strong>No agents.</strong> UPI:{' '}
            <strong>8999422873@ybl</strong> · Bank: <strong>Bank of Maharashtra</strong> ·
            A/c: <strong>68023971562</strong> (Rajendra Narayan Gulhane)
          </p>
        </div>
      </div>
    </section>
  );
}

// ── AMENITIES ────────────────────────────────────────────────────────
function Amenities() {
  return (
    <section id="amenities" className="amenities section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Facilities</span>
          <h2 className="sec-title">Everything You Need</h2>
          <p className="sec-sub">All incorporated — AC, kitchen, security, open terrace & more</p>
        </div>
        <div className="amen-grid">
          {AMENITIES.map((a, i) => (
            <div className="amen-card" key={i}>
              <div className="amen-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── NEARBY ───────────────────────────────────────────────────────────
function Nearby() {
  return (
    <section id="nearby" className="nearby section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Location Highlights</span>
          <h2 className="sec-title">Everything Close By</h2>
          <p className="sec-sub">Sector 12, Kharghar — perfectly connected to transport, food, colleges & recreation</p>
        </div>
        <div className="nearby-grid">
          {NEARBY.map((n, i) => (
            <div key={i} className="nearby-card">
              <div className="nearby-icon">{n.icon}</div>
              <div className="nearby-body">
                <strong>{n.place}</strong>
                <span className="nearby-dist">{n.dist}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="map-cta">
          <a
            href="https://maps.google.com/?q=Sector+12+Kharghar+Navi+Mumbai"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

// ── GALLERY ──────────────────────────────────────────────────────────
function Gallery() {
  const cats = [
    { key: 'all',       label: 'All Photos' },
    { key: 'single',    label: 'Single Room' },
    { key: 'twin',      label: 'Twin Sharing' },
    { key: 'other',     label: 'AC Room' },
    { key: 'common',    label: 'Common Area' },
    { key: 'kitchen',   label: 'Kitchen' },
    { key: 'amenities', label: 'Amenities' },
    { key: 'exterior',  label: 'Exterior' },
  ];
  const [filter, setFilter] = useState('all');
  const [lb, setLb] = useState(null);
  const [lbIdx, setLbIdx] = useState(0);
  const shown = filter === 'all' ? GALLERY : GALLERY.filter(p => p.cat === filter);

  const openLb = (p, i) => { setLb(shown); setLbIdx(i); };
  const prev = e => { e.stopPropagation(); setLbIdx(i => (i - 1 + lb.length) % lb.length); };
  const next = e => { e.stopPropagation(); setLbIdx(i => (i + 1) % lb.length); };

  useEffect(() => {
    const fn = e => {
      if (e.key === 'Escape') setLb(null);
      if (e.key === 'ArrowLeft' && lb)  setLbIdx(i => (i - 1 + lb.length) % lb.length);
      if (e.key === 'ArrowRight' && lb) setLbIdx(i => (i + 1) % lb.length);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [lb]);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Photo Gallery</span>
          <h2 className="sec-title">See the PG Up Close</h2>
          <p className="sec-sub">{GALLERY.length} photos across all areas</p>
        </div>
        <div className="gal-filters">
          {cats.map(c => (
            <button key={c.key} className={`gf-btn${filter === c.key ? ' active' : ''}`}
                    onClick={() => setFilter(c.key)}>{c.label}</button>
          ))}
        </div>
        <div className="gal-grid">
          {shown.map((p, i) => (
            <div key={i} className="gal-item" onClick={() => openLb(p, i)}>
              <div className="gal-img" style={{ backgroundImage: `url(${p.src})` }} />
              <div className="gal-cover">
                <span className="gal-lbl">{p.label}</span>
                <span className="gal-plus">⊕</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lb && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <button className="lb-close" onClick={() => setLb(null)}>✕</button>
          <button className="lb-prev" onClick={prev}>‹</button>
          <img src={lb[lbIdx].src} alt={lb[lbIdx].label} onClick={e => e.stopPropagation()} />
          <button className="lb-next" onClick={next}>›</button>
          <p>{lb[lbIdx].label} <span className="lb-count">{lbIdx + 1} / {lb.length}</span></p>
        </div>
      )}
    </section>
  );
}

// ── RULES ────────────────────────────────────────────────────────────
const GENERAL_RULES = [
  { icon: '🔔', title: 'Notice Period',     desc: '1 month written notice required before vacating' },
  { icon: '🚪', title: 'Gate Timing',       desc: 'Gate closes at 11:00 PM every day for security' },
  { icon: '🕐', title: 'Check-In',          desc: '24-hour check-in · Daily rate ₹500/day (8 AM–8 AM)' },
  { icon: '👤', title: 'Owner Only',        desc: 'No agents — all dealings directly with Rajendra Gulhane' },
];

function Rules() {
  return (
    <section id="rules" className="rules section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">House Rules</span>
          <h2 className="sec-title">Guidelines & Policies</h2>
          <p className="sec-sub">Designed to ensure a comfortable, safe environment for everyone.</p>
        </div>

        <div className="rgen-grid">
          {GENERAL_RULES.map((r, i) => (
            <div key={i} className="rgen-card">
              <div className="rgen-icon-wrap">
                <span className="rgen-icon">{r.icon}</span>
              </div>
              <div className="rgen-text">
                <strong>{r.title}</strong>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rperm-grid">
          <div className="rperm-panel rperm-allowed">
            <div className="rperm-panel-header">
              <div className="rperm-icon-circle allowed-circle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Permitted</h4>
                <p>Activities welcome at the PG</p>
              </div>
            </div>
            <ul className="rperm-list">
              {RULES_ALLOWED.map((r, i) => (
                <li key={i}>
                  <span className="rperm-bullet allowed-bullet">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rperm-panel rperm-prohibited">
            <div className="rperm-panel-header">
              <div className="rperm-icon-circle prohibited-circle">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h4>Prohibited</h4>
                <p>Not permitted on the premises</p>
              </div>
            </div>
            <ul className="rperm-list">
              {RULES_NOTALLOWED.map((r, i) => (
                <li key={i}>
                  <span className="rperm-bullet prohibited-bullet">✕</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rules-disclaimer">
          <span className="rules-disclaimer-icon">📋</span>
          <p>
            By choosing this PG, residents agree to abide by the above guidelines.
            For queries, contact owner directly —{' '}
            <a href="tel:+918999422873">Rajendra Gulhane: +91 89994 22873</a>.
            No agents or middlemen involved.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', roomtype: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ARoom Type: ${form.roomtype}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:rajendragulhane21@gmail.com?subject=PG Enquiry - ${encodeURIComponent(form.name)}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Get In Touch</span>
          <h2 className="sec-title">Contact Owner Directly</h2>
          <p className="sec-sub">No agents. Talk directly to Rajendra Gulhane. We respond within a few hours!</p>
        </div>
        <div className="contact-grid">
          <div className="cinfo">
            <h3>Contact Details</h3>
            {[
              { icon: '👤', label: 'Owner',             val: 'Rajendra Narayan Gulhane',          href: null },
              { icon: '📞', label: 'Phone / WhatsApp',  val: '+91 89994 22873',                   href: 'tel:+918999422873' },
              { icon: '✉️', label: 'Email',             val: 'rajendragulhane21@gmail.com',       href: 'mailto:rajendragulhane21@gmail.com' },
              { icon: '📍', label: 'Address',           val: 'Sector 12, Kharghar, Navi Mumbai',  href: null },
              { icon: '⏰', label: 'Visiting Hours',    val: '9:00 AM – 8:00 PM (All days)',      href: null },
              { icon: '🕐', label: 'Check-In Time',     val: '24 Hours (8 AM to 8 AM daily)',     href: null },
              { icon: '🚪', label: 'Gate Closes',       val: '11:00 PM every day',               href: null },
            ].map((c, i) => (
              <div key={i} className="cinfo-row">
                <span className="cinfo-icon">{c.icon}</span>
                <div>
                  <strong>{c.label}</strong>
                  {c.href ? <p><a href={c.href}>{c.val}</a></p> : <p>{c.val}</p>}
                </div>
              </div>
            ))}

            {/* Payment details block */}
            <div className="payment-box">
              <h4>💳 Payment (Owner Only)</h4>
              <p><strong>UPI:</strong> 8999422873@ybl</p>
              <p><strong>Bank:</strong> Bank of Maharashtra</p>
              <p><strong>A/c No:</strong> 68023971562</p>
              <p className="payment-note">⚠️ No agents — pay directly to owner only</p>
            </div>

            <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20interested%20in%20your%20PG%20in%20Kharghar"
               target="_blank" rel="noreferrer" className="wa-btn">
              💬 Chat on WhatsApp
            </a>
          </div>

          <form className="cform" onSubmit={submit}>
            {sent ? (
              <div className="form-ok">
                <span>✅</span>
                <h4>Thank you! Rajendra will contact you shortly.</h4>
              </div>
            ) : (
              <>
                <div className="frow">
                  <div className="fgroup">
                    <label>Your Name *</label>
                    <input name="name" required value={form.name} onChange={set} placeholder="Full name" />
                  </div>
                  <div className="fgroup">
                    <label>Phone *</label>
                    <input name="phone" required value={form.phone} onChange={set} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="frow">
                  <div className="fgroup">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={set} placeholder="your@email.com" />
                  </div>
                  <div className="fgroup">
                    <label>Room Type</label>
                    <select name="roomtype" value={form.roomtype} onChange={set}>
                      <option value="">Select...</option>
                      <option>Girls / Female Room – ₹6,000+/mo</option>
                      <option>AC Dormitory (Ground Floor) – ₹500/day</option>
                      <option>Twin / Single Sharing – ₹8,000/mo/person</option>
                    </select>
                  </div>
                </div>
                <div className="fgroup">
                  <label>Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={set}
                    placeholder="Move-in date, duration, any questions…" />
                </div>
                <button type="submit" className="btn-gold btn-full">Send Enquiry →</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-star">✦</span>
          <span className="brand-name">Rajendra</span>
          <span className="brand-pg">PG</span>
        </div>
        <p className="footer-loc">📍 Sector 12, Kharghar, Navi Mumbai · Girls & Gents · Owner Listed</p>
        <p className="footer-contact">
          <a href="tel:+918999422873">+91 89994 22873</a>
          &nbsp;·&nbsp;
          <a href="mailto:rajendragulhane21@gmail.com">rajendragulhane21@gmail.com</a>
        </p>
        <div className="footer-links">
          {['home', 'about', 'rooms', 'amenities', 'nearby', 'gallery', 'rules', 'contact'].map(l => (
            <a key={l} href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Rajendra PG · All rights reserved · No Agents</p>
      </div>
    </footer>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return (
    <div className="app">
      <Navbar active={active} />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Nearby />
      <Gallery />
      <Rules />
      <Contact />
      <Footer />
      <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20interested%20in%20your%20PG%20in%20Kharghar"
         target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp Rajendra">💬</a>
    </div>
  );
}