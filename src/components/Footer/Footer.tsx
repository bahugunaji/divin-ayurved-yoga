import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  IconButton,
  Link,
  Divider 
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import './Footer.scss'

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Instructors', href: '#instructors' },
  ]

  const resources = [
    { label: 'Class Schedule', href: '#classes' },
    { label: 'Pricing', href: '#classes' },
    { label: 'FAQs', href: '#contact' },
    { label: 'Blog', href: '#' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <Grid container spacing={4} className="footer-content">
          <Grid item xs={12} md={4}>
            <Box className="footer-brand">
              <Box className="footer-logo">
                <span className="material-icons logo-icon">spa</span>
                <Typography variant="h5" className="logo-text">
                  Shri Shakti Divine Yoga
                </Typography>
              </Box>
              <Typography variant="body2" className="footer-description">
                Transform your mind, body, and spirit through the ancient practice of yoga. 
                Join us on a journey to discover inner peace and holistic wellness.
              </Typography>
              <Box className="social-links">
                <IconButton className="social-icon" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton className="social-icon" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton className="social-icon" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton className="social-icon" aria-label="YouTube">
                  <YouTubeIcon />
                </IconButton>
                <IconButton className="social-icon" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-title">
              Quick Links
            </Typography>
            <Box className="footer-links">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => handleNavClick(link.href)}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-title">
              Resources
            </Typography>
            <Box className="footer-links">
              {resources.map((link, index) => (
                <Link
                  key={index}
                  component="button"
                  onClick={() => handleNavClick(link.href)}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="footer-title">
              Contact Info
            </Typography>
            <Box className="contact-info">
              <Box className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <Typography variant="body2">
                  123 Wellness Avenue<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </Typography>
              </Box>
              <Box className="contact-item">
                <PhoneIcon className="contact-icon" />
                <Typography variant="body2">
                  +91 98765 43210
                </Typography>
              </Box>
              <Box className="contact-item">
                <EmailIcon className="contact-icon" />
                <Typography variant="body2">
                  info@shrishaktiyoga.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        <Box className="footer-bottom">
          <Typography variant="body2" className="copyright">
            © {new Date().getFullYear()} Shri Shakti Divine Yoga. All rights reserved.
          </Typography>
          <Box className="footer-bottom-links">
            <Link href="#" className="bottom-link">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link href="#" className="bottom-link">Terms of Service</Link>
            <span className="separator">•</span>
            <Link href="#" className="bottom-link">Cookie Policy</Link>
          </Box>
        </Box>
      </Container>

      <Box className="footer-decoration">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="rgba(176, 112, 140, 0.1)" 
            fillOpacity="1" 
            d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Box>
    </footer>
  )
}

export default Footer

