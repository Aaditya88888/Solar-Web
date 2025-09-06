#!/usr/bin/env node
// Delete original JPG/PNG files only if a corresponding .webp exists next to them.
// Usage: npm run cleanup:webp [--roots=src,public,.] [--dry]

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

const exts = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']);

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
      if (exts.has(ext)) {
        yield fullPath;
      }
    }
  }
}

async function maybeDelete(file) {
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  const webp = path.join(dir, `${base}.webp`);
  if (fssync.existsSync(webp)) {
    if (dry) {
      console.log(`[DRY] Would delete: ${path.relative(process.cwd(), file)}`);
    } else {
      try {
        await fs.unlink(file);
        console.log(`Deleted: ${path.relative(process.cwd(), file)}`);
      } catch (e) {
        console.error(`Failed to delete ${file}: ${e.message}`);
      }
    }
    return true;
  }
  return false;
}

async function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const targets = roots.map(r => path.join(projectRoot, r));
  let candidates = 0;
  let deleted = 0;
  for (const root of targets) {
    for await (const file of walk(root)) {
      candidates++;
      const did = await maybeDelete(file);
      if (did && !dry) deleted++;
    }
  }
  console.log(`\nDone. Scanned ${candidates} originals. ${dry ? 'Dry run only.' : `Deleted ${deleted}.`}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
