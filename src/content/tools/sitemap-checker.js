const copy = {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Gratis sitemap checker tool. Valideer XML sitemaps, controleer sitemap fouten en optimaliseer je sitemap.xml voor betere indexering.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Gratis tool om XML sitemaps te checken en valideren voor betere SEO indexering.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Valideer je XML sitemap, controleer op fouten en optimaliseer voor betere Google indexering.',
    },
    form: {
      label: 'Sitemap URL:',
      placeholder: 'https://voorbeeld.nl/sitemap.xml',
      button: {
        idle: 'Sitemap checken',
        loading: 'Checken...',
      },
    },
    errors: {
      missingUrl: 'Voer een sitemap URL in',
      fetchFailed: 'Kon sitemap niet checken',
      network: 'Er ging iets fout. Controleer de URL en probeer opnieuw.',
    },
    results: {
      title: 'Sitemap Resultaten',
      stats: {
        total: 'Totaal URLs',
        valid: 'Geldige URLs',
        warnings: 'Waarschuwingen',
      },
      issuesTitle: 'Gevonden problemen:',
    },
    seo: {
      title: 'XML Sitemap Checker voor SEO',
      paragraphs: [
        'Een sitemap checker helpt je XML sitemap fouten te identificeren voordat ze je indexering beinvloeden. Deze sitemap validator controleert of je sitemap.xml correct geformatteerd is, alle vereiste tags bevat, en geen broken links heeft. Een geldige sitemap is cruciaal omdat Google deze gebruikt om je site te crawlen en indexeren.',
        'Gebruik deze XML sitemap checker regelmatig, vooral na grote site updates. Check of alle belangrijke paginas in je sitemap staan, of priority en changefreq correct zijn ingesteld, en of je de 50.000 URLs limiet niet overschrijdt. Een sitemap validator voorkomt indexering problemen die je rankings kunnen schaden.',
      ],
      links: {
        prefix: 'Optimaliseer ook je',
        html: 'HTML code',
        between: 'en',
        schema: 'schema markup',
        suffix: 'voor complete technische SEO.',
      },
    },
  };

export function getSitemapCheckerCopy() {
  return copy;
}
