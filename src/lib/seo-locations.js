export const SEO_LOCATION_SLUGS = [
  'amsterdam',
  'rotterdam',
  'utrecht',
  'eindhoven',
  'den-haag',
  'groningen',
  'tilburg',
  'almere',
  'breda',
  'nijmegen',
  'enschede',
  'apeldoorn',
  'haarlem',
  'arnhem',
  'amersfoort',
  'zaanstad',
  'haarlemmermeer',
  'den-bosch',
  'dordrecht',
  'leiden',
  'zoetermeer',
  'zwolle',
  'maastricht',
  'leeuwarden',
  'deventer',
  'delft',
  'alkmaar',
  'venlo',
  'helmond',
  'hengelo',
  'hilversum',
  'hoorn',
  'lelystad',
  'amstelveen',
  'gouda',
  'purmerend',
  'oss',
  'oosterhout',
  'heerlen',
  'ede',
  'barneveld',
  'nijkerk',
  'veenendaal',
  'harderwijk',
  'putten',
  'leusden',
  'woerden',
];

const DISPLAY_NAME_OVERRIDES = {
  'alphen-aan-den-rijn': 'Alphen aan den Rijn',
  'bergen-op-zoom': 'Bergen op Zoom',
  'capelle-aan-den-ijssel': 'Capelle aan den IJssel',
  'den-bosch': 'Den Bosch',
  'den-haag': 'Den Haag',
  'den-helder': 'Den Helder',
  'gulpen-wittem': 'Gulpen-Wittem',
  'leidschendam-voorburg': 'Leidschendam-Voorburg',
  'ouder-amstel': 'Ouder-Amstel',
  'schin-op-geul': 'Schin op Geul',
  'sint-anthonis': 'Sint Anthonis',
  'sint-michielsgestel': 'Sint-Michielsgestel',
  'sint-oedenrode': 'Sint-Oedenrode',
  'stichtse-vecht': 'Stichtse Vecht',
};

export const SEO_LOCATION_NEARBY_OVERRIDES = {
  alkmaar: ['Heerhugowaard', 'Bergen', 'Castricum', 'Heiloo'],
  amersfoort: ['Leusden', 'Soest', 'Nijkerk', 'Hoevelaken'],
  amsterdam: ['Amstelveen', 'Diemen', 'Ouder-Amstel', 'Zaandam'],
  amstelveen: ['Amsterdam Zuid', 'Ouder-Amstel', 'Aalsmeer', 'Uithoorn'],
  apeldoorn: ['Beekbergen', 'Ugchelen', 'Twello', 'Epe'],
  arnhem: ['Oosterbeek', 'Westervoort', 'Velp', 'Elst'],
  barneveld: ['Harselaar', 'Voorthuizen', 'Kootwijkerbroek', 'Ede'],
  breda: ['Oosterhout', 'Etten-Leur', 'Teteringen', 'Prinsenbeek'],
  delft: ['Rijswijk', 'Den Haag', 'Pijnacker', 'Schiedam'],
  'den-haag': ['Rijswijk', 'Leidschendam-Voorburg', 'Delft', 'Westland'],
  deventer: ['Twello', 'Zutphen', 'Bathmen', 'Apeldoorn'],
  dordrecht: ['Zwijndrecht', 'Sliedrecht', 'Papendrecht', 'Hendrik-Ido-Ambacht'],
  ede: ['Bennekom', 'Lunteren', 'Veenendaal', 'Wageningen'],
  eindhoven: ['Veldhoven', 'Best', 'Helmond', 'Nuenen'],
  enschede: ['Hengelo', 'Oldenzaal', 'Borne', 'Haaksbergen'],
  gouda: ['Waddinxveen', 'Bodegraven', 'Reeuwijk', 'Oudewater'],
  groningen: ['Haren', 'Hoogezand', 'Eelde', 'Assen'],
  haarlem: ['Heemstede', 'Bloemendaal', 'Zandvoort', 'Velsen'],
  harderwijk: ['Ermelo', 'Putten', 'Nunspeet', 'Zeewolde'],
  helmond: ['Eindhoven', 'Deurne', 'Nuenen', 'Geldrop'],
  hengelo: ['Enschede', 'Borne', 'Almelo', 'Oldenzaal'],
  hilversum: ['Bussum', 'Laren', 'Blaricum', 'Soest'],
  hoorn: ['Zwaag', 'Blokker', 'Enkhuizen', 'Purmerend'],
  leeuwarden: ['Stiens', 'Dokkum', 'Sneek', 'Harlingen'],
  leiden: ['Leiderdorp', 'Katwijk', 'Oegstgeest', 'Alphen aan den Rijn'],
  lelystad: ['Dronten', 'Almere', 'Zeewolde', 'Urk'],
  maastricht: ['Valkenburg', 'Meerssen', 'Sittard', 'Heerlen'],
  nijmegen: ['Wijchen', 'Beuningen', 'Elst', 'Groesbeek'],
  nijkerk: ['Hoevelaken', 'Putten', 'Amersfoort', 'Barneveld'],
  putten: ['Nijkerk', 'Ermelo', 'Harderwijk', 'Voorthuizen'],
  rotterdam: ['Schiedam', 'Vlaardingen', 'Capelle aan den IJssel', 'Barendrecht'],
  tilburg: ['Goirle', 'Oisterwijk', 'Waalwijk', 'Breda'],
  utrecht: ['Nieuwegein', 'Houten', 'Zeist', 'Bunnik'],
  veenendaal: ['Ede', 'Renswoude', 'Woudenberg', 'Rhenen'],
  venlo: ['Blerick', 'Tegelen', 'Sevenum', 'Roermond'],
  woerden: ['Montfoort', 'Oudewater', 'Bodegraven', 'Utrecht'],
  zaanstad: ['Amsterdam Noord', 'Oostzaan', 'Purmerend', 'Uitgeest'],
  zwolle: ['Kampen', 'Hasselt', 'Hattem', 'Dalfsen'],
};

