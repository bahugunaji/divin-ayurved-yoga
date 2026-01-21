import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, TextField, Button, Tabs, Tab } from '@mui/material'

const Admin: React.FC = () => {
  const [token, setToken] = useState<string | null>(null)
  const [tab, setTab] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [classesData, setClassesData] = useState<any[]>([])
  const [dietPlans, setDietPlans] = useState<any[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('admin_token')
    if (saved) setToken(saved)
  }, [])

  useEffect(() => {
    if (!token) return
    fetch('/api/testimonials').then(r => r.json()).then(d => d.ok && setTestimonials(d.items))
    fetch('/api/classes').then(r => r.json()).then(d => d.ok && setClassesData(d.items))
    fetch('/api/diet-plans').then(r => r.json()).then(d => d.ok && setDietPlans(d.items))
  }, [token])

  const login = async () => {
    const res = await fetch('/api/login', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    if (!res.ok || !data.ok) return alert(data.error || 'Login failed')
    localStorage.setItem('admin_token', data.token)
    setToken(data.token)
  }

  const saveTestimonials = async () => {
    const res = await fetch('/api/testimonials', {
      method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ items: testimonials })
    })
    const data = await res.json()
    if (!res.ok || !data.ok) return alert(data.error || 'Save failed')
    alert('Testimonials saved')
  }

  const saveClasses = async () => {
    const res = await fetch('/api/classes', {
      method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ items: classesData })
    })
    const data = await res.json()
    if (!res.ok || !data.ok) return alert(data.error || 'Save failed')
    alert('Classes saved')
  }

  const saveDietPlans = async () => {
    const res = await fetch('/api/diet-plans', {
      method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ items: dietPlans })
    })
    const data = await res.json()
    if (!res.ok || !data.ok) return alert(data.error || 'Save failed')
    alert('Diet plans saved')
  }

  if (!token) {
    return (
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Admin Login</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button variant="contained" onClick={login}>Login</Button>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="Testimonials" />
        <Tab label="Classes" />
        <Tab label="Diet Plans" />
      </Tabs>

      {tab === 0 && (
        <Box>
          <TextField
            label="Testimonials JSON"
            value={JSON.stringify(testimonials, null, 2)}
            onChange={e => {
              try { setTestimonials(JSON.parse(e.target.value)) } catch {}
            }}
            multiline minRows={16} fullWidth
          />
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={saveTestimonials}>Save</Button>
          </Box>
        </Box>
      )}

      {tab === 1 && (
        <Box>
          <TextField
            label="Classes JSON"
            value={JSON.stringify(classesData, null, 2)}
            onChange={e => {
              try { setClassesData(JSON.parse(e.target.value)) } catch {}
            }}
            multiline minRows={16} fullWidth
          />
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={saveClasses}>Save</Button>
          </Box>
        </Box>
      )}

      {tab === 2 && (
        <Box>
          <TextField
            label="Diet Plans JSON"
            value={JSON.stringify(dietPlans, null, 2)}
            onChange={e => {
              try { setDietPlans(JSON.parse(e.target.value)) } catch {}
            }}
            multiline minRows={16} fullWidth
          />
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={saveDietPlans}>Save</Button>
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default Admin


