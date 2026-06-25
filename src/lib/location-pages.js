import fs from 'node:fs';
import path from 'node:path';
import {
  formatSeoLocationName,
  getSeoLocationNearby,
  getSeoLocationSlugs,
  isMajorSeoMarket,
} from './seo-locations.js';

const MARKETING_LOCATIONS_ROOT = path.join(process.cwd(), 'src/app/marketing');
const EXCLUDED_DIRECTORIES = new Set(['.claude']);

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

const NEARBY_OVERRIDES = {
  amersfoort: ['Leusden', 'Soest', 'Nijkerk', 'Hoevelaken'],
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
  schiedam: ['Rotterdam', 'Vlaardingen', 'Delft', 'Capelle aan den IJssel'],
  tilburg: ['Goirle', 'Oisterwijk', 'Waalwijk', 'Breda'],
  utrecht: ['Nieuwegein', 'Houten', 'Zeist', 'Bunnik'],
  veenendaal: ['Ede', 'Renswoude', 'Woudenberg', 'Rhenen'],
  vlaardingen: ['Schiedam', 'Rotterdam', 'Maassluis', 'Delft'],
  woerden: ['Montfoort', 'Oudewater', 'Bodegraven', 'Utrecht'],
  zaandstad: ['Amsterdam Noord', 'Oostzaan', 'Purmerend', 'Uitgeest'],
  zaandam: ['Amsterdam Noord', 'Oostzaan', 'Purmerend', 'Uitgeest'],
  zaanstad: ['Amsterdam Noord', 'Oostzaan', 'Purmerend', 'Uitgeest'],
  zwolle: ['Kampen', 'Hasselt', 'Hattem', 'Dalfsen'],
};

const MAJOR_MARKETS = new Set([
  'almere',
  'amersfoort',
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

export function formatLocationName(slug) {
  if (DISPLAY_NAME_OVERRIDES[slug]) {
    return DISPLAY_NAME_OVERRIDES[slug];
  }

  return slug.split('-').map(titleCasePart).join(' ');
}

export function getMarketingLocationSlugs() {
  if (!fs.existsSync(MARKETING_LOCATIONS_ROOT)) {
    return [];
  }

  return fs
    .readdirSync(MARKETING_LOCATIONS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => !EXCLUDED_DIRECTORIES.has(slug))
    .filter((slug) => fs.existsSync(path.join(MARKETING_LOCATIONS_ROOT, slug, 'page.js')))
    .sort((a, b) => a.localeCompare(b, 'nl'));
}

export function getLocationProfile(slug) {
  const locationSlugs = getSeoLocationSlugs();

  if (!locationSlugs.includes(slug)) {
    return null;
  }

  const name = formatSeoLocationName(slug);
  const isMajorMarket = isMajorSeoMarket(slug);
  const nearby = getSeoLocationNearby(slug, name);

  const marketType = isMajorMarket ? 'stedelijke markt' : 'lokale markt';
  const marketDescription = isMajorMarket
    ? `${name} heeft genoeg zoekvolume en concurrentie om SEO per dienst, intentie en doelgroep scherp te moeten opbouwen.`
    : `In ${name} draait SEO vooral om vertrouwen, regionale relevantie en duidelijke servicepagina's die lokale zoekers helpen kiezen.`;
  const audience = isMajorMarket
    ? 'dienstverleners, praktijken, webshops, B2B-bedrijven en lokale teams'
    : 'lokale dienstverleners, bouwbedrijven, praktijken, winkels en regionale MKB-bedrijven';
  const areaText = [name, ...nearby.slice(0, 3)].join(', ');

  return {
    slug,
    name,
    lowerName: name.toLowerCase(),
    nearby,
    areaText,
    marketType,
    marketDescription,
    audience,
    isMajorMarket,
    canonical: `https://niblah.com/seo-specialist/${slug}`,
  };
}
