const fs = require('fs')
const path = require('path')

function isValidPostgresUrl(value) {
  return typeof value === 'string' && (value.startsWith('postgres://') || value.startsWith('postgresql://'))
}

function loadDatabaseUrl() {
  if (isValidPostgresUrl(process.env.DATABASE_URL)) return

  const candidates = ['.env.local', '.env']
  for (const filename of candidates) {
    const filePath = path.join(process.cwd(), filename)
    if (!fs.existsSync(filePath)) continue

    const env = fs.readFileSync(filePath, 'utf8')
    const match = env.match(/^\s*DATABASE_URL\s*=\s*"?([^"\n]+)"?\s*$/m)
    if (match) {
      process.env.DATABASE_URL = match[1]
      return
    }
  }

  if (process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL was found but is not a valid Postgres URL (expected postgres:// or postgresql://)')
  }

  throw new Error('DATABASE_URL not found in process.env, .env.local, or .env')
}

loadDatabaseUrl()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const fence = '```'

const article = {
  slug: 'hoe-richten-in-ai-overviews-data-gedreven-strategie',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Hoe je rankt in AI Overviews: Wat echt werkt (gebaseerd op data, niet gissingen)',
  content: `
## AI Overviews domineren het zoeklandschap

Het zoeklandschap verandert razendsnel. AI Overviews verschijnen nu bij ruim 20% van alle zoekopdrachten, en voor vraag-gebaseerde queries loopt dit op tot bijna 60%.

Voor veel marketeers voelt dit als een bedreiging. Onderzoek van Ahrefs toont aan dat AI Overviews kunnen leiden tot een click-through rate daling van 34,5%, terwijl Seer Interactive zelfs dalingen van 61% rapporteert.

Maar hier is de realiteit: AI Overviews zijn niet meer weg te denken uit het zoeklandschap. De keuze is niet óf we ermee aan de slag gaan, maar hoe we ons aanpassen.

Vandaag de dag gaat SERP-zichtbaarheid meer over **brand awareness** en minder over pure traffic.

Als je niet rankt in een AI Overview, word je simpelweg niet gezien. Punt.

## Wat betekent "ranken" in AI Overviews?

Wanneer je pagina geciteerd wordt binnen het AI-search antwoord—meestal bovenaan de SERPs—weer je effectief aan het "ranken" in een AI Overview.

De top geciteerde URL is direct zichtbaar voor zoekers op desktop zonder enige interactie. De top drie URL's worden zichtbaar als gebruikers op "Meer weergeven" klikken, en alle geciteerde bronnen worden zichtbaar als iemand specifiek de volledige lijst uitklapt.

Belangrijk om te begrijpen: deze "rankings" zijn niet definitief. Google's AI-samenvattingen zijn niet-deterministisch, wat betekent dat ze bij elke vernieuwing veranderen—en daarmee ook de URL's die ze citeren.

Hier is wat we weten over ranken in AI Overviews, gebaseerd op data.

## 1. Focus op informatieve, vraag-gebaseerde queries

Uit een analyse van 146 miljoen SERPs blijkt dat AI Overviews triggeren op 21% van alle keywords—maar bepaalde query-types triggeren ze veel vaker.

AI Overviews verschijnen in:
- 57,9% van alle vraag-queries
- 46,4% van queries met 7+ woorden
- 59,8% van "waarom" vragen (reason queries)
- 57,4% van ja/nee vragen (bool queries)
- 47,3% van definitie-queries

Daarnaast is 99,9% van alle AI Overview keywords puur informatief van aard.

**Waarom is dit belangrijk?** Omdat het begrijpen welke queries AI Overviews triggeren je helpt bepalen welke content types en topics je moet targeten.

Als je focus topics bijvoorbeeld allemaal informatief zijn, krijg je meer AI Overview concurrentie—maar heb je ook meer kansen om geciteerd te worden.

**Praktisch advies:**
- Gebruik tools zoals Ahrefs Keywords Explorer om vraag-gebaseerde keywords in jouw industrie te vinden
- Filter op queries met 7+ woorden en informatieve intentie
- Check welke al AI Overviews triggeren
- Hoe meer je deze informatieve, vraag-gebaseerde topics bezit, hoe meer "real estate" je claimt in AI Overviews

## 2. Zorg dat je rankt in traditionele SERPs

Als je niet zichtbaar bent in traditionele zoekresultaten, is de kans klein dat je in AI Overviews verschijnt.

Uit een analyse van 1,9 miljoen AI Overview citaties bleek dat 76% ook rankt in de top 10, met een mediane positie van 2 voor de meest geciteerde URL's.

Dit logisch gezien hoe AI systemen werken. Ze gebruiken Retrieval Augmented Generation (RAG), waarbij ze putten uit zoekmachine indexes om hun trainingsdata aan te vullen.

Als Google je content niet oppikt in traditionele zoekresultaten, doen AI Overviews dat waarschijnlijk ook niet.

**Praktisch advies:**
- Check waar je target pages ranken voor relevante keywords
- Als je buiten de top 10 zit, focus dan eerst op het verbeteren van die rankings
- Monitor je target pages om te zien of je zoekoptimalisaties een effect hebben op je AI Overview zichtbaarheid

## 3. Focus op zoekintentie, niet op content lengte

AI Overviews geven niet om hoe lang je blog is—ze geven erom hoe goed je content de query beantwoordt.

Onderzoek toont een near-zero correlatie (~0,04) tussen woordenaantal en AI citaties.

Je hoofddoel moet zijn om de query van de gebruiker direct en vroeg te beantwoorden—het verbergen van de kern ("burying the lede") vertraagt alleen het semantische begrip van Large Language Models (LLM's).

**Een belangrijk inzicht:** Meer content is niet altijd beter. Uit onderzoek van Dan Petrovic blijkt dat "grounding" (het SERP content dat Google gebruikt als bronmateriaal voor AI Overviews) plateau't rond 540 woorden. Pagina's boven 2000 woorden zien afnemende returns.

Zijn conclusie: *"Density beats length. Focus on being the most relevant source for a query, not the longest."*

**Praktisch advies:**
- Target geen specifiek woordaantal
- Voeg niet zomaar meer content toe om je kansen te vergroten
- Laat het topic en de intentie bepalen hoeveel content je schrijft
- Gebruik tools zoals AlsoAsked of AnswerThePublic om vragen achter short-tail keywords te vinden
- Begrijp wat gebruikers willen weten wanneer ze een query zoeken

## 4. Optimaliseer voor fan-out queries om topics te bezitten

Onderzoek suggereert dat je je ranking in AI Overviews kunt verbeteren door vaker te verschijnen in "fan-out query" SERPs.

Wat is een fan-out query? Volgens Google's officiële documentatie voert het systeem bij elke zoekopdracht waarbij AI wordt getriggerd een "Query fan-out" uit, waarbij één query wordt opgesplitst in meerdere gerelateerde sub-queries.

Dit stelt Gemini—the model achter AI Overviews—in staat om verschillende facetten van een topic te verkennen en passages van meerdere sites te halen om een antwoord te construeren.

**Het cruciale inzicht:** Pagina's die ranken across deze fan-out queries zijn 161% waarschijnlijker om geciteerd te worden in de uiteindelijke AI Overview dan pagina's die alleen ranken voor de primaire zoekterm.

De Spearman correlatie tussen ranken voor fan-out queries en geciteerd worden in een AI Overview is 0,77—zeer sterk dus.

**Conclusie:** Ranken in AI Overviews gaat over het bouwen van diepe topical authority. Focus niet te veel op individuele keywords of geïsoleerde citaten. Schrijf content die meerdere aspecten van je target topic dekt.

**Praktisch advies:**
- Optimaliseer direct voor fan-out queries
- Gebruik tools om Google's fan-out queries te extraheren
- Map fan-out queries aan je bestaande content om topic gaps te vinden
- Bouw autoriteit across zoveel mogelijk gerelateerde queries
- Creëer content clusters rondom gerelateerde thema's, niet alleen single keywords

## 5. Bouw positieve brand mentions across meerdere properties

AI Overviews geven de voorkeur aan merken met wijdverspreide erkenning across artikelen, video's en forums op het web.

Dit is waar "surround sound SEO" toe doet—het maximaliseren van je "real estate" op hoge-intent zoekresultaat pagina's (SERPs).

Hoe meer properties die jouw brand noemen, hoe meer kans je hebt om genoemd of geciteerd te worden in een AI Overview.

Uit eigen onderzoek blijkt dat **brand mentions de nummer één correlerende factor** zijn met AI Overview zichtbaarheid.

**Hoe bouw je proactief off-site brand mentions?**

**Outreach voor mentions in "best lists"**
Google AI Overviews geven duidelijk de voorkeur aan "best" posts, waarbij bijna 50% van alle AIO citaties in deze categorie valt.

Maar wees selectief wanneer je outreach doet voor zichtbaarheid op deze lijsten. Bied waar possible schrijvers een demo of kortlopende trial (volledig gedocumenteerd) aan zodat ze een eerlijke review kunnen geven.

In plaats van het pitchen van je brand voor bestaande artikelen, target authoritatieve sites in jouw niche die nog geen "best X producten" artikel hebben geschreven.

**Partner met YouTube creators voor product features**
YouTube mentions tonen de sterkste correlatie met AI Overview zichtbaarheid. Dit logisch aangezien YouTube het nummer één geciteerde domein is in AI Overviews.

**Hoe bouw je partnerships op YouTube:**
- Zoek naar kanalen die tutorials, vergelijkingen of educatieve content produceren waar je product natuurlijk in past
- Pitch een specifiek video idee dat hun audience dient—niet alleen een verzoek om een review
- Bied early access aan features, exclusieve data, of een grondige demo

Belangrijk: vind YouTubers die al verschijnen in AI Overviews. Als ze jouw brand al noemen—is dat nog beter!

## 6. Laat je noemen op authoritatieve, sterk gelinkte pagina's

Uit een analyse van de top 50 websites genoemd across 76,7 miljoen AI Overviews bleek een sterke correlatie (0,70) tussen genoemd worden op sterk gelinkte pagina's en AI Overview zichtbaarheid.

Pagina's die andere websites de moeite van het linken waard vinden dragen meer gewicht—wanneer je brand verschijnt op deze authoritatieve bronnen, zijn AI Overviews significant waarschijnlijker om je te noemen.

De sleutel is het verdienen van mentions op pagina's die al sterke backlinkprofielen hebben, niet zomaar eender welke mention.

**Praktisch advies:**
- Gebruik "Link intersect" tools om high-authority pagina's in jouw industrie te vinden die competitors noemen maar jou niet
- Pitch guest contributions, bied expert quotes aan, of creëer resources die andere sites graag zullen noemen op hun top pages

## 7. Optimaliseer je content met structured data

Er is wijdverspreid geloof dat structured data je kan helpen vaker te verschijnen in AI search. Het is echter nog onduidelijk in hoeverre schema wordt herkend door Google's AI model, Gemini.

LLMs converteren woorden tijdens training naar numerieke representaties, waardoor de schema markup binnen content essentieel gerandomiseerd wordt.

Daarnaast kunnen veel AI crawlers geen schema data benaderen als het client-side rendered is (bijvoorbeeld via Javascript)—zelfs hoewel veel sites op deze setup vertrouwen.

Maar structured data wordt nog steeds gezegd om een indirecte impact te hebben op AI zoek zichtbaarheid.

Tijdens de Google Search Central Live conferentie bevestigde Senior Search Analyst John Mueller expliciet dat structured data cruciaal is voor AI search.

Dit komt doordat AI zichtbaarheid hingeert op zoek zichtbaarheid, vanwege het RAG proces (retrieval augmented generation).

Anders dan AI crawlers, wordt structured data veel beter afgehandeld door Google's search engine bots. Het is ook cruciaal voor zoek zichtbaarheid, aangezien het bijdraagt aan de knowledge graphs waar zoekmachines op gebouwd zijn.

Met andere woorden: structured data betekent dat je waarschijnlijker wordt opgenomen in de SERPs, wat je vervolgens in de selectie pool brengt voor AI Overviews tijdens RAG.

Hoewel we geen definitief bewijs hebben dat schema markup helpt ranken in AI Overviews, hebben zowel Google als Microsoft bevestigd dat structured data helpt AI systemen content correct interpreteren.

**Praktisch advies:**
- Implementeer relevante schema types zoals Article, HowTo, en FAQPage
- Dit is een laag-risque manier om de machine leesbaarheid van je content voor AI systemen potentieel te verbeteren
- Gebruik tools zoals de Schema Validator of Google's Rich Results Test om je bestaande schema markup te checken
- Doe een volledige schema audit van je content via site audit tools

## Conclusie

AI Overviews gaan niet meer weg, en de regels voor ranken worden nog geschreven.

Elke strategie die we behandeld hebben—van het bouwen van topical authority tot beter matchen van searcher intentie—is gebaseerd op analyse van miljoenen AI responses, vertrouwde third-party research, en directe guidance van Google, niet speculatie.

Begin met topic-level optimalisatie en echte brand mentions, en breng dan de technische verbeteringen in fasen aan.

**Wil je hulp bij het optimaliseren voor AI Overviews?**

Bij Niblah helpen we bedrijven met:
- AI Overview strategie en implementatie
- Content optimalisatie voor fan-out queries
- Brand mention campagnes en outreach
- Technical SEO en structured data audits

[Neem contact op](/work-with-me) om te bespreken hoe we jou kunnen helpen ranken in de AI-toekomst van zoek.
`.trim(),
  translations: {
    en: {
      title: 'How to Rank in AI Overviews: What Actually Works (Data-Driven Insights)',
      topic: 'SEO',
      metaTitle: 'Rank in AI Overviews | Data-Driven SEO Guide',
      metaDescription: 'Learn what actually works to rank in Google AI Overviews based on real data analysis. Discover proven strategies for AI search optimization from Niblah.',
      content: `
## AI Overviews are dominating the search landscape

The search landscape is changing rapidly. AI Overviews now appear for over 20% of all searches, and for question-based queries, this rises to nearly 60%.

For many marketers, this feels like a threat. Research from Ahrefs shows that AI Overviews can lead to a 34.5% drop in click-through rates, while Seer Interactive reports drops as high as 61%.

But here's the reality: AI Overviews are here to stay in the search landscape. The choice isn't whether we engage with them, but how we adapt.

Today, SERP visibility is more about **brand awareness** and less about pure traffic.

If you don't rank in an AI Overview, you simply don't get seen. Period.

## What does "ranking" in AI Overviews mean?

When your page is cited within the AI search response—usually at the top of the SERPs—you're effectively "ranking" in an AI Overview.

The top cited URL is directly visible to searchers on desktop without any interaction. The top three URLs become visible when users click "Show more", and all cited sources become visible when someone specifically expands the full list.

Important to understand: these "rankings" aren't final. Google's AI summaries are non-deterministic, meaning they change with every refresh—and so do the URLs they cite.

Here's what we know about ranking in AI Overviews, based on data.

## 1. Focus on informational, question-based queries

An analysis of 146 million SERPs shows that AI Overviews trigger on 21% of all keywords—but certain query types trigger them much more often.

AI Overviews appear in:
- 57.9% of all question queries
- 46.4% of queries with 7+ words
- 59.8% of "why" questions (reason queries)
- 57.4% of yes/no questions (bool queries)
- 47.3% of definition queries

Additionally, 99.9% of all AI Overview keywords are purely informational in nature.

**Why is this important?** Because understanding which queries trigger AI Overviews helps you determine which content types and topics to target.

If your focus topics are all informational, you'll face more AI Overview competition—but you'll also have more opportunities to get cited.

**Practical advice:**
- Use tools like Ahrefs Keywords Explorer to find question-based keywords in your industry
- Filter for queries with 7+ words and informational intent
- Check which already trigger AI Overviews
- The more you own these informational, question-based topics, the more real estate you claim in AI Overviews

## 2. Make sure you rank in traditional SERPs

If you're not visible in traditional search results, you're unlikely to appear in AI Overviews.

Analysis of 1.9 million AI Overview citations found that 76% also rank in the top 10, with the top cited URLs having a median position of 2.

This makes sense given how AI systems work. They use Retrieval Augmented Generation (RAG), pulling from search engine indexes to supplement their training data.

If Google doesn't pick up your content in traditional search results, AI Overviews likely won't either.

**Practical advice:**
- Check where your target pages rank for relevant keywords
- If you're sitting outside the top 10, focus on improving those rankings first
- Monitor your target pages to see if your search optimizations have an effect on your AI Overview visibility

## 3. Focus on search intent, not content length

AI Overviews don't care how long your blog is—they care how well your content answers the query.

Research shows near-zero correlation (~0.04) between word count and AI citations.

Your main goal should be to answer the user's query directly and early—burying the lede only delays a Large Language Model's (LLM's) semantic understanding of your content.

**An important insight:** More content isn't always better. Research from Dan Petrovic shows that "grounding" (the SERP content Google uses as source material for AI Overviews) plateaus at around 540 words. Pages over 2,000 words see diminishing returns.

His conclusion: *"Density beats length. Focus on being the most relevant source for a query, not the longest."*

**Practical advice:**
- Don't target a specific word count
- Don't just add more content to hedge your bets
- Let the topic and intent dictate how much content you write
- Use tools like AlsoAsked or AnswerThePublic to find questions behind short-tail keywords
- Understand what users want to know when they search a query

## 4. Optimize for fan-out queries to own topics

Research suggests you can improve your ranking in AI Overviews by showing up more often in "fan-out query" SERPs.

What is a fan-out query? According to Google's official documentation, whenever a user searches and AI is triggered, the system performs a "Query fan-out", breaking a single query into multiple related sub-queries.

This enables Gemini—the model behind AI Overviews—to explore different facets of a topic and retrieve passages from multiple sites to construct an answer.

**The crucial insight:** Pages that rank across these fan-out queries are 161% more likely to be cited in the final AI Overview than pages that only rank for the primary search term.

The Spearman correlation between ranking for fan-out queries and being cited in an AI Overview is 0.77—very strong.

**Conclusion:** Ranking in AI Overviews is about building deep topical authority. Don't over-focus on individual keywords or isolated citations. Write content that covers multiple aspects of your target topic.

**Practical advice:**
- Optimize directly for fan-out queries
- Use tools to extract Google's fan-out queries
- Map fan-out queries to your existing content to find topic gaps
- Build authority across as many related queries as possible
- Create content clusters around related themes, not just single keywords

## 5. Build positive brand mentions across multiple properties

AI Overviews favor brands with widespread recognition across articles, videos, and forums across the web.

This is why "surround sound SEO" matters—maximizing your "real estate" on high-intent search results pages (SERPs).

The more properties referencing your brand, the more chance you have of being mentioned or cited in an AI Overview.

Own research shows that **brand mentions are the number one correlating factor** with AI Overview visibility.

**How can you proactively build off-site brand mentions?**

**Outreach for mentions in "best lists"**
Google AI Overviews clearly favor "best" posts, with nearly 50% of all AIO citations falling into this category.

But be selective when doing outreach for visibility on these lists. When possible, offer writers a demo or short-term trial (fully disclosed) so they can give an honest review.

Instead of pitching your brand for existing articles, target authoritative sites in your niche that haven't written a "best X products" article yet.

**Partner with YouTube creators for product features**
YouTube mentions show the strongest correlation with AI Overview visibility. This makes sense as YouTube is the number one cited domain in AI Overviews.

**How to build partnerships on YouTube:**
- Look for channels producing tutorials, comparisons, or educational content where your product naturally fits
- Pitch a specific video idea that serves their audience—not just a request for a review
- Offer early access to features, exclusive data, or a thorough demo

Important: find YouTubers that already appear in AI Overviews. If they mention your brand—even better!

## 6. Get mentioned on authoritative, highly-linked pages

Analysis of the top 50 websites mentioned across 76.7 million AI Overviews found a strong correlation (0.70) between being mentioned on highly-linked pages and AI Overview visibility.

Pages that other websites deem worthy of linking to carry more weight—when your brand appears on these authoritative sources, AI Overviews are significantly more likely to mention you.

The key is earning mentions on pages that already have strong backlink profiles, not just any mention.

**Practical advice:**
- Use "Link intersect" tools to find high-authority pages in your industry that mention competitors but not you
- Pitch guest contributions, offer expert quotes, or create resources that other sites will be keen to mention on their top pages

## 7. Optimize your content with structured data

There's a widely held belief that structured data can help you show up more often in AI search. However, the jury is still out on the extent to which schema is recognized by Google's AI model, Gemini.

LLMs turn words into numerical representations during training, so the schema markup within content essentially gets randomized.

Additionally, many AI crawlers can't access schema data if it's client-side rendered (e.g., via Javascript)—even though many sites rely on this setup.

But structured data is still said to have an indirect impact on AI search visibility.

During the Google Search Central Live conference, Senior Search Analyst John Mueller explicitly confirmed that structured data is critical for AI search.

This is because AI visibility hinges on search visibility, due to the RAG process (retrieval augmented generation).

Unlike AI crawlers, structured data is much better handled by Google's search engine bots. It's also crucial for search visibility, since it contributes to the knowledge graphs that search engines are built on.

In other words: structured data means you're more likely to be included in the SERPs, which in turn puts you in the selection pool for AI Overviews during RAG.

While we don't have definitive proof that schema markup helps you rank in AI Overviews, both Google and Microsoft have confirmed that structured data helps AI systems interpret content correctly.

**Practical advice:**
- Implement relevant schema types like Article, HowTo, and FAQPage
- This is a low-risk way to potentially improve the machine readability of your content for AI systems
- Use tools like the Schema Validator or Google's Rich Results Test to check your existing schema markup
- Do a full schema audit of your content via site audit tools

## Conclusion

AI Overviews aren't going anywhere, and the rules for ranking in them are still being written.

Every strategy we've covered—from building topical authority to better matching searcher intent—is grounded in analysis of millions of AI responses, trusted third-party research, and direct guidance from Google, not speculation.

Start with topic-level optimization and genuine brand mentions, then layer in the technical improvements as you go.

**Need help optimizing for AI Overviews?**

At Niblah, we help companies with:
- AI Overview strategy and implementation
- Content optimization for fan-out queries
- Brand mention campaigns and outreach
- Technical SEO and structured data audits

[Get in touch](/work-with-me) to discuss how we can help you rank in the AI future of search.
`.trim(),
    },
    de: {
      title: 'In AI Overviews ranken: Was wirklich funktioniert (datenbasierte Erkenntnisse)',
      topic: 'SEO',
      metaTitle: 'In AI Overviews ranken | datengetriebene SEO-Anleitung',
      metaDescription: 'Erfahren Sie, was wirklich funktioniert, um in Google AI Overviews zu ranken, basierend auf echter Datenanalyse. Entdecken Sie bewährte Strategien für AI-Suche-Optimierung von Niblah.',
      content: `
## AI Overviews dominieren das Suchlandschaft

Das Suchlandschaft verändert sich rasend schnell. AI Overviews erscheinen nun bei über 20% aller Suchanfragen, und bei fragebasierten Queries steigt dies auf fast 60%.

Für viele Marketer fühlt sich das wie eine Bedrohung an. Forschung von Ahrefs zeigt, dass AI Overviews zu einem Rückgang der Click-Through-Rate von 34,5% führen können, während Seer Interactive sogar Rückgänge bis zu 61% berichtet.

Aber hier ist die Realität: AI Overviews sind aus dem Suchlandschaft nicht mehr wegzudenken. Die Wahl ist nicht, ob wir uns damit beschäftigen, sondern wie wir uns anpassen.

Heute geht SERP-Sichtbarkeit mehr über **Markenbekanntheit** und weniger um reinen Traffic.

Wenn Sie nicht in einem AI Overview ranken, werden Sie einfach nicht gesehen. Punkt.

## Was bedeutet "ranken" in AI Overviews?

Wenn Ihre Seite innerhalb der AI-Suchantwort zitiert wird—meistens oben auf den SERPs—ranken Sie effektiv in einem AI Overview.

Die top-zitierte URL ist für Sucher auf Desktop ohne Interaktion direkt sichtbar. Die Top-3-URLs werden sichtbar, wenn Benutzer auf "Mehr anzeigen" klicken, und alle zitierten Quellen werden sichtbar, wenn jemand die vollständige Liste erweitert.

Wichtig zu verstehen: Diese "Rankings" sind nicht final. Googles KI-Zusammenfassungen sind nicht-deterministisch, was bedeutet, dass sie sich bei jeder Aktualisierung ändern—und damit auch die URLs, die sie zitieren.

Hier ist, was wir über das Ranken in AI Overviews basierend auf Daten wissen.

## 1. Fokus auf informierende, fragebasierte Queries

Eine Analyse von 146 Millionen SERPs zeigt, dass AI Overviews bei 21% aller Keywords ausgelöst werden—aber bestimmte Query-Typen lösen sie viel häufiger aus.

AI Overviews erscheinen in:
- 57,9% aller Fragen-Queries
- 46,4% der Queries mit 7+ Wörtern
- 59,8% der "warum"-Fragen (Reason-Queries)
- 57,4% der Ja/Nein-Fragen (Bool-Queries)
- 47,3% der Definitions-Queries

Darüber hinaus sind 99,9% aller AI Overview Keywords rein informeller Natur.

**Warum ist das wichtig?** Weil das Verständnis, welche Queries AI Overviews auslösen, Ihnen hilft zu bestimmen, welche Content-Typen und Topics Sie targeten sollten.

Wenn Ihre Fokus-Themen alle informativ sind, erhalten Sie mehr AI Overview-Konkurrenz—aber Sie haben auch mehr Möglichkeiten, zitiert zu werden.

**Praktischer Rat:**
- Verwenden Sie Tools wie Ahrefs Keywords Explorer, um fragebasierte Keywords in Ihrer Branche zu finden
- Filtern Sie nach Queries mit 7+ Wörtern und informeller Intention
- Überprüfen Sie, welche bereits AI Overviews auslösen
- Je mehr Sie diese informativen, fragebasierten Topics besitzen, desto mehr "Real Estate" beanspruchen Sie in AI Overviews

## 2. Stellen Sie sicher, dass Sie in traditionellen SERPs ranken

Wenn Sie nicht im traditionellen Suchergebnissen sichtbar sind, ist die Wahrscheinlichkeit gering, dass Sie in AI Overviews erscheinen.

Eine Analyse von 1,9 Millionen AI Overview-Zitaten zeigt, dass 76% auch in den Top 10 ranken, wobei die top-zitierten URLs eine_medianposition von 2 haben.

Das ist sinnvoll gegeben wie AI-Systeme arbeiten. Sie verwenden Retrieval Augmented Generation (RAG), wobei sie aus Suchmaschinen-Indices ziehen, um ihre Trainingsdaten zu ergänzen.

Wenn Google Ihre Content nicht in traditionellen Suchergebnissen aufnimmt, werden AI Overviews das wahrscheinlich auch nicht tun.

**Praktischer Rat:**
- Überprüfen Sie, wo Ihre Target-Seiten für relevante Keywords ranken
- Wenn Sie außerhalb der Top 10 liegen, konzentrieren Sie sich zuerst auf die Verbesserung dieser Rankings
- Überwachen Sie Ihre Target-Seiten, um zu sehen, ob Ihre Suchoptimierungen Auswirkungen auf Ihre AI-Overview-Sichtbarkeit haben

## 3. Fokus auf Suchintention, nicht Content-Länge

AI Overviews interessieren sich nicht dafür, wie lang Ihr Blog ist—sie interessieren sich dafür, wie gut Ihre Content die Query beantwortet.

Forschung zeigt eine nahezu Null-Korrelation (~0,04) zwischen Wortanzahl und AI-Zitaten.

Ihr Hauptziel sollte es sein, die Query des Benutzers direkt und früh zu beantworten—das Verbergen der Kerninformation ("burying the lede") verzögert nur das semantische Verständnis von Large Language Models (LLMs).

**Eine wichtige Erkenntnis:** Mehr Content ist nicht immer besser. Forschung von Dan Petrovic zeigt, dass "Grounding" (die SERP-Content, die Google als Quellmaterial für AI Overviews verwendet) bei etwa 540 Wörtern plateau't. Seiten über 2.000 Wörter sehen abnehmende Returns.

Seine Schlussfolgerung: *"Density schlägt Länge. Fokus darauf, die relevanteste Quelle für eine Query zu sein, nicht die längste."*

**Praktischer Rat:**
- Targeten Sie keine bestimmte Wortanzahl
- Fügen Sie nicht einfach mehr Content hinzu, um Ihre Chancen zu erhöhen
- Lassen Sie das Topic und die Intention diktieren, wie viel Content Sie schreiben
- Verwenden Sie Tools wie AlsoAsked oder AnswerThePublic, um Fragen hinter Short-Tail-Keywords zu finden
- Verstehen Sie, was Benutzer wissen möchten, wenn sie eine Query suchen

## 4. Optimieren Sie für Fan-Out-Queries, um Topics zu besitzen

Forschung schlägt vor, dass Sie Ihr Ranking in AI Overviews verbessern können, indem Sie häufiger in "Fan-Out-Query"-SERPs erscheinen.

Was ist eine Fan-Out-Query? Laut Googles offizieller Dokumentation führt das System, wann immer ein Benutzer sucht und AI ausgelöst wird, ein "Query Fan-Out" aus, wobei eine einzelne Query in mehrere verwandte Sub-Queries aufgeteilt wird.

Dies ermöglicht Gemini—dem Modell hinter AI Overviews—verschiedene Facetten eines Topics zu erkunden und Passagen von mehreren Sites abzurufen, um eine Antwort zu konstruieren.

**Die entscheidende Erkenntnis:** Seiten, die über diese Fan-Out-Queries hinweg ranken, sind 161% wahrscheinlicher, im endgültigen AI Overview zitiert zu werden als Seiten, die nur für den primären Suchbegriff ranken.

Die Spearman-Korrelation zwischen dem Ranken für Fan-Out-Queries und dem Zitiertwerden in einem AI Overview beträgt 0,77—sehr stark.

**Fazit:** Ranken in AI Overviews geht um den Aufbau tiefer Themenautorität. Überkonzentrieren Sie sich nicht auf individuelle Keywords oder isolierte Zitate. Schreiben Sie Content, das mehrere Aspekte Ihres Target-Themas abdeckt.

**Praktischer Rat:**
- Optimieren Sie direkt für Fan-Out-Queries
- Verwenden Sie Tools, um Googles Fan-Out-Queries zu extrahieren
- Mapen Sie Fan-Out-Queries zu Ihrer bestehenden Content, um Topic-Gaps zu finden
- Bauen Sie Autorität über so viele verwandte Queries wie möglich auf
- Erstellen Sie Content-Clusters rund um verwandte Themen, nicht nur einzelne Keywords

## 5. Bauen Sie positive Markenmentions across mehrere Properties auf

AI Overviews bevorzugen Marken mit weitreichender Anerkennung über Artikel, Videos und Foren im Web.

Deshalb matters "Surround Sound SEO"—das Maximieren Ihres "Real Estate" auf High-Intent-Suchergebnisseiten (SERPs).

Je mehr Properties, die auf Ihre Brand verweisen, desto mehr Chance haben Sie, in einem AI Overview erwähnt oder zitiert zu werden.

Eigene Forschung zeigt, dass **Markenmentions der Nummer-eins-Korrelationsfaktor** mit AI-Overview-Sichtbarkeit sind.

**Wie können Sie proaktiv Off-Site-Markenmentions aufbauen?**

**Outreach für Mentions in "Bestenlisten"**
Google AI Overviews bevorzugen klar "Best"-Posts, wobei fast 50% aller AIO-Zitate in diese Kategorie fallen.

Aber seien Sie selektiv, wenn Sie Outreach für Sichtbarkeit auf diesen Listen durchführen. Bieten Sie wenn möglich Schriftstellern eine Demo oder kurzfristige Testphase (vollständig offengelegt) an, damit sie eine ehrliche Review geben können.

Anstatt Ihre Brand für bestehende Artikel zu pitchen, targeten Sie authoritativen Sites in Ihrer Nische, die noch keinen "Beste X-Produkte"-Artikel geschrieben haben.

**Partner Sie mit YouTube-Creators für Produkt-Features**
YouTube-Mentions zeigen die stärkste Korrelation mit AI-Overview-Sichtbarkeit. Das macht Sinn, da YouTube die Nummer-eins-zitierte Domain in AI Overviews ist.

**Wie Partnerschaften auf YouTube aufbauen:**
- Suchen Sie nach Kanälen, die Tutorials, Vergleiche oder educative Content produzieren, wo Ihr Produkt natürlich passt
- Pitchen Sie eine spezifische Video-Idee, die ihr Audience dient—nicht nur eine Bitte um eine Review
- Bieten Sie frühzeitigen Zugang zu Features, exklusive Daten oder eine gründliche Demo

Wichtig: Finden Sie YouTuber, die bereits in AI Overviews erscheinen. Wenn sie Ihre Brand erwähnen—umso besser!

## 6. Lassen Sie sich auf authoritativen, stark verlinkten Seiten erwähnen

Eine Analyse der Top 50-Websites, die in 76,7 Millionen AI Overviews erwähnt wurden, fand eine starke Korrelation (0,70) zwischen dem Erwähntwerden auf stark verlinkten Seiten und AI-Overview-Sichtbarkeit.

Seiten, die andere Websites für linkenswert halten, tragen mehr Gewicht—wenn Ihre Brand auf diesen authoritativen Quellen erscheint, sind AI Overviews signifikant wahrscheinlicher, Sie zu erwähnen.

Der Schlüssel ist das Verdienen von Mentions auf Seiten, die bereits starke Backlink-Profile haben, nicht nur irgendeine Mention.

**Praktischer Rat:**
- Verwenden Sie "Link Intersect"-Tools, um hochauthoritativen Seiten in Ihrer Industrie zu finden, die Competitors erwähnen, aber Sie nicht
- Pitchen Sie Guest-Contributions, bieten Sie Expert-Zitate an oder erstellen Sie Ressourcen, die andere Sites gerne auf ihren Top-Seiten erwähnen werden

## 7. Optimieren Sie Ihre Content mit strukturierten Daten

Es gibt eine weitverbreitete Überzeugung, dass strukturierte Daten Ihnen helfen können, häufiger in AI-Suche zu erscheinen. Allerdings ist die Jury noch hinaus, in welchem Ausmaß Schema von Googles AI-Modell, Gemini, erkannt wird.

LLMs verwandeln Wörter während des Trainings in numerische Repräsentationen, sodass das Schema-Markup innerhalb Content im Wesentlichen randomisiert wird.

Darüber hinaus können viele AI-Crawler nicht auf Schema-Daten zugreifen, wenn es client-side gerendert ist (z.B. via Javascript)—auch wenn viele Sites auf diesem Setup vertrauen.

Aber strukturierte Daten werden immer noch gesagt, einen indirekten Einfluss auf AI-Suche-Sichtbarkeit zu haben.

Während der Google Search Central Live-Konferenz bestätigte Senior Search Analyst John Mueller explizit, dass strukturierte Daten kritisch für AI-Suche sind.

Dies liegt daran, dass AI-Sichtbarkeit von Suchsichtbarkeit abhängt, aufgrund des RAG-Prozesses (Retrieval Augmented Generation).

Anders als AI-Crawler werden strukturierte Daten viel besser von Googles Suchmaschinen-Bots gehandhabt. Sie sind auch crucial für Suchsichtbarkeit, da sie zu den Knowledge Graphs beitragen, auf denen Suchmaschinen aufgebaut sind.

Mit anderen Worten: Strukturierte Daten bedeuten, dass Sie wahrscheinlicher in die SERPs aufgenommen werden, was Sie wiederum in den Auswahl-Pool für AI Overviews während RAG bringt.

Während wir keinen definitiven Beweis haben, dass Schema-Markup hilft, in AI Overviews zu ranken, haben sowohl Google als auch Microsoft bestätigt, dass strukturierte Daten AI-Systemen helfen, Content korrekt zu interpretieren.

**Praktischer Rat:**
- Implementieren Sie relevante Schema-Typen wie Article, HowTo und FAQPage
- Dies ist eine Low-Risk-Methode, um die Maschinenlesbarkeit Ihrer Content für AI-Systeme potenziell zu verbessern
- Verwenden Sie Tools wie den Schema Validator oder Googles Rich Results Test, um Ihr bestehendes Schema-Markup zu überprüfen
- Führen Sie ein vollständiges Schema-Audit Ihrer Content über Site-Audit-Tools durch

## Fazit

AI Overviews gehen nicht weg, und die Regeln für das Ranken werden noch geschrieben.

Jede Strategie, die wir behandelt haben—vom Aufbau von Themenautorität bis zum besseren Matchen von Sucher-Intention—basiert auf der Analyse von Millionen AI-Antworten, vertrauenswürdiger Drittanbieter-Forschung und direkter Guidance von Google, nicht Spekulation.

Beginnen Sie mit Topic-Level-Optimierung und echten Markenmentions, und bringen Sie dann die technischen Verbesserungen schrittweise ein.

**Benötigen Sie Hilfe bei der Optimierung für AI Overviews?**

Bei Niblah helfen wir Unternehmen mit:
- AI-Overview-Strategie und -Implementierung
- Content-Optimierung für Fan-Out-Queries
- Markenmention-Kampagnen und Outreach
- Technical SEO und strukturierte Daten-Audits

[Kontaktieren Sie uns](/work-with-me), um zu besprechen, wie wir Ihnen helfen können, in der AI-Zukunft der Suche zu ranken.
`.trim(),
    },
    sv: {
      title: 'Hur du rankar i AI Overviews: Vad som faktiskt fungerar (datadrivna insikter)',
      topic: 'SEO',
      metaTitle: 'Ranka i AI Overviews | datadriven SEO-guide',
      metaDescription: 'Lär dig vad som faktiskt fungerar för att ranka i Google AI Overviews baserat på riktig dataanalys. Upptäck bevisade strategier för AI-sökoptimering från Niblah.',
      content: `
## AI Overviews dominerar söklandskapet

Söklandskapet förändras snabbt. AI Overviews visas nu för över 20% av alla sökningar, och för frågebaserade queries ökar detta till nästan 60%.

För många marknadsförare känns detta som ett hot. Forskning från Ahrefs visar att AI Overviews kan leda till en minskning av klick-through rate på 34,5%, medan Seer Interactive rapporterar minskningar på upp till 61%.

Men här är verkligheten: AI Overviews är här för att stanna i söklandskapet. Valet är inte om vi engagerar oss i dem, utan hur vi anpassar oss.

Idag handlar SERP-synlighet mer om **varumärkesmedvetenhet** och mindre om ren trafik.

Om du inte rankar i ett AI Overview blir du helt enkelt inte sedd. Punkt.

## Vad betyder "ranka" i AI Overviews?

När din sida citeras inuti AI-svaret—vanligtvis högst upp på SERPs—rankar du effektivt i ett AI Overview.

Den topp-citerade URL:en är direkt synlig för sökare på desktop utan någon interaktion. De tre översta URL:erna blir synliga när användare klickar på "Visa mer", och alla citerade källor blir synliga när någon specifikt expanderar den fullständiga listan.

Viktigt att förstå: Dessa "rankings" är inte definitiva. Googles AI-sammanfattningar är icke-deterministiska, vilket betyder att de ändras vid varje uppdatering—och därmed även URL:erna som de citerar.

Här är vad vi vet om att ranka i AI Overviews, baserat på data.

## 1. Fokus på informativa, frågebaserade queries

En analys av 146 miljoner SERPs visar att AI Overviews utlöses på 21% av alla keywords—men vissa query-typer utlöser dem mycket oftare.

AI Overviews visas i:
- 57,9% av alla fråga-queries
- 46,4% av queries med 7+ ord
- 59,8% av "varför"-frågor (reason queries)
- 57,4% av ja/nej-frågor (bool queries)
- 47,3% av definitions-queries

Dessutom är 99,9% av alla AI Overview keywords rent informativa till sin natur.

**Varför är detta viktigt?** Eftersom förståelsen av vilka queries som utlöser AI Overviews hjälper dig bestämma vilka content-typer och topics du ska targeta.

Om dina fokus-topics alla är informativa får du mer AI Overview-konkurrens—men du har också fler möjligheter att bli citerad.

**Praktiskt råd:**
- Använd verktyg som Ahrefs Keywords Explorer för att hitta frågebaserade keywords i din bransch
- Filtrera för queries med 7+ ord och informativ intent
- Kolla vilka som redan utlöser AI Overviews
- Ju mer du äger dessa informativa, frågebaserade topics, desto mer "real estate" gör du anspråk på i AI Overviews

## 2. Se till att du rankar i traditionella SERPs

Om du inte är synlig i traditionella sökresultat är det osannolikt att du dyker upp i AI Overviews.

Analys av 1,9 miljoner AI Overview-citationer visar att 76% också rankar i top 10, med topp-citerade URL:er som har en medianposition på 2.

Detta är vettigt med tanke på hur AI-system fungerar. De använder Retrieval Augmented Generation (RAG), där de drar från sökmotor-index för att komplettera sin träningsdata.

Om Google inte plockar upp din content i traditionella sökresultat kommer AI Overviews sannolikt inte heller att göra det.

**Praktiskt råd:**
- Kolla var dina target-sidor rankar för relevanta keywords
- Om du ligger utanför top 10, fokusera först på att förbättra dessa rankings
- Övervaka dina target-sidor för att se om dina sökoptimeringar har en effekt på din AI Overview-synlighet

## 3. Fokus på sökintention, inte content-längd

AI Overviews bryr sig inte om hur lång din blogg är—de bryr sig om hur väl din content svarar mot queryt.

Forskning visar nära-noll korrelation (~0,04) mellan ordantal och AI-citationer.

Ditt huvudmål应该是 att svara på användarens query direkt och tidigt—att "bury the lede" fördröjer bara en Large Language Models (LLMs) semantiska förståelse av din content.

**En viktig insikt:** Mer content är inte alltid bättre. Forskning från Dan Petrovic visar att "grounding" (SERP-content som Google använder som källmaterial för AI Overviews) platåar vid runt 540 ord. Sidor över 2 000 ord ser avtagande avkastning.

Hans slutsats: *"Density slår längd. Fokus på att vara den mest relevanta källan för en query, inte den längsta."*

**Praktiskt råd:**
- Targeta inte ett specifikt ordantal
- Lägg inte bara till mer content för att hedga dina odds
- Låt topic och intention diktera hur mycket content du skriver
- Använd verktyg som AlsoAsked eller AnswerThePublic för att hitta frågor bakom short-tail keywords
- Förstå vad användare vill veta när de söker en query

## 4. Optimera för fan-out-queries för att äga topics

Forskning föreslår att du kan förbättra din ranking i AI Overviews genom att visas oftare i "fan-out query"-SERPs.

Vad är en fan-out query? Enligt Googles officiella dokumentation utför systemet en "Query fan-out" när en användare söker och AI utlöses, vilket bryter en enskild query till flera relaterade sub-queries.

Detta möjliggör för Gemini—modellen bakom AI Overviews—att utforska olika facetter av ett topic och hämta passager från flera webbplatser för att konstruera ett svar.

**Den avgörande insikten:** Sidor som rankar över dessa fan-out-queries är 161% mer sannolika att bli citerade i det slutliga AI Overview än sidor som bara rankar för primära söktermen.

Spearman-korrelationen mellan att ranka för fan-out-queries och bli citerad i ett AI Overview är 0,77—väldigt starkt.

**Slutsats:** Att ranka i AI Overviews handlar om att bygga djup topical authority. Överfokusera inte på individuella keywords eller isolerade citat. Skriv content som täcker flera aspekter av ditt target-topic.

**Praktiskt råd:**
- Optimera direkt för fan-out-queries
- Använd verktyg för att extrahera Googles fan-out-queries
- Mappa fan-out-queries till din befintliga content för att hitta topic-gaps
- Bygg auktoritet över så många relaterade queries som möjligt
- Skapa content-kluster runt relaterade teman, inte bara enskilda keywords

## 5. Bygg positiva varumärkementions över flera egenskaper

AI Overviews föredrar varumärken med utbredd igenkänning över artiklar, videor och forum på webben.

Det är därför "surround sound SEO" matters—maximera din "real estate" på high-intent sökresultatsidor (SERPs).

Ju fler egenskaper som refererar till ditt varumärke, desto mer chans har du att bli nämnd eller citerad i ett AI Overview.

Egen forskning visar att **varumärkementions är nummer ett korrelationsfaktor** med AI Overview-synlighet.

## 6. Bli nämnd på authoritativa, högt länkade sidor

Analys av de 50 bästa webbplatserna som nämns i 76,7 miljoner AI Overviews fann en stark korrelation (0,70) mellan att bli nämnd på högt länkade sidor och AI Overview-synlighet.

Sidor som andra webbplatser anser vara värda att länka till bär mer tyngd—när ditt varumärke visas på dessa authoritativa källor är AI Overviews signifikant mer sannolika att nämna dig.

Nyckeln är att tjäna mentions på sidor som redan har starka backlink-profiler, inte bara vilken mention som helst.

**Praktiskt råd:**
- Använd "Link intersect"-verktyg för att hitta high-authority-sidor i din bransch som nämner competitors men inte dig
- Pitcha guest-bidrag, erbjud expert-citat eller skapa resurser som andra webbplatser kommer att vilja nämna på sina top-sidor

## 7. Optimera din content med strukturerad data

Det finns en utbredd tro att strukturerad data kan hjälpa dig visas oftare i AI-sök. Men juryn är fortfarande ute i vilken utsträckning schema känns igen av Googles AI-modell, Gemini.

LLMs omvandlar ord till numeriska representationer under träning, så schema-markup inuti content blir i huvudsak randomiserad.

Dessutom kan många AI-crawlers inte komma åt schema-data om det är client-side rendered (t.ex. via Javascript)—även om många webbplatser förlitar sig på denna setup.

Men strukturerad data sägs fortfarande ha en indirekt effekt på AI-söksynlighet.

Under Google Search Central Live-konferensen bekräftade Senior Search Analyst John Mueller explicit att strukturerad data är kritisk för AI-sök.

Detta beror på att AI-synlighet hänger på söksynlighet, på grund av RAG-processen (retrieval augmented generation).

Till skillnad från AI-crawlers hanteras strukturerad data mycket bättre av Googles sökmotorbottar. Det är också avgörande för söksynlighet, eftersom det bidrar till de knowledge graphs som sökmotorer bygger på.

Med andra ord: strukturerad data betyder att du är mer sannolik att inkluderas i SERPs, vilket i sin tur sätter dig i urvalspoolen för AI Overviews under RAG.

Medan vi inte har definitivt bevis på att schema-markup hjälper dig ranka i AI Overviews, har både Google och Microsoft bekräftat att strukturerad data hjälper AI-system tolka content korrekt.

**Praktiskt råd:**
- Implementera relevanta schema-typer som Article, HowTo och FAQPage
- Detta är en låg-risk metod för att potentiellt förbättra maskinläsbarheten av din content för AI-system
- Använd verktyg som Schema Validator eller Googles Rich Results Test för att kontrollera din befintliga schema-markup
- Gör ett fullständigt schema-audit av din content via site-audit-verktyg

## Slutsats

AI Overviews försvinner inte, och reglerna för att ranka i dem skrivs fortfarande.

Varje strategi vi täckt—från att bygga topical authority till att bättre matcha sökarintention—är grundad i analys av miljoner AI-svar, betrodd tredjepartsforskning och direkt guidance från Google, inte spekulaton.

Börja med topic-level optimering och genuina varumärkementions, och lägg sedan till tekniska förbättringar allt eftersom.

**Behöver du hjälp med att optimera för AI Overviews?**

På Niblah hjälper vi företag med:
- AI Overview-strategi och implementering
- Content-optimering för fan-out-queries
- Varumärkementions-kampanjer och outreach
- Technical SEO och strukturerad data-audits

[Kontakta oss](/work-with-me) för att diskutera hur vi kan hjälpa dig ranka i AI-framtiden för sök.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('📝 Publishing AI Overviews ranking guide to database...')

    const result = await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        topic: article.topic,
        content: article.content,
        translations: article.translations,
        status: article.status,
        publishedAt: new Date(),
      },
      create: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        topic: article.topic,
        status: article.status,
        translations: article.translations,
        source: 'manual',
        publishedAt: new Date(),
      },
    })

    console.log('✅ Article published successfully!')
    console.log(`📍 URL: /blog/${result.slug}`)
    console.log(`📊 ID: ${result.id}`)
  } catch (error) {
    console.error('❌ Error publishing article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
