/**
 * Brevo API Client Utilities
 */

interface ContactAttributes {
  FIRSTNAME: string
  LASTNAME: string
  PHONE: string
}

interface EmailSenderInfo {
  name: string
  email: string
}

interface EmailRecipient {
  email: string
  name: string
}

/**
 * Create or update a contact in Brevo CRM
 */
export async function createOrUpdateContact(
  email: string,
  attributes: ContactAttributes,
  brevoApiKey: string
): Promise<Response> {
  return fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': brevoApiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      attributes: attributes,
      updateEnabled: true
    })
  })
}

/**
 * Send email via Brevo SMTP API
 */
export async function sendEmailViaBrevo(
  sender: EmailSenderInfo,
  recipients: EmailRecipient[],
  subject: string,
  htmlContent: string,
  textContent: string,
  brevoApiKey: string
): Promise<Response> {
  return fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': brevoApiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      sender: sender,
      to: recipients,
      subject: subject,
      htmlContent: htmlContent,
      textContent: textContent
    })
  })
}
