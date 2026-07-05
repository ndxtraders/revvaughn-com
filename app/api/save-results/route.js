import { NextResponse } from 'next/server'

// Maps question index to MailerLite field key
const FIELD_MAP = [
  'lookalike',         // Q1  — Authority Engine
  'content_grind',     // Q2  — Authority Engine
  'invisible_online',  // Q3  — Authority Engine
  'empty_calendar',    // Q4  — Pipeline Engine
  'ignored_outreach',  // Q5  — Pipeline Engine
  'feast_or_famine',   // Q6  — Pipeline Engine
  'price_objection',   // Q7  — Conversion Engine
  'cold_fast',         // Q8  — Conversion Engine
  'slow_quotes',       // Q9  — Conversion Engine
  'vacation_test',     // Q10 — Founder Freedom
  'brain_trap',        // Q11 — Founder Freedom
  'bottleneck',        // Q12 — Founder Freedom
]

export async function POST(request) {
  try {
    const { email, answers, totalFriction } = await request.json()

    if (!email || !answers || answers.length !== 12) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY

    if (!MAILERLITE_API_KEY) {
      console.error('Missing MAILERLITE_API_KEY')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Build custom fields — skip null keys
    const fields = {}
    FIELD_MAP.forEach((key, i) => {
      if (key) {
        fields[key] = answers[i] || 'skipped'
      }
    })
    fields.total_friction = totalFriction

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        fields: fields,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('MailerLite update error:', response.status, errorData)
      return NextResponse.json({ error: 'Failed to save results' }, { status: response.status })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Save results error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
