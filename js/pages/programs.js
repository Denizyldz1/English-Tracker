"use strict";

/**
 * KTPrograms — ana ekran: Bugün paneli + istatistik çipleri + program kartları.
 *
 * DİKKAT: Görev ID'leri nokta içerebilir ("ielts.w1-pzt"); jQuery id-selector
 * kullanılmaz, elemana attr('id') / getElementById ile erişilir.
 */
const KTPrograms = (() => {

    const SELECTORS = {
        grid: '#programGrid',
        loading: '#loading',
        signOut: '#signOutBtn',
        avatar: '.js-avatar',
        todayPanel: '#todayPanel',
        todayGroups: '#todayGroups',
        todayEmpty: '#todayEmpty',
        todayDate: '.js-today-date',
        statStreak: '.js-stat-streak',
        statToday: '.js-stat-today',
        statWeek: '.js-stat-week',
        check: '#todayGroups .js-check'
    };

    const TPL = {
        program: '#tplProgram',
        todayGroup: '#tplTodayGroup',
        todayTask: '#tplTodayTask'
    };

    // getDay() sırasıyla: 0=Pazar ... 6=Cumartesi
    const DAY_LABELS = ['Paz', 'Pzt', 'Salı', 'Çar', 'Per', 'Cum', 'Cmt'];
    const WEEKEND = ['Cmt', 'Paz'];

    let programs = [];
    let plans = {};        // programId -> plan.json
    let doneRows = [];     // [{ task_id, updated_at }]
    let doneSet = new Set();

    // ─── Tarih/istatistik yardımcıları ─────────────────────────────
    const localDayKey = (date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    };

    const computeStreak = () => {
        const days = new Set(doneRows.map((r) => localDayKey(r.updated_at)));
        let streak = 0;
        const cursor = new Date();
        // bugün henüz görev yapılmadıysa seri dünden itibaren sayılır (gün bitmedi)
        if (!days.has(localDayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
        while (days.has(localDayKey(cursor))) {
            streak += 1;
            cursor.setDate(cursor.getDate() - 1);
        }
        return streak;
    };

    const startOfWeek = () => {
        const d = new Date();
        const diff = (d.getDay() + 6) % 7; // Pzt=0 ... Paz=6
        d.setDate(d.getDate() - diff);
        d.setHours(0, 0, 0, 0);
        return d;
    };

    const renderStats = () => {
        const todayKey = localDayKey(new Date());
        const weekStart = startOfWeek();
        const todayCount = doneRows.filter((r) => localDayKey(r.updated_at) === todayKey).length;
        const weekCount = doneRows.filter((r) => new Date(r.updated_at) >= weekStart).length;
        $(SELECTORS.statStreak).text(computeStreak());
        $(SELECTORS.statToday).text(todayCount);
        $(SELECTORS.statWeek).text(weekCount);
    };

    // ─── İlerleme kovalama (önek kuralı) ──────────────────────────
    const countDone = (program) => {
        if (program.idPrefix) {
            return [...doneSet].filter((id) => id.startsWith(program.idPrefix)).length;
        }
        return [...doneSet].filter((id) => !id.includes('.')).length;
    };

    // ─── Bugün paneli ──────────────────────────────────────────────
    const matchesToday = (day, label) => {
        if (!day) return false;
        if (day === 'Her gün') return true;
        if (day === 'Hafta içi') return !WEEKEND.includes(label);
        return day.split('/').map((d) => d.trim()).includes(label);
    };

    // Aktif hafta = plan sırasında ilk tamamlanmamış görevi olan hafta
    const findActiveWeek = (plan) =>
        plan.weeks.find((w) => w.tasks.some((t) => !doneSet.has(t.id))) ?? null;

    const renderTodayTask = (task) => {
        const $row = $($(TPL.todayTask).html().trim());
        const $check = $row.find('.js-check');
        $check.attr('id', `today-${task.id}`);
        $check[0].dataset.taskId = task.id;
        $check.prop('checked', doneSet.has(task.id));
        $row.find('.js-label').attr('for', `today-${task.id}`);
        $row.find('.js-day').text(task.day);
        $row.find('.js-text').text(task.text);
        $row.toggleClass('is-done', doneSet.has(task.id));
        return $row;
    };

    const renderTodayGroup = (program, week, tasks) => {
        const $group = $($(TPL.todayGroup).html().trim());
        $group.find('.today-group-head')
            .attr('href', `app.html?program=${encodeURIComponent(program.id)}`);
        $group.find('.js-icon').addClass(`bi ${program.icon}`);
        $group.find('.js-program').text(program.shortTitle);
        $group.find('.js-week').text(`Hafta ${week.no} · ${week.title}`);
        const $list = $group.find('.js-today-tasks');
        for (const t of tasks) $list.append(renderTodayTask(t));
        return $group;
    };

    const renderToday = () => {
        const now = new Date();
        const label = DAY_LABELS[now.getDay()];
        const weekday = now.toLocaleDateString('tr-TR', { weekday: 'long' });
        $(SELECTORS.todayDate).text(
            `${KTHelpers.formatDate(now.toISOString())} · ${weekday}`);

        const $groups = $(SELECTORS.todayGroups).empty();
        let any = false;
        let anyStarted = false;
        for (const program of programs) {
            const plan = plans[program.id];
            if (!plan) continue;
            // yalnızca BAŞLANMIŞ programlar (en az 1 görevi işaretli) panelde görünür
            if (countDone(program) === 0) continue;
            anyStarted = true;
            const week = findActiveWeek(plan);
            if (!week) continue; // program tamamlanmış
            const tasks = week.tasks.filter((t) => matchesToday(t.day, label));
            if (!tasks.length) continue;
            $groups.append(renderTodayGroup(program, week, tasks));
            any = true;
        }
        $(SELECTORS.todayEmpty)
            .text(anyStarted
                ? 'Bugün için planlı görev yok — dinlenme günü 🎉'
                : 'Henüz bir programa başlamadın. Aşağıdan bir program seç ve ilk görevini işaretle 🙂')
            .toggleClass('d-none', any);
        $(SELECTORS.todayPanel).removeClass('d-none');
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

    // ─── Bugün panelinden işaretleme ──────────────────────────────
    const applyToggleUi = (checkEl, checked) => {
        checkEl.checked = checked;
        $(checkEl).closest('.task-row').toggleClass('is-done', checked);
        renderStats();
        renderGrid(); // kart yüzdeleri canlı güncellensin
    };

    const updateLocalState = (taskId, checked) => {
        if (checked) {
            doneSet.add(taskId);
            doneRows.push({ task_id: taskId, updated_at: new Date().toISOString() });
        } else {
            doneSet.delete(taskId);
            doneRows = doneRows.filter((r) => r.task_id !== taskId);
        }
    };

    const handleToggle = () => {
        $(SELECTORS.todayGroups).on('change', '.js-check', async function () {
            const taskId = this.dataset.taskId;
            const checked = this.checked;
            updateLocalState(taskId, checked);
            applyToggleUi(this, checked); // optimistik
            try {
                await (checked ? KTData.markDone(taskId) : KTData.markUndone(taskId));
            } catch {
                updateLocalState(taskId, !checked); // hata KTData'da gösterildi, geri al
                applyToggleUi(this, !checked);
            }
        });
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
        const [programList, rows] = await Promise.all([
            KTData.loadPrograms(),
            KTData.getDoneRows()
        ]);
        programs = programList;
        doneRows = rows;
        doneSet = new Set(rows.map((r) => r.task_id));

        // Bugün paneli için plan içerikleri (paralel)
        const loaded = await Promise.all(
            programs.map((p) => KTData.loadPlan(p.planUrl).catch(() => null)));
        plans = {};
        programs.forEach((p, i) => { plans[p.id] = loaded[i]; });
    };

    const start = async () => {
        const session = await KTAuth.requireAuth();
        if (!session) return;
        renderUser();
        try {
            await loadAll();
            $(SELECTORS.loading).remove();
            renderStats();
            renderToday();
            renderGrid();
        } catch {
            KTSwal.error('Programlar yüklenemedi. Bağlantınızı kontrol edin.');
        }
        handleToggle();
        handleSignOut();
    };

    return { init: () => start() };

})();

$(() => KTPrograms.init());
