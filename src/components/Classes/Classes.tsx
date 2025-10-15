import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
  Chip 
} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import './Classes.scss'

const Classes: React.FC = () => {
  const classes = [
    {
      title: 'Hatha Yoga',
      level: 'Beginner',
      duration: '60 min',
      capacity: '15 people',
      description: 'Perfect for beginners, this class focuses on basic postures and breathing techniques to build a strong foundation.',
      features: ['Foundational poses', 'Breath control', 'Relaxation', 'Flexibility'],
      color: 'primary',
    },
    {
      title: 'Vinyasa Flow',
      level: 'Intermediate',
      duration: '75 min',
      capacity: '12 people',
      description: 'A dynamic practice that links breath with movement, creating a flowing sequence of poses that builds strength and stamina.',
      features: ['Dynamic movement', 'Core strength', 'Cardiovascular', 'Mind-body connection'],
      color: 'secondary',
    },
    {
      title: 'Yin Yoga',
      level: 'All Levels',
      duration: '90 min',
      capacity: '20 people',
      description: 'A slow-paced practice with poses held for longer periods, targeting deep connective tissues for ultimate relaxation.',
      features: ['Deep stretching', 'Meditation', 'Stress relief', 'Joint health'],
      color: 'primary',
    },
    {
      title: 'Power Yoga',
      level: 'Advanced',
      duration: '60 min',
      capacity: '10 people',
      description: 'An intense, fitness-based approach combining strength, flexibility, and mindfulness for an energizing workout.',
      features: ['Strength building', 'High intensity', 'Endurance', 'Athletic'],
      color: 'secondary',
    },
    {
      title: 'Prenatal Yoga',
      level: 'All Levels',
      duration: '60 min',
      capacity: '8 people',
      description: 'Specially designed for expectant mothers, focusing on safe poses that support pregnancy and prepare for childbirth.',
      features: ['Safe for pregnancy', 'Pelvic floor', 'Breathing prep', 'Community support'],
      color: 'primary',
    },
    {
      title: 'Meditation & Pranayama',
      level: 'All Levels',
      duration: '45 min',
      capacity: '25 people',
      description: 'Dive deep into breath work and meditation practices to calm the mind, reduce stress, and enhance inner peace.',
      features: ['Breathwork', 'Mindfulness', 'Stress management', 'Mental clarity'],
      color: 'secondary',
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'success'
      case 'Intermediate':
        return 'primary'
      case 'Advanced':
        return 'error'
      default:
        return 'default'
    }
  }

  return (
    <section id="classes" className="classes-section section">
      <Container maxWidth="lg">
        <Box className="section-title">
          <Typography variant="h2">Our Classes</Typography>
          <Typography variant="body1">
            Choose from our diverse range of yoga classes designed for every level
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {classes.map((yogaClass, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card className={`class-card class-card-${yogaClass.color}`}>
                <CardContent>
                  <Box className="card-header">
                    <Typography variant="h4" className="class-title">
                      {yogaClass.title}
                    </Typography>
                    <Chip 
                      label={yogaClass.level} 
                      color={getLevelColor(yogaClass.level) as any}
                      size="small"
                      className="level-chip"
                    />
                  </Box>

                  <Box className="class-meta">
                    <Box className="meta-item">
                      <AccessTimeIcon />
                      <Typography variant="body2">{yogaClass.duration}</Typography>
                    </Box>
                    <Box className="meta-item">
                      <PeopleIcon />
                      <Typography variant="body2">{yogaClass.capacity}</Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" className="class-description">
                    {yogaClass.description}
                  </Typography>

                  <Box className="class-features">
                    {yogaClass.features.map((feature, idx) => (
                      <Chip 
                        key={idx}
                        label={feature}
                        size="small"
                        variant="outlined"
                        className="feature-chip"
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions className="card-actions">
                  <Button 
                    variant="contained" 
                    color={yogaClass.color as any}
                    fullWidth
                    endIcon={<TrendingUpIcon />}
                  >
                    Join This Class
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="classes-cta">
          <Typography variant="h4">
            Not sure which class is right for you?
          </Typography>
          <Typography variant="body1">
            Contact us for a free consultation, and we'll help you find the perfect class for your goals.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            color="primary"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get Free Consultation
          </Button>
        </Box>
      </Container>
    </section>
  )
}

export default Classes

