import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {}

  if (!subject || !message) {
    return res.status(400).json({ ok: false, error: 'Subject and message are required' })
  }

  const toEmail = process.env.MAIL_TO || 'vamikanautiyal@gmail.com'
  try {
    let transporter
    let usingEthereal = false

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Boolean(process.env.SMTP_SECURE === 'true'),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })
    } else {
      // Fallback: Ethereal test account for development preview
      const testAccount = await nodemailer.createTestAccount()
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass }
      })
      usingEthereal = true
    }

    const html = `
      <div>
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br/>')}</p>
      </div>
    `

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || 'no-reply@yoursite.com',
      to: toEmail,
      subject: subject,
      text: `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\n\n${message}`,
      html
    })

    let previewUrl
    if (usingEthereal) {
      previewUrl = nodemailer.getTestMessageUrl(info)
      console.log('Ethereal preview URL:', previewUrl)
    }

    res.json({ ok: true, previewUrl, usingEthereal })
  } catch (err) {
    console.error('Email send failed', err)
    res.status(500).json({ ok: false, error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`)
})


