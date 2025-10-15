import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './Header.scss'

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const drawer = (
    <Box className="mobile-drawer" onClick={handleDrawerToggle}>
      <Box className="drawer-header">
        <Typography variant="h6" className="logo-text">
          Shri Shakti
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => handleNavClick(item.href)}>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  style: { fontFamily: 'Poppins, sans-serif', fontWeight: 500 }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        elevation={scrolled ? 3 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar className="toolbar">
            <Box className="logo-container">
              <span className="material-icons logo-icon">spa</span>
              <Typography variant="h6" component="div" className="logo-text">
                Shri Shakti Divine Yoga
              </Typography>
            </Box>

            <Box className="nav-desktop">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link"
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <Button 
              variant="contained" 
              color="primary" 
              className="cta-button desktop-only"
              onClick={() => handleNavClick('#contact')}
            >
              Book a Class
            </Button>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className="mobile-menu-button"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer-container"
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header

