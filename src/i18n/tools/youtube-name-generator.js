import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'YouTube Name Generator | Free AI Channel Name Ideas',
      description:
        'Generate catchy YouTube channel name ideas from a topic in seconds. Includes @handle suggestions and quick availability checks.',
      openGraph: {
        title: 'YouTube Name Generator | AI Channel Name Ideas',
        description:
          'Free AI tool to generate YouTube channel names: brandable ideas, handle suggestions, and quick availability checks.',
      },
    },
    hero: {
      title: 'YouTube Name Generator',
      subtitle: 'Type your topic and generate memorable channel name ideas you can actually use.',
    },
    form: {
      label: 'Topic',
      placeholder: 'e.g. SEO Tips, Fitness for Busy Moms, Shopify Growth',
      button: {
        idle: 'Generate names',
        loading: 'Generating...',
      },
      helper: 'Tip: add 2-3 words (niche + audience) for more unique ideas.',
    },
    results: {
      title: 'Name ideas',
      subtitle: 'Click a name to copy. Handles are suggestions (you can edit them).',
      columns: {
        name: 'Name',
        handle: 'Handle idea',
        availability: 'Availability',
      },
      availability: {
        available: 'Likely available',
        taken: 'Taken',
        unknown: 'Unknown',
        hint: 'Availability is a quick lookup of the @handle URL. Always double-check on YouTube before you commit.',
      },
      actions: {
        copy: 'Copy',
        copied: 'Copied',
        tryAgain: 'Generate again',
      },
    },
    errors: {
      missingTopic: 'Enter a topic first.',
      failed: 'Could not generate names right now. Try again in a moment.',
    },
    sections: {
      whatIs: {
        title: 'What is a YouTube Name Generator?',
        paragraphs: [
          'A YouTube name generator suggests channel name ideas based on a topic, niche, or short description. Instead of staring at a blank page, you get a list of options that are relevant, brandable, and easier to remember.',
          'This tool uses AI to produce multiple naming angles: descriptive names, brand-style names, and short memorable combinations you can turn into a consistent YouTube handle.',
        ],
      },
      why: {
        title: 'Why use an AI-powered YouTube Name Generator?',
        bullets: [
          'Creative momentum: get unstuck and explore ideas outside your first 5 obvious names.',
          'Brand fit: generate names that match your tone (educational, bold, friendly, premium).',
          'Speed: compare many options in minutes instead of brainstorming for hours.',
          'Memorability: focus on names that are easy to say, type, and recall.',
        ],
      },
      checks: {
        title: 'What does this tool look at?',
        bullets: [
          'Relevance: names should clearly connect to your topic and audience.',
          'Clarity: avoid confusing spelling and hard-to-pronounce word combinations.',
          'Brandability: suggestions that can grow with you beyond one exact video series.',
          'Handle ideas: each name comes with an @handle suggestion you can tweak.',
          'Availability hint: a quick check for whether the handle URL seems taken.',
        ],
      },
      howWorks: {
        title: 'How it works (in 30 seconds)',
        steps: [
          'Enter your topic (add niche + audience for best results).',
          'Generate a list of name ideas.',
          'Copy your favorites and shortlist 3-5 options.',
          'Verify: search YouTube + check handle + social profiles.',
          'Pick one and keep your branding consistent (banner, thumbnails, about page).',
        ],
      },
      tips: {
        title: 'Quick tips for picking the right channel name',
        bullets: [
          'Choose a name you can still use in 2 years if your content expands.',
          'Prefer simple spelling: it improves word-of-mouth and search.',
          'Avoid numbers and punctuation unless they are part of your brand.',
          'Check pronunciation: if people cannot say it, they will not share it.',
          'Keep handle, logo, and channel description aligned for a stronger brand.',
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Should my YouTube channel name include keywords?',
            answer:
              'It can help with clarity (people instantly understand your niche), but do not force it. A brandable name with a clear banner and channel description often performs better long term than a keyword-stuffed name.',
          },
          {
            question: 'Can I change my YouTube name later?',
            answer:
              'Yes, but frequent changes confuse subscribers and reduce recognition. Pick something flexible, then keep your handle and visuals consistent.',
          },
          {
            question: 'What makes a name memorable?',
            answer:
              'Short, pronounceable, and distinct. Aim for 1-3 words, avoid complex spelling, and choose a rhythm people can repeat.',
          },
          {
            question: 'How do I check if a name is already used?',
            answer:
              'Search YouTube for the name, check if the @handle is taken, and look on Instagram/TikTok if you want the same handle everywhere. This tool provides a fast availability hint, but you should always confirm manually.',
          },
        ],
      },
      cta: {
        title: 'Want help picking a name that converts?',
        subtitle:
          'If you want brand strategy + positioning, I can help you pick a name and set up the rest of your growth system.',
        button: 'Work with me',
      },
    },
  },
  nl: {
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
      subtitle: 'Vul je onderwerp in en krijg kanaalnaam ideeen die herkenbaar en bruikbaar zijn.',
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
          'Een YouTube naam generator geeft kanaalnaam ideeen op basis van een onderwerp, niche of korte omschrijving. Je krijgt snel opties die passen bij je content en die je doelgroep beter onthoudt.',
          'Deze tool gebruikt AI om meerdere richtingen te verkennen: beschrijvende namen, merk-achtige namen en korte combinaties die je makkelijk kunt omzetten naar een consistente YouTube handle.',
        ],
      },
      why: {
        title: 'Waarom een AI YouTube Naam Generator gebruiken?',
        bullets: [
          'Creatieve inspiratie: je komt sneller voorbij de standaard ideeen.',
          'Consistent merkgevoel: namen die matchen met je tone of voice.',
          'Tijdbesparing: in minuten een shortlist in plaats van uren puzzelen.',
          'Beter te onthouden: focus op namen die je makkelijk uitspreekt en typt.',
        ],
      },
      checks: {
        title: 'Waar let deze tool op?',
        bullets: [
          'Relevantie: de naam sluit aan op je onderwerp en doelgroep.',
          'Duidelijkheid: minder kans op verwarring door lastige spelling.',
          'Brandability: ruimte om later breder te gaan dan 1 serie videos.',
          'Handle ideeen: elke naam krijgt een @handle suggestie die je kunt tweaken.',
          'Beschikbaarheids-hint: snelle check of de handle URL al bezet lijkt.',
        ],
      },
      howWorks: {
        title: 'Zo werkt het (binnen 30 seconden)',
        steps: [
          'Vul je onderwerp in (niche + doelgroep werkt het best).',
          'Genereer een lijst met naam ideeen.',
          'Kopieer je favorieten en kies 3-5 opties.',
          'Verifieer: zoek op YouTube + check handle + socials.',
          'Kies 1 naam en maak je branding consistent (banner, thumbnails, about).',
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
  },
  de: {
    metadata: {
      title: 'YouTube Namensgenerator | Kostenlose AI Kanalnamen',
      description:
        'Generiere einpraegsame YouTube Kanalnamen basierend auf einem Thema. Inklusive @handle Vorschlaege und schneller Verfuegbarkeits-Check.',
      openGraph: {
        title: 'YouTube Namensgenerator | AI Kanalnamen Ideen',
        description: 'Kostenloses AI Tool fuer YouTube Namen: Ideen, Handle Vorschlaege und schnelle Checks.',
      },
    },
    hero: {
      title: 'YouTube Namensgenerator',
      subtitle: 'Gib dein Thema ein und erhalte Kanalnamen Ideen, die merkfaehig und nutzbar sind.',
    },
    form: {
      label: 'Thema',
      placeholder: 'z.B. SEO Tipps, Fitness fuer vielbeschaeftigte Mamas, Shopify Growth',
      button: {
        idle: 'Namen generieren',
        loading: 'Generiere...',
      },
      helper: 'Tipp: Nische + Zielgruppe (2-3 Woerter) liefert oft die besten Ideen.',
    },
    results: {
      title: 'Namensideen',
      subtitle: 'Klicke zum Kopieren. Handles sind Vorschlaege (du kannst sie anpassen).',
      columns: {
        name: 'Name',
        handle: 'Handle Idee',
        availability: 'Verfuegbarkeit',
      },
      availability: {
        available: 'Wahrscheinlich frei',
        taken: 'Belegt',
        unknown: 'Unbekannt',
        hint: 'Die Verfuegbarkeit ist ein schneller Check der @handle URL. Bitte immer direkt auf YouTube bestaetigen.',
      },
      actions: {
        copy: 'Kopieren',
        copied: 'Kopiert',
        tryAgain: 'Neu generieren',
      },
    },
    errors: {
      missingTopic: 'Bitte zuerst ein Thema eingeben.',
      failed: 'Konnte gerade keine Namen generieren. Bitte spaeter erneut versuchen.',
    },
    sections: {
      whatIs: {
        title: 'Was ist ein YouTube Namensgenerator?',
        paragraphs: [
          'Ein YouTube Namensgenerator liefert Vorschlaege fuer Kanalnamen basierend auf Thema, Nische oder kurzer Beschreibung. So bekommst du sofort Optionen, die zu deinem Content passen und leichter im Kopf bleiben.',
          'Dieses Tool nutzt AI fuer verschiedene Naming-Stile: beschreibend, brandable, oder kurze Kombinationen, die sich gut in einen konsistenten YouTube Handle uebertragen lassen.',
        ],
      },
      why: {
        title: 'Warum einen AI YouTube Namensgenerator nutzen?',
        bullets: [
          'Kreativer Push: du siehst Ideen ausserhalb deiner ersten Standardnamen.',
          'Markenfit: Vorschlaege passend zu deinem Stil (educational, bold, friendly).',
          'Zeit sparen: viele Optionen in Minuten vergleichen.',
          'Merkfaehigkeit: Fokus auf Namen, die leicht zu sagen und zu tippen sind.',
        ],
      },
      checks: {
        title: 'Worauf achtet das Tool?',
        bullets: [
          'Relevanz: der Name verbindet Thema und Zielgruppe klar.',
          'Klarheit: weniger Stolperfallen bei Aussprache und Schreibweise.',
          'Brandability: Raum fuer Wachstum ueber ein einzelnes Format hinaus.',
          'Handle Ideen: zu jedem Namen gibt es eine @handle Idee zum Anpassen.',
          'Verfuegbarkeits-Hinweis: schneller Check, ob die Handle URL belegt wirkt.',
        ],
      },
      howWorks: {
        title: 'So funktioniert es (in 30 Sekunden)',
        steps: [
          'Thema eingeben (Nische + Zielgruppe funktioniert am besten).',
          'Liste mit Namensideen generieren.',
          'Favoriten kopieren und 3-5 Optionen shortlist-en.',
          'Pruefen: YouTube Suche + Handle + Social Profiles.',
          'Entscheiden und Branding konsistent halten (Banner, Thumbnails, About).',
        ],
      },
      tips: {
        title: 'Tipps fuer den richtigen Kanalnamen',
        bullets: [
          'Waehle einen Namen, der auch in 2 Jahren noch passt, wenn du dich erweiterst.',
          'Halte die Schreibweise simpel: besser fuer Empfehlungen und Suche.',
          'Vermeide Zahlen und Sonderzeichen, ausser sie gehoeren zur Marke.',
          'Teste die Aussprache: wenn man es nicht sagen kann, teilt man es seltener.',
          'Handle, Logo und Kanaltext sollten zusammenpassen fuer ein staerkeres Branding.',
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Soll mein Kanalname Keywords enthalten?',
            answer:
              'Keywords helfen bei Klarheit, aber uebertreibe es nicht. Ein brandable Name mit klarer Positionierung in Banner und Beschreibung ist langfristig oft besser als Keyword-Stuffing.',
          },
          {
            question: 'Kann ich meinen YouTube Namen spaeter aendern?',
            answer:
              'Ja, aber zu viele Aenderungen verwirren Abonnenten. Waehle etwas Flexibles und bleib dann konsistent mit Handle und Design.',
          },
          {
            question: 'Was macht einen Namen merkfaehig?',
            answer:
              'Kurz, aussprechbar und einzigartig. 1-3 Woerter, einfache Schreibweise, und ein Klang, den man wiederholen kann.',
          },
          {
            question: 'Wie pruefe ich, ob ein Name schon genutzt wird?',
            answer:
              'Suche auf YouTube, pruefe den @handle und checke Instagram/TikTok falls du ueberall den gleichen Handle willst. Diese Seite gibt nur einen schnellen Hinweis, bitte immer manuell bestaetigen.',
          },
        ],
      },
      cta: {
        title: 'Willst du Hilfe bei einem Namen, der konvertiert?',
        subtitle:
          'Wenn du Brand-Strategie + Positionierung willst, helfe ich dir beim Namen und beim Setup deines Wachstumssystems.',
        button: 'Arbeite mit mir',
      },
    },
  },
  sv: {
    metadata: {
      title: 'YouTube Namngenerator | Gratis AI Kanalnamn Ideer',
      description:
        'Generera minnesvaerda YouTube kanalnamn utifran ett amne. Inkluderar @handle forslag och snabb tillganglighets-koll.',
      openGraph: {
        title: 'YouTube Namngenerator | AI Kanalnamn Ideer',
        description: 'Gratis AI verktyg for kanalnamn: ideer, handle forslag och snabba kontroller.',
      },
    },
    hero: {
      title: 'YouTube Namngenerator',
      subtitle: 'Skriv ditt amne och fa kanalnamn ideer som ar laetta att minnas.',
    },
    form: {
      label: 'Amne',
      placeholder: 't.ex. SEO Tips, Fitness for upptagna mammor, Shopify tillvaext',
      button: {
        idle: 'Generera namn',
        loading: 'Genererar...',
      },
      helper: 'Tips: kombinera nisch + publik (2-3 ord) for mer unika ideer.',
    },
    results: {
      title: 'Namneideer',
      subtitle: 'Klicka for att kopiera. Handles ar forslag (du kan justera dem).',
      columns: {
        name: 'Namn',
        handle: 'Handle ide',
        availability: 'Tillganglighet',
      },
      availability: {
        available: 'Troligen ledigt',
        taken: 'Upptaget',
        unknown: 'Okant',
        hint: 'Tillganglighet ar en snabb kontroll av @handle URL. Dubbelkolla alltid direkt pa YouTube.',
      },
      actions: {
        copy: 'Kopiera',
        copied: 'Kopierat',
        tryAgain: 'Generera igen',
      },
    },
    errors: {
      missingTopic: 'Ange ett amne forst.',
      failed: 'Kunde inte generera namn just nu. Forsok igen snart.',
    },
    sections: {
      whatIs: {
        title: 'Vad ar en YouTube Namngenerator?',
        paragraphs: [
          'En YouTube namngenerator ger forslag pa kanalnamn baserat pa ett amne, en nisch eller en kort beskrivning. Du far snabbt flera alternativ som passar din content och ar enklare att komma ihag.',
          'Detta verktyg anvander AI for att skapa olika naming-stilar: beskrivande, brandable och korta kombinationer som passar som YouTube handle.',
        ],
      },
      why: {
        title: 'Varfor anvanda en AI YouTube Namngenerator?',
        bullets: [
          'Inspiration: du far ideer du inte hade tankt pa sjalv.',
          'Varumarke: namn som matchar din ton (lugn, rolig, proffsig).',
          'Tid: skapa en shortlist snabbare.',
          'Minnesvaert: laett att saga, stava och komma ihag.',
        ],
      },
      checks: {
        title: 'Vad tittar verktyget pa?',
        bullets: [
          'Relevans: namn som kopplar till amne och publik.',
          'Tydlighet: undvik for kranglig stavning.',
          'Brandability: forslag som kan vaexa med kanalen.',
          'Handle ideer: @handle forslag du kan anpassa.',
          'Tillganglighets-hint: snabb koll om handle URL verkar upptagen.',
        ],
      },
      howWorks: {
        title: 'Sa funkar det (pa 30 sekunder)',
        steps: [
          'Skriv ditt amne (nisch + publik ger basta resultat).',
          'Generera en lista med namneideer.',
          'Kopiera favoriter och valj 3-5 alternativ.',
          'Verifiera: sok pa YouTube + kolla handle + sociala konton.',
          'Valj ett namn och hall branding konsekvent (banner, thumbnails, about).',
        ],
      },
      tips: {
        title: 'Snabba tips for att valja ratt kanalnamn',
        bullets: [
          'Valj ett namn som funkar om du breddar content senare.',
          'Enkel stavning gor delning och sok enklare.',
          'Undvik siffror och onodiga tecken om det inte ar ditt varumarke.',
          'Testa uttal: om det ar svart att saga, ar det svart att dela.',
          'Hall handle, logo och kanaltext i linje for ett starkare varumarke.',
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Bor kanalnamnet innehalla nyckelord?',
            answer:
              'Det kan ge tydlighet, men overdriv inte. Ett brandable namn med tydlig positionering i banner och beskrivning kan vara battre langsiktigt.',
          },
          {
            question: 'Kan jag byta kanalnamn senare?',
            answer:
              'Ja, men for ofta skapar forvirring. Valj nagot flexibelt och hall sedan handle och visuellt uttryck konsekvent.',
          },
          {
            question: 'Vad gor ett namn minnesvaert?',
            answer:
              'Kort, tydligt och unikt. Sikta pa 1-3 ord och undvik kranglig stavning.',
          },
          {
            question: 'Hur kollar jag om ett namn redan anvands?',
            answer:
              'Sok pa YouTube, kolla @handle och kontrollera andra sociala plattformar om du vill ha samma handle overallt. Verktyget ger en snabb hint, men dubbelkolla manuellt.',
          },
        ],
      },
      cta: {
        title: 'Vill du ha hjaelp att vaelja ett namn som konverterar?',
        subtitle:
          'Om du vill ha varumarkesstrategi + positionering kan jag hjalpa dig med namnval och resten av din tillvaext.',
        button: 'Jobba med mig',
      },
    },
  },
  da: {
    metadata: {
      title: 'YouTube Navnegenerator | Gratis AI Kanalnavne Ideer',
      description:
        'Generer faengende YouTube kanalnavne ud fra et emne. Inkluderer @handle forslag og hurtig tilgaengeligheds-check.',
      openGraph: {
        title: 'YouTube Navnegenerator | AI Kanalnavne Ideer',
        description: 'Gratis AI vaerktoej til kanalnavne: ideer, handle forslag og hurtige checks.',
      },
    },
    hero: {
      title: 'YouTube Navnegenerator',
      subtitle: 'Indtast dit emne og faa kanalnavne ideer, der er nemme at huske.',
    },
    form: {
      label: 'Emne',
      placeholder: 'fx SEO Tips, Fitness for travle moedre, Shopify vaekst',
      button: {
        idle: 'Generer navne',
        loading: 'Genererer...',
      },
      helper: 'Tip: kombiner niche + maalgruppe (2-3 ord) for mere unikke ideer.',
    },
    results: {
      title: 'Navneideer',
      subtitle: 'Klik for at kopiere. Handles er forslag (du kan tilpasse dem).',
      columns: {
        name: 'Navn',
        handle: 'Handle ide',
        availability: 'Tilgaengelighed',
      },
      availability: {
        available: 'Sandsynligvis ledigt',
        taken: 'Optaget',
        unknown: 'Ukendt',
        hint: 'Tilgaengelighed er et hurtigt opslag af @handle URL. Dobbelttjek altid direkte pa YouTube.',
      },
      actions: {
        copy: 'Kopier',
        copied: 'Kopieret',
        tryAgain: 'Generer igen',
      },
    },
    errors: {
      missingTopic: 'Indtast et emne foerst.',
      failed: 'Kunne ikke generere navne lige nu. Proev igen om lidt.',
    },
    sections: {
      whatIs: {
        title: 'Hvad er en YouTube Navnegenerator?',
        paragraphs: [
          'En YouTube navnegenerator foreslaar kanalnavne ud fra et emne, en niche eller en kort beskrivelse. Du faar hurtigt flere muligheder, som passer til dit indhold og er nemmere at huske.',
          'Dette vaerktoej bruger AI til at lave forskellige navnestile: beskrivende, brandable og korte kombinationer, der kan fungere som YouTube handle.',
        ],
      },
      why: {
        title: 'Hvorfor bruge en AI YouTube Navnegenerator?',
        bullets: [
          'Inspiration: fa ideer du ikke selv havde taenkt pa.',
          'Brand match: navne der passer til din tone (laerende, sjov, premium).',
          'Tid: lav en shortlist hurtigt.',
          'Mindevaerdigt: nemt at sige, skrive og huske.',
        ],
      },
      checks: {
        title: 'Hvad kigger vaerktoejet pa?',
        bullets: [
          'Relevans: navne der matcher emne og maalgruppe.',
          'Klarhed: undgaa besvaerlig stavning og udtale.',
          'Brandability: navne der kan vokse med kanalen.',
          'Handle ideer: @handle forslag du kan tilpasse.',
          'Tilgaengeligheds-hint: hurtig check om handle URL virker optaget.',
        ],
      },
      howWorks: {
        title: 'Saadan virker det (pa 30 sekunder)',
        steps: [
          'Indtast dit emne (niche + maalgruppe giver bedst resultat).',
          'Generer en liste med navneideer.',
          'Kopier favoritter og vaelg 3-5 muligheder.',
          'Verificer: soeg pa YouTube + tjek handle + sociale profiler.',
          'Vaelg et navn og hold branding konsistent (banner, thumbnails, about).',
        ],
      },
      tips: {
        title: 'Hurtige tips til at vaelge det rigtige kanalnavn',
        bullets: [
          'Vaelg et navn der stadig giver mening om 2 aar, hvis du udvider dit indhold.',
          'Enkel stavning goer deling lettere.',
          'Undgaa tal og tegn medmindre det er en del af brandet.',
          'Test udtale: hvis det er svaert at sige, er det svaert at dele.',
          'Hold handle, logo og kanaltekst pa linje for et staerkere brand.',
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Skal kanalnavnet indeholde keywords?',
            answer:
              'Det kan give klarhed, men du behoever ikke presse keywords ind. Et brandable navn med en tydelig beskrivelse kan fungere bedre pa lang sigt.',
          },
          {
            question: 'Kan jeg aendre mit kanalnavn senere?',
            answer:
              'Ja, men for mange skift skaber forvirring. Vaelg noget fleksibelt og vaer derefter konsekvent med handle og visuel stil.',
          },
          {
            question: 'Hvad goer et navn mindevaerdigt?',
            answer:
              'Kort, let at udtale og unikt. Ga efter 1-3 ord og undgaa besvaerlig stavning.',
          },
          {
            question: 'Hvordan tjekker jeg om et navn allerede bruges?',
            answer:
              'Soeg pa YouTube, tjek @handle og kig pa andre sociale medier hvis du vil have samme handle overalt. Vaerktoejet giver en hurtig hint, men dobbelttjek manuelt.',
          },
        ],
      },
      cta: {
        title: 'Vil du have hjaelp til et navn der konverterer?',
        subtitle:
          'Hvis du vil have brand strategi + positionering, kan jeg hjalpe dig med navnvalg og resten af dit vaekst setup.',
        button: 'Arbejd med mig',
      },
    },
  },
  fr: {
    metadata: {
      title: 'Generateur de Nom YouTube | Idees de Chaine avec AI',
      description:
        'Generez des idees de noms YouTube a partir dun sujet. Inclut des suggestions de @handle et une verification rapide de disponibilite.',
      openGraph: {
        title: 'Generateur de Nom YouTube | Idees de Chaine AI',
        description: 'Outil gratuit pour des noms YouTube: idees, suggestions de handle et checks rapides.',
      },
    },
    hero: {
      title: 'Generateur de Nom YouTube',
      subtitle: 'Entrez votre sujet et obtenez des idees de noms de chaine faciles a retenir.',
    },
    form: {
      label: 'Sujet',
      placeholder: 'ex: Conseils SEO, Fitness pour mamans, Shopify croissance',
      button: {
        idle: 'Generer des noms',
        loading: 'Generation...',
      },
      helper: 'Astuce: ajoutez niche + audience (2-3 mots) pour des idees plus uniques.',
    },
    results: {
      title: 'Idees de noms',
      subtitle: 'Cliquez pour copier. Les handles sont des suggestions (vous pouvez les modifier).',
      columns: {
        name: 'Nom',
        handle: 'Idee de handle',
        availability: 'Disponibilite',
      },
      availability: {
        available: 'Probablement disponible',
        taken: 'Pris',
        unknown: 'Inconnu',
        hint: 'La disponibilite est un check rapide de lURL @handle. Verifiez toujours sur YouTube avant de choisir.',
      },
      actions: {
        copy: 'Copier',
        copied: 'Copie',
        tryAgain: 'Generer encore',
      },
    },
    errors: {
      missingTopic: 'Entrez dabord un sujet.',
      failed: 'Impossible de generer des noms pour le moment. Reessayez bientot.',
    },
    sections: {
      whatIs: {
        title: 'Quest-ce quun Generateur de Nom YouTube?',
        paragraphs: [
          'Un generateur de nom YouTube propose des idees de noms de chaine a partir dun sujet, dune niche ou dune courte description. Vous obtenez rapidement plusieurs options pertinentes et memorables.',
          'Cet outil utilise lAI pour explorer plusieurs styles: descriptif, brandable, et des combinaisons courtes qui peuvent devenir un handle coherent.',
        ],
      },
      why: {
        title: 'Pourquoi utiliser un generateur AI?',
        bullets: [
          'Inspiration: sortez des 5 premieres idees evidentes.',
          'Cohesion: trouvez un nom qui colle a votre ton et votre promesse.',
          'Gain de temps: comparez beaucoup doptions en quelques minutes.',
          'Memorisation: des noms faciles a dire, taper, et retenir.',
        ],
      },
      checks: {
        title: 'Que verifie cet outil?',
        bullets: [
          'Pertinence: lien clair entre le nom, le sujet, et la cible.',
          'Clarte: eviter une orthographe trop compliqu ee.',
          'Brandability: un nom qui peut evoluer avec votre contenu.',
          'Idees de handle: une suggestion de @handle pour chaque nom.',
          'Indice de disponibilite: check rapide si lURL du handle semble prise.',
        ],
      },
      howWorks: {
        title: 'Comment ca marche (30 secondes)',
        steps: [
          'Entrez votre sujet (niche + audience marche le mieux).',
          'Generez une liste didees.',
          'Copiez vos favoris et gardez 3-5 options.',
          'Verifiez: recherche YouTube + handle + reseaux sociaux.',
          'Choisissez un nom et gardez un branding coherent.',
        ],
      },
      tips: {
        title: 'Conseils rapides pour choisir un nom de chaine',
        bullets: [
          'Choisissez un nom flexible si votre contenu evolue.',
          'Preferer une orthographe simple pour le bouche-a-oreille.',
          "Evitez chiffres et ponctuation sauf si c'est votre marque.",
          'Testez la prononciation: un nom facile se partage mieux.',
          'Alignez handle, logo et description pour renforcer le brand.',
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Dois-je inclure des mots-cles dans le nom?',
            answer:
              'Ca peut aider la clarte, mais ne forcez pas. Un nom brandable avec une bonne description de chaine est souvent meilleur sur le long terme.',
          },
          {
            question: 'Puis-je changer le nom plus tard?',
            answer:
              'Oui, mais changer trop souvent nuit a la reconnaissance. Choisissez un nom flexible et restez coherent avec le handle et le visuel.',
          },
          {
            question: 'Qu est-ce qui rend un nom memor able?',
            answer:
              'Court, prononcable, et different. Visez 1-3 mots et evitez une orthographe difficile.',
          },
          {
            question: 'Comment verifier si un nom est deja utilise?',
            answer:
              'Cherchez sur YouTube, verifiez le @handle, et regardez Instagram/TikTok si vous voulez le meme handle partout. Loutil donne un indice, mais confirmez manuellement.',
          },
        ],
      },
      cta: {
        title: "Besoin d'aide pour choisir un nom qui convertit?",
        subtitle:
          "Si vous voulez une strategie de marque + positionnement, je peux vous aider a choisir un nom et a mettre en place votre systeme de croissance.",
        button: 'Travaillez avec moi',
      },
    },
  },
  it: {
    metadata: {
      title: 'Generatore Nomi YouTube | Idee Canale con AI',
      description:
        'Genera idee di nomi per canali YouTube partendo da un topic. Include suggerimenti @handle e un controllo rapido di disponibilita.',
      openGraph: {
        title: 'Generatore Nomi YouTube | Idee Canale AI',
        description: 'Tool gratuito per nomi YouTube: idee, handle suggeriti e controlli rapidi.',
      },
    },
    hero: {
      title: 'Generatore Nomi YouTube',
      subtitle: 'Inserisci il tuo topic e ottieni idee di nomi di canale facili da ricordare.',
    },
    form: {
      label: 'Topic',
      placeholder: 'es: SEO Tips, Fitness per mamme, Shopify crescita',
      button: {
        idle: 'Genera nomi',
        loading: 'Generazione...',
      },
      helper: 'Tip: aggiungi nicchia + pubblico (2-3 parole) per idee piu uniche.',
    },
    results: {
      title: 'Idee di nomi',
      subtitle: 'Clicca per copiare. Gli handle sono suggerimenti (puoi modificarli).',
      columns: {
        name: 'Nome',
        handle: 'Idea handle',
        availability: 'Disponibilita',
      },
      availability: {
        available: 'Probabilmente disponibile',
        taken: 'Occupato',
        unknown: 'Sconosciuto',
        hint: 'La disponibilita e un controllo rapido della URL @handle. Verifica sempre su YouTube prima di scegliere.',
      },
      actions: {
        copy: 'Copia',
        copied: 'Copiato',
        tryAgain: 'Genera di nuovo',
      },
    },
    errors: {
      missingTopic: 'Inserisci prima un topic.',
      failed: 'Non riesco a generare nomi in questo momento. Riprova tra poco.',
    },
    sections: {
      whatIs: {
        title: 'Cos e un Generatore di Nomi YouTube?',
        paragraphs: [
          'Un generatore di nomi YouTube suggerisce idee per il nome del canale partendo da un topic, una nicchia o una breve descrizione. Invece di fare brainstorming per ore, ottieni subito opzioni pertinenti e memorabili.',
          'Questo tool usa AI per creare diversi stili: descrittivo, brandable e combinazioni brevi che puoi trasformare in un handle coerente.',
        ],
      },
      why: {
        title: 'Perche usare un generatore AI?',
        bullets: [
          'Ispirazione: idee originali oltre le solite opzioni.',
          'Coerenza: un nome che rispecchia il tuo tone of voice.',
          'Velocita: confronta tante idee in pochi minuti.',
          'Memorabile: nomi facili da dire, scrivere e ricordare.',
        ],
      },
      checks: {
        title: 'Cosa valuta questo tool?',
        bullets: [
          'Rilevanza: il nome deve collegarsi al topic e al pubblico.',
          'Chiarezza: evita spelling complicato o difficile da pronunciare.',
          'Brandability: idee che possono crescere con il canale.',
          'Handle: suggerimento di @handle per ogni nome.',
          'Disponibilita (hint): controllo veloce se la URL del handle sembra occupata.',
        ],
      },
      howWorks: {
        title: 'Come funziona (in 30 secondi)',
        steps: [
          'Inserisci il topic (nicchia + pubblico funziona meglio).',
          'Genera una lista di idee.',
          'Copia i preferiti e tieni 3-5 opzioni.',
          'Verifica: cerca su YouTube + controlla handle + social.',
          'Scegli un nome e mantieni branding coerente.',
        ],
      },
      tips: {
        title: 'Consigli rapidi per scegliere il nome giusto',
        bullets: [
          'Scegli un nome flessibile se in futuro allarghi i contenuti.',
          'Spelling semplice aiuta passaparola e ricerca.',
          'Evita numeri e simboli se non fanno parte del brand.',
          'Prova la pronuncia: un nome facile si condivide di piu.',
          'Allinea handle, logo e descrizione per un brand piu forte.',
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Devo includere keyword nel nome?',
            answer:
              'Le keyword possono aiutare la chiarezza, ma non forzarle. Un nome brandable con una buona descrizione del canale puo funzionare meglio nel lungo periodo.',
          },
          {
            question: 'Posso cambiare nome in seguito?',
            answer:
              'Si, ma cambiare spesso riduce la riconoscibilita. Scegli qualcosa di flessibile e poi resta coerente con handle e grafica.',
          },
          {
            question: 'Cosa rende un nome memorabile?',
            answer:
              'Corto, pronunciabile e diverso. Punta a 1-3 parole e evita spelling complicato.',
          },
          {
            question: 'Come verifico se un nome e gia usato?',
            answer:
              'Cerca su YouTube, controlla il @handle e guarda Instagram/TikTok se vuoi lo stesso handle ovunque. Questo tool da un hint rapido, ma verifica sempre manualmente.',
          },
        ],
      },
      cta: {
        title: 'Vuoi aiuto a scegliere un nome che converte?',
        subtitle:
          'Se vuoi strategia di brand + posizionamento, posso aiutarti con il nome e con il resto del tuo sistema di crescita.',
        button: 'Lavora con me',
      },
    },
  },
};

export function getYouTubeNameGeneratorCopy(locale) {
  return getLocaleCopy(copy, locale);
}
