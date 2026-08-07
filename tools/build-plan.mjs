/**
 * build-plan.mjs — program kaynak MD -> plan.json dönüştürücü (çoklu program).
 *
 * Girdi : data/programs/<id>/source-plan.md
 * Çıktı : data/programs/<id>/plan.json  (+ data/programs.json içindeki taskCount güncellenir)
 *
 * Kaynak format (parser bunları okur, gerisi serbest):
 *   "# <emoji> FAZ N — Başlık"  -> faz
 *   "### Hafta N — Başlık · 📺 Bölüm" -> hafta (📺 kısmı opsiyonel)
 *   "**Özet:** ..." / "**Kaynak:** ..." -> hafta meta
 *   "- [ ] **[Gün]** metin" -> görev (bir satırda birden çok **[Gün]** olabilir)
 *
 * Görev ID kuralı: `${idPrefix}${weekId}-${günSlug}` (örn. "w1-pzt", "ielts.w1-pzt").
 * DİKKAT: "ingilizce" programının idPrefix'i SONSUZA DEK '' kalmalı — Supabase'deki
 * mevcut ilerleme satırları öneksiz ID'lerle kayıtlı.
 *
 * Kullanım:
 *   node tools/build-plan.mjs            -> tüm programları derler
 *   node tools/build-plan.mjs ielts      -> tek programı derler
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const DATA = join(here, '..', 'data');
const REGISTRY = join(DATA, 'programs.json');

// ─── Program tanımları ─────────────────────────────────────────────
const PROGRAM_CONFIGS = {
    ingilizce: {
        title: 'İngilizce Master Plan — B1’den C1’e (28 Hafta · Yoğun)',
        idPrefix: '', // ASLA değiştirme: canlı ilerleme öneksiz ID'lerde
        recurringNote:
            'Salı/Perşembe kelime tekrarı ve Pzt/Çar/Cum yeni kelime görevleri her haftaya '
            + 'sabit olarak eklenmiştir; haftalık olarak işaretlenir.',
        recurring: [
            {
                suffix: 'rec-sali', day: 'Salı',
                text: 'Tobo English uygulamasında geçmiş kelimelerin tekrarını yap — 10-15 dk '
                    + '(bugün YENİ kelime eklenmez; tekrar günleri yeni kelime gününden daha değerlidir)'
            },
            {
                suffix: 'rec-per', day: 'Per',
                text: 'Tobo English uygulamasında geçmiş kelimelerin tekrarını yap — 10-15 dk '
                    + '(bugün YENİ kelime eklenmez)'
            },
            {
                suffix: 'rec-words', day: 'Pzt/Çar/Cum',
                text: 'Tobo English uygulamasına günde 15-20 yeni kelime ekle ve çalış '
                    + '(haftalık toplam ~50-60 kelime)'
            }
        ]
    },
    almanca: {
        title: 'Almanca Master Plan — Sıfırdan Goethe B2’ye (66 Hafta)',
        idPrefix: 'almanca.',
        recurringNote:
            'Salı/Perşembe Tobo German kelime tekrarı ve Pzt/Çar/Cum yeni kelime görevleri '
            + 'her haftaya sabit olarak eklenmiştir; haftalık olarak işaretlenir.',
        recurring: [
            {
                suffix: 'rec-sali', day: 'Salı',
                text: 'Tobo German uygulamasında geçmiş kelimelerin tekrarını yap — 10-15 dk '
                    + '(bugün YENİ kelime eklenmez; her ismi artikeliyle çalış: der/die/das)'
            },
            {
                suffix: 'rec-per', day: 'Per',
                text: 'Tobo German uygulamasında geçmiş kelimelerin tekrarını yap — 10-15 dk '
                    + '(bugün YENİ kelime eklenmez)'
            },
            {
                suffix: 'rec-words', day: 'Pzt/Çar/Cum',
                text: 'Tobo German uygulamasına günde 10-15 yeni kelime ekle ve çalış — her ismi '
                    + 'MUTLAKA artikeliyle (das Haus, die Katze) ve çoğuluyla öğren (haftalık ~40-50)'
            }
        ]
    },
    ielts: {
        title: 'IELTS Academic — Band 7.0-7.5 (13 Hafta)',
        idPrefix: 'ielts.',
        recurringNote:
            'Akademik kelime (AWL) ve günlük konuşma kaydı görevleri her haftaya sabit '
            + 'olarak eklenmiştir; haftalık olarak işaretlenir.',
        recurring: [
            {
                suffix: 'rec-awl', day: 'Hafta içi',
                text: 'eapfoundation.com → AWL (570 kelime, haftada ~1 alt liste) listesinden bu '
                    + 'haftanın 15-20 kelimesini çalış; Quizlet\'te hazır AWL setleri ücretsiz '
                    + 'Flashcards/Match ile tekrar için kullanılabilir (Learn/Test modu Quizlet Plus '
                    + 'gerektirir). Yazma/konuşma için konu kelimeleri: ieltsliz.com → Vocabulary'
            },
            {
                suffix: 'rec-speak', day: 'Her gün',
                text: 'Her gün telefona 2 dakikalık İngilizce konuşma kaydet; konuyu ieltsliz.com → '
                    + 'Speaking Part 1 sorularından seç. Haftada en az 5 kayıt; hafta sonunda birini '
                    + 'dinleyip 1 hatanı not et'
            }
        ]
    },
    pratik: {
        title: 'Dev Practice — C#/Dart + MSSQL (20 Weeks)',
        titleTr: 'Geliştirici Pratiği — C#/Dart + MSSQL (20 Hafta)',
        idPrefix: 'pratik.',
        recurringNote:
            'Everything in this program runs in the browser — nothing to install. '
            + 'Your solved-problem history lives on the platforms themselves.',
        recurring: [
            {
                suffix: 'rec-review', day: 'Hafta içi',
                text: 'After every solved problem, stay on the site: open 2 top-voted '
                    + 'solutions and compare them with yours — spot one trick you did not '
                    + 'use. The platform keeps your solution history; Tuesday re-solve '
                    + 'picks from it (5 min)',
                textTr: 'Her çözdüğün problemden sonra sitede kal: en çok oy alan 2 çözümü '
                    + 'aç ve kendi çözümünle karşılaştır — kullanmadığın bir numarayı yakala. '
                    + 'Çözüm geçmişin platformda durur; Salı günkü yeniden çözüm oradan '
                    + 'seçilir (5 dk)'
            }
        ]
    },
    python: {
        title: 'Python → AI Engineering (20 Weeks)',
        titleTr: 'Python → Yapay Zekâ Mühendisliği (20 Hafta)',
        idPrefix: 'python.',
        recurringNote:
            'Intensive program: 5 days/week, weekend free. The AI-notes habit below '
            + 'applies to every study block.',
        recurring: [
            {
                suffix: 'rec-notes', day: 'Hafta içi',
                text: 'AI notes: after each study block, write a 3-line English note — '
                    + 'what you learned / why it matters / one gotcha. Before Friday '
                    + 'closes, add one line: how does this help the project at work? (5 min)',
                textTr: 'Yapay zekâ notları: her çalışma bloğundan sonra 3 satırlık not yaz — '
                    + 'ne öğrendin / neden önemli / bir tuzak. Cuma kapanmadan bir satır ekle: '
                    + 'bu, işteki projeye nasıl yarıyor? (5 dk)'
            }
        ]
    }
};

// ─── Parser ────────────────────────────────────────────────────────
const DAY_SLUGS = {
    'Pzt': 'pzt', 'Salı': 'sali', 'Çar': 'car', 'Per': 'per',
    'Cum': 'cum', 'Cmt': 'cmt', 'Paz': 'paz',
    'Hafta içi': 'haftaici', 'Her gün': 'hergun'
};

const slugifyDay = (day) =>
    day.split('/').map((d) => DAY_SLUGS[d.trim()] ?? d.trim().toLowerCase()).join('-');

// markdown vurgu (*italik* / **bold**), fazla boşluk ve artık ayraç (·) temizle
const clean = (s) => s
    .replaceAll('*', '')
    .replace(/\s+/g, ' ')
    .replace(/\s*·\s*$/, '')
    .replace(/^\s*·\s*/, '')
    .trim();

