import { NextResponse } from 'next/server'

// Archives the generated AI Priority Map PDF to Supabase Storage so a visitor's
// results are retained even if they never click download. Uses the service role
// key server-side (bypasses RLS); never expose this route's keys to the client.
export async function POST(request) {
  try {
    const formData = await request.formData()
    const email = formData.get('email')
    const file = formData.get('pdf')
    const answersRaw = formData.get('answers')
    const totalFrictionRaw = formData.get('totalFriction')

    if (!email || !file) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    const SUPABASE_URL = process.env.SUPABASE_URL
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
    const BUCKET = 'priority-map-pdfs'

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing Supabase env vars')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Store as priority-map-pdfs/<email-slug>/<timestamp>.pdf — one folder per
    // respondent, timestamped files so submission history is preserved.
    const slug = String(email)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    const path = `${slug}/${stamp}.pdf`

    const bytes = Buffer.from(await file.arrayBuffer())

    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        'Content-Type': 'application/pdf',
        'x-upsert': 'true',
      },
      body: bytes,
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('Supabase Storage upload error:', res.status, errText)
      return NextResponse.json({ error: 'Failed to archive PDF' }, { status: res.status })
    }

    // Link the PDF to the user: write a queryable row (email + results + pdf path).
    // Non-fatal — a failure here must not break the PDF flow.
    if (answersRaw && totalFrictionRaw != null) {
      try {
        const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/priority_map_results`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            apikey: SUPABASE_SERVICE_ROLE_KEY,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            email: String(email),
            answers: JSON.parse(answersRaw),
            total_friction: parseInt(totalFrictionRaw, 10),
            pdf_path: path,
          }),
        })
        if (!dbRes.ok) {
          console.error('priority_map_results insert error:', dbRes.status, await dbRes.text())
        }
      } catch (e) {
        console.error('priority_map_results insert exception:', e)
      }
    }

    return NextResponse.json({ success: true, path }, { status: 200 })
  } catch (error) {
    console.error('save-pdf error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
