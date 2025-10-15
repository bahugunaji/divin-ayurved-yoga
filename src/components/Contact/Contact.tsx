import React, { useState } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import './Contact.scss'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    setOpenSnackbar(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: 'Visit Us',
      details: ['123 Wellness Avenue', 'Mumbai, Maharashtra 400001', 'India'],
    },
    {
      icon: <PhoneIcon />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: <EmailIcon />,
      title: 'Email Us',
      details: ['info@shrishaktiyoga.com', 'classes@shrishaktiyoga.com'],
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Opening Hours',
      details: ['Mon - Fri: 6:00 AM - 9:00 PM', 'Sat - Sun: 7:00 AM - 7:00 PM'],
    },
  ]

  return (
    <section id="contact" className="contact-section section">
      <Container maxWidth="lg">
        <Box className="section-title">
          <Typography variant="h2">Get In Touch</Typography>
          <Typography variant="body1">
            Ready to start your wellness journey? We'd love to hear from you
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="contact-form-card">
              <CardContent>
                <Typography variant="h4" className="form-title">
                  Send Us a Message
                </Typography>
                <Typography variant="body2" className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours
                </Typography>

                <form onSubmit={handleSubmit} className="contact-form">
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    className="form-field"
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    className="form-field"
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    className="form-field"
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    className="form-field"
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    className="form-field"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    color="primary"
                    fullWidth
                    endIcon={<SendIcon />}
                    className="submit-button"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="contact-info-container">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-info-card">
                  <CardContent className="info-content">
                    <Box className="info-icon">{info.icon}</Box>
                    <Box className="info-details">
                      <Typography variant="h6" className="info-title">
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" className="info-text">
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              ))}

              <Box className="map-container">
                <Box className="map-placeholder">
                  <span className="material-icons map-icon">location_on</span>
                  <Typography variant="h6">
                    Find Us on Google Maps
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity="success"
          variant="filled"
        >
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </Alert>
      </Snackbar>
    </section>
  )
}

export default Contact

