import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ flex: 1, paddingTop: '64px' }}>
        {/* Hero section */}
        <section
          style={{
            backgroundColor: 'var(--yellow)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 'min(90vh, 700px)',
          }}
        >
          {/* Left: text */}
          <div
            style={{
              padding: 'clamp(3rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                lineHeight: 1.15,
                color: 'var(--black)',
                margin: 0,
              }}
            >
              Between light and life,
              <br />
              storytelling with purpose,
              <br />
              curiosity, and care
            </h1>
            <div className="animate-fade-up delay-300">
              <a href="https://www.instagram.com/ppytsai" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Photos
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="animate-fade-in delay-200"
            style={{
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Photography by Puppy Tsai"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </section>

        {/* About teaser */}
        <section
          style={{
            backgroundColor: 'var(--cream)',
            padding: 'clamp(5rem, 10vw, 8rem) 2rem',
            textAlign: 'center',
          }}
        >
          <p
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'var(--black)',
              marginBottom: '2.5rem',
              letterSpacing: '0.01em',
            }}
          >
            Get to know Puppy
          </p>
          <Link href="/about" className="btn-primary animate-fade-up delay-200">
            About
          </Link>
        </section>

        {/* Contact section */}
        <section
          style={{
            backgroundColor: 'var(--cream)',
            borderTop: '1px solid rgba(13,13,13,0.08)',
            padding: 'clamp(4rem, 8vw, 6rem) 2rem',
            textAlign: 'center',
          }}
        >
          <p
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'var(--black)',
              marginBottom: '1.25rem',
              letterSpacing: '0.01em',
            }}
          >
            Contact Puppy
          </p>
          <a
            href="mailto:puppytsai.com@gmail.com"
            className="animate-fade-up delay-200"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: 'var(--black)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'rgba(13,13,13,0.3)',
              display: 'inline-block',
            }}
          >
            puppytsai.com@gmail.com
          </a>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 640px) {
          section:first-of-type {
            grid-template-columns: 1fr !important;
          }
          section:first-of-type > div:last-child {
            height: 280px;
            position: relative !important;
          }
        }
      `}</style>
    </>
  );
}
