# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Ny i Spanien" (New in Spain), a Gatsby v2 website providing guides and information for Swedish people moving to Spain. The site is built on the Yellowcake starter template and uses Netlify CMS for content management.

## Development Commands

```bash
# Start development server
npm run develop

# Clean build artifacts and start fresh
npm start

# Build for production 
npm run build

# Serve production build locally
npm run serve

# Clean cache and public folders
npm run clean

# Format code
npm run format
```

## Architecture

### Content Management
- **Content Source**: Markdown files in `content/` directory
- **CMS**: Netlify CMS configured in `static/admin/config.yml`
- **Content Types**:
  - Pages: `content/pages/` (home, about, guides overview, etc.)
  - Guides: `content/guider/` (individual guide articles)
  - Cities: `content/stader/` (city-specific information)
  - Home & Garden: `content/hus-och-hem/` (practical home advice)

### Site Structure
- **Templates**: Located in `src/templates/`
  - `HomePage.js` - Main landing page
  - `DefaultPage.js` - Standard content pages
  - `BlogIndex.js` - Post listing pages
  - `SinglePost.js` - Individual post pages
  - Specialized variants for different content sections (Guider, HusHem)
- **Components**: Reusable UI components in `src/components/`
- **Static Assets**: Images and admin files in `static/`

### Styling
- **CSS**: Component-level CSS files alongside JS files
- **Sass**: Configured with PostCSS preset-env
- **Global Styles**: `src/components/globalStyles.css`

### Key Features
- Progressive Web App (PWA) with offline support
- Image optimization with Gatsby Image
- SEO optimization with React Helmet
- Netlify CMS integration for content editing
- Responsive design with mobile-first approach

## Content Structure

The site follows a Swedish language structure for Spanish immigration guides:
- **Guider** (Guides): Immigration procedures, banking, healthcare, etc.
- **Städer** (Cities): Information about different Spanish cities
- **Hus och Hem** (House & Home): Practical living advice

## Build Configuration

- **Node Options**: Uses `--openssl-legacy-provider` for compatibility
- **Deploy**: Configured for Netlify deployment via `netlify.toml`
- **Site URL**: https://www.nyispanien.se