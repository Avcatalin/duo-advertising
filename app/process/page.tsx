import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = { title: 'Process' };

function Arr() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PHASES = [
  {
    num: '01',
    name: 'Scoping call',
    tag: 'Before anything is signed',
    body: 'We start with a conversation — no pitch, no deck. We ask what you need, what you\'ve tried, and what success looks like. By the end we know whether we\'re the right fit, and we\'ll tell you honestly if we\'re not.',
  },
  {
    num: '02',
    name: 'Written scope',
    tag: 'Everything agreed, in writing',
    body: 'We document exactly what gets built: deliverables, milestones, and what\'s out of scope. Fixed deliverables, not a vague statement of work. You sign off before anything starts — no ambiguity later.',
  },
  {
    num: '03',
    name: 'Design',
    tag: 'Figma first, build second',
    body: 'If design is part of the project, we start in Figma with wireframes, page layouts, and visual direction. Each stage is reviewed before development begins, so the build starts from an approved design.',
  },
  {
    num: '04',
    name: 'Build',
    tag: 'You watch it grow in real time',
    body: 'Development runs on a staging environment you can access from day one. Weekly check-ins keep you in the loop. No black box, no code drops two weeks before launch.',
  },
  {
    num: '05',
    name: 'Launch',
    tag: 'We handle the technical handoff',
    body: 'DNS, redirects, performance checks, analytics — we take care of the launch. We don\'t hand you a zip file and disappear. Go-live is a milestone, not a handoff.',
  },
  {
    num: '06',
    name: 'After launch',
    tag: 'Most clients stay. We plan for that',
    body: 'Average client tenure is over two years. We treat your platform like infrastructure — something that needs care as the business evolves, not a project to close and archive.',
  },
];

export default function WorkPage() {
  return (
    <>
      {/* ============= HERO ============= */}
      <section className="hero">
        <div className="aurora aurora-a" style={{ opacity: 0.5 }} />
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">— How we work</span>
          </div>
          <h1 className="display reveal" data-delay="1" style={{ marginTop: '24px', maxWidth: '16ch' }}>
            From brief<br />to launch.
          </h1>
          <p className="lead reveal" data-delay="2" style={{ marginTop: '40px', maxWidth: '56ch' }}>
            A transparent look at how a project runs — the phases, the pace, and what we need from you to do it right.
          </p>
        </div>
      </section>

      {/* ============= PHASES ============= */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="between reveal" style={{ marginBottom: '64px', alignItems: 'flex-end' }}>
            <div>
              <span className="eyebrow">— The process</span>
              <h2 className="h2" style={{ marginTop: '18px', maxWidth: '18ch' }}>Six phases, no surprises.</h2>
            </div>
            <p className="muted" style={{ maxWidth: '36ch', fontSize: '14px' }}>
              Every project follows the same structure. The scope changes; the process doesn&apos;t.
            </p>
          </div>

          <div>
            {PHASES.map(({ num, name, tag, body }, i) => (
              <div key={num} className="tl-row reveal" data-delay={i > 0 ? String(Math.min(i, 5)) : undefined}>
                <div className="tl-year">{num}</div>
                <div className="tl-body">
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
                    <h3 className="h3">{name}</h3>
                    <span className="mono small muted">// {tag}</span>
                  </div>
                  <p className="muted" style={{ marginTop: '10px', maxWidth: '62ch', lineHeight: '1.65', fontSize: '15px' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= WHAT YOU BRING ============= */}
      <section className="section bg-soft" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <span className="eyebrow">— The collaboration</span>
            <h2 className="h2" style={{ marginTop: '18px', maxWidth: '22ch' }}>
              What a good project needs from both sides.
            </h2>
          </div>
          <div className="svc-stack" style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
            <div className="stack-item">
              <span className="mono small muted reveal">// What you bring</span>
              <ul className="svc-list reveal" data-delay="1">
                <li>Your goals and the business context behind them</li>
                <li>Content — copy and images — or a brief so we can help source them</li>
                <li>One clear voice for feedback, not five reviewers</li>
                <li>Two to three hours a week for reviews and decisions</li>
                <li>A decision-maker available and responsive from day one</li>
              </ul>
            </div>
            <div className="stack-item">
              <span className="mono small muted reveal" data-delay="1">// What we take off your plate</span>
              <ul className="svc-list reveal" data-delay="2">
                <li>Translating business goals into technical decisions</li>
                <li>A design process that doesn&apos;t need a committee to move</li>
                <li>A build that runs without daily check-ins from your side</li>
                <li>The full technical launch — DNS, redirects, analytics</li>
                <li>Ongoing maintenance so the platform doesn&apos;t fall behind</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIAL ============= */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '1000px' }}>
            <span className="eyebrow">— A word from a client</span>
            <blockquote style={{ margin: '28px 0 0', fontSize: 'clamp(28px, 3.4vw, 48px)', lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: 500, textWrap: 'balance' } as React.CSSProperties}>
              The HubSpot CMS work was handled with professionalism, care, and strong technical understanding. Communication was clear, and the final result matched what the project needed.
            </blockquote>
            <div className="row" style={{ marginTop: '36px', gap: '14px' }}>
              <div className="ph" style={{ width: '44px', height: '44px', borderRadius: '50%' }}>
                <div className="ph-label" style={{ fontSize: '8px' }}>[ ]</div>
              </div>
              <div>
                <div style={{ fontWeight: 500 }}>Etienne Kiefer</div>
                <div className="mono small muted">Creative Director, charles</div>
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
              <Link href="/services" className="btn btn-ghost" style={{ padding: '14px 28px' }}>
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
