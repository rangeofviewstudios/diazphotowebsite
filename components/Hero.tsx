import HeroTitle from '@/components/HeroTitle'

export default function Hero() {
  // Four highlights shown in the right panel grid
  const panels = [
    { src: '/images/boxing1/dsc00312.webp', label: 'COMBAT',  delay: '0.85s' },
    { src: '/images/muisc1/dsc01326.webp',  label: 'MUSIC',   delay: '0.95s' },
    { src: '/images/couple/dsc00022.webp',  label: 'COUPLES', delay: '1.05s' },
    { src: '/images/grad/dsc08259.webp',    label: 'LIFE',    delay: '1.15s' },
  ]

  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* ── Main background image ─────────────────────────────────────────── */}
      <div
        className="hero-bg"
        style={{ position: 'absolute', inset: 0 }}
      >
        <img
          src="/images/boxing2/dsc02238.webp"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 15%',
            filter: 'brightness(0.62) saturate(0.22)',
          }}
        />
        {/* Gradient: bottom fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(8,8,7,0.1) 0%, rgba(8,8,7,0) 30%, rgba(8,8,7,0.75) 75%, rgba(8,8,7,0.98) 100%)',
          }}
        />
        {/* Gradient: left fade for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(8,8,7,0.85) 0%, rgba(8,8,7,0.3) 45%, rgba(8,8,7,0.1) 65%, transparent 100%)',
          }}
        />
        {/* Gradient: right fade so panels have clean edge */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to left, rgba(8,8,7,0.85) 0%, transparent 30%)',
          }}
        />
      </div>

      {/* ── Live badge ───────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(1.5rem, 3vw, 2.5rem)',
          left: 'clamp(2rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'fade-in 0.8s ease 0.3s both',
          zIndex: 10,
        }}
      >
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: 'var(--accent)',
            display: 'block',
            animation: 'live-pulse 2.2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.5rem',
            letterSpacing: '0.24em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Portfolio
        </span>
      </div>

      {/* ── Right panel: 2×2 highlight grid (desktop) ────────────────────── */}
      <div className="hero-panels">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="hero-panel-item"
            style={{ animationDelay: panel.delay }}
          >
            <img
              src={panel.src}
              alt=""
              aria-hidden="true"
            />
            <span className="hero-panel-label">{panel.label}</span>
          </div>
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(2rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          width: '100%',
        }}
      >
        {/* DIAZ — cursor proximity interactive title */}
        <HeroTitle />

        {/* Tagline */}
        <div className="hero-tagline" style={{ marginTop: '0.5rem' }}>
          <p
            className="hero-tagline-inner"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--muted)',
              letterSpacing: '0.12em',
            }}
          >
            Combat &ensp;·&ensp; Music &ensp;·&ensp; Portraits &ensp;·&ensp; Life
          </p>
        </div>

        {/* Editorial details row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.2rem',
            marginTop: '1.4rem',
            animation: 'fade-in 0.9s ease 0.9s both',
          }}
        >
          <div
            style={{
              width: '1.8rem',
              height: '1px',
              background: 'var(--accent)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5rem',
              letterSpacing: '0.2em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
            }}
          >
            Atlanta, GA
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.45rem',
              letterSpacing: '0.1em',
              color: 'rgba(90,85,79,0.45)',
            }}
          >
            ·
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5rem',
              letterSpacing: '0.2em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
            }}
          >
            Photography
          </span>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          animation: 'fade-in 1s ease 1.5s both',
          zIndex: 10,
        }}
      >
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