const weekId = (no) => `w${no.replaceAll(/[^0-9]+/g, '-')}`;

// Bir "- [ ] ..." satırını, içindeki **[Gün]** işaretlerine göre görevlere böler.
const parseTaskLine = (content, prefix, wId, counters) => {
    const out = [];
    const markerRe = /\*\*\[([^\]]+)\]\*\*/g;
    const markers = [...content.matchAll(markerRe)];

    if (markers.length === 0) {
        const text = clean(content.replace(/^[-*]\s*\[ \]\s*/, ''));
        if (!text) return out;
        counters.noDay = (counters.noDay ?? 0) + 1;
        out.push({ id: `${prefix}${wId}-t${counters.noDay}`, day: '', text, recurring: false });
        return out;
    }

    markers.forEach((m, i) => {
        const day = m[1].trim();
        const start = m.index + m[0].length;
        const end = i + 1 < markers.length ? markers[i + 1].index : content.length;
        const text = clean(content.slice(start, end));
        let slug = slugifyDay(day);
        counters[slug] = (counters[slug] ?? 0) + 1;
        if (counters[slug] > 1) slug = `${slug}${counters[slug]}`;
        out.push({ id: `${prefix}${wId}-${slug}`, day, text, recurring: false });
    });
    return out;
};

const parseProgram = (programId, config, fileName = 'source-plan.md') => {
    const src = join(DATA, 'programs', programId, fileName);
    const lines = readFileSync(src, 'utf8').split(/\r?\n/);
    const prefix = config.idPrefix;

    const phases = [];
    const weeks = [];
    let phaseId = null;
    let week = null;
    let counters = {};

    const rePhase = /^#\s+\S+\s+(FAZ\s+\d+\s+—\s+.*)$/;
    const rePhaseNo = /FAZ\s+(\d+)/;
    const reWeek = /^###\s+Hafta\s+([0-9-]+)\s+—\s+(.*)$/;
    const reOzet = /^\*\*Özet:\*\*\s*(.*)$/;
    const reKaynak = /^\*\*Kaynak:\*\*\s*(.*)$/;
    const reTask = /^[-*]\s*\[ \]\s+(.*)$/;

    const closeWeek = () => {
        if (!week) return;
        for (const r of config.recurring) {
            week.tasks.push({
                id: `${prefix}${week.id}-${r.suffix}`, day: r.day, text: r.text,
                ...(r.textTr ? { textTr: r.textTr } : {}), recurring: true
            });
        }
        weeks.push(week);
        week = null;
        counters = {};
    };

    for (const line of lines) {
        const mPhase = line.match(rePhase);
        if (mPhase) {
            closeWeek();
            const full = mPhase[1].trim();
            const no = full.match(rePhaseNo)[1];
            phaseId = `faz${no}`;
            const title = full.split('· 📺')[0].trim();
            phases.push({ id: phaseId, title });
            continue;
        }

        const mWeek = line.match(reWeek);
        if (mWeek) {
            closeWeek();
            const no = mWeek[1].trim();
            const rest = mWeek[2].trim();
            const parts = rest.split('📺');
            const title = clean(parts[0].replace(/·\s*$/, ''));
            const episode = parts[1] ? clean(parts[1]) : '';
            week = {
                id: weekId(no), phaseId, no, title, episode,
                summary: '', source: '', tasks: []
            };
            continue;
        }

        if (!week) continue;

        const mOzet = line.match(reOzet);
        if (mOzet) { week.summary = clean(mOzet[1]); continue; }
        const mKaynak = line.match(reKaynak);
        if (mKaynak) { week.source = clean(mKaynak[1]); continue; }

        const mTask = line.match(reTask);
        if (mTask) {
            week.tasks.push(...parseTaskLine(mTask[1], prefix, week.id, counters));
        }
    }
    closeWeek();

    return {
        title: config.title,
        generatedFrom: `data/programs/${programId}/${fileName}`,
        recurringNote: config.recurringNote,
        phases,
        weeks
    };
};

