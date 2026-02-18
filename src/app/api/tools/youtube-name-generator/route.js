import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Prisma } from '@prisma/client';
import { createHash } from 'crypto';
import { cache } from '@/lib/cache/redis';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function POST(request) {
  let topicSafe = 'channel';

  try {
    const body = await request.json().catch(() => ({}));
    const topic = typeof body.topic === 'string' ? body.topic.trim() : '';

    if (!topic) {
      return NextResponse.json({ success: false, error: 'Topic is required' }, { status: 400 });
    }

    const limitResult = await consumeGenerationCredit(request);
    if (!limitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: limitResult.error || `Limit reached. Max ${limitResult.limit} generations per user.`,
          limit: limitResult.limit,
          remaining: limitResult.remaining,
          current: limitResult.current,
        },
        { status: limitResult.status || 429 }
      );
    }

    topicSafe = topic.slice(0, 120);

    const generatedNames = await generateNames(topicSafe, { desiredCount: 20 });
    let uniqueNames = dedupeNames(generatedNames, topicSafe);
    if (uniqueNames.length < 20) {
      const fallbackNames = buildFallbackNames(topicSafe, { desiredCount: 40 });
      uniqueNames = dedupeNames([...uniqueNames, ...fallbackNames], topicSafe);
    }
    uniqueNames = uniqueNames.slice(0, 20);

    const results = await withHandleAvailability(uniqueNames, topicSafe);

    return NextResponse.json({
      success: true,
      topic: topicSafe,
      results,
      limit: limitResult.limit,
      remaining: limitResult.remaining,
      current: limitResult.current,
    });
  } catch (error) {
    console.error('YouTube name generator error:', error);
    const fallback = buildFallbackNames(topicSafe, { desiredCount: 20 });
    const results = await withHandleAvailability(fallback, topicSafe);
    return NextResponse.json({ success: true, topic: topicSafe, results });
  }
}

const MAX_GENERATIONS_PER_USER = 3;
const toolLimitFallback = new Map();

function getClientIp(request) {
  const xfwd = request.headers.get('x-forwarded-for');
  if (xfwd) return xfwd.split(',')[0].trim();
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp.trim();
  return 'unknown';
}

function hashIdentifier(value) {
  return createHash('sha256').update(String(value || '')).digest('hex');
}

async function consumeGenerationCredit(request) {
  const ip = getClientIp(request);
  const userAgent = request.headers.get('user-agent') || '';
  const identifier = hashIdentifier(`${ip}|${userAgent}`);
  const key = `ratelimit:tools:youtube-name-generator:${identifier}`;

  // Local dev: keep the tool usable without DB/Redis setup.
  if (process.env.NODE_ENV !== 'production') {
    const fallbackCurrent = (toolLimitFallback.get(identifier) || 0) + 1;
    toolLimitFallback.set(identifier, fallbackCurrent);
    return {
      allowed: fallbackCurrent <= MAX_GENERATIONS_PER_USER,
      current: fallbackCurrent,
      status: fallbackCurrent <= MAX_GENERATIONS_PER_USER ? 200 : 429,
      limit: MAX_GENERATIONS_PER_USER,
      remaining: Math.max(0, MAX_GENERATIONS_PER_USER - fallbackCurrent),
      source: 'memory',
    };
  }

  const redisConfigured = Boolean(
    process.env.REDIS_URL || process.env.REDIS_HOST || process.env.REDIS_PORT || process.env.REDIS_PASSWORD
  );
  if (redisConfigured) {
    const current = await cache.incr(key, null);
    if (typeof current === 'number') {
      return {
        allowed: current <= MAX_GENERATIONS_PER_USER,
        current,
        status: current <= MAX_GENERATIONS_PER_USER ? 200 : 429,
        limit: MAX_GENERATIONS_PER_USER,
        remaining: Math.max(0, MAX_GENERATIONS_PER_USER - current),
        source: 'redis',
      };
    }
  }

  const dbResult = await consumeGenerationCreditDb({ identifier, ip });
  if (dbResult) return dbResult;

  return {
    allowed: false,
    current: MAX_GENERATIONS_PER_USER,
    status: 503,
    limit: MAX_GENERATIONS_PER_USER,
    remaining: 0,
    source: 'unavailable',
    error: 'Rate limit storage is unavailable. Configure Redis or a database to enable this tool.',
  };
}

