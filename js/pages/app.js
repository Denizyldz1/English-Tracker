"use strict";

const KTApp = (() => {

    const SELECTORS = {
        accordion: '#phaseAccordion',
        loading: '#loading',
        signOut: '#signOutBtn',
        avatar: '.js-avatar',
        overallBar: '.js-overall-bar',
        overallPct: '.js-overall-pct',
        overallCount: '.js-overall-count',
        check: '.js-check'
    };

    const TPL = { phase: '#tplPhase', week: '#tplWeek', task: '#tplTask' };

    let plan = null;
    let doneSet = new Set();

    // ─── Yardımcılar ───────────────────────────────────────────────
    const fromTpl = (sel) => $($(sel).html().trim());

    const setBar = ($bar, done, total) => {
        const pct = total ? Math.round((done / total) * 100) : 0;
        $bar.css('--progress', `${pct}%`).attr('aria-valuenow', pct);
        return pct;
    };

    const countChecked = ($checks) => $checks.filter((i, el) => el.checked).length;

    // ─── Render ────────────────────────────────────────────────────
    const renderTaskRow = (task) => {
        const $row = fromTpl(TPL.task);
        const $check = $row.find('.js-check');
        $check.attr('id', task.id).prop('checked', doneSet.has(task.id));
        $check[0].dataset.weekId = task.weekId;
        $check[0].dataset.phaseId = task.phaseId;
        $row.find('.js-label').attr('for', task.id);
        $row.find('.js-day').text(task.day || '•');
        $row.find('.js-text').text(task.text);
        $row.toggleClass('is-done', doneSet.has(task.id));
        if (task.recurring) $row.addClass('is-recurring');
        return $row;
    };

    const renderWeek = (week) => {
        const $card = fromTpl(TPL.week);
        const collapseId = `collapse-${week.id}`;
        $card.attr('data-week-id', week.id);
        $card.find('.week-head')
            .attr('data-bs-target', `#${collapseId}`)
            .attr('aria-controls', collapseId);
        $card.find('.week-body').attr('id', collapseId);
        $card.find('.js-no').text(`Hafta ${week.no}`);
        $card.find('.js-title').text(week.title);
        $card.find('.js-episode').text(week.episode ? `📺 ${week.episode}` : '');
        $card.find('.js-summary').text(week.summary || '');
        if (week.source) {
            $card.find('.js-source').text(week.source);
        } else {
            $card.find('.week-source').remove();
        }

        const $tasks = $card.find('.js-tasks');
        const $recurring = $card.find('.js-recurring');
        for (const t of week.tasks) {
            const ctx = { ...t, weekId: week.id, phaseId: week.phaseId };
            (t.recurring ? $recurring : $tasks).append(renderTaskRow(ctx));
        }
        return $card;
    };

    const renderPhase = (phase) => {
        const $item = fromTpl(TPL.phase);
        const collapseId = `collapse-${phase.id}`;
        $item.attr('data-phase-id', phase.id);
        $item.find('.accordion-button')
            .attr('data-bs-target', `#${collapseId}`)
            .attr('aria-controls', collapseId);
        $item.find('.accordion-collapse').attr('id', collapseId);
        $item.find('.js-title').text(phase.title);

        const $weeks = $item.find('.js-weeks');
        const weeks = plan.weeks.filter((w) => w.phaseId === phase.id);
        for (const w of weeks) $weeks.append(renderWeek(w));
        return $item;
    };

    const renderPlan = () => {
        const $acc = $(SELECTORS.accordion);
        for (const phase of plan.phases) $acc.append(renderPhase(phase));
        // İlk fazı açık başlat
        const $first = $acc.find('.phase-item').first();
        $first.find('.accordion-button').removeClass('collapsed').attr('aria-expanded', 'true');
        $first.find('.accordion-collapse').addClass('show');
    };

    // ─── İlerleme ──────────────────────────────────────────────────
    const recalcWeek = (weekId) => {
        const $card = $(`.week-card[data-week-id="${weekId}"]`);
        const $checks = $card.find(SELECTORS.check);
        const done = countChecked($checks);
        setBar($card.find('.js-bar'), done, $checks.length);
        $card.find('.week-count').text(`${done}/${$checks.length}`);
    };

    const recalcPhase = (phaseId) => {
        const $item = $(`.phase-item[data-phase-id="${phaseId}"]`);
        const $checks = $item.find(SELECTORS.check);
        $item.find('.phase-count').text(`${countChecked($checks)}/${$checks.length}`);
    };

    const recalcOverall = () => {
        const $checks = $(SELECTORS.check);
        const done = countChecked($checks);
        const pct = setBar($(SELECTORS.overallBar), done, $checks.length);
        $(SELECTORS.overallPct).text(`%${pct}`);
        $(SELECTORS.overallCount).text(`${done}/${$checks.length}`);
    };

    const recalcAll = () => {
        for (const w of plan.weeks) recalcWeek(w.id);
        for (const p of plan.phases) recalcPhase(p.id);
        recalcOverall();
    };

    // ─── Event'ler ─────────────────────────────────────────────────
    const applyToggleUi = (checkEl, checked) => {
        checkEl.checked = checked;
        $(checkEl).closest('.task-row').toggleClass('is-done', checked);
        recalcWeek(checkEl.dataset.weekId);
        recalcPhase(checkEl.dataset.phaseId);
        recalcOverall();
    };

    const handleToggle = () => {
        $(SELECTORS.accordion).on('change', SELECTORS.check, async function () {
            const taskId = this.id;
            const checked = this.checked;
            applyToggleUi(this, checked); // optimistik
            try {
                await (checked ? KTData.markDone(taskId) : KTData.markUndone(taskId));
            } catch {
                applyToggleUi(this, !checked); // hata KTData'da gösterildi, geri al
            }
        });
    };

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
    const loadAll = async () => {
        const [planData, doneIds] = await Promise.all([
            KTData.loadPlan(),
            KTData.getDoneTaskIds()
        ]);
        plan = planData;
        doneSet = new Set(doneIds);
    };

    const start = async () => {
        const session = await KTAuth.requireAuth();
        if (!session) return;
        renderUser();
        try {
            await loadAll();
        } catch {
            KTSwal.error('Veriler yüklenemedi. Supabase ayarını ve bağlantınızı kontrol edin.');
            return;
        }
        $(SELECTORS.loading).remove();
        renderPlan();
        recalcAll();
        handleToggle();
        handleSignOut();
    };

    return { init: () => start() };

})();

$(() => KTApp.init());
