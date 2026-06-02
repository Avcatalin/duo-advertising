'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

function loadGA() {
  if (!GA_ID || document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args) { window.dataLayer.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      loadGA();
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    loadGA();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 200,
      width: 'calc(100% - 48px)',
      maxWidth: '800px',
      background: 'var(--fg)',
      color: 'var(--bg)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      boxShadow: '0 8px 48px rgba(0,0,0,0.32)',
    }}>
      <div className="cookie-banner-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.72)', maxWidth: '54ch', lineHeight: '1.55' }}>
          We use analytics cookies to understand how visitors use this site. No data is sold or shared.{' '}
          <Link href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Cookie Policy
          </Link>
        </p>
        <div className="cookie-actions" style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={decline}
            className="btn btn-ghost"
            style={{ color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(255,255,255,0.18)', fontSize: '13px', padding: '10px 18px' }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn btn-primary"
            style={{ fontSize: '13px', padding: '10px 18px' }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
