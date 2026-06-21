# pSEO System Design

## Goal

Build a repeatable pSEO system for Niblah that can publish one high-quality page per day without turning the site into scaled content spam.

The first system target is the `marketing bureau [plaats]` and `online marketing bureau [plaats]` page family, because it matches the existing `/marketing/*` structure and Niblah's commercial positioning.

## Source Guardrails

This system is based on:

- `/Users/al/Downloads/Content guidelines (1).docx`
- `/Users/al/Downloads/Optimizing your website for generative AI features on Google Search (1).docx`
- `https://ralfvanveen.com/page-sitemap.xml`

The Ralf sitemap contains 950 URLs. Most are programmatic page families across tools, languages, SEO topics, and localized service pages. We will not copy this in one batch. We will use it as a model for page-family thinking.

## Core Principle

Every page must earn its own reason to exist.

A page is publishable only when it includes at least one non-commodity variable:

- Niblah-specific experience
- local market insight
- mini-audit or observation
- client-style scenario
- comparison logic
- original data point
- process detail
- screenshot, example, or practical workflow

If the page can be produced by changing only a city name or keyword, it fails.

## Architecture

The system has four layers:

1. Source guardrails
   - Defines what quality means.
   - Blocks commodity content, duplicate intent, and AI-only writing.

2. Master page template
   - Defines the content structure for one excellent page.
   - Keeps design and conversion consistent.
   - Leaves room for local evidence and unique sections.

3. Content queue
   - One row per page.
   - Tracks intent, URL, proof variable, internal links, status, and publish date.

4. Daily publishing playbook
   - Research.
   - Draft.
   - QA.
   - Build.
   - Deploy.
   - Search Console check.

## First Page Family

Recommended first page family:

`/marketing/[plaats]`

Primary query patterns:

- marketing bureau [plaats]
- online marketing bureau [plaats]
- marketing bedrijf [plaats]
- SEO specialist [plaats]
- Google Ads bureau [plaats]
- website laten maken [plaats]

The page should not try to rank for every phrase equally. It should serve the commercial intent: a local business owner wants to compare marketing help and decide whether Niblah is credible.

## Page Template

The master template lives at:

- `docs/pseo/marketing-location-page-template.md`

The template requires:

- one primary intent
- one primary keyword
- one local proof variable
- one Niblah-specific point of view
- a clear CTA
- internal links to relevant services and nearby locations
- a self-referencing canonical
- page-level QA before publish

## Daily Queue

The first 30-day queue lives at:

- `docs/pseo/30-day-page-queue.md`

The first month should mostly upgrade existing location pages, not create dozens of new URLs. The repo already has many `/marketing/*` pages, so the highest-value work is improving them to the new proof-led standard.

## Google Search Console Rule

For normal SEO pages, do not rely on the Google Indexing API. Google's official Indexing API is intended for pages with `JobPosting` or livestream `BroadcastEvent` markup.

For Niblah pSEO pages:

- ensure the URL is live and indexable
- ensure sitemap includes the URL
- inspect with Search Console or URL Inspection where needed
- log the publication date and inspection status
- monitor impressions and indexation after publication

## Done Criteria

A pSEO page is done only when:

- it matches a distinct intent
- it has unique local or Niblah-specific value
- it is not a city-name swap of another page
- metadata and canonical are correct
- visible H1 and title align
- content is internally linked
- page renders correctly on desktop and mobile
- `npm run build` passes
- URL is included in sitemap
- publish status is logged in the queue

## Next Step

Use the master template to upgrade one existing page first. Recommended pilot:

- `/marketing/barneveld`

Reason: it is commercially relevant, local to Niblah's existing positioning, and already has a data file/template structure that can be improved without inventing a new route system.
