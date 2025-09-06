#!/usr/bin/env node
// Replace image references (.jpg/.jpeg/.png) with .webp where the .webp file exists next to it.
// Scans JS/JSX/TS/TSX/CSS/HTML files under src/, public/, and project root by default.
// Usage: npm run use:webp [--roots=src,public,.] [--dry]

import fs from 'fs/promises';
import fssync from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const rootsArg = args.find(a => a.startsWith('--roots='));
const dry = args.includes('--dry');
const roots = (rootsArg ? rootsArg.split('=')[1] : 'src,public,.')
  .split(',')
  .map(r => r.trim())
  .filter(Boolean);

const FILE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html']);

const projectRoot = path.resolve(__dirname, '..');

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      yield* walk(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (FILE_EXTS.has(ext)) yield fullPath;
    }
  }
}

function resolveCandidatePaths(currentDir, rel) {
  // If rel starts with '/', treat it as project-root relative
  if (rel.startsWith('/')) {
    const noSlash = rel.replace(/^\/+/, '');
    return path.resolve(projectRoot, noSlash);
  }
  return path.resolve(currentDir, rel);
}

function replaceInContent(content, filePath) {
  let changed = false;
  const currentDir = path.dirname(filePath);

  // 1) Replace quoted paths: "path/to/img.png" or 'path/to/img.jpg'
  const quotedRegex = /(["'`])([^"'`]*?)\.(png|jpg|jpeg)\1/gi;
  let output = content.replace(quotedRegex, (match, quote, rel, ext) => {
    const basePath = resolveCandidatePaths(currentDir, rel);
    const webpPath = basePath + '.webp';
    if (fssync.existsSync(webpPath)) {
      changed = true;
      return `${quote}${rel}.webp${quote}`;
    }
    return match;
  });

  // 2) Replace CSS url(...) with or without quotes
  // Examples: url(img.png), url('img.jpg'), url("img.jpeg")
  const urlRegex = /url\(\s*(["']?)([^\)"']*?)\.(png|jpg|jpeg)\1\s*\)/gi;
  output = output.replace(urlRegex, (match, quote, rel, ext) => {
    const basePath = resolveCandidatePaths(currentDir, rel);
    const webpPath = basePath + '.webp';
    if (fssync.existsSync(webpPath)) {
      changed = true;
      const q = quote || '';
      return `url(${q}${rel}.webp${q})`;
    }
    return match;
  });

  return { replaced: output, changed };
}

async function processFile(file) {
  const original = await fs.readFile(file, 'utf8');
  const { replaced, changed } = replaceInContent(original, file);
  if (changed) {
    if (dry) {
      console.log(`[DRY] Would update: ${path.relative(process.cwd(), file)}`);
    } else {
      await fs.writeFile(file, replaced, 'utf8');
      console.log(`Updated: ${path.relative(process.cwd(), file)}`);
    }
  }
  return changed;
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const targets = roots.map(r => path.join(projectRoot, r));
  let updated = 0;
  for (const root of targets) {
    for await (const file of walk(root)) {
      const changed = await processFile(file);
      if (changed) updated++;
    }
  }
  console.log(`\nDone. Updated ${updated} files${dry ? ' (dry run)' : ''}.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
