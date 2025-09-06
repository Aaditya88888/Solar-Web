#!/usr/bin/env node
// Convert all JPG/PNG images under specified roots to WebP
// Usage: npm run convert:webp [--quality=80] [--roots=src,public]

import fs from 'fs/promises';
import path from 'path';
import url from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Parse CLI args
const args = process.argv.slice(2);
const qualityArg = args.find(a => a.startsWith('--quality='));
const rootsArg = args.find(a => a.startsWith('--roots='));
const quality = qualityArg ? parseInt(qualityArg.split('=')[1], 10) : 80;
const roots = (rootsArg ? rootsArg.split('=')[1] : 'src,public,.')
  .split(',')
  .map(r => r.trim())
  .filter(Boolean);

const exts = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']);

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (e) {
    return; // ignore missing dirs like public/ etc.
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip node_modules and .git
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      yield* walk(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (exts.has(ext)) {
        yield fullPath;
      }
    }
  }
}

async function convertFile(file) {
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const outFile = path.join(dir, `${base}.webp`);
  try {
    // Skip if WebP already exists
    await fs.access(outFile);
    console.log(`Skipping (exists): ${path.relative(process.cwd(), outFile)}`);
    return;
  } catch {}

  try {
    const input = await fs.readFile(file);
    const webpBuffer = await sharp(input).webp({ quality }).toBuffer();
    await fs.writeFile(outFile, webpBuffer);
    console.log(`Converted: ${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), outFile)}`);
  } catch (err) {
    console.error(`Failed: ${file}:`, err.message);
  }
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const targets = roots.map(r => path.join(projectRoot, r));
  let count = 0;
  for (const root of targets) {
    for await (const file of walk(root)) {
      // Ignore files that are already webp for safety
      await convertFile(file);
      count++;
    }
  }
  console.log(`\nDone. Processed ${count} candidate files. Quality=${quality}.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
