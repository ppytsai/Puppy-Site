import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const exhibitions = [
  { year: '2026', title: 'Re:collection', venue: 'Float Magazine', link: 'https://floatmagazine.us' },
  { year: '2025', title: 'Photos Only Show', venue: 'Greenpoint Gallery', location: 'Brooklyn, NY' },
  { year: '2025', title: 'Issue #132 Into the Night', venue: 'F-Stop Magazine', link: 'https://fstopmagazine.com' },
  { year: '2025', title: 'Into the Light', venue: 'Copenhagen Photo Festival — The Royal Danish Theatre', location: 'Copenhagen, Denmark', link: 'https://copenhagenphoto.com' },
  { year: '2025', title: 'Issue #131 Open Theme 2025', venue: 'F-Stop Magazine', link: 'https://fstopmagazine.com' },
  { year: '2025', title: 'With Love, New York', venue: 'Visionary Projects', location: 'New York, NY', link: 'https://visionaryprojects.com' },
  { year: '2025', title: 'Issue #130 Inhabit', venue: 'F-Stop Magazine', link: 'https://fstopmagazine.com' },
];

export default function About() {
  return (
    <>
      <Navbar bgColor="var(--sage)" />

      <main style={{ flex: 1 }}>

        {/* ── Sage bio section ── */}
        <section
          style={{
            backgroundColor: 'var(--sage)',
            paddingTop: '64px',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: 'clamp(4rem, 8vw, 6rem) 2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 420px',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            <div>
              <p
                className="animate-fade-up delay-100"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                  lineHeight: 1.9,
                  color: 'var(--black)',
                  marginBottom: '1.5rem',
                }}
              >
                Puppy Tsai is a New York-based product manager, storyteller, and creative explorer
                who sees photography as a powerful medium for connection and self-expression. For
                her, a single captured moment has the potential to shake the heart — whether through
                awe, nostalgia, or unspoken emotion. She is drawn to the fleeting,
                impossible-to-replicate details that make life unpredictable and deeply human.
              </p>
              <p
                className="animate-fade-up delay-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                  lineHeight: 1.9,
                  color: 'var(--black)',
                }}
              >
                Guided by values of kindness and curiosity, Puppy balances her professional
                expertise in technology and strategy with creative pursuits that explore the
                intersections of humanity and innovation. As she continues to refine her craft, she
                is especially passionate about using photography for impact — eager to soon offer
                her time and skills to nonprofits dedicated to meaningful change. Through her lens,
                she hopes to move, challenge, and inspire others in ways that words often cannot.
              </p>
            </div>

            <div
              className="animate-fade-in delay-300"
              style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}
            >
              <Image
                src="/images/about.jpg"
                alt="Portrait of Puppy Tsai"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
        </section>

        {/* ── Yellow divider strip ── */}
        <div style={{ backgroundColor: 'var(--yellow)', height: '6px' }} />

        {/* ── Cream exhibitions section ── */}
        <section
          style={{
            backgroundColor: 'var(--cream)',
            padding: 'clamp(4rem, 8vw, 6rem) 2rem',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                marginBottom: '3rem',
                color: 'var(--black)',
              }}
            >
              Exhibitions &amp; Publications
            </h2>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exhibitions.map((item, i) => (
                <li
                  key={i}
                  className={`animate-fade-up delay-${Math.min((i + 1) * 100, 600)}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: '2rem',
                    padding: '1.25rem 0',
                    borderBottom: '1px solid rgba(13,13,13,0.1)',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 400,
                      fontSize: '0.78rem',
                      letterSpacing: '0.1em',
                      color: 'var(--gray)',
                    }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.95rem', color: 'var(--black)' }}>
                      {item.title}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', color: 'var(--gray)', marginLeft: '0.5rem' }}>
                      — {item.venue}{item.location && `, ${item.location}`}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginLeft: '0.75rem',
                          fontFamily: 'var(--font-body)',
                          fontWeight: 400,
                          fontSize: '0.72rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--black)',
                          textDecoration: 'underline',
                          textUnderlineOffset: '3px',
                        }}
                      >
                        Link ↗
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
