"use strict";

/**
 * KTPwa — service worker kaydı (PWA). Desteklenmeyen tarayıcıda sessizce atlar.
 */
const KTPwa = (() => {

    const register = () => {
        if (!('serviceWorker' in navigator)) return;
        navigator.serviceWorker.register('sw.js')
            .catch((err) => console.warn('Service worker kaydı başarısız:', err));
    };

    return { init: register };

})();

KTPwa.init();
