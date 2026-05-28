import type { Metadata } from 'next'
import InquiryForm from '@/components/InquiryForm'

export const metadata: Metadata = {
  title: 'Inquire — Diaz Photography',
  description: 'Book a session or ask about availability. Combat sports, music, events, training, couples, and graduation photography in Atlanta, GA.',
}

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100dvh' }}>
      <div
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 6rem) clamp(4rem, 8vw, 7rem)',
          maxWidth: '800px',
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.55rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         'var(--muted)',
            marginBottom:  '1.25rem',
          }}
        >
          Atlanta, GA &nbsp;·&nbsp; Available for bookings
        </p>

        {/* Heading */}
        <h1
          style={{
            fontFamily:   'var(--font-bebas)',
            fontSize:     'clamp(3.5rem, 9vw, 7.5rem)',
            lineHeight:   0.9,
            letterSpacing:'0.03em',
            color:        'var(--text)',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          Let&apos;s Work
          <br />
          <span style={{ color: 'var(--accent)' }}>Together</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontFamily:    'var(--font-cormorant)',
            fontSize:      'clamp(1rem, 1.8vw, 1.35rem)',
            fontStyle:     'italic',
            fontWeight:    300,
            color:         'var(--muted)',
            lineHeight:    1.55,
            maxWidth:      '520px',
            marginBottom:  'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          Tell me about your project and I&apos;ll get back to you within 24 hours.
        </p>

        {/* Gold accent line before form */}
        <div
          style={{
            width:         '2.5rem',
            height:        '1px',
            background:    'var(--accent)',
            marginBottom:  '2.5rem',
          }}
        />

        <InquiryForm />
      </div>

      {/* Footer */}
      <footer className="site-footer" style={{ marginTop: 'auto' }}>
        <span
          style={{
            fontFamily:    'var(--font-bebas)',
            fontSize:      '1.1rem',
            letterSpacing: '0.12em',
            color:         'var(--text)',
          }}
        >
          DIAZ
        </span>
        <span
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.55rem',
            letterSpacing: '0.15em',
            color:         'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Photography &nbsp;·&nbsp; All rights reserved
        </span>
      </footer>
    </main>
  )
}
