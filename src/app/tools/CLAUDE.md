# Tools Directory - Interactive Marketing Utilities

## Purpose
Interactive web tools and calculators for marketing professionals and business owners. Each tool provides immediate value and serves as lead generation for the main marketing services.

## Available Tools

### AI Marketing Audit (`/tools/ai-marketing-audit`)
AI-powered website analysis tool:
- **Input**: Website URL
- **Process**: Scrapes website, analyzes with Google Generative AI
- **Output**: Scored audit with issues, quick wins, and recommendations
- **Lead Capture**: Email collection for detailed 20-page report
- **API**: `/api/ai-audit` endpoint handles analysis

### Break Even ROAS Calculator (`/tools/break-even-roas-calculator`)
Comprehensive Google Ads profitability calculator:
- **Inputs**: Revenue, costs (COGS, shipping, transaction fees), VAT rates, profit margins
- **Calculations**: Break-even ROAS, target ROAS, profit margins
- **Features**: Real-time calculation, detailed analysis, recommendations
- **Educational**: Extensive content explaining ROAS concepts

### CPA Calculator (`/tools/cpa-calculator`)
Cost per acquisition analysis tool for advertising campaigns

### Invoice Generator (`/tools/invoice-generator`)
PDF invoice generation tool for freelancers and agencies

### Character Counter (`/tools/tekens-tellen`)
Dutch character counting tool for social media and ads

## Technical Architecture

### Client-Side Structure
- **'use client'**: All tools use React client components for interactivity
- **useState/useEffect**: State management for form inputs and calculations
- **Real-time Updates**: Calculations update automatically on input change
- **Form Validation**: Error handling and input validation

### Styling Patterns
- **Layout**: Consistent header with tool name and description
- **Color Scheme**: Brand purple highlight (#F7D8FA), gray backgrounds
- **Components**: White cards with rounded corners and shadows
- **Responsive**: Mobile-first design with md: breakpoints

### Lead Generation Features
- **Email Capture**: Forms to collect emails for detailed reports
- **CTA Sections**: Multiple calls-to-action for main services
- **Contact Integration**: WhatsApp and phone number prominently displayed
- **Social Proof**: Usage counters and testimonials where applicable

## Content Strategy

### SEO Optimization
- **Meta Tags**: Comprehensive title, description, keywords for each tool
- **Canonical URLs**: Proper URL structure for search indexing
- **Header Structure**: H1, H2, H3 hierarchy for content organization
- **FAQ Sections**: Accordion components with relevant Q&A

### User Experience
- **Instant Results**: No page reloads, immediate feedback
- **Clear Instructions**: Placeholder text and helpful labels
- **Progress Indicators**: Loading states and success messages
- **Error Handling**: User-friendly error messages and validation

### Educational Content
- **Explanation Sections**: "How it works" and educational content
- **Best Practices**: Tips and recommendations within each tool
- **Examples**: Sample inputs and expected outputs
- **Actionable Insights**: Specific recommendations based on calculations

## Integration Points

### API Endpoints
- Tools connect to custom API routes in `/app/api/`
- External services (Google AI, PDF generation) called server-side
- Error handling for API failures and timeouts

### Component Reuse
- Shared components from `/src/components/` (Button, etc.)
- Consistent styling with main website
- Navigation integration through header component

### Conversion Funnel
1. **Discovery**: Users find tools through search or navigation
2. **Engagement**: Use tool to solve immediate problem
3. **Value**: Receive immediate insights and recommendations
4. **Capture**: Provide email for detailed report or contact info
5. **Nurture**: Follow-up with main service offerings