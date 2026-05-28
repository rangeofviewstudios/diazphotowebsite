import Grainient from '@/components/ui/Grainient'

export default function Bio() {
  return (
    <section
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm Grainient background */}
      <Grainient
        color1="#231507"
        color2="#080807"
        color3="#0E0B06"
        timeSpeed={0.06}
        warpStrength={0.35}
        warpFrequency={3.0}
        warpSpeed={1.2}
        warpAmplitude={220}
        blendSoftness={0.25}
        rotationAmount={180}
        noiseScale={1.5}
        grainAmount={0.04}
        grainScale={3.0}
        contrast={1.2}
        saturation={0.85}
        zoom={0.75}
      />

      {/* Accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 'clamp(1.5rem, 5vw, 4rem)',
          width: '2.5rem',
          height: '1px',
          background: 'var(--accent)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'start',
          position: 'relative',
          zIndex: 1,
        }}
        className="bio-grid"
      >
        {/* Label column */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              paddingTop: '0.25rem',
            }}
          >
            Atlanta, GA
          </p>
        </div>

        {/* Bio text */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.15rem, 2vw, 1.6rem)',
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--text)',
              maxWidth: '780px',
            }}
          >
            Capturing real moments with a clean, cinematic feel. Concerts, sports,
            couples, graduations, lifestyle — always natural, always confident,
            always worth showing off.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--muted)',
              marginTop: '1rem',
              letterSpacing: '0.04em',
            }}
          >
            Available for bookings &nbsp;·&nbsp; DM to inquire
          </p>
        </div>
      </div>
    </section>
  )
}
