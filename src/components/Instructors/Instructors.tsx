import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Avatar,
  IconButton 
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import './Instructors.scss'

const Instructors: React.FC = () => {
  const instructors = [
    {
      name: 'Priya Sharma',
      title: 'Founder & Lead Instructor',
      specialty: 'Hatha & Vinyasa Yoga',
      experience: '15 years',
      certification: 'E-RYT 500, Yoga Alliance',
      bio: 'Priya brings traditional yogic wisdom with a modern approach, creating transformative experiences for all students.',
      initials: 'PS',
      color: '#b0708c',
    },
    {
      name: 'Arjun Patel',
      title: 'Senior Instructor',
      specialty: 'Power & Ashtanga Yoga',
      experience: '12 years',
      certification: 'RYT 500, NASM-CPT',
      bio: 'Arjun specializes in dynamic flows that build strength, flexibility, and mental resilience.',
      initials: 'AP',
      color: '#37956d',
    },
    {
      name: 'Maya Reddy',
      title: 'Wellness Coach',
      specialty: 'Yin & Restorative Yoga',
      experience: '10 years',
      certification: 'RYT 500, Reiki Master',
      bio: 'Maya focuses on gentle practices that promote deep relaxation and healing from within.',
      initials: 'MR',
      color: '#dc7729',
    },
    {
      name: 'Rahul Kapoor',
      title: 'Meditation Specialist',
      specialty: 'Pranayama & Meditation',
      experience: '8 years',
      certification: 'RYT 200, Vipassana Teacher',
      bio: 'Rahul guides students through mindfulness practices that cultivate inner peace and clarity.',
      initials: 'RK',
      color: '#b0708c',
    },
  ]

  return (
    <section id="instructors" className="instructors-section section">
      <Container maxWidth="lg">
        <Box className="section-title">
          <Typography variant="h2">Meet Our Instructors</Typography>
          <Typography variant="body1">
            Learn from certified experts dedicated to your wellness journey
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {instructors.map((instructor, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card className="instructor-card">
                <Box className="instructor-avatar-container">
                  <Avatar 
                    className="instructor-avatar"
                    sx={{ 
                      bgcolor: instructor.color,
                      width: 120,
                      height: 120,
                      fontSize: '2.5rem',
                      fontWeight: 600,
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {instructor.initials}
                  </Avatar>
                  <Box className="avatar-decoration"></Box>
                </Box>

                <CardContent className="instructor-content">
                  <Typography variant="h5" className="instructor-name">
                    {instructor.name}
                  </Typography>
                  <Typography variant="subtitle1" className="instructor-title">
                    {instructor.title}
                  </Typography>
                  
                  <Box className="instructor-details">
                    <Box className="detail-item">
                      <Typography variant="body2" className="detail-label">
                        Specialty:
                      </Typography>
                      <Typography variant="body2" className="detail-value">
                        {instructor.specialty}
                      </Typography>
                    </Box>
                    <Box className="detail-item">
                      <Typography variant="body2" className="detail-label">
                        Experience:
                      </Typography>
                      <Typography variant="body2" className="detail-value">
                        {instructor.experience}
                      </Typography>
                    </Box>
                    <Box className="detail-item">
                      <Typography variant="body2" className="detail-label">
                        Certification:
                      </Typography>
                      <Typography variant="body2" className="detail-value">
                        {instructor.certification}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" className="instructor-bio">
                    {instructor.bio}
                  </Typography>

                  <Box className="social-links">
                    <IconButton size="small" className="social-icon">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton size="small" className="social-icon">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton size="small" className="social-icon">
                      <FacebookIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="instructors-cta">
          <Typography variant="h4">
            Join Our Teaching Team
          </Typography>
          <Typography variant="body1">
            Are you a certified yoga instructor? We're always looking for passionate teachers to join our community.
          </Typography>
          <Box className="cta-buttons">
            <a href="mailto:careers@shrishaktiyoga.com" className="email-link">
              careers@shrishaktiyoga.com
            </a>
          </Box>
        </Box>
      </Container>
    </section>
  )
}

export default Instructors

