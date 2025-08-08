# Assets Directory - Visual Media and Resources

## Purpose
Static image assets used throughout the marketing website. All images support the visual branding and content strategy across pages, components, and marketing materials.

## Image Categories

### Brand & Personal
- **avatar.png**: Profile photo of Albin (personal branding)
- **author.png**: Alternative author image for content
- **footer.png**: Footer visual element

### Marketing Visuals
- **graph.png**: Growth/results visualization for hero sections
- **google ads header.png**: Header image for Google Ads blueprint
- **google ads blueprint header.png**: Alternative Google Ads course header

### Educational Content Images
- **Master_seo fundamentals.png**: SEO foundations visual
- **Keyword_research.png**: Keyword research methodology image  
- **content that ranks.png**: Content strategy visualization
- **google ads account architecture.png**: Account structure diagram
- **Bidding google ads.png**: Bidding strategy illustration
- **High-converting ad copy.png**: Ad copy framework visual

### Marketing Specific
- **Apify video.jpg**: YouTube video thumbnail for Apify content
- **klaviyo.png**: Klaviyo email marketing visual
- **n8n-email-automation.png**: N8N automation workflow
- **n8n-whatsapp-chatbot.png**: WhatsApp chatbot setup
- **n8n open router.webp**: OpenRouter integration guide
- **translate video.png**: Translation workflow thumbnail

### Course Materials
- **E-com SEO framework.png**: E-commerce SEO strategy
- **Product descriptions.png**: Product description optimization
- **API guide whatsapp.webp**: WhatsApp API tutorial

### Screenshots & Demos
- **SCR-20250806-pnlp.png**: Screen capture for documentation/tutorials

## Image Usage Patterns

### Component Integration
Images are imported and used across various components:
- **FeatureSection**: Each feature uses a corresponding educational image
- **Hero Sections**: Graph.png for results visualization + avatar overlay
- **Course Pages**: Specific blueprint headers and module illustrations

### Import Structure
```javascript
import graphImage from '../assets/graph.png'
import avatarImage from '../assets/avatar.png' 
import masterSeoImage from '../assets/Master_seo fundamentals.png'
```

### Next.js Image Optimization
- **Priority Loading**: Critical images use `priority={true}`
- **Responsive Sizing**: Images adapt to different screen sizes
- **Alt Text**: SEO-optimized alt attributes for accessibility
- **Lazy Loading**: Non-critical images load on demand

### Visual Consistency
- **Gradient Effects**: Images often paired with gradient aura backgrounds
- **Rounded Corners**: Consistent border-radius styling
- **Shadow Effects**: Drop shadows for depth and visual hierarchy
- **Overlay Elements**: Avatar images used as circular overlays

## File Format Strategy
- **PNG**: Preferred for graphics with transparency and text
- **JPG**: Used for photographic content and YouTube thumbnails
- **WEBP**: Modern format for web optimization where supported

## SEO Considerations
- **Descriptive Filenames**: Files named for content recognition
- **Alt Text Strategy**: Descriptive alternatives for screen readers
- **File Size Optimization**: Balanced quality vs. loading speed
- **Relevant Content**: Images support and enhance textual content

## Branding Guidelines
- **Personal Touch**: Avatar image maintains personal brand connection
- **Professional Quality**: High-resolution, clear images throughout
- **Consistent Style**: Visual coherence across all marketing materials
- **Educational Focus**: Images support learning and understanding

## Technical Integration
Images are imported at component level and rendered through Next.js Image component for:
- Automatic format optimization
- Responsive image sizing  
- Progressive loading
- SEO-friendly markup

This asset library supports a comprehensive visual marketing strategy with educational content, personal branding, and professional presentation throughout the website.