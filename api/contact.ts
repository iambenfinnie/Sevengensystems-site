import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, organization, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'Seven Gen Systems Contact <contact@send.sevengensystems.com>',
      to: 'contact@sevengensystems.com',
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}
