import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';

// ── SEO PAGES ──────────────────────────────────────────────────────────────
import PgInKharghar             from './seo-pages/PgInKharghar';
import GirlsPgKharghar          from './seo-pages/GirlsPgKharghar';
import PgNearKhargharMetro      from './seo-pages/PgNearKhargharMetro';
import CheapPgNaviMumbai        from './seo-pages/CheapPgNaviMumbai';
import PgForWorkingProfessionals from './seo-pages/PgForWorkingProfessionals';
import FurnishedPgKharghar      from './seo-pages/FurnishedPgKharghar';

// ── DATA ───────────────────────────────────────────────────────────────────

const GALLERY = [
  { src: '/single_room/1.jpg',                       label: 'Single Room',      cat: 'single'    },
  { src: '/single_room/2.jpg',                       label: 'Single Room',      cat: 'single'    },
  { src: '/single_room/3.jpg',                       label: 'Single Room',      cat: 'single'    },
  { src: '/single_room/4.jpg',                       label: 'Single Room',      cat: 'single'    },
  { src: '/single_room/5.jpg',                       label: 'Single Room',      cat: 'single'    },
  { src: '/single_room/6.jpg',                       label: 'Single Room',      cat: 'single'    },
  { src: '/twin_sharing/7.jpg',                      label: 'Twin Sharing',     cat: 'twin'      },
  { src: '/twin_sharing/8.jpg',                      label: 'Twin Sharing',     cat: 'twin'      },
  { src: '/other_rooms/9.jpg',                       label: 'AC Room',          cat: 'other'     },
  { src: '/common_area/GR2-228455-1256389.jpg',      label: 'Common Area',      cat: 'common'    },
  { src: '/kitchen/GR2-228455-1256383.jpg',          label: 'Kitchen',          cat: 'kitchen'   },
  { src: '/kitchen/GR2-228455-1256385.jpg',          label: 'Kitchen',          cat: 'kitchen'   },
  { src: '/common_amenities/GR2-228455-1256387.jpg', label: 'Amenities',        cat: 'amenities' },
  { src: '/common_amenities/GR2-228455-1256419.jpg', label: 'Amenities',        cat: 'amenities' },
  { src: '/common_amenities/GR2-228455-1913973.jpg', label: 'Amenities',        cat: 'amenities' },
  { src: '/exterior_view/GR2-228455-1085807.jpg',    label: 'Building Exterior',cat: 'exterior'  },
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
    price: '₹5,500', price2: '₹6,500',
    period: '/month + GST',
    available: 7, floor: '1st Floor',
    imgs: ['/single_room/1.jpg', '/single_room/2.jpg', '/single_room/3.jpg'],
    highlight: true, badge: 'Girls Only', showGst: true,
    amenities: [
      '₹5,500+GST — Standard AC Room', '₹6,500+GST — Premium AC Room',
      'Separate Common Kitchen', 'Gas Stove & Cylinder',
      'CCTV Security', 'Curtains', 'Big Size Rooms',
    ],
  },
  {
    name: 'Single Sharing',
    price: '₹9,000', period: '/month/person',
    available: 4, floor: 'Both Floors',
    imgs: ['/single_room/1.jpg', '/single_room/3.jpg'],
    highlight: false, badge: 'Single',
    amenities: ['1 Person per Room','Attached Washroom','Cupboard','Cot & Mattress','Geyser','AC Room','Well Ventilated'],
  },
  {
    name: 'Double Sharing',
    price: '₹6,500', period: '/month/person',
    available: 6, floor: 'Both Floors',
    imgs: ['/twin_sharing/7.jpg', '/twin_sharing/8.jpg'],
    highlight: false, badge: 'Best Value',
    amenities: ['2 Persons per Room','Attached Washroom','Cupboard','Cot & Mattress','Side Table','Geyser','Well Ventilated'],
  },
  {
    name: 'Triple Sharing',
    price: '₹5,000', period: '/month/person',
    available: 5, floor: 'Both Floors',
    imgs: ['/single_room/4.jpg', '/single_room/5.jpg'],
    highlight: false, badge: 'Budget',
    amenities: ['3 Persons per Room','Attached Washroom','Cupboard','Cot & Mattress','CCTV Security','Well Ventilated'],
  },
  {
    name: 'AC Dormitory',
    price: '₹5,500', price2: '₹7,500',
    period: '/bed/month',
    available: 7, floor: 'Ground Floor',
    imgs: ['/other_rooms/9.jpg', '/single_room/4.jpg'],
    highlight: false, badge: 'AC',
    amenities: ['3 Tiers: ₹5,500 / ₹6,500 / ₹7,500','Also ₹500/day (daily stay)','Attached Washroom','Cupboard','Cot & Mattress','CCTV Security'],
  },
  {
    name: 'Family Room',
    price: '₹1,200', period: '/day  |  Independent',
    available: 1, floor: '1st Floor',
    imgs: ['/single_room/1.jpg', '/single_room/2.jpg'],
    highlight: false, badge: 'Family',
    amenities: ['Attached Toilet & Bathroom','2 Adults + 1 Kid','Independent Room','CCTV Security','Well Ventilated','Sector 12, Kharghar'],
  },
];

