const copy = {
    metadata: {
      title: 'YouTube Naam Generator | Gratis AI Kanaalnaam Ideeen',
      description:
        'Genereer pakkende YouTube kanaalnaam ideeen op basis van een onderwerp. Inclusief @handle suggesties en snelle beschikbaarheidscheck.',
      openGraph: {
        title: 'YouTube Naam Generator | AI Kanaalnaam Ideeen',
        description: 'Gratis AI tool voor YouTube kanaalnamen: unieke ideeen, handle suggesties en snelle checks.',
      },
    },
    hero: {
      title: 'YouTube Naam Generator',
      subtitle:
        'Mijn YouTube Name Generator gebruikt AI om creatieve en relevante namen voor je kanaal te genereren.',
    },
    form: {
      label: 'Onderwerp',
      placeholder: 'bijv. SEO Tips, Fitness voor Drukke Moeders, Shopify Groei',
      button: {
        idle: 'Genereer namen',
        loading: 'Bezig...',
      },
      helper: 'Tip: voeg niche + doelgroep toe (2-3 woorden) voor uniekere ideeen.',
    },
    results: {
      title: 'Naam ideeen',
      subtitle: 'Klik om te kopieren. Handles zijn suggesties (je kunt ze aanpassen).',
      columns: {
        name: 'Naam',
        handle: 'Handle idee',
        availability: 'Beschikbaarheid',
      },
      availability: {
        available: 'Waarschijnlijk beschikbaar',
        taken: 'Bezet',
        unknown: 'Onbekend',
        hint: 'Beschikbaarheid is een snelle check van de @handle URL. Check het altijd even in YouTube zelf.',
      },
      actions: {
        copy: 'Kopieer',
        copied: 'Gekopieerd',
        tryAgain: 'Opnieuw genereren',
      },
    },
    errors: {
      missingTopic: 'Vul eerst een onderwerp in.',
      failed: 'Kon nu geen namen genereren. Probeer het zo nog eens.',
    },
    sections: {
      whatIs: {
        title: 'Wat is een YouTube Naam Generator?',
        paragraphs: [
          'Een YouTube Name Generator is een tool die suggesties biedt voor kanaalnamen op basis van je ingevoerde trefwoorden, niche of interesses.',
          'Het helpt content creators om een naam te vinden die memorabel en passend is bij hun content en doelgroep.',
        ],
      },
      why: {
        title: 'Waarom een AI YouTube Naam Generator gebruiken?',
        bullets: [
          'Creatieve inspiratie: ontvang unieke en originele naamideeen die je zelf misschien niet had bedacht.',
          'Merkconsistentie: zorg dat je kanaalnaam past bij je merkidentiteit en de boodschap die je wilt overbrengen.',
          'Tijdbesparend: bespaar tijd door automatisch naamideeen te genereren in plaats van handmatig te brainstormen.',
          'Memorabele namen: creeer een naam die makkelijk te onthouden is en aantrekkelijk is voor je doelgroep.',
        ],
      },
      checks: {
        title: 'Waar checkt deze tool op?',
        bullets: [
          'Relevantie: de gegenereerde namen sluiten aan op je trefwoorden, niche en doelgroep.',
          'Creativiteit: unieke en creatieve ideeen die je kanaal onderscheiden van concurrenten.',
          'Merkidentiteit: namen die passen bij je positionering en boodschap.',
          'Beschikbaarheid: controleert of de voorgestelde namen en handles waarschijnlijk nog beschikbaar zijn.',
        ],
      },
      howWorks: {
        title: 'Hoe werkt de YouTube Naam Generator (AI)?',
        steps: [
          'Voer trefwoorden, een niche of een korte beschrijving van je kanaal in.',
          'De AI analyseert je invoer en genereert een reeks relevante en creatieve kanaalnamen.',
          'Je krijgt een lijst met voorgestelde kanaalnamen die je direct kunt gebruiken voor je YouTube-kanaal.',
        ],
      },
      tips: {
        title: 'Snelle tips voor het kiezen van de juiste kanaalnaam',
        bullets: [
          'Kies een naam die je over 2 jaar nog steeds kunt gebruiken als je uitbreidt.',
          'Houd spelling simpel: beter voor mond-tot-mond en herkenning.',
          'Vermijd cijfers en rare tekens tenzij het echt bij je merk hoort.',
          'Test uitspraak: als mensen het niet kunnen zeggen, delen ze het minder.',
          'Maak handle, logo en kanaaltekst consistent voor een sterker merk.',
        ],
      },
      faq: {
        title: 'Veelgestelde vragen',
        items: [
          {
            question: 'Moet mijn kanaalnaam zoekwoorden bevatten?',
            answer:
              'Het kan helpen voor duidelijkheid, maar forceer het niet. Een merknaam met een heldere banner en kanaalomschrijving werkt vaak beter op de lange termijn dan een naam vol zoekwoorden.',
          },
          {
            question: 'Kan ik mijn YouTube naam later aanpassen?',
            answer:
              'Ja, maar te vaak wisselen zorgt voor verwarring en minder herkenning. Kies liever iets flexibel en blijf daarna consistent met je handle en visuals.',
          },
          {
            question: 'Wat maakt een naam goed te onthouden?',
            answer:
              'Kort, uitspreekbaar en onderscheidend. Ga voor 1-3 woorden, vermijd moeilijke spelling en kies een ritme dat mensen kunnen herhalen.',
          },
          {
            question: 'Hoe check ik of een naam al bestaat?',
            answer:
              'Zoek op YouTube, check of de @handle bezet is en kijk op Instagram/TikTok als je overal dezelfde handle wilt. Deze tool geeft een snelle hint, maar check het altijd zelf.',
          },
        ],
      },
      cta: {
        title: 'Hulp nodig bij een naam die converteert?',
        subtitle:
          'Als je brandstrategie + positionering wilt, help ik je met naamkeuze en de rest van je groeisysteem.',
        button: 'Werk met mij',
      },
    },
  };

export function getYouTubeNameGeneratorCopy() {
  return copy;
}
