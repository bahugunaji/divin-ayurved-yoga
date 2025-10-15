import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PsychologyIcon from '@mui/icons-material/Psychology'
import EmojiNatureIcon from '@mui/icons-material/EmojiNature'
import GroupsIcon from '@mui/icons-material/Groups'
import './About.scss'

const About: React.FC = () => {
  const values = [
    {
      icon: <FavoriteIcon />,
      title: 'Compassion',
      description: 'We create a supportive and nurturing environment where everyone feels welcome and accepted.',
    },
    {
      icon: <PsychologyIcon />,
      title: 'Mindfulness',
      description: 'We emphasize present-moment awareness and conscious living in all our practices.',
    },
    {
      icon: <EmojiNatureIcon />,
      title: 'Authenticity',
      description: 'We honor the traditional roots of yoga while adapting to modern needs.',
    },
    {
      icon: <GroupsIcon />,
      title: 'Community',
      description: 'We foster meaningful connections and support among our yoga family.',
    },
  ]

  return (
    <section id="about" className="about-section section">
      <Container maxWidth="lg">
        <Box className="section-title">
          <Typography variant="h2">About Our Studio</Typography>
          <Typography variant="body1">
            Discover a sanctuary for your wellness journey
          </Typography>
        </Box>

        <Grid container spacing={6} className="about-content">
          <Grid item xs={12} md={6}>
            <Box className="about-image-container animate-fade-in-left">
              <Box className="about-image">
                <span className="material-icons about-main-icon">spa</span>
                <Box className="image-overlay">
                  <Typography variant="h4">
                    5 Years of Experience
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="about-text animate-fade-in-right">
              <Typography variant="h3" className="about-subtitle">
                Your Journey to Wellness Begins Here
              </Typography>
              <Typography variant="body1" className="about-description">
                At Shri Shakti Divine Yoga, we believe that yoga is more than just physical exercise—it's 
                a transformative journey that harmonizes the mind, body, and spirit. Our studio offers a 
                peaceful sanctuary where ancient yogic wisdom meets modern wellness practices.
              </Typography>
              <Typography variant="body1" className="about-description">
                Founded with a vision to make yoga accessible to everyone, we provide a welcoming space 
                for practitioners of all levels. Whether you're a beginner taking your first steps or an 
                experienced yogi deepening your practice, our certified instructors are here to guide you 
                with expertise and compassion.
              </Typography>
              <Box className="about-stats">
                <Box className="stat-item">
                  <Typography variant="h3" className="stat-number">500+</Typography>
                  <Typography variant="body2" className="stat-label">Happy Students</Typography>
                </Box>
                <Box className="stat-item">
                  <Typography variant="h3" className="stat-number">50+</Typography>
                  <Typography variant="body2" className="stat-label">Classes per Week</Typography>
                </Box>
                <Box className="stat-item">
                  <Typography variant="h3" className="stat-number">10+</Typography>
                  <Typography variant="body2" className="stat-label">Expert Teachers</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box className="values-section">
          <Typography variant="h3" className="values-title">
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="value-card" elevation={0}>
                  <CardContent>
                    <Box className="value-icon">{value.icon}</Box>
                    <Typography variant="h5" className="value-title">
                      {value.title}
                    </Typography>
                    <Typography variant="body2" className="value-description">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default About