const AMENITIES = [
  { icon: '📶', title: 'High-Speed WiFi',   desc: 'Available across the entire PG' },
  { icon: '❄️', title: 'AC Rooms',          desc: 'Air-conditioned rooms available for all' },
  { icon: '🚗', title: 'Parking',           desc: 'Car & 2-wheeler parking on premises' },
  { icon: '🧹', title: 'Room Cleaning',     desc: 'Regular housekeeping service' },
  { icon: '🍳', title: 'Separate Kitchen',  desc: 'Gas stove & cylinder for girls separately and gents separately' },
  { icon: '📹', title: 'CCTV Surveillance', desc: 'Full security under 24/7 CCTV coverage' },
  { icon: '🏋️', title: 'Gym Nearby',        desc: 'Gym just 1 minute away' },
  { icon: '🌿', title: 'Open Terrace',      desc: 'Well-ventilated big rooms with open 3rd floor terrace' },
  { icon: '🚰', title: 'RO Water',          desc: 'Purified drinking water 24/7' },
  { icon: '🛡️', title: 'Gated Security',    desc: 'Gate closes at 11:00 PM for safety' },
  { icon: '🏙️', title: 'Prime Location',    desc: '3 min to bus stand & Kharghar metro station' },
  { icon: '🍽️', title: 'Food Nearby',       desc: 'Breakfast & food hotels within walking distance' },
];

const RULES_ALLOWED    = ['Visitor Entry', 'Non-Veg Food', 'Loud Music (in room)', 'Common Kitchen Use'];
const RULES_NOTALLOWED = ['Opposite Gender Entry', 'Smoking', 'Drinking', 'Outside Agents / Middlemen'];

const NEARBY = [
  { icon: '🚌', place: 'Bus Stand (Nimisha & Shilpa Chowk)', dist: '3 min walk' },
  { icon: '🚇', place: 'Kharghar Gaon Metro Station',         dist: '3 min walk' },
  { icon: '🍽️', place: 'Food & Breakfast Hotels',             dist: 'Walking distance' },
  { icon: '🛕', place: 'Iskcon Mandir / Central Park',         dist: '7 min walk' },
  { icon: '🌳', place: 'Gaondevi Udyaan (Garden)',            dist: '1 min walk' },
  { icon: '🏋️', place: 'Gym',                                 dist: '1 min walk' },
  { icon: '🎓', place: 'Lokmanya Tilak College',              dist: 'Nearby' },
];

const ABOUT_STATS = [
  { val: '14+',  label: 'Total Beds', icon: '🛏' },
  { val: '₹500', label: 'From / Day', icon: '💰' },
  { val: '2',    label: 'Floors',     icon: '🏠' },
  { val: '24/7', label: 'Check-In',   icon: '🕐' },
];

const ABOUT_HIGHLIGHTS = [
  { icon: '📍', title: 'Prime Location',    desc: 'Sector 12, Kharghar — 3 min from bus stand & Kharghar metro' },
  { icon: '👩', title: 'Girls Floor',       desc: '1st floor exclusively for girls/females — safe & secure' },
  { icon: '📹', title: 'CCTV Surveillance', desc: 'Full security under 24/7 CCTV monitoring on all floors' },
  { icon: '🏠', title: 'Owner Listed',      desc: 'No agents — deal directly with owner Rajendra Gulhane' },
];

const GENERAL_RULES = [
  { icon: '🔔', title: 'Notice Period', desc: '1 month written notice required before vacating' },
  { icon: '🚪', title: 'Gate Timing',   desc: 'Gate closes at 11:00 PM every day for security' },
  { icon: '🕐', title: 'Check-In',      desc: '24-hour check-in · Daily rate ₹500/day (8 AM–8 AM)' },
  { icon: '👤', title: 'Owner Only',    desc: 'No agents — all dealings directly with Rajendra Gulhane' },
];

