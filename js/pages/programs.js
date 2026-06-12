"use strict";

const KTPrograms = (() => {

    const SELECTORS = {
        grid: '#programGrid',
        loading: '#loading',
        signOut: '#signOutBtn',
        avatar: '.js-avatar'
    };

    const TPL = { program: '#tplProgram' };

    // ─── İlerleme kovalama (önek kuralı) ──────────────────────────
    // Bir satır şu programa aittir: önek doluysa startsWith(önek);
    // İngilizce (önek '') için: nokta İÇERMEYEN tüm ID'ler (eski kayıtlar).
    const countDone = (doneIds, program) => {
        if (program.idPrefix) {
            return doneIds.filter((id) => id.startsWith(program.idPrefix)).length;
        }
        return doneIds.filter((id) => !id.includes('.')).length;
    };

    // ─── Render ────────────────────────────────────────────────────
    const renderProgram = (program, doneIds) => {
        const done = countDone(doneIds, program);
        const total = program.taskCount;
        const pct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;

        const $card = $($(TPL.program).html().trim());
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

    const renderGrid = (programs, doneIds) => {
        const $grid = $(SELECTORS.grid);
        for (const p of programs) $grid.append(renderProgram(p, doneIds));
    };

    // ─── Event'ler ─────────────────────────────────────────────────
    const handleSignOut = () => {
        $(SELECTORS.signOut).on('click', () => {
            KTSwal.confirm('Çıkış yapılsın mı?', () => KTAuth.signOut());
        });
    };

    const renderUser = async () => {
        const email = await KTAuth.getUserEmail();
        $(SELECTORS.avatar).text(KTHelpers.getInitials(email)).attr('title', email);
    };

    // ─── Akış ──────────────────────────────────────────────────────
    const start = async () => {
        const session = await KTAuth.requireAuth();
        if (!session) return;
        renderUser();
        try {
            const [programs, doneIds] = await Promise.all([
                KTData.loadPrograms(),
                KTData.getDoneTaskIds()
            ]);
            $(SELECTORS.loading).remove();
            renderGrid(programs, doneIds);
        } catch {
            KTSwal.error('Programlar yüklenemedi. Bağlantınızı kontrol edin.');
        }
        handleSignOut();
    };

    return { init: () => start() };

})();

$(() => KTPrograms.init());
