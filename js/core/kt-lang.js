"use strict";

/**
 * KTLang — görev içeriği dil tercihi (TR/EN).
 *
 * Plan verisinde temel alanlar (title/summary/source/text) kaynak dilindedir;
 * çevirisi olan programlarda yanına <alan>Tr alanı eklenir (build-plan.mjs).
 * pick() seçili dile göre uygun alanı verir, yoksa temele düşer — böylece
 * çevirisi olmayan programlar (İngilizce/IELTS/Almanca) iki modda da çalışır.
 *
 * Tercih localStorage'da tutulur; varsayılan Türkçe.
 */
const KTLang = (() => {

    const KEY = 'kt-lang';
    const DEFAULT = 'tr';

    const get = () => {
        try {
            return globalThis.localStorage.getItem(KEY) === 'en' ? 'en' : DEFAULT;
        } catch {
            return DEFAULT; // depolama kapalıysa varsayılan dil
        }
    };

    const set = (lang) => {
        try {
            globalThis.localStorage.setItem(KEY, lang === 'en' ? 'en' : 'tr');
        } catch {
            // depolama kapalı: tercih kalıcı olmaz, akış bozulmaz
        }
    };

    const isTr = () => get() === 'tr';

    // Seçili dile göre alanı seç; Türkçe karşılık yoksa temel alana düş
    const pick = (obj, field) => {
        if (!obj) return '';
        const tr = obj[`${field}Tr`];
        return (isTr() && tr) ? tr : (obj[field] ?? '');
    };

    // Başlıktaki dil düğmesini bağlar: etiketi yazar, tıklayınca dili değiştirip yeniler
    const mountToggle = (selector) => {
        const $btn = $(selector);
        if (!$btn.length) return;
        const label = () => (isTr() ? 'TR' : 'EN');
        $btn.find('.js-lang-label').text(label());
        $btn.attr('title', isTr()
            ? 'Görev dili: Türkçe (İngilizce için tıkla)'
            : 'Task language: English (click for Turkish)');
        $btn.on('click', () => {
            set(isTr() ? 'en' : 'tr');
            globalThis.location.reload();
        });
    };

    return { get, set, isTr, pick, mountToggle };

})();
