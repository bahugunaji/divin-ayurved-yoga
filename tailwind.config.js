/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f7',
          100: '#f5ebef',
          200: '#ead6df',
          300: '#dab8c7',
          400: '#c58fa7',
          500: '#b0708c',
          600: '#995570',
          700: '#80445c',
          800: '#6c3b4e',
          900: '#5d3544',
        },
        secondary: {
          50: '#f0f9f4',
          100: '#daf1e3',
          200: '#b8e2cb',
          300: '#89cdab',
          400: '#58b288',
          500: '#37956d',
          600: '#267856',
          700: '#1e6046',
          800: '#1a4d39',
          900: '#163f30',
        },
        accent: {
          50: '#fdf7ef',
          100: '#faecd8',
          200: '#f4d6b0',
          300: '#ecb97e',
          400: '#e3934b',
          500: '#dc7729',
          600: '#ce5e1f',
          700: '#ab471b',
          800: '#88391d',
          900: '#6f311a',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

