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
    name: 'Single Room',
    price: '₹9,000',
    period: '/month',
    available: 7,
    imgs: ['/single_room/1.jpg','/single_room/2.jpg','/single_room/3.jpg',
           '/single_room/4.jpg','/single_room/5.jpg','/single_room/6.jpg'],
    highlight: false,
    amenities: ['Attached Washroom','Cupboard','Cot & Mattress','Side Table','Geyser'],
  },
  {
    name: 'Twin Sharing',
    price: '₹8,000',
    period: '/month/person',
    available: 2,
    imgs: ['/twin_sharing/7.jpg','/twin_sharing/8.jpg'],
    highlight: true,
    badge: 'Best Value',
    amenities: ['Attached Washroom','Cupboard','Cot & Mattress','Side Table','Geyser'],
  },
  {
    name: 'AC Room',
    price: '₹5,500',
    period: '/month',
    available: 1,
    imgs: ['/other_rooms/9.jpg'],
    highlight: false,
    badge: 'Limited',
    amenities: ['Air Conditioning','Attached Washroom','Cupboard','Cot & Mattress','Geyser'],
  },
];

const AMENITIES = [
  { icon: '📶', title: 'High-Speed WiFi',   desc: 'Available across the entire PG' },
  { icon: '❄️', title: 'AC Rooms',          desc: 'Air-conditioned rooms available' },
  { icon: '🚗', title: 'Parking',           desc: 'Car & 2-wheeler parking on premises' },
  { icon: '🧹', title: 'Room Cleaning',     desc: 'Regular housekeeping service' },
  { icon: '🧺', title: 'Laundry',           desc: 'Laundry facility available' },
  { icon: '🧊', title: 'Fridge',            desc: 'Shared refrigerator access' },
  { icon: '🚰', title: 'RO Water Cooler',   desc: 'Purified drinking water 24/7' },
  { icon: '🛡️', title: 'Warden',            desc: 'On-site warden for your safety' },
];

const RULES_ALLOWED    = ['Visitor Entry','Non-Veg Food','Loud Music','Party'];
const RULES_NOTALLOWED = ['Opposite Gender','Smoking','Drinking'];

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
      </div>
      <div className="room-body">
        <div className="room-head">
          <h3>{room.name}</h3>
          <span className="room-avail">{room.available} available</span>
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

function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['Home','About','Rooms','Amenities','Gallery','Rules','Contact'];
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="nav-brand">
        <span className="brand-star">✦</span>
        <span className="brand-name">Skylux</span>
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
        <span/><span/><span/>
      </button>
    </nav>
  );
}

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
        <p className="hero-eyebrow">✦ Boys PG · Kharghar, Navi Mumbai</p>
        <h1 className="hero-heading">
          Live Smart,<br/><em>Live at Skylux</em>
        </h1>
        <p className="hero-sub">
          Modern & spacious rooms in Sector 12, Kharghar — close to colleges,
          offices and everything you need. Operating since 2018.
        </p>
        <div className="hero-chips">
          <span>🛏 17 Beds</span>
          <span>📍 Sector 12, Kharghar</span>
          <span>⭐ Since 2018</span>
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

