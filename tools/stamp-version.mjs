/**
 * stamp-version.mjs — CSS/JS cache-bust sürümlerini otomatik damgalar.
 *
 * Elle `?v=N` artırmak yerine: her yerel css/js dosyasının içerik hash'i
 * (sha256'nın ilk 8 hanesi) hesaplanır ve HTML'deki `?v=...` bununla
 * değiştirilir. Sürüm yalnızca dosya İÇERİĞİ değişince değişir; değişmeyen
 * dosya aynı sürümde kalır (tarayıcı önbelleği gereksiz yere boşalmaz).
 *
 * Ek olarak service worker'ın CACHE_NAME'i, tüm app-shell dosyalarının
 * birleşik hash'iyle güncellenir; böylece herhangi bir varlık değişince
 * SW önbelleği de tazelenir (eski cache activate'te silinir).
 *
 * Kullanım (her yayından önce):
 *   node tools/stamp-version.mjs   ·   npm run build:cache
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const hash = (buf) => createHash('sha256').update(buf).digest('hex').slice(0, 8);
const readHash = (relPath) => hash(readFileSync(join(root, relPath)));

const HTML_FILES = ['index.html', 'programs.html', 'app.html'];
// Yalnızca yerel css/ veya js/ varlıkları; CDN (https://…) ve assets/ atlanır.
const ASSET_RE = /\b(href|src)="((?:css|js)\/[^"?]+?)(?:\?v=[^"]*)?"/g;

let stamped = 0;

// ─── 1) HTML içindeki css/js referanslarını içerik hash'iyle damgala ──
for (const file of HTML_FILES) {
    const abs = join(root, file);
    const before = readFileSync(abs, 'utf8');
    const after = before.replace(ASSET_RE, (match, attr, assetPath) => {
        let v;
        try { v = readHash(assetPath); }
        catch { return match; } // dosya bulunamazsa dokunma
        return `${attr}="${assetPath}?v=${v}"`;
    });
    if (after !== before) { writeFileSync(abs, after); stamped += 1; }
}

// ─── 2) Service worker CACHE_NAME'ini app-shell hash'iyle güncelle ────
const swPath = join(root, 'sw.js');
const sw = readFileSync(swPath, 'utf8');
const shellBlock = sw.match(/const APP_SHELL = \[([\s\S]*?)\];/);
if (shellBlock) {
    const shell = [...shellBlock[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
    const manifest = shell.map((p) => {
        const rel = p === './' ? 'index.html' : p; // './' kök = index.html
        try { return `${p}:${readHash(rel)}`; }
        catch { return `${p}:missing`; }
    }).join('|');
    const cacheName = `tracker-${hash(manifest)}`;
    const updated = sw.replace(/const CACHE_NAME = '[^']*';/, `const CACHE_NAME = '${cacheName}';`);
    if (updated !== sw) { writeFileSync(swPath, updated); stamped += 1; }
    console.log(`sw.js  CACHE_NAME -> ${cacheName}`);
}

console.log(stamped ? `✓ Damgalandı (${stamped} dosya güncellendi).` : '✓ Değişiklik yok, sürümler güncel.');
