import Hero from '@/components/Hero'
import Bio from '@/components/Bio'
import Gallery from '@/components/Gallery'
import InquiryForm from '@/components/InquiryForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Bio />
      <Gallery />

      {/* ── Inquiry section ──────────────────────────────────────────────── */}
      <section
        style={{
          padding:   'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 6rem)',
          borderTop: '1px solid var(--border)',
          maxWidth:  '640px',
          margin:    '0 auto',
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
          Available for bookings
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily:    'var(--font-bebas)',
            fontSize:      'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight:    0.92,
            letterSpacing: '0.03em',
            color:         'var(--text)',
            marginBottom:  'clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          Book a Session
        </h2>

        {/* Gold accent line */}
        <div
          style={{
            width:        '2.5rem',
            height:       '1px',
            background:   'var(--accent)',
            marginBottom: '2rem',
          }}
        />

        <InquiryForm />
      </section>
    </main>
  )
}
