# Homepage Styling Template - Niblah

## Core Design System

### Colors
- **Primary Accent**: `#F7D8FA` (Light pink/purple for highlights)
- **Text Colors**:
  - Primary: `text-gray-900` (Headers, main text)
  - Secondary: `text-gray-700` (Body text)
  - Tertiary: `text-gray-600` (Descriptions)
  - Muted: `text-gray-500` (Small text, meta info)
- **Status Colors**:
  - Success/Available: `bg-green-50`, `text-green-700`, `bg-green-500`
  - Warning: `text-red-600` (Urgent messages)
- **Backgrounds**:
  - Primary: `bg-white`
  - Secondary: `bg-gray-50`

### Typography
- **Fonts**:
  - Primary: Poppins (weights: 400, 600, 700)
  - Fallback: Geist Sans
  - Monospace: Geist Mono

- **Text Sizes**:
  - Hero Heading: `text-4xl md:text-4xl font-bold`
  - Section Heading: `text-3xl md:text-4xl font-bold`
  - Subheading: `text-xl`
  - Body: `text-lg`
  - Small: `text-sm`

### Layout Structure
```jsx
<main className="min-h-screen bg-white">
  {/* Section Template */}
  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Content here */}
    </div>
  </section>
</main>
```

### Common Components

#### Hero Section Pattern
```jsx
<section className="py-4 md:py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Text Column */}
    <div>
      <h1 className="text-4xl md:text-4xl font-bold leading-tight text-gray-900">
        Main heading with <span className="bg-[#F7D8FA] px-2 rounded italic">highlight</span>
      </h1>
      <p className="mt-6 text-lg text-gray-700">
        <strong>Bold introduction</strong><br />
        Supporting description text
      </p>
      <ul className="mt-6 space-y-2 text-gray-800">
        <li>✓ Benefit point</li>
      </ul>
      <div className="mt-8 flex items-center gap-4">
        {/* CTA Button */}
        <Button className="text-sm px-4 py-2">
          Action Text <span>→</span>
        </Button>
        {/* Status Badge */}
        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Available
        </div>
      </div>
    </div>

    {/* Visual Column */}
    <div className="relative">
      <div className="rounded-xl overflow-hidden shadow-lg">
        {/* Main image */}
      </div>
      {/* Floating element */}
      <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
        {/* Avatar/accent image */}
      </div>
    </div>
  </div>
</section>
```

#### Section with Centered Title
```jsx
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
      Title with <span className="bg-[#F7D8FA] px-2 rounded italic">highlight</span>
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      Subtitle or description
    </p>
    {/* Content */}
  </div>
</section>
```

#### Card Component Pattern
```jsx
<div className="bg-white rounded-lg border border-gray-200 p-6">
  {/* Card content */}
</div>
```

#### Review/Testimonial Card
```jsx
<div className="bg-white rounded-lg border border-gray-200 p-6 flex-shrink-0 w-96 mx-3">
  <div className="flex items-center justify-between mb-4">
    {/* Rating stars */}
    <div className="flex items-center">
      {/* Star icons */}
    </div>
    {/* Verified badge */}
    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
      <svg className="w-4 h-4 text-green-500">
        {/* Checkmark */}
      </svg>
    </div>
  </div>
  <h3 className="font-bold text-lg mb-1">Name</h3>
  <p className="text-sm text-gray-500 mb-3">Company</p>
  <p className="text-gray-600 text-sm">Review text</p>
</div>
```

### Animations
```css
/* Horizontal scroll animation */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scrollReverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Usage */
style={{
  animation: 'scroll 25s linear infinite',
  width: 'calc(200%)'
}}
```

### Common UI Elements

#### Primary Button
```jsx
<Button as={Link} href="/path" className="text-sm px-4 py-2">
  Button Text <span>→</span>
</Button>
```

#### Status Badge
```jsx
<div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  Status Text
</div>
```

#### Checkmark List
```jsx
<ul className="mt-6 space-y-2 text-gray-800">
  <li>✓ List item with checkmark</li>
</ul>
```

### Spacing System
- **Padding**:
  - Sections: `py-16 px-6` (standard), `py-4 md:py-10 px-6` (hero)
  - Cards: `p-6`
  - Buttons: `px-4 py-2`

- **Margins**:
  - Section titles: `mb-12`
  - Paragraphs: `mt-6`, `mb-8`
  - Lists: `mt-6 space-y-2`
  - CTAs: `mt-8`

### Responsive Patterns
- Grid: `grid grid-cols-1 md:grid-cols-2`
- Text sizes: `text-3xl md:text-4xl`
- Max widths: `max-w-7xl mx-auto` (wide), `max-w-4xl mx-auto` (narrow)

### Shadow & Border Styles
- Cards: `border border-gray-200`
- Images: `shadow-lg`
- Floating elements: `shadow-md`
- Rounded corners: `rounded-lg` (standard), `rounded-xl` (large), `rounded-full` (circles)

## Implementation Tips
1. Always use the highlight span for key words: `<span className="bg-[#F7D8FA] px-2 rounded italic">word</span>`
2. Maintain consistent spacing using Tailwind's spacing scale
3. Use responsive prefixes (md:, lg:) for tablet/desktop adjustments
4. Keep text hierarchy clear with proper font weights and sizes
5. Use gray scale consistently for text hierarchy (900 → 500)