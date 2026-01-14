import { getLocaleCopy } from './utils';

const copy = {
  en: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'E-commerce Owner', text: 'Excellent SEO results! Reached the #1 position within 3 months.', rating: 5 },
      { name: 'Marlon V.', company: 'Marketing Manager', text: 'Professional Google Ads approach, revenue up 180%!', rating: 5 },
      { name: 'Gerlinde K.', company: 'Business Owner', text: 'Very happy with the personal guidance and results.', rating: 5 },
      { name: 'Patrick S.', company: 'CEO Tech Startup', text: 'Website optimization worked wonders for conversions.', rating: 5 },
      { name: 'Linda M.', company: 'Online Retailer', text: 'Rankings improved and the entire marketing process optimized.', rating: 5 },
      { name: 'Sophie D.', company: 'SME Owner', text: 'From page 3 to top 3 for all our main terms!', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Content Creator', text: 'Every new blog post ranks perfectly thanks to their strategy.', rating: 5 },
      { name: 'Emma R.', company: 'Webshop Owner', text: 'After 2 months, clearly more visitors and inquiries.', rating: 5 },
      { name: 'David E.', company: 'IT Director', text: 'Technical SEO audit uncovered critical improvements.', rating: 5 },
      { name: 'Sarah M.', company: 'B2B Manager', text: '2 years of collaboration, proactive and knowledgeable. Top service!', rating: 5 },
      { name: 'Mike O.', company: 'Digital Marketer', text: 'The SEO and Google Ads combo took us to the next level.', rating: 5 },
      { name: 'Anna K.', company: 'Fitness Studio', text: 'Content strategy works perfectly. More traffic and conversions!', rating: 5 },
    ],
  },
  nl: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'E-commerce Eigenaar', text: 'Uitstekende SEO resultaten! Binnen 3 maanden #1 positie bereikt.', rating: 5 },
      { name: 'Marlon V.', company: 'Marketing Manager', text: 'Professionele Google Ads aanpak, omzet 180% gestegen!', rating: 5 },
      { name: 'Gerlinde K.', company: 'Bedrijfseigenaar', text: 'Zeer tevreden met de persoonlijke begeleiding en resultaten.', rating: 5 },
      { name: 'Patrick S.', company: 'CEO Tech Startup', text: 'Website optimalisatie heeft wonderen gedaan voor conversie.', rating: 5 },
      { name: 'Linda M.', company: 'Online Retailer', text: 'Rankings verbeterd en hele marketing proces geoptimaliseerd.', rating: 5 },
      { name: 'Sophie D.', company: 'MKB Eigenaar', text: 'Van pagina 3 naar top 3 voor al onze hoofdtermen!', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Content Creator', text: 'Elke nieuwe blog post rankt perfect dankzij hun strategie.', rating: 5 },
      { name: 'Emma R.', company: 'Webshop Eigenaar', text: 'Na 2 maanden al duidelijk meer bezoekers en aanvragen.', rating: 5 },
      { name: 'David E.', company: 'IT Directeur', text: 'Technische SEO audit bracht cruciale verbeteringen aan het licht.', rating: 5 },
      { name: 'Sarah M.', company: 'B2B Manager', text: '2 jaar samenwerking, proactief en deskundig. Top service!', rating: 5 },
      { name: 'Mike O.', company: 'Digital Marketeer', text: 'SEO en Google Ads combinatie bracht ons naar een hoger niveau.', rating: 5 },
      { name: 'Anna K.', company: 'Fitness Studio', text: 'Content strategie werkt perfect. Meer traffic en conversies!', rating: 5 },
    ],
  },
  de: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'E-Commerce Inhaber', text: 'Hervorragende SEO-Ergebnisse! In 3 Monaten Platz #1 erreicht.', rating: 5 },
      { name: 'Marlon V.', company: 'Marketing Manager', text: 'Professioneller Google-Ads-Ansatz, Umsatz um 180% gestiegen!', rating: 5 },
      { name: 'Gerlinde K.', company: 'Unternehmensinhaber', text: 'Sehr zufrieden mit der persoenlichen Betreuung und den Ergebnissen.', rating: 5 },
      { name: 'Patrick S.', company: 'CEO Tech Startup', text: 'Website-Optimierung hat Wunder fuer die Conversion bewirkt.', rating: 5 },
      { name: 'Linda M.', company: 'Online-Haendler', text: 'Rankings verbessert und der gesamte Marketingprozess optimiert.', rating: 5 },
      { name: 'Sophie D.', company: 'KMU-Inhaber', text: 'Von Seite 3 in die Top 3 fuer alle Hauptbegriffe!', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Content Creator', text: 'Jeder neue Blogpost rankt dank ihrer Strategie perfekt.', rating: 5 },
      { name: 'Emma R.', company: 'Webshop-Inhaber', text: 'Nach 2 Monaten schon deutlich mehr Besucher und Anfragen.', rating: 5 },
      { name: 'David E.', company: 'IT-Direktor', text: 'Der technische SEO-Audit zeigte entscheidende Verbesserungen.', rating: 5 },
      { name: 'Sarah M.', company: 'B2B-Manager', text: '2 Jahre Zusammenarbeit, proaktiv und kompetent. Top Service!', rating: 5 },
      { name: 'Mike O.', company: 'Digital Marketer', text: 'Die Kombination aus SEO und Google Ads hat uns auf das naechste Level gebracht.', rating: 5 },
      { name: 'Anna K.', company: 'Fitnessstudio', text: 'Die Content-Strategie funktioniert perfekt. Mehr Traffic und Conversions!', rating: 5 },
    ],
  },
  sv: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'E-handelsagare', text: 'Utmärkta SEO-resultat! Nade #1-position inom 3 manader.', rating: 5 },
      { name: 'Marlon V.', company: 'Marknadsforingschef', text: 'Professionell Google Ads-satsning, omsattningen upp 180%!', rating: 5 },
      { name: 'Gerlinde K.', company: 'Foretagsagare', text: 'Mycket nojd med personlig guidning och resultat.', rating: 5 },
      { name: 'Patrick S.', company: 'VD Tech Startup', text: 'Webbplatsoptimering gjorde underverk for konvertering.', rating: 5 },
      { name: 'Linda M.', company: 'Onlinehandlare', text: 'Bättre rankingar och hela marknadsforingsprocessen optimerad.', rating: 5 },
      { name: 'Sophie D.', company: 'SME-agare', text: 'Fran sida 3 till topp 3 for alla vara huvudtermer!', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Innehallsskapare', text: 'Varje ny bloggartikel rankar perfekt tack vare deras strategi.', rating: 5 },
      { name: 'Emma R.', company: 'Webshop-agare', text: 'Efter 2 manader redan tydligt fler besokare och forfragningar.', rating: 5 },
      { name: 'David E.', company: 'IT-direktor', text: 'Teknisk SEO-audit visade kritiska forbattringar.', rating: 5 },
      { name: 'Sarah M.', company: 'B2B-chef', text: '2 ars samarbete, proaktivt och kunnigt. Toppen!', rating: 5 },
      { name: 'Mike O.', company: 'Digital marknadsforare', text: 'Kombinationen av SEO och Google Ads tog oss till nasta niva.', rating: 5 },
      { name: 'Anna K.', company: 'Fitnessstudio', text: 'Content-strategin fungerar perfekt. Mer trafik och konverteringar!', rating: 5 },
    ],
  },
  da: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'E-handelsejer', text: 'Fremragende SEO-resultater! Naede #1 position pa 3 maneder.', rating: 5 },
      { name: 'Marlon V.', company: 'Marketingchef', text: 'Professionel Google Ads-indsats, omsaetningen op 180%!', rating: 5 },
      { name: 'Gerlinde K.', company: 'Virksomhedsejer', text: 'Meget tilfreds med den personlige vejledning og resultaterne.', rating: 5 },
      { name: 'Patrick S.', company: 'CEO Tech Startup', text: 'Website-optimering gjorde undervaerker for konvertering.', rating: 5 },
      { name: 'Linda M.', company: 'Onlineforhandler', text: 'Bedre rankings og hele marketingprocessen optimeret.', rating: 5 },
      { name: 'Sophie D.', company: 'SMV-ejer', text: 'Fra side 3 til top 3 pa alle vores hovedtermer!', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Indholdsskaber', text: 'Hver ny blogpost ranker perfekt takket vaere deres strategi.', rating: 5 },
      { name: 'Emma R.', company: 'Webshop-ejer', text: 'Efter 2 maneder allerede tydeligt flere besoegende og henvendelser.', rating: 5 },
      { name: 'David E.', company: 'IT-direktor', text: 'Teknisk SEO-audit afslorede afgorende forbedringer.', rating: 5 },
      { name: 'Sarah M.', company: 'B2B-chef', text: '2 ars samarbejde, proaktivt og kompetent. Top service!', rating: 5 },
      { name: 'Mike O.', company: 'Digital marketer', text: 'Kombinationen af SEO og Google Ads tog os til naeste niveau.', rating: 5 },
      { name: 'Anna K.', company: 'Fitnessstudio', text: 'Content-strategien fungerer perfekt. Mere trafik og konverteringer!', rating: 5 },
    ],
  },
  fr: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'Proprietaire e-commerce', text: 'Excellents resultats SEO ! Position #1 atteinte en 3 mois.', rating: 5 },
      { name: 'Marlon V.', company: 'Responsable marketing', text: "Approche Google Ads professionnelle, chiffre d'affaires +180% !", rating: 5 },
      { name: 'Gerlinde K.', company: "Chef d'entreprise", text: "Tres satisfait de l'accompagnement personnel et des resultats.", rating: 5 },
      { name: 'Patrick S.', company: 'CEO Tech Startup', text: "L'optimisation du site a fait des merveilles pour les conversions.", rating: 5 },
      { name: 'Linda M.', company: 'Commercant en ligne', text: 'Meilleur classement et processus marketing entierement optimise.', rating: 5 },
      { name: 'Sophie D.', company: 'Proprietaire PME', text: 'De la page 3 au top 3 sur tous nos mots-cles principaux !', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Createur de contenu', text: 'Chaque nouvel article de blog se positionne parfaitement grace a leur strategie.', rating: 5 },
      { name: 'Emma R.', company: 'Proprietaire de boutique', text: 'Apres 2 mois, nettement plus de visiteurs et de demandes.', rating: 5 },
      { name: 'David E.', company: 'Directeur IT', text: "L'audit SEO technique a revele des ameliorations cruciales.", rating: 5 },
      { name: 'Sarah M.', company: 'Responsable B2B', text: '2 ans de collaboration, proactif et competent. Super service !', rating: 5 },
      { name: 'Mike O.', company: 'Marketeur digital', text: 'La combinaison SEO et Google Ads nous a fait passer au niveau superieur.', rating: 5 },
      { name: 'Anna K.', company: 'Studio de fitness', text: 'La strategie de contenu fonctionne parfaitement. Plus de trafic et de conversions !', rating: 5 },
    ],
  },
  it: {
    reviewsRow1: [
      { name: 'Marcel B.', company: 'Titolare e-commerce', text: 'Risultati SEO eccellenti! Posizione #1 raggiunta in 3 mesi.', rating: 5 },
      { name: 'Marlon V.', company: 'Responsabile marketing', text: 'Approccio Google Ads professionale, fatturato +180%!', rating: 5 },
      { name: 'Gerlinde K.', company: 'Titolare azienda', text: 'Molto soddisfatto della guida personale e dei risultati.', rating: 5 },
      { name: 'Patrick S.', company: 'CEO Tech Startup', text: "L'ottimizzazione del sito ha fatto miracoli per le conversioni.", rating: 5 },
      { name: 'Linda M.', company: 'Rivenditore online', text: 'Ranking migliorati e processo marketing ottimizzato.', rating: 5 },
      { name: 'Sophie D.', company: 'Titolare PMI', text: 'Da pagina 3 a top 3 per tutte le nostre keyword principali!', rating: 5 },
    ],
    reviewsRow2: [
      { name: 'Tom W.', company: 'Creatore di contenuti', text: 'Ogni nuovo post del blog si posiziona alla perfezione grazie alla loro strategia.', rating: 5 },
      { name: 'Emma R.', company: 'Titolare webshop', text: 'Dopo 2 mesi gia chiaramente piu visitatori e richieste.', rating: 5 },
      { name: 'David E.', company: 'Direttore IT', text: "L'audit SEO tecnico ha evidenziato miglioramenti cruciali.", rating: 5 },
      { name: 'Sarah M.', company: 'Responsabile B2B', text: '2 anni di collaborazione, proattivi e competenti. Servizio top!', rating: 5 },
      { name: 'Mike O.', company: 'Digital Marketer', text: 'La combinazione di SEO e Google Ads ci ha portato al livello successivo.', rating: 5 },
      { name: 'Anna K.', company: 'Palestra', text: 'La strategia di contenuti funziona perfettamente. Piu traffico e conversioni!', rating: 5 },
    ],
  },
};

export function getGoogleReviewBarCopy(locale) {
  return getLocaleCopy(copy, locale);
}
