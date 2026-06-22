import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar bgColor="var(--forest-deep)" inverted />

      <main style={{ flex: 1, paddingTop: '64px', backgroundColor: 'var(--forest-deep)' }}>
        <section
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(4rem, 8vw, 6rem) 2rem',
            display: 'grid',
            gridTemplateColumns: '1fr 360px',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
            minHeight: 'calc(100vh - 64px)',
          }}
          className="contact-grid"
        >
          {/* Left: text */}
          <div>
            <p
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(234, 240, 232, 0.45)',
                marginBottom: '1.5rem',
              }}
            >
              Get in touch
            </p>
            <h1
              className="animate-fade-up delay-200"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--cream)',
                lineHeight: 1.1,
                marginBottom: '2.5rem',
              }}
            >
              Contact<br />Puppy
            </h1>
            <a
              href="mailto:puppytsai.com@gmail.com"
              className="animate-fade-up delay-300"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                color: 'var(--yellow)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(245,208,0,0.35)',
                paddingBottom: '2px',
                display: 'inline-block',
                marginBottom: '2rem',
              }}
            >
              puppytsai.com@gmail.com
            </a>
            <div
              className="animate-fade-up delay-400"
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://www.instagram.com/ppytsai"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(234, 240, 232, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/puppytsai"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(234, 240, 232, 0.7)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div
            className="animate-fade-in delay-400"
            style={{
              position: 'relative',
              minHeight: '480px',
              overflow: 'hidden',
              opacity: 0.75,
            }}
          >
            <Image
              src="/images/contact.jpg"
              alt="Dried leaf macro photograph"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .contact-social-link:hover {
          color: var(--yellow) !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .contact-grid > div:last-child { display: none; }
        }
      `}</style>
    </>
  );
}
