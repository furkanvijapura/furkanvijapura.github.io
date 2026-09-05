export interface LanguageStat {
  name: string;
  bytes: number;
}

export interface SkillsPayload {
  generatedAt: string;
  topLanguages: LanguageStat[];
}

let cachedPayload: Promise<SkillsPayload> | null = null;

function loadSkills(): Promise<SkillsPayload> {
  if (!cachedPayload) {
    cachedPayload = fetch('/assets/data/skills.json', { cache: 'no-store' }).then((res) => {
      if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
      return res.json() as Promise<SkillsPayload>;
    });
  }
  return cachedPayload;
}

export async function renderLanguageMix(container: HTMLElement): Promise<void> {
  try {
    const data = await loadSkills();
    const top = data.topLanguages.slice(0, 6);
    const total = top.reduce((sum, l) => sum + l.bytes, 0) || 1;

    container.innerHTML = '';
    top.forEach((lang) => {
      const pct = Math.round((lang.bytes / total) * 100);
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = `${lang.name} · ${pct}%`;
      container.appendChild(chip);
    });
  } catch {
    container.innerHTML = '';
  }
}

/**
 * Annotates tech-stack tiles with a live usage badge where the tile's
 * data-language-key matches a language in the auto-synced skills.json, and
 * fills in the "synced" freshness note.
 */
export async function syncTechStack(gridEl: HTMLElement, syncNoteEl: HTMLElement | null): Promise<void> {
  try {
    const data = await loadSkills();
    const total = data.topLanguages.reduce((sum, l) => sum + l.bytes, 0) || 1;
    const byName = new Map(data.topLanguages.map((l) => [l.name, l.bytes]));

    gridEl.querySelectorAll<HTMLElement>('[data-language-key]').forEach((tile) => {
      const key = tile.dataset.languageKey;
      if (!key) return;
      const bytes = byName.get(key);
      if (bytes == null) return;
      const pct = Math.round((bytes / total) * 100);
      const badge = document.createElement('span');
      badge.className = 'tech-badge';
      badge.textContent = `${pct}%`;
      tile.appendChild(badge);
      tile.classList.add('synced');
    });

    if (syncNoteEl) {
      const date = new Date(data.generatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      syncNoteEl.textContent = `Synced ${date} from both GitHub accounts`;
    }
  } catch {
    if (syncNoteEl) syncNoteEl.textContent = 'Sync status unavailable right now';
  }
}