async function consumeGenerationCreditDb({ identifier, ip }) {
  const tool = 'youtube-name-generator';
  const action = 'tool_generation';

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const result = await prisma.$transaction(
        async (tx) => {
          const existing = await tx.activityLog.count({
            where: {
              action,
              entity: tool,
              entityId: identifier,
            },
          });

          if (existing >= MAX_GENERATIONS_PER_USER) {
            return {
              allowed: false,
              current: existing,
              status: 429,
              limit: MAX_GENERATIONS_PER_USER,
              remaining: 0,
              source: 'db',
            };
          }

          await tx.activityLog.create({
            data: {
              action,
              entity: tool,
              entityId: identifier,
              ipAddress: ip || null,
              metadata: {
                tool,
                type: 'generation',
              },
            },
          });

          const current = existing + 1;
          return {
            allowed: true,
            current,
            status: 200,
            limit: MAX_GENERATIONS_PER_USER,
            remaining: Math.max(0, MAX_GENERATIONS_PER_USER - current),
            source: 'db',
          };
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable }
      );

      return result;
    } catch (error) {
      if (error && typeof error === 'object' && error.code === 'P2034') {
        continue; // retry serializable conflict
      }
      console.error('DB rate limit error:', error);
      return null;
    }
  }

  return null;
}

async function generateNames(topic, { desiredCount }) {
  const openRouterKey = process.env.OPENROUTER_API_KEY;
  if (openRouterKey) {
    return generateNamesWithOpenRouter(topic, { desiredCount, apiKey: openRouterKey });
  }

  const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    return buildFallbackNames(topic, { desiredCount });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 1.1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      },
      systemInstruction:
        'You are a naming expert. Always output valid JSON only. Do not add commentary. Do not include any disclaimers.',
    });
    const requested = Math.max(20, Math.min(60, Number(desiredCount) || 20));
    const requestedForFiltering = Math.min(60, Math.max(40, requested * 3));

    const prompt = `You are a naming expert for YouTube creators. Generate ${requestedForFiltering} UNIQUE YouTube channel name ideas for a channel about: "${topic}".

Rules:
- Use the same language as the topic when it makes sense.
- Do NOT include the words "YouTube", "Channel", or "TV".
- 1-4 words per name.
- Use natural capitalization for that language (do not use ALL CAPS).
- No emojis.
- Avoid special characters; hyphens are allowed.
- Make them brandable and easy to pronounce (not generic).
- Avoid overused terms like: Hub, Lab, Studio, Academy, Official, Daily, Central, Nation, World, Tips, Guide.
- Mix styles: descriptive + brandable + metaphor + short punchy names.
- Do not repeat the same last word across multiple names.

Return ONLY valid JSON in this exact shape:
{"names":["Name 1","Name 2","Name 3"]}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    text = text.replace(/```json\\n?/g, '').replace(/```\\n?/g, '').trim();

    const parsed = extractJsonObject(text) || safeJsonParse(text);
    if (parsed && Array.isArray(parsed.names)) {
      return parsed.names.map((name) => String(name || '').trim()).filter(Boolean);
    }

    const namesFromLines = text
      .split('\n')
      .map((line) => line.replace(/^[\\s\\-\\*\\d\\.\\)]+/g, '').trim())
      .filter(Boolean);

    return namesFromLines.length ? namesFromLines : buildFallbackNames(topic, { desiredCount });
  } catch (error) {
    console.error('YouTube name generator AI error:', error);
    return buildFallbackNames(topic, { desiredCount });
  }
}

async function generateNamesWithOpenRouter(topic, { desiredCount, apiKey }) {
  const requested = Math.max(20, Math.min(60, Number(desiredCount) || 20));
  const requestedForFiltering = Math.min(60, Math.max(40, requested * 3));

  const prompt = `You are a naming expert for YouTube creators. Generate ${requestedForFiltering} UNIQUE YouTube channel name ideas for a channel about: "${topic}".

Rules:
- Use the same language as the topic when it makes sense.
- Do NOT include the words "YouTube", "Channel", or "TV".
- 1-4 words per name.
- Use natural capitalization for that language (do not use ALL CAPS).
- No emojis.
- Avoid special characters; hyphens are allowed.
- Make them brandable and easy to pronounce (not generic).
- Avoid overused terms like: Hub, Lab, Studio, Academy, Official, Daily, Central, Nation, World, Tips, Guide.
- Mix styles: descriptive + brandable + metaphor + short punchy names.
- Do not repeat the same last word across multiple names.

Return ONLY valid JSON in this exact shape:
{"names":["Name 1","Name 2","Name 3"]}`;

  const timeoutMs = 12000;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://niblah.com',
        'X-Title': 'Niblah YouTube Name Generator',
      },
      body: JSON.stringify({
        model: 'google/gemini-1.5-flash',
        temperature: 1.1,
        max_tokens: 900,
        messages: [
          {
            role: 'system',
            content:
              'You are a naming expert. Output ONLY valid JSON. No commentary, no markdown, no code fences.',
          },
          { role: 'user', content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.error('OpenRouter error:', response.status, text.slice(0, 200));
      return buildFallbackNames(topic, { desiredCount });
    }

    const data = await response.json().catch(() => null);
    const text = data?.choices?.[0]?.message?.content || '';
    const cleaned = String(text).trim();

    const parsed = extractJsonObject(cleaned) || safeJsonParse(cleaned);
    if (parsed && Array.isArray(parsed.names)) {
      return parsed.names.map((name) => String(name || '').trim()).filter(Boolean);
    }

    const namesFromLines = cleaned
      .split('\n')
      .map((line) => line.replace(/^[\\s\\-\\*\\d\\.\\)]+/g, '').trim())
      .filter(Boolean);

    return namesFromLines.length ? namesFromLines : buildFallbackNames(topic, { desiredCount });
  } catch (error) {
    console.error('OpenRouter request failed:', error);
    return buildFallbackNames(topic, { desiredCount });
  } finally {
    clearTimeout(timer);
  }
}

function extractJsonObject(value) {
  if (!value) return null;
  const start = value.indexOf('{');
  const end = value.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  const candidate = value.slice(start, end + 1);
  return safeJsonParse(candidate);
}

function clampNumber(value, fallback, min, max) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function normalizeName(value) {
  return String(value || '')
    .replace(/^["'`]+|["'`]+$/g, '')
    .replace(/\\s+/g, ' ')
    .trim();
}

