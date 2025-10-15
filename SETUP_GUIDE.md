# Setup Guide - Shri Shakti Divine Yoga

## Quick Start

### 1. Install Node.js

If you don't have Node.js installed, download and install it from [nodejs.org](https://nodejs.org/) (LTS version recommended).

### 2. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required dependencies:
- React & React DOM
- TypeScript
- Vite
- Material UI (MUI) v6
- Tailwind CSS
- SCSS/Sass
- and all other dependencies

### 3. Start Development Server

```bash
npm run dev
```

Your website will be available at `http://localhost:5173`

### 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Overview

### Tech Stack

- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.2.0 (fast, modern build tool)
- **UI Components**: Material UI 6.1.0
- **Styling**: 
  - Tailwind CSS 3.4.3 (utility-first)
  - SCSS/Sass 1.77.2 (custom theming)
  - Emotion (CSS-in-JS for MUI)
- **Icons**: Material Icons & MUI Icons
- **Fonts**: Google Fonts (Playfair Display + Poppins)

### Website Sections

1. **Header** - Sticky navigation with smooth scrolling
2. **Hero** - Welcome section with CTA buttons
3. **About** - Studio mission, values, and statistics
4. **Classes** - 6 different yoga class types with details
5. **Instructors** - 4 instructor profiles
6. **Testimonials** - 6 student reviews with ratings
7. **Contact** - Contact form + info + map placeholder
8. **Footer** - Links, social media, contact info

### Key Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Elegant animations and transitions
✅ Material Design components
✅ Type-safe with TypeScript
✅ Optimized performance
✅ SEO-friendly structure
✅ Accessibility considerations

## Customization

### Change Colors

**Tailwind Colors** - Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
}
```

**SCSS Variables** - Edit `src/styles/variables.scss`:
```scss
$primary-color: #b0708c;
$secondary-color: #37956d;
```

**MUI Theme** - Edit `src/theme/muiTheme.ts`:
```typescript
palette: {
  primary: { main: '#b0708c' },
  secondary: { main: '#37956d' },
}
```

### Update Content

Navigate to individual component files in `src/components/` and update:
- Text content
- Images (replace placeholders)
- Contact information
- Social media links
- Class details
- Instructor profiles

### Add Images

Replace placeholder content with real images:
1. Add images to `public/images/` folder
2. Update image references in components
3. Recommended: Use high-quality yoga/wellness images

## Folder Structure

```
src/
├── components/          # All React components
│   ├── Header/         # Navigation bar
│   ├── Hero/           # Hero section
│   ├── About/          # About section
│   ├── Classes/        # Classes section
│   ├── Instructors/    # Instructors section
│   ├── Testimonials/   # Testimonials section
│   ├── Contact/        # Contact form & info
│   └── Footer/         # Footer
├── styles/             # Global SCSS
│   ├── variables.scss  # SCSS variables
│   └── global.scss     # Global styles
├── theme/              # MUI theme
│   └── muiTheme.ts     # Theme configuration
├── App.tsx             # Main app
├── main.tsx            # Entry point
└── index.css           # Tailwind imports
```

## Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Dependencies Issues

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure TypeScript is properly configured and all imports are correct.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Deploy `dist/` folder to Netlify

### Other Platforms

Most platforms support Vite builds. Just ensure:
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 16+

## Support

For issues or questions:
- Email: info@shrishaktiyoga.com
- Check the main README.md for more details

---

**Happy coding! 🧘‍♀️**

