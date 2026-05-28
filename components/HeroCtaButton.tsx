'use client'

export default function HeroCtaButton() {
  return (
    <a
      href="#contact"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginTop: '2rem',
        padding: '0.85rem 1.8rem',
        background: 'var(--accent)',
        color: '#0a0a09',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        borderRadius: '2px',
        animation: 'fade-in 0.9s ease 1.1s both',
        transition: 'background 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#c9a55a'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--accent)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      Book a Session
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}
