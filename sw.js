"use strict";

/**
 * sw.js — service worker (PWA).
 * Strateji:
 *  - Navigasyon (HTML) ve data/*.json  -> network-first (taze içerik; çevrimdışında cache)
 *  - CSS/JS/ikon/CDN                   -> stale-while-revalidate
 *  - Supabase istekleri ve GET dışı her şey -> dokunulmaz
 * Sürüm değişince CACHE_NAME artırılır; eski cache activate'te silinir.
 */

const CACHE_NAME = 'tracker-v1';

const APP_SHELL = [
    './',
    'index.html',
    'programs.html',
    'app.html',
    'manifest.json',
    'css/core/theme.css',
    'css/pages/login.css',
    'css/pages/programs.css',
    'css/pages/app.css',
    'js/core/kt-config.js',
    'js/core/kt-swal.js',
    'js/core/kt-helpers.js',
    'js/core/kt-data.js',
    'js/core/kt-auth.js',
    'js/core/kt-pwa.js',
    'js/pages/login.js',
    'js/pages/programs.js',
    'js/pages/app.js',
    'data/programs.json',
    'data/programs/ingilizce/plan.json',
    'data/programs/ielts/plan.json',
    'assets/icons/icon-192.png',
    'assets/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            // biri 404 olsa da kurulum tamamlansın diye tek tek eklenir
            .then((cache) => Promise.allSettled(APP_SHELL.map((url) => cache.add(url))))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

const networkFirst = async (request) => {
    const cache = await caches.open(CACHE_NAME);
    try {
        const fresh = await fetch(request);
        if (fresh.ok) cache.put(request, fresh.clone());
        return fresh;
    } catch (err) {
        const cached = await cache.match(request, { ignoreSearch: true });
        if (cached) return cached;
        throw err;
    }
};

const staleWhileRevalidate = async (request) => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, { ignoreSearch: true });
    const refresh = fetch(request)
        .then((fresh) => {
            if (fresh.ok) cache.put(request, fresh.clone());
            return fresh;
        })
        .catch(() => cached);
    return cached ?? refresh;
};

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const sameOrigin = url.origin === self.location.origin;
    const isCdn = url.hostname === 'cdn.jsdelivr.net';
    if (!sameOrigin && !isCdn) return; // Supabase vb. dokunma

    const isDoc = request.mode === 'navigate';
    const isData = sameOrigin && url.pathname.endsWith('.json');

    event.respondWith(
        isDoc || isData ? networkFirst(request) : staleWhileRevalidate(request));
});
