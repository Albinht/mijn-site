# Components Directory - Reusable React Components

## Purpose
Reusable UI components used throughout the Next.js marketing website. All components follow consistent design patterns and use Tailwind CSS for styling.

## Key Components

### Button.js
Flexible button component with two variants:
- **Primary**: Black button with gradient aura effect and blur shadow
- **Secondary**: White button with gray border and hover effects
- Supports polymorphic `as` prop for rendering as different elements (button, Link, etc.)
- Uses Poppins font family for consistency

### header.js
Main site navigation with complex dropdown functionality:
- **Logo section**: Avatar image + brand name "Albin Hot" with verified badge
- **Desktop navigation**: Horizontal menu with hover dropdowns
- **Mobile navigation**: Hamburger menu with collapsible sections
- **Dropdown menus**: Blueprints, Tools, Locations (20+ Dutch cities)
- Uses React hooks for state management (useState, useRef)
- Implements 200ms hover delay for better UX

### FeatureSection.js
Alternating layout component for showcasing services:
- **Alternating grid**: Text/image positions switch every other feature
- **Gradient effects**: Consistent aura background behind images
- **Badge system**: Color-coded badges for different feature types
- **Responsive design**: Switches to stacked layout on mobile
- **Visual elements**: Floating colored circles for visual interest

### Footer.js
Site footer component (referenced but not examined)

### GoogleAnalytics.js
Analytics tracking component (referenced but not examined)

### ReviewSlider.js
Client testimonials slider (referenced but not examined)

### CurriculumSection.js
Educational content component (referenced but not examined)

## Design Patterns

### Color Scheme
- **Primary gradient**: Blue to purple to pink (0-89-255, 0-255-233, 174-0-255, 255-0-153)
- **Brand accent**: Light purple background (#F7D8FA)
- **Text hierarchy**: Gray-900 (headings), gray-600 (body), gray-500 (captions)

### Typography
- **Primary font**: Poppins (400, 600, 700 weights)
- **Font sizes**: Responsive scaling with md: prefixes
- **Line heights**: Leading-tight for headings, leading-relaxed for body

### Interactive Elements
- **Hover states**: Background color changes and shadow effects
- **Mobile-first**: Components designed for mobile with desktop enhancements
- **Accessibility**: Proper semantic HTML and ARIA attributes

## Usage Conventions
- Import components with named imports
- Pass props as objects with destructuring
- Use className prop for additional styling
- Follow polymorphic patterns for flexibility