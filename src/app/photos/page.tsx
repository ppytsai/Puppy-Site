import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const IG_HANDLE = 'ppytsai';
const IG_URL = `https://www.instagram.com/${IG_HANDLE}`;

export default function Photos() {
  return (
    <>
      <Navbar bgColor="var(--cream)" />

      <main style={{ flex: 1, paddingTop: '64px', backgroundColor: 'var(--cream)' }}>
        <section
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) 2rem',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--black)',
                margin: 0,
              }}
            >
              Photos
            </h1>
          </div>

          {/* Instagram CTA */}
          <div
            className="animate-fade-up delay-200"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '2rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                lineHeight: 1.8,
                color: 'var(--black)',
                maxWidth: '480px',
                margin: 0,
              }}
            >
              All of my photography lives on Instagram. Follow along for new work.
            </p>

            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.82rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--black)',
                paddingBottom: '3px',
                transition: 'opacity 0.2s ease',
              }}
              className="ig-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @{IG_HANDLE}
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .ig-link:hover { opacity: 0.55; }
      `}</style>
    </>
  );
}
