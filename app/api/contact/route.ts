import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Escape HTML special chars to prevent injection in email body
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function buildEmailHtml(fields: {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}): string {
  const { name, email, company, projectType, message } = fields
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: monospace; background: #080807; color: #EDE8DF; padding: 2rem; }
    h1   { font-size: 1.1rem; letter-spacing: 0.15em; text-transform: uppercase; color: #B8964E; margin: 0 0 1.5rem; }
    dl   { margin: 0; }
    dt   { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #5A554F; margin-top: 1.2rem; }
    dd   { font-size: 0.9rem; color: #EDE8DF; margin: 0.35rem 0 0; white-space: pre-wrap; }
    hr   { border: none; border-top: 1px solid #1C1B19; margin: 1.5rem 0 0; }
  </style>
</head>
<body>
  <h1>New Inquiry</h1>
  <dl>
    <dt>Name</dt>
    <dd>${escapeHtml(name)}</dd>

    <dt>Email</dt>
    <dd>${escapeHtml(email)}</dd>

    ${company ? `<dt>Company</dt><dd>${escapeHtml(company)}</dd>` : ''}
    ${projectType ? `<dt>Project Type</dt><dd>${escapeHtml(projectType)}</dd>` : ''}

    <dt>Message</dt>
    <dd>${escapeHtml(message)}</dd>
  </dl>
  <hr />
</body>
</html>
`
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot check — bots fill hidden fields, humans don't
  if (body._gotcha && String(body._gotcha).length > 0) {
    // Return 200 so bots don't know they were rejected
    return NextResponse.json({ success: true })
  }

  const name        = typeof body.name        === 'string' ? body.name.trim()        : ''
  const email       = typeof body.email       === 'string' ? body.email.trim()       : ''
  const company     = typeof body.company     === 'string' ? body.company.trim()     : ''
  const projectType = typeof body.projectType === 'string' ? body.projectType.trim() : ''
  const message     = typeof body.message     === 'string' ? body.message.trim()     : ''

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 422 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 422 })
  }

  const gmailUser   = process.env.GMAIL_USER
  const appPassword = process.env.GMAIL_APP_PASSWORD
  const contactTo   = process.env.CONTACT_TO

  if (!gmailUser || !appPassword || !contactTo) {
    console.error('Missing required environment variables: GMAIL_USER, GMAIL_APP_PASSWORD, or CONTACT_TO')
    return NextResponse.json({ error: 'Server configuration error. Please try again later.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: appPassword,
    },
  })

  try {
    await transporter.sendMail({
      from:    `"Diaz Photography" <${gmailUser}>`,
      to:      contactTo,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html:    buildEmailHtml({ name, email, company, projectType, message }),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return NextResponse.json({ error: 'Failed to send your message. Please try again.' }, { status: 500 })
  }
}