// ── JSON-LD STRUCTURED DATA ────────────────────────────────────────────────
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Rajendra Homestay PG",
  "alternateName": ["Rajendra PG Kharghar", "Rajendra Paying Guest Kharghar"],
  "description": "Affordable PG accommodation in Sector 12, Kharghar, Navi Mumbai. Safe AC rooms for girls & gents. Single, double, triple sharing and dormitory. 3 min from Kharghar metro. Owner listed, no brokerage.",
  "url": "https://rajendrahomestay.in",
  "telephone": "+918999422873",
  "email": "rajendragulhane21@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. G49, Row House, Near Vedanta Hospital, Next to Anjali Pharma Cure",
    "addressLocality": "Kharghar",
    "addressRegion": "Navi Mumbai",
    "postalCode": "410210",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0476",
    "longitude": "73.0693"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "₹5000 - ₹9000",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "CCTV Security", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Kitchen", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "RO Water", "value": true }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "28"
  },
  "hasMap": "https://maps.google.com/?q=Plot+G49+Row+House+Near+Vedanta+Hospital+Sector+12+Kharghar+Navi+Mumbai",
  "image": [
    "https://rajendrahomestay.in/exterior_view/GR2-228455-1085807.jpg",
    "https://rajendrahomestay.in/single_room/1.jpg",
    "https://rajendrahomestay.in/common_area/GR2-228455-1256389.jpg"
  ],
  "sameAs": [
    "https://www.booking.com",
    "https://www.justdial.com"
  ]
};

// ── LISTED ON BADGES ───────────────────────────────────────────────────────
function ListedOnBadges() {
  return (
    <div className="listed-on">
      <span className="listed-label">Also listed on</span>
      <a href="https://www.booking.com" target="_blank" rel="noreferrer"
         className="listed-badge listed-booking" title="View on Booking.com">
        <span className="lb-dot" />
        <span className="lb-text">booking<strong>.com</strong></span>
      </a>
      <a href="https://www.justdial.com" target="_blank" rel="noreferrer"
         className="listed-badge listed-justdial" title="View on JustDial">
        <span className="lb-jd">JD</span>
        <span className="lb-text">JustDial</span>
      </a>
    </div>
  );
}

