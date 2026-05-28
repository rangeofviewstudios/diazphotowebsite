'use client'

import { useState, useId } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const PROJECT_TYPES = [
  'Combat / Sports',
  'Music',
  'Events',
  'Training / Fitness',
  'Couples',
  'Graduation',
  'Other',
] as const

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.55rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  display: 'block',
  marginBottom: '0.5rem',
}

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: '2px',
  padding: '0.75rem 1rem',
  color: 'var(--text)',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  letterSpacing: '0.08em',
  outline: 'none',
}

const INPUT_FOCUS_STYLE: React.CSSProperties = {
  ...INPUT_STYLE,
  border: '1px solid var(--accent)',
}

const FIELD_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div style={FIELD_STYLE}>
      <label htmlFor={id} style={LABEL_STYLE}>
        {label}
      </label>
      {children}
    </div>
  )
}

export default function InquiryForm() {
  const uid = useId()
  const id = (name: string) => `${uid}-${name}`

  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Controlled focus states for gold border effect
  const [focused, setFocused] = useState<string | null>(null)
  const inputStyle = (name: string) => (focused === name ? INPUT_FOCUS_STYLE : INPUT_STYLE)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name:        data.get('name')        as string,
      email:       data.get('email')       as string,
      company:     data.get('company')     as string,
      projectType: data.get('projectType') as string,
      message:     data.get('message')     as string,
      _gotcha:     data.get('_gotcha')     as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })

      const result = await response.json() as { success?: boolean; error?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? 'Something went wrong.')
      }

      setFormState('success')
      form.reset()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setErrorMessage(message)
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <div
        style={{
          padding: '3rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
        role="status"
        aria-live="polite"
      >
        {/* Gold accent line */}
        <div style={{ width: '2rem', height: '1px', background: 'var(--accent)' }} />
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'var(--text)',
            lineHeight: 1.4,
          }}
        >
          Message received.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.12em',
            color: 'var(--muted)',
          }}
        >
          I&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Honeypot — hidden from real users, catches bots */}
      <input
        type="text"
        name="_gotcha"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <Field id={id('name')} label="Name *">
          <input
            id={id('name')}
            name="name"
            type="text"
            required
            autoComplete="name"
            style={inputStyle('name')}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            disabled={formState === 'loading'}
          />
        </Field>

        <Field id={id('email')} label="Email *">
          <input
            id={id('email')}
            name="email"
            type="email"
            required
            autoComplete="email"
            style={inputStyle('email')}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            disabled={formState === 'loading'}
          />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <Field id={id('company')} label="Company">
          <input
            id={id('company')}
            name="company"
            type="text"
            autoComplete="organization"
            style={inputStyle('company')}
            onFocus={() => setFocused('company')}
            onBlur={() => setFocused(null)}
            disabled={formState === 'loading'}
          />
        </Field>

        <Field id={id('projectType')} label="Project Type">
          <select
            id={id('projectType')}
            name="projectType"
            style={{
              ...inputStyle('projectType'),
              // Reset native select appearance
              appearance: 'none',
              WebkitAppearance: 'none',
              cursor: 'pointer',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235A554F' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              paddingRight: '2.5rem',
            }}
            onFocus={() => setFocused('projectType')}
            onBlur={() => setFocused(null)}
            disabled={formState === 'loading'}
          >
            <option value="">Select…</option>
            {PROJECT_TYPES.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id('message')} label="Message *">
        <textarea
          id={id('message')}
          name="message"
          required
          rows={6}
          style={{
            ...inputStyle('message'),
            resize: 'vertical',
            lineHeight: 1.6,
          }}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          disabled={formState === 'loading'}
        />
      </Field>

      {/* Error state */}
      {formState === 'error' && errorMessage && (
        <p
          role="alert"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.1em',
            color: '#c0533a',
          }}
        >
          {errorMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={formState === 'loading'}
          style={{
            background:   formState === 'loading' ? 'var(--muted)' : 'var(--accent)',
            color:        '#0a0a09',
            border:       'none',
            borderRadius: '2px',
            padding:      '0.75rem 2rem',
            fontFamily:   'var(--font-mono)',
            fontSize:     '0.62rem',
            letterSpacing:'0.2em',
            textTransform:'uppercase',
            cursor:        formState === 'loading' ? 'not-allowed' : 'pointer',
            transition:   'background 0.18s ease',
          }}
        >
          {formState === 'loading' ? 'Sending…' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  )
}
