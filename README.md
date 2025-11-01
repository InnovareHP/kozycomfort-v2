# Kozy Komfort - Adult Foster Care Website

A modern, accessible website for Kozy Komfort Assisted Living in Battle Creek, Michigan.

## Features

- Responsive design for all devices
- ADA compliant with WCAG 2.1 Level AA standards
- Contact form and career application form
- Image carousel for facility tour
- Modern UI with Tailwind CSS

## Tech Stack

- **Astro** - Static site generator
- **React** - Interactive components
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Netlify deployment with the included `netlify.toml` file.

### Netlify Setup

1. Push this repository to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Deploy!

The build will:
- Run `npm run build`
- Publish from the `dist` directory
- Use Node.js 18

## Project Structure

```
/
├── public/          # Static assets (images, favicon)
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page routes
│   ├── styles/      # Global styles
│   └── lib/         # Utilities
└── netlify.toml     # Netlify configuration
```