const MAJOR_MARKETS = new Set([
  'alkmaar',
  'almere',
  'amersfoort',
  'amsterdam',
  'amstelveen',
  'apeldoorn',
  'arnhem',
  'breda',
  'delft',
  'den-bosch',
  'den-haag',
  'deventer',
  'dordrecht',
  'eindhoven',
  'enschede',
  'gouda',
  'groningen',
  'haarlem',
  'haarlemmermeer',
  'heerlen',
  'helmond',
  'hengelo',
  'hilversum',
  'hoorn',
  'leiden',
  'leeuwarden',
  'lelystad',
  'maastricht',
  'nijmegen',
  'oosterhout',
  'oss',
  'purmerend',
  'rotterdam',
  'tilburg',
  'utrecht',
  'venlo',
  'zaanstad',
  'zoetermeer',
  'zwolle',
]);

function titleCasePart(part, index) {
  const lower = part.toLowerCase();
  const lowercaseParticles = new Set(['aan', 'de', 'den', 'der', 'en', 'het', 'op', 'van']);

  if (index > 0 && lowercaseParticles.has(lower)) {
    return lower;
  }

  if (lower === 'ijssel') return 'IJssel';
  if (lower === 'gld') return 'GLD';

  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function formatSeoLocationName(slug) {
  if (DISPLAY_NAME_OVERRIDES[slug]) {
    return DISPLAY_NAME_OVERRIDES[slug];
  }

  return slug.split('-').map(titleCasePart).join(' ');
}

export function getSeoLocationSlugs() {
  return [...SEO_LOCATION_SLUGS];
}

export function getSeoLocationNearby(slug, name) {
  return SEO_LOCATION_NEARBY_OVERRIDES[slug] || [
    `regio ${name}`,
    'omliggende plaatsen',
    'nabijgelegen bedrijventerreinen',
    'lokale zoekopdrachten',
  ];
}

export function isMajorSeoMarket(slug) {
  return MAJOR_MARKETS.has(slug);
}

export const SEO_LOCATION_MENU_ITEMS = SEO_LOCATION_SLUGS.map((slug) => ({
  slug,
  name: formatSeoLocationName(slug),
  href: `/seo-specialist/${slug}`,
  label: `SEO specialist ${formatSeoLocationName(slug)}`,
}));
