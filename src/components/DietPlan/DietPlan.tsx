import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'

type DietDay = { day: string; breakfast: string; lunch: string; dinner: string; snacks: string }
type DietPlan = { id: string; title: string; notes?: string; days: DietDay[] }

const DietPlanSection: React.FC = () => {
  const [plans, setPlans] = useState<DietPlan[]>([])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/diet-plans')
        const data = await res.json()
        if (!cancelled && res.ok && data.ok && Array.isArray(data.items)) {
          setPlans(data.items)
        }
      } catch {
        // ignore
      }
    })()
    return () => { cancelled = true }
  }, [])

  if (plans.length === 0) return null

  const plan = plans[0]

  return (
    <section id="diet" className="section">
      <Container maxWidth="lg">
        <Box className="section-title">
          <Typography variant="h2">{plan.title}</Typography>
          {plan.notes && (
            <Typography variant="body1">{plan.notes}</Typography>
          )}
        </Box>

        <Grid container spacing={3}>
          {plan.days.map((d, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>{d.day}</Typography>
                  <Typography variant="body2"><strong>Breakfast:</strong> {d.breakfast}</Typography>
                  <Typography variant="body2"><strong>Lunch:</strong> {d.lunch}</Typography>
                  <Typography variant="body2"><strong>Dinner:</strong> {d.dinner}</Typography>
                  <Typography variant="body2"><strong>Snacks:</strong> {d.snacks}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default DietPlanSection


