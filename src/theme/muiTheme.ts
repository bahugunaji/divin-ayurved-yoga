import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#b0708c',
      light: '#dab8c7',
      dark: '#80445c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#37956d',
      light: '#89cdab',
      dark: '#1e6046',
      contrastText: '#ffffff',
    },
    error: {
      main: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
    background: {
      default: '#fafaf9',
      paper: '#ffffff',
    },
    text: {
      primary: '#44403c',
      secondary: '#78716c',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.08)',
    '0 2px 6px rgba(0,0,0,0.08)',
    '0 4px 12px rgba(0,0,0,0.1)',
    '0 6px 16px rgba(0,0,0,0.1)',
    '0 8px 20px rgba(0,0,0,0.12)',
    '0 10px 24px rgba(0,0,0,0.12)',
    '0 12px 28px rgba(0,0,0,0.14)',
    '0 14px 32px rgba(0,0,0,0.14)',
    '0 16px 36px rgba(0,0,0,0.16)',
    '0 18px 40px rgba(0,0,0,0.16)',
    '0 20px 44px rgba(0,0,0,0.18)',
    '0 22px 48px rgba(0,0,0,0.18)',
    '0 24px 52px rgba(0,0,0,0.2)',
    '0 26px 56px rgba(0,0,0,0.2)',
    '0 28px 60px rgba(0,0,0,0.22)',
    '0 30px 64px rgba(0,0,0,0.22)',
    '0 32px 68px rgba(0,0,0,0.24)',
    '0 34px 72px rgba(0,0,0,0.24)',
    '0 36px 76px rgba(0,0,0,0.26)',
    '0 38px 80px rgba(0,0,0,0.26)',
    '0 40px 84px rgba(0,0,0,0.28)',
    '0 42px 88px rgba(0,0,0,0.28)',
    '0 44px 92px rgba(0,0,0,0.3)',
    '0 46px 96px rgba(0,0,0,0.3)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '30px',
          padding: '10px 28px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.14)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

