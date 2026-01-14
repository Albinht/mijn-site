import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Free sitemap checker tool. Validate XML sitemaps, check sitemap errors, and optimize your sitemap.xml for better indexing.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Free tool to check and validate XML sitemaps for better SEO indexing.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Validate your XML sitemap, check for errors, and optimize for better Google indexing.',
    },
    form: {
      label: 'Sitemap URL:',
      placeholder: 'https://example.com/sitemap.xml',
      button: {
        idle: 'Check Sitemap',
        loading: 'Checking...',
      },
    },
    errors: {
      missingUrl: 'Enter a sitemap URL',
      fetchFailed: 'Could not check sitemap',
      network: 'Something went wrong. Check the URL and try again.',
    },
    results: {
      title: 'Sitemap Results',
      stats: {
        total: 'Total URLs',
        valid: 'Valid URLs',
        warnings: 'Warnings',
      },
      issuesTitle: 'Issues Found:',
    },
    seo: {
      title: 'XML Sitemap Checker for SEO',
      paragraphs: [
        'A sitemap checker helps you identify XML sitemap errors before they impact indexing. This sitemap validator checks whether your sitemap.xml is correctly formatted, contains all required tags, and has no broken links. A valid sitemap is crucial because Google uses it to crawl and index your site.',
        'Use this XML sitemap checker regularly, especially after major site updates. Check that all important pages are included in your sitemap, that priority and changefreq are set correctly, and that you do not exceed the 50,000 URL limit. A sitemap validator prevents indexing issues that can hurt rankings.',
      ],
      links: {
        prefix: 'Optimize your',
        html: 'HTML code',
        between: 'and',
        schema: 'schema markup',
        suffix: 'for complete technical SEO.',
      },
    },
  },
  nl: {
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
  },
  de: {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Kostenloser sitemap checker. Validiere XML sitemaps, pruefe sitemap Fehler und optimiere deine sitemap.xml fuer bessere Indexierung.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Kostenloses Tool um XML sitemaps zu pruefen und fuer bessere SEO Indexierung zu validieren.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Validiere deine XML Sitemap, pruefe auf Fehler und optimiere fuer bessere Google Indexierung.',
    },
    form: {
      label: 'Sitemap URL:',
      placeholder: 'https://beispiel.de/sitemap.xml',
      button: {
        idle: 'Sitemap pruefen',
        loading: 'Pruefen...',
      },
    },
    errors: {
      missingUrl: 'Gib eine Sitemap URL ein',
      fetchFailed: 'Sitemap konnte nicht geprueft werden',
      network: 'Etwas ist schiefgelaufen. Pruefe die URL und versuche es erneut.',
    },
    results: {
      title: 'Sitemap Ergebnisse',
      stats: {
        total: 'Gesamt URLs',
        valid: 'Gueltige URLs',
        warnings: 'Warnungen',
      },
      issuesTitle: 'Gefundene Probleme:',
    },
    seo: {
      title: 'XML Sitemap Checker fuer SEO',
      paragraphs: [
        'Ein Sitemap Checker hilft dir, XML Sitemap Fehler zu finden, bevor sie die Indexierung beeinflussen. Dieser Sitemap Validator prueft, ob deine sitemap.xml korrekt formatiert ist, alle erforderlichen Tags enthaelt und keine defekten Links hat. Eine gueltige Sitemap ist entscheidend, weil Google sie zum Crawlen und Indexieren nutzt.',
        'Nutze diesen XML Sitemap Checker regelmaessig, besonders nach groesseren Site Updates. Pruefe, ob alle wichtigen Seiten in der Sitemap sind, ob priority und changefreq korrekt gesetzt sind und ob du das 50.000 URL Limit nicht ueberschreitest. Ein Sitemap Validator verhindert Indexierungsprobleme, die Rankings schaedigen koennen.',
      ],
      links: {
        prefix: 'Optimiere auch deinen',
        html: 'HTML Code',
        between: 'und',
        schema: 'Schema Markup',
        suffix: 'fuer komplette technische SEO.',
      },
    },
  },
  sv: {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Gratis sitemap checker. Validera XML sitemaps, kontrollera sitemap fel och optimera din sitemap.xml for battre indexering.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Gratis verktyg for att kontrollera och validera XML sitemaps for battre SEO indexering.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Validera din XML sitemap, kontrollera fel och optimera for battre Google indexering.',
    },
    form: {
      label: 'Sitemap URL:',
      placeholder: 'https://exempel.se/sitemap.xml',
      button: {
        idle: 'Kontrollera sitemap',
        loading: 'Kontrollerar...',
      },
    },
    errors: {
      missingUrl: 'Ange en sitemap URL',
      fetchFailed: 'Kunde inte kontrollera sitemap',
      network: 'Nagot gick fel. Kontrollera URLen och forsok igen.',
    },
    results: {
      title: 'Sitemap Resultat',
      stats: {
        total: 'Totalt antal URLer',
        valid: 'Giltiga URLer',
        warnings: 'Varningar',
      },
      issuesTitle: 'Hittade problem:',
    },
    seo: {
      title: 'XML Sitemap Checker for SEO',
      paragraphs: [
        'En sitemap checker hjalper dig att identifiera XML sitemap fel innan de paverkar indexering. Denna sitemap validator kontrollerar om din sitemap.xml ar korrekt formaterad, innehaller alla kravda taggar och inte har brutna lankar. En giltig sitemap ar avgorande eftersom Google anvander den for att crawla och indexera din site.',
        'Anvand denna XML sitemap checker regelbundet, speciellt efter stora site uppdateringar. Kontrollera att alla viktiga sidor finns i sitemapen, att priority och changefreq ar korrekt satta, och att du inte overskrider 50.000 URL grans. En sitemap validator forhindrar indexeringsproblem som kan skada rankingar.',
      ],
      links: {
        prefix: 'Optimera ocksa din',
        html: 'HTML kod',
        between: 'och',
        schema: 'schema markup',
        suffix: 'for komplett teknisk SEO.',
      },
    },
  },
  da: {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Gratis sitemap checker. Valider XML sitemaps, tjek sitemap fejl og optimer din sitemap.xml for bedre indeksering.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Gratis vaerktoj til at tjekke og validere XML sitemaps for bedre SEO indeksering.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Valider din XML sitemap, tjek for fejl og optimer for bedre Google indeksering.',
    },
    form: {
      label: 'Sitemap URL:',
      placeholder: 'https://eksempel.dk/sitemap.xml',
      button: {
        idle: 'Tjek sitemap',
        loading: 'Tjekker...',
      },
    },
    errors: {
      missingUrl: 'Indtast en sitemap URL',
      fetchFailed: 'Kunne ikke tjekke sitemap',
      network: 'Noget gik galt. Tjek URLen og proev igen.',
    },
    results: {
      title: 'Sitemap Resultater',
      stats: {
        total: 'Samlet antal URLer',
        valid: 'Gyldige URLer',
        warnings: 'Advarsler',
      },
      issuesTitle: 'Fundne problemer:',
    },
    seo: {
      title: 'XML Sitemap Checker til SEO',
      paragraphs: [
        'En sitemap checker hjalper dig med at finde XML sitemap fejl, foer de paavirker indeksering. Denne sitemap validator tjekker om din sitemap.xml er korrekt formateret, indeholder alle paakraevne tags og ikke har broken links. En gyldig sitemap er vigtig fordi Google bruger den til at crawle og indeksere dit site.',
        'Brug denne XML sitemap checker regelmaessigt, iser efter store site opdateringer. Tjek at alle vigtige sider er med i sitemapen, at priority og changefreq er sat korrekt, og at du ikke overskrider graensen pa 50.000 URLer. En sitemap validator forhindrer indekseringsproblemer som kan skade rankings.',
      ],
      links: {
        prefix: 'Optimer ogsaa din',
        html: 'HTML kode',
        between: 'og',
        schema: 'schema markup',
        suffix: 'for komplet teknisk SEO.',
      },
    },
  },
  fr: {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Outil sitemap checker gratuit. Validez les sitemaps XML, verifiez les erreurs et optimisez votre sitemap.xml pour une meilleure indexation.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Outil gratuit pour verifier et valider les sitemaps XML pour une meilleure indexation SEO.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Validez votre sitemap XML, verifiez les erreurs et optimisez pour une meilleure indexation Google.',
    },
    form: {
      label: 'URL du sitemap :',
      placeholder: 'https://exemple.fr/sitemap.xml',
      button: {
        idle: 'Verifier le sitemap',
        loading: 'Verification...',
      },
    },
    errors: {
      missingUrl: 'Entrez une URL de sitemap',
      fetchFailed: 'Impossible de verifier le sitemap',
      network: 'Une erreur sest produite. Verifiez lURL et reessayez.',
    },
    results: {
      title: 'Resultats du sitemap',
      stats: {
        total: 'Total d URL',
        valid: 'URL valides',
        warnings: 'Avertissements',
      },
      issuesTitle: 'Problemes detectes:',
    },
    seo: {
      title: 'XML Sitemap Checker pour le SEO',
      paragraphs: [
        'Un sitemap checker vous aide a identifier les erreurs de sitemap XML avant quelles naffectent l indexation. Ce validateur de sitemap verifie que votre sitemap.xml est correctement formatee, contient toutes les balises requises et na pas de liens casses. Un sitemap valide est crucial car Google l utilise pour crawler et indexer votre site.',
        'Utilisez ce XML sitemap checker regulierement, surtout apres de grosses mises a jour du site. Verifiez que toutes les pages importantes sont dans le sitemap, que priority et changefreq sont correctement definis, et que vous ne depassez pas la limite de 50 000 URL. Un validateur de sitemap evite des problemes d indexation qui peuvent nuire aux rankings.',
      ],
      links: {
        prefix: 'Optimisez aussi votre',
        html: 'code HTML',
        between: 'et',
        schema: 'schema markup',
        suffix: 'pour un SEO technique complet.',
      },
    },
  },
  it: {
    metadata: {
      title: 'Sitemap Checker | XML Sitemap Validator Tool',
      description:
        'Sitemap checker gratuito. Valida sitemap XML, controlla errori e ottimizza la tua sitemap.xml per una migliore indicizzazione.',
      openGraph: {
        title: 'Sitemap Checker | XML Validator',
        description: 'Strumento gratuito per controllare e validare sitemap XML per una migliore indicizzazione SEO.',
      },
    },
    hero: {
      title: 'Sitemap Checker',
      subtitle: 'Valida la tua sitemap XML, controlla gli errori e ottimizza per una migliore indicizzazione Google.',
    },
    form: {
      label: 'URL sitemap:',
      placeholder: 'https://esempio.it/sitemap.xml',
      button: {
        idle: 'Controlla sitemap',
        loading: 'Controllo...',
      },
    },
    errors: {
      missingUrl: 'Inserisci un URL sitemap',
      fetchFailed: 'Impossibile controllare la sitemap',
      network: 'Qualcosa e andato storto. Controlla l URL e riprova.',
    },
    results: {
      title: 'Risultati Sitemap',
      stats: {
        total: 'Totale URL',
        valid: 'URL valide',
        warnings: 'Avvisi',
      },
      issuesTitle: 'Problemi trovati:',
    },
    seo: {
      title: 'XML Sitemap Checker per SEO',
      paragraphs: [
        'Un sitemap checker ti aiuta a identificare errori nella sitemap XML prima che influenzino l indicizzazione. Questo validatore sitemap controlla se la tua sitemap.xml e formattata correttamente, contiene tutti i tag richiesti e non ha link rotti. Una sitemap valida e cruciale perche Google la usa per fare crawling e indicizzare il tuo sito.',
        'Usa questo XML sitemap checker regolarmente, soprattutto dopo grandi aggiornamenti del sito. Controlla che tutte le pagine importanti siano nella sitemap, che priority e changefreq siano impostati correttamente e che non superi il limite di 50.000 URL. Un validatore sitemap previene problemi di indicizzazione che possono danneggiare i ranking.',
      ],
      links: {
        prefix: 'Ottimizza anche il tuo',
        html: 'codice HTML',
        between: 'e',
        schema: 'schema markup',
        suffix: 'per un SEO tecnico completo.',
      },
    },
  },
};

export function getSitemapCheckerCopy(locale) {
  return getLocaleCopy(copy, locale);
}
