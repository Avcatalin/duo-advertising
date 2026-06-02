'use client';

import { useState } from 'react';

interface Project {
  id: string;
  href: string;
  tags: string[];
  year: number;
  thumbStyle: React.CSSProperties;
  thumbLabel: string;
  thumbLabelStyle?: React.CSSProperties;
  meta: string;
  title: string;
  chips: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'angeline',
    href: '#',
    tags: ['ecommerce', 'brand'],
    year: 2024,
    thumbStyle: { background: 'linear-gradient(135deg, #1a1207, #4a2812 60%, #ff5c35)', aspectRatio: '4/3' },
    thumbLabel: '[ angeline.ro ]',
    thumbLabelStyle: { color: 'rgba(255,255,255,0.4)' },
    meta: '2024 · Cake boutique',
    title: 'Angeline Cake Boutique',
    chips: ['WooCommerce', 'Brand', 'Photography'],
  },
  {
    id: 'matt',
    href: '#',
    tags: ['brand', 'next'],
    year: 2024,
    thumbStyle: { background: '#0a0a0a', aspectRatio: '4/3' },
    thumbLabel: '[ matt audio ]',
    thumbLabelStyle: { color: 'rgba(255,255,255,0.35)' },
    meta: '2024 · Audio brand',
    title: 'Matt Audio',
    chips: ['Next.js', 'Sanity', 'Brand'],
  },
  {
    id: 'gfdv',
    href: '#',
    tags: ['hubspot'],
    year: 2024,
    thumbStyle: { background: '#0e1d18', aspectRatio: '4/3' },
    thumbLabel: '[ gfdv ]',
    thumbLabelStyle: { color: 'rgba(255,255,255,0.35)' },
    meta: '2024 · Fitness coaching',
    title: 'GFDV',
    chips: ['HubSpot CMS', 'HubSpot CRM'],
  },
  {
    id: 'pixeldot',
    href: '#',
    tags: ['next', 'ecommerce'],
    year: 2024,
    thumbStyle: { background: 'var(--bg-2)', aspectRatio: '4/3' },
    thumbLabel: '[ pixeldot ]',
    meta: '2024 · Digital agency',
    title: 'Pixeldot',
    chips: ['Next.js', 'Headless'],
  },
  {
    id: 'confydent',
    href: '#',
    tags: ['hubspot'],
    year: 2023,
    thumbStyle: { background: 'var(--bg-2)', aspectRatio: '4/3' },
    thumbLabel: '[ confydent ]',
    meta: '2023 · Business training',
    title: 'Confydent',
    chips: ['WordPress', 'HubSpot CRM'],
  },
  {
    id: 'evo',
    href: '#',
    tags: ['brand'],
    year: 2023,
    thumbStyle: { background: '#ff5c35', aspectRatio: '4/3' },
    thumbLabel: '[ evo advertising ]',
    thumbLabelStyle: { color: 'rgba(255,255,255,0.5)' },
    meta: '2023 · Outdoor advertising',
    title: 'Evo Advertising',
    chips: ['Brand', 'WordPress'],
  },
  {
    id: 'pasteis',
    href: '#',
    tags: ['ecommerce'],
    year: 2023,
    thumbStyle: { background: '#f1ece2', aspectRatio: '4/3' },
    thumbLabel: '[ pasteis de nata ]',
    meta: '2023 · Patisserie',
    title: 'Pasteis Patisserie',
    chips: ['WooCommerce', 'Photography'],
  },
  {
    id: 'nft',
    href: '#',
    tags: ['next'],
    year: 2022,
    thumbStyle: { background: '#102a1f', aspectRatio: '4/3' },
    thumbLabel: '[ nft workshops ]',
    thumbLabelStyle: { color: 'rgba(255,255,255,0.35)' },
    meta: '2022 · Education platform',
    title: 'NFT Workshops',
    chips: ['Next.js', 'Sanity'],
  },
  {
    id: 'tortul',
    href: '#',
    tags: ['ecommerce', 'brand'],
    year: 2022,
    thumbStyle: { background: 'var(--bg-2)', aspectRatio: '4/3' },
    thumbLabel: '[ tortul perfect ]',
    meta: '2022 · Custom cakes',
    title: 'Tortul Perfect',
    chips: ['WooCommerce', 'Brand'],
  },
];

const FILTERS = [
  { key: 'all', label: 'All', count: 9 },
  { key: 'ecommerce', label: 'E‑commerce', count: 3 },
  { key: 'hubspot', label: 'HubSpot', count: 2 },
  { key: 'brand', label: 'Brand + Web', count: 2 },
  { key: 'next', label: 'Next.js', count: 2 },
];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState<'recent' | 'older'>('recent');

  const visible = PROJECTS
    .filter((p) => activeFilter === 'all' || p.tags.includes(activeFilter))
    .sort((a, b) => sortOrder === 'recent' ? b.year - a.year : a.year - b.year);

  return (
    <>
      {/* Filter bar */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="filter-bar reveal">
            <div className="chip-row">
              {FILTERS.map(({ key, label, count }) => (
                <button
                  key={key}
                  className={`chip${activeFilter === key ? ' is-on' : ''}`}
                  onClick={() => setActiveFilter(key)}
                >
                  {label} <span className="mono">·{count}</span>
                </button>
              ))}
            </div>
            <div className="row" style={{ gap: '8px' }}>
              <span className="mono small muted">Sort</span>
              <select
                className="mini-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'recent' | 'older')}
              >
                <option value="recent">Most recent</option>
                <option value="older">Oldest first</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 64px)' }}>
        <div className="container">
          {visible.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
              <span className="mono small">No projects match this filter — yet.</span>
            </div>
          ) : (
            <div className="work-grid">
              {visible.map((p) => (
                <a key={p.id} href={p.href} className="card-work">
                  <div className="cw-thumb" style={p.thumbStyle}>
                    <div className="ph-label" style={p.thumbLabelStyle}>{p.thumbLabel}</div>
                  </div>
                  <div className="cw-meta">
                    <div className="cw-row">
                      <span className="mono small muted">{p.meta}</span>
                      <span className="mono small text-orange">↗</span>
                    </div>
                    <h3 className="h3">{p.title}</h3>
                    <div className="cw-tags">
                      {p.chips.map((c) => <span key={c}>{c}</span>)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
