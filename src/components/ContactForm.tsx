'use client';

import { useState, FormEvent } from 'react';

interface ContactFormProps {
  showSubject?: boolean;
}

export default function ContactForm({ showSubject = false }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Name row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div>
          <label
            style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              color: 'var(--black)',
            }}
          >
            First Name <span style={{ color: 'var(--gray)' }}>*</span>
          </label>
          <input name="firstName" required className="form-input" placeholder="Jane" />
        </div>
        <div>
          <label
            style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              color: 'var(--black)',
            }}
          >
            Last Name <span style={{ color: 'var(--gray)' }}>*</span>
          </label>
          <input name="lastName" required className="form-input" placeholder="Doe" />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            color: 'var(--black)',
          }}
        >
          Email <span style={{ color: 'var(--gray)' }}>*</span>
        </label>
        <input name="email" type="email" required className="form-input" placeholder="jane@example.com" />
      </div>

      {/* Subject (optional) */}
      {showSubject && (
        <div>
          <label
            style={{
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
              color: 'var(--black)',
            }}
          >
            Subject <span style={{ color: 'var(--gray)' }}>*</span>
          </label>
          <input name="subject" required className="form-input" placeholder="Hello!" />
        </div>
      )}

      {/* Message */}
      <div>
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            color: 'var(--black)',
          }}
        >
          Message <span style={{ color: 'var(--gray)' }}>*</span>
        </label>
        <textarea name="message" required className="form-input" placeholder="Your message..." />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'sending'}
          style={{ opacity: status === 'sending' ? 0.6 : 1 }}
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
      </div>

      {status === 'success' && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: '#2d7a4f',
            letterSpacing: '0.04em',
          }}
        >
          Message sent! I&apos;ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: '#c0392b',
            letterSpacing: '0.04em',
          }}
        >
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
