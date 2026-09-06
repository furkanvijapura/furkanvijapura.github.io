// Pulls published articles from DEV.to (JSON API) and Medium (RSS feed, no
// public API exists) into a single feed for the site's Writing section.
// Public data only, no auth required for either source.
import { writeFile } from 'node:fs/promises';

const DEV_TO_USERNAME = 'furkanvijapura';
const MEDIUM_USERNAME = 'furkan.vijapura';
const OUT_PATH = new URL('../public/assets/data/writing.json', import.meta.url);
const MAX_ITEMS = 10;

// Old Medium posts that are a bio page or reposted third-party news rather
// than original technical writing. Exact-title denylist, reviewed by hand;
// safe to edit if this list ever needs to change.
const EXCLUDE_TITLES = new Set([
  'FURKAN VIJAPURA',
  'WWDC20 Introducing',
  'iPhone X and FURKAN VIJAPURA',
  'Mobile World Congress 2018: Don’t Expect 5G Service Anytime Soon — FURKAN VIJAPURA',
  'Apple Has No Plans for a Major Upgrade to MacBook Pro in 2018: Report',
  'BlackBerry Launches Cybersecurity Software for Self-Driving Cars',
]);

function stripHtml(html) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchDevTo() {
  const res = await fetch(`https://dev.to/api/articles?username=${DEV_TO_USERNAME}`, {
    headers: { 'User-Agent': 'furkanvijapura-portfolio-bot' },
  });
  if (!res.ok) throw new Error(`DEV.to API responded ${res.status}`);
  const articles = await res.json();
  return articles.map((a) => ({
    title: a.title,
    url: a.url,
    source: 'DEV',
    publishedAt: a.published_at,
    description: a.description || null,
  }));
}

async function fetchMedium() {
  const res = await fetch(`https://medium.com/feed/@${MEDIUM_USERNAME}`, {
    headers: { 'User-Agent': 'furkanvijapura-portfolio-bot' },
  });
  if (!res.ok) throw new Error(`Medium RSS responded ${res.status}`);
  const xml = await res.text();

  const items = [];
  const itemBlocks = xml.split('<item>').slice(1);
  for (const block of itemBlocks) {
    const title = /<title><!\[CDATA\[(.*?)\]\]><\/title>/.exec(block)?.[1];
    const link = /<link>(.*?)<\/link>/.exec(block)?.[1];
    const pubDate = /<pubDate>(.*?)<\/pubDate>/.exec(block)?.[1];
    const content = /<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s.exec(block)?.[1];
    if (!title || !link) continue;

    let description = null;
    if (content) {
      const firstParagraph = /<p>(.*?)<\/p>/.exec(content)?.[1];
      if (firstParagraph) {
        const text = stripHtml(firstParagraph);
        description = text.length > 200 ? text.slice(0, 197) + '...' : text;
      }
    }

    items.push({
      title,
      url: link.split('?')[0],
      source: 'Medium',
      publishedAt: pubDate ? new Date(pubDate).toISOString() : null,
      description,
    });
  }
  return items;
}

async function main() {
  const [devTo, medium] = await Promise.all([
    fetchDevTo().catch((err) => {
      console.error('DEV.to fetch failed:', err.message);
      return [];
    }),
    fetchMedium().catch((err) => {
      console.error('Medium fetch failed:', err.message);
      return [];
    }),
  ]);

  const items = [...devTo, ...medium]
    .filter((item) => item.publishedAt && !EXCLUDE_TITLES.has(item.title))
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, MAX_ITEMS);

  const payload = {
    generatedAt: new Date().toISOString(),
    items,
  };

  await writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n');
  console.log(`Wrote ${items.length} writing items to ${OUT_PATH.pathname}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
