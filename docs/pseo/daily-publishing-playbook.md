# Daily pSEO Publishing Playbook

Use this for each daily pSEO page.

## 1. Pick One Queue Item

Open:

- `docs/pseo/30-day-page-queue.md`

Move one item from `queued` to `research`.

Do not start a second page before the current page is live or blocked.

## 2. Research

Collect only what is needed for the page:

- primary keyword
- search intent
- local context
- nearby towns or districts
- relevant Niblah services
- proof variable
- internal links

Research output must include:

- the one-sentence page purpose
- the unique proof variable
- the CTA angle

If there is no proof variable, do not draft.

## 3. Draft

Use:

- `docs/pseo/marketing-location-page-template.md`
- `docs/pseo/source-guardrails.md`

The draft must include:

- hero
- local proof section
- service fit
- Niblah method
- comparison section
- FAQ
- CTA
- internal links
- metadata

Avoid:

- generic city swaps
- fake local references
- unsupported numbers
- keyword stuffing
- duplicate FAQs

## 4. Content QA

Run this checklist manually before code changes:

- The page is useful for a real visitor.
- The page has one primary intent.
- The page contains unique local insight.
- The page explains why Niblah's approach is different.
- The page links to relevant services.
- The page links to nearby locations.
- The page has a clear CTA.
- The page is not just a rewritten version of another local page.

## 5. Implementation QA

After editing code or data:

```bash
npm run build
```

If a local browser check is needed:

```bash
npm run dev
```

Then inspect:

- desktop layout
- mobile layout
- footer/header consistency
- links
- metadata route

## 6. Sitemap QA

Before deploy:

- ensure the URL is included in `src/app/sitemap.js` or dynamic sitemap logic
- ensure canonical points to production URL
- ensure no `noindex`

## 7. Deploy

Use the current production deploy workflow for Niblah.

After deploy:

- open the live URL
- confirm HTTP 200
- confirm title/H1
- confirm canonical
- confirm page renders

## 8. Search Console Log

For normal SEO pages, do not use the Google Indexing API as the default submit mechanism.

Log:

- live URL
- publish date
- sitemap inclusion
- URL Inspection status if checked
- first GSC follow-up date

Recommended follow-up:

- inspect after publish
- check indexation after 3 to 7 days
- check impressions after 14 to 28 days

## 9. Update Queue

Move status to:

- `live` after deploy
- `gsc_checked` after inspection/logging

Add a note if:

- build failed
- page was blocked by missing proof
- URL cannibalizes another page
- sitemap needs refactor

## 10. Monthly Review

At the end of the month, review:

- indexed pages
- impressions
- clicks
- queries
- internal links
- conversions where available

Keep, update, merge, or remove pages based on quality and performance.
