import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = path.resolve(process.cwd());
const README_PATH = path.join(REPO_ROOT, 'README.md');

const START_MARKER = '<!-- Language badges:start -->';
const END_MARKER = '<!-- Language badges:end -->';

const DEFAULT_EXCLUDE_DIRS = new Set([
  '.git',
  'node_modules',
  '.expo',
  '.expo-shared',
  'dist',
  'build',
  'coverage',
  '.next',
  'android',
  'ios',
  'web-build',
]);

const EXCLUDE_EXTS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.ico',
  '.bmp',
  '.tiff',
  '.psd',
  '.mp4',
  '.mov',
  '.avi',
  '.mkv',
  '.mp3',
  '.wav',
  '.ogg',
  '.zip',
  '.7z',
  '.rar',
  '.pdf',
]);

const EXCLUDE_FILENAMES = new Set([
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'bun.lockb',
]);

const EXT_TO_LANG = {
  '.js': { name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  '.jsx': { name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  '.ts': { name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white' },
  '.tsx': { name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white' },
  '.json': { name: 'JSON', color: '000000', logo: 'json', logoColor: 'white' },
  '.md': { name: 'Markdown', color: '000000', logo: 'markdown', logoColor: 'white' },
  '.css': { name: 'CSS', color: '1572B6', logo: 'css3', logoColor: 'white' },
  '.html': { name: 'HTML', color: 'E34F26', logo: 'html5', logoColor: 'white' },
};

function isExcludedDir(dirName) {
  return DEFAULT_EXCLUDE_DIRS.has(dirName);
}

function collectFiles(dir) {
  /** @type {string[]} */
  const files = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (isExcludedDir(entry.name)) continue;
      files.push(...collectFiles(fullPath));
      continue;
    }

    if (!entry.isFile()) continue;
    files.push(fullPath);
  }

  return files;
}

function getExt(filePath) {
  return path.extname(filePath).toLowerCase();
}

function fileSizeBytes(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.isFile() ? stat.size : 0;
  } catch {
    return 0;
  }
}

function toBadgeUrl({ label, message, color, logo, logoColor }) {
  const encodedLabel = encodeURIComponent(label);
  const encodedMessage = encodeURIComponent(message);
  const encodedColor = encodeURIComponent(color);

  const params = new URLSearchParams();
  params.set('style', 'for-the-badge');
  if (logo) params.set('logo', logo);
  if (logoColor) params.set('logoColor', logoColor);

  return `https://img.shields.io/badge/${encodedLabel}-${encodedMessage}-${encodedColor}?${params.toString()}`;
}

function pct(value, total) {
  if (!total) return 0;
  return (value / total) * 100;
}

function formatPct(value) {
  // 1 decimal place, but avoid trailing .0
  const fixed = value.toFixed(1);
  return fixed.endsWith('.0') ? fixed.slice(0, -2) : fixed;
}

function buildBadges(langRows, topN = 4) {
  const top = langRows.slice(0, topN);
  if (top.length === 0) {
    return `${START_MARKER}\n<!-- (no detectable source files) -->\n${END_MARKER}`;
  }

  const main = top[0];
  const lines = [];

  lines.push(
    `![Linguagem principal: ${main.name} ${main.pct}%](${toBadgeUrl({
      label: 'Linguagem principal',
      message: `${main.name} ${main.pct}%`,
      color: main.color,
      logo: main.logo,
      logoColor: main.logoColor,
    })})`
  );

  for (const row of top.slice(1)) {
    lines.push(
      `![${row.name} ${row.pct}%](${toBadgeUrl({
        label: row.name,
        message: `${row.pct}%`,
        color: row.color,
        logo: row.logo,
        logoColor: row.logoColor,
      })})`
    );
  }

  return `${START_MARKER}\n${lines.join('\n')}\n${END_MARKER}`;
}

function computeLanguageStats() {
  const allFiles = collectFiles(REPO_ROOT);

  /** @type {Map<string, {name:string,color:string,logo?:string,logoColor?:string, bytes:number}>} */
  const byLang = new Map();

  for (const file of allFiles) {
    if (file === README_PATH) continue;

    if (EXCLUDE_FILENAMES.has(path.basename(file))) continue;

    const ext = getExt(file);
    if (EXCLUDE_EXTS.has(ext)) continue;

    const lang = EXT_TO_LANG[ext];
    if (!lang) continue;

    const bytes = fileSizeBytes(file);
    if (bytes <= 0) continue;

    const key = lang.name;
    const existing = byLang.get(key);
    if (existing) {
      existing.bytes += bytes;
    } else {
      byLang.set(key, { ...lang, bytes });
    }
  }

  const rows = Array.from(byLang.values());
  rows.sort((a, b) => b.bytes - a.bytes);

  const total = rows.reduce((sum, r) => sum + r.bytes, 0);
  return rows.map((r) => ({
    name: r.name,
    color: r.color,
    logo: r.logo,
    logoColor: r.logoColor,
    pct: formatPct(pct(r.bytes, total)),
    bytes: r.bytes,
  }));
}

function updateReadme() {
  if (!fs.existsSync(README_PATH)) {
    throw new Error('README.md não encontrado na raiz do projeto.');
  }

  const readme = fs.readFileSync(README_PATH, 'utf8');
  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);

  const stats = computeLanguageStats();
  const badgeBlock = buildBadges(stats);

  let updated;
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    updated =
      readme.slice(0, startIdx) +
      badgeBlock +
      readme.slice(endIdx + END_MARKER.length);
  } else {
    // Insert right after title line (first line), fallback: prepend.
    const lines = readme.split(/\r?\n/);
    const insertAt = lines.findIndex((l) => l.trim().length > 0);
    const titleLineIdx = insertAt;

    if (titleLineIdx >= 0) {
      lines.splice(titleLineIdx + 1, 0, '', badgeBlock, '');
      updated = lines.join('\n');
    } else {
      updated = `${badgeBlock}\n\n${readme}`;
    }
  }

  fs.writeFileSync(README_PATH, updated, 'utf8');

  const top = stats[0];
  if (top) {
    console.log(`OK: Linguagem principal = ${top.name} (${top.pct}%)`);
  } else {
    console.log('OK: Nenhuma linguagem detectada.');
  }
}

updateReadme();
