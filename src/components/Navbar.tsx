'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavbarProps {
  transparent?: boolean;
  bgColor?: string;
  inverted?: boolean; // light text on dark background
}

const navItems = [
  { href: '/', label: 'Home', external: false },
  { href: '/about', label: 'About', external: false },
  { href: 'https://photos.puppytsai.com', label: 'Photos', external: true },
  { href: '/contact', label: 'Contact', external: false },
];

export default function Navbar({
  transparent = false,
  bgColor = 'var(--cream)',
  inverted = false,
}: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparent]);

  const resolvedBg = menuOpen
    ? bgColor
    : transparent && !scrolled
    ? 'transparent'
    : bgColor;

  const textColor = inverted ? 'var(--cream)' : 'var(--black)';
  const borderColor = inverted
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(13,13,13,0.08)';

  const linkClass = (href: string) =>
    `nav-link${inverted ? ' nav-link-inverted' : ''}${pathname === href ? ' active' : ''}`;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease',
        backgroundColor: resolvedBg,
        borderBottom: scrolled || !transparent ? `1px solid ${borderColor}` : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
            color: textColor,
            textDecoration: 'none',
          }}
        >
          Puppy Tsai Photography
        </Link>

        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link${inverted ? ' nav-link-inverted' : ''}`}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', flexDirection: 'column', gap: '5px' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block', width: '22px', height: '1px',
                backgroundColor: textColor,
                transition: 'all 0.3s ease',
                ...(i === 0 && menuOpen ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}),
                ...(i === 1 && menuOpen ? { opacity: 0 } : {}),
                ...(i === 2 && menuOpen ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}),
              }}
            />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ backgroundColor: bgColor, padding: '1.5rem 2rem 2rem', borderTop: `1px solid ${borderColor}` }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`nav-link${inverted ? ' nav-link-inverted' : ''}`}
                    onClick={() => setMenuOpen(false)}
                    style={{ fontSize: '1rem' }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={linkClass(item.href)} onClick={() => setMenuOpen(false)} style={{ fontSize: '1rem' }}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
