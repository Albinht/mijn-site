const copy = {
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
  };

export function getHreflangTesterCopy() {
  return copy;
}
