import Link from 'next/link';

interface FooterProps {
  eyebrow?: string;
  ctaHeadline?: React.ReactNode;
}

export default function Footer({
  eyebrow = '— Let\'s build something',
  ctaHeadline = (
    <>
      Have a project<br />in mind?{' '}
      <Link href="/contact">
        Talk to us<span style={{ color: 'var(--orange)' }}>.</span>
      </Link>
    </>
  ),
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="aurora aurora-a" />
      <div className="container" style={{ position: 'relative' }}>
        <div className="reveal">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>{eyebrow}</span>
        </div>
        <h2 className="footer-cta reveal" data-delay="1" style={{ marginTop: '20px' }}>
          {ctaHeadline}
        </h2>

        <div className="footer-cols">
          <div className="footer-col">
            <h5>Duo Advertising</h5>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '32ch', fontSize: '14px' }}>
              Web and HubSpot agency based in Bucharest, Romania. Working worldwide since 2015.
            </p>
          </div>
          <div className="footer-col">
            <h5>Site</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:contact@duoadv.ro">contact@duoadv.com</a></li>
              <li><a href="tel:+40771190628">+40 771 190 628</a></li>
              <li><span style={{ color: 'rgba(255,255,255,0.5)' }}>L–V · 09:00 – 18:00 EET</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Elsewhere</h5>
            <ul>
              <li><a href="https://linkedin.com/company/duoadv/" target="_blank">LinkedIn ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <span>© 2015–2026 Duo Advertising SRL</span>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
