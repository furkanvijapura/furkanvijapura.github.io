export interface WritingItem {
  title: string;
  url: string;
  source: 'DEV' | 'Medium';
  publishedAt: string;
  description: string | null;
}

export interface WritingPayload {
  generatedAt: string;
  items: WritingItem[];
}

export async function renderWriting(listEl: HTMLElement): Promise<void> {
  try {
    const res = await fetch('/assets/data/writing.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
    const data = (await res.json()) as WritingPayload;

    listEl.innerHTML = '';
    if (!data.items.length) {
      const empty = document.createElement('li');
      empty.innerHTML = '<div class="list-sub">Nothing published recently.</div>';
      listEl.appendChild(empty);
      return;
    }

    data.items.forEach((item) => {
      const li = document.createElement('li');

      const link = document.createElement('a');
      link.className = 'list-title';
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.style.textDecoration = 'none';
      link.textContent = item.title;
      li.appendChild(link);

      if (item.description) {
        const p = document.createElement('p');
        p.style.margin = '4px 0 0';
        p.style.fontSize = '0.88rem';
        p.textContent = item.description;
        li.appendChild(p);
      }

      const when = new Date(item.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      const meta = document.createElement('div');
      meta.className = 'list-sub';
      meta.textContent = `${item.source} · ${when}`;
      li.appendChild(meta);

      listEl.appendChild(li);
    });
  } catch {
    listEl.innerHTML =
      '<li><div class="list-sub">Writing feed unavailable right now. See ' +
      '<a href="https://medium.com/@furkan.vijapura" target="_blank" rel="noopener">Medium</a> or ' +
      '<a href="https://dev.to/furkanvijapura" target="_blank" rel="noopener">DEV</a> directly.</div></li>';
  }
}
