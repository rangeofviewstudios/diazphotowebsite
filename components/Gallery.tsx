'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { photos, categories, type CategoryId } from '@/lib/photos'

export default function Gallery() {
  const [active, setActive] = useState<CategoryId | 'all'>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [galleryKey, setGalleryKey] = useState(0)
  const prevCategory = useRef(active)

  const filtered = active === 'all' ? photos : photos.filter(p => p.category === active)

  // Trigger re-animation when category changes
  const handleCategoryChange = (id: CategoryId | 'all') => {
    if (id === active) return
    prevCategory.current = active
    setActive(id)
    setGalleryKey(k => k + 1)
    if (lightbox !== null) setLightbox(null)
  }

  // Lightbox keyboard navigation
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevPhoto = useCallback(() =>
    setLightbox(i => (i === null ? null : (i - 1 + filtered.length) % filtered.length)), [filtered.length])
  const nextPhoto = useCallback(() =>
    setLightbox(i => (i === null ? null : (i + 1) % filtered.length)), [filtered.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     closeLightbox()
      if (e.key === 'ArrowLeft')  prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox, prevPhoto, nextPhoto])

  const galleryRef = useRef<HTMLDivElement>(null)

  const counts = Object.fromEntries(
    categories.map(c => [
      c.id,
      c.id === 'all' ? photos.length : photos.filter(p => p.category === c.id).length,
    ])
  )

  return (
    <div ref={galleryRef}>
      {/* ── Category navigation ──────────────────────────────────────────── */}
      <nav className="cat-nav" aria-label="Photography categories">
        {/* Logo mark */}
        <div style={{ marginRight: '0.6rem', flexShrink: 0 }}>
          <Image
            src="/diazlogo.png"
            alt="Diaz Photography"
            width={64}
            height={36}
            style={{
              filter: 'invert(1) brightness(100)',
              mixBlendMode: 'screen',
              display: 'block',
            }}
          />
        </div>

        {/* Separator */}
        <div style={{
          width: '1px',
          height: '20px',
          background: 'var(--border)',
          flexShrink: 0,
          marginRight: '0.4rem',
        }} />

        {categories.map(cat => (
          <button
            key={cat.id}
            className={`cat-btn${active === cat.id ? ' active' : ''}`}
            onClick={() => handleCategoryChange(cat.id as CategoryId | 'all')}
            aria-pressed={active === cat.id}
          >
            {cat.label}
            <span className="cat-count">{counts[cat.id]}</span>
          </button>
        ))}
      </nav>

      {/* ── Category header ───────────────────────────────────────────────── */}
      {active !== 'all' && (
        <div
          key={`header-${active}`}
          style={{
            padding: '2.5rem clamp(1rem, 3vw, 2.5rem) 1rem',
            animation: 'fade-in 0.4s ease',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-bebas)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--text)',
              letterSpacing: '0.04em',
              lineHeight: 1,
            }}
          >
            {categories.find(c => c.id === active)?.label}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1.05rem)',
              fontStyle: 'italic',
              color: 'var(--muted)',
              marginTop: '0.3rem',
              letterSpacing: '0.08em',
            }}
          >
            {categories.find(c => c.id === active)?.sub}
          </p>
        </div>
      )}

      {/* ── Masonry grid ─────────────────────────────────────────────────── */}
      <div
        key={galleryKey}
        className="masonry-grid gallery-fade"
        style={{ paddingTop: active === 'all' ? 'var(--gap)' : 0 }}
      >
        {filtered.map((photo, idx) => (
          <button
            key={photo.src}
            className="masonry-item"
            onClick={() => setLightbox(idx)}
            aria-label={`Open ${photo.alt}`}
            style={{ cursor: 'pointer', display: 'block', width: '100%', border: 'none', padding: 0, background: 'none' }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={800}
              sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
              priority={idx < 6}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </button>
        ))}
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)' }}>
        {/* ROV attribution block */}
        <a
          href="https://www.rovstudios.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: 'clamp(3rem, 6vw, 5rem) 2rem',
            borderBottom: '1px solid var(--border)',
            textDecoration: 'none',
            transition: 'opacity 0.25s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Curated with intention by
          </span>
          <Image
            src="/WHITEnoBG.png"
            alt="Range Of View Studios"
            width={220}
            height={60}
            style={{ display: 'block', opacity: 0.88 }}
          />
        </a>

        {/* Bottom bar */}
        <div className="site-footer">
          <Image
            src="/diazlogo.png"
            alt="Diaz Photography"
            width={96}
            height={54}
            style={{
              filter: 'invert(1) brightness(100)',
              mixBlendMode: 'screen',
              display: 'block',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
            }}
          >
            Photography &nbsp;·&nbsp; All rights reserved
          </span>
        </div>
      </footer>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={e => { if (e.target === e.currentTarget) closeLightbox() }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Close */}
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">
            <span>ESC</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </button>

          {/* Prev */}
          <button className="lb-btn prev" onClick={prevPhoto} aria-label="Previous photo">
            <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
              <path d="M18 2L2 18l16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Image */}
          <div className="lightbox-img-wrap">
            <Image
              key={lightbox}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1920}
              height={1280}
              priority
              sizes="(max-width: 768px) 90vw, 80vw"
              className="lightbox-img"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Next */}
          <button className="lb-btn next" onClick={nextPhoto} aria-label="Next photo">
            <svg width="20" height="36" viewBox="0 0 20 36" fill="none">
              <path d="M2 2l16 16L2 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Category label */}
          <p className="lb-category">
            {filtered[lightbox].category}
          </p>

          {/* Counter */}
          <p className="lb-counter">
            {String(lightbox + 1).padStart(2, '0')} &nbsp;/&nbsp; {String(filtered.length).padStart(2, '0')}
          </p>
        </div>
      )}
    </div>
  )
}