function normalizeNameKey(value) {
  return normalizeName(value)
    .toLowerCase()
    .replace(/[.,!?:;'"`]/g, '')
    .replace(/[\\s\\-_]+/g, ' ')
    .trim();
}

function isBannedName(name) {
  const key = normalizeNameKey(name);
  if (!key) return true;
  const words = key.split(' ').filter(Boolean);
  const bannedWords = new Set([
    'youtube',
    'channel',
    'tv',
    'official',
    'hub',
    'lab',
    'studio',
    'academy',
    'central',
    'nation',
    'world',
    'daily',
    'tips',
    'guide',
  ]);
  return words.some((word) => bannedWords.has(word));
}

function dedupeNames(values, topic) {
  const seen = new Set();
  const out = [];
  for (const value of values || []) {
    const cleaned = normalizeName(value);
    if (!cleaned) continue;
    if (isBannedName(cleaned)) continue;
    const key = normalizeNameKey(cleaned);
    if (!key) continue;
    const handleKey = buildHandleCandidate(cleaned, topic);
    const dedupeKey = `${key}::${handleKey}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);
    out.push(cleaned);
  }
  return out;
}

function buildFallbackNames(topic, { desiredCount }) {
  const keywords = extractKeywords(topic);
  const main = keywords[0] || 'Creator';
  const second = keywords[1] || 'Signal';

  const adjectives = [
    'Sharp',
    'Bold',
    'Modern',
    'Bright',
    'Next',
    'True',
    'Curious',
    'Nimble',
    'Clean',
    'Prime',
    'Calm',
    'Fast',
    'Fresh',
    'Deep',
    'Simple',
    'Smart',
  ];

  const nouns = [
    'Blueprint',
    'Playbook',
    'Compass',
    'Signal',
    'Forge',
    'Workshop',
    'Stack',
    'Pulse',
    'Lens',
    'Craft',
    'Orbit',
    'Beacon',
    'Trail',
    'Foundry',
    'Corner',
  ];

  const verbs = ['Build', 'Grow', 'Boost', 'Learn', 'Create', 'Scale', 'Explore', 'Launch', 'Master', 'Make'];

  const requested = Math.max(20, Math.min(60, Number(desiredCount) || 20));

  const candidates = new Set();
  const combos = [
    `${main} ${pick(nouns)}`,
    `${pick(adjectives)} ${main}`,
    `${pick(verbs)} ${main}`,
    `${main} ${second}`,
    `${main}${pick(nouns)}`,
    `${pick(adjectives)} ${main} ${pick(nouns)}`,
    `${main} ${pick(['Sprint', 'Notes', 'Minute', 'Mindset', 'Method'])}`,
  ];
  combos.forEach((c) => candidates.add(c.trim()));

  for (let i = 0; i < 160 && candidates.size < requested * 2; i++) {
    const pattern = i % 8;
    const name = (() => {
      if (pattern === 0) return `${main} ${pick(nouns)}`;
      if (pattern === 1) return `${pick(adjectives)} ${main}`;
      if (pattern === 2) return `${pick(verbs)} ${main}`;
      if (pattern === 3) return `${main} ${second}`;
      if (pattern === 4) return `${main}${pick(nouns)}`;
      if (pattern === 5) return `${pick(adjectives)} ${main} ${pick(['Method', 'System', 'Playbook', 'Blueprint'])}`;
      if (pattern === 6) return `${main} ${pick(['Compass', 'Signal', 'Forge', 'Pulse', 'Workshop'])}`;
      return `${pick(verbs)} ${main} ${pick(['Fast', 'Simple', 'Smart'])}`;
    })();
    candidates.add(name.trim());
  }

  const filtered = dedupeNames(Array.from(candidates), topic);
  return filtered.slice(0, requested);
}

function extractKeywords(topic) {
  const words = toAscii(String(topic || ''))
    .toLowerCase()
    .replace(/[^a-z0-9\\s\\-]/g, ' ')
    .split(/\\s+/)
    .map((w) => w.trim())
    .filter(Boolean);

  const stop = new Set([
    'the',
    'a',
    'an',
    'and',
    'or',
    'for',
    'to',
    'of',
    'in',
    'on',
    'with',
    'about',
    'tips',
    'how',
    'guide',
    'best',
    'new',
    'youtube',
    'channel',
  ]);

  const cleaned = words.filter((w) => w.length > 2 && !stop.has(w)).slice(0, 4);
  const titleCase = cleaned.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  return titleCase.length ? titleCase : ['Creator'];
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function toAscii(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/æ/g, 'ae')
    .replace(/Æ/g, 'AE')
    .replace(/ø/g, 'o')
    .replace(/Ø/g, 'O')
    .replace(/å/g, 'a')
    .replace(/Å/g, 'A');
}

function buildHandleCandidate(name, topic) {
  const cleaned = toAscii(String(name || ''))
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\\s\\-_.]/g, ' ')
    .replace(/[\\s\\-_.]+/g, '')
    .trim();

  let handle = cleaned;
  if (!handle) {
    const fallback = extractKeywords(topic)[0] || 'creator';
    handle = String(fallback).toLowerCase();
  }

  if (/^\\d/.test(handle)) handle = `the${handle}`;
  if (handle.length < 3) handle = `${handle}hub`;
  if (handle.length > 30) handle = handle.slice(0, 30);
  return handle;
}

async function withHandleAvailability(names, topic) {
  const list = (names || []).map((name) => ({
    name,
    handle: buildHandleCandidate(name, topic),
    availability: 'unknown',
    url: null,
  }));

  return mapWithConcurrency(list, 6, async (item) => {
    const url = `https://www.youtube.com/@${item.handle}`;
    item.url = url;
    item.availability = await checkHandleUrl(url);
    return item;
  });
}

async function mapWithConcurrency(items, limit, mapper) {
  const list = Array.isArray(items) ? items : [];
  const cap = Math.max(1, Math.min(10, Number(limit) || 6));
  const results = new Array(list.length);
  let nextIndex = 0;

  const workers = new Array(Math.min(cap, list.length)).fill(0).map(async () => {
    while (true) {
      const current = nextIndex;
      nextIndex += 1;
      if (current >= list.length) break;
      try {
        results[current] = await mapper(list[current], current);
      } catch {
        results[current] = list[current];
      }
    }
  });

  await Promise.all(workers);
  return results;
}

async function checkHandleUrl(url) {
  const timeoutMs = 3500;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const tryFetch = async (method) => {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      cache: 'no-store',
      headers: {
        'user-agent':
          'Mozilla/5.0 (compatible; NiblahTools/1.0; +https://niblah.com/tools/youtube-name-generator)',
      },
    });
    return res.status;
  };

  try {
    const status = await tryFetch('HEAD').catch(() => tryFetch('GET'));
    if (status === 404) return 'available';
    if (status >= 200 && status < 400) return 'taken';
    return 'unknown';
  } catch {
    return 'unknown';
  } finally {
    clearTimeout(timer);
  }
}
