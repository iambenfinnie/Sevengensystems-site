import { Resend } from 'resend'

export const runtime = 'nodejs'

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char])
}

export async function POST(req: Request) {
  let body: { name?: string; email?: string; organization?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, organization, message } = body

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.resend)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Seven Gen Systems Contact <contact@sevengensystems.com>',
      to: 'ben@sevengensystems.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></p>
        ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
    }

    return Response.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Email send error:', error)
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
