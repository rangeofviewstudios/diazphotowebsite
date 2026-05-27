'use client'

import { useRef } from 'react'
import TextCursorProximity from '@/components/ui/text-cursor-proximity'

export default function HeroTitle() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="hero-title-wrap"
      style={{ lineHeight: 1 }}
    >
      <TextCursorProximity
        label="DIAZ"
        containerRef={containerRef}
        radius={180}
        falloff="gaussian"
        styles={{
          color: {
            from: '#EDE8DF',
            to: '#B8964E',
          },
          transform: {
            from: 'scale(1) translateY(0px)',
            to: 'scale(1.08) translateY(-4px)',
          },
        }}
        style={{
          fontFamily: 'var(--font-bebas)',
          fontSize: 'clamp(7rem, 19vw, 19rem)',
          letterSpacing: '-0.01em',
          lineHeight: 0.9,
          color: '#EDE8DF',
          display: 'block',
          animation: 'hero-title-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      />
    </div>
  )
}
