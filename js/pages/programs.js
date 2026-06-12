"use strict";

/**
 * KTPrograms — ana ekran: program kartları ve ilerleme.
 *
 * DİKKAT: Görev ID'leri nokta içerebilir ("ielts.w1-pzt"); jQuery id-selector
 * kullanılmaz, elemana attr('id') / getElementById ile erişilir.
 */
const KTPrograms = (() => {

    const SELECTORS = {
        grid: '#programGrid',
        loading: '#loading',
        signOut: '#signOutBtn',
        avatar: '.js-avatar'
    };

    const TPL = {
        program: '#tplProgram'
    };

    let programs = [];
    let doneSet = new Set();

    // ─── İlerleme kovalama (önek kuralı) ──────────────────────────
    const countDone = (program) => {
        if (program.idPrefix) {
            return [...doneSet].filter((id) => id.startsWith(program.idPrefix)).length;
        }
        return [...doneSet].filter((id) => !id.includes('.')).length;
    };

    // ─── Program kartları ──────────────────────────────────────────
    const renderProgram = (program) => {
        const done = countDone(program);
        const total = program.taskCount;
        const pct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;

        const $card = $($(TPL.program).html().trim());
        $card.attr('data-program-id', program.id);
        $card.attr('href', `app.html?program=${encodeURIComponent(program.id)}`);
        $card.find('.js-icon').addClass(`bi ${program.icon}`);
        $card.find('.js-title').text(program.title);
        $card.find('.js-desc').text(program.description);
        $card.find('.js-duration').text(program.durationLabel);
        $card.find('.js-count').text(`${done}/${total} görev · %${pct}`);
        $card.find('.js-bar')
            .css('--progress', `${pct}%`)
            .attr('aria-valuenow', pct)
            .attr('aria-label', `${program.shortTitle} ilerlemesi`);
        return $card;
    };

    const renderGrid = () => {
        const $grid = $(SELECTORS.grid).empty();
        for (const p of programs) $grid.append(renderProgram(p));
    };

    // ─── Genel ─────────────────────────────────────────────────────
    const handleSignOut = () => {
        $(SELECTORS.signOut).on('click', () => {
            KTSwal.confirm('Çıkış yapılsın mı?', () => KTAuth.signOut());
        });
    };

    const renderUser = async () => {
        const email = await KTAuth.getUserEmail();
        $(SELECTORS.avatar).text(KTHelpers.getInitials(email)).attr('title', email);
    };

    const loadAll = async () => {
        const [programList, doneIds] = await Promise.all([
            KTData.loadPrograms(),
            KTData.getDoneTaskIds()
        ]);
        programs = programList;
        doneSet = new Set(doneIds);
    };

    const start = async () => {
        const session = await KTAuth.requireAuth();
        if (!session) return;
        renderUser();
        try {
            await loadAll();
            $(SELECTORS.loading).remove();
            renderGrid();
        } catch {
            KTSwal.error('Programlar yüklenemedi. Bağlantınızı kontrol edin.');
        }
        handleSignOut();
    };

    return { init: () => start() };

})();

$(() => KTPrograms.init());
