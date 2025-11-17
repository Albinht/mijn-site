# Service Page Template - Gebruikshandleiding

## Overzicht
De `ServicePageTemplate` component is een herbruikbare template voor alle service pagina's met consistent brutalist design.

## Features
- ✅ Two-column hero sectie met afbeelding
- ✅ Features grid met brutalist card styling
- ✅ Flexibele custom content sectie
- ✅ CTA sectie met gele button
- ✅ Volledig responsive (mobile, tablet, desktop)
- ✅ Consistent met site-wide styling (borders, shadows, hover effects)

## Gebruik

### Basis Setup

```jsx
import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'

export default function YourServicePage() {
  const heroData = {
    badge: 'YOUR SERVICE CATEGORY',
    title: 'Jouw pakkende titel',
    description: 'Beschrijving van je service...',
    ctaText: 'Start je project',
    ctaLink: '/contact',
    note: '* Optional footnote tekst',
    image: '/your-hero-image.png',
    imageAlt: 'Image description'
  }

  const features = [
    {
      icon: '🎨', // Emoji of custom React component
      title: 'Feature Titel',
      description: 'Feature beschrijving...'
    },
    // ... meer features
  ]

  const ctaData = {
    title: 'CTA Sectie Titel',
    description: 'CTA beschrijving',
    buttonText: 'Button tekst',
    buttonLink: '/contact'
  }

  return (
    <ServicePageTemplate 
      hero={heroData} 
      features={features}
      cta={ctaData}
    >
      {/* Optional: Extra custom sections hier */}
    </ServicePageTemplate>
  )
}
```

## Props

### `hero` (object)
- `badge` - Kleine label boven de titel
- `title` - Main heading (H1)
- `description` - Beschrijving tekst
- `ctaText` - Button text
- `ctaLink` - Button link
- `note` - Optional kleine tekst onder button
- `image` - Hero image path
- `imageAlt` - Alt text voor image

### `features` (array)
Array van objecten met:
- `icon` - Emoji string of React component
- `title` - Feature titel
- `description` - Feature beschrijving

### `cta` (object)
- `title` - CTA sectie titel
- `description` - CTA beschrijving
- `buttonText` - Button tekst
- `buttonLink` - Button link

### `children` (React nodes)
Custom content tussen features en CTA sectie.

## Styling Aanpassingen

### Button Kleuren Wijzigen
In de template, zoek naar:
```jsx
className="... bg-[#FFE500] hover:bg-[#FFD700] ..."
```

### Hero Achtergrondkleur
```jsx
<section className="bg-[#F5F5F5] ...">
```

### Feature Card Kleuren
```jsx
<div className="w-12 h-12 bg-[#FFE500] ...">
```

## Voorbeelden

Zie `/services/web-development/page.js` voor een volledig voorbeeld met:
- Hero sectie met afbeelding
- 9 feature cards
- Custom "Process" sectie
- Custom "Tech Stack" sectie
- CTA sectie

## Tips
1. Gebruik hoge kwaliteit hero images (min 1600x900px)
2. Houd feature beschrijvingen kort (max 2-3 regels)
3. Test altijd op mobiel
4. Features werken best in veelvouden van 3 (3, 6, 9 cards)
