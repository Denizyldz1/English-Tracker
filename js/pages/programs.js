"use strict";

/**
 * KTPrograms — ana ekran: "Bugünkü görevler" paneli + program kartları.
 *
 * Aktif program: kullanıcı karttaki anahtarı açar (Supabase active_programs,
 * satır varsa aktif). Yalnız aktif programların planı yüklenir; her birinin
 * aktif haftasında (ilk tamamlanmamış hafta) bugüne düşen görevler panelde
 * toplanır ve oradan işaretlenebilir. Aktif kartlar listede üste alınır.
 *
 * DİKKAT: Görev ID'leri nokta içerebilir ("ielts.w1-pzt"); jQuery id-selector
 * kullanılmaz. İlerleme aidiyeti önek kuralıyla belirlenir: önek doluysa
 * startsWith(önek); İngilizce (önek '') için nokta İÇERMEYEN ID'ler.
 */
const KTPrograms = (() => {

    const SELECTORS = {
        grid: '#programGrid',
        gridTitle: '#programsTitle',
        loading: '#loading',
        signOut: '#signOutBtn',
        avatar: '.js-avatar',
        todayPanel: '#todayPanel',
        todayGroups: '#todayGroups',
        todayEmpty: '#todayEmpty',
        todayDate: '.js-today-date'
    };

    const TPL = {
        program: '#tplProgram',
        todayGroup: '#tplTodayGroup',
        todayTask: '#tplTodayTask'
    };

    // getDay() sırasıyla: 0=Pazar ... 6=Cumartesi
    const DAY_LABELS = ['Paz', 'Pzt', 'Salı', 'Çar', 'Per', 'Cum', 'Cmt'];
    const WEEKEND = ['Cmt', 'Paz'];

    const TEXT = {
        active: 'Aktif',
        passive: 'Pasif',
        setup: 'Aktif program özelliği için Supabase\'de active_programs tablosu gerekli '
            + '(README → Kurulum → Supabase adımındaki SQL).',
        noActive: 'Aktif program yok. Bir kartta "Pasif" düğmesine bas; '
            + 'o programın bugünkü görevleri burada toplanır.',
        restDay: 'Bugün için planlı görev yok — dinlenme günü 🎉'
    };

    let programs = [];
    const plans = {};          // programId -> plan.json (yalnız aktifler)
    let doneSet = new Set();
    let activeSet = new Set();
    let setupNeeded = false;   // active_programs tablosu henüz yok

    // ─── Yardımcılar ───────────────────────────────────────────────
    const fromTpl = (sel) => $($(sel).html().trim());
    const programHref = (program) => `app.html?program=${encodeURIComponent(program.id)}`;
    const isActive = (program) => activeSet.has(program.id);

    // İlerleme kovalama (önek kuralı)
    const countDone = (program) => {
        if (program.idPrefix) {
            return [...doneSet].filter((id) => id.startsWith(program.idPrefix)).length;
        }
        return [...doneSet].filter((id) => !id.includes('.')).length;
    };

    const ensurePlan = async (program) => {
        if (plans[program.id]) return plans[program.id];
        plans[program.id] = await KTData.loadPlan(program.planUrl).catch(() => null);
        return plans[program.id];
    };

    // ─── Bugünkü görevler ──────────────────────────────────────────
    const matchesToday = (day, label) => {
        if (!day) return false;
        if (day === 'Her gün') return true;
        if (day === 'Hafta içi') return !WEEKEND.includes(label);
        return day.split('/').map((d) => d.trim()).includes(label);
    };

    // Aktif hafta = plan sırasında ilk tamamlanmamış görevi olan hafta
    const findActiveWeek = (plan) =>
        plan.weeks.find((w) => w.tasks.some((t) => !doneSet.has(t.id))) ?? null;

    // Bugüne düşenler + gün işareti olmayan (takvim) görevlerden bitmemişler
    const pickTodayTasks = (week, label) => {
        const today = week.tasks.filter((t) => matchesToday(t.day, label));
        const weekly = week.tasks.filter((t) => !t.day && !doneSet.has(t.id));
        return [...today, ...weekly];
    };

    const renderTodayTask = (task) => {
        const $row = fromTpl(TPL.todayTask);
        const $check = $row.find('.js-check');
        $check.attr('id', `today-${task.id}`);
        $check[0].dataset.taskId = task.id;
        $check.prop('checked', doneSet.has(task.id));
        $row.find('.js-label').attr('for', `today-${task.id}`);
        $row.find('.js-day').text(task.day || 'Hafta');
        KTHelpers.linkifyInto($row.find('.js-text'), KTLang.pick(task, 'text'));
        $row.toggleClass('is-done', doneSet.has(task.id));
        if (task.recurring) $row.addClass('is-recurring');
        return $row;
    };

    const renderTodayGroup = (program, week, tasks) => {
        const $group = fromTpl(TPL.todayGroup);
        $group.find('.today-group-head').attr('href', programHref(program));
        $group.find('.js-icon').addClass(`bi ${program.icon}`);
        $group.find('.js-program').text(program.shortTitle);
        $group.find('.js-week').text(`Hafta ${week.no} · ${KTLang.pick(week, 'title')}`);
        const $list = $group.find('.js-today-tasks');
        for (const t of tasks) $list.append(renderTodayTask(t));
        return $group;
    };

    const todayEmptyText = (anyActive) => {
        if (setupNeeded) return TEXT.setup;
        return anyActive ? TEXT.restDay : TEXT.noActive;
    };

    const renderTodayDate = () => {
        const now = new Date();
        const weekday = now.toLocaleDateString('tr-TR', { weekday: 'long' });
        $(SELECTORS.todayDate).text(`${KTHelpers.formatDate(now.toISOString())} · ${weekday}`);
        return DAY_LABELS[now.getDay()];
    };

    const renderToday = () => {
        const label = renderTodayDate();
        const $groups = $(SELECTORS.todayGroups).empty();
        let any = false;
        for (const program of programs.filter(isActive)) {
            const plan = plans[program.id];
            const week = plan ? findActiveWeek(plan) : null;
            if (!week) continue; // plan yüklenemedi ya da program tamamlandı
            const tasks = pickTodayTasks(week, label);
            if (!tasks.length) continue;
            $groups.append(renderTodayGroup(program, week, tasks));
            any = true;
        }
        $(SELECTORS.todayEmpty)
            .text(todayEmptyText(activeSet.size > 0))
            .toggleClass('d-none', any);
        $(SELECTORS.todayPanel).removeClass('d-none');
    };

    // ─── Program kartları ──────────────────────────────────────────
    const setActiveUi = ($card, active) => {
        $card.toggleClass('is-active', active);
        $card.find('.js-active-btn')
            .attr('aria-pressed', String(active))
            .attr('title', active ? 'Aktif — kapatmak için tıkla' : 'Pasif — aktif yapmak için tıkla');
        $card.find('.js-active-label').text(active ? TEXT.active : TEXT.passive);
    };

    const renderProgram = (program) => {
        const done = countDone(program);
        const total = program.taskCount;
        const pct = total ? Math.min(100, Math.round((done / total) * 100)) : 0;

        const $card = fromTpl(TPL.program);
        $card.attr('data-program-id', program.id);
        $card.find('.js-title').attr('href', programHref(program))
            .text(KTLang.pick(program, 'title'));
        $card.find('.js-icon').addClass(`bi ${program.icon}`);
        $card.find('.js-desc').text(KTLang.pick(program, 'description'));
        $card.find('.js-duration').text(program.durationLabel);
        $card.find('.js-count').text(`${done}/${total} görev · %${pct}`);
        $card.find('.js-bar')
            .css('--progress', `${pct}%`)
            .attr('aria-valuenow', pct)
            .attr('aria-label', `${program.shortTitle} ilerlemesi`);
        setActiveUi($card, isActive(program));
        if (setupNeeded) {
            $card.find('.js-active-btn').prop('disabled', true).attr('title', TEXT.setup);
        }
        return $card;
    };

    // Aktifler üstte; geri kalan kayıt defteri sırasında (sort kararlıdır)
    const orderedPrograms = () =>
        [...programs].sort((a, b) => Number(isActive(b)) - Number(isActive(a)));

    const renderGrid = () => {
        const $grid = $(SELECTORS.grid).empty();
        for (const p of orderedPrograms()) $grid.append(renderProgram(p));
        $(SELECTORS.gridTitle).removeClass('d-none');
    };

    // ─── Aktif anahtarı ────────────────────────────────────────────
    const setActiveState = (programId, active) => {
        if (active) activeSet.add(programId);
        else activeSet.delete(programId);
    };

    const toggleActive = async (program, active) => {
        setActiveState(program.id, active);
        renderGrid(); // sıralama ve etiket anında değişsin
        try {
            await KTData.setProgramActive(program.id, active);
            if (active) await ensurePlan(program);
        } catch {
            setActiveState(program.id, !active); // hata KTData'da gösterildi, geri al
            renderGrid();
        }
        renderToday();
    };

    const handleActiveToggle = () => {
        $(SELECTORS.grid).on('click', '.js-active-btn', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const id = $(this).closest('.program-card').attr('data-program-id');
            const program = programs.find((p) => p.id === id);
            if (program) toggleActive(program, !isActive(program));
        });
    };

    // ─── Panelden işaretleme ───────────────────────────────────────
    const setDoneState = (taskId, checked) => {
        if (checked) doneSet.add(taskId);
        else doneSet.delete(taskId);
    };

    const applyToggleUi = (checkEl, checked) => {
        checkEl.checked = checked;
        $(checkEl).closest('.task-row').toggleClass('is-done', checked);
        renderGrid(); // kart yüzdeleri canlı güncellensin
    };

    const handleTaskToggle = () => {
        $(SELECTORS.todayGroups).on('change', '.js-check', async function () {
            const taskId = this.dataset.taskId;
            const checked = this.checked;
            setDoneState(taskId, checked);
            applyToggleUi(this, checked); // optimistik
            try {
                await (checked ? KTData.markDone(taskId) : KTData.markUndone(taskId));
            } catch {
                setDoneState(taskId, !checked);
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
        const [programList, doneRows, activeIds] = await Promise.all([
            KTData.loadPrograms(),
            KTData.getDoneRows(),
            KTData.getActivePrograms()
        ]);
        programs = programList;
        doneSet = new Set(doneRows.map((r) => r.task_id));
        setupNeeded = activeIds === null;
        const known = new Set(programs.map((p) => p.id));
        activeSet = new Set((activeIds ?? []).filter((id) => known.has(id)));
        // Yalnız aktif programların planı (paralel)
        await Promise.all(programs.filter(isActive).map(ensurePlan));
    };

    const start = async () => {
        const session = await KTAuth.requireAuth();
        if (!session) return;
        renderUser();
        KTLang.mountToggle('#langBtn');
        try {
            await loadAll();
            $(SELECTORS.loading).remove();
            renderToday();
            renderGrid();
        } catch {
            KTSwal.error('Programlar yüklenemedi. Bağlantınızı kontrol edin.');
        }
        handleActiveToggle();
        handleTaskToggle();
        handleSignOut();
    };

    return { init: () => start() };

})();

$(() => KTPrograms.init());
