import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Avatar,
  Rating 
} from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import './Testimonials.scss'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Charu Bhasin',
      role: 'Business Owner',
      rating: 5,
      text: 'After years of dealing with chronic back pain, I found relief through the yoga classes here. The personalized attention and expert guidance have made all the difference. Highly recommend to anyone seeking wellness.',
      initials: 'VS',
      color: '#37956d',
    },
    {
      name: 'Renu Rana',
      role: 'Software Engineer',
      rating: 5,
      text: 'Shri Shakti Divine Yoga has been a transformative experience for me. The instructors are incredibly knowledgeable and create such a welcoming atmosphere. I\'ve gained not just physical strength, but mental clarity and peace.',
      initials: 'AM',
      color: '#b0708c',
    },
    {
      name: 'Gagan Bhasin',
      role: 'Business Owner',
      rating: 5,
      text: 'Health and Fitness is the key to success',
      initials: 'VS',
      color: '#37956d',
    },
    {
      name: 'Shruti Sharma',
      role: 'Housewife',
      rating: 5,
      text: 'Yoga is the key to success',
      initials: 'NG',
      color: '#dc7729',
    },
    {
      name: 'Rohan Kumar',
      role: 'Marketing Professional',
      rating: 5,
      text: 'I was skeptical about yoga at first, but the power yoga classes here changed my perspective completely. It\'s challenging, energizing, and has significantly improved my fitness and mental focus.',
      initials: 'RK',
      color: '#b0708c',
    },
    {
      name: 'Priyanka Desai',
      role: 'Healthcare Worker',
      rating: 5,
      text: 'The meditation and pranayama sessions have helped me manage stress like nothing else. The peaceful environment and expert instruction make every class a healing experience. This place is truly special.',
      initials: 'PD',
      color: '#37956d',
    },
    {
      name: 'Aditya Sharma',
      role: 'Student',
      rating: 5,
      text: 'As a college student dealing with anxiety, the yoga classes here have been life-changing. The community is supportive, the teachers are amazing, and I always leave feeling centered and calm.',
      initials: 'AS',
      color: '#dc7729',
    },
  ]

  return (
    <section id="testimonials" className="testimonials-section section">
      <Container maxWidth="lg">
        <Box className="section-title">
          <Typography variant="h2">What Our Students Say</Typography>
          <Typography variant="body1">
            Real experiences from our yoga community
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="testimonial-card">
                <Box className="quote-icon-container">
                  <FormatQuoteIcon className="quote-icon" />
                </Box>
                
                <CardContent className="testimonial-content">
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    className="testimonial-rating"
                    sx={{
                      color: '#b0708c',
                      marginBottom: 2
                    }}
                  />
                  
                  <Typography variant="body1" className="testimonial-text">
                    "{testimonial.text}"
                  </Typography>

                  <Box className="testimonial-author">
                    <Avatar 
                      className="author-avatar"
                      sx={{ 
                        bgcolor: testimonial.color,
                        width: 50,
                        height: 50,
                        fontSize: '1.125rem',
                        fontWeight: 600
                      }}
                    >
                      {testimonial.initials}
                    </Avatar>
                    <Box className="author-info">
                      <Typography variant="h6" className="author-name">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" className="author-role">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box className="testimonials-stats">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box className="stat-box">
                <Typography variant="h2" className="stat-number">500+</Typography>
                <Typography variant="body1" className="stat-label">Happy Students</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="stat-box">
                <Typography variant="h2" className="stat-number">5+</Typography>
                <Typography variant="body1" className="stat-label">Years Experience</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="stat-box">
                <Typography variant="h2" className="stat-number">4.9/5</Typography>
                <Typography variant="body1" className="stat-label">Average Rating</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default Testimonials

