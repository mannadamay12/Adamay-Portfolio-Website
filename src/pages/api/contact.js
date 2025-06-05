import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);



export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, website } = req.body;
  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['meadamann2002@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      reply_to: email,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}