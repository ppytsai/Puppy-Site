import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const IG_HANDLE = 'ppytsai';
const IG_URL = `https://www.instagram.com/${IG_HANDLE}`;

interface IgPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
}

async function fetchInstagramPosts(): Promise<IgPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=24&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.data as IgPost[]).filter(
      (p) => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM'
    );
  } catch {
    return [];
  }
}

export default async function Photos() {
  const posts = await fetchInstagramPosts();
  const hasToken = !!process.env.INSTAGRAM_ACCESS_TOKEN;

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
              marginBottom: '2.5rem',
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
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up delay-200"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                color: 'var(--gray)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.2s ease',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @{IG_HANDLE}
            </a>
          </div>

          {/* Grid */}
          {posts.length > 0 ? (
            <div
              className="animate-fade-in delay-300"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '4px',
              }}
            >
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    position: 'relative',
                    aspectRatio: '1',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(13,13,13,0.06)',
                  }}
                  className="ig-post"
                >
                  <Image
                    src={post.media_url}
                    alt={post.caption?.substring(0, 120) || 'Instagram photo'}
                    fill
                    sizes="(max-width: 768px) 33vw, 360px"
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    className="ig-img"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          ) : (
            /* Placeholder shown when no token is configured */
            <div className="animate-fade-in delay-300">
              {/* Placeholder grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '4px',
                  marginBottom: '3rem',
                  opacity: 0.18,
                  pointerEvents: 'none',
                }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      aspectRatio: '1',
                      backgroundColor: 'var(--black)',
                    }}
                  />
                ))}
              </div>

              {!hasToken && (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '0 1rem',
                    marginTop: '-6rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: 500,
                      color: 'var(--black)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    @{IG_HANDLE}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '0.85rem',
                      color: 'var(--gray)',
                      marginBottom: '1.75rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Add <code style={{ fontFamily: 'monospace', fontSize: '0.8rem', background: 'rgba(13,13,13,0.07)', padding: '1px 5px', borderRadius: '3px' }}>INSTAGRAM_ACCESS_TOKEN</code> to your Vercel env vars to show your feed here.
                    <br />
                    See the README for setup instructions.
                  </p>
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View on Instagram
                  </a>
                </div>
              )}
            </div>
          )}
        </section>
      </main>

      <Footer />

      <style>{`
        .ig-post:hover .ig-img {
          transform: scale(1.04);
        }
        @media (max-width: 480px) {
          .ig-post:hover .ig-img {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
