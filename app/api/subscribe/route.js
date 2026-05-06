import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
    const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID

    if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
      console.error('Missing MailerLite environment variables')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        groups: [MAILERLITE_GROUP_ID],
      }),
    })

    const data = await response.json()

    // MailerLite returns 200 or 201 for new and existing subscribers
    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // 422 = validation error (invalid email format on MailerLite side)
    if (response.status === 422) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 422 })
    }

    // 429 = rate limited
    if (response.status === 429) {
      return NextResponse.json({ error: 'Too many requests. Please try again in a moment.' }, { status: 429 })
    }

    console.error('MailerLite error:', response.status, data)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: response.status })
  } catch (error) {
    console.error('Subscribe route error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
