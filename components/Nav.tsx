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
            <svg width="90" height="34" viewBox="0 0 90 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.64288 33.4317C7.67185 33.4317 5.95857 32.992 4.50304 32.1126C3.07784 31.2029 1.97103 29.8232 1.18262 27.9734C0.394206 26.1237 0 23.7585 0 20.8777C0 17.997 0.394206 15.6469 1.18262 13.8275C2.00135 11.9778 3.10816 10.6132 4.50304 9.73385C5.92825 8.85447 7.56572 8.41478 9.41545 8.41478C10.4465 8.41478 11.4016 8.53607 12.281 8.77866C13.1907 8.99093 13.9791 9.33965 14.6463 9.82482C15.3437 10.31 15.935 10.9013 16.4202 11.5987H16.6931V0H23.0156V32.8859H17.8302L17.3299 29.6564H17.0115C16.2231 30.93 15.1921 31.8852 13.9185 32.522C12.6449 33.1284 11.2197 33.4317 9.64288 33.4317ZM11.6442 28.2464C12.8268 28.2464 13.782 27.9735 14.5098 27.4276C15.2679 26.8818 15.8289 26.0934 16.1928 25.0624C16.5566 24.0314 16.7386 22.8033 16.7386 21.3781V20.5593C16.7386 19.498 16.6325 18.5277 16.4202 17.6483C16.2382 16.7689 15.935 16.0411 15.5105 15.465C15.086 14.8585 14.5553 14.4037 13.9185 14.1004C13.2817 13.7669 12.5236 13.6001 11.6442 13.6001C10.3706 13.6001 9.35481 13.8579 8.59672 14.3734C7.83863 14.8585 7.29281 15.6166 6.95925 16.6476C6.62569 17.6483 6.45891 18.9067 6.45891 20.4229V21.4691C6.45891 22.9852 6.62569 24.2437 6.95925 25.2443C7.29281 26.245 7.83863 27.0031 8.59672 27.5186C9.35481 28.0038 10.3706 28.2464 11.6442 28.2464Z" fill="#1A1A1A" />
              <path d="M36.5883 33.4317C34.1624 33.4317 32.2369 32.7646 30.8117 31.4303C29.3865 30.0961 28.6738 27.9431 28.6738 24.9714V8.9606H34.9963V23.9253C34.9963 24.7137 35.0873 25.3808 35.2692 25.9266C35.4512 26.4421 35.7089 26.8666 36.0425 27.2002C36.4063 27.5338 36.846 27.7763 37.3615 27.928C37.877 28.0796 38.4532 28.1554 39.09 28.1554C40.03 28.1554 40.8791 27.928 41.6372 27.4731C42.3952 27.0183 42.9865 26.3966 43.4111 25.6082C43.8356 24.7895 44.0479 23.8798 44.0479 22.8791V8.9606H50.3703V32.8859H45.185L44.7302 29.6109H44.4118C43.8356 30.369 43.1533 31.0361 42.3649 31.6123C41.6068 32.1884 40.7426 32.6281 39.7723 32.9313C38.8019 33.2649 37.7406 33.4317 36.5883 33.4317Z" fill="#1A1A1A" />
              <path d="M67.181 33.4317C64.5732 33.4317 62.3596 32.992 60.5402 32.1126C58.7208 31.2029 57.3411 29.8232 56.401 27.9734C55.461 26.0934 54.991 23.7433 54.991 20.9232C54.991 18.0425 55.461 15.6924 56.401 13.873C57.3411 12.0233 58.7208 10.6587 60.5402 9.77934C62.3596 8.86963 64.5732 8.41478 67.181 8.41478C69.8495 8.41478 72.0783 8.86963 73.8674 9.77934C75.6868 10.6587 77.0665 12.0233 78.0065 13.873C78.9466 15.6924 79.4166 18.0425 79.4166 20.9232C79.4166 23.7433 78.9466 26.0934 78.0065 27.9734C77.0665 29.8232 75.6868 31.2029 73.8674 32.1126C72.0783 32.992 69.8495 33.4317 67.181 33.4317ZM67.181 28.5193C68.5759 28.5193 69.6827 28.2615 70.5015 27.746C71.3505 27.2305 71.9722 26.4421 72.3664 25.3808C72.7606 24.3195 72.9577 23.0156 72.9577 21.4691V20.3774C72.9577 18.8309 72.7606 17.527 72.3664 16.4657C71.9722 15.4043 71.3505 14.6159 70.5015 14.1004C69.6827 13.5546 68.5759 13.2817 67.181 13.2817C65.8165 13.2817 64.7097 13.5546 63.8606 14.1004C63.0419 14.6159 62.4354 15.4043 62.0412 16.4657C61.647 17.527 61.4499 18.8309 61.4499 20.3774V21.4691C61.4499 23.0156 61.647 24.3195 62.0412 25.3808C62.4354 26.4421 63.0419 27.2305 63.8606 27.746C64.7097 28.2615 65.8165 28.5193 67.181 28.5193Z" fill="#1A1A1A" />
              <rect width="7.58088" height="7.58088" transform="translate(82.4189 25.3049)" fill="#FF7A59" />
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
