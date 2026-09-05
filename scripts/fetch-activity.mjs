// Pulls recent non-fork repo activity from the public GitHub API and writes
// assets/data/activity.json for the site's "Recent activity" section.
// No auth required for public data; GITHUB_TOKEN (set by Actions) just raises
// the rate limit.
import { writeFile } from 'node:fs/promises';

const USER = 'furkanvijapura';
const OUT_PATH = new URL('../assets/data/activity.json', import.meta.url);
const MAX_ITEMS = 5;

async function main() {
  const headers = { 'User-Agent': 'furkanvijapura-portfolio-bot' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(
    `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed&direction=desc&type=owner`,
    { headers }
  );
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  const repos = await res.json();

  const items = repos
    .filter((r) => !r.fork && !r.archived && r.name !== `${USER}.github.io`)
    .slice(0, MAX_ITEMS)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
    }));

  const payload = {
    generatedAt: new Date().toISOString(),
    items,
  };

  await writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n');
  console.log(`Wrote ${items.length} activity items to ${OUT_PATH.pathname}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
