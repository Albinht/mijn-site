import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const runtime = 'nodejs';

const FETCH_TIMEOUT_MS = 12000;
const MAX_IMAGES_RETURNED = 250;

const GENERIC_ALT_VALUES = new Set([
  'image',
  'img',
  'photo',
  'picture',
  'afbeelding',
  'foto',
]);

function normalizeInputUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;
  const candidate = raw.match(/^https?:\/\//i) ? raw : `https://${raw}`;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function normalizeAlt(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function keywordStuffingRisk(alt) {
  const words = alt
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  if (words.length < 5) return false;
  const counts = new Map();
  for (const word of words) counts.set(word, (counts.get(word) || 0) + 1);
  const maxRepeats = Math.max(...counts.values());
  return maxRepeats >= 3;
}

function analyzeImageAlt({ src, altRaw, hasAltAttribute, duplicateCount }) {
  const issues = [];
  const alt = normalizeAlt(altRaw);

  if (!hasAltAttribute) {
    issues.push('missing-alt-attribute');
  } else if (!alt) {
    issues.push('empty-alt');
  }

  if (alt) {
    if (alt.length < 5) issues.push('too-short');
    if (alt.length > 125) issues.push('too-long');
    if (GENERIC_ALT_VALUES.has(alt.toLowerCase())) issues.push('generic-alt');
    if (keywordStuffingRisk(alt)) issues.push('keyword-stuffing-risk');
  }

  if (duplicateCount > 1 && alt) {
    issues.push('duplicate-alt');
  }

  let status = 'good';
  if (issues.includes('missing-alt-attribute')) status = 'missing';
  else if (issues.includes('empty-alt')) status = 'empty';
  else if (issues.length > 0) status = 'needs-improvement';

  let qualityScore = 100;
  if (issues.includes('missing-alt-attribute')) qualityScore = 0;
  else if (issues.includes('empty-alt')) qualityScore = 20;
  else {
    qualityScore -= issues.length * 18;
    qualityScore = Math.max(30, qualityScore);
  }

  const recommendation = issues.length
    ? buildRecommendation(issues, alt)
    : 'Alt tekst is beschrijvend en bruikbaar.';

  return {
    src,
    alt,
    status,
    issues,
    qualityScore,
    recommendation,
  };
}

function buildRecommendation(issues, alt) {
  if (issues.includes('missing-alt-attribute')) {
    return 'Voeg een alt attribuut toe dat kort beschrijft wat op de afbeelding staat.';
  }
  if (issues.includes('empty-alt')) {
    return 'Gebruik alleen een lege alt als de afbeelding puur decoratief is, anders voeg een beschrijvende alt toe.';
  }
  if (issues.includes('generic-alt')) {
    return 'Vervang generieke tekst door een specifieke beschrijving van de afbeelding.';
  }
  if (issues.includes('too-short')) {
    return 'Maak de alt tekst specifieker. Voeg context toe zoals product, onderwerp of actie.';
  }
  if (issues.includes('too-long')) {
    return 'Maak de alt tekst korter en helderder. Richt op 5-125 tekens.';
  }
  if (issues.includes('duplicate-alt')) {
    return 'Maak alt teksten unieker per afbeelding om duplicatie te voorkomen.';
  }
  if (issues.includes('keyword-stuffing-risk')) {
    return 'Vermijd keyword stuffing en schrijf natuurlijk, alsof je de afbeelding hardop beschrijft.';
  }
  if (alt) {
    return 'Controleer of de alt tekst de afbeelding duidelijk beschrijft voor gebruikers en zoekmachines.';
  }
  return 'Controleer en optimaliseer de alt tekst.';
}

function buildTopRecommendations(summary) {
  const list = [];
  if (summary.missingAlt > 0) {
    list.push(`Voeg alt attributen toe aan ${summary.missingAlt} afbeeldingen zonder alt attribuut.`);
  }
  if (summary.emptyAlt > 0) {
    list.push(
      `${summary.emptyAlt} afbeeldingen hebben een lege alt tekst. Controleer of deze echt decoratief zijn.`
    );
  }
  if (summary.duplicateAlt > 0) {
    list.push(`Verminder duplicatie: ${summary.duplicateAlt} afbeeldingen delen dezelfde alt tekst.`);
  }
  if (summary.tooShort > 0 || summary.tooLong > 0) {
    list.push(
      `Optimaliseer lengte: ${summary.tooShort} te kort en ${summary.tooLong} te lang. Richt op duidelijke, compacte beschrijvingen.`
    );
  }
  if (summary.genericAlt > 0) {
    list.push(`Vervang ${summary.genericAlt} generieke alt teksten door beschrijvende alternatieven.`);
  }
  if (list.length === 0) {
    list.push('Sterk resultaat: alt attributen zijn grotendeels op orde. Blijf periodiek controleren op nieuwe content.');
  }
  return list;
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; NiblahTools/1.0; +https://niblah.com/tools/bulk-alt-checker)',
      },
    });
    if (!response.ok) {
      throw new Error(`Kon URL niet ophalen (status ${response.status}).`);
    }
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      throw new Error('URL bevat geen HTML pagina.');
    }
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const url = normalizeInputUrl(body?.url);
    if (!url) {
      return NextResponse.json(
        { success: false, error: 'Vul een geldige URL in (http:// of https://).' },
        { status: 400 }
      );
    }

    const html = await fetchHtml(url);
    const $ = cheerio.load(html);
    const images = $('img').toArray();

    const altCounts = new Map();
    const raw = images.map((img) => {
      const element = $(img);
      const srcRaw = element.attr('src') || element.attr('data-src') || '';
      const src = srcRaw ? new URL(srcRaw, url).toString() : '(geen src gevonden)';
      const hasAltAttribute = Object.prototype.hasOwnProperty.call(img.attribs || {}, 'alt');
      const altRaw = hasAltAttribute ? element.attr('alt') : '';
      const alt = normalizeAlt(altRaw);
      if (alt) altCounts.set(alt.toLowerCase(), (altCounts.get(alt.toLowerCase()) || 0) + 1);
      return { src, hasAltAttribute, altRaw };
    });

    const analyzedAll = raw
      .map((entry) =>
        analyzeImageAlt({
          ...entry,
          duplicateCount: altCounts.get(normalizeAlt(entry.altRaw).toLowerCase()) || 0,
        })
      );
    const analyzed = analyzedAll.slice(0, MAX_IMAGES_RETURNED);

    const summary = {
      totalImages: analyzedAll.length,
      withAlt: analyzedAll.filter((row) => row.status === 'good' || row.status === 'needs-improvement').length,
      missingAlt: analyzedAll.filter((row) => row.issues.includes('missing-alt-attribute')).length,
      emptyAlt: analyzedAll.filter((row) => row.issues.includes('empty-alt')).length,
      tooShort: analyzedAll.filter((row) => row.issues.includes('too-short')).length,
      tooLong: analyzedAll.filter((row) => row.issues.includes('too-long')).length,
      duplicateAlt: analyzedAll.filter((row) => row.issues.includes('duplicate-alt')).length,
      genericAlt: analyzedAll.filter((row) => row.issues.includes('generic-alt')).length,
      shownInTable: analyzed.length,
    };

    return NextResponse.json({
      success: true,
      url,
      checkedAt: new Date().toISOString(),
      summary,
      recommendations: buildTopRecommendations(summary),
      images: analyzed,
      truncated: analyzedAll.length > analyzed.length,
    });
  } catch (error) {
    console.error('Bulk alt checker error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Er ging iets mis tijdens het controleren van de alt attributen.',
      },
      { status: 500 }
    );
  }
}
