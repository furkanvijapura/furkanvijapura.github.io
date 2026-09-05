export interface LanguageStat {
  name: string;
  bytes: number;
}

export interface SkillsPayload {
  generatedAt: string;
  topLanguages: LanguageStat[];
}

export async function renderLanguageMix(container: HTMLElement): Promise<void> {
  try {
    const res = await fetch('/assets/data/skills.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
    const data = (await res.json()) as SkillsPayload;
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