// ─── Çeviri birleştirme (source-plan.tr.md varsa) ──────────────────
// Çeviri dosyası temel planla BİREBİR aynı yapıda olmalı (aynı faz/hafta/görev
// sayısı ve sırası); eşleşme bozuksa build durur — sessiz kayma olmasın.
const assertSame = (what, a, b) => {
    if (a !== b) {
        console.error(`Çeviri yapısı uyuşmuyor (${what}): temel=${a}, çeviri=${b}`);
        process.exit(1);
    }
};

const mergeTranslation = (plan, tr) => {
    assertSame('faz sayısı', plan.phases.length, tr.phases.length);
    assertSame('hafta sayısı', plan.weeks.length, tr.weeks.length);

    plan.phases.forEach((p, i) => { p.titleTr = tr.phases[i].title; });

    plan.weeks.forEach((w, i) => {
        const tw = tr.weeks[i];
        assertSame(`hafta ${w.no} no`, w.no, tw.no);
        w.titleTr = tw.title;
        if (tw.summary) w.summaryTr = tw.summary;
        if (tw.source) w.sourceTr = tw.source;

        // recurring görevler config'ten gelir (textTr'leri orada tanımlı)
        const base = w.tasks.filter((t) => !t.recurring);
        const trTasks = tw.tasks.filter((t) => !t.recurring);
        assertSame(`hafta ${w.no} görev sayısı`, base.length, trTasks.length);
        base.forEach((t, j) => { t.textTr = trTasks[j].text; });
    });

    if (plan.titleTr === undefined && tr.title) plan.titleTr = tr.title;
};

