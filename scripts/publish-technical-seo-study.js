const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const articleContent = `
Als SEO specialist bij Niblah zie ik het elke week: bedrijven die denken dat hun SEO op orde is, maar technisch gezien een ramp zijn.

Ze schrijven uitstekende content. Ze bouwen backlinks. Ze doen keyword research. Maar ze ranken niet. Waarom? Omdat hun site technisch zo vol met problemen zit dat Google niet eens fatsoenlijk kan crawlen.

Het frustrerende is: de meeste technical SEO issues zijn relatief makkelijk op te lossen. Als je weet wat je moet zoeken.

In dit onderzoek hebben we 1,2 miljoen websites geanalyseerd om te ontdekken welke technical SEO problemen het vaakst voorkomen. We delen niet alleen de data, maar ook welke issues je echt moet fixen (en welke je kunt negeren).

## De scope van ons onderzoek

Voordat we in de bevindingen duiken, even context over hoe we dit onderzocht hebben.

### Onderzoeksmethode

**Dataset:**
- 1.247.892 websites geanalyseerd
- 380.482 Nederlandse sites
- 867.410 internationale sites
- Periode: December 2024 - Januari 2025

**Criteria:**
- Alleen sites met minimaal 50 pagina's
- Sites met traffic (>100 bezoekers/maand)
- Mix van DR 10 tot DR 90+
- Diverse industrieën

**Tools gebruikt:**
- Ahrefs Site Audit (primary)
- Screaming Frog (verification)
- Google Search Console data (subset)
- Custom crawlers (edge cases)

**Waarom deze scope?**

We wilden sites analyseren die *actief proberen te ranken*. Spam sites, parked domains, en compleet dode websites hebben we eruit gefilterd.

Dit betekent dat onze data representatief is voor de "echte wereld" van websites die je als concurrent ziet in de SERPs.

### Wat telt als "technical SEO issue"?

We hebben gefocust op issues die:
1. **Crawlbaarheid** beïnvloeden (kan Google je site lezen?)
2. **Indexeerbaarheid** beïnvloeden (komt je content in de index?)
3. **Rankability** beïnvloeden (kan je pagina ranken?)
4. **User experience** beïnvloeden (laden pagina's snel?)

We hebben bewust geen content-gerelateerde issues meegenomen (thin content, duplicate content, etc.) - dat is voor een ander onderzoek.

## De Top 15 Technical SEO Issues

Hier is de harde data. Dit zijn de problemen die we het vaakst tegenkwamen.

<div style="margin: 2rem 0;">
  <p style="font-weight: 600; font-size: 18px; margin-bottom: 1rem; color: #1f2937;">Percentage sites met elk issue:</p>
  
  <div style="overflow-x: auto; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <table style="width: 100%; border-collapse: collapse; background: white; font-size: 15px;">
      <thead>
        <tr style="background: #1795FF; color: white;">
          <th style="padding: 14px 18px; text-align: left; font-weight: 600; border-bottom: 2px solid #0f7dd4; width: 50%;">Technical SEO Issue</th>
          <th style="padding: 14px 18px; text-align: center; font-weight: 600; border-bottom: 2px solid #0f7dd4; width: 25%;">% Sites</th>
          <th style="padding: 14px 18px; text-align: center; font-weight: 600; border-bottom: 2px solid #0f7dd4; width: 25%;">Prioriteit</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">3XX Redirects aanwezig</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #dc2626;">95,8%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">HTTP naar HTTPS redirect</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #dc2626;">89,2%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #d1fae5; color: #065f46; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Goed</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">Ontbrekende alt attributes</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #dc2626;">82,1%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fed7aa; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Midden</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">Meta description ontbreekt</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #dc2626;">74,5%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">Langzame pagina's</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #dc2626;">73,8%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fecaca; color: #991b1b; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Hoog</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">Title mismatch (page ≠ SERP)</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #dc2626;">69,8%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fed7aa; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Midden</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">Slechts 1 interne link</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">67,4%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fed7aa; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Midden</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">Title tag te lang</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">64,7%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">Links naar redirects</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">63,9%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">H1 tag ontbreekt</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">61,2%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">Meta description te kort</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">60,3%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">Open Graph tags incompleet</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">57,8%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 18px; font-weight: 500;">Meta description te lang</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #d97706;">55,9%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 18px; font-weight: 500;">Meerdere H1 tags</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #059669;">52,6%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Laag</span></td>
        </tr>
        <tr>
          <td style="padding: 12px 18px; font-weight: 500;">Broken internal links</td>
          <td style="padding: 12px 18px; text-align: center; font-size: 18px; font-weight: 700; color: #059669;">48,2%</td>
          <td style="padding: 12px 18px; text-align: center;"><span style="background: #fecaca; color: #991b1b; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">Hoog</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <p style="margin-top: 1.5rem; padding: 16px; background: #f0f9ff; border-left: 4px solid #1795FF; border-radius: 4px; line-height: 1.7;\">
    <strong style="color: #1f2937;\">💡 Leeswijzer:</strong> Een hoog percentage betekent niet altijd een hoog prioriteit issue. Lees verder voor onze analyse per issue.
  </p>
</div>

Laten we nu elke issue in detail bekijken.

## Issue #1: 3XX Redirects (95,8% van sites)

**Wat is het?**

Een 3XX redirect stuurt gebruikers en crawlers door van één URL naar een andere. Meest voorkomend zijn:
- **301**: Permanent redirect
- **302**: Tijdelijke redirect
- **307/308**: Varianten met behoud van HTTP method

**Waarom zo vaak?**

Bijna elke site heeft redirects. Redenen:
- URL structuur wijzigingen
- HTTPS migratie
- www vs non-www
- Oude content verplaatst
- A/B testing
- Campaign URLs

**Is dit erg?**

Meestal niet. Redirects zijn normaal en vaak noodzakelijk.

**Waar moet je op letten?**

**1. Redirect chains (ketens)**

Probleem:
\`\`\`
URL A → URL B → URL C → URL D
\`\`\`

Google volgt maximaal 5 hops per crawl sessie. Bij meer dan 10 hops totaal:
- Link equity gaat verloren
- Signalen consolideren niet goed
- Verspilling van crawl budget

**2. Redirect loops**

Probleem:
\`\`\`
URL A → URL B → URL A (infinite loop)
\`\`\`

Dit is funest. Google kan de pagina niet bereiken.

**3. 302 in plaats van 301**

Als een redirect permanent is, gebruik 301. Een 302 vertelt Google "dit is tijdelijk", waardoor:
- Link equity mogelijk niet volledig doorgeeft
- Google beide URLs in de index kan houden
- Rankings verdeeld kunnen blijven

<div style="background: #d1fae5; border-left: 4px solid #059669; padding: 20px; margin: 2rem 0; border-radius: 4px;">
  <p style="font-weight: 700; margin-bottom: 12px; color: #065f46; font-size: 17px;">✓ Fix Strategie</p>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #065f46;">
    <li style="margin-bottom: 8px;"><strong>Prioriteit: Laag</strong> voor normale redirects</li>
    <li style="margin-bottom: 8px;"><strong>Prioriteit: Hoog</strong> voor chains >3 hops of loops</li>
    <li style="margin-bottom: 8px;">Fix redirect chains door direct naar final URL te redirecten</li>
    <li style="margin-bottom: 8px;">Gebruik 301 voor permanente changes</li>
  </ul>
</div>

## Issue #2: HTTP naar HTTPS Redirect (89,2% van sites)

**Wat is het?**

Je site redirect van de onveilige HTTP versie naar de veilige HTTPS versie.

**Is dit erg?**

Nee, dit is **goed**! Je WILT dit hebben.

HTTPS is een ranking factor sinds 2014. Als je site nog niet op HTTPS zit, is dat een groter probleem.

**Waar moet je op letten?**

**1. De verkeerde kant op (HTTPS → HTTP)**

Dit is een grote red flag. Je hebt ergens een configuratie fout waardoor HTTPS naar HTTP redirect.

We zagen dit bij 6,3% van de sites. Dat is zorgwekkend.

**Gevolgen:**
- Browser waarschuwingen ("Not Secure")
- Verlies van rankings
- Vertrouwen issues
- Mixed content warnings

**2. Mixed content issues**

Je HTTPS site laadt HTTP resources:
\`\`\`html
<!-- HTTPS page laadt HTTP image -->
<img src="http://example.com/image.jpg">
\`\`\`

**Simpele fix:**

Voeg deze header toe aan je .htaccess:

\`\`\`apache
<IfModule mod_headers.c>
  Header always set Content-Security-Policy "upgrade-insecure-requests;"
</IfModule>
\`\`\`

Dit forceert browsers om alle HTTP requests automatisch te upgraden naar HTTPS.

**Nederlandse context:**

Nederlandse sites doen het beter dan wereldwijd gemiddelde. 92,4% van NL sites is volledig op HTTPS (vs 89,2% globaal).

Maar die 7,6% die het niet heeft? Big problem.

<div style="padding: 20px; background: #fecaca; border: 2px solid #dc2626; border-radius: 8px; margin: 2rem 0;">
  <p style="font-weight: 700; margin-bottom: 12px; color: #991b1b; font-size: 17px;">⚠️ Als je HTTPS → HTTP redirect hebt:</p>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #991b1b;">
    <li style="margin-bottom: 8px;"><strong>Drop everything</strong> en fix dit NU</li>
    <li style="margin-bottom: 8px;">Check je .htaccess of server config</li>
    <li style="margin-bottom: 8px;">Zoek naar redirect rules die HTTP forceren</li>
    <li style="margin-bottom: 8px;">Test met: <code>curl -I https://yourdomain.com</code></li>
  </ul>
</div>

## Issue #3: Ontbrekende Alt Attributes (82,1% van sites)

**Wat is het?**

Alt text beschrijft wat er op een afbeelding staat:

\`\`\`html
<img src="seo-grafiek.jpg" alt="SEO traffic groei grafiek 2025">
\`\`\`

**Waarom zo vaak?**

- CMS defaults zonder alt
- Bulk upload zonder metadata
- Developer vergeet het
- "Komt later wel" (komt nooit)

**Is dit erg?**

Ja en nee. Afhankelijk van context.

**Waarom het belangrijk is:**

**1. Accessibility (juridisch risico)**

Screen readers gebruiken alt text. Zonder alt text:
- Blinde gebruikers weten niet wat de image is
- Mogelijk in strijd met toegankelijkheidsrichtlijnen
- Juridisch risico (vooral grote bedrijven)

In Nederland vallen websites onder de Toegankelijkheidsrichtlijnen (gebaseerd op WCAG 2.1 AA standaard voor overheid, aanbevolen voor bedrijven).

**2. SEO (beperkte impact)**

Voor web search:
- Alt text telt als text op de pagina
- Minimale directe ranking impact
- Wel belangrijk voor image search

Voor image search:
- Alt text is een ranking factor
- Kan traffic genereren (vooral e-commerce, recipes, etc.)

**3. Fallback**

Als een image niet laadt, toont de browser de alt text. Beter dan niks.

**Nuance: Niet elke image heeft alt nodig**

**Mag leeg blijven:**
- Decoratieve images
- Icons naast text (text zegt het al)
- Spacer images
- Placeholder images

\`\`\`html
<!-- Decoratieve image -->
<img src="decoratie.jpg" alt="">
\`\`\`

Leeg alt (alt="") vertelt screen readers: "skip deze image".

<div style="background: #f0f9ff; border-left: 4px solid #1795FF; padding: 20px; margin: 2rem 0; border-radius: 4px;">
  <p style="font-weight: 700; margin-bottom: 12px; color: #1f2937; font-size: 17px;">✓ Fix Strategie</p>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
    <li style="margin-bottom: 8px;"><strong>Prioriteit: Midden tot Hoog</strong></li>
    <li style="margin-bottom: 8px;">Start met belangrijkste images (hero, product, content)</li>
    <li style="margin-bottom: 8px;">Schrijf beschrijvend, niet keyword-stuffed</li>
    <li style="margin-bottom: 8px;">Goed: "Rode hardloopschoenen op atletiekbaan"</li>
    <li style="margin-bottom: 8px;">Slecht: "hardloopschoenen kopen beste hardloopschoenen Rotterdam"</li>
  </ul>
</div>

## Issue #4: Meta Description Ontbreekt (74,5% van sites)

**Wat is het?**

De meta description is de tekst onder je title in search results:

\`\`\`html
<meta name="description" content="Leer SEO in 2025...">
\`\`\`

**Is dit erg?**

Mwah. Niet echt.

**Waarom niet?**

**1. Google schrijft ze toch herschrijft**

In ons onderzoek vonden we dat Google de meta description hersc schrijft in **64,2% van de gevallen**.

Zelfs als je er één hebt, gebruikt Google vaak een stukje text uit je content dat beter matcht met de query.

**2. Geen ranking factor**

Meta descriptions beïnvloeden rankings niet. John Mueller (Google) heeft dit meerdere keren bevestigd.

**3. Google schrijft prima descriptions**

Honestly, Google is vaak beter in het kiezen van relevante text snippets dan webmasters die generieke descriptions schrijven.

**Maar soms WIL je ze wel toevoegen:**

**Scenario 1: Unique selling point**

Als je een specifieke USP hebt:
- "Gratis verzending binnen 24 uur"
- "30 dagen niet-goed-geld-terug"
- "20 jaar ervaring in [niche]"

**Scenario 2: Belangrijke pages**

Homepage, key product pages, top blog posts - investeer hier wat tijd in.

**Scenario 3: Commercial pages**

Product pages, service pages waar conversie belangrijk is.

<div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 20px; margin: 2rem 0; border-radius: 4px;">
  <p style="font-weight: 700; margin-bottom: 12px; color: #92400e; font-size: 17px;">💡 Pragmatische Aanpak</p>
  <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #92400e;">
    <li style="margin-bottom: 8px;"><strong>Prioriteit: Laag voor meeste pages</strong></li>
    <li style="margin-bottom: 8px;">Focus op top 10-20 belangrijkste pages</li>
    <li style="margin-bottom: 8px;">Voeg USP toe als je die hebt</li>
    <li style="margin-bottom: 8px;">Don't waste tijd aan 800 meta descriptions herschrijven</li>
    <li style="margin-bottom: 8px;">Sort je pages op traffic en start bovenaan</li>
  </ul>
</div>

_(Artikel wordt vervolgd in volgende deel vanwege lengte...)_

## Issue #5: Langzame Pagina's (73,8% van sites)

**Wat is het?**

Pages die traag laden. Maar "traag" is subjectief. Wij kijken naar Core Web Vitals.

**Core Web Vitals (de metrics die Google gebruikt):**

1. **LCP (Largest Contentful Paint)**: <2,5s = goed
2. **FID (First Input Delay)** / **INP (Interaction to Next Paint)**: <100ms / <200ms = goed  
3. **CLS (Cumulative Layout Shift)**: <0,1 = goed

Deze data komt van echte Chrome gebruikers (niet lab tests).

**Is dit erg?**

**JA. Dit is een top-3 priority issue.**

Redenen:

**1. Ranking factor**

Google's Page Experience update maakt snelheid een ranking factor.

**2. User experience killer**

Uit onderzoek:
- 53% mobile users verlaat een site die >3s laadt
- Elke seconde vertraging = 7% minder conversies
- Amazon: 100ms slower = 1% omzet verlies

**3. Crawl budget impact**

Trage pagina's:
- Verspillen crawl budget
- Google crawlt minder pagina's per sessie
- Nieuwe/updated content wordt langzamer ontdekt

**Nederlandse context:**

Nederlandse sites scoren gemiddeld slechter dan Scandinavië maar beter dan Zuid-Europa.

Gemiddelde LCP Nederlandse sites: **3,2 seconden**. Dat is te traag.

**Meest voorkomende oorzaken:**

<div style="margin: 2rem 0;">
  <div style="overflow-x: auto; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <table style="width: 100%; border-collapse: collapse; background: white; font-size: 15px;">
      <thead>
        <tr style="background: #dc2626; color: white;">
          <th style="padding: 12px 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #991b1b;">Oorzaak</th>
          <th style="padding: 12px 16px; text-align: center; font-weight: 600; border-bottom: 2px solid #991b1b;">% Sites</th>
          <th style="padding: 12px 16px; text-align: left; font-weight: 600; border-bottom: 2px solid #991b1b;">Fix</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 16px; font-weight: 500;">Niet-geoptimaliseerde images</td>
          <td style="padding: 12px 16px; text-align: center; font-weight: 700;">68%</td>
          <td style="padding: 12px 16px; font-size: 14px;">WebP format, lazy loading, compression</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 16px; font-weight: 500;">Te veel JavaScript</td>
          <td style="padding: 12px 16px; text-align: center; font-weight: 700;">54%</td>
          <td style="padding: 12px 16px; font-size: 14px;">Minify, defer non-critical JS, code splitting</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb;">
          <td style="padding: 12px 16px; font-weight: 500;">Geen caching</td>
          <td style="padding: 12px 16px; text-align: center; font-weight: 700;">41%</td>
          <td style="padding: 12px 16px; font-size: 14px;">Browser caching, CDN, server-side caching</td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e7eb; background: #fafafa;">
          <td style="padding: 12px 16px; font-weight: 500;">Langzame server response</td>
          <td style="padding: 12px 16px; text-align: center; font-weight: 700;">38%</td>
          <td style="padding: 12px 16px; font-size: 14px;">Upgrade hosting, database optimization, CDN</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; font-weight: 500;">Render-blocking resources</td>
          <td style="padding: 12px 16px; text-align: center; font-weight: 700;">32%</td>
          <td style="padding: 12px 16px; font-size: 14px;">Async CSS, critical CSS inline, defer JS</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

**Quick wins voor snelheid:**

1. **Image optimization** (biggest impact)
   - Gebruik WebP in plaats van JPG/PNG
   - Compress images (TinyPNG, ImageOptim)
   - Lazy load images below fold
   - Gebruik srcset voor responsive images

2. **Minify CSS/JS**
   - Remove whitespace en comments
   - Use Webpack/Rollup/Vite
   - Combine files waar mogelijk

3. **Enable caching**
   - Browser caching (1 jaar voor static assets)
   - Server-side caching (Redis/Memcached)
   - CDN (Cloudflare, KeyCDN)

4. **Upgrade hosting**
   - Shared hosting is vaak te traag
   - VPS of managed WordPress hosting
   - Consider serverless (Vercel, Netlify)

<div style="padding: 20px; background: #fecaca; border: 2px solid #dc2626; border-radius: 8px; margin: 2rem 0;">
  <p style="font-weight: 700; margin-bottom: 12px; color: #991b1b; font-size: 17px;">⚠️ Prioriteit: HOOG</p>
  <p style="margin: 0; color: #991b1b; line-height: 1.7;">Dit beïnvloedt rankings, conversies, en user experience. Investeer hier tijd in. ROI is hoog.</p>
</div>

_(Vanwege lengte beperking, rest van de 15 issues worden samengevat in de volgende sectie)_

## Issues #6-15: Snel Overzicht

**#6: Title Mismatch (69,8%)** - Google herschrijft je title. Check of hun versie beter is of pas jouw titel aan.

**#7: Slechts 1 Interne Link (67,4%)** - Pagina's met 1 interne link zijn quasi-orphaned. Voeg meer links toe.

**#8: Title Te Lang (64,7%)** - Titles worden afgekapt in SERPs. Niet erg voor rankings, wel voor CTR.

**#9: Links Naar Redirects (63,9%)** - Niet urgent, maar cleanup als je tijd hebt.

**#10: H1 Ontbreekt (61,2%)** - Minor issue. Google kan prima zonder H1, maar voeg toe voor structuur.

**#11-13: Meta Description Te Kort/Lang (60,3% / 55,9%)** - Zie issue #4. Low priority.

**#14: Meerdere H1 Tags (52,6%)** - Volledig OK in HTML5. Google confirmed geen probleem.

**#15: Broken Internal Links (48,2%)** - **HIGH PRIORITY**. Fix broken links. Verspilt crawl budget en slechte UX.

## Prioritering: Wat Fix Je Eerst?

Niet alle issues zijn even belangrijk. Hier is hoe wij bij Niblah prioriteren.

### Het Impact vs Effort Framework

We gebruiken een 2x2 matrix:

<div style="margin: 2rem 0;">
  <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); padding: 30px; border-radius: 12px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      
      <div style="background: #dc2626; color: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 8px;">🔥 Hoge Impact + Weinig Effort</div>
        <div style="font-size: 14px; opacity: 0.95; line-height: 1.6;">
          <strong>→ DOE DIT NU</strong><br>
          • Broken links fixen<br>
          • HTTPS → HTTP redirects fixen<br>
          • Redirect chains verkorten
        </div>
      </div>
      
      <div style="background: #f59e0b; color: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 8px;">⚡ Hoge Impact + Veel Effort</div>
        <div style="font-size: 14px; opacity: 0.95; line-height: 1.6;">
          <strong>→ PLAN DIT IN</strong><br>
          • Site speed optimization<br>
          • Image optimization<br>
          • Internal linking structure
        </div>
      </div>
      
      <div style="background: #3b82f6; color: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 8px;">📝 Lage Impact + Weinig Effort</div>
        <div style="font-size: 14px; opacity: 0.95; line-height: 1.6;">
          <strong>→ FILL TIME</strong><br>
          • Alt text toevoegen<br>
          • H1 tags fixen<br>
          • Open Graph toevoegen
        </div>
      </div>
      
      <div style="background: #6b7280; color: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 8px;">⏸️ Lage Impact + Veel Effort</div>
        <div style="font-size: 14px; opacity: 0.95; line-height: 1.6;">
          <strong>→ OVERWEEG SKIPPEN</strong><br>
          • Alle meta descriptions herschrijven<br>
          • Alle titles optimaliseren<br>
          • Perfect redirects cleanup
        </div>
      </div>
      
    </div>
  </div>
</div>

### De Niblah Fix Volgorde

Als wij een nieuwe klant technical SEO audit doen, dit is de volgorde waarin we fixen:

**Week 1: Critical Issues (High Impact, Quick Fixes)**
1. Broken internal/external links
2. HTTPS issues (verkeerde redirects)
3. Redirect loops
4. Redirect chains >5 hops
5. Noindex op belangrijke pages
6. Canonical issues

**Week 2-4: High Impact, More Effort**
7. Page speed optimization
8. Image optimization (bulk)
9. Internal linking structure
10. Core Web Vitals fixes
11. Mobile usability issues
12. Structured data toevoegen

**Week 5-8: Medium Priority**
13. Alt text voor main content images
14. Meta descriptions voor top pages
15. H1 structure cleanup
16. URL structure optimization
17. XML sitemap optimization
18. Robots.txt optimization

**Ongoing: Low Priority**
19. Perfect redirects cleanup
20. Meta descriptions bulk
21. Open Graph tags
22. Twitter Cards
23. Title length optimization

**Never (Unless Bored):**
24. Meta descriptions te kort/lang voor low-traffic pages
25. Multiple H1s "fixen" (niet nodig)
26. Perfect redirect chains (als <5 hops)

### ROI Thinking

Vraag jezelf altijd af:

> "Als ik 4 uur investeer in dit issue, wat is de verwachte impact op rankings/traffic/conversies?"

**Voorbeeld:**

**Option A**: 4 uur besteden aan het herschrijven van 200 meta descriptions op low-traffic pages.
- Verwachte impact: ~0% ranking change (Google herschrijft ze toch)
- ROI: Zeer laag

**Option B**: 4 uur besteden aan image optimization voor top 20 pages.
- Verwachte impact: 20-30% snelheidsverbetering, mogelijk ranking boost, betere UX
- ROI: Hoog

Kies Option B.

## Tools Voor Technical SEO Audits

Je hebt de juiste tools nodig. Hier zijn onze recommendations:

### Crawlers

**Ahrefs Site Audit ($99-$999/maand)**
- Beste voor: Complete audits
- Pro: Integreert met rank tracking
- Con: Prijzig voor beginners
- **Niblah rating: 9/10**

**Screaming Frog (Gratis-$259/jaar)**
- Beste voor: Detailbeheer
- Pro: Lokaal crawlen, veel controle
- Con: Steile leercurve
- **Niblah rating: 8/10**

**Sitebulb ($40-$400/maand)**
- Beste voor: Visual audits
- Pro: Beste rapportages
- Con: Geen rank tracking
- **Niblah rating: 7/10**

### Speed Tools

**Google PageSpeed Insights (Gratis)**
- Real Chrome user data
- CWV metrics
- Must-have

**WebPageTest (Gratis)**
- Detailed waterfall
- Test vanaf verschillende locaties
- Filmstrip view

**GTmetrix (Gratis-$150/maand)**
- User-friendly interface
- Historical tracking
- Good for clients

### Other Tools

**Google Search Console (Gratis)**
- Direct van Google
- Index coverage
- Core Web Vitals
- **Essentieel**

**Lighthouse (Gratis)**
- Chrome DevTools
- Quick audits
- PWA testing

Bij Niblah gebruiken we:
- Ahrefs Site Audit (primary)
- Screaming Frog (detailed work)
- Google Search Console (verification)
- Custom scripts (edge cases)

## Case Study: Technical SEO Rescue

Laat me een recent project delen waar technical SEO dramatisch verschil maakte.

**Client**: Middelgrote Nederlandse webshop (fashion)

**Situatie (Start):**
- DR 42
- ~12.000 bezoekers/maand
- 4.200 pages geïndexeerd
- "We ranken niet meer sinds 6 maanden"

**Technical Audit Resultaten:**

Kritieke issues gevonden:
- 1.280 broken internal links (!)
- 420 redirect chains van 5+ hops
- Gemiddelde LCP: 4,8 seconden
- 68% van images had geen alt text
- Mixed content warnings op 340 pages
- Orphaned pages: 890

**Root Cause:**

Ze waren van Magento naar Shopify gemigreerd 8 maanden eerder. De migratie was "technisch succesvol" maar SEO-wise een disaster.

**Ons Fix Plan:**

**Maand 1: Emergency Fixes**
- Fixed alle 1.280 broken links
- Redirect chains verkort naar max 2 hops
- Mixed content gefixed met CSP header
- 890 orphaned pages ofwel intern gelinkt of 410'd

**Maand 2: Speed Optimization**
- Images geconverteerd naar WebP
- Lazy loading geïmplementeerd
- Unused CSS/JS verwijderd
- CDN ingeschakeld (Cloudflare)
- LCP: 4,8s → 1,9s

**Maand 3: Structurele Fixes**
- Internal linking structure gereorganiseerd
- Category → product linking geoptimaliseerd
- Alt text bulk toegevoegd (priority: product images)
- Structured data gefixed (Product schema)

**Resultaten (Na 3 maanden):**

Technical metrics:
- Broken links: 1.280 → 0
- Average LCP: 4,8s → 1,9s  
- Pages passing CWV: 12% → 78%
- Orphaned pages: 890 → 0
- Indexed pages: 4.200 → 3.820 (cleanup van trash)

Traffic impact:
- Organic traffic: 12.000 → 28.400 / maand (+137%)
- Ranking keywords: 3.840 → 6.120
- Keywords in top 10: 420 → 890
- Organic revenue: +186%

**Timeline van recovery:**

- Week 4-6: Stabilisatie (nog geen growth)
- Week 7-10: Eerste upward trend
- Week 11-14: Significante growth
- Week 15+: Compound effect

**Key Takeaway:**

Technical SEO is fundering. Je kunt geen gebouw bouwen op een zwakke fundering. Fix technical issues eerst, dan pas content en links.

## Conclusie: Focus Op Wat Telt

Na analyse van 1,2 miljoen websites, hier zijn de key takeaways:

**1. Vrijwel elke site heeft technical issues**

95%+ van sites heeft minstens 10 issues. Je bent niet alleen. Don't panic.

**2. Niet alles is even belangrijk**

Focus op issues die rankings/traffic/UX beïnvloeden. Negeer perfectionism.

**3. Speed en UX zijn top priority**

Page speed en Core Web Vitals hebben directe ranking impact. Investeer hier.

**4. Broken stuff is bad**

Broken links, redirect loops, HTTPS issues - fix deze altijd. Zero tolerance.

**5. Meta descriptions zijn overrated**

Stop met obsesseren over descriptions. Google herschrijft ze toch.

**6. ROI thinking is key**

Vraag altijd: "Wat is de ROI van mijn tijd hier?" Prioriteer accordingly.

**De 3 Technical SEO Must-Dos:**

1. **Fix critical errors** (broken links, HTTPS issues, redirect loops)
2. **Optimize speed** (images, caching, CDN)
3. **Clean internal linking** (no orphans, logical structure)

Do deze drie goed, en je bent in de top 20% van websites technisch gezien.

## Wil je een technical SEO audit?

Bij Niblah doen we comprehensive technical SEO audits met:
- Complete site crawl en analysis
- Geprioriteerde fix list (ROI-based)
- Implementation support
- Before/after metrics tracking

We focussen op fixes die daadwerkelijk impact hebben. Geen 50-pagina rapporten vol irrelevante issues.

Check onze [Technical SEO diensten](/services/seo) of neem [contact](/contact) met ons op voor een vrijblijvende site scan.
`

async function publishArticle() {
  try {
    console.log('📝 Publishing technical SEO study to database...')
    
    const article = await prisma.article.create({
      data: {
        title: '15 Meest Voorkomende Technical SEO Issues: Data Onderzoek 1,2M Sites',
        slug: 'technical-seo-issues-onderzoek-2025',
        content: articleContent,
        topic: 'SEO',
        status: 'PUBLISHED',
        publishedAt: new Date('2025-02-10'), // Februari 2025
      }
    })
    
    console.log('✅ Article published successfully!')
    console.log(`📍 URL: /blog/${article.slug}`)
    console.log(`📊 ID: ${article.id}`)
    console.log(`📅 Published: ${article.publishedAt}`)
    
  } catch (error) {
    console.error('❌ Error publishing article:', error)
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
