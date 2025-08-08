# Marketing Directory - Location-Based Landing Pages

## Purpose
Location-specific marketing landing pages targeting Dutch cities and regions. Each page is optimized for local SEO to capture "SEO specialist [city]" and "marketing bureau [city]" search queries.

## Dual URL Structure
The project uses two parallel URL patterns for the same content:
- **Primary**: `/marketing-[city]/` (e.g., `/marketing-amersfoort/`)
- **Secondary**: `/marketing/[city]/` (e.g., `/marketing/amersfoort/`)

Both versions contain identical content but may have slightly different canonical URLs for testing purposes.

## Target Cities (20+ Dutch Locations)
- **Major Cities**: Amersfoort, Barneveld, Ede, Nijkerk, Leusden, Lunteren
- **Smaller Towns**: Voorthuizen, Garderen, Stroe, Otterlo, Harskamp, Bennekom
- **Local Areas**: De Glind, Essen, Harselaar, Hooglanderveen, Kootwijk, etc.

## Page Structure & Content Strategy

### Hero Section
- **H1 Pattern**: "Marketing Bureau of SEO Specialist in [CITY] nodig?"
- **Value Proposition**: Local growth emphasis with purple highlight
- **Local Keywords**: Heavy use of "SEO specialist [city]" throughout content
- **CTA Buttons**: Free consultation call-to-action + case studies link

### Services Section (FeatureSection component)
Three-column service breakdown:
1. **SEO Specialist [City]**: Local SEO focus
2. **Google Ads [City]**: Paid advertising for local market  
3. **Marketing Bureau [City]**: Website design and full marketing

### Local Social Proof (ReviewSlider component)
- **Custom Reviews**: Dutch testimonials from local businesses
- **Business Types**: Restaurants, garages, salons, medical practices, contractors
- **Local Names**: Location-specific business names for authenticity
- **Rating System**: 4.5-5 star ratings with verified checkmarks

### Service Breakdown Section
Three-card layout detailing:
- **SEO Services**: Google Business Profile, local keyword research, reviews
- **Google Ads**: Local campaigns, geographic targeting, optimization
- **Website Services**: Mobile-friendly, conversion-focused, local optimization

### Contact Section
- **Phone Integration**: Direct dial links to +31 6 48728828
- **WhatsApp Integration**: wa.me links for instant messaging
- **Regional Coverage**: Lists surrounding towns and areas served

## SEO Optimization Strategy

### Local Keyword Targeting
- **Primary**: "SEO specialist [city]", "marketing bureau [city]"
- **Secondary**: "online marketing [city]", "website [city]"
- **Long-tail**: "SEO specialist [city] inschakelen", "marketing bureau [city] nodig"

### Meta Optimization
- **Title Pattern**: "SEO Specialist [City] | Marketing Bureau & Online Marketing [City]"
- **Description**: Local benefits + service mentions + location targeting
- **Canonical URLs**: Proper canonicalization between dual URL structures

### Content Localization
- **Dutch Language**: All content in native Dutch for local market
- **Local References**: Mentions of surrounding towns and regional areas
- **Business Types**: Examples relevant to Dutch local markets
- **Cultural Elements**: Dutch business terminology and communication style

## Technical Implementation

### Component Reuse
- **FeatureSection**: Consistent service presentation across all locations
- **ReviewSlider**: Customizable with city-specific testimonials
- **Button**: Consistent CTA styling with scroll-to-contact functionality

### Image Assets
- Shared images from `/src/assets/` directory
- **Graph visualization**: Shows growth/results
- **Avatar image**: Personal branding consistency
- **Service images**: SEO fundamentals, keyword research, content creation

### Responsive Design
- **Mobile-first**: Optimized for mobile local searches
- **Touch-friendly**: Large buttons for phone and WhatsApp contact
- **Fast Loading**: Optimized images and minimal JavaScript

### Performance Considerations
- **Client-side Rendering**: 'use client' for interactivity
- **Image Optimization**: Next.js Image component with priority loading
- **Smooth Scrolling**: JavaScript scroll-to-contact functionality

## Conversion Funnel
1. **Discovery**: User searches "SEO specialist [city]"
2. **Landing**: City-specific page with local relevance
3. **Engagement**: Local testimonials and service information
4. **Action**: Phone call or WhatsApp contact
5. **Follow-up**: Free consultation booking

This directory represents a comprehensive local SEO strategy targeting the Dutch market with location-specific landing pages optimized for maximum local visibility and conversion.