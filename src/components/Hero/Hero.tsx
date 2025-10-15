import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import './Hero.scss'

const Hero: React.FC = () => {
  const handleBookClass = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLearnMore = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <Container maxWidth="xl" className="hero-container">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} className="hero-content">
            <Box className="hero-text animate-fade-in-left">
              <Typography variant="overline" className="hero-overline">
                Welcome to Inner Peace
              </Typography>
              <Typography variant="h1" className="hero-title">
                Transform Your Mind, Body & Spirit
              </Typography>
              <Typography variant="body1" className="hero-description">
                Experience the ancient art of yoga in a modern, welcoming environment. 
                Join us on a journey to discover your inner strength, find balance, 
                and embrace holistic wellness.
              </Typography>
              <Box className="hero-buttons">
                <Button 
                  variant="contained" 
                  size="large" 
                  color="primary"
                  onClick={handleBookClass}
                  className="hero-cta-primary"
                >
                  Book Your First Class
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  color="primary"
                  onClick={handleLearnMore}
                  className="hero-cta-secondary"
                >
                  Learn More
                </Button>
              </Box>
            </Box>

            <Box className="hero-features">
              <Box className="feature-item">
                <SelfImprovementIcon className="feature-icon" />
                <Box>
                  <Typography variant="h6">Expert Instructors</Typography>
                  <Typography variant="body2">Certified & experienced</Typography>
                </Box>
              </Box>
              <Box className="feature-item">
                <FavoriteBorderIcon className="feature-icon" />
                <Box>
                  <Typography variant="h6">Holistic Approach</Typography>
                  <Typography variant="body2">Mind, body & soul</Typography>
                </Box>
              </Box>
              <Box className="feature-item">
                <WbSunnyIcon className="feature-icon" />
                <Box>
                  <Typography variant="h6">Peaceful Environment</Typography>
                  <Typography variant="body2">Serene & welcoming</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} className="hero-image-container">
            <Box className="hero-image animate-fade-in-right">
              <Box className="image-placeholder">
                <span className="material-icons hero-yoga-icon">self_improvement</span>
                <Typography variant="h3" className="image-text">
                  Find Your Balance
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </section>
  )
}

export default Hero

