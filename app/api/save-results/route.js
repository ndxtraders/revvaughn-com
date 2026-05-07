import { NextResponse } from 'next/server'

// Maps question index to MailerLite field key
// Q14 (index 13) and Q15 (index 14) are null — not sent to MailerLite
const FIELD_MAP = [
  'vacation_test',   // Q1
  'missed_emails',   // Q2
  'brain_trap',      // Q3
  'lead_response',   // Q4
  'content_grind',   // Q5
  'spam_outreach',   // Q6
  'slow_quotes',     // Q7
  'lead_neglect',    // Q8
  'upsell_miss',     // Q9
  'scope_creep',     // Q10
  'time_tracking',   // Q11
  'copy_paste_pain', // Q12
  'client_churn',    // Q13
  null,              // Q14 — not tracked in MailerLite
  null,              // Q15 — not tracked in MailerLite
]

export async function POST(request) {
  try {
    const { email, answers, totalFriction } = await request.json()

    if (!email || !answers || answers.length !== 15) {
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
