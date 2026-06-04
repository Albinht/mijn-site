# Website Laten Maken Design

## Context

Niblah has an existing WordPress-focused page at `/wordpress/website-laten-maken`, but the new target is a broader commercial landing page for the keyword cluster around `website laten maken`.

The page should:

- target broad business intent instead of only WordPress intent
- position Niblah for MKB companies that want a professional company website
- absorb the old WordPress page to avoid keyword cannibalization
- strengthen internal linking around website/development services

## Decisions

### Primary positioning

`Zakelijke websites voor mkb, meestal in WordPress, maatwerk waar nodig.`

This keeps the main page broad enough for:

- `website laten maken`
- `website laten bouwen`
- `zakelijke website laten maken`
- `professionele website laten maken`
- `website op maat laten maken`
- `kosten website laten maken`

And still supports the strong secondary cluster around:

- `wordpress website laten maken`
- `website laten maken wordpress`
- `website laten maken in wordpress`
- `wordpress website op maat`

### URL strategy

Primary URL:

- `/website-laten-maken`

Existing URL to merge:

- `/wordpress/website-laten-maken`

### Cannibalization strategy

- The old WordPress page gets a permanent redirect to `/website-laten-maken`
- Internal links in the core website/development flow should point directly to `/website-laten-maken`
- The new page contains a dedicated WordPress section so WordPress intent still has a clear relevance match

## Page structure

### Hero

Main topic: `website laten maken`

Message:

- professional business websites
- built for trust, speed, SEO, and lead generation
- aimed at MKB companies

### Why companies choose this service

Explain the commercial reasons to invest in a new website:

- more trust
- better lead quality
- stronger online visibility
- a site that is easier to manage and grow

### What clients get

Core deliverables:

- custom design direction
- responsive development
- CMS setup
- technical SEO basics
- conversion-focused structure
- forms, tracking, and integrations

### WordPress as recommended platform

WordPress is not the headline promise, but the recommended default for many MKB sites because it balances:

- speed of delivery
- flexibility
- SEO control
- easy content management

### Pricing intent section

The page should answer `wat kost een website laten maken` without inventing hard package pricing.

It should explain that price depends on:

- number of pages
- custom functionality
- copy and content needs
- integrations
- maintenance and support

### Process section

Simple service flow:

1. intake
2. structure and concept
3. design and build
4. feedback and launch
5. support and optimization

### FAQ

Use FAQ content to support long-tail searches around:

- cost
- timing
- WordPress
- maintenance
- custom work

### Related links

Link to:

- `/wordpress/maatwerk`
- `/wordpress/thema`
- `/wordpress/marketing`
- `/services/web-development`
- `/contact`

## Technical SEO scope

This implementation should also fix the most direct SEO blockers in this flow:

- add the new page to the sitemap
- add a permanent redirect from the old WordPress URL
- align the root metadata domain with `https://niblah.com`
- add a `robots` route
- reduce broken internal service links where feasible

## Non-goals

Not included in this task:

- cleaning all canonical inconsistencies across every local marketing page
- rebuilding the full information architecture for every service category
- translating every new page variation into every locale-specific keyword set

## Implementation outline

1. Add `/website-laten-maken`
2. Add localized copy and metadata
3. Redirect `/wordpress/website-laten-maken`
4. Update sitemap and metadata base domain
5. Update direct internal links in the website/WordPress flow
6. Add lightweight route fixes for the most visible broken service navigation paths
