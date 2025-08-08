# Blueprints Directory - Marketing Course Landing Pages

## Purpose
Landing pages for digital marketing course offerings. Each blueprint is a comprehensive course selling specialized marketing knowledge with Stripe payment integration.

## Available Blueprints
- **SEO Blueprint** (`/blueprints/seo`) - Complete SEO course for ranking #1 in Google
- **Google Ads Blueprint** (`/blueprints/google-ads`) - Profitable Google Ads campaign management
- **Meta Blueprint** (`/blueprints/meta`) - Facebook & Instagram advertising
- **Klaviyo Blueprint** (`/blueprints/klaviyo`) - Email marketing automation

## Page Structure Pattern
Each blueprint follows this consistent layout:
1. **Hero Section** - Course value proposition with pricing CTA
2. **Feature Section** - What you'll learn (3 key modules)  
3. **Review Slider** - Course-specific testimonials
4. **Curriculum Section** - Detailed course breakdown
5. **Final CTA** - Purchase button

## Key Features

### Pricing Strategy
- **Price Point**: $49 per course
- **Payment**: Stripe integration with unique checkout links
- **Social Proof**: "X+ copies sold" counters
- **Support**: WhatsApp contact for questions

### Content Structure
- **3-Module Framework**: Foundation → Strategy → Implementation
- **Time Estimates**: Each lesson shows duration (15-25 min modules)
- **Visual Learning**: Each section has custom header images
- **Progress Tracking**: Clear lesson numbering system

### Review System
- **Animated Sliders**: Horizontal scrolling testimonials
- **Star Ratings**: 5-star visual rating system
- **Course-Specific Reviews**: Tailored testimonials per blueprint
- **Dual Direction**: Left & right scrolling review rows

## Visual Assets
Located in `src/assets/`:
- Course-specific header images (e.g., "google ads header.png")
- Module visualization images (e.g., "google ads account architecture.png")  
- Generic images reused across courses (avatar.png, graph.png)

## Conversion Optimization
- **Multiple CTAs**: Hero, mid-page, and footer purchase buttons
- **Urgency Indicators**: Student count, availability status
- **Trust Signals**: WhatsApp support, testimonials, proven results
- **Clear Value Prop**: Specific outcome promises ("rank #1", "profitable campaigns")

## Technical Implementation
- **Metadata**: SEO-optimized titles and descriptions
- **Image Optimization**: Next.js Image component with lazy loading  
- **Responsive Design**: Mobile-first with md: breakpoints
- **Component Reuse**: Shared FeatureSection, Button, ReviewSlider components

## Content Guidelines
- **Benefit-Focused**: Emphasize results over features
- **Specific Claims**: Use concrete numbers (20+ sites, $2M+ ad spend)
- **Authority Building**: Credentials and proof points
- **Clear Instructions**: Step-by-step learning progression