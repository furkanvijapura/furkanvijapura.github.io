// Monthly cross-account skill signal. Pulls public repo data from both of
// Furkan's GitHub accounts and aggregates language usage from his own
// (non-fork) repos, plus a lightweight "exploring" signal from repos he has
// forked (technology he studies but did not author). Public data only, no
// private org access. Writes public/assets/data/skills.json.
import { writeFile } from 'node:fs/promises';

const USERS = ['furkanvijapura', 'furkan-wve'];
const OUT_PATH = new URL('../public/assets/data/skills.json', import.meta.url);
const MAX_OWN_REPOS_PER_USER = 15;
const MAX_EXPLORED_PER_USER = 8;

function headers() {
  const h = { 'User-Agent': 'furkanvijapura-portfolio-bot' };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function getRepos(user) {
  const res = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=100&sort=pushed&direction=desc&type=owner`,
    { headers: headers() }
  );
  if (!res.ok) throw new Error(`GitHub API responded ${res.status} for ${user}`);
  return res.json();
}

async function getLanguages(owner, repo) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`, { headers: headers() });
  if (!res.ok) return {};
  return res.json();
}

async function main() {
  const languageBytes = {};
  const accounts = {};

  for (const user of USERS) {
    const repos = await getRepos(user);
    const ownRepos = repos.filter((r) => !r.fork && !r.archived);
    const forkedRepos = repos.filter((r) => r.fork);

    for (const repo of ownRepos.slice(0, MAX_OWN_REPOS_PER_USER)) {
      const langs = await getLanguages(user, repo.name);
      for (const [lang, bytes] of Object.entries(langs)) {
        languageBytes[lang] = (languageBytes[lang] || 0) + bytes;
      }
    }

    const exploring = forkedRepos.slice(0, MAX_EXPLORED_PER_USER).map((r) => ({
      name: r.name,
      description: r.description,
      language: r.language,
      url: r.html_url,
    }));

    accounts[user] = {
      ownRepoCount: ownRepos.length,
      forkedRepoCount: forkedRepos.length,
      exploring,
    };
  }

  const topLanguages = Object.entries(languageBytes)
    .sort((a, b) => b[1] - a[1])
    .map(([name, bytes]) => ({ name, bytes }));

  const payload = {
    generatedAt: new Date().toISOString(),
    accounts,
    topLanguages,
  };

  await writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n');
  console.log(`Wrote skill signal for ${USERS.length} accounts to ${OUT_PATH.pathname}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