function About() {
  const stats = [
    { val: '17', label: 'Total Beds' },
    { val: '7+', label: 'Years Running' },
    { val: '3',  label: 'Room Types' },
    { val: '8',  label: 'Amenities' },
  ];
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-imgs">
            <div className="aimg-main" style={{ backgroundImage: `url(/exterior_view/GR2-228455-1085807.jpg)` }} />
            <div className="aimg-stack">
              <div className="aimg-sm" style={{ backgroundImage: `url(/common_area/GR2-228455-1256389.jpg)` }} />
              <div className="aimg-sm" style={{ backgroundImage: `url(/single_room/1.jpg)` }} />
            </div>
          </div>
          <div className="about-text">
            <span className="sec-label">About Skylux PG</span>
            <h2 className="sec-title">Modern Living in<br/>the Heart of Kharghar</h2>
            <p>Skylux PG is a premium boys-only accommodation in <strong>Sector 12, Kharghar, Navi Mumbai</strong> — strategically located close to major educational institutions and commercial hubs.</p>
            <p>Operating since <strong>2018</strong>, we've built a reputation for clean, well-maintained rooms and a safe, comfortable environment for students and working professionals.</p>
            <div className="about-stats">
              {stats.map((s, i) => (
                <div key={i} className="astat">
                  <strong>{s.val}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="about-tags">
              <span>👦 Boys Only</span>
              <span>📍 Sector 12, Kharghar</span>
              <span>🚇 Near Metro & Colleges</span>
              <span>🏠 Since 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="rooms section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Room Options</span>
          <h2 className="sec-title">Choose Your Space</h2>
          <p className="sec-sub">₹5,500 refundable deposit · 1 month notice period · No gate closing time</p>
        </div>
        <div className="rooms-grid">
          {ROOMS.map((r, i) => <RoomCard key={i} room={r} />)}
        </div>
        <div className="deposit-note">
          <span>💰</span>
          <p>Refundable deposit of <strong>₹5,500</strong> required at booking. Notice period: <strong>1 month</strong>.</p>
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="amenities section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Facilities</span>
          <h2 className="sec-title">Everything You Need</h2>
          <p className="sec-sub">8 amenities available across the PG</p>
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

  const openLb = (i) => { setLb(shown); setLbIdx(i); };
  const prev = e => { e.stopPropagation(); setLbIdx(i => (i - 1 + lb.length) % lb.length); };
  const next = e => { e.stopPropagation(); setLbIdx(i => (i + 1) % lb.length); };

  useEffect(() => {
    const fn = e => {
      if (e.key === 'Escape') setLb(null);
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
          <h2 className="sec-title">See Skylux Up Close</h2>
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
            <div key={i} className="gal-item" onClick={() => openLb(i)}>
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


const GENERAL_RULES = [
  { icon: '🔔', title: 'Notice Period',     desc: '1 month written notice required before vacating' },
  { icon: '🚪', title: 'Gate Access',       desc: 'No gate closing time — 24/7 open access for all residents' },
  { icon: '💰', title: 'Security Deposit',  desc: '₹5,500 fully refundable at the time of move-out' },
  { icon: '👦', title: 'Occupancy',         desc: 'Boys only PG — students & professionals welcome' },
];
 
function Rules() {
  return (
    <section id="rules" className="rules section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">House Rules</span>
          <h2 className="sec-title">Guidelines & Policies</h2>
          <p className="sec-sub">Designed to ensure a comfortable, respectful living environment for everyone at Skylux PG.</p>
        </div>
 
        {/* General policies — 4 horizontal cards */}
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
 
        {/* Allowed / Prohibited — two premium panels */}
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
                <p>Activities welcome at Skylux PG</p>
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
 
        {/* Disclaimer note */}
        <div className="rules-disclaimer">
          <span className="rules-disclaimer-icon">📋</span>
          <p>
            By choosing Skylux PG, residents agree to abide by the above guidelines.
            Rules may be updated with prior notice. For queries, contact{' '}
            <a href="tel:+9189994 22873">Rajendra at +91 89994 22873</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', roomtype:'', message:'' });
  const [sent, setSent] = useState(false);
  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ARoom Type: ${form.roomtype}%0A%0AMessage:%0A${form.message}`;
    window.location.href = `mailto:vekkul@gmail.com?subject=Skylux PG Enquiry - ${encodeURIComponent(form.name)}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="sec-header">
          <span className="sec-label">Get In Touch</span>
          <h2 className="sec-title">Book a Visit Today</h2>
          <p className="sec-sub">We'll respond within a few hours. Come see the rooms in person!</p>
        </div>
        <div className="contact-grid">
          <div className="cinfo">
            <h3>Contact Details</h3>
            {[
              { icon:'👤', label:'Owner / Manager',  val:'Rajendra Guljane',                             href: null },
              { icon:'📞', label:'Phone / WhatsApp',  val:'+91 89994 22873',                  href:'tel:+9189994 22873' },
              { icon:'✉️', label:'Email',             val:'rajendragulhane@gmail.com',                 href:'mailto:rajendragulhane@gmail.com' },
              { icon:'📍', label:'Address',           val:'Sector 12, Kharghar, Navi Mumbai', href: null },
              { icon:'⏰', label:'Visiting Hours',    val:'9:00 AM – 8:00 PM (All days)',     href: null },
            ].map((c, i) => (
              <div key={i} className="cinfo-row">
                <span className="cinfo-icon">{c.icon}</span>
                <div>
                  <strong>{c.label}</strong>
                  {c.href ? <p><a href={c.href}>{c.val}</a></p> : <p>{c.val}</p>}
                </div>
              </div>
            ))}
            <a href="https://wa.me/9189994 22873?text=Hi%20rajendra%2C%20I'm%20interested%20in%20Skylux%20PG%20in%20Kharghar"
               target="_blank" rel="noreferrer" className="wa-btn">
              💬 Chat on WhatsApp
            </a>
          </div>
          <form className="cform" onSubmit={submit}>
            {sent ? (
              <div className="form-ok">
                <span>✅</span>
                <h4>Thank you! Vinay will contact you shortly.</h4>
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
                      <option>Single Room – ₹9,000/mo</option>
                      <option>Twin Sharing – ₹8,000/mo</option>
                      <option>AC Room – ₹5,500/mo</option>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-star">✦</span>
          <span className="brand-name">Skylux</span>
          <span className="brand-pg">PG</span>
        </div>
        <p className="footer-loc">📍 Sector 12, Kharghar, Navi Mumbai · Boys Only · Since 2018</p>
        <p className="footer-contact">
          <a href="tel:+919390910012">+91 93909 10012</a>
          &nbsp;·&nbsp;
          <a href="mailto:vekkul@gmail.com">vekkul@gmail.com</a>
        </p>
        <div className="footer-links">
          {['home','about','rooms','amenities','gallery','rules','contact'].map(l => (
            <a key={l} href={`#${l}`}>{l[0].toUpperCase()+l.slice(1)}</a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Skylux PG · All rights reserved</p>
      </div>
    </footer>
  );
}

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
      <Gallery />
      <Rules />
      <Contact />
      <Footer />
      <a href="https://wa.me/919390910012?text=Hi%20Vinay%2C%20I'm%20interested%20in%20Skylux%20PG"
         target="_blank" rel="noreferrer" className="wa-float" title="WhatsApp Vinay">💬</a>
    </div>
  );
}