'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="Duo Advertising — home">
            <svg width="90" height="36" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="87.1734" cy="32.3044" rx="2.82663" ry="2.82663" fill="#FF7A59"/>
            <path d="M12.1626 35.2279C8.75448 35.2279 5.87132 33.9842 3.5131 31.4968C1.17103 28.9932 0 25.8516 0 22.072C0 18.2116 1.18719 15.0458 3.56156 12.5745C5.95208 10.087 8.8837 8.84332 12.3564 8.84332C14.3108 8.84332 16.128 9.25521 17.8078 10.079C19.4876 10.8866 20.7313 12.0011 21.5389 13.4225L21.2967 13.2044V0H26.2635V34.6949H21.5147V30.2127L21.7812 30.0188L21.7328 30.4307C20.9252 31.9167 19.6572 33.0878 17.9289 33.9438C16.2006 34.7999 14.2785 35.2279 12.1626 35.2279ZM13.2529 30.7942C15.6757 30.7942 17.6543 29.9623 19.1888 28.2986C20.7394 26.6188 21.5147 24.5352 21.5147 22.0477C21.5147 19.4795 20.7233 17.3878 19.1403 15.7726C17.5736 14.1412 15.6111 13.3256 13.2529 13.3256C10.8462 13.3256 8.8514 14.1251 7.26848 15.7242C5.68557 17.3071 4.89411 19.4149 4.89411 22.0477C4.89411 24.6967 5.68557 26.8207 7.26848 28.4198C8.86755 30.0027 10.8623 30.7942 13.2529 30.7942Z" fill="url(#paint0_linear_37_69)"/>
            <path d="M40.3874 35.2279C37.5769 35.2279 35.3802 34.388 33.7973 32.7082C32.2306 31.0122 31.4472 28.7186 31.4472 25.8274V9.35212H36.414V24.519C36.414 26.538 36.8743 28.0887 37.795 29.1709C38.7157 30.2369 40.0724 30.7699 41.8653 30.7699C43.8036 30.7699 45.3704 30.0915 46.5656 28.7347C47.7609 27.378 48.3585 25.6658 48.3585 23.5983V9.35212H53.3495V34.6949H48.5039V28.4682L50.9267 30.8668H48.4796C47.6882 32.2398 46.5979 33.3139 45.2088 34.0892C43.8359 34.8484 42.2288 35.2279 40.3874 35.2279Z" fill="url(#paint1_linear_37_69)"/>
            <path d="M70.5804 35.2279C66.8169 35.2279 63.6753 33.9438 61.1556 31.3756C58.652 28.8074 57.4002 25.6901 57.4002 22.0235C57.4002 18.357 58.6601 15.2396 61.1798 12.6714C63.6995 10.1032 66.8331 8.8191 70.5804 8.8191C74.3277 8.8191 77.4693 10.1113 80.0052 12.6956C82.5572 15.2638 83.8333 18.3731 83.8333 22.0235C83.8333 25.6901 82.5653 28.8074 80.0294 31.3756C77.4935 33.9438 74.3438 35.2279 70.5804 35.2279ZM70.5804 30.5519C72.8578 30.5519 74.8123 29.7443 76.4436 28.129C78.075 26.4977 78.8907 24.4625 78.8907 22.0235C78.8907 19.5684 78.075 17.5332 76.4436 15.918C74.8123 14.3028 72.8578 13.4952 70.5804 13.4952C68.3191 13.4952 66.3727 14.3028 64.7414 15.918C63.1262 17.5332 62.3185 19.5684 62.3185 22.0235C62.3185 24.4625 63.1262 26.4977 64.7414 28.129C66.3566 29.7443 68.3029 30.5519 70.5804 30.5519Z" fill="url(#paint2_linear_37_69)"/>
            <defs>
            <linearGradient id="paint0_linear_37_69" x1="0" y1="17.614" x2="83.8333" y2="17.614" gradientUnits="userSpaceOnUse">
            <stop offset="0.274038"/>
            <stop offset="1" stopColor="#FF7A59"/>
            </linearGradient>
            <linearGradient id="paint1_linear_37_69" x1="0" y1="17.614" x2="83.8333" y2="17.614" gradientUnits="userSpaceOnUse">
            <stop offset="0.274038"/>
            <stop offset="1" stop-color="#FF7A59"/>
            </linearGradient>
            <linearGradient id="paint2_linear_37_69" x1="0" y1="17.614" x2="83.8333" y2="17.614" gradientUnits="userSpaceOnUse">
            <stop offset="0.274038"/>
            <stop offset="1" stopColor="#FF7A59"/>
            </linearGradient>
            </defs>
            </svg>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${pathname === href ? ' is-active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-dark">
              Start a project
              <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className={`nav-mobile${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-mobile-link${pathname === href ? ' is-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: '40px' }}>
          <Link
            href="/contact"
            className="btn btn-dark"
            onClick={() => setIsOpen(false)}
            style={{ width: '100%', justifyContent: 'center', padding: '16px 24px', fontSize: '16px' }}
          >
            Start a project
            <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
