import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'About' };

function ManifestoGraphic() {
  const size = 480;
  const cx = size / 2;
  const cy = size / 2;
  const ro = 210, rm = 162, ri = 108, rc = 52;
  const toRad = (deg: number) => deg * Math.PI / 180;

  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = toRad(i * 6 - 90);
    const isLong = i % 5 === 0;
    const len = isLong ? 16 : 8;
    return {
      x1: cx + ro * Math.cos(angle),
      y1: cy + ro * Math.sin(angle),
      x2: cx + (ro - len) * Math.cos(angle),
      y2: cy + (ro - len) * Math.sin(angle),
      isLong,
    };
  });

  const arcStart = toRad(-150);
  const arcEnd = toRad(-30);
  const orangeArc = `M ${(cx + ro * Math.cos(arcStart)).toFixed(2)} ${(cy + ro * Math.sin(arcStart)).toFixed(2)} A ${ro} ${ro} 0 0 1 ${(cx + ro * Math.cos(arcEnd)).toFixed(2)} ${(cy + ro * Math.sin(arcEnd)).toFixed(2)}`;

  const cardinals = [0, 90, 180, 270].map(deg => {
    const a = toRad(deg - 90);
    return { x: cx + rm * Math.cos(a), y: cy + rm * Math.sin(a), isNorth: deg === 0 };
  });

  const innerDots = Array.from({ length: 8 }, (_, i) => {
    const a = toRad(i * 45 - 90);
    return {
      x: cx + ri * Math.cos(a),
      y: cy + ri * Math.sin(a),
      isNorth: i === 0,
      isMajor: i % 2 === 0,
    };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ maxWidth: '420px', display: 'block' }} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx={cx} cy={cy} r={ro} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke={t.isLong ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)'}
          strokeWidth={t.isLong ? '1.2' : '0.8'} />
      ))}
      <path d={orangeArc} stroke="#FF5C35" strokeWidth="2.5" opacity="0.65" strokeLinecap="round" />
      {[0, 90, 180, 270].map(deg => {
        const a = toRad(deg - 90);
        return <line key={deg} x1={cx + rm * Math.cos(a)} y1={cy + rm * Math.sin(a)} x2={cx - rm * Math.cos(a)} y2={cy - rm * Math.sin(a)} stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />;
      })}
      {[45, 135].map(deg => {
        const a = toRad(deg - 90);
        return <line key={deg} x1={cx + rm * Math.cos(a)} y1={cy + rm * Math.sin(a)} x2={cx - rm * Math.cos(a)} y2={cy - rm * Math.sin(a)} stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />;
      })}
      <circle cx={cx} cy={cy} r={rm} stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      {cardinals.map((m, i) => (
        <rect key={i} x={m.x - 4} y={m.y - 4} width={8} height={8}
          transform={`rotate(45 ${m.x} ${m.y})`}
          fill={m.isNorth ? '#FF5C35' : 'rgba(255,255,255,0.12)'}
          stroke={m.isNorth ? '#FF5C35' : 'rgba(255,255,255,0.2)'}
          strokeWidth="0.8" />
      ))}
      <circle cx={cx} cy={cy} r={ri} stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
      {innerDots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y}
          r={d.isNorth ? 5.5 : d.isMajor ? 3.5 : 2.5}
          fill={d.isNorth ? '#FF5C35' : d.isMajor ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.12)'} />
      ))}
      <circle cx={cx} cy={cy} r={rc} stroke="#FF5C35" strokeWidth="1.2" opacity="0.35" />
      <rect x={cx - 20} y={cy - 20} width={40} height={40} transform={`rotate(45 ${cx} ${cy})`} fill="none" stroke="#FF5C35" strokeWidth="1.5" opacity="0.85" />
      <rect x={cx - 12} y={cy - 12} width={24} height={24} transform={`rotate(45 ${cx} ${cy})`} fill="#FF5C35" opacity="0.18" />
      <circle cx={cx} cy={cy} r={4} fill="#FF5C35" />
    </svg>
  );
}

