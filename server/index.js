import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Basic request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
  next()
})

// Simple in-memory store (replace with DB for production)
const db = {
  users: [
    {
      id: 'admin',
      username: process.env.ADMIN_USER || 'admin',
      password: process.env.ADMIN_PASS || 'password' // change in env for security
    }
  ],
  tokens: new Map(),
  testimonials: [],
  classes: [],
  dietPlans: []
}

// Seed initial content if empty
if (db.testimonials.length === 0) {
  db.testimonials = [
    { name: 'Charu Bhasin', role: 'Business Owner', rating: 5, text: 'After years of dealing with chronic back pain...', initials: 'VS', color: '#37956d' },
    { name: 'Renu Rana', role: 'Software Engineer', rating: 5, text: "Shri Shakti Divine Yoga has been a transformative experience for me...", initials: 'AM', color: '#b0708c' },
  ]
}
if (db.classes.length === 0) {
  db.classes = [
    { title: 'Hatha Yoga', level: 'Beginner', duration: '60 min', capacity: '15 people', description: 'Perfect for beginners...', features: ['Foundational poses','Breath control','Relaxation','Flexibility'], color: 'primary' }
  ]
}

// Seed diet plans (7-day sample)
if (db.dietPlans.length === 0) {
  db.dietPlans = [
    {
      id: 'week-1',
      title: '7-Day Weight Loss Plan',
      notes: 'Focus on high-protein, high-fiber foods. Hydrate well and exercise regularly.',
      days: [
        { day: 'Day 1', breakfast: 'Oatmeal + berries', lunch: 'Grilled chicken salad', dinner: 'Grilled fish + veggies', snacks: 'Greek yogurt, nuts' },
        { day: 'Day 2', breakfast: 'Eggs + spinach', lunch: 'Quinoa bowl + veggies', dinner: 'Paneer/tofu stir-fry', snacks: 'Apple, almonds' },
        { day: 'Day 3', breakfast: 'Yogurt + chia + fruit', lunch: 'Lentil soup + salad', dinner: 'Chicken + broccoli', snacks: 'Carrot sticks, hummus' },
        { day: 'Day 4', breakfast: 'Smoothie (protein + banana)', lunch: 'Brown rice + dal + salad', dinner: 'Fish + mixed greens', snacks: 'Walnuts, orange' },
        { day: 'Day 5', breakfast: 'Poha/upma with veggies', lunch: 'Grilled tofu salad', dinner: 'Egg bhurji + veggies', snacks: 'Buttermilk, seeds' },
        { day: 'Day 6', breakfast: 'Besan chilla + curd', lunch: 'Millet khichdi + salad', dinner: 'Chicken soup + salad', snacks: 'Yogurt, peanuts' },
        { day: 'Day 7', breakfast: 'Paratha (multigrain) + curd', lunch: 'Buddha bowl', dinner: 'Fish/tofu + veggies', snacks: 'Fruit bowl' }
      ]
    }
  ]
}

function requireAuth(req, res, next) {
  const auth = req.headers.authorization || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (!token || !db.tokens.has(token)) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' })
  }
  next()
}

app.post('/api/login', (req, res) => {
  let { username, password } = req.body || {}
  if (typeof username === 'string') username = username.trim()
  if (typeof password === 'string') password = password.trim()
  const user = db.users.find(u => u.username === username && u.password === password)
  if (!user) return res.status(401).json({ ok: false, error: 'Invalid credentials' })
  const token = crypto.randomBytes(24).toString('hex')
  db.tokens.set(token, { userId: user.id, createdAt: Date.now() })
  res.json({ ok: true, token })
})

app.post('/api/logout', requireAuth, (req, res) => {
  const auth = req.headers.authorization || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (token) db.tokens.delete(token)
  res.json({ ok: true })
})

// Content APIs
app.get('/api/testimonials', (_req, res) => {
  res.json({ ok: true, items: db.testimonials })
})
app.put('/api/testimonials', requireAuth, (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items : null
  if (!items) return res.status(400).json({ ok: false, error: 'items array required' })
  db.testimonials = items
  res.json({ ok: true })
})

app.get('/api/classes', (_req, res) => {
  res.json({ ok: true, items: db.classes })
})
app.put('/api/classes', requireAuth, (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items : null
  if (!items) return res.status(400).json({ ok: false, error: 'items array required' })
  db.classes = items
  res.json({ ok: true })
})

// Diet Plans APIs
app.get('/api/diet-plans', (_req, res) => {
  res.json({ ok: true, items: db.dietPlans })
})
app.put('/api/diet-plans', requireAuth, (req, res) => {
  const items = Array.isArray(req.body?.items) ? req.body.items : null
  if (!items) return res.status(400).json({ ok: false, error: 'items array required' })
  db.dietPlans = items
  res.json({ ok: true })
})

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
      try {
        const testAccount = await nodemailer.createTestAccount()
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: { user: testAccount.user, pass: testAccount.pass }
        })
        usingEthereal = true
      } catch (e) {
        // Final fallback: stream transport (no external network), return HTML to client
        transporter = nodemailer.createTransport({
          streamTransport: true,
          newline: 'unix',
          buffer: true
        })
      }
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
    let htmlContent
    if (usingEthereal) {
      previewUrl = nodemailer.getTestMessageUrl(info)
      console.log('Ethereal preview URL:', previewUrl)
    }
    // If using stream transport, provide the HTML content back to client
    if (!usingEthereal && info && info.message && Buffer.isBuffer(info.message)) {
      htmlContent = html
    }

    res.json({ ok: true, previewUrl, usingEthereal, htmlContent })
  } catch (err) {
    console.error('Email send failed', err)
    res.status(500).json({ ok: false, error: 'Failed to send email', detail: err?.message })
  }
})

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`)
})


