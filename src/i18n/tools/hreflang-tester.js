import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Free hreflang tester. Validate hreflang tags for international SEO. Multi-language website checker tool.',
      openGraph: {
        title: 'Hreflang Tester | International SEO Tool',
        description: 'Test hreflang implementation. Validate hreflang tags for multi-language sites.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Validate hreflang tags for international SEO. Multi-language website checker.',
    },
    form: {
      placeholder: 'https://example.com/page',
      button: {
        idle: 'Test Hreflang',
        loading: 'Checking...',
      },
    },
    results: {
      title: 'Hreflang Results',
    },
    sections: {
      essentials: {
        title: 'Hreflang Tags: International SEO Essentials',
        paragraphs: [
          'Hreflang tags are HTML attributes that tell Google which language version of your content to show to users in different regions. Without hreflang, Google might show the English page to Dutch users or the Dutch page to English users - poor UX. This hreflang tester validates your implementation, ensuring Google serves the right language to the right audience. Essential for multi-language websites, international businesses, and region-specific content.',
          'Hreflang syntax: hreflang="en-US" (English for the US), hreflang="nl-NL" (Dutch for the Netherlands), hreflang="en-GB" (English for the UK). Format is language-region code (ISO 639-1 for language, ISO 3166-1 Alpha-2 for country). You can omit the region: hreflang="en" targets all English speakers regardless of location. Include hreflang="x-default" for a fallback - shown when no language match is found. Each page must reference all language versions including itself - reciprocal linking required.',
        ],
        headings: {
          commonErrors: 'Common Hreflang Implementation Errors',
          validationProcess: 'Hreflang Validation Process',
          sitemapsVsHtml: 'Hreflang in Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            'Missing return links - Page A links to Page B but B does not link back to A. Google ignores non-reciprocal hreflang. Incorrect language codes - "nl-BE" is for Belgian Dutch, not "nl-NL". Wrong URL formatting - relative URLs instead of absolute. Linking to 404s or redirected pages. Mixing hreflang methods (HTTP headers + HTML tags + sitemap) inconsistently. This tester catches all these errors. Proper implementation is sensitive - small mistakes invalidate the entire hreflang setup.',
          validationProcess:
            'Test every language version: run each through the hreflang tester. Check that all versions reference each other correctly. Verify language codes are accurate. Confirm URLs are absolute (https://...) not relative (/page). Test that an x-default fallback exists. Use the International Targeting report in Google Search Console - it shows hreflang errors Google detects. Fix errors immediately - invalid hreflang means Google might serve the wrong language to users.',
          sitemapsVsHtml:
            'Three ways to implement hreflang: HTML link tags in the head, HTTP headers, or XML sitemaps. HTML is most common (easy to implement per page). Sitemap method is better for large sites (thousands of pages) - central management. HTTP headers for non-HTML files (PDFs). Never mix methods inconsistently - pick one method and use it consistently. This tester validates HTML implementation; for sitemap hreflang, use a dedicated sitemap validator.',
        },
        links: {
          prefix: 'Use with',
          sitemap: 'sitemap validator',
          between: 'and',
          html: 'HTML checker',
          suffix: '.',
        },
      },
      strategy: {
        title: 'Hreflang Strategy for Different Scenarios',
        intro:
          'Multi-language sites (same language, different regions): Dutch for the Netherlands vs Belgium - both "nl" but different region targeting. Use hreflang="nl-NL" for the Netherlands and hreflang="nl-BE" for Belgium. Differentiate content: pricing in EUR vs local currency, different contact info, region-specific examples. Hreflang ensures Belgian users see the Belgian version and Dutch users see the Netherlands version even though the language is the same.',
        headings: {
          multiRegional: 'Multi-Regional Same Language Content',
          ecommerce: 'E-commerce International Hreflang',
          syndication: 'Hreflang for Content Syndication',
          monitoring: 'Monitoring Hreflang Performance',
        },
        details: {
          multiRegional:
            'English content for the US vs UK vs Australia - same language, different audiences. Use hreflang="en-US", "en-GB", "en-AU". Adapt content: spelling (color vs colour), terminology (truck vs lorry), cultural references, pricing. Without hreflang, Google might show the US version to UK users with wrong pricing or spelling. Proper hreflang targeting ensures a localized experience even when the language is shared.',
          ecommerce:
            'E-commerce with international customers must have hreflang. Product page in English for the US market, translated to Dutch for the NL market, German for the DE market - each version needs hreflang pointing to alternatives. Critical: keep product URL structure consistent across languages. example.com/en/shoes/nike-123 and example.com/nl/schoenen/nike-123 must have hreflang linking them as language variants of the same product. Helps prevent duplicate content issues.',
          syndication:
            'If you publish the same content on multiple domains (company.com and company.co.uk for different markets), use hreflang to connect them. Prevents duplicate content penalties - tells Google: "these are intentionally the same content for different regions, not plagiarism". Each domain implements hreflang pointing to the other domain equivalent page. Requires coordination but is essential for a multi-domain international strategy.',
          monitoring:
            'Google Search Console shows if hreflang is working: check the International Targeting report for errors. Monitor organic traffic per language version - sharp drops can indicate hreflang issues (wrong language served). Review quarterly: do users in the Netherlands get the Dutch version? Check analytics location vs language data. Mismatches suggest hreflang problems. Regular testing with this tool prevents issues from persisting unnoticed.',
        },
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Is hreflang required for multi-language sites?',
            answer:
              'Not technically required but highly recommended. Without hreflang, Google guesses which language version to show - often wrong. Poor UX when an English speaker sees a Dutch page. Plus duplicate content risk - Google may not understand that pages are translations. Hreflang removes ambiguity, ensures the right user experience, and prevents duplicate content penalties.',
          },
          {
            question: 'Do I need hreflang for every language on every page?',
            answer:
              'Yes - every language version must reference all other language versions including itself. If you have EN, NL, DE, FR versions, the English page needs 4 hreflang tags (EN, NL, DE, FR). The Dutch page needs the same. Tedious but required for proper function. Use templates or plugins to auto-generate - manual management is error-prone for 100+ pages x multiple languages.',
          },
          {
            question: 'What is x-default hreflang?',
            answer:
              'x-default is the fallback version shown when the users language or region is not covered. If you have EN and NL versions plus x-default pointing to EN, German users (no DE version) get the EN version. Without x-default, Google picks arbitrarily. Best practice: set x-default to your primary market version or a language selector page.',
          },
          {
            question: 'Can hreflang influence rankings?',
            answer:
              'Indirectly yes. Correct hreflang means better user experience (right language), lower bounce rates, higher engagement - all ranking signals. It also prevents duplicate content confusion. Hreflang itself is not a ranking factor, but proper implementation supports factors that are. Sites with solid hreflang often rank better internationally.',
          },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Gratis hreflang tester. Valideer hreflang tags voor internationale SEO. Meertalige website checker tool.',
      openGraph: {
        title: 'Hreflang Tester | Internationale SEO Tool',
        description: 'Test hreflang implementatie. Valideer hreflang tags voor meertalige sites.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Valideer hreflang tags voor internationale SEO. Meertalige website checker.',
    },
    form: {
      placeholder: 'https://voorbeeld.nl/pagina',
      button: {
        idle: 'Test Hreflang',
        loading: 'Checken...',
      },
    },
    results: {
      title: 'Hreflang Resultaten',
    },
    sections: {
      essentials: {
        title: 'Hreflang Tags: Internationale SEO Basis',
        paragraphs: [
          "Hreflang tags zijn HTML-attributen die Google vertellen welke taalversie van je content te tonen aan gebruikers in verschillende regio's. Zonder hreflang kan Google de Engelse pagina aan Nederlandse gebruikers tonen of andersom - slechte UX. Deze hreflang tester valideert je implementatie, zodat Google de juiste taal aan het juiste publiek serveert. Essentieel voor meertalige websites, internationale bedrijven en content voor verschillende regio's.",
          'Hreflang syntax: hreflang="en-US" (Engels voor VS), hreflang="nl-NL" (Nederlands voor Nederland), hreflang="en-GB" (Engels voor VK). Formaat is taal-regio code (ISO 639-1 voor taal, ISO 3166-1 Alpha-2 voor land). Je kunt de regio weglaten: hreflang="en" target alle Engelstalige gebruikers ongeacht locatie. Voeg hreflang="x-default" toe als fallback - getoond wanneer er geen taal match is. Elke pagina moet naar alle taalversies verwijzen inclusief zichzelf - wederzijdse linking vereist.',
        ],
        headings: {
          commonErrors: 'Veelgemaakte Hreflang Implementatie Fouten',
          validationProcess: 'Hreflang Validatie Proces',
          sitemapsVsHtml: 'Hreflang in Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            "Ontbrekende return links - Pagina A linkt naar pagina B maar B linkt niet terug naar A. Google negeert niet-wederzijdse hreflang. Onjuiste taalcodes - \"nl-BE\" voor Belgisch Nederlands, niet \"nl-NL\". Verkeerde URL opmaak - relatieve URLs in plaats van absolute. Linken naar 404s of redirect pagina's. Hreflang methodes mengen (HTTP headers + HTML tags + sitemap) werkt inconsistent. Deze tester vangt al deze fouten. Correcte implementatie is gevoelig - kleine fouten maken de hele hreflang setup ongeldig.",
          validationProcess:
            'Test elke taalversie: run elke versie door de hreflang tester. Check dat alle versies naar elkaar verwijzen. Verifieer dat taalcodes correct zijn. Controleer dat URLs absoluut zijn (https://...) en niet relatief (/page). Test of er een x-default fallback is. Gebruik het International Targeting rapport in Google Search Console - daar staan hreflang fouten die Google detecteert. Los fouten direct op - ongeldige hreflang betekent dat Google de verkeerde taal kan tonen aan gebruikers.',
          sitemapsVsHtml:
            'Drie manieren om hreflang te implementeren: HTML link tags in de head, HTTP headers, of XML sitemaps. HTML is het meest gebruikt (makkelijk per pagina). Sitemap methode is beter voor grote sites (duizenden paginas) - centraal beheer. HTTP headers voor niet-HTML bestanden (PDFs). Mix methodes niet inconsistent - kies een methode en gebruik die consequent. Deze tester valideert HTML implementatie; voor sitemap hreflang gebruik je een speciale sitemap validator.',
        },
        links: {
          prefix: 'Gebruik met',
          sitemap: 'sitemap validator',
          between: 'en',
          html: 'HTML checker',
          suffix: '.',
        },
      },
      strategy: {
        title: "Hreflang Strategie voor Verschillende Scenario's",
        intro:
          'Meertalige sites (zelfde taal, verschillende regio s): Nederlands voor Nederland vs Belgie - beide "nl" maar andere regio targeting. Gebruik hreflang="nl-NL" voor Nederland, hreflang="nl-BE" voor Belgie. Differentieer content: prijzen in EUR vs lokale valuta, andere contactinfo, regio-specifieke voorbeelden. Hreflang zorgt dat Belgische gebruikers de Belgische versie zien en Nederlandse gebruikers de Nederlandse versie, ook al is de taal hetzelfde.',
        headings: {
          multiRegional: 'Meerdere Regios, Zelfde Taal',
          ecommerce: 'E-commerce Internationale Hreflang',
          syndication: 'Hreflang voor Content Syndicatie',
          monitoring: 'Hreflang Performance Monitoren',
        },
        details: {
          multiRegional:
            'Engelse content voor VS vs VK vs Australie - dezelfde taal, verschillende doelgroepen. Gebruik hreflang="en-US", "en-GB", "en-AU". Pas content aan: spelling (color vs colour), terminologie (truck vs lorry), culturele referenties, prijzen. Zonder hreflang kan Google de VS versie tonen aan UK gebruikers met verkeerde prijzen of spelling. Goede hreflang targeting zorgt voor een lokale ervaring ook als de taal hetzelfde is.',
          ecommerce:
            'E-commerce met internationale klanten moet hreflang hebben. Productpagina in Engels voor VS, vertaald naar Nederlands voor NL, Duits voor DE - elke versie heeft hreflang die naar alternatieven wijst. Cruciaal: houd product URLs consistent in structuur per taal. example.com/en/shoes/nike-123 en example.com/nl/schoenen/nike-123 moeten hreflang hebben die ze als taalvarianten koppelt. Dit helpt duplicate content problemen voorkomen.',
          syndication:
            'Als je dezelfde content op meerdere domeinen publiceert (company.com en company.co.uk voor verschillende markten), gebruik hreflang om ze te koppelen. Voorkomt duplicate content penalties - vertelt Google: "dit is bewust dezelfde content voor verschillende regio s, geen plagiaat". Elk domein implementeert hreflang dat naar de equivalente pagina op het andere domein wijst. Vereist afstemming maar is essentieel voor een multi-domain internationale strategie.',
          monitoring:
            'Google Search Console laat zien of hreflang werkt: check het International Targeting rapport op fouten. Monitor organisch verkeer per taalversie - scherpe dalingen kunnen hreflang issues aangeven (verkeerde taal geserveerd). Review elk kwartaal: krijgen gebruikers in Nederland de Nederlandse versie? Check analytics locatie vs taaldata. Mismatches duiden op hreflang problemen. Regelmatig testen met deze tool voorkomt dat issues onopgemerkt blijven.',
        },
      },
      faq: {
        title: 'Veelgestelde Vragen',
        items: [
          {
            question: 'Is hreflang verplicht voor meertalige sites?',
            answer:
              'Niet technisch verplicht maar sterk aanbevolen. Zonder hreflang raadt Google welke taalversie te tonen - vaak fout. Slechte UX wanneer een Engelstalige gebruiker een Nederlandse pagina krijgt. Plus duplicate content risico - Google begrijpt niet dat paginas vertalingen zijn. Hreflang haalt ambiguiteit weg, zorgt voor optimale gebruikerservaring en voorkomt duplicate content penalties.',
          },
          {
            question: 'Moet ik hreflang voor elke taal op elke pagina zetten?',
            answer:
              'Ja - elke taalversie moet naar alle andere taalversies verwijzen inclusief zichzelf. Als je EN, NL, DE, FR versies hebt, heeft de Engelse pagina 4 hreflang tags nodig (EN, NL, DE, FR). Nederlandse pagina ook. Vervelend maar nodig voor goede werking. Gebruik templates of plugins om automatisch te genereren - handmatig beheren is foutgevoelig bij 100+ paginas x meerdere talen.',
          },
          {
            question: 'Wat is x-default hreflang?',
            answer:
              'x-default is de fallback versie die wordt getoond wanneer de taal of regio van de gebruiker niet is afgedekt. Als je EN en NL versies hebt plus x-default naar EN, krijgen Duitse gebruikers (geen DE versie) de EN versie. Zonder x-default kiest Google willekeurig. Best practice: zet x-default naar je primaire marktversie of een taalkeuze pagina.',
          },
          {
            question: 'Kan hreflang rankings beinvloeden?',
            answer:
              'Indirect wel. Correcte hreflang betekent betere gebruikerservaring (juiste taal), lagere bounce rates, hogere engagement - allemaal ranking signalen. Ook voorkomt het duplicate content verwarring. Hreflang zelf is geen ranking factor, maar goede implementatie ondersteunt factoren die dat wel zijn. Sites met goede hreflang ranken internationaal vaak beter.',
          },
        ],
      },
    },
  },
  de: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Kostenloser hreflang Tester. Validiere hreflang Tags fuer internationales SEO. Multi-language Website Checker Tool.',
      openGraph: {
        title: 'Hreflang Tester | International SEO Tool',
        description: 'Teste hreflang Implementierung. Validiere hreflang Tags fuer mehrsprachige Sites.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Validiere hreflang Tags fuer internationales SEO. Multi-language Website Checker.',
    },
    form: {
      placeholder: 'https://beispiel.de/seite',
      button: {
        idle: 'Hreflang testen',
        loading: 'Pruefen...',
      },
    },
    results: {
      title: 'Hreflang Ergebnisse',
    },
    sections: {
      essentials: {
        title: 'Hreflang Tags: Internationale SEO Grundlagen',
        paragraphs: [
          'Hreflang Tags sind HTML Attribute, die Google sagen, welche Sprachversion deiner Inhalte Nutzern in verschiedenen Regionen gezeigt werden soll. Ohne hreflang kann Google die englische Seite deutschen Nutzern zeigen oder umgekehrt - schlechte UX. Dieser hreflang Tester prueft deine Implementierung und stellt sicher, dass Google die richtige Sprache an die richtige Zielgruppe ausliefert. Essenziell fuer mehrsprachige Websites, internationale Unternehmen und regionenspezifische Inhalte.',
          'Hreflang Syntax: hreflang="en-US" (Englisch fuer die USA), hreflang="nl-NL" (Niederlaendisch fuer die Niederlande), hreflang="en-GB" (Englisch fuer UK). Format ist Sprach-Regionscode (ISO 639-1 fuer Sprache, ISO 3166-1 Alpha-2 fuer Land). Du kannst die Region weglassen: hreflang="en" zielt auf alle Englischsprachigen unabhaengig vom Standort. Fuege hreflang="x-default" als Fallback hinzu - gezeigt, wenn keine Sprachzuordnung gefunden wird. Jede Seite muss auf alle Sprachversionen inklusive sich selbst verweisen - wechselseitiges Linking erforderlich.',
        ],
        headings: {
          commonErrors: 'Haeufige Hreflang Implementierungsfehler',
          validationProcess: 'Hreflang Validierungsprozess',
          sitemapsVsHtml: 'Hreflang in Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            'Fehlende Rueckverweise - Seite A linkt zu Seite B, aber B linkt nicht zu A zurueck. Google ignoriert nicht-reziproke hreflang. Falsche Sprachcodes - "nl-BE" fuer Belgisches Niederlaendisch, nicht "nl-NL". Falsches URL Format - relative URLs statt absolute. Links zu 404s oder weitergeleiteten Seiten. Hreflang Methoden mischen (HTTP Header + HTML Tags + Sitemap) inkonsistent. Dieser Tester findet all diese Fehler. Korrekte Implementierung ist empfindlich - kleine Fehler machen das ganze hreflang Setup ungueltig.',
          validationProcess:
            'Teste jede Sprachversion: fuehre jede Version durch den hreflang Tester. Pruefe, dass alle Versionen sich gegenseitig referenzieren. Verifiziere korrekte Sprachcodes. Bestaetige, dass URLs absolut sind (https://...) und nicht relativ (/page). Teste, dass ein x-default Fallback existiert. Nutze den International Targeting Report in Google Search Console - zeigt hreflang Fehler, die Google erkennt. Behebe Fehler sofort - ungueltiges hreflang bedeutet, dass Google die falsche Sprache zeigen kann.',
          sitemapsVsHtml:
            'Drei Wege hreflang zu implementieren: HTML Link Tags im Head, HTTP Header oder XML Sitemaps. HTML ist am haeufigsten (leicht pro Seite). Sitemap Methode ist besser fuer grosse Sites (tausende Seiten) - zentrales Management. HTTP Header fuer nicht-HTML Dateien (PDFs). Methoden nicht inkonsistent mischen - eine Methode waehlen und konsistent nutzen. Dieser Tester validiert HTML Implementierung; fuer sitemap hreflang nutze einen speziellen sitemap validator.',
        },
        links: {
          prefix: 'Nutze zusammen mit',
          sitemap: 'sitemap validator',
          between: 'und',
          html: 'HTML checker',
          suffix: '.',
        },
      },
      strategy: {
        title: 'Hreflang Strategie fuer verschiedene Szenarien',
        intro:
          'Mehrsprachige Sites (gleiche Sprache, unterschiedliche Regionen): Niederlaendisch fuer Niederlande vs Belgien - beide "nl" aber unterschiedliche Regionenzielung. Nutze hreflang="nl-NL" fuer Niederlande, hreflang="nl-BE" fuer Belgien. Unterscheide Inhalte: Preise in EUR vs lokale Waehrung, andere Kontaktinfos, regionenspezifische Beispiele. Hreflang stellt sicher, dass belgische Nutzer die belgische Version sehen und niederlaendische Nutzer die Niederlande Version, obwohl die Sprache gleich ist.',
        headings: {
          multiRegional: 'Mehrere Regionen, gleiche Sprache',
          ecommerce: 'E-Commerce Internationales Hreflang',
          syndication: 'Hreflang fuer Content Syndication',
          monitoring: 'Hreflang Performance Monitoring',
        },
        details: {
          multiRegional:
            'Englischer Inhalt fuer USA vs UK vs Australien - gleiche Sprache, unterschiedliche Zielgruppen. Nutze hreflang="en-US", "en-GB", "en-AU". Passe Inhalte an: Schreibweise (color vs colour), Terminologie (truck vs lorry), kulturelle Referenzen, Preise. Ohne hreflang kann Google die US Version UK Nutzern mit falschen Preisen oder Schreibweise zeigen. Richtiges hreflang Targeting sorgt fuer eine lokalisierte Experience auch wenn die Sprache gleich ist.',
          ecommerce:
            'E-Commerce mit internationalen Kunden braucht hreflang. Produktseite auf Englisch fuer US Markt, uebersetzt ins Niederlaendische fuer NL Markt, Deutsch fuer DE Markt - jede Version braucht hreflang, das auf Alternativen zeigt. Kritisch: konsistente URL Struktur ueber Sprachen. example.com/en/shoes/nike-123 und example.com/nl/schoenen/nike-123 muessen hreflang haben, das sie als Sprachvarianten des gleichen Produkts verbindet. Hilft Duplicate Content Probleme zu vermeiden.',
          syndication:
            'Wenn du denselben Inhalt auf mehreren Domains veroeffentlichst (company.com und company.co.uk fuer verschiedene Maerkte), nutze hreflang, um sie zu verbinden. Verhindert Duplicate Content Penalties - sagt Google: "das ist absichtlich derselbe Inhalt fuer unterschiedliche Regionen, kein Plagiat". Jede Domain implementiert hreflang und verlinkt auf die entsprechende Seite der anderen Domain. Erfordert Koordination, ist aber essenziell fuer eine Multi-Domain internationale Strategie.',
          monitoring:
            'Google Search Console zeigt, ob hreflang funktioniert: pruefe den International Targeting Report auf Fehler. Beobachte organischen Traffic pro Sprachversion - starke Einbrueche koennen hreflang Probleme anzeigen (falsche Sprache ausgeliefert). Quartalsweise pruefen: bekommen Nutzer in den Niederlanden die niederlaendische Version? Vergleiche Analytics Standort vs Sprachdaten. Abweichungen deuten auf hreflang Probleme hin. Regelmaessige Tests mit diesem Tool verhindern, dass Probleme unbemerkt bleiben.',
        },
      },
      faq: {
        title: 'Haeufige Fragen',
        items: [
          {
            question: 'Ist hreflang Pflicht fuer mehrsprachige Sites?',
            answer:
              'Nicht technisch erforderlich, aber dringend empfohlen. Ohne hreflang raet Google, welche Sprachversion gezeigt wird - oft falsch. Schlechte UX wenn ein englischer Nutzer eine niederlaendische Seite sieht. Plus Duplicate Content Risiko - Google versteht nicht, dass Seiten Uebersetzungen sind. Hreflang beseitigt Ambiguitaet, sorgt fuer bessere User Experience und verhindert Duplicate Content Penalties.',
          },
          {
            question: 'Muss ich hreflang fuer jede Sprache auf jeder Seite setzen?',
            answer:
              'Ja - jede Sprachversion muss auf alle anderen Sprachversionen inklusive sich selbst verweisen. Wenn du EN, NL, DE, FR Versionen hast, braucht die englische Seite 4 hreflang Tags (EN, NL, DE, FR). Die niederlaendische Seite braucht dasselbe. Laestig, aber noetig fuer korrekte Funktion. Nutze Templates oder Plugins, um automatisch zu generieren - manuelles Management ist fehleranfaellig bei 100+ Seiten x mehreren Sprachen.',
          },
          {
            question: 'Was ist x-default hreflang?',
            answer:
              'x-default ist die Fallback Version, die gezeigt wird, wenn die Sprache oder Region des Nutzers nicht abgedeckt ist. Wenn du EN und NL Versionen hast plus x-default auf EN, sehen deutsche Nutzer (keine DE Version) die EN Version. Ohne x-default waehlt Google willkuerlich. Best Practice: x-default auf die Primaer Version oder eine Sprachwahl Seite setzen.',
          },
          {
            question: 'Kann hreflang Rankings beeinflussen?',
            answer:
              'Indirekt ja. Korrektes hreflang bedeutet bessere User Experience (richtige Sprache), niedrigere Bounce Rates, hoehere Engagement - alles Ranking Signale. Es verhindert auch Duplicate Content Verwirrung. Hreflang selbst ist kein Ranking Faktor, aber gute Implementierung unterstuetzt Faktoren, die es sind. Sites mit gutem hreflang ranken international oft besser.',
          },
        ],
      },
    },
  },
  sv: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Gratis hreflang tester. Validera hreflang taggar for internationell SEO. Multi-language website checker tool.',
      openGraph: {
        title: 'Hreflang Tester | International SEO Tool',
        description: 'Testa hreflang implementation. Validera hreflang taggar for multi-language webbplatser.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Validera hreflang taggar for internationell SEO. Multi-language website checker.',
    },
    form: {
      placeholder: 'https://exempel.se/sida',
      button: {
        idle: 'Testa Hreflang',
        loading: 'Kontrollerar...',
      },
    },
    results: {
      title: 'Hreflang Resultat',
    },
    sections: {
      essentials: {
        title: 'Hreflang-taggar: Internationell SEO Essentials',
        paragraphs: [
          'Hreflang-taggar ar HTML-attribut som talar om for Google vilken sprakversion av ditt innehall som ska visas for anvandare i olika regioner. Utan hreflang kan Google visa den engelska sidan for svenska anvandare eller tvartom - dalig UX. Denna hreflang tester validerar din implementation och sakerstaller att Google serverar ratt sprak till ratt publik. Viktigt for flersprakiga webbplatser, internationella foretag och innehall for olika regioner.',
          'Hreflang syntax: hreflang="en-US" (engelska for USA), hreflang="nl-NL" (nederlandska for Nederlander), hreflang="en-GB" (engelska for UK). Format ar sprak-region kod (ISO 639-1 for sprak, ISO 3166-1 Alpha-2 for land). Du kan utelamna region: hreflang="en" riktar sig till alla engelsktalande oavsett plats. Lagga till hreflang="x-default" som fallback - visas nar ingen sprakmatch hittas. Varje sida maste referera till alla sprakversioner inklusive sig sjalv - reciprok lankning kravs.',
        ],
        headings: {
          commonErrors: 'Vanliga Hreflang Implementeringsfel',
          validationProcess: 'Hreflang Valideringsprocess',
          sitemapsVsHtml: 'Hreflang i Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            'Saknade tillbakalankar - Sida A lankar till sida B men B lankar inte tillbaka till A. Google ignorerar icke-reciprok hreflang. Fel sprak-koder - "nl-BE" for belgisk nederlandska, inte "nl-NL". Fel URL-format - relativa URLer istallet for absoluta. Lankar till 404 eller omdirigerade sidor. Blanda hreflang-metoder (HTTP-headers + HTML-taggar + sitemap) inkonsekvent. Denna tester hittar alla dessa fel. Korrekt implementation ar kanslig - sma misstag gor hela hreflang-setupen ogiltig.',
          validationProcess:
            'Testa varje sprakversion: kor varje version genom hreflang-testern. Kontrollera att alla versioner refererar till varandra korrekt. Verifiera att sprak-koder ar korrekta. Bekrafta att URLer ar absoluta (https://...) inte relativa (/page). Testa att en x-default fallback finns. Anvand Google Search Console International Targeting rapport - visar hreflang-fel som Google upptacker. Atgard fel direkt - ogiltig hreflang betyder att Google kan visa fel sprak.',
          sitemapsVsHtml:
            'Tre satt att implementera hreflang: HTML link taggar i head, HTTP headers eller XML sitemaps. HTML ar vanligast (enkelt per sida). Sitemap-metoden ar battre for stora webbplatser (tusentals sidor) - central hantering. HTTP headers for icke-HTML filer (PDFer). Blanda inte metoder inkonsekvent - valj en metod och anvand konsekvent. Denna tester validerar HTML-implementation; for sitemap hreflang, anvand en dedikerad sitemap validator.',
        },
        links: {
          prefix: 'Anvand tillsammans med',
          sitemap: 'sitemap validator',
          between: 'och',
          html: 'HTML checker',
          suffix: '.',
        },
      },
      strategy: {
        title: 'Hreflang Strategi for Olika Scenarier',
        intro:
          'Flersprakiga webbplatser (samma sprak, olika regioner): nederlandska for Nederlander vs Belgien - bada "nl" men olika region targeting. Anvand hreflang="nl-NL" for Nederlander, hreflang="nl-BE" for Belgien. Differentiera innehall: priser i EUR vs lokal valuta, annan kontaktinfo, region-specifika exempel. Hreflang sakerstaller att belgiska anvandare ser den belgiska versionen och nederlandska anvandare ser den nederlandska versionen, trots att spraket ar samma.',
        headings: {
          multiRegional: 'Flera regioner, samma sprak',
          ecommerce: 'E-handel Internationell Hreflang',
          syndication: 'Hreflang for Content Syndication',
          monitoring: 'Overvakning av Hreflang Prestanda',
        },
        details: {
          multiRegional:
            'Engelskt innehall for USA vs UK vs Australien - samma sprak, olika malgrupper. Anvand hreflang="en-US", "en-GB", "en-AU". Anpassa innehall: stavning (color vs colour), terminologi (truck vs lorry), kulturella referenser, priser. Utan hreflang kan Google visa US-versionen for UK-anvandare med fel priser eller stavning. Korrekt hreflang targeting ger lokal upplevelse aven nar spraket delas.',
          ecommerce:
            'E-handel med internationella kunder maste ha hreflang. Produktsida pa engelska for US-marknaden, oversatt till nederlandska for NL-marknaden, tyska for DE-marknaden - varje version maste ha hreflang som pekar pa alternativen. Kritisk: hall produkt-URL-struktur konsekvent over sprak. example.com/en/shoes/nike-123 och example.com/nl/schoenen/nike-123 maste ha hreflang som kopplar dem som sprakvarianter av samma produkt. Hjalper att undvika duplicate content-problem.',
          syndication:
            'Om du publicerar samma innehall pa flera domaner (company.com och company.co.uk for olika marknader), anvand hreflang for att koppla dem. Forhindrar duplicate content penalties - sager till Google: "detta ar avsiktligt samma innehall for olika regioner, inte plagiering". Varje doman implementerar hreflang som pekar till den andra domanens motsvarande sida. Kraver samordning men ar avgorande for en multi-domain internationell strategi.',
          monitoring:
            'Google Search Console visar om hreflang fungerar: kontrollera International Targeting-rapporten for fel. Overvaka organisk trafik per sprakversion - kraftiga fall kan indikera hreflang-problem (fel sprak serveras). Granska kvartalsvis: far anvandare i Nederlander den nederlandska versionen? Jamfor analytics plats vs sprakdata. Avvikelser tyder pa hreflang-problem. Regelbunden testning med detta verktyg forhindrar att problem blir oupptackta.',
        },
      },
      faq: {
        title: 'Vanliga Fragor',
        items: [
          {
            question: 'Ar hreflang obligatoriskt for flersprakiga webbplatser?',
            answer:
              'Inte tekniskt krav, men starkt rekommenderat. Utan hreflang gissar Google vilken sprakversion som ska visas - ofta fel. Dalig UX nar en engelsktalande anvandare far en nederlandska sida. Plus duplicate content-risk - Google forstar inte att sidorna ar oversattningar. Hreflang tar bort ambiguitet, ger battre upplevelse och forhindrar duplicate content penalties.',
          },
          {
            question: 'Maste jag satta hreflang for varje sprak pa varje sida?',
            answer:
              'Ja - varje sprakversion maste referera till alla andra sprakversioner inklusive sig sjalv. Om du har EN, NL, DE, FR versioner, behover den engelska sidan 4 hreflang-taggar (EN, NL, DE, FR). Den nederlandska sidan behover samma. Tidskravande men kravs for korrekt funktion. Anvand mallar eller plugins for att generera automatiskt - manuellt hanterande ar felkansligt vid 100+ sidor x flera sprak.',
          },
          {
            question: 'Vad ar x-default hreflang?',
            answer:
              'x-default ar fallback-versionen som visas nar anvandarens sprak eller region inte omfattas. Om du har EN och NL versioner plus x-default som pekar pa EN, far tyska anvandare (ingen DE version) EN-versionen. Utan x-default valjer Google godtyckligt. Best practice: satt x-default till din primara marknadsversion eller en sprakkvalssida.',
          },
          {
            question: 'Kan hreflang paverka rankings?',
            answer:
              'Indirekt ja. Korrekt hreflang ger battre anvandarupplevelse (ratt sprak), lagre bounce rates, hogre engagemang - alla ranking-signaler. Det forhindrar ocksa duplicate content-forvirring. Hreflang ar inte en rankingfaktor i sig, men bra implementation stoder faktorer som ar det. Webbplatser med bra hreflang rankar ofta battre internationellt.',
          },
        ],
      },
    },
  },
  da: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Gratis hreflang tester. Valider hreflang tags for international SEO. Multi-language website checker tool.',
      openGraph: {
        title: 'Hreflang Tester | International SEO Tool',
        description: 'Test hreflang implementering. Valider hreflang tags for flersprogede sites.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Valider hreflang tags for international SEO. Multi-language website checker.',
    },
    form: {
      placeholder: 'https://eksempel.dk/side',
      button: {
        idle: 'Test Hreflang',
        loading: 'Tjekker...',
      },
    },
    results: {
      title: 'Hreflang Resultater',
    },
    sections: {
      essentials: {
        title: 'Hreflang Tags: Internationale SEO Essentials',
        paragraphs: [
          'Hreflang tags er HTML attributter der fortaeller Google hvilken sproglige version af dit indhold der skal vises til brugere i forskellige regioner. Uden hreflang kan Google vise den engelske side til danske brugere eller omvendt - daarlig UX. Denne hreflang tester validerer din implementering og sikrer at Google serverer det rigtige sprog til det rigtige publikum. Vigtigt for flersprogede websites, internationale virksomheder og indhold til forskellige regioner.',
          'Hreflang syntax: hreflang="en-US" (engelsk for USA), hreflang="nl-NL" (nederlandsk for Holland), hreflang="en-GB" (engelsk for UK). Formatet er sprog-region kode (ISO 639-1 for sprog, ISO 3166-1 Alpha-2 for land). Du kan udelade region: hreflang="en" retter sig mod alle engelsktalende uanset lokation. Tilfoej hreflang="x-default" som fallback - vises naar ingen sprogmatch findes. Hver side skal referere til alle sprogversioner inklusiv sig selv - reciproc linkning kraeves.',
        ],
        headings: {
          commonErrors: 'Almindelige Hreflang Implementeringsfejl',
          validationProcess: 'Hreflang Valideringsproces',
          sitemapsVsHtml: 'Hreflang i Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            'Manglende retur-links - Side A linker til side B, men B linker ikke tilbage til A. Google ignorerer ikke-reciprok hreflang. Forkerte sprogkoder - "nl-BE" for belgisk nederlandsk, ikke "nl-NL". Forkert URL format - relative URLer i stedet for absolutte. Links til 404 eller omdirigerede sider. Blanding af hreflang metoder (HTTP headers + HTML tags + sitemap) inkonsekvent. Denne tester fanger alle disse fejl. Korrekt implementering er foelsom - smaa fejl goer hele hreflang setup ugyldigt.',
          validationProcess:
            'Test hver sprogversion: koer hver version gennem hreflang testeren. Tjek at alle versioner refererer til hinanden korrekt. Verificer at sprogkoder er korrekte. Bekraeft at URLer er absolutte (https://...) ikke relative (/page). Test at en x-default fallback findes. Brug International Targeting rapporten i Google Search Console - viser hreflang fejl som Google opdager. Ret fejl med det samme - ugyldig hreflang betyder at Google kan vise forkert sprog.',
          sitemapsVsHtml:
            'Tre maader at implementere hreflang: HTML link tags i head, HTTP headers eller XML sitemaps. HTML er mest almindeligt (nemt per side). Sitemap metoden er bedre for store sites (tusindvis af sider) - central styring. HTTP headers til ikke-HTML filer (PDFer). Bland ikke metoder inkonsekvent - vaelg en metode og brug konsekvent. Denne tester validerer HTML implementering; for sitemap hreflang, brug en dedikeret sitemap validator.',
        },
        links: {
          prefix: 'Brug sammen med',
          sitemap: 'sitemap validator',
          between: 'og',
          html: 'HTML checker',
          suffix: '.',
        },
      },
      strategy: {
        title: 'Hreflang Strategi for Forskellige Scenarier',
        intro:
          'Flersprogede sites (samme sprog, forskellige regioner): nederlandsk for Holland vs Belgien - begge "nl" men forskellig region targeting. Brug hreflang="nl-NL" for Holland, hreflang="nl-BE" for Belgien. Differentier indhold: priser i EUR vs lokal valuta, forskellig kontaktinfo, region-specifikke eksempler. Hreflang sikrer at belgiske brugere ser den belgiske version og hollandske brugere ser den hollandske version, selv om sproget er det samme.',
        headings: {
          multiRegional: 'Flere regioner, samme sprog',
          ecommerce: 'E-handel International Hreflang',
          syndication: 'Hreflang for Content Syndication',
          monitoring: 'Monitoring af Hreflang Performance',
        },
        details: {
          multiRegional:
            'Engelsk indhold for USA vs UK vs Australien - samme sprog, forskellige maalgrupper. Brug hreflang="en-US", "en-GB", "en-AU". Tilpas indhold: stavning (color vs colour), terminologi (truck vs lorry), kulturelle referencer, priser. Uden hreflang kan Google vise US versionen til UK brugere med forkerte priser eller stavning. Korrekt hreflang targeting giver lokal oplevelse selv naar sproget er det samme.',
          ecommerce:
            'E-handel med internationale kunder skal have hreflang. Produktside paa engelsk for US markedet, oversat til nederlandsk for NL markedet, tysk for DE markedet - hver version skal have hreflang der peger paa alternativer. Kritisk: hold produkt-URL struktur konsistent paa tvaers af sprog. example.com/en/shoes/nike-123 og example.com/nl/schoenen/nike-123 skal have hreflang der kobler dem som sprogvarianter af samme produkt. Hjaelper med at undgaa duplicate content problemer.',
          syndication:
            'Hvis du publicerer det samme indhold paa flere domaener (company.com og company.co.uk for forskellige markeder), brug hreflang for at forbinde dem. Forhindrer duplicate content penalties - fortaeller Google: "dette er bevidst samme indhold for forskellige regioner, ikke plagiat". Hvert domaene implementerer hreflang der peger paa den anden domaenes tilsvarende side. Kraever koordinering men er essentielt for en multi-domain international strategi.',
          monitoring:
            'Google Search Console viser om hreflang virker: tjek International Targeting rapporten for fejl. Overvaag organisk trafik per sprogversion - kraftige fald kan indikere hreflang problemer (forkert sprog serveres). Gennemgaa kvartalsvis: faar brugere i Holland den hollandske version? Sammenlign analytics lokation vs sprogdata. Afvigelser tyder paa hreflang problemer. Regelmaessig test med dette vaerktoj forhindrer at problemer bliver overset.',
        },
      },
      faq: {
        title: 'Ofte Stillede Sporgsmaal',
        items: [
          {
            question: 'Er hreflang paakraevet for flersprogede sites?',
            answer:
              'Ikke teknisk paakraevet, men staerkt anbefalet. Uden hreflang gaetter Google hvilken sprogversion der skal vises - ofte forkert. Daalig UX naar en engelsktalende bruger faar en nederlandsk side. Plus duplicate content risiko - Google forstaar ikke at sider er oversaettelser. Hreflang fjerner tvetydighed, sikrer bedre brugeroplevelse og forhindrer duplicate content penalties.',
          },
          {
            question: 'Skal jeg saette hreflang for hvert sprog paa hver side?',
            answer:
              'Ja - hver sprogversion skal referere til alle andre sprogversioner inklusiv sig selv. Hvis du har EN, NL, DE, FR versioner, skal den engelske side have 4 hreflang tags (EN, NL, DE, FR). Den nederlandske side skal have det samme. Tidskraevende men noedvendigt for korrekt funktion. Brug templates eller plugins til automatisk generering - manuel haandtering er fejlfoelsom ved 100+ sider x flere sprog.',
          },
          {
            question: 'Hvad er x-default hreflang?',
            answer:
              'x-default er fallback versionen der vises naar brugerens sprog eller region ikke er daekket. Hvis du har EN og NL versioner plus x-default der peger paa EN, faar tyske brugere (ingen DE version) EN versionen. Uden x-default vaelger Google vilkaarligt. Best practice: saet x-default til din primaere markedsversion eller en sprogvaelger side.',
          },
          {
            question: 'Kan hreflang paavirke rankings?',
            answer:
              'Indirekte ja. Korrekt hreflang betyder bedre brugeroplevelse (rigtigt sprog), lavere bounce rates, hoejere engagement - alle ranking signaler. Det forhindrer ogsaa duplicate content forvirring. Hreflang er ikke en ranking faktor i sig selv, men god implementering understoetter faktorer der er. Sites med god hreflang ranker ofte bedre internationalt.',
          },
        ],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Testeur hreflang gratuit. Validez les balises hreflang pour le SEO international. Multi-language website checker tool.',
      openGraph: {
        title: 'Hreflang Tester | International SEO Tool',
        description: 'Testez l implementation hreflang. Validez les balises hreflang pour les sites multi-language.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Validez les balises hreflang pour le SEO international. Outil de verification multi-language.',
    },
    form: {
      placeholder: 'https://exemple.fr/page',
      button: {
        idle: 'Tester hreflang',
        loading: 'Verification...',
      },
    },
    results: {
      title: 'Resultats Hreflang',
    },
    sections: {
      essentials: {
        title: 'Balises Hreflang : Essentiels du SEO International',
        paragraphs: [
          'Les balises hreflang sont des attributs HTML qui indiquent a Google quelle version linguistique de votre contenu doit etre affichee aux utilisateurs dans differentes regions. Sans hreflang, Google peut montrer la page anglaise aux utilisateurs francais ou l inverse - mauvaise UX. Ce testeur hreflang valide votre implementation et garantit que Google sert la bonne langue au bon public. Essentiel pour les sites multilingues, les entreprises internationales et le contenu cible par region.',
          'Syntaxe hreflang : hreflang="en-US" (anglais pour les USA), hreflang="nl-NL" (neerlandais pour les Pays-Bas), hreflang="en-GB" (anglais pour le UK). Le format est un code langue-region (ISO 639-1 pour la langue, ISO 3166-1 Alpha-2 pour le pays). Vous pouvez omettre la region : hreflang="en" cible tous les anglophones quel que soit l endroit. Ajoutez hreflang="x-default" comme fallback - affiche quand aucune correspondance de langue est trouvee. Chaque page doit referencer toutes les versions de langue y compris elle-meme - liens reciproques requis.',
        ],
        headings: {
          commonErrors: 'Erreurs courantes d implementation Hreflang',
          validationProcess: 'Processus de validation Hreflang',
          sitemapsVsHtml: 'Hreflang dans les Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            'Liens de retour manquants - la page A pointe vers la page B mais B ne renvoie pas vers A. Google ignore le hreflang non reciproque. Codes de langue incorrects - "nl-BE" pour neerlandais belge, pas "nl-NL". Mauvais format d URL - URL relatives au lieu d absolues. Liens vers des 404 ou des pages redirigees. Melanger les methodes hreflang (headers HTTP + balises HTML + sitemap) de facon incoherente. Ce testeur detecte toutes ces erreurs. Une implementation correcte est delicate - de petites erreurs invalident toute la configuration hreflang.',
          validationProcess:
            'Testez chaque version de langue : faites passer chaque version dans le testeur hreflang. Verifiez que toutes les versions se referencent correctement. Verifiez que les codes de langue sont exacts. Confirmez que les URL sont absolues (https://...) et non relatives (/page). Testez qu un fallback x-default existe. Utilisez le rapport International Targeting de Google Search Console - il montre les erreurs hreflang detectees par Google. Corrigez les erreurs immediatement - un hreflang invalide signifie que Google peut servir la mauvaise langue.',
          sitemapsVsHtml:
            'Trois manieres d implementer hreflang : balises link HTML dans le head, headers HTTP, ou sitemaps XML. HTML est le plus courant (facile par page). La methode sitemap est meilleure pour les grands sites (des milliers de pages) - gestion centralisee. Headers HTTP pour les fichiers non HTML (PDF). Ne melangez pas les methodes de facon incoherente - choisissez une methode et utilisez-la de facon constante. Ce testeur valide l implementation HTML; pour le hreflang en sitemap, utilisez un validateur de sitemap dedie.',
        },
        links: {
          prefix: 'Utilisez avec',
          sitemap: 'validateur de sitemap',
          between: 'et',
          html: 'verificateur HTML',
          suffix: '.',
        },
      },
      strategy: {
        title: 'Strategie Hreflang pour Differents Scenarios',
        intro:
          'Sites multilingues (meme langue, regions differentes) : neerlandais pour les Pays-Bas vs Belgique - les deux "nl" mais ciblage regional different. Utilisez hreflang="nl-NL" pour les Pays-Bas, hreflang="nl-BE" pour la Belgique. Differenciez le contenu : prix en EUR vs devise locale, infos de contact differentes, exemples regionaux. Hreflang garantit que les utilisateurs belges voient la version belge et les utilisateurs neerlandais voient la version Pays-Bas, meme si la langue est la meme.',
        headings: {
          multiRegional: 'Contenu multi-regional, meme langue',
          ecommerce: 'E-commerce international Hreflang',
          syndication: 'Hreflang pour la syndication de contenu',
          monitoring: 'Suivi des performances Hreflang',
        },
        details: {
          multiRegional:
            'Contenu anglais pour USA vs UK vs Australie - meme langue, publics differents. Utilisez hreflang="en-US", "en-GB", "en-AU". Adaptez le contenu : orthographe (color vs colour), terminologie (truck vs lorry), references culturelles, prix. Sans hreflang, Google peut montrer la version US aux utilisateurs UK avec de mauvais prix ou orthographe. Un bon ciblage hreflang assure une experience localisee meme quand la langue est partagee.',
          ecommerce:
            'Un site e-commerce avec des clients internationaux doit avoir hreflang. Page produit en anglais pour le marche US, traduite en neerlandais pour le marche NL, allemand pour le marche DE - chaque version doit avoir hreflang pointant vers les alternatives. Critique : garder une structure d URL produit coherente entre les langues. example.com/en/shoes/nike-123 et example.com/nl/schoenen/nike-123 doivent avoir hreflang reliant ces pages comme variantes linguistiques du meme produit. Cela aide a prevenir les problemes de duplicate content.',
          syndication:
            'Si vous publiez le meme contenu sur plusieurs domaines (company.com et company.co.uk pour differents marches), utilisez hreflang pour les relier. Evite les penalites de duplicate content - indique a Google: "c est volontairement le meme contenu pour des regions differentes, pas du plagiat". Chaque domaine implemente hreflang pointant vers la page equivalente de l autre domaine. Cela demande de la coordination mais est essentiel pour une strategie internationale multi-domain.',
          monitoring:
            'Google Search Console montre si hreflang fonctionne : verifiez le rapport International Targeting pour les erreurs. Surveillez le trafic organique par version de langue - des chutes nettes peuvent indiquer des problemes hreflang (mauvaise langue servie). Revoyez trimestriellement : les utilisateurs aux Pays-Bas recoivent-ils la version neerlandaise ? Comparez la localisation analytics vs les donnees de langue. Les ecarts suggerent des problemes hreflang. Des tests reguliers avec cet outil evitent que les problemes passent inapercus.',
        },
      },
      faq: {
        title: 'Questions Frequentes',
        items: [
          {
            question: 'Le hreflang est-il obligatoire pour les sites multilingues ?',
            answer:
              'Pas techniquement obligatoire, mais fortement recommande. Sans hreflang, Google devine quelle version de langue montrer - souvent faux. Mauvaise UX quand un utilisateur anglophone voit une page neerlandaise. Risque de duplicate content - Google ne comprend pas que les pages sont des traductions. Hreflang supprime l ambiguite, assure une meilleure experience utilisateur et evite les penalites de duplicate content.',
          },
          {
            question: 'Dois-je mettre hreflang pour chaque langue sur chaque page ?',
            answer:
              'Oui - chaque version de langue doit referencer toutes les autres versions de langue, y compris elle-meme. Si vous avez EN, NL, DE, FR, la page anglaise a besoin de 4 balises hreflang (EN, NL, DE, FR). La page neerlandaise aussi. C est fastidieux mais requis pour un bon fonctionnement. Utilisez des templates ou plugins pour generer automatiquement - la gestion manuelle est sujette aux erreurs pour 100+ pages x plusieurs langues.',
          },
          {
            question: 'Qu est-ce que x-default hreflang ?',
            answer:
              'x-default est la version de fallback affichee quand la langue ou region de l utilisateur n est pas couverte. Si vous avez EN et NL plus x-default vers EN, les utilisateurs allemands (pas de DE) verront la version EN. Sans x-default, Google choisit au hasard. Bonne pratique : pointer x-default vers votre version principale ou une page de selection de langue.',
          },
          {
            question: 'Le hreflang peut-il influencer les rankings ?',
            answer:
              'Indirectement oui. Un hreflang correct signifie meilleure experience utilisateur (bonne langue), taux de rebond plus bas, engagement plus eleve - tous des signaux de ranking. Cela evite aussi la confusion du duplicate content. Hreflang n est pas un facteur de ranking en soi, mais une bonne implementation soutient des facteurs qui le sont. Les sites avec un bon hreflang se classent souvent mieux a l international.',
          },
        ],
      },
    },
  },
  it: {
    metadata: {
      title: 'Hreflang Tester | Hreflang Tag Validator',
      description:
        'Hreflang tester gratuito. Valida i tag hreflang per SEO internazionale. Multi-language website checker tool.',
      openGraph: {
        title: 'Hreflang Tester | International SEO Tool',
        description: 'Testa implementazione hreflang. Valida i tag hreflang per siti multi-language.',
      },
    },
    hero: {
      title: 'Hreflang Tester',
      subtitle: 'Valida i tag hreflang per SEO internazionale. Multi-language website checker.',
    },
    form: {
      placeholder: 'https://esempio.it/pagina',
      button: {
        idle: 'Testa hreflang',
        loading: 'Controllo...',
      },
    },
    results: {
      title: 'Risultati Hreflang',
    },
    sections: {
      essentials: {
        title: 'Tag Hreflang: Essenziali per SEO Internazionale',
        paragraphs: [
          'I tag hreflang sono attributi HTML che indicano a Google quale versione linguistica dei tuoi contenuti mostrare agli utenti in regioni diverse. Senza hreflang, Google puo mostrare la pagina inglese agli utenti italiani o viceversa - pessima UX. Questo hreflang tester valida la tua implementazione e garantisce che Google serva la lingua giusta al pubblico giusto. Essenziale per siti multilingue, aziende internazionali e contenuti mirati a regioni diverse.',
          'Sintassi hreflang: hreflang="en-US" (inglese per USA), hreflang="nl-NL" (olandese per Paesi Bassi), hreflang="en-GB" (inglese per UK). Il formato e codice lingua-regione (ISO 639-1 per lingua, ISO 3166-1 Alpha-2 per paese). Puoi omettere la regione: hreflang="en" si rivolge a tutti gli anglofoni indipendentemente dalla posizione. Aggiungi hreflang="x-default" come fallback - mostrato quando non viene trovata una corrispondenza di lingua. Ogni pagina deve riferire tutte le versioni linguistiche incluso se stessa - linking reciproco richiesto.',
        ],
        headings: {
          commonErrors: 'Errori comuni di implementazione Hreflang',
          validationProcess: 'Processo di validazione Hreflang',
          sitemapsVsHtml: 'Hreflang in Sitemaps vs HTML',
        },
        details: {
          commonErrors:
            'Link di ritorno mancanti - la pagina A collega alla pagina B ma B non collega a A. Google ignora hreflang non reciproco. Codici lingua errati - "nl-BE" per olandese belga, non "nl-NL". Formato URL errato - URL relative invece di assolute. Link a 404 o pagine reindirizzate. Mescolare metodi hreflang (HTTP header + HTML tag + sitemap) in modo incoerente. Questo tester rileva tutti questi errori. Implementazione corretta e delicata - piccoli errori invalidano tutta la configurazione hreflang.',
          validationProcess:
            'Testa ogni versione linguistica: esegui ogni versione nel hreflang tester. Verifica che tutte le versioni si riferiscano correttamente. Verifica che i codici lingua siano accurati. Conferma che gli URL siano assoluti (https://...) e non relativi (/page). Testa che esista un fallback x-default. Usa il report International Targeting di Google Search Console - mostra gli errori hreflang rilevati da Google. Correggi subito gli errori - hreflang non valido significa che Google puo servire la lingua sbagliata.',
          sitemapsVsHtml:
            'Tre modi per implementare hreflang: tag link HTML nel head, HTTP header o XML sitemaps. HTML e il piu comune (facile per pagina). Il metodo sitemap e migliore per siti grandi (migliaia di pagine) - gestione centrale. HTTP header per file non HTML (PDF). Non mescolare metodi in modo incoerente - scegli un metodo e usalo in modo coerente. Questo tester valida l implementazione HTML; per hreflang in sitemap usa un validatore di sitemap dedicato.',
        },
        links: {
          prefix: 'Usa con',
          sitemap: 'validatore sitemap',
          between: 'e',
          html: 'checker HTML',
          suffix: '.',
        },
      },
      strategy: {
        title: 'Strategia Hreflang per Scenari Diversi',
        intro:
          'Siti multilingue (stessa lingua, regioni diverse): olandese per Paesi Bassi vs Belgio - entrambi "nl" ma targeting regionale diverso. Usa hreflang="nl-NL" per Paesi Bassi, hreflang="nl-BE" per Belgio. Differenzia contenuti: prezzi in EUR vs valuta locale, contatti diversi, esempi regionali. Hreflang assicura che gli utenti belgi vedano la versione belga e gli utenti olandesi la versione Paesi Bassi, anche se la lingua e la stessa.',
        headings: {
          multiRegional: 'Multi-regionale, stessa lingua',
          ecommerce: 'E-commerce internazionale Hreflang',
          syndication: 'Hreflang per Content Syndication',
          monitoring: 'Monitoraggio delle performance Hreflang',
        },
        details: {
          multiRegional:
            'Contenuto inglese per USA vs UK vs Australia - stessa lingua, pubblici diversi. Usa hreflang="en-US", "en-GB", "en-AU". Adatta contenuto: ortografia (color vs colour), terminologia (truck vs lorry), riferimenti culturali, prezzi. Senza hreflang, Google puo mostrare la versione US agli utenti UK con prezzi o ortografia sbagliati. Un buon targeting hreflang garantisce un esperienza localizzata anche quando la lingua e condivisa.',
          ecommerce:
            'Un e-commerce con clienti internazionali deve avere hreflang. Pagina prodotto in inglese per il mercato US, tradotta in olandese per il mercato NL, tedesco per il mercato DE - ogni versione deve avere hreflang che punta alle alternative. Critico: mantieni la struttura URL prodotto coerente tra le lingue. example.com/en/shoes/nike-123 e example.com/nl/schoenen/nike-123 devono avere hreflang che le collega come varianti linguistiche dello stesso prodotto. Aiuta a prevenire problemi di duplicate content.',
          syndication:
            'Se pubblichi lo stesso contenuto su piu domini (company.com e company.co.uk per mercati diversi), usa hreflang per collegarli. Previene penalita di duplicate content - dice a Google: "questo e intenzionalmente lo stesso contenuto per regioni diverse, non plagio". Ogni dominio implementa hreflang che punta alla pagina equivalente dell altro dominio. Richiede coordinamento ma e essenziale per una strategia internazionale multi-domain.',
          monitoring:
            'Google Search Console mostra se hreflang funziona: controlla il report International Targeting per errori. Monitora il traffico organico per versione linguistica - cali netti possono indicare problemi hreflang (lingua sbagliata servita). Rivedi trimestralmente: gli utenti nei Paesi Bassi ricevono la versione olandese? Confronta dati analytics di localizzazione vs lingua. Mismatch suggeriscono problemi hreflang. Test regolari con questo strumento evitano che i problemi restino nascosti.',
        },
      },
      faq: {
        title: 'Domande Frequenti',
        items: [
          {
            question: 'Hreflang e obbligatorio per siti multilingue?',
            answer:
              'Non e tecnicamente obbligatorio, ma altamente consigliato. Senza hreflang, Google indovina quale versione linguistica mostrare - spesso sbaglia. Brutta UX quando un utente anglofono vede una pagina olandese. Inoltre rischio di duplicate content - Google non capisce che le pagine sono traduzioni. Hreflang elimina ambiguita, garantisce migliore esperienza utente e previene penalita da duplicate content.',
          },
          {
            question: 'Devo impostare hreflang per ogni lingua su ogni pagina?',
            answer:
              'Si - ogni versione linguistica deve riferire tutte le altre versioni linguistiche incluso se stessa. Se hai EN, NL, DE, FR, la pagina inglese necessita 4 tag hreflang (EN, NL, DE, FR). Anche la pagina olandese. E noioso ma richiesto per un corretto funzionamento. Usa template o plugin per generare automaticamente - la gestione manuale e soggetta a errori per 100+ pagine x piu lingue.',
          },
          {
            question: 'Cos e x-default hreflang?',
            answer:
              'x-default e la versione di fallback mostrata quando la lingua o regione dell utente non e coperta. Se hai EN e NL e x-default punta a EN, gli utenti tedeschi (nessuna versione DE) vedranno la versione EN. Senza x-default, Google sceglie a caso. Best practice: imposta x-default alla tua versione principale o a una pagina di selezione lingua.',
          },
          {
            question: 'Hreflang puo influenzare i rankings?',
            answer:
              'Indirettamente si. Un hreflang corretto significa migliore esperienza utente (lingua giusta), bounce rate piu basso, maggiore engagement - tutti segnali di ranking. Previene anche la confusione da duplicate content. Hreflang non e un fattore di ranking in se, ma una buona implementazione supporta fattori che lo sono. I siti con hreflang fatto bene spesso si posizionano meglio a livello internazionale.',
          },
        ],
      },
    },
  },
};

export function getHreflangTesterCopy(locale) {
  return getLocaleCopy(copy, locale);
}
