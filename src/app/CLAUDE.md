# App Directory - Next.js App Router

## Purpose
This directory contains all pages, layouts, and routes using Next.js 15 App Router. It's the main application structure for the marketing website.

## Key Files
- `layout.js` - Root layout with fonts (Poppins, Geist), Header, Footer, and Google Analytics
- `page.js` - Homepage with hero section, services, and testimonials  
- `globals.css` - Global styles and Tailwind CSS
- `sitemap.js` - Dynamic sitemap generation

## Directory Structure
```
app/
├── admin/               # Admin interface with catch-all routes
├── api/                 # API endpoints (AI audit)
├── blueprints/          # Marketing blueprint guides
├── marketing/           # Location-based marketing pages
├── services/            # Service offering pages
├── tools/               # Utility tools and calculators
├── work-with-me/        # Contact/consultation pages
└── youtube/             # YouTube video content pages
```

## Layout Pattern
Most subdirectories follow this pattern:
- `layout.js` - Nested layout with specific metadata
- `page.js` - Page content component

## Metadata Strategy
- Each page has custom metadata for SEO
- OpenGraph and Twitter card support
- Location-specific titles and descriptions for marketing pages

## Key Components Used
- `Header` - Main navigation (src/components/header.js)
- `Footer` - Site footer (src/components/Footer.js)
- `Button` - Reusable button component
- `FeatureSection` - Service showcase component
- `ReviewSlider` - Client testimonials slider

## Fonts
- **Poppins**: Primary brand font (400, 600, 700 weights)
- **Geist Sans**: System font fallback
- **Geist Mono**: Monospace font

## Content Patterns
- Hero sections with call-to-actions
- Service descriptions with benefits
- Social proof through testimonials
- Location-specific content for Dutch cities

## Special Features
- Calendly integration for consultations
- AI-powered marketing audit tool
- WhatsApp contact integration
- Animated testimonial sliders