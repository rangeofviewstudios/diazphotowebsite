import Hero from '@/components/Hero'
import Bio from '@/components/Bio'
import Gallery from '@/components/Gallery'
import InquiryForm from '@/components/InquiryForm'
import Grainient from '@/components/ui/Grainient'

export default function Home() {
  return (
    <main>
      <Hero />
      <Bio />
      <Gallery />

      {/* ── Inquiry section ──────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid var(--border)',
        }}
      >
        {/* Subtle warm Grainient background */}
        <Grainient
          color1="#1E1409"
          color2="#07070605"
          color3="#130F08"
          timeSpeed={0.05}
          warpStrength={0.25}
          warpFrequency={2.5}
          warpSpeed={1.0}
          warpAmplitude={280}
          blendSoftness={0.3}
          rotationAmount={150}
          noiseScale={1.2}
          grainAmount={0.035}
          grainScale={3.5}
          contrast={1.15}
          saturation={0.75}
          zoom={0.7}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding:  'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 6rem)',
            maxWidth: '640px',
            margin:   '0 auto',
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
        </div>
      </section>
    </main>
  )
}
