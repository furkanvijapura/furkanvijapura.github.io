// Generates a single-page, ATS-friendly PDF resume from the same
// src/data/resume.ts that powers the website, so the two can never drift.
// Run via `node --experimental-strip-types` (Node 22.6+) since resume.ts is
// TypeScript; the data file only uses erasable syntax (interfaces, typed
// consts), so native type stripping is enough, no bundler needed.
import { writeFile } from 'node:fs/promises';
import pdfLib from 'pdf-lib';
const { PDFDocument, StandardFonts, rgb } = pdfLib;
import {
  person,
  socials,
  experience,
  skills,
  education,
  certifications,
} from '../src/data/resume.ts';

const OUT_PATH = new URL('../public/furkan-vijapura-resume.pdf', import.meta.url);

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN = 46;
const CONTENT_W = PAGE_W - MARGIN * 2;

const INK = rgb(0.09, 0.09, 0.11);
const DIM = rgb(0.38, 0.4, 0.44);
const ACCENT = rgb(0.09, 0.5, 0.32);
const LINE = rgb(0.82, 0.83, 0.85);

function wrapText(text, font, size, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const trial = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(trial, size) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = trial;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function main() {
  const doc = await PDFDocument.create();
  doc.setTitle(`${person.name} - Resume`);
  doc.setAuthor(person.name);
  doc.setSubject(`${person.role}, ${person.roleLine}`);

  const page = doc.addPage([PAGE_W, PAGE_H]);
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  let y = PAGE_H - MARGIN;

  function draw(text, { x = MARGIN, size = 10, font = regular, color = INK } = {}) {
    page.drawText(text, { x, y, size, font, color });
  }

  function drawWrapped(text, { size = 9.5, font = regular, color = DIM, lineHeight = 12.5, maxWidth = CONTENT_W } = {}) {
    for (const line of wrapText(text, font, size, maxWidth)) {
      y -= lineHeight;
      draw(line, { size, font, color });
    }
  }

  function rule(gapBefore = 8, gapAfter = 10) {
    y -= gapBefore;
    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.75, color: LINE });
    y -= gapAfter;
  }

  function sectionHeading(title) {
    y -= 4;
    draw(title.toUpperCase(), { size: 10.5, font: bold, color: ACCENT });
    y -= 13;
  }

  // Header
  draw(person.name, { size: 22, font: bold });
  y -= 17;
  draw(`${person.role}, ${person.roleLine}`, { size: 11.5, color: DIM });
  y -= 16;
  const contactLine = [
    person.email,
    person.phone,
    person.locationFull,
    ...socials.filter((s) => s.label === 'LinkedIn' || s.label === 'GitHub').map((s) => s.url.replace('https://', '')),
  ].join('   ·   ');
  drawWrapped(contactLine, { size: 8.7, color: DIM, lineHeight: 11 });

  rule(10, 12);

  // Summary
  drawWrapped(person.heroLede.replace(/\s+/g, ' '), { size: 9.7, lineHeight: 13, color: INK });

  rule(10, 12);

  // Experience
  sectionHeading('Experience');

  // Older roles get fewer bullets so the whole thing fits one page,
  // matching standard resume convention (recency gets the detail).
  const bulletBudget = { v5: 3, v4: 2, v3: 1, v2: 1, v1: 0 };

  for (const entry of experience) {
    draw(entry.role, { size: 10.5, font: bold });
    const dateW = regular.widthOfTextAtSize(entry.dates, 8.5);
    draw(entry.dates, { x: PAGE_W - MARGIN - dateW, size: 8.5, color: DIM });
    y -= 12.5;
    draw(entry.org, { size: 9.5, color: DIM });
    y -= 13;

    const bullets = (entry.highlights || []).slice(0, bulletBudget[entry.version] ?? 0);
    if (bullets.length) {
      for (const bullet of bullets) {
        const plain = bullet.replace(/<\/?strong>/g, '');
        const lines = wrapText(plain, regular, 9, CONTENT_W - 12);
        lines.forEach((line, i) => {
          y -= 11.5;
          draw(i === 0 ? `-  ${line}` : `   ${line}`, { size: 9, color: INK });
        });
      }
    } else {
      y -= 11.5;
      draw(entry.summary, { size: 9, color: DIM });
    }
    y -= 18;
  }

  rule(2, 12);

  // Skills
  sectionHeading('Core Skills');
  drawWrapped(skills.join('  ·  '), { size: 9, lineHeight: 12.5, color: INK });

  rule(10, 12);

  // Education + Certifications side by side
  const colW = (CONTENT_W - 24) / 2;
  const topY = y;

  sectionHeading('Education');
  for (const e of education.slice(0, 3)) {
    draw(e.title, { size: 9.3, font: bold, color: INK });
    y -= 11;
    draw(e.sub, { size: 8.5, color: DIM });
    y -= 14;
  }

  const eduEndY = y;
  y = topY;
  const certX = MARGIN + colW + 24;
  y -= 4;
  draw('CERTIFICATIONS', { x: certX, size: 10.5, font: bold, color: ACCENT });
  y -= 13;
  for (const c of certifications.slice(0, 5)) {
    draw(c.title, { x: certX, size: 9.3, font: bold, color: INK });
    y -= 11;
    draw(c.sub, { x: certX, size: 8.5, color: DIM });
    y -= 14;
  }

  y = Math.min(eduEndY, y);

  // Footer
  y = MARGIN + 14;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.75, color: LINE });
  y -= 12;
  draw(`Generated from live data at furkanvijapura.github.io  ·  Updated ${person.lastUpdatedDisplay}`, {
    size: 7.8,
    color: DIM,
  });

  const bytes = await doc.save();
  await writeFile(OUT_PATH, bytes);
  console.log(`Wrote resume PDF to ${OUT_PATH.pathname} (${(bytes.length / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
