import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      {/* ============= HERO + FORM ============= */}
      <section className="hero" style={{ paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="aurora aurora-a" style={{ opacity: 0.55 }} />
        <div className="container">
          <div className="contact-hero-cols">
            {/* Left: copy + meta */}
            <div>
              <div className="reveal">
                <span className="pill"><span className="dot" /> Replies in &lt; 2 hours</span>
              </div>
              <h1 className="display reveal" data-delay="1" style={{ marginTop: '28px', fontSize: 'clamp(56px, 7vw, 112px)', maxWidth: '12ch' }}>
                Let&apos;s get to the part.
              </h1>
              <p className="lead reveal" data-delay="2" style={{ marginTop: '36px' }}>
                Tell us about your project. Fill out the form on the right, or skip the questions and just tell us what you&apos;re trying to build. We&apos;ll figure out the brief together.
              </p>

              <div className="reveal" data-delay="3" style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '32px', borderTop: '1px solid var(--line)' }}>
                <div className="contact-kv">
                  <span className="mono small muted">Email</span>
                  <a href="mailto:contact@duoadv.com" className="h3" style={{ fontSize: '20px' }}>contact@duoadv.com</a>
                </div>
                <div className="contact-kv">
                  <span className="mono small muted">Phone</span>
                  <a href="tel:+40771190628" className="h3" style={{ fontSize: '20px' }}>+40 771 190 628</a>
                </div>
                <div className="contact-kv">
                  <span className="mono small muted">Agency</span>
                  <div className="h3" style={{ fontSize: '20px' }}>
                    Bucharest, RO
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form card (client component) */}
            <div className="reveal" data-delay="2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============= FAQ ============= */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="contact-faq-intro reveal">
            <div>
              <span className="eyebrow">— Common questions</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Before you write.</h2>
            </div>
            <p className="muted" style={{ fontSize: '15px', maxWidth: '56ch' }}>
              Answers to the questions clients usually ask before starting a website, eCommerce, or HubSpot project.
            </p>
          </div>

          <div className="faq-list">
            <details className="faq" open>
              <summary>
                <span className="mono small text-orange">01</span>
                <span>How fast do you respond?</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">
                <p>Under two hours during EET business hours, usually under thirty minutes. After hours, you&apos;ll have a reply by 9am the next working day.</p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="mono small text-orange">02</span>
                <span>What&apos;s the minimum project size?</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">
                <p>Pricing depends on the scope, platform, timeline, and technical requirements. We first discuss what your project needs, then provide a clear estimate based on the actual work involved.</p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="mono small text-orange">03</span>
                <span>Do you take retainers?</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">
                <p>Yes. After launch, we can continue supporting your website, HubSpot setup, or eCommerce platform with ongoing improvements, maintenance, analytics, and new development requests. The monthly scope is defined based on what your business needs.</p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="mono small text-orange">04</span>
                <span>Where are you based, and do you travel?</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">
                <p>We are based in Bucharest, Romania, and work remotely with clients across Romania and internationally. In-person workshops or kickoffs can be arranged for selected projects, depending on the scope, value, and project needs.</p>
              </div>
            </details>
            <details className="faq">
              <summary>
                <span className="mono small text-orange">05</span>
                <span>Do you sign NDAs?</span>
                <span className="faq-icon">+</span>
              </summary>
              <div className="faq-body">
                <p>Yes. We can sign NDAs for projects involving confidential business information, CRM data, internal systems, or unreleased products. You can send your own agreement, or we can provide one if needed.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