// ─── Build + registry güncelleme ───────────────────────────────────
const buildProgram = (programId) => {
    const config = PROGRAM_CONFIGS[programId];
    if (!config) {
        console.error(`Bilinmeyen program: ${programId}. Tanımlılar: ${Object.keys(PROGRAM_CONFIGS).join(', ')}`);
        process.exit(1);
    }

    const plan = parseProgram(programId, config);

    // Çeviri dosyası varsa Türkçe alanlar (…Tr) eklenir; yoksa plan olduğu gibi kalır
    const trSrc = join(DATA, 'programs', programId, 'source-plan.tr.md');
    let translated = false;
    if (existsSync(trSrc)) {
        if (config.titleTr) plan.titleTr = config.titleTr;
        mergeTranslation(plan, parseProgram(programId, config, 'source-plan.tr.md'));
        translated = true;
    }

    const out = join(DATA, 'programs', programId, 'plan.json');
    writeFileSync(out, JSON.stringify(plan, null, 2) + '\n', 'utf8');

    const totalTasks = plan.weeks.reduce((a, w) => a + w.tasks.length, 0);
    console.log(`[${programId}] phases=${plan.phases.length} weeks=${plan.weeks.length} tasks=${totalTasks}`
        + (translated ? ' (+TR)' : ''));
    return totalTasks;
};

const updateRegistry = (counts) => {
    const registry = JSON.parse(readFileSync(REGISTRY, 'utf8'));
    for (const entry of registry) {
        if (counts[entry.id] !== undefined) entry.taskCount = counts[entry.id];
    }
    writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n', 'utf8');
    console.log('programs.json taskCount güncellendi');
};

const main = () => {
    const arg = process.argv[2];
    const ids = arg ? [arg] : Object.keys(PROGRAM_CONFIGS);
    const counts = {};
    for (const id of ids) counts[id] = buildProgram(id);
    updateRegistry(counts);
};

main();
