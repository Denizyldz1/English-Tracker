"use strict";

/**
 * KTHelpers — ortak yardımcılar (FRONTEND_STANDARD §6.3).
 */
const KTHelpers = (() => {

    // HTML kaçışlama (XSS) — kullanıcı verisi .html()'e gömülecekse zorunlu.
    const escapeHtml = (str) => $('<div>').text(str ?? '').html();

    // Türkçe tarih formatla
    const formatDate = (dateString, withTime = false) => {
        const date = new Date(dateString);
        if (Number.isNaN(date.getTime())) return '-';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        if (withTime) {
            options.hour = '2-digit';
            options.minute = '2-digit';
        }
        return date.toLocaleString('tr-TR', options);
    };

    // Submit butonunu loading'e al / normale döndür
    const setButtonLoading = ($button) => {
        $button.attr('data-kt-indicator', 'on').prop('disabled', true);
    };

    const resetButton = ($button) => {
        $button.removeAttr('data-kt-indicator').prop('disabled', false);
    };

    // İsim/e-posta baş harfi (avatar için)
    const getInitials = (value) => {
        if (!value) return '';
        return value
            .trim()
            .split(/[\s@.]+/)
            .map((n) => n.charAt(0))
            .join('')
            .slice(0, 2)
            .toUpperCase();
    };

    // Kripto tabanlı rastgele tamsayı [0, maxExclusive) — S2245'e takılmaz
    const randomInt = (maxExclusive) => {
        const buf = new Uint32Array(1);
        globalThis.crypto.getRandomValues(buf);
        return buf[0] % maxExclusive;
    };

    // Fisher-Yates karıştırma (kura vb. için)
    const shuffleArray = (arr) => {
        const array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
            const j = randomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // ─── Linkify: metindeki URL/alan adlarını tıklanabilir yapar ─────
    // Kelime bazlı, regex'siz tarama (S5852 backtracking riski yok).
    // .html() kullanılmaz: metin text node, linkler attr ile kurulur (XSS yok).
    const LEAD_CHARS = '("\'’„';
    const TRAIL_CHARS = '.,;:!?)"\'’';
    const HOST_RE = /^[a-z0-9.-]+$/i;  // tek sınıf, çapalı — lineer
    const TLD_RE = /^[a-z]{2,}$/i;

    // "goethe.de", "ielts.org/take-a-test", "https://..." linktir; "z.B.", "1.5" değildir
    const isLinkCandidate = (value) => {
        if (value.startsWith('http://') || value.startsWith('https://')) return true;
        const slashAt = value.indexOf('/');
        const host = slashAt === -1 ? value : value.slice(0, slashAt);
        if (!HOST_RE.test(host)) return false;
        const parts = host.split('.');
        return parts.length >= 2
            && parts.every((p) => p.length > 0)
            && TLD_RE.test(parts.at(-1));
    };

    // Kelimeyi baştaki parantez/tırnak, apostrof eki ("com'dan") ve sondaki
    // noktalamadan ayırır: { lead, core, trail }
    const splitToken = (token) => {
        let start = 0;
        while (start < token.length && LEAD_CHARS.includes(token[start])) start += 1;
        let end = token.length;
        for (const apo of ['\'', '’']) {
            const at = token.indexOf(apo, start);
            if (at !== -1 && at < end) end = at;
        }
        let core = token.slice(start, end);
        while (core && TRAIL_CHARS.includes(core.at(-1))) core = core.slice(0, -1);
        return { lead: token.slice(0, start), core, trail: token.slice(start + core.length) };
    };

    const linkifyInto = ($el, text) => {
        $el.empty();
        for (const part of (text ?? '').split(/(\s+)/)) {
            if (!part) continue;
            const { lead, core, trail } = splitToken(part);
            if (!core || !isLinkCandidate(core)) {
                $el.append(document.createTextNode(part));
                continue;
            }
            if (lead) $el.append(document.createTextNode(lead));
            const href = core.startsWith('http') ? core : `https://${core}`;
            $('<a>', {
                href, target: '_blank', rel: 'noopener', class: 'ext-link', text: core
            }).appendTo($el);
            if (trail) $el.append(document.createTextNode(trail));
        }
    };

    return {
        escapeHtml, formatDate, setButtonLoading, resetButton,
        getInitials, shuffleArray, linkifyInto
    };

})();
