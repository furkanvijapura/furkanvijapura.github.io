export interface ActivityItem {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string | null;
}

export interface ActivityPayload {
  generatedAt: string;
  items: ActivityItem[];
}

function renderItem(item: ActivityItem): HTMLLIElement {
  const li = document.createElement('li');

  const link = document.createElement('a');
  link.className = 'list-title';
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noopener';
  link.style.textDecoration = 'none';
  link.textContent = item.name;
  li.appendChild(link);

  if (item.description) {
    const p = document.createElement('p');
    p.style.margin = '4px 0 0';
    p.style.fontSize = '0.88rem';
    p.textContent = item.description;
    li.appendChild(p);
  }

  const when = item.pushedAt
    ? new Date(item.pushedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';
  const meta = document.createElement('div');
  meta.className = 'list-sub';
  meta.textContent = [item.language, when].filter(Boolean).join(' · ');
  li.appendChild(meta);

  return li;
}

export async function renderActivity(listEl: HTMLElement): Promise<void> {
  try {
    const res = await fetch('/assets/data/activity.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
    const data = (await res.json()) as ActivityPayload;
    const items = data.items ?? [];

    listEl.innerHTML = '';
    if (!items.length) {
      const empty = document.createElement('li');
      empty.innerHTML = '<div class="list-sub">No recent public activity.</div>';
      listEl.appendChild(empty);
      return;
    }
    items.forEach((item) => listEl.appendChild(renderItem(item)));
  } catch {
    listEl.innerHTML =
      '<li><div class="list-sub">Activity feed unavailable right now. See ' +
      '<a href="https://github.com/furkanvijapura" target="_blank" rel="noopener">github.com/furkanvijapura</a> directly.</div></li>';
  }
}
