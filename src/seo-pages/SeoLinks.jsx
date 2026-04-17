import React from 'react';
import { Link } from 'react-router-dom';

export default function SeoLinks() {
  const links = [
    { to: '/pg-in-kharghar',                 label: 'PG in Kharghar',                desc: 'From ₹5,000/month' },
    { to: '/girls-pg-kharghar',              label: 'Girls PG in Kharghar',          desc: '1st Floor Exclusive' },
    { to: '/pg-near-kharghar-metro',         label: 'PG Near Kharghar Metro',        desc: '3 Min Walk' },
    { to: '/cheap-pg-navi-mumbai',           label: 'Cheap PG in Navi Mumbai',       desc: 'Budget Options' },
    { to: '/pg-for-working-professionals',   label: 'PG for Professionals',          desc: 'WiFi · AC · Metro' },
    { to: '/furnished-pg-kharghar',          label: 'Furnished PG Kharghar',         desc: 'Move-In Ready' },
  ];

  return (
    <div className="seo-footer-links">
      <p className="sfl-title">Explore More</p>
      <div className="sfl-grid">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="sfl-item">
            <span className="sfl-label">{l.label}</span>
            <span className="sfl-desc">{l.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}