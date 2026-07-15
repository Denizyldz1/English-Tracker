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

    // Metni { w: kelime, sep: ardındaki boşluk } listesine çevirir (kayıpsız)
    const toWords = (str) => {
        const raw = str.split(/(\s+)/);
        const words = [];
        for (let i = 0; i < raw.length; i += 2) {
            words.push({ w: raw[i] ?? '', sep: raw[i + 1] ?? '' });
        }
        return words;
    };

    // ─── "→ Segment" zincir okuma (link etiketi konu adını da kapsasın) ───
    const QUOTE_OPEN = '"“\'‘';
    const UPPER_START_RE = /^[0-9A-ZÇĞİÖŞÜ]/; // Türkçe büyük harfler dahil
    const MAX_CHAIN = 4;

    // Segment kelimesi: apostrof eki ve son noktalama ayrılır; Başharf/rakamla başlamalı
    const segWord = (raw) => {
        let cut = raw.length;
        for (const apo of ['\'', '’']) {
            const at = raw.indexOf(apo);
            if (at !== -1 && at < cut) cut = at;
        }
        const word = raw.slice(0, cut);
        let core = word;
        while (core && TRAIL_CHARS.includes(core.at(-1))) core = core.slice(0, -1);
        if (!core || !UPPER_START_RE.test(core)) return null;
        return { core, rest: word.slice(core.length) + raw.slice(cut) };
    };

    // Tırnaklı segment: "Present perfect or past simple" — kapanışa kadar al
    const readQuoted = (words, k) => {
        const open = words[k].w[0];
        const close = { '"': '"', '“': '”', '\'': '\'', '‘': '’' }[open];
        const taken = [];
        let j = k;
        while (j < words.length && taken.length < 8) {
            const raw = words[j].w;
            const closeAt = raw.indexOf(close, j === k ? 1 : 0);
            if (closeAt !== -1) {
                taken.push({ core: raw.slice(0, closeAt + 1), sep: words[j].sep });
                const text = taken.map((t, i2) =>
                    i2 < taken.length - 1 ? t.core + t.sep : t.core).join('');
                return {
                    text, next: j + 1, trailText: raw.slice(closeAt + 1),
                    lastSep: words[j].sep, more: true
                };
            }
            taken.push({ core: raw, sep: words[j].sep });
            j += 1;
        }
        return null; // kapanış tırnağı yok — segment sayma
    };

    // Başharfli segment: "B1", "Nicos Weg", "Writing Task 1" — küçük harfte durur
    const readTitle = (words, k) => {
        const taken = [];
        let j = k;
        let trailText = '';
        let more = true;
        while (j < words.length && taken.length < 5) {
            const parsed = segWord(words[j].w);
            if (!parsed) break;
            taken.push({ core: parsed.core, sep: words[j].sep });
            j += 1;
            if (parsed.rest) {
                trailText = parsed.rest;
                more = false;
                break;
            }
        }
        if (!taken.length) return null;
        const text = taken.map((t, i2) =>
            i2 < taken.length - 1 ? t.core + t.sep : t.core).join('');
        return { text, next: j, trailText, lastSep: taken.at(-1).sep, more };
    };

    const readSegment = (words, k) => {
        const first = words[k];
        if (!first?.w) return null;
        return QUOTE_OPEN.includes(first.w[0])
            ? readQuoted(words, k)
            : readTitle(words, k);
    };

    // Linkin ardındaki "→ X → Y" zincirini okur; etiket + kalan konum döner
    const readChain = (words, linkIdx) => {
        let pendingSep = words[linkIdx].sep;
        let j = linkIdx + 1;
        let label = '';
        let arrows = 0;
        let trailText = '';
        let endSep = '';
        while (arrows < MAX_CHAIN && j < words.length && words[j].w === '→') {
            const seg = readSegment(words, j + 1);
            if (!seg) break;
            label += `${pendingSep}→${words[j].sep}${seg.text}`;
            arrows += 1;
            trailText = seg.trailText;
            endSep = seg.lastSep;
            j = seg.next;
            if (!seg.more || trailText) break;
            pendingSep = endSep;
        }
        return arrows ? { label, next: j, trailText, endSep } : null;
    };

    // Metindeki ilk linkin href'ini döndürür (kura konu linki için)
    const firstLinkHref = (text) => {
        for (const { w } of toWords(text ?? '')) {
            const { core } = splitToken(w);
            if (core && isLinkCandidate(core)) {
                return core.startsWith('http') ? core : `https://${core}`;
            }
        }
        return null;
    };

    const appendText = ($el, s) => {
        if (s) $el.append(document.createTextNode(s));
    };

    // Tek kelimeyi işler (düz metin veya link+zincir); sonraki kelime indexini döner
    const renderWord = ($el, words, i) => {
        const { w, sep } = words[i];
        const { lead, core, trail } = splitToken(w);
        if (!core || !isLinkCandidate(core)) {
            appendText($el, w + sep);
            return i + 1;
        }
        appendText($el, lead);
        const chain = trail ? null : readChain(words, i);
        const label = core + (chain?.label ?? '');
        const after = chain ? chain.trailText + chain.endSep : trail + sep;
        const href = core.startsWith('http') ? core : `https://${core}`;
        $('<a>', {
            href, target: '_blank', rel: 'noopener', class: 'ext-link', text: label
        }).appendTo($el);
        appendText($el, after);
        return chain ? chain.next : i + 1;
    };

    const linkifyInto = ($el, text) => {
        $el.empty();
        const words = toWords(text ?? '');
        let i = 0;
        while (i < words.length) i = renderWord($el, words, i);
    };

    return {
        escapeHtml, formatDate, setButtonLoading, resetButton,
        getInitials, shuffleArray, linkifyInto, firstLinkHref
    };

})();
