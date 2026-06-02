import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Services' };

function Arr() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICES = [
  {
    id: 'hubspot-crm',
    num: '01',
    label: 'Sales + RevOps',
    title: 'HubSpot CRM',
    subtitle: 'implementation & ops.',
    lead: 'From clean migrations to custom pipelines, automated workflows, and Marketing/Sales/Service hubs that actually get used by your team.',
    includes: [
      'Pipeline & deal stage design',
      'Data migration from Salesforce / Pipedrive / spreadsheets',
      'Workflow automation & sequences',
      'Custom objects, properties, and reports',
    ],
    goodFit: [
      'You\'re migrating off spreadsheets, Salesforce, or a CRM nobody logs into',
      'Your sales team can\'t see pipeline clearly and forecasts are guesswork',
      'You need automation but don\'t have a dedicated RevOps hire',
      'You\'re growing fast and manual handoffs are starting to break',
    ],
    includesLabel: '// Includes',
  },
  {
    id: 'hubspot-cms',
    num: '02',
    label: 'Marketing site',
    title: 'HubSpot CMS',
    subtitle: 'websites & themes.',
    lead: 'Custom themes built on HubL with modular content blocks your team can actually edit — and a Marketing Hub that knows what visitors do next.',
    includes: [
      'Custom theme, modules, and design system',
      'Smart content + personalization',
      'Landing pages and pop‑up forms',
      'SEO setup and 301 strategy',
      'Editor training and template library',
    ],
    goodFit: [
      'Your marketing team edits pages through a developer today',
      'You want your site and CRM to share the same data layer',
      'You need landing pages live in hours, not a two-week ticket queue',
      'You\'re investing in inbound and need the tooling to match',
    ],
    includesLabel: '// Includes',
  },
  {
    id: 'wordpress',
    num: '03',
    label: 'E‑commerce',
    title: 'WordPress',
    subtitle: '+ WooCommerce stores.',
    lead: 'Custom WordPress builds and WooCommerce stores that load fast, convert well, and don\'t drown you in plugins. Built to be edited.',
    includes: [
      'Custom theme (Sage / block editor / ACF)',
      'WooCommerce setup with payment + shipping',
      'Product import + variation logic',
      'Performance tuning (Core Web Vitals)',
      'Backups, security, and managed hosting setup',
    ],
    goodFit: [
      'You need a store that converts well, not just one that looks good',
      'Your products are complex — bundles, variations, or custom logic',
      'You want full ownership of the platform without a monthly SaaS bill',
      'Performance and Core Web Vitals actually matter to your business',
    ],
    includesLabel: '// Includes',
  },
  {
    id: 'figma',
    num: '04',
    label: 'Design',
    title: 'Figma design',
    subtitle: '& component systems.',
    lead: 'Brand‑aligned web and product design in Figma — with proper variables, components, and documentation. Hand‑off ready, or we build it ourselves.',
    includes: [
      'Research, IA, and lo‑fi wireframes',
      'Hi‑fi visual design across breakpoints',
      'Component library with variables & auto‑layout',
      'Interactive prototypes for stakeholder review',
      'Engineering handoff documentation',
    ],
    goodFit: [
      'You have a developer but no designer, or the existing design is outdated',
      'You want to validate the direction before engineering starts',
      'Your current site no longer reflects where the brand is today',
      'Stakeholders need to sign off on visuals before build begins',
    ],
    includesLabel: '// Includes',
  },
  {
    id: 'nextjs',
    num: '05',
    label: 'Custom sites',
    title: 'Next.js',
    subtitle: 'custom websites.',
    lead: 'Custom marketing sites built on Next.js — fast by default, component-driven, and fully yours. No theme constraints, no page builder limits, no platform lock-in.',
    includes: [
      'Next.js (App Router) deployed on Vercel',
      'Tailwind CSS or custom CSS design system',
      'Static generation for fast global delivery',
      'Contact forms and third-party integrations',
      'SEO setup and Core Web Vitals optimization',
      'Full code handoff — you own everything',
    ],
    goodFit: [
      'You want a fast, polished site without the constraints of a CMS theme',
      'Your content doesn\'t need daily editing through a backend',
      'Performance and Lighthouse scores matter to your business',
      'You want full ownership of the codebase with no recurring platform fee',
    ],
    includesLabel: '// Includes',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============= HERO ============= */}
      <section className="hero hero-dark">
        <div className="aurora aurora-a" />
        <div className="dots" />
        <div className="container">
          <div className="reveal">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>— Services / 05</span>
          </div>
          <h1 className="display reveal" data-delay="1" style={{ marginTop: '24px', maxWidth: '18ch' }}>
            Five things,<br />done <span style={{ color: 'var(--orange)' }}>properly</span>.
          </h1>
          <p className="lead reveal" data-delay="2" style={{ marginTop: '40px', color: 'rgba(255,255,255,0.82)', maxWidth: '56ch' }}>
            We&apos;ve narrowed the practice on purpose. Each capability below is something we&apos;ve shipped
            many times — not a checkbox we filled in to look bigger.
          </p>

          {/* Anchor links */}
          <div className="reveal" data-delay="3" style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <a href="#hubspot-crm" className="svc-chip">01 · HubSpot CRM</a>
            <a href="#hubspot-cms" className="svc-chip">02 · HubSpot CMS</a>
            <a href="#wordpress" className="svc-chip">03 · WordPress + WooCommerce</a>
            <a href="#figma" className="svc-chip">04 · Figma design</a>
            <a href="#nextjs" className="svc-chip">05 · Next.js / front‑end</a>
          </div>
        </div>
      </section>

      {/* ============= SERVICES LIST ============= */}
      <section className="section">
        <div className="container">
          {SERVICES.map((svc, i) => (
            <div key={svc.id}>
              <article id={svc.id} className="svc-row reveal">
                <div className="svc-side">
                  <span className="svc-num">{svc.num}</span>
                  <span className="eyebrow">{svc.label}</span>
                </div>
                <div className="svc-main">
                  <h2 className="h2">
                    {svc.title}<br />
                    <span className="muted">{svc.subtitle}</span>
                  </h2>
                  <p className="lead" style={{ marginTop: '18px' }}>{svc.lead}</p>
                  <div className="svc-stack">
                    <div className="stack-item">
                      <span className="mono small muted">{svc.includesLabel}</span>
                      <ul className="svc-list">
                        {svc.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="stack-item">
                      <span className="mono small muted">// Good fit if</span>
                      <ul className="svc-list">
                        {svc.goodFit.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              {i < SERVICES.length - 1 && <div className="svc-divider" />}
            </div>
          ))}
        </div>
      </section>

      {/* ============= COMPOSE STRIP ============= */}
      <section className="section bg-soft" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '760px', marginBottom: '48px' }}>
            <span className="eyebrow">— Compose</span>
            <h2 className="h2" style={{ marginTop: '18px' }}>
              Choose the right setup for your next digital project.
            </h2>
            <p className="lead" style={{ marginTop: '18px', color: 'var(--muted)' }}>
              Most projects combine two or more services, from Figma design and website development to HubSpot CMS, CRM setup, automation, and ongoing improvements.
            </p>
          </div>

          <div className="combo-grid">
            <div className="combo reveal">
              <span className="mono small text-orange">// Combo A</span>
              <h3 className="h3" style={{ marginTop: '8px' }}>Website launch, end to end.</h3>
              <p style={{ color: 'var(--muted)', marginTop: '10px', marginBottom: '10px', fontSize: '14px' }}>From structure and design to development, launch, and post-launch improvements.</p>
              <div className="row" style={{ gap: '6px', marginTop: '14px' }}>
                {['Figma', 'Next.js', 'HubSpot CMS'].map((t) => <span key={t} className="combo-tag">{t}</span>)}
              </div>
            </div>
            <div className="combo reveal" data-delay="1">
              <span className="mono small text-orange">// Combo B</span>
              <h3 className="h3" style={{ marginTop: '8px' }}>eCommerce <br />launch.</h3>
              <p style={{ color: 'var(--muted)', marginTop: '10px', marginBottom: '10px', fontSize: '14px' }}>Custom WooCommerce stores designed to be easy to manage and ready to sell.</p>
              <div className="row" style={{ gap: '6px', marginTop: '14px' }}>
                {['Figma', 'WordPress', 'WooCommerce'].map((t) => <span key={t} className="combo-tag">{t}</span>)}
              </div>
            </div>
            <div className="combo reveal" data-delay="2">
              <span className="mono small text-orange">// Combo C</span>
              <h3 className="h3" style={{ marginTop: '8px' }}>HubSpot CRM <br />setup.</h3>
              <p style={{ color: 'var(--muted)', marginTop: '10px', marginBottom: '10px', fontSize: '14px' }}>Pipelines, properties, workflows, forms, and reporting built around your sales process.</p>
              <div className="row" style={{ gap: '6px', marginTop: '14px' }}>
                {['HubSpot CRM', 'HubSpot CMS', 'Workflows'].map((t) => <span key={t} className="combo-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CTA ============= */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>
            <span className="eyebrow">— Work with us</span>
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
              <Link href="/process" className="btn btn-ghost" style={{ padding: '14px 28px' }}>
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
