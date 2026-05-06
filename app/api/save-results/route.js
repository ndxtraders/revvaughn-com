import { NextResponse } from 'next/server'

const FIELD_KEYS = [
  'vacation_test',
  'brain_trap',
  'decision_tax',
  'lead_speed',
  'follow_up_gap',
  'content_grind',
  'copy_paste_pain',
  'high_value_work',
  'status_tax',
  'new_client_welcome',
  'meeting_waste',
  'reporting_grind',
]

export async function POST(request) {
  try {
    const { email, answers, totalFriction, redCount } = await request.json()

    if (!email || !answers || answers.length !== 12) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY

    if (!MAILERLITE_API_KEY) {
      console.error('Missing MAILERLITE_API_KEY')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Build custom fields object
    const fields = {}
    FIELD_KEYS.forEach((key, i) => {
      fields[key] = answers[i] || 'skipped'
    })
    fields.total_friction = totalFriction
    fields.red_count = redCount

    // Update subscriber with quiz results
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