function Arr() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ============= HERO ============= */}
      <section className="hero">
        <div className="aurora aurora-a" style={{ opacity: 0.55 }} />
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">— About the agency</span>
          </div>
          <h1 className="display reveal" data-delay="1" style={{ marginTop: '24px', marginBottom: '56px', maxWidth: '18ch' }}>
            Designed by experience.
          </h1>
          <div className="about-hero-cols reveal" data-delay="2">
            <p className="lead">
              Duo Advertising started in 2015 with a clear idea: every website and digital system should be custom, useful, and built around the way a business actually works. That thinking still shapes our work today, across Figma design, WordPress development, HubSpot CMS websites, and HubSpot CRM implementation.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              Today, we keep the same hands-on approach, working with a trusted network of specialists in content, branding and strategy when a project needs extra depth.
            </p>
          </div>
        </div>
      </section>

      {/* ============= NUMBERS ============= */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="numbers-strip">
            <div className="stat-cell">
              <div className="stat-num">11<span className="stat-unit">yrs</span></div>
              <div className="eyebrow">In business</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">82</div>
              <div className="eyebrow">Projects shipped</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">60</div>
              <div className="eyebrow">Happy clients</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">2h</div>
              <div className="eyebrow">Avg response</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= MANIFESTO ============= */}
      <section className="section hero-dark" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="aurora aurora-a" style={{ opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="manifesto-cols">
            <div>
              <div className="reveal">
                <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>— Why we work this way</span>
              </div>
              <p
                className="reveal"
                data-delay="1"
                style={{
                  marginTop: '32px',
                  fontSize: 'clamp(24px, 3.2vw, 48px)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.03em',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.92)',
                }}
              >
                We use AI to move faster, not to replace thinking. Strategy, design, and execution stay human-led from start to launch
              </p>
              <p
                className="reveal"
                data-delay="2"
                style={{
                  marginTop: '32px',
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '16px',
                  lineHeight: '1.65',
                }}
              >
                We choose quality over unnecessary growth. Our projects stay direct, focused, and built around clear communication, strong ownership, and honest decisions about the work we can serve well. For us, growth means better websites, stronger digital platforms, and long-term client relationships, not extra layers that slow the work down.
              </p>
            </div>
            <div className="manifesto-graphic-wrap reveal" data-delay="3">
              <ManifestoGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ============= PRINCIPLES ============= */}
      <section className="section">
        <div className="container">
          <div className="between reveal" style={{ marginBottom: '56px', alignItems: 'flex-end' }}>
            <div>
              <span className="eyebrow">— What we believe</span>
              <h2 className="h2" style={{ marginTop: '18px', maxWidth: '18ch' }}>
                Five operating principles.
              </h2>
            </div>
            <p className="muted" style={{ maxWidth: '36ch', fontSize: '14px' }}>
              Not borrowed from a business book. These came from eleven years of shipping things and noticing what worked.
            </p>
          </div>

          <div>
            {[
              {
                num: '01',
                title: 'Focused teams ship better work.',
                body: 'Better digital work comes from focused collaboration. We keep every project clear, direct, and hands-on, with fewer handoffs, stronger ownership, and faster decisions from strategy to launch.',
              },
              {
                num: '02',
                title: 'Design is decisions, not decoration.',
                body: 'Every pixel earns its place. We delete more than we add. Good design solves a problem; great design makes the problem disappear.',
              },
              {
                num: '03',
                title: 'No handoff between disciplines.',
                body: 'The person designing the screen also writes the code. Ideas don&apos;t get lost in translation, and the final result matches the original intent.',
              },
              {
                num: '04',
                title: 'Performance is a feature.',
                body: 'Sub-second loads, accessible interactions, perfect Lighthouse scores. These aren\'t bonuses — they\'re part of the deliverable.',
              },
              {
                num: '05',
                title: 'We stay after launch.',
                body: 'Average client tenure: +2 years. We treat your platform like infrastructure — something that needs care and evolution, not a project to close.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="principle-row reveal">
                <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '13px', color: 'var(--orange)', letterSpacing: '0.06em', paddingTop: '4px' }}>{num}</span>
                <h3 className="h3" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>{title}</h3>
                <p className="muted" style={{ fontSize: '15px', lineHeight: '1.65' }} dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= HOW WE WORK ============= */}
      <section className="section" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <span className="eyebrow">— The collaboration</span>
            <h2 className="h2" style={{ marginTop: '18px', maxWidth: '20ch' }}>
              What it&apos;s like to work with us.
            </h2>
          </div>

          <div className="work-with-grid">
            {[
              {
                num: '01',
                title: 'Direct access.',
                body: 'You communicate with the people doing the work. No account managers, no briefing chains — a direct line to whoever is designing or building your project.',
                delay: undefined,
              },
              {
                num: '02',
                title: 'Scope before price.',
                body: 'We define exactly what needs to be built before we talk investment. No vague estimates, no moving targets, no surprises three weeks before launch.',
                delay: '1',
              },
              {
                num: '03',
                title: 'Timelines we keep.',
                body: 'We set realistic deadlines and communicate early when anything changes. In eleven years of shipping, we have never missed a launch date we committed to.',
                delay: '2',
              },
              {
                num: '04',
                title: 'Still here after launch.',
                body: 'Most clients stay with us after the project ships. We plan for that from day one — your platform is infrastructure, and infrastructure needs ongoing care.',
                delay: '3',
              },
            ].map(({ num, title, body, delay }) => (
              <div key={num} className="work-with-cell reveal" data-delay={delay}>
                <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '12px', color: 'var(--orange)', letterSpacing: '0.1em' }}>{num}</span>
                <h3 className="h3" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>{title}</h3>
                <p className="muted" style={{ fontSize: '15px', lineHeight: '1.65' }}>{body}</p>
              </div>
            ))}
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