// ── ROOM CARD ──────────────────────────────────────────────────────────────
function RoomCard({ room }) {
  const [imgIdx, setImgIdx] = useState(0);
  return (
    <div className={`room-card${room.highlight ? ' featured' : ''}`}>
      {room.badge && <div className="room-badge">{room.badge}</div>}
      <div className="room-img" style={{ backgroundImage: `url(${room.imgs[imgIdx]})` }}>
        {room.imgs.length > 1 && (
          <div className="room-img-dots">
            {room.imgs.map((_, i) => (
              <button key={i} className={`rdot${i === imgIdx ? ' active' : ''}`}
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
          {room.price2 && (<><span className="r-sep">–</span><span className="r-amount">{room.price2}</span></>)}
          <span className="r-period">{room.period}</span>
        </div>
        {room.showGst && <div className="gst-note">⚠️ GST applicable as per government norms</div>}
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

// ── PRICING TABLE ──────────────────────────────────────────────────────────
function PricingTable() {
  const rows = [
    { type: 'Single Sharing',   price: '₹9,000',       period: '/month/person', icon: '🛏',     group: 'Sharing'   },
    { type: 'Double Sharing',   price: '₹6,500',       period: '/month/person', icon: '🛏🛏',   group: 'Sharing'   },
    { type: 'Triple Sharing',   price: '₹5,000',       period: '/month/person', icon: '🛏🛏🛏', group: 'Sharing'   },
    { type: 'Dorm — Standard',  price: '₹5,500',       period: '/bed/month',    icon: '🏨',     group: 'Dormitory' },
    { type: 'Dorm — Premium',   price: '₹6,500',       period: '/bed/month',    icon: '🏨',     group: 'Dormitory' },
    { type: 'Dorm — AC Single', price: '₹7,500',       period: '/bed/month',    icon: '🏨',     group: 'Dormitory' },
    { type: 'Dorm Daily',       price: '₹500',         period: '/day',          icon: '📅',     group: 'Dormitory' },
    { type: 'Girls — Standard', price: '₹5,500 + GST', period: '/month',        icon: '👩',     group: 'Girls'     },
    { type: 'Girls — Premium',  price: '₹6,500 + GST', period: '/month',        icon: '👩',     group: 'Girls'     },
    { type: 'Family Room',      price: '₹1,200',       period: '/day',          icon: '👨‍👩‍👧',    group: 'Other'     },
  ];
  const groups = ['Sharing', 'Dormitory', 'Girls', 'Other'];
  return (
    <div className="pricing-table-wrap">
      <h3 className="pt-title">📋 Complete Pricing Overview</h3>
      <div className="pt-groups">
        {groups.map(g => (
          <div key={g} className="pt-group">
            <div className="pt-group-label">{g}</div>
            {rows.filter(r => r.group === g).map((r, i) => (
              <div key={i} className="pt-row">
                <span className="pt-type"><span className="pt-icon">{r.icon}</span>{r.type}</span>
                <span className="pt-price">{r.price}<span className="pt-period"> {r.period}</span></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── NAVBAR ─────────────────────────────────────────────────────────────────
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
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <a href="#home" className="nav-brand" aria-label="Rajendra Homestay - Home">
        <img src="/logo.svg" alt="Rajendra Homestay PG Kharghar" className="brand-logo" width="48" height="48" />
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
      <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}
              aria-label="Toggle navigation menu" aria-expanded={open}>
        <span /><span /><span />
      </button>
    </nav>
  );
}

// ── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="hero" aria-label="Rajendra PG Kharghar - Safe Comfortable PG in Navi Mumbai">
      {HERO_SLIDES.map((src, i) => (
        <div key={i} className={`hero-slide${i === idx ? ' active' : ''}`}
             style={{ backgroundImage: `url(${src})` }} role="img"
             aria-label={`PG accommodation photo ${i + 1}`} />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">✦ Girls & Gents PG · Kharghar, Navi Mumbai</p>
        <h1 className="hero-heading">
          Safe. Comfortable.<br /><em>Home Away from Home</em>
        </h1>
        <p className="hero-sub">
          AC rooms for girls &amp; gents in Sector 12, Kharghar — 3 min from bus stand &amp;
          metro. Single, double &amp; triple sharing. Posted directly by owner Rajendra Gulhane.
        </p>
        <div className="hero-chips">
          <span>🛏 Single / Double / Triple</span>
          <span>👩 Girls 1st Floor</span>
          <span>📍 Sector 12, Kharghar</span>
          <span>⭐ Owner Listed</span>
        </div>
        <div className="hero-btns">
          <a href="#contact" className="btn-gold">Book a Visit</a>
          <a href="#rooms" className="btn-ghost">View Rooms &amp; Pricing</a>
        </div>
        <ListedOnBadges />
      </div>
      <div className="slide-dots" aria-label="Slideshow navigation">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} className={`dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

// ── ABOUT ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-mosaic">
            <div className="amos-main" style={{ backgroundImage: `url(/exterior_view/GR2-228455-1085807.jpg)` }}
                 role="img" aria-label="Rajendra PG exterior view Kharghar">
              <div className="amos-main-badge">
                <span className="amb-val">Owner</span>
                <span className="amb-year">Listed</span>
              </div>
            </div>
            <div className="amos-side">
              <div className="amos-sm" style={{ backgroundImage: `url(/common_area/GR2-228455-1256389.jpg)` }}
                   role="img" aria-label="Common area at Rajendra PG" />
              <div className="amos-sm" style={{ backgroundImage: `url(/single_room/1.jpg)` }}
                   role="img" aria-label="Single room at Rajendra PG Kharghar" />
            </div>
          </div>
          <div className="about-text">
            <span className="sec-label">About Rajendra PG</span>
            <h2 className="sec-title">Safe &amp; Modern Living<br />in the Heart of Kharghar</h2>
            <div className="about-divider" />
            <p className="about-lead">
              A premium PG in <strong>Sector 12, Kharghar, Navi Mumbai</strong> with separate floors
              for girls and gents. Single, double &amp; triple sharing, AC dormitory, and family rooms —
              all with round-the-clock CCTV security.
            </p>
            <p className="about-body">
              Listed directly by owner <strong>Rajendra Gulhane</strong> — no agents, no middlemen.
              Daily check-in 24 hours. Gate closes at <strong>11:00 PM</strong>.
              Big size well-ventilated rooms with curtains and open terrace on the 3rd floor.
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
            <ListedOnBadges />
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

// ── ROOMS ──────────────────────────────────────────────────────────────────
function Rooms() {
  return (
    <section id="rooms" className="rooms section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Room Options</span>
          <h2 className="sec-title">Choose Your Space</h2>
          <p className="sec-sub">Single ₹9k · Double ₹6.5k · Triple ₹5k · Dorm ₹5.5k–₹7.5k · Family ₹1.2k/day · All per person/month</p>
        </div>
        <div className="rooms-grid">
          {ROOMS.map((r, i) => <RoomCard key={i} room={r} />)}
        </div>
        <PricingTable />
        <div className="deposit-note" style={{ marginTop: '24px' }}>
          <span>💳</span>
          <p>
            Payment directly to owner only — <strong>No agents.</strong> UPI:{' '}
            <strong>8999422873-2@ybl</strong> · Bank: <strong>Bank of Maharashtra</strong> ·
            A/c: <strong>68023971562</strong> (Rajendra Narayan Gulhane)
          </p>
        </div>
      </div>
    </section>
  );
}

// ── AMENITIES ──────────────────────────────────────────────────────────────
function Amenities() {
  return (
    <section id="amenities" className="amenities section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Facilities</span>
          <h2 className="sec-title">Everything You Need</h2>
          <p className="sec-sub">All incorporated — AC, kitchen, security, open terrace &amp; more</p>
        </div>
        <div className="amen-grid">
          {AMENITIES.map((a, i) => (
            <div className="amen-card" key={i}>
              <div className="amen-icon" aria-hidden="true">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── NEARBY ─────────────────────────────────────────────────────────────────
function Nearby() {
  return (
    <section id="nearby" className="nearby section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Location Highlights</span>
          <h2 className="sec-title">Everything Close By</h2>
          <p className="sec-sub">Sector 12, Kharghar — perfectly connected to transport, food, colleges &amp; recreation</p>
        </div>
        <div className="nearby-grid">
          {NEARBY.map((n, i) => (
            <div key={i} className="nearby-card">
              <div className="nearby-icon" aria-hidden="true">{n.icon}</div>
              <div className="nearby-body">
                <strong>{n.place}</strong>
                <span className="nearby-dist">{n.dist}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="map-cta">
          <a href="https://maps.google.com/?q=Plot+G49+Row+House+Near+Vedanta+Hospital+Sector+12+Kharghar+Navi+Mumbai"
             target="_blank" rel="noreferrer" className="btn-gold">
            📍 Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

// ── GALLERY ────────────────────────────────────────────────────────────────
function Gallery() {
  const cats = [
    { key: 'all',       label: 'All Photos'   },
    { key: 'single',    label: 'Single Room'  },
    { key: 'twin',      label: 'Twin Sharing' },
    { key: 'other',     label: 'AC Room'      },
    { key: 'common',    label: 'Common Area'  },
    { key: 'kitchen',   label: 'Kitchen'      },
    { key: 'amenities', label: 'Amenities'    },
    { key: 'exterior',  label: 'Exterior'     },
  ];
  const [filter, setFilter] = useState('all');
  const [lb, setLb]         = useState(null);
  const [lbIdx, setLbIdx]   = useState(0);
  const shown = filter === 'all' ? GALLERY : GALLERY.filter(p => p.cat === filter);
  const openLb = (p, i) => { setLb(shown); setLbIdx(i); };
  const prev = e => { e.stopPropagation(); setLbIdx(i => (i - 1 + lb.length) % lb.length); };
  const next = e => { e.stopPropagation(); setLbIdx(i => (i + 1) % lb.length); };
  useEffect(() => {
    const fn = e => {
      if (e.key === 'Escape')                   setLb(null);
      if (e.key === 'ArrowLeft'  && lb) setLbIdx(i => (i - 1 + lb.length) % lb.length);
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
        <div className="gal-filters" role="tablist" aria-label="Gallery filter">
          {cats.map(c => (
            <button key={c.key} className={`gf-btn${filter === c.key ? ' active' : ''}`}
                    onClick={() => setFilter(c.key)} role="tab"
                    aria-selected={filter === c.key}>{c.label}</button>
          ))}
        </div>
        <div className="gal-grid">
          {shown.map((p, i) => (
            <div key={i} className="gal-item" onClick={() => openLb(p, i)}
                 role="button" tabIndex={0} aria-label={`View ${p.label} photo`}
                 onKeyDown={e => e.key === 'Enter' && openLb(p, i)}>
              <div className="gal-img" style={{ backgroundImage: `url(${p.src})` }} />
              <div className="gal-cover">
                <span className="gal-lbl">{p.label}</span>
                <span className="gal-plus" aria-hidden="true">⊕</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lb && (
        <div className="lightbox" onClick={() => setLb(null)} role="dialog" aria-modal="true"
             aria-label="Photo lightbox">
          <button className="lb-close" onClick={() => setLb(null)} aria-label="Close lightbox">✕</button>
          <button className="lb-prev" onClick={prev} aria-label="Previous photo">‹</button>
          <img src={lb[lbIdx].src} alt={`Rajendra PG Kharghar - ${lb[lbIdx].label}`}
               onClick={e => e.stopPropagation()} loading="lazy" />
          <button className="lb-next" onClick={next} aria-label="Next photo">›</button>
          <p>{lb[lbIdx].label} <span className="lb-count">{lbIdx + 1} / {lb.length}</span></p>
        </div>
      )}
    </section>
  );
}

// ── RULES ──────────────────────────────────────────────────────────────────
function Rules() {
  return (
    <section id="rules" className="rules section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">House Rules</span>
          <h2 className="sec-title">Guidelines &amp; Policies</h2>
          <p className="sec-sub">Designed to ensure a comfortable, safe environment for everyone.</p>
        </div>
        <div className="rgen-grid">
          {GENERAL_RULES.map((r, i) => (
            <div key={i} className="rgen-card">
              <div className="rgen-icon-wrap"><span className="rgen-icon" aria-hidden="true">{r.icon}</span></div>
              <div className="rgen-text"><strong>{r.title}</strong><p>{r.desc}</p></div>
            </div>
          ))}
        </div>
        <div className="rperm-grid">
          <div className="rperm-panel rperm-allowed">
            <div className="rperm-panel-header">
              <div className="rperm-icon-circle allowed-circle" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div><h4>Permitted</h4><p>Activities welcome at the PG</p></div>
            </div>
            <ul className="rperm-list">
              {RULES_ALLOWED.map((r, i) => (
                <li key={i}><span className="rperm-bullet allowed-bullet" aria-hidden="true">✓</span><span>{r}</span></li>
              ))}
            </ul>
          </div>
          <div className="rperm-panel rperm-prohibited">
            <div className="rperm-panel-header">
              <div className="rperm-icon-circle prohibited-circle" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div><h4>Prohibited</h4><p>Not permitted on the premises</p></div>
            </div>
            <ul className="rperm-list">
              {RULES_NOTALLOWED.map((r, i) => (
                <li key={i}><span className="rperm-bullet prohibited-bullet" aria-hidden="true">✕</span><span>{r}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rules-disclaimer">
          <span className="rules-disclaimer-icon" aria-hidden="true">📋</span>
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

// ── CONTACT ────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', roomtype: '', message: '' });
  const [sent, setSent]  = useState(false);
  const set    = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
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
              { icon: '👤', label: 'Owner',            val: 'Rajendra Narayan Gulhane',    href: null },
              { icon: '📞', label: 'Phone / WhatsApp', val: '+91 89994 22873',              href: 'tel:+918999422873' },
              { icon: '✉️', label: 'Email',            val: 'rajendragulhane21@gmail.com', href: 'mailto:rajendragulhane21@gmail.com' },
              { icon: '⏰', label: 'Visiting Hours',   val: '9:00 AM – 8:00 PM (All days)', href: null },
              { icon: '🕐', label: 'Check-In Time',    val: '24 Hours (8 AM to 8 AM daily)', href: null },
              { icon: '🚪', label: 'Gate Closes',      val: '11:00 PM every day',           href: null },
            ].map((c, i) => (
              <div key={i} className="cinfo-row">
                <span className="cinfo-icon" aria-hidden="true">{c.icon}</span>
                <div>
                  <strong>{c.label}</strong>
                  {c.href ? <p><a href={c.href}>{c.val}</a></p> : <p>{c.val}</p>}
                </div>
              </div>
            ))}
            <div className="cinfo-row">
              <span className="cinfo-icon" aria-hidden="true">📍</span>
              <div>
                <strong>Address</strong>
                <p>
                  <strong className="addr-highlight">Plot No. G49, Row House, Sector 12,</strong>{' '}
                  Near Vedanta Hospital, Next to Anjali Pharma Cure, Kharghar, Navi Mumbai — 410210
                </p>
              </div>
            </div>
            <div className="payment-box">
              <h4>💳 Payment (Owner Only)</h4>
              <p><strong>UPI:</strong> 8999422873-2@ybl</p>
              <p><strong>Bank:</strong> Bank of Maharashtra</p>
              <p><strong>A/c No:</strong> 68023971562</p>
              <p className="payment-note">⚠️ No agents — pay directly to owner only</p>
            </div>
            <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20interested%20in%20your%20PG%20in%20Kharghar"
               target="_blank" rel="noreferrer" className="wa-btn">
              💬 Chat on WhatsApp
            </a>
          </div>

          <form className="cform" onSubmit={submit} aria-label="PG enquiry form">
            {sent ? (
              <div className="form-ok">
                <span aria-hidden="true">✅</span>
                <h4>Thank you! Rajendra will contact you shortly.</h4>
              </div>
            ) : (
              <>
                <div className="frow">
                  <div className="fgroup">
                    <label htmlFor="name">Your Name *</label>
                    <input id="name" name="name" required value={form.name} onChange={set} placeholder="Full name" autoComplete="name" />
                  </div>
                  <div className="fgroup">
                    <label htmlFor="phone">Phone *</label>
                    <input id="phone" name="phone" required value={form.phone} onChange={set} placeholder="+91 XXXXX XXXXX" autoComplete="tel" />
                  </div>
                </div>
                <div className="frow">
                  <div className="fgroup">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={set} placeholder="your@email.com" autoComplete="email" />
                  </div>
                  <div className="fgroup">
                    <label htmlFor="roomtype">Room Type</label>
                    <select id="roomtype" name="roomtype" value={form.roomtype} onChange={set}>
                      <option value="">Select...</option>
                      <optgroup label="── Sharing Rooms ──">
                        <option>Single Sharing – ₹9,000/mo/person</option>
                        <option>Double Sharing – ₹6,500/mo/person</option>
                        <option>Triple Sharing – ₹5,000/mo/person</option>
                      </optgroup>
                      <optgroup label="── Dormitory ──">
                        <option>Dormitory Standard – ₹5,500/bed/month</option>
                        <option>Dormitory Premium – ₹6,500/bed/month</option>
                        <option>Dormitory AC Single – ₹7,500/bed/month</option>
                        <option>Dormitory Daily – ₹500/day</option>
                      </optgroup>
                      <optgroup label="── Girls Rooms ──">
                        <option>Girls Room Standard – ₹5,500+GST/mo</option>
                        <option>Girls Room Premium – ₹6,500+GST/mo</option>
                      </optgroup>
                      <optgroup label="── Other ──">
                        <option>Family Room – ₹1,200/day (2 Adults + 1 Kid)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="fgroup">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={set}
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

// ── FOOTER ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-icon">
            <svg width="28" height="28" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="36" height="36" rx="7" fill="#252220" stroke="#c9a84c" strokeWidth="1.2"/>
              <polyline points="7,28 18,10 29,28" fill="none" stroke="#c9a84c" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"/>
              <text x="18" y="34" textAnchor="middle" fontFamily="Georgia,serif" fontSize="9" fill="#c9a84c" fontWeight="700">R</text>
            </svg>
          </span>
          <span className="brand-text-wrap">
            <span className="brand-name">Rajendra</span>
            <span className="brand-pg">HOMESTAY</span>
          </span>
        </div>

        {/* ── SEO INTERNAL LINKS ── */}
        <div className="seo-footer-links">
          <p className="sfl-title">Explore More</p>
          <div className="sfl-grid">
            {[
              { to: '/pg-in-kharghar',                   label: 'PG in Kharghar',                   desc: 'From ₹5,000/month' },
              { to: '/girls-pg-kharghar',                label: 'Girls PG in Kharghar',             desc: '1st Floor Exclusive' },
              { to: '/pg-near-kharghar-metro',           label: 'PG Near Kharghar Metro',           desc: '3 Min Walk' },
              { to: '/cheap-pg-navi-mumbai',             label: 'Cheap PG Navi Mumbai',             desc: 'Budget Options' },
              { to: '/pg-for-working-professionals',     label: 'PG for Professionals',             desc: 'WiFi · AC · Metro' },
              { to: '/furnished-pg-kharghar',            label: 'Furnished PG Kharghar',            desc: 'Fully Furnished Rooms' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="sfl-item">
                <span className="sfl-label">{l.label}</span>
                <span className="sfl-desc">{l.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        <p className="footer-loc">📍 <strong>Plot No. G49, Row House, Sector 12,</strong> Near Vedanta Hospital, Next to Anjali Pharma Cure, Kharghar, Navi Mumbai — 410210 · Girls &amp; Gents · Owner Listed</p>
        <p className="footer-contact">
          <a href="tel:+918999422873">+91 89994 22873</a>
          &nbsp;·&nbsp;
          <a href="mailto:rajendragulhane21@gmail.com">rajendragulhane21@gmail.com</a>
        </p>
        <div className="footer-listed">
          <span className="footer-listed-label">Also listed on:</span>
          <a href="https://www.booking.com" target="_blank" rel="noreferrer" className="footer-platform booking-footer">booking<strong>.com</strong></a>
          <a href="https://www.justdial.com" target="_blank" rel="noreferrer" className="footer-platform jd-footer"><span>JD</span> JustDial</a>
        </div>
        <div className="footer-links">
          {['home','about','rooms','amenities','nearby','gallery','rules','contact'].map(l => (
            <a key={l} href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Rajendra PG · All rights reserved · No Agents · Sector 12, Kharghar, Navi Mumbai</p>
      </div>
    </footer>
  );
}

// ── HOME PAGE (all sections) ───────────────────────────────────────────────
function HomePage() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Helmet>
        <title>Rajendra PG Kharghar | Best PG in Navi Mumbai | Girls & Gents — From ₹5,000/Month</title>
        <meta name="description" content="Top-rated PG in Sector 12, Kharghar, Navi Mumbai. AC rooms for girls & gents. Single ₹9,000, Double ₹6,500, Triple ₹5,000/month. 3 min from Kharghar metro. No brokerage — owner Rajendra Gulhane: +91 89994 22873." />
        <meta name="keywords" content="PG in Kharghar, PG Navi Mumbai, girls PG Kharghar, boys PG Kharghar, paying guest Kharghar, PG near Kharghar metro, cheap PG Navi Mumbai, AC PG Kharghar, Rajendra PG, PG Sector 12 Kharghar, PG accommodation Kharghar, best PG Kharghar, affordable PG Navi Mumbai, PG without brokerage Kharghar" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Rajendra Narayan Gulhane" />
        <link rel="canonical" href="https://rajendrahomestay.in/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajendrahomestay.in/" />
        <meta property="og:title" content="Rajendra PG Kharghar | Best PG in Navi Mumbai — From ₹5,000/Month" />
        <meta property="og:description" content="Safe, modern AC PG in Sector 12, Kharghar, Navi Mumbai. Girls & gents. 3 min from metro. No brokerage. Call +91 89994 22873." />
        <meta property="og:image" content="https://rajendrahomestay.in/exterior_view/GR2-228455-1085807.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rajendra Homestay PG" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rajendra PG Kharghar — From ₹5,000/Month" />
        <meta name="twitter:description" content="Safe AC PG for girls & gents in Sector 12, Kharghar, Navi Mumbai. 3 min from metro. No brokerage." />
        <meta name="twitter:image" content="https://rajendrahomestay.in/exterior_view/GR2-228455-1085807.jpg" />

        {/* Geo */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Kharghar, Navi Mumbai" />
        <meta name="geo.position" content="19.0476;73.0693" />
        <meta name="ICBM" content="19.0476, 73.0693" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Rajendra Homestay PG",
          "url": "https://rajendrahomestay.in",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://rajendrahomestay.in/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}</script>
      </Helmet>
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
           target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp Rajendra Gulhane — PG Kharghar"
           aria-label="Chat on WhatsApp">💬</a>
      </div>
    </>
  );
}

// ── SEO PAGE WRAPPER (adds Navbar + Footer + WA float) ────────────────────
function SeoPageWrapper({ children }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <div className="app">
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Site navigation">
        <Link to="/" className="nav-brand" aria-label="Rajendra Homestay - Home">
          <img src="/logo.svg" alt="Rajendra Homestay PG Kharghar" className="brand-logo" width="48" height="48" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="/#rooms">Rooms</a></li>
          <li><a href="/#amenities">Amenities</a></li>
          <li><a href="/#gallery">Gallery</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      {children}
      <Footer />
      <a href="https://wa.me/918999422873?text=Hi%20Rajendra%2C%20I'm%20interested%20in%20your%20PG%20in%20Kharghar"
         target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp Rajendra"
         aria-label="Chat on WhatsApp">💬</a>
    </div>
  );
}

// ── ROOT APP WITH ROUTER ───────────────────────────────────────────────────
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/"                              element={<HomePage />} />
          <Route path="/pg-in-kharghar"                element={<SeoPageWrapper><PgInKharghar /></SeoPageWrapper>} />
          <Route path="/girls-pg-kharghar"             element={<SeoPageWrapper><GirlsPgKharghar /></SeoPageWrapper>} />
          <Route path="/pg-near-kharghar-metro"        element={<SeoPageWrapper><PgNearKhargharMetro /></SeoPageWrapper>} />
          <Route path="/cheap-pg-navi-mumbai"          element={<SeoPageWrapper><CheapPgNaviMumbai /></SeoPageWrapper>} />
          <Route path="/pg-for-working-professionals"  element={<SeoPageWrapper><PgForWorkingProfessionals /></SeoPageWrapper>} />
          <Route path="/furnished-pg-kharghar"         element={<SeoPageWrapper><FurnishedPgKharghar /></SeoPageWrapper>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}