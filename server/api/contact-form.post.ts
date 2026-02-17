import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate required fields
  const { name, email, phone, subject, message } = body

  if (!name || !email || !phone || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }

  // Get Brevo API key from environment
  const brevoApiKey = process.env.BREVO_API_KEY
  if (!brevoApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Brevo API key not configured'
    })
  }

  // Get admin email from environment or use default
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com'

  try {
    // Send email via Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: name,
          email: email
        },
        to: [
          {
            email: adminEmail,
            name: 'Admin'
          }
        ],
        subject: subject || `New Contact Form Submission from ${name}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || 'N/A')}</p>
          <h3>Message:</h3>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
        textContent: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject || 'N/A'}

Message:
${message}
        `
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error:', errorData)
      throw createError({
        statusCode: response.status,
        statusMessage: 'Failed to send email via Brevo'
      })
    }

    const result = await response.json()

    return {
      success: true,
      message: 'Contact form submitted successfully',
      messageId: result.messageId
    }
  } catch (error: any) {
    console.error('Contact form error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Failed to process contact form'
    })
  }
})

/**
 * Basic HTML escape function to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
