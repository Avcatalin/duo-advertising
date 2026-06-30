import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Duo Advertising — Independent web studio',
};

function Arr() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ============= HERO ============= */}
      <section className="hero hero-dark">
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="dots" aria-hidden="true" />
        <div className="container">
          <div className="reveal">
            <span className="pill"><span className="dot" /> Design. Build. Improve.</span>
          </div>
          <h1 className="display reveal" data-delay="1" style={{ marginTop: '28px', maxWidth: '14ch' }}>
            Digital products,<br />built with <span style={{ color: 'var(--orange)' }}>intention</span>.
          </h1>
          <div className="row reveal" data-delay="2" style={{ marginTop: '40px', maxWidth: '760px', gap: '32px' }}>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Duo Advertising is a web agency helping businesses design, build, and improve digital platforms that support growth. We create custom websites, eCommerce experiences, and HubSpot solutions, including CRM setup, pipeline configuration, HubSpot CMS development, custom modules, landing pages, and integrations.
            </p>
          </div>
          <div className="row reveal" data-delay="3" style={{ marginTop: '40px', gap: '14px' }}>
            <Link href="/process" className="btn btn-primary">
              Our process
              <Arr />
            </Link>
            <Link href="/services" className="btn btn-ghost-dark">
              What we do
            </Link>
          </div>

          {/* Hero meta strip */}
          <div className="hero-meta-strip reveal" data-delay="4" style={{ marginTop: 'clamp(72px, 10vw, 140px)' }}>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Since</div>
              <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '28px', letterSpacing: '-0.02em', marginTop: '8px' }}>2015</div>
            </div>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Projects shipped</div>
              <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '28px', letterSpacing: '-0.02em', marginTop: '8px' }}>82<span style={{ color: 'var(--orange)' }}>+</span></div>
            </div>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Clients</div>
              <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '28px', letterSpacing: '-0.02em', marginTop: '8px' }}>60</div>
            </div>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Avg response</div>
              <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '28px', letterSpacing: '-0.02em', marginTop: '8px' }}>&lt; 2h</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= INTRO ============= */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div className="reveal">
              <span className="eyebrow">01 / About</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>
                A focused agency<br />
                that scales with the work.
              </h2>
            </div>
            <div className="reveal" data-delay="1" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p className="lead">
                We are builders first. Duo Advertising brings together design, web development, and HubSpot expertise to create websites, eCommerce platforms, and CRM systems that support real business growth.
              </p>
              <p style={{ color: 'var(--muted)', maxWidth: '60ch' }}>
                Every project is handled by a focused team with clear communication, practical execution, and trusted collaborators when the scope requires more depth.
              </p>
              <div className="row" style={{ marginTop: '8px' }}>
                <Link href="/about" className="btn btn-ghost">
                  Read the long version
                  <Arr />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============= SERVICES OVERVIEW ============= */}
      <section className="section">
        <div className="container">
          <div className="between reveal" style={{ marginBottom: '56px' }}>
            <div>
              <span className="eyebrow">02 / Services</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Five things, done properly.</h2>
            </div>
            <Link href="/services" className="btn btn-ghost">
              Full breakdown
              <Arr />
            </Link>
          </div>

          {/* 3 + 2 grid using 6-column base */}
          <div className="svc-overview-grid">

            {[
              { num: '01', label: 'Sales + RevOps', title: 'HubSpot CRM', desc: 'Pipelines, automations, and CRM setup your team will actually use.', idealFor: 'For sales teams', href: '/services#hubspot-crm', span: 2 },
              { num: '02', label: 'Marketing site', title: 'HubSpot CMS', desc: 'Custom themes with modular content blocks your marketing team can edit independently.', idealFor: 'For marketing teams', href: '/services#hubspot-cms', span: 2 },
              { num: '03', label: 'E‑commerce', title: 'WordPress + WooCommerce', desc: 'Fast, conversion-focused stores built to be maintained without agency dependency.', idealFor: 'For eCommerce brands', href: '/services#wordpress', span: 2 },
              { num: '04', label: 'Design', title: 'Figma design', desc: 'Brand-aligned design systems with proper components, variables, and handoff docs.', idealFor: 'For product teams', href: '/services#figma', span: 3 },
              { num: '05', label: 'Front‑end', title: 'Next.js / React', desc: 'Custom sites built on Next.js — fast by default, component-driven, and fully yours', idealFor: 'For product teams', href: '/services#nextjs', span: 3 },
            ].map((svc, i) => (
              <Link
                key={svc.num}
                href={svc.href}
                className="card reveal"
                data-delay={i > 0 ? String(Math.min(i, 4)) : undefined}
                style={{
                  gridColumn: `span ${svc.span}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  textDecoration: 'none',
                  color: 'inherit',
                  minHeight: '220px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                  <span className="mono small text-orange">{svc.num}</span>
                  <span className="eyebrow">{svc.label}</span>
                </div>
                <h3 className="h3" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>{svc.title}</h3>
                <p className="small muted" style={{ marginTop: '10px', marginBottom: '10px', lineHeight: '1.55' }}>{svc.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)' }}>
                  <span className="mono small muted">{svc.idealFor}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: 'var(--orange)' }}>
                    Learn more <Arr />
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============= WORK ============= */}
      <section className="section">
        <div className="container">
          <div className="between reveal" style={{ marginBottom: '56px' }}>
            <div>
              <span className="eyebrow">03 / Work</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>A few things we&apos;re proud of.</h2>
            </div>
          </div>

          <div className="home-work-grid">
            {[
              {
                href: 'https://angelinecakes.ro/',
                year: '2024',
                category: 'E-commerce',
                title: 'Angeline Cake Boutique',
                tags: ['WooCommerce', 'Brand', 'Photography'],
                image: '/images/angeline-cakes.jpg',
              },
              {
                href: 'https://dental4uclinic.ie/',
                year: '2023',
                category: 'WordPress',
                title: 'Dental4U Clinic',
                tags: ['WordPress', 'Pixeldot collaboration'],
                image: '/images/dental-4u.jpg',
              },
              {
                href: 'https://vaditex.ro/',
                year: '2024',
                category: 'Brand + Web',
                title: 'VadiTex',
                tags: ['WordPress', 'Brand', 'Pixeldot collaboration'],
                image: '/images/vadi-tex-website.jpg',
              },
              {
                href: 'https://marmirom.ro/',
                year: '2024',
                category: 'WordPress',
                title: 'Marmirom',
                tags: ['WordPress', 'Pixeldot collaboration'],
                image: '/images/marmirom.jpg',
              },
              {
                href: 'https://terapi.ro/',
                year: '2023',
                category: 'WordPress',
                title: 'Terapi',
                tags: ['WordPress'],
                image: '/images/terapi.png',
              },
            ].map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="card-work home-work-card reveal"
                data-delay={String(Math.min(i, 3))}
                target='_blank'
              >
                <div className="home-work-thumb">
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', objectPosition: 'left' }} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="cw-meta">
                  <div className="cw-row">
                    <span className="mono small muted">{p.category}</span>
                    <span className="mono small text-orange">↗</span>
                  </div>
                  <h3 className="h3" style={{ marginTop: '8px' }}>{p.title}</h3>
                  <div className="cw-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ============= APPROACH ============= */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '760px', marginBottom: '64px' }}>
            <span className="eyebrow">04 / Approach</span>
            <h2 className="h2" style={{ marginTop: '18px' }}>Four clear phases. No surprises.</h2>
          </div>

          <div className="approach-grid">
            <div className="approach-cell reveal">
              <div className="approach-num">01</div>
              <h3 className="h3">Discover</h3>
              <p className="small muted" style={{ marginTop: '10px' }}>Audit, research, and planning to align business goals, user needs, and project priorities.</p>
            </div>
            <div className="approach-cell reveal" data-delay="1">
              <div className="approach-num">02</div>
              <h3 className="h3">Design</h3>
              <p className="small muted" style={{ marginTop: '10px' }}>Website flows, Figma designs, and reusable components created with clear feedback loops.</p>
            </div>
            <div className="approach-cell reveal" data-delay="2">
              <div className="approach-num">03</div>
              <h3 className="h3">Build</h3>
              <p className="small muted" style={{ marginTop: '10px' }}>Production-ready websites and CMS platforms built on Next.js, HubSpot, or WordPress.</p>
            </div>
            <div className="approach-cell reveal" data-delay="3">
              <div className="approach-num">04</div>
              <h3 className="h3">Improve</h3>
              <p className="small muted" style={{ marginTop: '10px' }}>Analytics, testing, and ongoing optimization to improve performance after launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CLIENTS ============= */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="eyebrow">05 / Trusted by</span>
            <h2 className="h2" style={{ marginTop: '18px' }}>Partners & clients.</h2>
          </div>
          <div className="clients-grid">
            {['ApprovalMax', 'charles', 'DataArt', 'Neorimia', 'EvoAds', 'Confident', 'PixelDot'].map((name) => (
              <div key={name} className="client-cell">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>
            <span className="eyebrow">06 / Let&apos;s work together</span>
            <h2 className="h2" style={{ maxWidth: '16ch' }}>
              We don&apos;t pitch.<br />
              <span style={{ color: 'var(--orange)' }}>We just talk.</span>
            </h2>
            <p className="lead" style={{ color: 'var(--muted)', maxWidth: '48ch' }}>
              Tell us what you&apos;re working on. We&apos;ll be straight about whether we&apos;re the right fit — and if we are, we move fast.
            </p>
            <div className="row" style={{ gap: '12px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                Start a conversation
                <Arr />
              </Link>
              <Link href="/services" className="btn btn-ghost" style={{ padding: '14px 28px' }}>
                See what we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
