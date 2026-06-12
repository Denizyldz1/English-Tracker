/**
 * make-icons.mjs — PWA ikonlarını üretir (assets/icons/icon-192.png, icon-512.png).
 * Harici paket yok: PNG, node:zlib deflate + elle chunk yazarak kodlanır.
 * Görsel: Azure mavisi zemin (#0078d4) + beyaz onay işareti (anti-aliased).
 *
 * Kullanım: node tools/make-icons.mjs
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(here, '..', 'assets', 'icons');

// ─── PNG kodlayıcı ─────────────────────────────────────────────────
const CRC_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        t[n] = c >>> 0;
    }
    return t;
})();

const crc32 = (buf) => {
    let c = 0xFFFFFFFF;
    for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
};

const chunk = (type, data) => {
    const typeBuf = Buffer.from(type, 'ascii');
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
    return Buffer.concat([len, typeBuf, data, crc]);
};

const encodePng = (size, rgba) => {
    const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(size, 0);
    ihdr.writeUInt32BE(size, 4);
    ihdr[8] = 8;   // bit depth
    ihdr[9] = 6;   // color type RGBA
    // raw: her satır başına filtre baytı (0)
    const raw = Buffer.alloc(size * (size * 4 + 1));
    for (let y = 0; y < size; y++) {
        rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
    }
    return Buffer.concat([
        sig,
        chunk('IHDR', ihdr),
        chunk('IDAT', deflateSync(raw)),
        chunk('IEND', Buffer.alloc(0))
    ]);
};

// ─── Çizim ─────────────────────────────────────────────────────────
const distToSegment = (px, py, ax, ay, bx, by) => {
    const dx = bx - ax;
    const dy = by - ay;
    const t = Math.max(0, Math.min(1,
        ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
    return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
};

const drawIcon = (size) => {
    const BG = [0, 120, 212];   // --az-primary #0078d4
    const FG = [255, 255, 255];
    // onay işareti köşe noktaları (birim koordinat)
    const A = [0.27, 0.54];
    const B = [0.44, 0.71];
    const C = [0.75, 0.32];
    const halfWidth = 0.055 * size;
    const aa = Math.max(1, size / 256); // kenar yumuşatma genişliği

    const rgba = Buffer.alloc(size * size * 4);
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const px = x + 0.5;
            const py = y + 0.5;
            const d = Math.min(
                distToSegment(px, py, A[0] * size, A[1] * size, B[0] * size, B[1] * size),
                distToSegment(px, py, B[0] * size, B[1] * size, C[0] * size, C[1] * size));
            let cov = 0;
            if (d <= halfWidth) cov = 1;
            else if (d < halfWidth + aa) cov = (halfWidth + aa - d) / aa;
            const i = (y * size + x) * 4;
            rgba[i] = Math.round(BG[0] + (FG[0] - BG[0]) * cov);
            rgba[i + 1] = Math.round(BG[1] + (FG[1] - BG[1]) * cov);
            rgba[i + 2] = Math.round(BG[2] + (FG[2] - BG[2]) * cov);
            rgba[i + 3] = 255;
        }
    }
    return rgba;
};

mkdirSync(OUT_DIR, { recursive: true });
for (const size of [192, 512]) {
    const png = encodePng(size, drawIcon(size));
    const file = join(OUT_DIR, `icon-${size}.png`);
    writeFileSync(file, png);
    console.log(`${file} (${png.length} bayt)`);
}
