/**
 * build-plan.mjs
 * data/source-plan.md (İngilizce Master Plan) -> data/plan.json
 *
 * Çıktı yapısı:
 *   { title, generatedFrom, recurringTemplate, phases:[{id,title}],
 *     weeks:[{ id, phaseId, no, title, episode, summary, source,
 *              tasks:[{ id, day, text, recurring }] }] }
 *
 * Her haftaya, plandaki "Sabit Tekrarlayan Görevler" hafta-kapsamlı ID ile
 * enjekte edilir (örn. w7-rec-sali) ki ilerleme yüzdesi dürüst kalsın.
 *
 * Kullanım:  node tools/build-plan.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, '..', 'data', 'source-plan.md');
const OUT = join(here, '..', 'data', 'plan.json');

// Türkçe gün etiketi -> ascii slug (görev ID'si için)
const DAY_SLUGS = {
    'Pzt': 'pzt', 'Salı': 'sali', 'Çar': 'car', 'Per': 'per',
    'Cum': 'cum', 'Cmt': 'cmt', 'Paz': 'paz'
};

// Her haftaya enjekte edilen sabit görevler
const RECURRING = [
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
];

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
const parseTaskLine = (content, wId, counters) => {
    const out = [];
    const markerRe = /\*\*\[([^\]]+)\]\*\*/g;
    const markers = [...content.matchAll(markerRe)];

    if (markers.length === 0) {
        // Gün etiketsiz tek görev (özellikle Faz 3)
        const text = clean(content.replace(/^[-*]\s*\[ \]\s*/, ''));
        if (!text) return out;
        counters.noDay = (counters.noDay ?? 0) + 1;
        out.push({ id: `${wId}-t${counters.noDay}`, day: '', text, recurring: false });
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
        out.push({ id: `${wId}-${slug}`, day, text, recurring: false });
    });
    return out;
};

const main = () => {
    const lines = readFileSync(SRC, 'utf8').split(/\r?\n/);

    const phases = [];
    const weeks = [];
    let phaseId = null;
    let week = null;
    let counters = {};

    const redcPhase = /^#\s+\S+\s+(FAZ\s+\d+\s+—\s+.*)$/;
    const rePhaseNo = /FAZ\s+(\d+)/;
    const reWeek = /^###\s+Hafta\s+([0-9-]+)\s+—\s+(.*)$/;
    const reOzet = /^\*\*Özet:\*\*\s*(.*)$/;
    const reKaynak = /^\*\*Kaynak:\*\*\s*(.*)$/;
    const reTask = /^[-*]\s*\[ \]\s+(.*)$/;

    const closeWeek = () => {
        if (!week) return;
        // sabit tekrarlayan görevleri ekle
        for (const r of RECURRING) {
            week.tasks.push({
                id: `${week.id}-${r.suffix}`, day: r.day, text: r.text, recurring: true
            });
        }
        weeks.push(week);
        week = null;
        counters = {};
    };

    for (const line of lines) {
        const mPhase = line.match(redcPhase);
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
            const parsed = parseTaskLine(mTask[1], week.id, counters);
            week.tasks.push(...parsed);
        }
    }
    closeWeek();

    const plan = {
        title: 'İngilizce Master Plan — B1’den C1’e (56 Hafta)',
        generatedFrom: 'data/source-plan.md',
        recurringNote:
            'Salı/Perşembe kelime tekrarı ve Pzt/Çar/Cum yeni kelime görevleri her haftaya '
            + 'sabit olarak eklenmiştir; haftalık olarak işaretlenir.',
        phases,
        weeks
    };

    writeFileSync(OUT, JSON.stringify(plan, null, 2) + '\n', 'utf8');

    const totalTasks = weeks.reduce((a, w) => a + w.tasks.length, 0);
    const noDay = weeks.reduce(
        (a, w) => a + w.tasks.filter((t) => !t.day).length, 0);
    console.log(`phases : ${phases.length}`);
    console.log(`weeks  : ${weeks.length}`);
    console.log(`tasks  : ${totalTasks} (gün etiketsiz: ${noDay})`);
    console.log('week list:');
    for (const w of weeks) {
        console.log(`  ${w.id.padEnd(8)} [${w.phaseId}] tasks=${String(w.tasks.length).padStart(2)}  ${w.title}`);
    }
};

main();
