# Master Template: Marketing Location Page

Use this template for the `marketing bureau [plaats]` page family.

Example URL:

- `/marketing/barneveld`

## Page Brief

Fill this before writing:

- Location:
- Slug:
- Primary keyword:
- Secondary keywords:
- Primary intent:
- Local proof variable:
- Niblah point of view:
- Main CTA:
- Relevant service links:
- Nearby location links:
- Publish date:

## Required Inputs

Each page needs unique inputs. Do not start drafting without them.

1. Local market context
   - city/region
   - business areas
   - nearby towns
   - dominant industries
   - local search behavior where known

2. Proof variable
   - mini-audit
   - local SERP observation
   - local business scenario
   - Niblah process insight
   - comparison with common agency approach

3. Conversion angle
   - why this location needs Niblah
   - what makes the offer relevant now
   - what the next step is

## Page Structure

### 1. Metadata

Title pattern:

`Marketing bureau [plaats] | SEO, Google Ads en websites - Niblah`

Meta description pattern:

`Zoek je een marketing bureau in [plaats]? Niblah helpt met SEO, Google Ads, websites en automation voor meer aanvragen. Plan een gratis consult.`

Rules:

- Title should stay readable, not stuffed.
- Description should mention location, service mix, and CTA.
- Canonical should be self-referencing.

### 2. Hero

Goal: immediate intent match and local relevance.

Required:

- H1 with primary keyword or close variant.
- Subheading with Niblah positioning.
- Short paragraph that explains local relevance.
- CTA to contact.
- Optional secondary link to service overview.

Example structure:

```text
Marketing bureau [plaats] voor bedrijven die meer aanvragen willen

Niblah helpt ondernemers in [plaats] met SEO, Google Ads, websites en marketing automation. Geen losse acties, maar een groeisysteem waarin vindbaarheid, campagnes en opvolging samen werken.
```

Add one local sentence that cannot be used for another city.

### 3. Local Proof Section

This section is mandatory.

Choose one:

- "Wat we zien in [plaats]"
- "Waarom lokale vindbaarheid in [plaats] anders werkt"
- "Mini-audit: waar kansen liggen voor [plaats]"
- "Onze aanpak voor bedrijven rond [plaats]"

Include:

- 3 concrete observations
- what Niblah does with those observations
- no fake numbers unless sourced or clearly framed as example

### 4. Service Fit

Explain the service mix for this location.

Use 3 or 4 blocks:

- SEO in [plaats]
- Google Ads in [plaats]
- Websites die aanvragen opleveren
- Marketing automation en opvolging

Each block needs:

- one local or business-specific example
- one outcome
- one internal service link

### 5. Niblah Method

Show how Niblah works.

Suggested steps:

1. Nulmeting
2. Zoekintentie en lokale kansen
3. Website en tracking basis
4. Campagnes en content
5. Rapportage en optimalisatie

Keep this practical. No vague "strategie op maat" without explaining what changes.

### 6. Comparison Section

Purpose: make Niblah different from generic marketingbureaus.

Possible angle:

```text
Veel marketing bureaus leveren losse acties: een advertentiecampagne, een SEO-rapport of een nieuwe website. Niblah bouwt liever het systeem erachter: welke zoekvragen leveren aanvragen op, welke pagina's converteren, welke campagnes vullen de pijplijn en hoe worden leads opgevolgd?
```

Must include:

- what common agencies do
- what Niblah does differently
- why that matters for the visitor

### 7. FAQ

Add 5 to 7 FAQs.

FAQ rules:

- Answer naturally.
- Include keywords only where useful.
- Do not mark keywords as complete just because they appear in FAQ.
- Avoid duplicate FAQs across locations.

Suggested questions:

- Wat doet een marketing bureau in [plaats]?
- Is lokale SEO belangrijk voor bedrijven in [plaats]?
- Werkt Google Ads voor lokale bedrijven?
- Kan Niblah ook mijn website verbeteren?
- Hoe snel zie ik resultaat?
- Wat kost online marketing in [plaats]?

### 8. CTA

Use a clear CTA:

- Plan gratis consult
- Ontdek welke marketingmix past bij jouw bedrijf
- Bel of app direct

CTA copy should be compact and aligned with homepage style.

### 9. Internal Links

Required links:

- `/services/seo`
- `/services/sea`
- `/services/web-development`
- `/contact`
- two nearby `/marketing/[plaats]` pages

Optional:

- `/tools/ai-marketing-audit`
- `/tools/serp-simulator`
- `/tools/break-even-roas-calculator`

## Content QA Checklist

Before publish:

- One H1.
- Local proof section exists.
- No city-name swap copy.
- No unsupported claims.
- Title and H1 are aligned.
- Intro contains primary intent naturally.
- Page links to relevant services.
- Page links to nearby locations.
- CTA is visible.
- FAQ is unique.
- Metadata and canonical are correct.

## Technical QA Checklist

Before publish:

- `npm run build`
- page renders desktop and mobile
- URL is in sitemap
- no accidental `noindex`
- canonical uses production domain
- no console-breaking client errors
- images have useful alt text where applicable
