export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--black)',
        color: 'var(--yellow)',
        padding: '2.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(245, 208, 0, 0.6)',
          }}
        >
          Find Puppy on:
        </span>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ppytsai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-social"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/puppytsai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-social"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .footer-social {
          color: var(--yellow);
          display: flex;
          transition: opacity 0.2s ease;
        }
        .footer-social:hover {
          opacity: 0.65;
        }
      `}</style>
    </footer>
  );
}
